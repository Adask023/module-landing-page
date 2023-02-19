import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  public userData: any = {};

  ngOnInit(): void {
    this.userData = localStorage.getItem('user');
    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
  }

  logout() {
    localStorage.removeItem('user');
    this.userData = null;
    this.messageService.add({
      severity: 'success',
      summary: 'Wylogowano pomyślnie',
    });
  }
}
