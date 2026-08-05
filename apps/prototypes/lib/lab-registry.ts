import { readFileSync } from "node:fs";
import path from "node:path";
import { parse } from "acorn";

export interface LabPrototype {
  id: string;
  name: string;
  category: string;
  description?: string;
  src?: string;
  address?: string;
  maturity?: string;
  ownerGroup?: string;
  navHidden?: boolean;
  tools?: unknown[];
}

let cached: LabPrototype[] | null = null;

function parseStoreRegistry(): LabPrototype[] {
  const storePath = path.resolve(process.cwd(), "../../assets/store.js");
  const source = readFileSync(storePath, "utf8");
  const ast = parse(source, { ecmaVersion: "latest", sourceType: "script" }) as any;
  const declaration = ast.body.find(
    (node: any) =>
      node?.type === "VariableDeclaration" &&
      node.declarations?.some((decl: any) => decl?.id?.name === "PROTOTYPES")
  );

  const init = declaration?.declarations?.find((decl: any) => decl?.id?.name === "PROTOTYPES")?.init;

  if (!init || init.type !== "ArrayExpression") {
    throw new Error("Unable to locate PROTOTYPES array in assets/store.js");
  }

  const arrayText = source.slice(init.start, init.end);
  const parsed = new Function(`return (${arrayText});`)() as LabPrototype[];
  return parsed.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    description: item.description,
    src: item.src,
    address: item.address,
    maturity: item.maturity,
    ownerGroup: item.ownerGroup,
    navHidden: item.navHidden,
    tools: Array.isArray(item.tools) ? item.tools : undefined,
  }));
}

export function getLabRegistry(): LabPrototype[] {
  if (!cached) cached = parseStoreRegistry();
  return cached;
}

export function getLabGroupOrder(category: string): number {
  const order: Record<string, number> = {
    MiniWeb: 0,
    Widget: 1,
    MoSpark: 2,
    Platform: 3,
    Other: 4,
  };

  return order[category] ?? 99;
}
