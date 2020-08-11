import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }  from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms';
import { NewaddressformComponent } from './newaddressform.component';

describe('NewaddressformComponent', () => {
  let component: NewaddressformComponent;
  let fixture: ComponentFixture<NewaddressformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewaddressformComponent],
      imports:[FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaddressformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return form controls from getters', () => {
    const getters = [component.City, component.Country, component.PostalCode, component.StateProvince, component.Street];
    for (const g of getters) {
      expect(g instanceof FormControl).toBeTruthy();
    }
  });

  it('it should display the modal on button click', () =>{
    fixture = TestBed.createComponent(NewaddressformComponent);
    fixture.whenStable().then(()=>{
    const button = fixture.debugElement.query(By.css('button'))
    fixture.detectChanges()
    button.nativeElement.click();
    expect(fixture.componentInstance.showModal).toBeTrue()
    })
    
  })
});
