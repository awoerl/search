export default interface Facet {
  FacetLabel: string;
  FacetType: string;
  FacetUnit: string;
  FacetValues: {
    key: string;
    val: string;
  }[];
}
