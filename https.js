const http = require('http')
const https = require('https')
const URL = require('url').URL


// const url = 'http://example.org'
const crawlUrl = `https://id.jobsdb.com/ID/EN/Search/FindJobs?KeyOpt=COMPLEX&JSRV=1&RLRSF=1&JobCat=1&Locations=219&JSSRC=HPSS`
const parseUrl = new URL ( crawlUrl )
const crawlMethod = parseUrl.protocol === 'https:' ? https : http

crawlMethod.get( crawlUrl, (res) => {
  res.setEncoding('utf8')
  let rawData = ''
  res.on('data', (chunk) => {
    rawData += chunk
  })
  res.on('end', () => {
    console.log(rawData);
  })
})
