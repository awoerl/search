
export default interface Listing {
  SearchAreaID: number;
  ID: number;
  Class: string;
  Label: string;
  Description: string;
  ThumbUrl: string;
  ImageUrl: string;
  Links: {
    'Download': string;
    'View': string;
  };
  Area: string;
  Category: string;
  Infos: { [key: string]: string };
}
