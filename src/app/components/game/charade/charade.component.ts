import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charade',
  templateUrl: './charade.component.html',
  styleUrls: ['./charade.component.css']
})
export class CharadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonLabel: String = 'Next'
  charadeNumber: String = '1'
  charadeText: String = 'The more you take, the more you leave behind.';
}
