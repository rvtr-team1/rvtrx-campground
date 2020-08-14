import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { ProfileComponent } from './profile.component';
import { GenericEditingService } from '../../../services/editable/generic-editing.service';
import { EditedAccount } from 'src/app/data/edited-account.type';
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  const profiles = [
    {
      id: '',
      email: '',
      name: {
        id: '',
        family: '',
        given: '',
      },
      phone: '',
    },
  ];
  const AccountEditingServiceStub = {
    PayloadEmitter: new Subject(),
    register: () => {},
  };
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [{ provide: GenericEditingService, useValue: AccountEditingServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.profiles = profiles;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #editMode', () => {
    const el = fixture.debugElement.componentInstance;
    expect(el.editMode).toBe(false, 'off at first');
    fixture.debugElement.query(By.css('i')).nativeElement.click();
    fixture.detectChanges();
    expect(el.editMode).toBe(true, 'on after click');
  });
});
