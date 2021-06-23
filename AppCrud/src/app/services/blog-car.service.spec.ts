import { TestBed } from '@angular/core/testing';

import { BlogCarService } from './blog-car.service';

describe('BlogCarService', () => {
  let service: BlogCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
