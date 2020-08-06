import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uic-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
})
export class EditableComponent implements OnInit {
  @Input() data: string;
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;
  constructor() {}

  ngOnInit() {}

  onFocusOut(e: Event) {
    this.editMode = false;
    this.data = (e.target as HTMLInputElement).value;
    this.dataChange.emit(this.data);
  }
}
