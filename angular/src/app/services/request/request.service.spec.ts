import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RequestService } from './request.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URLS } from 'src/app/data/url.model';
import { Image } from 'src/app/data/image.model';

describe('RequestService', () => {
  let httpclient: HttpClient;
  let service: RequestService;
  let httpTestCtrl = HttpTestingController;

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
  
  it('should test RequestService.get', async () => {
    // const img: Image = {
    //   regular: ""
    // }
  
    // const imgObj: URLS = {
    //   urls: img
    // }
    
    const result = await service.getImageURL().subscribe();
    expect(result).toBe(String);
  })
});
