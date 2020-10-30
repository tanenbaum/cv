# cv

My very simple CV builder. It's not intended for general use, but you might find parts of the implementation useful for your own CV. I want a DRY CV, where the static parts are enshrined somewhere so that I can create a custom CV around this information

I've used LaTeX plenty of times in the past, but it was always heavy going and a little awkward if using Windows (I don't, anymore). I wanted to use markdown with a basic data source for those things that rarely change (jobs, education etc.).

Common parts of the CV body are described in `static/cv.yaml`. This was a JSON document previously, but it's not quite as friendly with newlines. The markdown is preprocessed with handlebars.

See the `Makefile` for example commands.

## Components

- `yaml` - parsing static cv info.
- `marked` - markdown to html conversion.
- `handlebars` - markdown/html templating.
- `puppeteer` - render generated html and print to pdf.