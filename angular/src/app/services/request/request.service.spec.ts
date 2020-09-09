import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { RequestService } from './request.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URLS } from 'src/app/data/url.model';
import { Image } from 'src/app/data/image.model';

describe('RequestService', () => {
  let httpclient: HttpClient;
  let service: RequestService;
  let httpTestCtrl = HttpTestingController;

  const img: Image = {
    regular: "http://placecorgi.com/250"
  }

  const imgObj: URLS = {
    urls: img
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RequestService]
    });
    service = TestBed.inject(RequestService);
  });

  beforeEach(() => {
    service = TestBed.get(RequestService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should test RequestService.getImageUrl', fakeAsync(() => {
    let req: TestRequest;

    // service.url ="http://placecorgi.com/250";

    const result = service.getImageURL().subscribe();

    expect(result).toBe(imgObj.urls.regular);

    tick();

    // req = httpTestCtrl.expectOne('test');

    // req.flush('enter expectation');
  }));
});
