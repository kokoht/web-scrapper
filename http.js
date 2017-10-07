const http = require('http')
// const url = 'http://example.org'
// https blm bisa..
// const url = `https://id.jobsdb.com/ID/EN/Search/FindJobs?KeyOpt=COMPLEX&JSRV=1&RLRSF=1&JobCat=1&Locations=219&JSSRC=HPSS`

http.get(url, (res) => {
  res.setEncoding('utf8')
  let rawData = ''
  res.on('data', (chunk) => {
    rawData += chunk
  })
  res.on('end', () => {
    console.log(rawData);
  })
})
