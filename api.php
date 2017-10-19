<?php declare(strict_types = 1); 

require __DIR__ . '/vendor/autoload.php';

if (is_ajax()) {
    test_function();
}

function is_ajax() {
  return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

function test_function(){
  $return["json"] = json_encode($_POST);
  echo json_encode($return);
}