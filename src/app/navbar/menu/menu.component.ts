import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuList: any = [
    { path: '/users', name: 'users' },
    { path: '/dashboard', name: 'dashboard' },
    { path: '/login', name: 'login' },
  ];
}
