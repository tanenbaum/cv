#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { processMarkdown } = require('./markdown.js')
const { htmlToPdf } = require('./pdf.js')

yargs(hideBin(process.argv))
  .command('template <markdown> [yaml..]', 'template with markdown contents and yaml data inputs and produce html file',
    (yargs) => {
      yargs.positional('markdown', {
        describe: 'markdown file to process',
        string: true,
        normalize: true
      }).positional('yaml', {
        describe: 'yaml input files for template data',
        normalize: true,
        string: true
      }).option('html', {
        string: true,
        description: 'html file to use as markdown template',
        normalize: true
      })
    }, (argv) => {
      console.log(processMarkdown(argv.markdown, argv.yaml, argv.html))
    })
  .command('pdf <html>', 'convert a html file to a pdf document',
    (yargs) => {
      yargs.positional('html', {
        describe: 'html file to convert',
        string: true
      }).option('pdf', {
        alias: 'p',
        describe: 'path to pdf output file',
        demandOption: true,
        string: true,
        normalize: true
      }).option('margins', {
        describe: 'margin size',
        string: true
      })
    }, async (argv) => {
      await htmlToPdf(argv.html, argv.pdf, argv.margins)
    })
  .demandCommand()
  .help()
  .parse()
