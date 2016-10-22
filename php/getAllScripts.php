<?php

$files = scandir("../js/");
$out = [];
foreach ($files as $k => $v) {
  if ($v != "." && $v != ".." && $v != "loader.js")
    $out[] = $v;
}
echo (json_encode($out));
