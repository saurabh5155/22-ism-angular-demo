import { TestBed } from '@angular/core/testing';

import { TokenGenrationInterceptor } from './token-genration.interceptor';

describe('TokenGenrationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenGenrationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenGenrationInterceptor = TestBed.inject(TokenGenrationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
