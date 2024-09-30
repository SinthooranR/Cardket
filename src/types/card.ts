import { ICategory } from './category';

export interface ICard {
  id: string;
  name: string;
  price: number;
  category: ICategory;
  releaseDate: string;
  cardCode: string; //Temporary type
  imageUrl: string;
  numberOfListings: number;
  productDetails?: any; //Temporary type
  marketPriceHistory?: any; //Temporary type
  snapshot?: any; //Temporary type
  redirectUrl: string;
}
