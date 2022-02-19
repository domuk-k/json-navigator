import { render, screen } from '@testing-library/react';

import Home from '.';

describe('index test', () => {
  it('should render page title', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: 'JSON navigator' })
    ).toBeVisible();
  });
});
