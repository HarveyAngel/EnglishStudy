<?php

require 'SQL.PHP';
/**
 * Created by PhpStorm.
 * User: yuyang
 * Date: 15/9/30
 * Time: 下午2:01
 */
class Sentence extends SQL
{
    function  Add($jsonStr){
        $List=json_decode($jsonStr,true);

        for($i=0;$i<count($List);$i++){
            $this->Procedures("AddSentence",[$List[$i]['EN'],$List[$i]['ZH']]);
        }
        echo "OK";
        /*
        if(is_object($result)){
            $row = $result->fetch_all();
            echo json_encode($row);
        }*/
    }
    function Show(){
        $result=$this->Procedures("GetSentence",[]);
        if(is_object($result)){
            $row = $result->fetch_all();
            $Out['type']="OK";
            $Out['backList']=$row;
            echo json_encode($Out);
        }
        else{
            $Out['type']="ERROR";
            echo json_encode($Out);
        }
    }

    function Update($id){
        $this->Procedures("UpdateTime",[$id]);
    }
    function GetSentenceNum(){
        $result=$this->Procedures("GetSentenceNum",[]);
        if(is_object($result)){
            $row = $result->fetch_all();
            $Out['type']="OK";
            $Out['SNum']=$row[0][0];
            echo json_encode($Out);
        }
        else{
            $Out['type']="ERROR";
            echo json_encode($Out);
        }
    }
}