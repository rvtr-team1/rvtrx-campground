import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ValidationConfig from './editable.validation.config';

@Component({
  selector: 'uic-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss'],
})
/**
 * Class representing an _Editable Component_
 */
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

  /**
   * Used to add custom validation messages based on user input
   */
  ngOnInit() {
    if (this.Type) {
      this.SetValidationType(this.Type);
    }
  }

  /**
   * Setter function for Validation Type
   * @param Type string
   */
  public SetValidationType(Type: string): void {
    const config = ValidationConfig[Type];
    this.pattern = config.pattern;
    this.ErrorMessage = config.ErrorMessage;
  }
  /**
   * Emits a change event if user input is valid
   * @param e Event
   */
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
