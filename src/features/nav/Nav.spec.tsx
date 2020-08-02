import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { StyleProviders } from 'testing';
import { paths } from 'router';

import Nav from './Nav';

test.each([
  paths.moviesList,
  paths.somethingWentWrong,
  paths.movieDetails('1'),
])(`"Back to dashboard" button should be displayed for %p`, async (path) => {
  const { getByTestId } = render(
    <StyleProviders>
      <MemoryRouter initialEntries={[path]}>
        <Nav />
      </MemoryRouter>
    </StyleProviders>
  );

  await waitFor(() =>
    expect(getByTestId('back-to-dashboard-button')).toBeInTheDocument()
  );
});

test(`"Back to dashboard" button shouldn't be displayed for root`, async () => {
  const { queryByTestId } = render(
    <StyleProviders>
      <MemoryRouter initialEntries={[paths.root]}>
        <Nav />
      </MemoryRouter>
    </StyleProviders>
  );

  await waitFor(() =>
    expect(queryByTestId('back-to-dashboard-button')).not.toBeInTheDocument()
  );
});
