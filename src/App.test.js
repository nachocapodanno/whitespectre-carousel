import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders four blocks per page', () => {
  render(<App />);
  let blocksNumber  = screen.getAllByAltText('Tennis Shoe');
  expect(blocksNumber.length).toEqual(4);
});

test('disable prev button on first page', () => {
  render(<App />);
  let leftArrow = screen.getAllByRole('button').find(value => value.className === 'leftArrow') 
  expect(leftArrow).toHaveAttribute('disabled')
});

test('disable next button on last page', () => {
  render(<App />);
  
  // moving to second page clicking on right arrow
  let rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow');
  userEvent.click(rightArrow);
  // moving to last page clicking on right arrow
  rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow');
  userEvent.click(rightArrow);
  
  rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow')
  expect(rightArrow).toHaveAttribute('disabled')
});
