## TODO

- [ ] Set up custom build system using Webpack to transpile JS and build CSS
- [ ] Get Reveal.js working as a third-party package
- [ ] Get real-time transcription working via Google Speech-to-Text API
  - [ ] Set up Google Cloud account and activate API

## Installation

1. Install [SoX](http://sox.sourceforge.net/)

1. Follo the ["Before you begin" steps in the quickstart guide](https://cloud.google.com/speech-to-text/docs/quickstart-client-libraries#before-you-begin) to set up a Google Cloud Platform account

1. Enable the Speech-to-Text API for that account.

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/#install_the_latest_cloud_sdk_version)

1. Install dependencies for this project
   ```
   npm install
   ```

1. Serve the presentation and monitor source files for changes
   ```
   npm run serve
   ```

## Technical details

* Built with [Reveal.js](https://github.com/hakimel/reveal.js/)
* Uses Marcy Sutton's [reveal-a11y](https://github.com/marcysutton/reveal-a11y) plugin for improved accessibility, including:
  * Hiding offscreen slides using `display: none`
  * Dynamic `aria-label`s on all slide `<section>` tags for better landmark browsing experience
  * Dynamic skip link to table of contents (link list of slide titles that jump to each slide).