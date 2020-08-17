import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditableComponent } from './editable.component';

describe('EditableComponent', () => {
  let component: EditableComponent;
  let fixture: ComponentFixture<EditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditableComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on input focusout should change value and trigger an event', () => {
    component.data = 'test';
    dispatchEvent(new Event('focusout'));
    fixture.detectChanges();
    expect(component.data).toBe('test', 'on focusout');
  });

  it('on input, focusout should change value and trigger an event', () => {
    component.dataChange.subscribe((e: string) => {
      expect(component.data).toBe(e, 'on focusout');
    });
    component.editMode = true;
    fixture.detectChanges();
    const ele = fixture.debugElement.nativeElement;
    const inp = ele.querySelector('input');
    inp.value = 'test';
    dispatchEvent(new Event('focusout'));
    fixture.detectChanges();
  });

  it('should adapt to the profile from setting Type', () => {
    const comp = fixture.debugElement.componentInstance;
    comp.setValidationType('name');
    fixture.whenStable().then(() => {
      expect(component.errorMessage).toBe('Names cannot contain punctuation, spaces, or numbers');
      expect(component.pattern).toEqual(/^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/);
    });
  });
});
