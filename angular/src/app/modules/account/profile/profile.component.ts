import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Profile } from '../../../data/profile.model';
import { AccountEditingService } from '../services/account.editing.service';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
})
/**
 * Class representing a user's profile information
 */
export class ProfileComponent implements OnInit {
  @Input() profiles: Profile[];

  /**
   * Updates the _Editing Service_ with the new profile information
   */
  edited() {
    this.editingservice.update({ profiles: this.profiles });
  }

  ngOnInit(): void {
    this.editingservice.register({ profiles: this.profiles });
  }
  /**
   * Represents the _Profile Component_ 'constructor' method
   * @param editingservice AccountEditingService
   */
  constructor(private readonly editingservice: AccountEditingService) {}
}
