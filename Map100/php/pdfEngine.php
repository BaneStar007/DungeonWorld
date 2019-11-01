<?php
function pdfPanel($data) {

   // Template for PDF creator
   echo '
   <div class="pdfEngine"> '.$data.'
   ';
   // Main Box
   echo '
      <div class="mainBox">
   ';
  
   // elements
   //loop through the elements
   $list = array('Backer Number', 'Backer Name', 'Title', 'Location Type', 'PDF_Description', 'Loc Type Details', 'Image Description', 'Terrain');
   $listSize = array('20','-','40','20', '100', '20', '30', '20', '20');
   $i =0;
   
   foreach($list as $item) {

      switch ($item) {
         case 'Location Type' : 
         echo '<div class="box itemBox'.$listSize[$i].'">';
         $split = explode(' | ', $data[$item] );
         foreach($split as $img) {
            switch($img) {
               case 'Castle/Fortress/City/Tower' :
               echo '<div class="itemData"><img class="icon_castle" src="img/icons_sm.png"></div>';
               break;
               case 'Dungeon/Crypt/Tomb' :
               echo '<div class="itemData"><img class="icon_dungeon" src="img/icons_sm.png"></div>';
               break;
               case 'Exotic/Abnormal Terrain' :
               echo '<div class="itemData"><img class="icon_terrain" src="img/icons_sm.png"></div>';
               break;
               case 'Mine/Hole/Crack in Ground' :
               echo '<div class="itemData"><img class="icon_hole" src="img/icons_sm.png"></div>';
               break;
               case 'Exotic Natural Object (tree/rock/other)' :
               echo '<div class="itemData"><img class="icon_object" src="img/icons_sm.png"></div>';
               break;
                   
               case 'Other (Only choose if you have increased pledge)' :
               echo '<div class="itemData"><img class="icon_unknown" src="img/icons_sm.png"></div>';
               break;
               default: 
               echo '<div class="itemData">'.$img.'</div>';
               break;

            }
            
         }
         
         
      echo '</div>';
      break;

      case 'Backer Number' : 
      echo '<div class="box itemBox'.$listSize[$i].'">
               <label class="itemLabel">Backer</label>
               <div class="itemData"> '.$data[$item].' :';
      break;
      case 'Backer Name' : 
      echo $data[$item].'</div>
            </div>';
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