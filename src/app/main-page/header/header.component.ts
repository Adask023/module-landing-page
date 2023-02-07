import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  public userData: any = {};

  ngOnInit(): void {
    this.userData = localStorage.getItem('user');
    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
  }

  logout() {
    console.log('wylogowano');
    localStorage.removeItem('user');
    this.userData = null;
  }
}
