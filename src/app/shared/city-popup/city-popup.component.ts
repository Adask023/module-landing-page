import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-popup',
  templateUrl: './city-popup.component.html',
  styleUrls: ['./city-popup.component.scss'],
})
export class CityPopupComponent implements OnInit {
  @Input() cityName: string = '';
  @Input() mapURL: string = 'Not found';

  constructor() {}

  ngOnInit(): void {}
}
