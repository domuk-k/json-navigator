import { LoadedJSONProvider } from '@/context/loadedJSON';
import { render, screen } from '@testing-library/react';

import Home from '.';

describe('index test', () => {
  it('should render page title', () => {
    render(
      <LoadedJSONProvider>
        <Home />
      </LoadedJSONProvider>
    );
    expect(
      screen.getByRole('heading', { name: 'JSON navigator' })
    ).toBeVisible();
  });
});
