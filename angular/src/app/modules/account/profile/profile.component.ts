import { Component, Input, OnInit, Inject } from '@angular/core';
import { Profile } from '../../../data/profile.model';
import { Account } from '../../../data/account.model';
import { GenericEditingService } from '../../../services/editable/generic-editing.service';
import { ACCOUNT_EDITING_SERVICE } from '../../account/account-editing.token';

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
  constructor(
    @Inject(ACCOUNT_EDITING_SERVICE)
    private readonly editingService: GenericEditingService<Partial<Account>>
  ) {}
}
