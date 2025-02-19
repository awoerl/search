import { create } from "zustand";

interface SearchQuery {
  searchText?: string;
  areaId?: number;
  keywordId?: number;
  language?: string;
  page?: number;
  count?: number;
  sort?: string;
}

interface SearchQueryStore {
  searchQuery: SearchQuery;
  setSearchText: (searchText: string) => void;
  setAreaId: (areaId?: number) => void;
  setKeywordId: (keywordId: number) => void;
  setLanguage: (language: string) => void;
  setPage: (page: number) => void;
  setCount: (count: number) => void;
  setSort: (sort: string) => void;
 }

const useSearchQueryStore = create<SearchQueryStore>(set => ({
  searchQuery: {},
  setSearchText: (searchText) => set(() => ({ searchQuery: {searchText}})),
  setAreaId: (areaId) => set(store => ({searchQuery: {...store.searchQuery, areaId}})),
  setKeywordId: (keywordId) => set(store => ({searchQuery: {...store.searchQuery, keywordId}})),
  setLanguage: (language) => set(store => ({searchQuery: {...store.searchQuery, language}})),
  setPage: (page) => set(store => ({searchQuery: {...store.searchQuery, page}})),
  setCount: (count) => set(store => ({searchQuery: {...store.searchQuery, count}})),
  setSort: (sort) => set(store => ({searchQuery: {...store.searchQuery, sort}})),
}));    

export default useSearchQueryStore;
