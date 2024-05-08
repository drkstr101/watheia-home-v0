import { render } from '@testing-library/react';

import Page from '../app/[[...slug]]/page';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Page
        params={{
          slug: '',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
