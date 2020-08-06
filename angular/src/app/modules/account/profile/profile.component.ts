import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../../data/profile.model';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input() profiles: Profile[];

  constructor() {}

  ngOnInit(): void {}
} 
