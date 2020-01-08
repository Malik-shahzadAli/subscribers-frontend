import { TestBed } from '@angular/core/testing';

import { FilesListService } from './files-list.service';

describe('FilesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilesListService = TestBed.get(FilesListService);
    expect(service).toBeTruthy();
  });
});
