import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Northwind1Service } from './northwind1.service';

describe('Northwind1Service', () => {
  let service: Northwind1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(Northwind1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
