import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ViewMode = "card" | "thumb";

interface ViewModeState {
  viewMode: ViewMode;
  toggleViewMode: () => void;
  isCardMode: () => boolean;
  isThumbMode: () => boolean;
}

export const useViewModeStore = create<ViewModeState>()(
  persist(
    (set, get) => ({
      viewMode: "card",

      toggleViewMode: () =>
        set((state) => ({
          viewMode: state.viewMode === "card" ? "thumb" : "card",
        })),

      isCardMode: () => get().viewMode === "card",
      isThumbMode: () => get().viewMode === "thumb",
    }),
    { name: "view-mode-storage" }
  )
);
