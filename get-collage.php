<?php

// get collage images data from source/collage

header('Content-Type: application/json');

$dir = '/source/collage/';
$data = array_diff(scandir(__DIR__ . $dir), array('..', '.'));
function getPathImg($item)
{
  global $dir;
  return $dir . $item;
}

echo json_encode(array_values(array_map("getPathImg", $data)), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
