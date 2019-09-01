## TODO

- [X] Set up custom build system using Webpack to transpile JS and build CSS
- [X] Get Reveal.js working as a third-party package
- [ ] Get real-time transcription working via the Web Speech API

## Technical details

* Built with [Reveal.js](https://github.com/hakimel/reveal.js/)
* Uses Marcy Sutton's [reveal-a11y](https://github.com/marcysutton/reveal-a11y) plugin for improved accessibility, including:
  * Hiding offscreen slides using `display: none`
  * Dynamic `aria-label`s on all slide `<section>` tags for better landmark browsing experience
  * Dynamic skip link to table of contents (link list of slide titles that jump to each slide).