import type { Keyword } from "@/data/types";

/* Callbacks threaded down from ProjectDetail into the inventory rows. */
export interface InventoryActions {
  // theme
  createCluster: (theme?: string) => void;
  renameTheme: (theme: string) => void;
  deleteTheme: (theme: string) => void;
  // cluster
  editCluster: (clusterId: string) => void;
  deleteCluster: (clusterId: string) => void;
  // secondary keyword
  createSecondary: (clusterId: string, primaryIndex: number) => void;
  editSecondary: (clusterId: string, primaryIndex: number, secondaryIndex: number) => void;
  deleteSecondary: (
    clusterId: string,
    primaryIndex: number,
    secondaryIndex: number
  ) => void;
  // article actions
  writeOrView: (clusterId: string, primary: Keyword) => void;
  // toggles
  toggleTheme: (themeId: string) => void;
  toggleCluster: (clusterId: string) => void;
}

export interface MerchantActions {
  createMerchant: () => void;
  editMerchant: (merchantId: string) => void;
  deleteMerchant: (merchantId: string) => void;
  createMerchantKeyword: (merchantId: string) => void;
  editMerchantKeyword: (merchantId: string, keywordIndex: number) => void;
  deleteMerchantKeyword: (merchantId: string, keywordIndex: number) => void;
  openBuilder: (merchantId: string) => void;
  toggleMerchant: (merchantId: string) => void;
}
