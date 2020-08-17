import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { Component, NO_ERRORS_SCHEMA, Input } from '@angular/core';
import { ACCOUNT_EDITING_SERVICE } from '../account-editing.token';
import { Subject } from 'rxjs';
import { EditableComponent } from '../editable/editable.component';

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
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  @Component({ selector: 'uic-editable', template: '' })
  class EditableStubComponent {
    @Input('data')
    data: string;
    @Input('editMode')
    editMode = false;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent, EditableStubComponent],
      providers: [
        {
          provide: ACCOUNT_EDITING_SERVICE,
          useFactory: () => {
            const subj = new Subject();
            function update(e: any): void {
              subj.next(e);
            }
            return { subj, update };
          },
        },
      ],
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
    const editingService = TestBed.get(ACCOUNT_EDITING_SERVICE);
    component.profiles = profiles;
    fixture.detectChanges();
    editingService.subj.subscribe((e: any) => {
      expect(e.profiles).toBeTruthy();
    });
    component.edited();
  });
});
