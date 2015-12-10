/**
 * Created by a34524 on 15/12/9.
 */
function Update(){
	var id=$(".ENA").attr("sid");
	var Check=$(".ENA").attr("Check");
	if (Check!=null||id==null) {
		return 0;
	};
    $.post(
    	"php/Update.php",
    	{
    		id:id
    	},
    	function(){
    	});
}