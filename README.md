# Whitespectre Carousel

## Requirements

- Build a carousel.

- By default display 4 blocks at once.

- Navigation is made with next and previous buttons.

- Next button should be disabled, if user is at the very end of the carousel.

- Previous button should be disabled, if user is at the very beginning of carousel.

- Clicking on next/previous buttons shows next/prev 4 carousel blocks accordingly.

- The source of carousel block is endpoint on server that return following JSON:

```javascript
[{title: "First Block", images: [url1, url2, url3]}, {title: "Second Block", images: [url7, url8]}
,...]
```

- Display a random image for each block from the set of images.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
I've created some cases to test our carousel.

## Prod enviroment
Open [Whitespectre Carousel](https://vibrant-golick-44d933.netlify.app/) to view it in Netlify.

## Author

Ignacio Capodanno