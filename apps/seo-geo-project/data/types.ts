export interface SecondaryKeyword {
  kw: string;
  vol: number;
}

export interface Keyword {
  kw: string;
  vol: number;
  intent: "info" | "comm" | "trans";
  status: "none" | "outline" | "outline-review" | "draft" | "published";
  rank: number | null;
  isPrimary?: boolean;
  secondaries?: SecondaryKeyword[];
}

export interface Cluster {
  id: string;
  name: string;
  funnel: "tofu" | "mofu" | "bofu";
  vol: number;
  keywords: Keyword[];
  theme?: string;
}

export interface MerchantEntity {
  id: string;
  name: string;
  category: string;
  location: string;
  primary: { kw: string; vol: number };
  secondaries: SecondaryKeyword[];
  contentStatus: string;
  context: string;
  topicCluster?: string;
}

export interface Project {
  id: string;
  name: string;
  division: string;
  pillar?: string;
  pillarName?: string;
  priority?: string;
  microsite: string;
  vol: number;
  sov: number | null;
  targetSov: number;
  clusters: Cluster[];
  isDistributed?: boolean;
  merchants?: MerchantEntity[];
  _crudReady?: boolean;
  _merchantCrudReady?: boolean;
}

export interface ProjectContext {
  description: string;
  valueProp: string;
  audience: string;
  userProblem: string;
  growthOutcome: string;
  northStar: string;
}
