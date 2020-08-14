import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { ProfileComponent } from './profile.component';
import { GenericEditingService } from '../../../services/editable/generic-editing.service';
import { NgModule, InjectionToken } from '@angular/core';

describe('ProfileComponent', () => {
  const profiles = [
    {
      id: '',
      email: '',
      givenName: '',
      familyName: '',
      phone: '',
      type: '',
    },
  ];
  const ACCOUNT_EDITING_SERVICE = new InjectionToken<GenericEditingService<Partial<Account>>>(
    'AccountEditingService'
  );
  const mockEditingService = {
    payloadEmitter: new Subject(),
  };
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [{ provide: ACCOUNT_EDITING_SERVICE, useValue: undefined }],
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
