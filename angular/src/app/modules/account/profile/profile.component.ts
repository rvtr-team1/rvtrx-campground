import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../../data/profile.model';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input() profiles: Profile[];
  @Output() profileEdited = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'profiles': {
            debugger;
            this.profileEdited.emit();
          }
        }
      }
    }
  }
}
