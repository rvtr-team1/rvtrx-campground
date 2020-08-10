import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import ValidationConfig from './editable.validation.config';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'uic-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
})
export class EditableComponent implements OnInit {
  constructor() {}

  @Input() data: string;
  @Input() pattern: RegExp;
  @Input() ErrorMessage: string;
  @Input() Type: string;
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;
  error = false;
  valid = false;

  ngOnInit() {
    if (this.Type) {
      const config = ValidationConfig[this.Type];
      this.pattern = config.pattern;
      this.ErrorMessage = config.ErrorMessage;
    }
  }

  onFocusOut(e: Event) {
    const reg = new RegExp(this.pattern);
    const target = e.target as HTMLInputElement;
    const valid = reg.test(target.value);
    if (!valid) {
      this.error = true;
      this.valid = false;
    } else {
      this.error = false;
      this.valid = true;
      this.editMode = false;
      this.data = target.value;
      this.dataChange.emit(this.data);
    }
  }
}
