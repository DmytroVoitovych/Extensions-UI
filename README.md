# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./preview.jpg)



### Links

- Solution URL: [GitHub](https://github.com/DmytroVoitovych/Extensions-UI)
- Live Site URL: [Live Page](https://dmytrovoitovych.github.io/Extensions-UI/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Anime.js](https://reactjs.org/) - JS library for animation




### What I learned

Transform your junior-level projects into professional showcases! By incorporating real browser extension detection, I've elevated a simple project into something truly remarkable. Navigate through CORS challenges effortlessly with proxy server techniques while mastering responsive grids and eye-catching animations. The exclusive Firefox-detection CSS method I've developed gives you unparalleled browser-specific customization power. See the game-changing code below that will revolutionize your cross-browser styling approach!

Firefox detection via CSS, see below:


```css
 @supports (-moz-user-select: none) {
  <!--Styles will be applied only for Firefox -->
  }
```

### Continued development

For my next challenge, I hope to work on an advanced project that allows me to leverage the complete power of Vue.js and its rich ecosystem.



### Useful resources

- [Detection algorithm](https://github.com/abrahamjuliot/creepjs/issues/106) - This helped me to implement extensions detection. 
- [Responsive grid](https://www.youtube.com/watch?v=CHULPvkXIRo) - This is an amazing video from Kevin Powell to make responsive grid. 



## Author

- Website - [Dmytro Voitovych](https://portfolio-dmytrovoitovych.vercel.app/)
- Frontend Mentor - [@dmytrovoitovych](https://www.frontendmentor.io/profile/DmytroVoitovych)