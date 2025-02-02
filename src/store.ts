import { create } from "zustand";

interface SearchQuery {
  searchText?: string;
  areaId?: number;
  language?: string;
  page?: number;
  count?: number;
}

interface SearchQueryStore {
  searchQuery: SearchQuery;
  setSearchText: (searchText: string) => void;
  setAreaId: (areaId: number) => void;
  setLanguage: (language: string) => void;
  setPage: (page: number) => void;
  setCount: (count: number) => void;
 }

const useSearchQueryStore = create<SearchQueryStore>(set => ({
  searchQuery: {},
  setSearchText: (searchText) => set(() => ({ searchQuery: {searchText}})),
  setAreaId: (areaId) => set(store => ({searchQuery: {...store.searchQuery, areaId}})),
  setLanguage: (language) => set(store => ({searchQuery: {...store.searchQuery, language}})),
  setPage: (page) => set(store => ({searchQuery: {...store.searchQuery, page}})),
  setCount: (count) => set(store => ({searchQuery: {...store.searchQuery, count}})),
}));    

export default useSearchQueryStore;
