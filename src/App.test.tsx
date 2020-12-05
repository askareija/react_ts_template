/*  * Main react app
    * Author : Aden Aziz Hasnayakin
    * Created at: Jum'at, 04 Desember 2020 - 10:49 WIB
*/

import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
