/**
 * Created by a34524 on 15/12/8.
 */
var List;
var ShowList={
    ShowList:[],
    i:10
};
function Sure(){
    var Str=$("#Input-textarea").val().trim();
    List=[];
    for(var i=0;Str.length>0;i++){
        var S;
        if(Str.indexOf("\n")==-1){
            S=Str;
            Str="";
        } else{
            S=Str.substr(0,Str.indexOf("\n")).trim();
            Str=Str.substr(Str.indexOf("\n"),Str.length-1).trim();
        }
        if(S.length<=3){
            i--;
            continue;
        } else{
            List[i]=S;
        }
    }
    Show();
}

function Show(){
    $("#ul-Show").empty();
    for(var i= 0,E=1;i<List.length;i++,E++){
        $("#ul-Show").append("<li><div class='Num'>"+E+".</div><div class='EN'>"+List[i]+"</div><div class='ZH'>"+List[++i]+"</div></li>");
    }
}

function Add(){
    var jsonStr='[';
    for(var i= 0;i<List.length;i++){
        if(i>0)
            jsonStr+=",";
        jsonStr+="{";
        jsonStr+='"EN":"'+List[i]+'",';
        jsonStr+='"ZH":"'+List[++i]+'"';
        jsonStr+="}";

    }
    jsonStr+="]";
    $.post(
        "php/Add.php",
        {
            List:jsonStr,
        },
        function(data){
            if(data=="OK"){
                $("#ul-Show").empty();
                $("#Input-textarea").val("");
            }
        }
    );
}