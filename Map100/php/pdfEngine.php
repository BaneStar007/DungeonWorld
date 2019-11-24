<?php
function pdfPanel($data) {

   // Template for PDF creator
   echo '
   <div class="pdfEngine"> 
   ';
   // Main Box
   echo '
      <div class="mainBox">
   ';
  
   echo '<div class="mapBox" style="position: relative">';
   // Later, maybe go thrighthis list
   // foreach($data['mapHex'] as $mapHex) {

   // }
      echo '<div class="mapPos" style="position:absolute; top:'.$data['locX'].'px; left:'.$data['locY'].'px;"></div>';
   
   echo '</div>';
   //'Backer Number', 'Backer Name', 'Title',
   echo '<div class="box titlebox itemBox60">
            <label class="itemLabel">'.$data['Backer Number'].':</label>';
   echo '<div class="itemData"> '.$data['Backer Name'].'</div>
         
            <span class="itemTitle">'.$data['Title'].':</span>';
   echo '</div>';
   
   


   // elements
   //loop through the elements
   $list = array(                               'Location Type', 
                  'Image Description',
                  'PDF_Description',                     'Loc Type Details',
                 'Biomes',
                'Terrain Description', 'Terrain', 'Terrain Other', 
               'Terrain Borders', 'StyleType' );
   $listSize = array('20', 
                     '60', 
                     '80', '20' ,
               '80', '20', 
               '80', '20', 
               '30', '30', '30', '30', 
               '20', '20');
   $i =0;
   
   foreach($list as $item) {

      switch ($item) {

         case 'PDF_Description' :
         echo '<div class="DescBox itemBox'.$listSize[$i].'">
                  <label class="itemLabel">'.$item.'</label>
                  <div class="itemData"> '.$data[$item].'</div>
               </div>';
         break;




         case 'Terrain' : 
         case 'Terrain Borders' : 
         echo '<div class="box itemBox'.$listSize[$i].'">';
         echo '<div class="imgData">';
         $split = explode(' | ', $data[$item] );
         foreach($split as $img) {
            switch($img) {
               case 'Forest - Jungle or Rainforest' :
               echo '<div class="col_jungle jungle" ></div>';
               break;
               case 'Plains / Grassland' :
               echo '<div class="col_plains plains" ></div>';
               break;
               case 'Mountains' :
               echo '<div class="col_mountain mountains" ></div>';
               break;
               case 'Lake / Sea' :
               case 'Lake/Sea':
               echo '<div class="col_sea sea" ></div>';
               break;
               case 'Forest - Boreal or Temperate' :
               echo '<div class="col_borreal borreal" ></div>';
               break;
                   
               case 'Hills/Cliffs' :
               case 'Hills /Cliffs' :
               echo '<div class="col_hills hills" ></div>';
               break;

               case 'Coastal' :
                  echo '<div class="col_coastal coastal" ></div>';
               break;

               case 'Swamp / Mangroves' :
                  echo '<div class="col_swamp swamp" ></div>';
               break;

               case 'Desert' :
                  echo '<div class="col_desert desert" ></div>';
               break;

               case 'Taiga / Steppe' :
                  echo '<div class="col_taiga taiga" ></div>';
               break;

               case 'Other (Only choose if you have increased pledge)' :
                  echo '<div class="col_other other" ></div>';
               break;
               

               default: 
               echo '<div class="itemData">'.$img.'</div>';
               break;

            }
            
         }
         echo '</div></div>';
      break;
      
         case 'Location Type' : 
         echo '<div class="box itemBox'.$listSize[$i].'">';
         echo '<div class="imgData">';
         $split = explode(' | ', $data[$item] );
         foreach($split as $img) {
            switch($img) {
               case 'Castle/Fortress/City/Tower' :
               echo '<img class="icon_castle" src="img/icons_sm.png">';
               break;
               case 'Dungeon/Crypt/Tomb' :
               echo '<img class="icon_dungeon" src="img/icons_sm.png">';
               break;
               case 'Exotic/Abnormal Terrain' :
               echo '<img class="icon_terrain" src="img/icons_sm.png">';
               break;
               case 'Mine/Hole/Crack in Ground' :
               echo '<img class="icon_hole" src="img/icons_sm.png">';
               break;
               case 'Exotic Natural Object (tree/rock/other)' :
               echo '<img class="icon_object" src="img/icons_sm.png">';
               break;
                   
               case 'Other (Only choose if you have increased pledge)' :
               echo '<img class="icon_unknown" src="img/icons_sm.png">';
               break;
               default: 
               echo '<div class="itemData">'.$img.'</div>';
               break;

            }
            
         }
         
      echo '</div></div>';
      break;

      case 'Biomes' : 
         echo '<div class="box itemBox'.$listSize[$i].'">';
         echo '<div class="imgData">';
         $split = explode(' | ', $data[$item] );
         foreach($split as $img) {
            switch($img) {
               

  
               case 'Arctic or Arctic Fringes ( minus winters, 0-5.c summers' :
               echo '<div class="cold" >Cold 0.c</div>';
               break;
               case 'Cooler Temperate Zone (minus winters, 20.c summers' :
               echo '<div class="cool" >Cold 10.c</div>';
               break;
               case 'Mid Range (o.c winters, 30.c summers)' :
               echo '<div class="mid" >Mid 20.c</div>';
               break;
               case 'Warmer climates (10.c winters, 40.c summers)' :
               echo '<div class="warm" >Warm 25.c</div>';
               break;
               case 'Tropical (20.c winters, 45.c summers)' :
               echo '<div class="tropic" >Tropic 30.c</div>';
               break;
               case 'asd' :
               echo '<div class="heat" >Heat 20.c</div>';
               break;
               case 'Warmer climates (10.c winters, 40.c summers)' :
               echo '<div class="death" >Death 20.c</div>';
               break;
                   
               case 'Any of the Above' :
               echo '<div class="mid" >ANY!</div>';
               break;
               default: 
               echo '<div class="itemData">'.$img.'</div>';
               break;

            }
            
         }
         
      echo '</div></div>';
      break;

     
      
      default:
      echo '<div class="box itemBox'.$listSize[$i].'">
               <label class="itemLabel">'.$item.'</label>
               <div class="itemData"> '.$data[$item].'</div>
            </div>';
      break;
      } 
      $i++;
   }


   // end the structure
   echo '
         
      </div>
   </div>
   ';
}
?>