import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ICard } from '../../../types/card';
import { testCards } from '../../../testData/cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  cards: ICard[] = [];

  getCards() {
    console.log('CARDS', this.cards);
    this.cards = testCards;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCards();
  }
}
