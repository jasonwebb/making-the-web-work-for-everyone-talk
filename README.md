## TODO

- [ ] Set up custom build system using Webpack to transpile JS and build CSS
- [ ] Get Reveal.js working as a third-party package
- [ ] Get real-time transcription working via Google Speech-to-Text API
  - [ ] Set up Google Cloud account and activate API

## Installation

1. Install dependencies
   ```
   npm install
   ```

1. Install [SoX](http://sox.sourceforge.net/)

1. 

1. Serve the presentation and monitor source files for changes
   ```
   npm start
   ```

## Technical details

* Built with [Reveal.js](https://github.com/hakimel/reveal.js/)
* Uses Marcy Sutton's [reveal-a11y](https://github.com/marcysutton/reveal-a11y) plugin for improved accessibility, including:
  * Hiding offscreen slides using `display: none`
  * Dynamic `aria-label`s on all slide `<section>` tags for better landmark browsing experience
  * Dynamic skip link to table of contents (link list of slide titles that jump to each slide).