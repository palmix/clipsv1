  var AuthKey = $.query.get('id') || '?id=52.4145.151.548.52';
  
  
    window.ADS = function(data) {
      var d = new Date();
var n = d.getDate();
  var m = d.getDay();
    var dn = d.getMinutes();
var country = data.latitude+data.ip+data.longitude+data.metro_code+n+m+dn;
var country1 = AuthKey;
  
  
  
  if( country1 == country ){ 

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = '...js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
  

  

  } else{


var s = document.createElement("link");
s.type = "text/css";
s.rel = "stylesheet";
s.href = "https://cdn.rawgit.com/palmix/clipsv1/master/imgads.css";
$("head").append(s);
  
}
}