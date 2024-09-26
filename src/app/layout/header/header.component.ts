import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Cards',
        icon: 'pi pi-search',
        routerLink: '/cards',
        items: [
          {
            label: 'Card Game Set',
            icon: 'pi pi-bolt',
            routerLink: '/game_set',
          },
          {
            label: 'Card Gallery',
            icon: 'pi pi-server',
            routerLink: '/gallery',
          },
          {
            label: 'Price Guide',
            icon: 'pi pi-dollar',
            routerLink: '/price_guide',
          },
        ],
      },

      {
        label: 'Account',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user-edit',
            routerLink: '/profile',
          },
          {
            label: 'Logout',
            icon: 'pi pi-spin pi-cog',
            command: () => {
              console.log('Logged Out');
            },
          },
        ],
      },
    ];
  }
}
