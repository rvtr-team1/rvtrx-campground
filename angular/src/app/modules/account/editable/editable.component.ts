import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uic-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
})
export class EditableComponent implements OnInit {
  constructor() {}

  @Input() data: string;
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;
  ngOnInit() {}

  onFocusOut(e: Event) {
    const target = e.target as HTMLInputElement;
    console.log(target);
    this.editMode = false;
    this.data = target.value;
    this.dataChange.emit(this.data);
  }
}
