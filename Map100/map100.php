<html>

<head>
   <meta charset="utf-8" />
   <title> Make 100 map test</title>
  <!-- <script type="text/javascript" src="./js/setup.js?v=1.1"></script>
   <script type="text/javascript" src="./js/lib.js?v=1.1"></script>-->
   <link href="css/index.css?v=1.1" rel="stylesheet" type="text/css" />
   <link href="php/pdfEngine.css?v=1.1" rel="stylesheet" type="text/css" />

</head>
<script>
function openHex(element) {
  console.log(element);
   var x = document.getElementById(element);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

} 
function closeHex(element) {
   console.log(element);
  var x = document.getElementById(element);
 
   x.style.display = "none";
 }


</script>
<body>
<?php

error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
ini_set("display_errors", 1);

// include('data/small.php');
// include('data/large.php');

require('php/mapEngine.php');
require('php/pdfEngine.php');


include('data/all.php'); // ALL is broken.. somehow?



// mock all
// include('data/mock.php');

  // phpinfo();

 function run($all) {

    
$x =2;
$y= 2;
$xMax = 18;
$MapData = Array();

$allArray = json_decode($all, true);

echo count($allArray);
  foreach ($allArray as $key => $value) {
     
   $x++;
   if ($x > $xMax) { $x = 2; $y++;}
   if (isset($value['locX'])) {
    if($value['locX'] == '') {
      $value['locX'] = $x;
    }
   } else {
    $value['locX'] = $x;
   }
   if (isset($value['locY'])) {
    if($value['locY'] == '') {
      $value['locY'] = $y;
    }
   } else {
    $value['locY'] = $y;
   }
   
   $data = process($key, $value);
   
   
   pdfPanel($data);
   // Process will now return several Hexes of Data
   array_push($MapData, $data);
  // chho "<br />Processed:".$key."  ".$value;
  }
   
 } // end of RUN

  run($all);

?>
</body>
</html>
