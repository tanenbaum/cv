# cv

My very simple CV builder. It's not intended for general use, but you might find parts of the implementation useful for your own CV. 

I've used LaTeX plenty of times in the past, but it was always heavy going and a little awkward on Windows. I wanted to use markdown with a basic data source for those things that rarely change (jobs, education etc.).

Common parts of the CV body are described in `static/cv.yaml`. This was a JSON document previously, but it's not quite as friendly with newlines. The markdown is preprocessed with handlebars.

`npm start` will run the CV conversion process and generate necessary outputs.