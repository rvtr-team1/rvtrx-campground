import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Profile } from '../../../data/profile.model';
import { AccountComponent } from '../account/account.component';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'uic-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  constructor() {}
  @Input() profiles: Profile[];
  private readonly accountService: AccountService;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'profiles': {
            debugger;
            this.updateProfile(change.currentValue);
          }
        }
      }
    }
  }

  public updateProfile(profile: Profile[]): void {
    const update = new AccountComponent(this.accountService);
    update.updateAccountProfile(profile);
  }
}
