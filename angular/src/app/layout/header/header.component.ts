import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uic-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  links = [
    { text: 'account', url: '/account' },
    { text: 'booking', url: '/booking' },
    { text: 'lodging', url: '/lodging' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
