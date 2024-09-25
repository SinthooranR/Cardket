import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule],
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
      },
      {
        label: 'Cards',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Card Game Set',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Card Gallery',
            icon: 'pi pi-server',
          },
          {
            label: 'Price Guide',
            icon: 'pi pi-dollar',
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
