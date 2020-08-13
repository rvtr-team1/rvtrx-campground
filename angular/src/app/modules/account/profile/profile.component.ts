import { Component, Input, OnInit } from '@angular/core';
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

  editMode = false;
  titleEdit = 'Click To Edit Your Profile';

  /**
   * Updates the _Editing Service_ with the new profile information
   */
  edited() {
    this.editingService.update({ profiles: this.profiles });
  }
  ngOnInit(): void {}
  /**
   * Represents the _Profile Component_ 'constructor' method
   * @param editingService AccountEditingService
   */
  constructor(private readonly editingService: AccountEditingService) {}
}
