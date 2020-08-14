import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  // TODO provide dummy data for mock service injections
  const testForm = {
    value: {
      adults: '',
      children: '',
      location: '',
      checkin: '',
      checkout: '',
    },
  } as NgForm;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [SearchBarComponent],
    }).compileComponents();

    TestBed.inject(HttpClient);
    TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    spyOn(component.isSearched, 'emit');
    spyOn(component.searchResults, 'emit');
    
    component.onSubmit(testForm).then(() => {
      expect(component.isSearched.emit).toHaveBeenCalled();
      expect(component.searchResults.emit).toHaveBeenCalled();
    });
  });
});
