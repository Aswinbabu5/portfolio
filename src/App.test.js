import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header and brand', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/aswin babu/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
