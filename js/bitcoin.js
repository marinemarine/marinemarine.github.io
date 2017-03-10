/*var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();*/

$(document).ready(function() {
	$.ajax({
		url : "http://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.blocks);
			$('#bitcoin_difficulty').append(data.difficulty);
			$('#bitcoin_version').append(data.version);
			$('#bitcoin_protocolversion').append(data.protocolversion);
			$('#bitcoin_connections').append(data.connections);
			$('#bitcoin_timeoffset').append(data.timeoffset);
		},
		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
			$('#bitcoin_difficulty').append(err+" N/A");
			$('#bitcoin_version').append(err+" N/A");
			$('#bitcoin_protocolversion').append(err+" N/A");
			$('#bitcoin_connections').append(err+" N/A");
			$('#bitcoin_timeoffset').append(err+" N/A");
		}
	});
});
