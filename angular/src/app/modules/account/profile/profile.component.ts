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

  edited() {
    this.editingservice.update({ profiles: this.profiles });
  }

  ngOnInit(): void {
    this.editingservice.subject().subscribe({
      next: (v) =>
        v == 'assemble' ? this.editingservice.update({ profiles: this.profiles }) : null,
    });
  }
  constructor(private editingservice: EditingService) {}
}
