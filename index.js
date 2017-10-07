var page = require('webpage').create();
var url = 'https://id.jobsdb.com/ID/EN/Search/FindJobs?KeyOpt=COMPLEX&JSRV=1&RLRSF=1&JobCat=1&Locations=219&JSSRC=HPSS'


page.open(url, function(status) {
  console.log('------------------------');
  console.log("Status: " + status);
  if(status === "success") {
    page.render('gambar.png');
  }
  phantom.exit();
});
