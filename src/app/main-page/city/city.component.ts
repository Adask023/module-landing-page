import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  popupShow: boolean = false;
  cityUrl: string = '';

  constructor() {}

  ngOnInit(): void {}

  showPopup(cityName: string, photoUrl: string) {
    this.popupShow = true;
    console.log('popup show');
    console.log(cityName);
    console.log(photoUrl);
  }

  closePopup() {
    this.popupShow = false;
  }
}
