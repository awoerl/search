
export default interface Listing {
  ID: number;
  Label: string;
  Description: string;
  ThumbUrl: string;
  ImageUrl: string;
  Area: string;
  Category: string;
  Infos: {
    'Brennwert in kcal': string;
    Sterne: string;
    Gesamtzeit: string;
    Schwierigkeitsgrad: string;
    'Rezept ID': string;
    Tags: string;
  };
}
