import { ICategory } from './category';

export interface IListing {
  id: string;
  name: string;
  category: ICategory;
  condition: string;
  price: number;
  quantity: number;
}
