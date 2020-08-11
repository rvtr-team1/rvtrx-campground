import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
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

  it('#clicked() should toggle #editMode', () => {
    const el = fixture.debugElement.componentInstance;
    expect(el.editMode).toBe(false, 'off at first');
    fixture.debugElement.query(By.css('div')).nativeElement.click();
    fixture.detectChanges();
    expect(el.editMode).toBe(true, 'on after click');
  });

  it('#clicked() should display an input', () => {
    const el = fixture.debugElement.componentInstance;
    expect(el.editMode).toBe(false, 'off at first');
    fixture.debugElement.query(By.css('div')).nativeElement.click();
    fixture.detectChanges();
    const i = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(i).toBeTruthy();
  });

  it('on input focusout should change value and trigger an event', () => {
    const el = fixture.debugElement.componentInstance;
    expect(el.editMode).toBe(false, 'off at first');
    fixture.debugElement.query(By.css('div')).nativeElement.click();
    fixture.detectChanges();
    const i = fixture.debugElement.query(By.css('input')).nativeElement;
    i.value = 'test';
    i.dispatchEvent(new Event('focusout'));
    expect(el.data).toBe('test', 'on focusout');
  });
});
