<?php
/**
 * Created by PhpStorm.
 * User: a34524
 * Date: 15/12/8
 * Time: 下午8:40
 */
require "foundation/Sentence.php";
$S=new Sentence();
$id=intval($_POST['id']);
$S->Update($id);
