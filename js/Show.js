/**
 * Created by a34524 on 15/12/9.
 */

function ShowInit(){
    GetSentence();
}

function Shows(){
    if(ShowList.i<ShowList.ShowList.length){
        $("#ShowA").empty();
        $("#ShowA").append("<div class='ENA' sid='"+ShowList.ShowList[ShowList.i][0]+"'>"+ShowList.ShowList[ShowList.i][1]+"</div><div class='ZHA'>"+ShowList.ShowList[ShowList.i][2]+"</div>");
        ShowList.i++;
    }else{
        GetSentence(function(){
            Shows();
        });
    }

}


function GetSentence(Fun){
    $.post(
        "php/Show.php",
        {

        },
        function(data){
            var json= $.parseJSON(data);
            if(json.type=="OK"){
                ShowList.ShowList=json.backList;
                ShowList.i=0;
                Fun();
            }
        }
    );
}