const fs = require('fs');
const path = require('path');

// Đường dẫn file store.js gốc và file prototypes.ts đích
const storeJsPath = path.join(__dirname, '../assets/store.js');
const targetTsPath = path.join(__dirname, '../apps/prototypes/src/data/prototypes.ts');

console.log('Đang đồng bộ dữ liệu từ store.js sang prototypes.ts...');

// Mock window & DOM objects cho môi trường Node.js
global.window = global;
global.document = {
  addEventListener: () => {},
  getElementById: () => ({ innerHTML: '', style: {} }),
  querySelector: () => null,
  querySelectorAll: () => []
};
global.location = { hash: '', search: '', pathname: '/' };
global.history = { replaceState: () => {} };

try {
  // Đọc nội dung file store.js
  let content = fs.readFileSync(storeJsPath, 'utf8');

  // Tạo một sandbox để chạy code JS của store.js và lấy các biến ra ngoài
  const sandbox = {};
  
  // Clean một số đối tượng DOM nếu có lỗi
  // File store.js chủ yếu định nghĩa mảng tĩnh nên eval là an toàn
  const scriptContent = content + `
    module.exports = {
      PROTOTYPES,
      GROUP_ORDER,
      GROUP_LABEL,
      GROUP_ITEM_ORDER,
      GROUP_SUMMARY,
      CAT_COLOR
    };
  `;

  // Chạy module ảo
  const m = new module.constructor();
  m.paths = module.paths;
  m._compile(scriptContent, storeJsPath);
  
  const registry = m.exports;

  // Generate file prototypes.ts
  const output = `// ─── Prototype Registry (Auto-generated from assets/store.js) ────────────
// KHÔNG CHỈNH SỬA FILE NÀY TRỰC TIẾP. Hãy chỉnh sửa assets/store.js và chạy: node scripts/sync-registry.js

export interface Prototype {
  id: string;
  name: string;
  category: string;
  maturity?: string;
  description: string;
  jtbd?: string;
  northStar?: string;
  loop?: string;
  hypothesis?: string;
  value?: string;
  gate?: string;
  src?: string;
  address?: string;
  ownerGroup?: string;
  navigationOnly?: boolean;
  view?: string;
  tools?: Prototype[];
}

export type PrototypeTool = Prototype;

export const PROTOTYPES: Prototype[] = ${JSON.stringify(registry.PROTOTYPES, null, 2)};

export const GROUP_ORDER = ${JSON.stringify(registry.GROUP_ORDER, null, 2)} as const;

export const GROUP_LABEL: Record<string, string> = ${JSON.stringify(registry.GROUP_LABEL, null, 2)};

export const GROUP_ITEM_ORDER: Record<string, string[]> = ${JSON.stringify(registry.GROUP_ITEM_ORDER, null, 2)};

export const GROUP_SUMMARY: Record<string, { eyebrow: string; title: string; description: string; examples: string }> = ${JSON.stringify(registry.GROUP_SUMMARY, null, 2)};

export const CAT_COLOR: Record<string, { bg: string; text: string }> = ${JSON.stringify(registry.CAT_COLOR, null, 2)};

// ─── Helper: lấy đường dẫn demo gốc ──────────────────────────────────────────
export function getDemoSrc(proto: Prototype | PrototypeTool): string {
  if (proto.src) return \`/\${proto.src}\`;
  return \`/demos/\${proto.id}.html\`;
}

// ─── Helper: tìm prototype hoặc tool theo ID (đệ quy) ─────────────────────────
export function findPrototypeById(id: string): Prototype | PrototypeTool | undefined {
  function search(items: (Prototype | PrototypeTool)[]): Prototype | PrototypeTool | undefined {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.tools && item.tools.length > 0) {
        const found = search(item.tools);
        if (found) return found;
      }
    }
    return undefined;
  }
  return search(PROTOTYPES);
}

// ─── Helper: lấy mảng phẳng toàn bộ IDs (cha + con) ──────────────────────────
export function getAllPrototypeIds(): string[] {
  const ids: string[] = [];
  function collect(items: (Prototype | PrototypeTool)[]) {
    for (const item of items) {
      ids.push(item.id);
      if (item.tools && item.tools.length > 0) {
        collect(item.tools);
      }
    }
  }
  collect(PROTOTYPES);
  return ids;
}

// ─── Helper: nhóm prototypes theo category đúng thứ tự ─────────────────────
export function getGroupedPrototypes() {
  const byCategory = new Map<string, Prototype[]>();
  PROTOTYPES.forEach((p) => {
    const list = byCategory.get(p.category) || [];
    list.push(p);
    byCategory.set(p.category, list);
  });

  return GROUP_ORDER.map((groupName) => {
    const items = byCategory.get(groupName) || [];
    const order = GROUP_ITEM_ORDER[groupName] || [];
    // Sắp xếp theo thứ tự đã định
    items.sort((a, b) => {
      const ai = order.indexOf(a.id);
      const bi = order.indexOf(b.id);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
    return {
      name: groupName,
      label: GROUP_LABEL[groupName] || groupName,
      summary: GROUP_SUMMARY[groupName],
      items,
      color: CAT_COLOR[groupName] || CAT_COLOR.Other,
    };
  });
}
`;

  fs.writeFileSync(targetTsPath, output, 'utf8');
  console.log('✓ Đồng bộ thành công! File lưu tại: ' + targetTsPath);

} catch (err) {
  console.error('Lỗi khi đồng bộ:', err);
  process.exit(1);
}
