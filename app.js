var page = require('webpage').create();


var h1 = page.open('https://id.jobsdb.com/ID/EN/Search/FindJobs?KeyOpt=COMPLEX&JSRV=1&RLRSF=1&JobCat=1&Locations=219&JSSRC=HPSS', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    var isitext = page.evaluate(function () {
      var listJob = document.querySelectorAll('.result-sherlock-cell')
      var array = [];


      // optional listJob.length as i
      for (var i = 1 >>> 0; i--;) {
        array[i] = {
          title: listJob[1].children[1].children[0].innerText,
          namaPerusahaan: listJob[1].children[1].children[1].children[0].innerText,
          lokasi: listJob[1].children[1].children[1].children[0].innerText,
          link: listJob[1].children[1].children[0].children[0].href
        }
      }
      return array;
    });
    console.log('isi text nya ', JSON.stringify(isitext))
  }
  phantom.exit();
});
