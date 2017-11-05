var data = []

$.getJSON("http://freegeoip.net/json/", function(data) {
    var country_code = data.country_code;
    var country = data.country_name;
    var ip = data.ip;
    var time_zone = data.time_zone;
    var latitude = data.latitude;
    var longitude = data.longitude;  
});

$.get("http://freegeoip.net/json/", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html(response.city + ", " + response.region_name);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");

$("#age").text("24")
$("#gender").text("female")
$("#str1").text("2/3")
$("#str2").text("3/3")
$("#str3").text("2/3")

