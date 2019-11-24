

<html>

<head>
   <meta charset="utf-8" />
   <title> Make 100 map test</title>
  <!-- <script type="text/javascript" src="./js/setup.js?v=1.1"></script>
   <script type="text/javascript" src="./js/lib.js?v=1.1"></script>-->
   <link href="css/index.css?v=1.1" rel="stylesheet" type="text/css" />
   <link href="php/pdfEngine.css?v=1.1" rel="stylesheet" type="text/css" />
   <link href="css/index.css?v=1.1" rel="stylesheet" type="text/css" />
   <link href="https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap" rel="stylesheet">
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
<a href="map100.php?sort=1">
    <button>Sort by Aztec</button>
</a>
<a href="map100.php?map=true">
    <button>The Map</button>
</a>
<a href="map100.php?map=false">
    <button>The PDF</button>
</a>

<?php 
$sort = 0;
$map = 0;
$sort = $GET["sort"];
$map = $GET["map"];
$sort = htmlspecialchars($sort);
$map = htmlspecialchars($map);

echo "<br />";


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

 function run($all, $sort) {

    
$x =2;
$y= 2;
$xMax = 18;
$MapData = Array();

$allArray = json_decode($all, true);

 if ($sort) {
   echo "all good";
//   usort($allArray, function ($a, $b) {
//     return $a['StyleType'] <=> $b['StyleType'];
// });
 }

echo count($allArray);
  foreach ($allArray as $key => $value) {
     
   $x+=3;
   if ($x > $xMax) { $x = 2; $y+=4;}
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
   echo "<br />Dtata:".$x.'='.$y;
   
   pdfPanel($data);
   // Process will now return several Hexes of Data
   array_push($MapData, $data);
  // chho "<br />Processed:".$key."  ".$value;
  }
   
 } // end of RUN


 if ($map == true) {

 } else {
  run($all, $sort);

 }
  
?>
</body>
</html>
