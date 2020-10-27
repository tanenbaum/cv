OUTDIR = build
STATIC = static
YAML = $(STATIC)/cv.yaml

$(OUTDIR)/%.html: $(STATIC)/%.md
	node ./src/app.js template $^ $(YAML) > $@