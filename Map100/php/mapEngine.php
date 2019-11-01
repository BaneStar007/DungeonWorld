
<?php

function drawHex($map) {

   
   if ($map["locX"] % 2 != 0) {
      $alternate = "";
   } else {
      $alternate = 'alternate';
   }

   $hex = '<div onClick="openHex(\'det'.$map["locID"].'\')" id="bid'.$map["locID"].'" style= " top:' . (($map["locY"] * 75) + 20) . 'px ; left:' . (($map["locX"] * 65) + 200) . 'px" class = "' .$alternate.' grid" >';
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
   // Now the Hidden Details
   $hex .= '<div style="display: none;" class="details" id="det'.$map["locID"].'">';

   $hex .= '<div class="closeButton" onClick="closeHex(\'det'.$map["locID"].'\')">X</div>';
   

   $hex .= '</div>';


   echo $hex;
}


function process($key, $value) {

   $pledgeTokens =0;

   if ($value['Reward Minimum'] == 'AU$ 4.00' ) {
      $value['Pledge_Tier'] = 4;
      $pledgeTokens = 10;
      
      unset($value["Reward Minimum"]);
   } 
   return $value;
}

// function Process_bak($key, $value) {
//    $pledgeTokens =0;
  

//    if ($value['Reward Minimum'] == 'AU$ 4.00' ) {
//       $value['Pledge_Tier'] = 4;
//       $pledgeTokens = 10;
      
//       unset($value["Reward Minimum"]);
//    } 
//    if ($value['Reward Minimum'] == 'AU$ 3.00' ) {
//       $value['Pledge_Tier'] = 3;
//       $pledgeTokens = 4;
//       unset($value["Reward Minimum"]);
//    }
//    if ($value['Pledge Amount'] != "") {
//       $value['Pledge'] = substr($value['Pledge Amount'],4);
//       $temp = intval($value['Pledge']);
      
//       if ($pledgeTokens ==10) {
//          $temp -= 4;
//       }
//       if ($pledgeTokens == 4) {
//          $temp -= 3;
//       }
//       $pledgeTokens += $temp;
//       $temp =0;
//       unset($value['Pledge Amount']);
//    }

//    echo "<br />Welcome to ".$value['ID'].":".$value['Title']." with $".$value['Pledge'];

//    $locTypes = explode(" | ", $value['locationType']);
//    $value['locationTypes'] = [];

//    foreach ($locTypes as $LocId => $LocCode) {
//    echo $LocCode;
//    switch ($LocCode) {
//          case 'Castle/Fortress/City/Tower' :
//          if ($value['Pledge_Tier'] == 4) {
//             $value['locationTypes']['Castle/Fortress/City/Tower'] = true;
//             $pledgeTokens--;
//             $mainTaken = true;
//          }
//          break;
//          case 'Dungeon/Crypt/Tomb' :
//          if ($value['Pledge_Tier'] == 4) {
//             $value['locationTypes']['Dungeon/Crypt/Tomb'] = true;
//             $pledgeTokens--;
//          }
      
//          break;

//          default :
//          echo "<br /> Unknown:".$LocCode;
//          break;
//       }
//       echo "now what";
      
//    }
   
//    echo "<br />Location: ".$value['locationTypes']." with ".$value['LocationType'];
//    echo "<br />Tokens Left:<b>".$pledgeTokens."</b>";
//     /*
//     "Location Type": "Castle/Fortress/City/Tower | Dungeon/Crypt/Tomb | Other (Only choose if you have increased pledge)",
//     "Loc Type Details": "CIty/castle",
    
//     "Terrain": "Plains / Grassland | Coastal | Mountains",
//     "Terrain Other": "",
//     "6. What Terrain Borders Your Location": "Forest - Boreal or Temperate",
//     "7. Which Biomes Would Suit Your Location": "Mid Range (o.c winters, 30.c summers)",
//     "8. Describe Your Terrain, Border Terrain And Biome.": "",
//     "StyleType": "European (Grey stone)",
//     "Style Description": "Medieval Italian/german style architecture",
//     "Style Other": "The capital is very rich and many of its citizens are well off",
//     "PDF_Description": "Selario is the capital city of the Illianese Empire",
//     "MapTypes": "The Original Map, Sepia and Coloured | The Re-Skinned Map | The Kingdom Death Monster / Cataclyzm Map | Future Maps (If you have increased your pledge)",
//     "Hidden_GM": "Yes, My place is public Knowledge, anyone can find it",
//     "13a. Your First Add On / Small Location A, You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)": "Village size+1 | Village size+1 | tower/guard post | Temple | Blacksmith | Farms | Dungeon Entrance/Exit",
//     "13b. Describe Location A": "bigger town located near city",
//     "13c. If Other, Add Details": "",
//     "13d. Will Location A Be Hidden On The Player Maps?": "No",
//     "14a. Location B? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)": "Temple | Ruins | Dungeon Entrance/Exit",
//     "14b. Describe Location A": "Dungeon that adventurers go to seek treasure",
//     "14c. If Other, Add Details": "",
//     "14d. Will Location A Be Hidden On The Player Maps?": "Yes",
//     "Location C Description (If You Pledged Higher For More Locations)": "farming villages",
//     "Location D Description (If You Pledged Higher For More Locations)": "Mining towns that extract rare metals that are then used by dwarfs to create superior quality items for the empire",
//     "Location E Description (If You Pledged Higher For More Locations)": "",
//     "Anything To Add?": "",
//     "": "",
//     "To draw": ",\"coastal european castle/city (capital) near some mountains",
//     "Secondary locations": ",\"big town near the capital city",
//     "__1": ",\"dungeon entrance",
//     "__2": "farming village",
//     "__3": ",\"dwarven minig town",
//     "Notes__1": "not many details in the descriptions of the secondary locations"
//     */


//    //Plains / Grassland | Taiga / Steppe | Forest - Boreal or Temperate | Forest - Jungle or Rainforest | Swamp / Mangroves | Hills/Cliffs | Mountains
//    $styleList = array("plains" => "Plains / Grassland", "taiga" => "Taiga / Steppe", "borreal"=>"Forest - Boreal or Temperate", "jungle"=>"Forest - Jungle or Rainforest", "swamp"=>"Swamp / Mangroves", "hills"=>"Hills/Cliffs", "mountains"=> "Mountains", "sea" => "Lake / Sea", "other"=>"Other (Only choose if you have increased pledge)", "coastal"=>"Coastal", "desert"=>"Desert");

//    echo "<br />Terrain Test: <b>".$value["Terrain"]."</b><br />";
//    print_r($value);

//    if($value["Terrain"] != "") {
      
      
//       $terrStyle = "";
//       $set = false;
      
//       echo "test2 ";
//       $temp_2 = explode(' | ', $value["Terrain"]);
//       foreach($styleList as $skey => $svalue) {
//          if ($temp_2[0] == $svalue) { 
//             $terr1Style =  $skey;
//             $set = true;
//          }
//       }
//       if ($set == false) {
//          echo "Missing: ".$temp_2[0] ;
//       }
//       $value["terrain1"] = $terr1Style;  
//       echo "test";
//       foreach($styleList as $skey => $svalue) {
//          if ($temp_2[1] == $svalue) { 
//             $terr2Style =  $skey;
//             $set2 = true;
//          }
//       }
//       if ($set2 == false) {
//          echo "Missing: ".$temp_2[1] ;
//       }
//       $value["terrain2"] = $terr2Style;  
//       echo "test";
//       foreach($styleList as $skey => $svalue) {
//          if ($temp_2[2] == $svalue) { 
//             $terr3Style =  $skey;
//             $set2 = true;
//          }
//       }
//       if ($set2 == false) {
//          echo "Missing: ".$temp_2[2] ;
//       }

//       $value["terrain3"] = $terr3Style;   
      
//    }
//    echo "<br /> LOC: ".$value["terrain1"]." with ".$value["terrain2"].", ".$value["terrain3"]." and ".$value["terrain4"];
   
   
//    $styleList = array("ruins" => "Abandoned/Ruins", "euro" => "European (Grey stone)", "aztec"=>"Aztec (Orange Stone)", "asia"=>"Asian (White Stone)", "arab"=>"Arabian (Yellow Stone)", "nomad"=>"Nomadic (horses or wheeled)", "other"=> "Other (Only choose if you have increased pledge)", "tent"=>"Native (tents)", "na"=>"No response");

//    echo "test->".$value["StyleType"];
//    if($value["StyleType"] != "") {
//       $temp = $value["StyleType"];
//       unset($value["StyleType"]);
//       $tempStyle = "";
//       $set = false;
      
//       echo "testst";
//       $temp_2 = explode(' | ', $temp, 10);
//       foreach($styleList as $skey => $svalue) {
//          if ($temp_2[0] == $svalue) { 
//             $tempStyle =  $skey;
//             $set = true;
//          }
//       }
//       if ($set == false) {
//          echo "Missing: ".$temp_2[0] ;
//       }
//       echo "testst";
//       foreach($styleList as $skey => $svalue) {
//          if ($temp_2[1] == $svalue) { 
//             $tempStyle .=  "_".$skey;
//             $set2 = true;
//          }
//       }
//       if ($set2 == false) {
//          echo "Missing: ".$temp_2[0] ;
//       }

//       $value["style"] = $tempStyle;   
      
//    }
//    echo "teststend";
   
//    /*Array ( 
     
      
//       [locX] => 4 
//       [locY] => 0 
//       [AccName] => Aleksander Bordvik 
//       [locID] => 3 
//       [Pledged] => AU$ 4.00 
//       [title] => Natal Everfort 
//       [LocationDesc] => Natal Everfort is a Castle located in the deep forest on one side and the cliff looking over the water on the other side, with a cliff too steep to climb and a forest to dense to see the castle. 
//       [terrain1] => jungle 
//       [terrain2] => coastal 
//       [terrain3] => hills 
//       [style] => euro_asia ) 

//    // $styleList = array("ruins" => "Abandoned/Ruins", "euro" => "European (Grey stone)", "aztec"=>"Aztec (Orange Stone)", "asia"=>"Asian (White Stone)", "arab"=>"Arabian (Yellow Stone)", "nomad"=>"Nomadic (horses or wheeled)", "other"=> "Other (Only choose if you have increased pledge)", "tent"=>"Native (tents)", "na"=>"No response");


//    // if($value["9. Style Of Your Location (If Applicable, Choose Up To 2)"] != "") {
//    //    $temp = $value["9. Style Of Your Location (If Applicable, Choose Up To 2)"];
//    //    unset($value["9. Style Of Your Location (If Applicable, Choose Up To 2)"]);
//    //    $tempStyle = "";
//    //    $set = false;
      

//    //    $temp_2 = explode(' | ', $temp, 10);
//    //    foreach($styleList as $skey => $svalue) {
//    //       if ($temp_2[0] == $svalue) { 
//    //          $tempStyle =  $skey;
//    //          $set = true;
//    //       }
//    //    }
//    //    if ($set == false) {
//    //       echo "Missing: ".$temp_2[0] ;
//    //    }

//    //    foreach($styleList as $skey => $svalue) {
//    //       if ($temp_2[1] == $svalue) { 
//    //          $tempStyle .=  "_".$skey;
//    //          $set2 = true;
//    //       }
//    //    }
//    //    if ($set2 == false) {
//    //       echo "Missing: ".$temp_2[0] ;
//    //    }

//    //    $value["style"] = $tempStyle;   
      
//    // }

  


//    /*
//    Array ( [5. What Terrain Do You Want Your Location To Appear In] => Plains / Grassland | Taiga / Steppe | Forest - Boreal or Temperate | Forest - Jungle or Rainforest | Swamp / Mangroves | Hills/Cliffs | Mountains [5.B. If Other, Add Details] => No response [7. Which Biomes Would Suit Your Location] => Any of the Above [9. Style Of Your Location (If Applicable, Choose Up To 2)] => Abandoned/Ruins | Native (tents) [9.B. Using The Key Ideas Of The Styles Given, You Can Add Some Flourish?] => No response [9.C. If Other, Add Details] => No response [10. What Text Do You Want To Appear In The Document For This Location? (2 Paragraph Maximum)] => The central hideout for The Crimson Scars, an outlawed bandit gang led by the elusive Bayden Monteagle. These bandits show a level of intelligence above common thugs and have spies in the local towns and cities. The spies relay information concerning local merchant’s activities, so they know which scores to take, and when. They are also rumoured to have links with the local militia who they share information with in order to dampen the threats of rival outlaws. [11. Which Map Do You Want This To Appear On?] => The Original Map, Sepia and Coloured | The Re-Skinned Map | The Kingdom Death Monster / Cataclyzm Map [12. Will Your Location Be Hidden On The Player Maps?] => No, My location is hidden from players, only for GMs [Anything To Add?] => No response [AccName] => Bayden [locID] => 119 [Pledge] => $3 [Pledged] => AU$ 3.00 [Email_] => baydenknight@gmail.com [Email__] => baydenknight@gmail.com [title] => The Crimson Scars Hideout [LocationType] => Tents | surround with trees | Ruins ) , 


//    "Backer Number": 117,  
//     "": "",
//     "Backer Name": "Chris D. H.",
//     "Email": "chrishales@ymail.com",
//     "Reward Title": "Just a little thing, thanks",
//     "Reward Minimum": "AU$ 3.00",
//     "__1": "",
//     "Pledge Amount": "AU$ 5.00",
//     "__2": "",
//     "__3": "",
//     "__4": "",
//     "__5": "",
//     "__6": "",
//     "__7": "",
//     "__8": "",
//     "Email For Your Map To Be Sent. *Required!!": "chrishales@ymail.com",
//     "2. What Is Your Location Called?": "Dungeon Watch",
//     "3. What Kind Of Location Do You Want ? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)": "surrounding Someone Elses Location | tower/guard post | Dungeon Entrance/Exit",
//     "4. Describe Your Location": "Palisade walls surrounding <Someone Else\'                              s Location> a dungeon, attempting to prevent entry.",
//     "5. What Terrain Do You Want Your Location To Appear In": "Plains / Grassland | Hills/Cliffs",
//     "5.B. If Other, Add Details": "No response",
//     "7. Which Biomes Would Suit Your Location": "Any of the Above",
//     "9. Style Of Your Location (If Applicable, Choose Up To 2)": "European (Grey stone) | Aztec (Orange Stone)",
//     "9.B. Using The Key Ideas Of The Styles Given, You Can Add Some Flourish?": "Wood instead of stone.",
//     "9.C. If Other, Add Details": "No response",
//     "10. What Text Do You Want To Appear In The Document For This Location? (2 Paragraph Maximum)": "This outpost guards the entrance to the nearby dungeon.",
//     "11. Which Map Do You Want This To Appear On?": "The Original Map, Sepia and Coloured | The Re-Skinned Map | The Kingdom Death Monster / Cataclyzm Map",
//     "12. Will Your Location Be Hidden On The Player Maps?": "Yes, My place is public Knowledge, anyone can find it",
//     "Anything To Add?": "No response"
    
//     "Backer Number": 1,
//     "": "",
//     "Backer Name": "Christian Lippis",
//     "Email": "cslippis@hotmail.com",
//     "__1": "",
//     "Reward Minimum": "AU$ 4.00",
//     "__2": "",
//     "Pledge Amount": "AU$ 35.00",
//     "__3": "",
//     "__4": "",
//     "__5": "",
//     "Notes": "",
//     "__6": "",
//     "__7": "",
//     "Survey Response": "2019/02/11, 09:19",
//     "1. Email For Your Map To Be Sent. *Required!!": "cslippis@hotmail.com",
//     "3. What Kind Of Location Do You Want": "Castle/Fortress/City/Tower | Dungeon/Crypt/Tomb | Other (Only choose if you have increased pledge)",
//     "5. What Terrain Do You Want Your Location To Appear In": "Plains / Grassland | Coastal | Mountains",
//     "6. What Terrain Borders Your Location": "Forest - Boreal or Temperate",
//     "4. Describe Your Location": "A coastal city/castle based near mountains so it has access to metals",
//     "9. Style Of Your Location (If Applicable, Choose Up To 2)": "European (Grey stone)",
//     "2. What Is Your Location Called?": "Selario",
//     "3.B. If Other.. Add Details": "CIty/castle",
//     "5.B. If Other, Add Details": "No response",
//     "7. Which Biomes Would Suit Your Location": "Mid Range (o.c winters, 30.c summers)",
//     "8. Describe Your Terrain, Border Terrain And Biome.": "No response",
//     "9.B. Using The Key Ideas Of The Styles Given, You Can Add Some Flourish?": "Medieval Italian/german style architecture",
//     "10. What Text Do You Want To Appear In The Document For This Location? (2 Paragraph Maximum)": "Selario is the capital city of the Illianese Empire",
//     "13a. Your First Add On / Small Location A, You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)": "Village size+1 | Village size+1 | tower/guard post | Temple | Blacksmith | Farms | Dungeon Entrance/Exit",
//     "9.C. If Other, Add Details": "The capital is very rich and many of its citizens are well off",
//     "11. Which Map Do You Want This To Appear On?": "The Original Map, Sepia and Coloured | The Re-Skinned Map | The Kingdom Death Monster / Cataclyzm Map | Future Maps (If you have increased your pledge)",
//     "12. Will Your Location Be Hidden On The Player Maps?": "Yes, My place is public Knowledge, anyone can find it",
//     "13b. Describe Location A": "bigger town located near city",
//     "13c. If Other, Add Details": "No response",
//     "13d. Will Location A Be Hidden On The Player Maps?": "No",
//     "14a. Location B? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)": "Temple | Ruins | Dungeon Entrance/Exit",
//     "14b. Describe Location A": "Dungeon that adventurers go to seek treasure",
//     "14c. If Other, Add Details": "No response",
//     "14d. Will Location A Be Hidden On The Player Maps?": "Yes",
//     "Location C Description (If You Pledged Higher For More Locations)": "farming villages",
//     "Location D Description (If You Pledged Higher For More Locations)": "Mining towns that extract rare metals that are then used by dwarfs to create superior quality items for the empire",
//     "Location E Description (If You Pledged Higher For More Locations)": "No response",
//     "Anything To Add?": "No response"
    
    
//     */
//     echo "test";

//     echo "<br><br />---------------------------";
  
//    print_r( $value);
  
//   return $value;
// }

  //echo $small;
 
?>

