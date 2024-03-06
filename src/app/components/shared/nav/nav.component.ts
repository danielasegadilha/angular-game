import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  brandHeight: String = '80px'
  linkText: String[] = ['Restart', 'How to play']
  iconNav: String[] = ['restart_alt', 'info']
}
