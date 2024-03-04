import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  @Input() label: String = '';
  @Input() backgroundColor: String = '';
  @Input() textColor: String = '';
}
