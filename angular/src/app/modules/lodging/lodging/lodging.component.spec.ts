import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LodgingComponent } from './lodging.component';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivatedRouteStub {
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  private _testParams: {};
  get testParams() {
    return this._testParams;
  }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }
}

describe('LodgingComponent', () => {
  let mockParams, mockActivatedRoute: any;
  let component: LodgingComponent;
  let fixture: ComponentFixture<LodgingComponent>;

  beforeEach(async(() => {
    mockActivatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      declarations: [LodgingComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingComponent);
    component = fixture.componentInstance;
    mockActivatedRoute.testParams = { id: '1' };
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // /**
  //  * tests the handle error function in lodging-home component
  //  */
  // it('should get handleError', () => {
  //   expect(component.handleError).toBeTruthy();
  // });

  // /**
  //  * tests the handle error function to see if a 0 status code is sent it responds with a
  //  * unable to connect to server message
  //  */
  it('should return unable to connect to server message', () => {
    const errorMsg = new HttpErrorResponse({
      error: '0 error',
      status: 0,
      statusText: 'unable to connect to server',
    });

    component.handleError(errorMsg);
    expect(component.errorMessage).toBeTruthy();
    expect(component.errorMessage).toEqual('Unable to connect to server');
  });

  // /**
  //  * tests the handle error function to see if it stores the correct status code in the errorMessage
  //  */
  // it('should return status code in errorMessage', () => {
  //   const errorMsg = new HttpErrorResponse({
  //     error: '404 error',
  //     status: 404,
  //     statusText: 'Not Found',
  //   });

  //   component.handleError(errorMsg);
  //   expect(component.errorMessage).toBeTruthy();
  //   expect(component.errorMessage).toEqual('404');
  // });
});
