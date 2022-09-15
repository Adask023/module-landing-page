import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent implements OnInit {
  @Input() color: string = 'black';
  @Input() text: string = 'base text';

  constructor() {}

  ngOnInit(): void {}
}
