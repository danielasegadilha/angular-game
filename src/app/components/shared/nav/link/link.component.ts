import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() link: String = '';
  @Input() icon: String = '';
}
