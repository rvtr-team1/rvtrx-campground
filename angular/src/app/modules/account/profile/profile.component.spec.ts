import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { Component, Input } from '@angular/core';
import { ACCOUNT_EDITING_SERVICE } from '../account-editing.token';
import { Subject, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
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

  const editingService = {
    update(e: any) {
      return of(e);
    },
  };

  @Component({ selector: 'uic-editable', template: '' })
  class EditableStubComponent {
    @Input()
    data: string;
    @Input()
    editMode = false;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent, EditableStubComponent],
      providers: [{ provide: ACCOUNT_EDITING_SERVICE, useValue: editingService }],
      schemas: [NO_ERRORS_SCHEMA],
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

  it('should call the editing service', () => {
    component.profiles = profiles;
    fixture.detectChanges();
    editingService.update({ profiles }).subscribe((e: any) => {
      expect(e.profiles).toBeTruthy();
    });
    component.edited();
  });
});
