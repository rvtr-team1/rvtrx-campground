import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../data/address.model';
import { EditingService } from '../editingservice.service';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  constructor(private editingservice: EditingService) {}
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();

  ngOnInit(): void {
    this.editingservice.subject().subscribe({
      next: (v) => (v == 'assemble' ? this.editingservice.update({ Address: this.address }) : null),
    });
  }

  edited() {
    this.editingservice.update({ Address: this.address });
  }
}
