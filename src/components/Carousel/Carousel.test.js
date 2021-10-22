import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Carousel from '.';
import data from '../../assets/data.json'

test('by default display 4 blocks at once', () => {
  render(<Carousel items={data} itemsNumber={4}/>);
  
  let blocksNumber  = screen.getAllByAltText('Tennis Shoe');
  expect(blocksNumber.length).toEqual(4);
});

test('clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly', () => {
  render(<Carousel items={data} itemsNumber={4}/>);
  
  let pages = []
  let isDisabled = false;
  do {
    pages.push(screen.getAllByAltText('Tennis Shoe'))
    let rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow');
    isDisabled = rightArrow.hasAttribute('disabled');
    userEvent.click(rightArrow);
  } while (!isDisabled);

  pages.map(value => {
    return expect(value.length).toEqual(4);
  })
});

test('previous button should be disabled, if user is at the very beginning of carousel', () => {
  render(<Carousel items={data} itemsNumber={4}/>);
  
  let leftArrow = screen.getAllByRole('button').find(value => value.className === 'leftArrow') 
  expect(leftArrow).toHaveAttribute('disabled')
});

test('next button should be disabled, if user is at the very end of the carousel', () => {
  render(<Carousel items={data} itemsNumber={4}/>);
  
  // moving to second page clicking on right arrow
  let rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow');
  userEvent.click(rightArrow);
  // moving to last page clicking on right arrow
  rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow');
  userEvent.click(rightArrow);
  
  rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow')
  expect(rightArrow).toHaveAttribute('disabled')
});

test('display a random image for each block from the set of images', () => {
  render(<Carousel items={data} itemsNumber={4}/>);

  let prevImage = screen.getAllByAltText('Tennis Shoe')[0];
  // moving to second page clicking on right arrow
  let rightArrow = screen.getAllByRole('button').find(value => value.className === 'rightArrow');
  userEvent.click(rightArrow);

  let currentImage = screen.getAllByAltText('Tennis Shoe')[0];

  expect(currentImage.getAttribute('src')).not.toMatch(prevImage.getAttribute('src'));
});