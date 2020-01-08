import { TestBed } from '@angular/core/testing';

import { SuscribersListService } from './suscribers-list.service';

describe('SuscribersListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuscribersListService = TestBed.get(SuscribersListService);
    expect(service).toBeTruthy();
  });
});
