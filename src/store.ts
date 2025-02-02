import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  areaId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId?: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setAreaId: (areaId?: number) => void;
 }

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: {searchText: searchText}})),
  setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
  setPlatformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
  setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}})),
  setAreaId: (areaId) => set(store => ({gameQuery: {...store.gameQuery, areaId}})),
}));    

export default useGameQueryStore;
