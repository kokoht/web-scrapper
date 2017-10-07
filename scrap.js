var page = require('webpage').create();
var url = 'https://www.aliexpress.com/'
// var url = `https://id.jobsdb.com/ID/EN/Search/FindJobs?KeyOpt=COMPLEX&JSRV=1&RLRSF=1&JobCat=1&Locations=219&JSSRC=HPSS`


// var system = require('system').args
// var id = ssystem.args[1]
page.clipRect = {
  // top: 14,
  // left: 3,
  width: 1200,
  height: 700
};
var idProduct = "32544859436"
page.onConsoleMessage = function(msg) {
  console.log('console: ' + msg);
};

var result = {}
page.open(url, function(status) {
  console.log("page opened!");
  if (status === "success") {
    console.log("proses functions after got status succes");
    result._status = status
    console.log(result);
    page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', function() {
      page.onLoadFinished = function() {
        console.log("onload page finished");
        result.product_id = idProduct
        result.product_name = page.evaluate(function() {
          return document.getElementsByClassName("detail-wrap")[0].childNodes[1].innerText
        })
        result.price= page.evaluate(function() {
        //   var manage = document.getElementsByClassName("p-price-title")[0].offsetParent.outerText.split('price')
        //   var manage2 = manage.split
          return document.getElementsByClassName("p-price-title")[0].offsetParent.outerText
        })


        result.date_time = new Date()
        result.dataText = page.evaluate(function() {
            return document.getElementsByClassName('detail')[0].innerText
        })

        console.log('--------content---------')
        // console.log(JSON.parse(result));
        console.log(JSON.stringify(result));
        console.log('--------content---------')

        page.render("hasil_search.png")
        console.log("render image after search button klik done..");
        phantom.exit()
      }
      page.evaluate(function(idProduct) {
        // var idProduct = "32544859436"
        $("#search-key").val(idProduct)
        $("#form-searchbar > div.searchbar-operate-box > input").click()
      },idProduct)
      console.log("insert value id and click search...");
      page.render("before_search.png")
    })
  } else {
    console.log("failled: "+ error);
    handlerError()
  }
})

function handlerError() {
  page.onResourceError = function(resourceError) {
    console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
    console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
  };
}
