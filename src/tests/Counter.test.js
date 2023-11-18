// import necessary react testing library helpers here
// import the Counter component here
import { getByTestId, fireEvent, render, screen, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter'

let increaseCount;
let decreaseCount;

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/ >)
  increaseCount = screen.getByRole('button', { name: '+' })
  decreaseCount = screen.getByRole('button', { name: '-' })
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent(0)
});

test('clicking + increments the count', () => {
  expect(increaseCount).toBeDefined();
  fireEvent.click(increaseCount);
  expect(screen.getByTestId('count')).toHaveTextContent(1)
});

test('clicking - decrements the count', () => {
  expect(increaseCount).toBeDefined();
  fireEvent.click(increaseCount);
  expect(screen.getByTestId('count')).toHaveTextContent(1)
  fireEvent.click(decreaseCount);
  expect(screen.getByTestId('count')).toHaveTextContent(0)
});
