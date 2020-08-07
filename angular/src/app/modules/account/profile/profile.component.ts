import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../../data/profile.model';
import { EditingService } from '../editingservice.service';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input() profiles: Profile[];
  @Output('ngModelChange') profileEdited = new EventEmitter();

  constructor(private service: EditingService) {}
  log() {
    this.service.update(this.profiles);
    console.log(this.profiles);
  }
  ngOnChanges() {
    console.log(this.profiles);
  }
  ngOnInit(): void {}

  /* ngOnChanges(changes: SimpleChanges) {
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
  } */
}
