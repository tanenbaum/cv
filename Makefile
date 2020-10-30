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
	node ./src/app.js template $< $(YAML) --html $(STATIC)/$*.html > $@

.PHONY: pdf
pdf: $(OUTDIR)/pdf.html

.PHONY: lint
lint:
	npm run-script lint