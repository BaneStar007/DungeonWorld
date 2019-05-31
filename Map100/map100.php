<html>

<head>
   <meta charset="utf-8" />
   <title> Make 100 map test</title>
   <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
   <script type="text/javascript" src="./js/setup.js?v=1.1"></script>
   <script type="text/javascript" src="./js/lib.js?v=1.1"></script>
   <link href="css/index.css?v=1.1" rel="stylesheet" type="text/css" />

</head>
<script>


</script>
<body>
    Test
<?php


include('data/small.php');

function drawHex($map) {

   
   if ($map["locX"] % 2 != 0) {
      $alternate = "";
   } else {
      $alternate = 'alternate';
   }

   $hex = '<div id="bid'.$map["locID"].'" style= " top:' . (($map["locY"] * 75) + 50) . 'px ; left:' . (($map["locX"] * 65) + 40) . 'px" class = "' .$alternate.' grid" >';
   $hex .= '<div id="oid' . $map["locID"] . '" class = "gridimg '.$map["style"].'" >';

   //      console.log($hex);

   // Check to Add Terrain Type


   $hex .= '<div id="id' . $map["locID"] . '" class="terrain '.$map["terrain1"].'">';
   if ($map["terrain2"] != undefined) {
      $hex .='<div class=" smallLeft '.$map["terrain2"].'"></div>';
   }
   if ($map["terrain3"] != undefined) {
      $hex .='<div class=" smallRight '.$map["terrain3"].'"></div>';
   }

   $hex .= '<div id="mid' . $map["locID"] . '" class="id">';

   $hex .= '</div>';
   $hex .= '<div id="e1id' . $map["locID"] . '" class="easter">';

   $hex .= '</div>';
   $hex .= '<div id="e2id' . $map["locID"] . '" class="easter">';

   $hex .= '</div>';


   $hex .= '</div>';

   $hex .= '</div>';

   $hex .= '</div>';


echo $hex;
}

$x =0;
$y=0;

$smallArray = json_decode($small, true);
  foreach ($smallArray as $key => $value) {
   $x++;
   if ($x > 15) { $x = 0; $y++;}
   $value['locX'] = $x;
   $value['locY'] = $y;


   $value["AccName"] = $value["Backer Name"];
   unset($value["Backer Name"]);
   $value["locID"] = $value["Backer Number"];
   unset($value["Backer Number"]);
   unset($value[""]);
   unset($value["__1"]);
   unset($value["__2"]);
   unset($value["__3"]);
   unset($value["__4"]);
   unset($value["__5"]);
   unset($value["__6"]);
   unset($value["__7"]);
   unset($value["__8"]);
   if ($value['Reward Title'] == 'Just a little thing, thanks' ) {
      $value['Pledge'] = '$3';
      unset($value["Reward Title"]);
      unset($value["Reward Minimum"]);
   }
   if ($value['Pledge Amount'] != "") {
      $value['Pledged'] = $value['Pledge Amount'];
      unset($value['Pledge Amount']);
   }

   if ($value['Email For Your Map To Be Sent. *Required!!'] != "") {
      $value['Email_'] = $value['Email For Your Map To Be Sent. *Required!!'];
      unset($value['Email For Your Map To Be Sent. *Required!!']);
      if ($value['Email'] == $value['Email_']) {
         $value['Email__'] = $value['Email'];
      }
      unset($value['Email']);
   }
   if ($value['2. What Is Your Location Called?'] != "") {
      $value['title'] = $value['2. What Is Your Location Called?'];
      unset($value['2. What Is Your Location Called?']);
   }
   if ($value['3. What Kind Of Location Do You Want ? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)'] != "") {
      $value['LocationType'] = $value['3. What Kind Of Location Do You Want ? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)'];
      unset($value['3. What Kind Of Location Do You Want ? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)']);
   }


   if ($value['4. Describe Your Location'] != "") {
      $value['LocationDesc'] = $value['4. Describe Your Location'];
      unset($value['4. Describe Your Location']);
   }

   //Plains / Grassland | Taiga / Steppe | Forest - Boreal or Temperate | Forest - Jungle or Rainforest | Swamp / Mangroves | Hills/Cliffs | Mountains
   $styleList = array("plains" => "Plains / Grassland", "taiga" => "Taiga / Steppe", "borreal"=>"Forest - Boreal or Temperate", "jungle"=>"Forest - Jungle or Rainforest", "swamp"=>"Swamp / Mangroves", "hills"=>"Hills/Cliffs", "mountains"=> "Mountains", "sea" => "Lake / Sea", "other"=>"Other (Only choose if you have increased pledge)", "coastal"=>"Coastal", "desert"=>"Desert");


   if($value["5. What Terrain Do You Want Your Location To Appear In"] != "") {
      $temp = $value["5. What Terrain Do You Want Your Location To Appear In"];
      unset($value["5. What Terrain Do You Want Your Location To Appear In"]);
      $terrStyle = "";
      $set = false;
      

      $temp_2 = explode(' | ', $temp, 10);
      foreach($styleList as $skey => $svalue) {
         if ($temp_2[0] == $svalue) { 
            $terr1Style =  $skey;
            $set = true;
         }
      }
      if ($set == false) {
         echo "Missing: ".$temp_2[0] ;
      }
      $value["terrain1"] = $terr1Style;  

      foreach($styleList as $skey => $svalue) {
         if ($temp_2[1] == $svalue) { 
            $terr2Style =  $skey;
            $set2 = true;
         }
      }
      if ($set2 == false) {
         echo "Missing: ".$temp_2[1] ;
      }
      $value["terrain2"] = $terr2Style;  

      foreach($styleList as $skey => $svalue) {
         if ($temp_2[2] == $svalue) { 
            $terr3Style =  $skey;
            $set2 = true;
         }
      }
      if ($set2 == false) {
         echo "Missing: ".$temp_2[2] ;
      }

      $value["terrain3"] = $terr3Style;   
      
   }

   

   $styleList = array("ruins" => "Abandoned/Ruins", "euro" => "European (Grey stone)", "aztec"=>"Aztec (Orange Stone)", "asia"=>"Asian (White Stone)", "arab"=>"Arabian (Yellow Stone)", "nomad"=>"Nomadic (horses or wheeled)", "other"=> "Other (Only choose if you have increased pledge)", "tent"=>"Native (tents)", "na"=>"No response");


   if($value["9. Style Of Your Location (If Applicable, Choose Up To 2)"] != "") {
      $temp = $value["9. Style Of Your Location (If Applicable, Choose Up To 2)"];
      unset($value["9. Style Of Your Location (If Applicable, Choose Up To 2)"]);
      $tempStyle = "";
      $set = false;
      

      $temp_2 = explode(' | ', $temp, 10);
      foreach($styleList as $skey => $svalue) {
         if ($temp_2[0] == $svalue) { 
            $tempStyle =  $skey;
            $set = true;
         }
      }
      if ($set == false) {
         echo "Missing: ".$temp_2[0] ;
      }

      foreach($styleList as $skey => $svalue) {
         if ($temp_2[1] == $svalue) { 
            $tempStyle .=  "_".$skey;
            $set2 = true;
         }
      }
      if ($set2 == false) {
         echo "Missing: ".$temp_2[0] ;
      }

      $value["style"] = $tempStyle;   
      
   }

   // $styleList = array("ruins" => "Abandoned/Ruins", "euro" => "European (Grey stone)", "aztec"=>"Aztec (Orange Stone)", "asia"=>"Asian (White Stone)", "arab"=>"Arabian (Yellow Stone)", "nomad"=>"Nomadic (horses or wheeled)", "other"=> "Other (Only choose if you have increased pledge)", "tent"=>"Native (tents)", "na"=>"No response");


   // if($value["9. Style Of Your Location (If Applicable, Choose Up To 2)"] != "") {
   //    $temp = $value["9. Style Of Your Location (If Applicable, Choose Up To 2)"];
   //    unset($value["9. Style Of Your Location (If Applicable, Choose Up To 2)"]);
   //    $tempStyle = "";
   //    $set = false;
      

   //    $temp_2 = explode(' | ', $temp, 10);
   //    foreach($styleList as $skey => $svalue) {
   //       if ($temp_2[0] == $svalue) { 
   //          $tempStyle =  $skey;
   //          $set = true;
   //       }
   //    }
   //    if ($set == false) {
   //       echo "Missing: ".$temp_2[0] ;
   //    }

   //    foreach($styleList as $skey => $svalue) {
   //       if ($temp_2[1] == $svalue) { 
   //          $tempStyle .=  "_".$skey;
   //          $set2 = true;
   //       }
   //    }
   //    if ($set2 == false) {
   //       echo "Missing: ".$temp_2[0] ;
   //    }

   //    $value["style"] = $tempStyle;   
      
   // }

  


   /*
Array ( [5. What Terrain Do You Want Your Location To Appear In] => Plains / Grassland | Taiga / Steppe | Forest - Boreal or Temperate | Forest - Jungle or Rainforest | Swamp / Mangroves | Hills/Cliffs | Mountains [5.B. If Other, Add Details] => No response [7. Which Biomes Would Suit Your Location] => Any of the Above [9. Style Of Your Location (If Applicable, Choose Up To 2)] => Abandoned/Ruins | Native (tents) [9.B. Using The Key Ideas Of The Styles Given, You Can Add Some Flourish?] => No response [9.C. If Other, Add Details] => No response [10. What Text Do You Want To Appear In The Document For This Location? (2 Paragraph Maximum)] => The central hideout for The Crimson Scars, an outlawed bandit gang led by the elusive Bayden Monteagle. These bandits show a level of intelligence above common thugs and have spies in the local towns and cities. The spies relay information concerning local merchant’s activities, so they know which scores to take, and when. They are also rumoured to have links with the local militia who they share information with in order to dampen the threats of rival outlaws. [11. Which Map Do You Want This To Appear On?] => The Original Map, Sepia and Coloured | The Re-Skinned Map | The Kingdom Death Monster / Cataclyzm Map [12. Will Your Location Be Hidden On The Player Maps?] => No, My location is hidden from players, only for GMs [Anything To Add?] => No response [AccName] => Bayden [locID] => 119 [Pledge] => $3 [Pledged] => AU$ 3.00 [Email_] => baydenknight@gmail.com [Email__] => baydenknight@gmail.com [title] => The Crimson Scars Hideout [LocationType] => Tents | surround with trees | Ruins ) , 


"Backer Number": 117,
    "": "",
    "Backer Name": "Chris D. H.",
    "Email": "chrishales@ymail.com",
    "Reward Title": "Just a little thing, thanks",
    "Reward Minimum": "AU$ 3.00",
    "__1": "",
    "Pledge Amount": "AU$ 5.00",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": "",
    "__7": "",
    "__8": "",
    "Email For Your Map To Be Sent. *Required!!": "chrishales@ymail.com",
    "2. What Is Your Location Called?": "Dungeon Watch",
    "3. What Kind Of Location Do You Want ? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)": "surrounding Someone Elses Location | tower/guard post | Dungeon Entrance/Exit",
    "4. Describe Your Location": "Palisade walls surrounding <Someone Else\'                              s Location> a dungeon, attempting to prevent entry.",
    "5. What Terrain Do You Want Your Location To Appear In": "Plains / Grassland | Hills/Cliffs",
    "5.B. If Other, Add Details": "No response",
    "7. Which Biomes Would Suit Your Location": "Any of the Above",
    "9. Style Of Your Location (If Applicable, Choose Up To 2)": "European (Grey stone) | Aztec (Orange Stone)",
    "9.B. Using The Key Ideas Of The Styles Given, You Can Add Some Flourish?": "Wood instead of stone.",
    "9.C. If Other, Add Details": "No response",
    "10. What Text Do You Want To Appear In The Document For This Location? (2 Paragraph Maximum)": "This outpost guards the entrance to the nearby dungeon.",
    "11. Which Map Do You Want This To Appear On?": "The Original Map, Sepia and Coloured | The Re-Skinned Map | The Kingdom Death Monster / Cataclyzm Map",
    "12. Will Your Location Be Hidden On The Player Maps?": "Yes, My place is public Knowledge, anyone can find it",
    "Anything To Add?": "No response"*/


    echo "<br><br />";
   drawHex($value);
  // print_r( $value);
 }

  //echo $small;
  

  

?>
</body>
</html>
