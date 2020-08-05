import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uic-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
})
export class EditableComponent implements OnInit {
  @Input() data: string;
  @Output() focusOut: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;
  constructor() {}

  ngOnInit() {}

  onFocusOut(e: Event) {
    this.editMode = false;
    this.data = (<HTMLInputElement>e.target).value;
    this.focusOut.emit(this.data);
  }
}
