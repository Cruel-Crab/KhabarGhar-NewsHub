import { TestBed } from '@angular/core/testing';

import { ServerFileService } from './server-file.service';

describe('ServerFileService', () => {
  let service: ServerFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
