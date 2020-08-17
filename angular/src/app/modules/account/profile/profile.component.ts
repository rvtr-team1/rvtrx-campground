import { Component, Input } from '@angular/core';
import { Profile } from '../../../data/profile.model';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  @Input() profiles: Profile[];
}
