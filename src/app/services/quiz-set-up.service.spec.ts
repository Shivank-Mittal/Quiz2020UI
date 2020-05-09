import { TestBed } from '@angular/core/testing';

import { QuizSetUPService } from './quiz-set-up.service';

describe('QuizSetUPService', () => {
  let service: QuizSetUPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizSetUPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
