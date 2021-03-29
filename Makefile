OUTDIR = build
STATIC = static
YAML = $(STATIC)/cv.yaml
HTMLTEMPLATE = $(STATIC)/template.html

.PRECIOUS: $(OUTDIR)/%.css
$(OUTDIR)/%.css: $(STATIC)/%.css
	mkdir -p $(OUTDIR)
	cp $< $@

# build html assuming static files %.md %.css and %.html where % is file name
# assumes %.html references ./%.css with relative path
$(OUTDIR)/%.html: $(STATIC)/%.md $(OUTDIR)/%.css
	node ./src/app.js template $< $(YAML) $(PRIVATE) --html $(STATIC)/$*.html > $@

# create pdf by first creating static html/css files from templates
$(OUTDIR)/%.pdf: $(OUTDIR)/%.html
	node ./src/app.js pdf $< -p $@

.PHONY: pdf
pdf: $(OUTDIR)/pdf.pdf

.PHONY: github-docs
github-docs: OUTDIR = docs
github-docs: $(OUTDIR)/index.html

.PHONY: lint
lint:
	npm run-script lint