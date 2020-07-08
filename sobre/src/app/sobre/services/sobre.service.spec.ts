import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { SobreService } from './sobre.service';
import { SOBRE_CONST } from './sobre.const';
import { SOBRES_MOCK } from 'src/app/mocked-api/mocked-data/sobres-mock';

describe('SobreService', () => {
  const urlConst = SOBRE_CONST.URLS;
  let sobreSvc: SobreService,
      httpTestCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SobreService
      ]
    });

    sobreSvc = TestBed.get(SobreService);
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: SobreService = TestBed.get(SobreService);
    expect(service).toBeTruthy();
  });

  describe('Get Sobres Suite', () => {
    let testRequest: TestRequest;

    afterEach(() => {
      httpTestCtrl.verify();
    });

    it('should get all sobres', () => {
      sobreSvc.getSobres().subscribe((sobres) => {
        expect(sobres.length).toBeGreaterThan(0);
      });

      testRequest = httpTestCtrl.expectOne(urlConst.DEV.SOBRES);
      expect(testRequest.request.method).toBe('GET');

      testRequest.flush(SOBRES_MOCK);
    });
  });
});
