import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { GameSetComponent } from './pages/game-set/game-set.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PriceGuideComponent } from './pages/price-guide/price-guide.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'game_set', component: GameSetComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'price_guide', component: PriceGuideComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'account', component: AccountComponent },
];
