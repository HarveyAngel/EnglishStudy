function GetSentenceNum () {
	$.post(
		"php/GetSentenceNum.php",
		{

		},
		function(data){
			var json=$.parseJSON(data);
			if(json.type=="OK"){
				$("#SentenceNum").text(json.SNum);
			}
		});
}