const { resolve } = require('path')
const { existsSync } = require('fs')
const { pathToFileURL } = require('url')
const puppeteer = require('puppeteer')

exports.htmlToPdf = async function (htmlPath, pdfPath, margins = '1cm') {
  const path = resolve(htmlPath)
  if (!existsSync(path)) {
    throw new Error(`HTML file path ${path} does not exist`)
  }
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(pathToFileURL(path).toString(), { waitUntil: 'networkidle0', timeout: 5000 })
  await page.pdf({
    path: pdfPath,
    margin: {
      top: margins,
      right: margins,
      bottom: margins,
      left: margins
    },
    format: 'A4'
  })
  await browser.close()
}
