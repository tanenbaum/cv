#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
  .command('template <markdown> [yaml..]', 'template with markdown contents and yaml data inputs and produce html file',
    (yargs) => {
      yargs.positional('markdown', {
        describe: 'markdown file to process',
        string: true
      }).positional('yaml', {
        describe: 'yaml input files for template data',
        string: true
      })
    }, (argv) => {
      console.log(argv)
    })
  .command('pdf <html>', 'convert a html file to a pdf document',
    (yargs) => {
      yargs.positional('html', {
        describe: 'html file to convert',
        string: true
      })
    }, (argv) => {
      console.log(argv)
    })
  .demandCommand()
  .help()
  .parse()
