function ChangePage (PageID) {
	if(!$(".main").is(":animated")){
            $(".main:visible").hide(600,function(){
                $("#"+PageID).show(800);
            });
        }
}