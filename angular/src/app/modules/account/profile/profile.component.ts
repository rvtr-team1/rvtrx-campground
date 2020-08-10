import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Profile } from '../../../data/profile.model';
import { AccountEditingService } from '../services/account.editing.service';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input() profiles: Profile[];

  edited() {
    this.editingservice.update({ profiles: this.profiles });
  }
  ngOnInit(): void {
    this.editingservice.register({ profiles: this.profiles });
  }
  constructor(private readonly editingservice: AccountEditingService) {}
}
