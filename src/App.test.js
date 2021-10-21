import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders four blocks per page', () => {
  render(<App />);
  let blocksNumber  = screen.getAllByAltText('Tennis Shoe');
  expect(blocksNumber.length).toEqual(4);
});

test('only visible next button on first page', () => {
  render(<App />);
  let element = screen.getAllByRole('button');
  expect(element.length).toEqual(1);
  expect(element[0]).toHaveClass('rightArrow')
});

test('only visible prev button on last page', () => {
  render(<App />);
  
  // moving to second page clicking on right arrow
  userEvent.click(screen.getByRole('button'))
  // moving to last page clicking on right arrow
  let rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow')
  userEvent.click(rightArrow)
  
  let element = screen.getAllByRole('button');
  expect(element.length).toEqual(1);
  expect(element[0]).toHaveClass('leftArrow')
});