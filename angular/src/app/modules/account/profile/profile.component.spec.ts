import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { ProfileComponent } from './profile.component';
import { AccountEditingService } from '../services/account.editing.service';

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
      providers: [{ provide: AccountEditingService, useValue: AccountEditingServiceStub }],
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
});
