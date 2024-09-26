import { ICard } from './card';

export interface ICart {
  id: string;
  cards: ICard[];
  totalCost: number;
  lastModification: string;
}
