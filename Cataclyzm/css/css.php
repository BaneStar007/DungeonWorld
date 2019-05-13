<?php 



$hfontFamilies = array(
   "Fredericka the Great", "frederickathegreat/v7/9Bt33CxNwt7aOctW2xjbCstzwVKsIBVV-9Sh", 80,


   "Architects Daughter",
   "architectsdaughter/v9/KtkxAKiDZI_td1Lkx62xHZHDtgO_Y-bvfYs", 24,



   "Uncial Antiqua",
   "uncialantiqua/v6/N0bM2S5WOex4OUbESzoESK-i-PfU", 24,
            
   "IM Fell English",
   "imfellenglishsc/v8/a8IENpD3CDX-4zrWfr1VY879qFF05pZLPg", 24,
               
   "IM Fell English",
   "imfellenglishsc/v8/a8IENpD3CDX-4zrWfr1VY879qFF05pZLPg", 18
               
       
);




$hfontCount = count($hfontFamilies)/3;

echo "/* ".$hfontCount." */";

for ($f=0; $f< $hfontCount; $f++) {
   echo '
   @font-face {
      font-family: "'.$hfontFamilies[($f*3)].'";
      src: url("http://fonts.gstatic.com/s/'.$hfontFamilies[($f*3)+1].'.woff2") format("woff2");
   
}';
}


$fontFamilies = array(
   "Droid-Serif", "droidserif/v9/tDbI2oqRg1oM3QBjjcaDkNr_", 16,
   "Droid-Serif-Italic", "droidserif/v9/tDbK2oqRg1oM3QBjjcaDkOr4rAU",16,
   "Droid-Serif-Bold", "droidserif/v9/tDbV2oqRg1oM3QBjjcaDkOJGiSD5",16,
   "Droid-Serif-Bold-italic", "droidserif/v9/tDbX2oqRg1oM3QBjjcaDkOr4lLz5OwE",16,

   "MedievalSharp",
   "medievalsharp/v11/EvOJzAlL3oU5AQl2mP5KdgptAqo", 24,
   
   "Rock Salt",
   "rocksalt/v9/MwQ0bhv11fWD6QsAVOZbtQ", 24,
   
   "Fanwood Text-400-normal",
   "fanwoodtext/v8/3XFtErwl05Ad_vSCF6Fq7xXGQA", 24,
   
   "Fanwood Text-400-italic",
   "fanwoodtext/v8/3XFzErwl05Ad_vSCF6Fq7xX2R9zZ", 24,
    
   "Walter Turncoat-400-normal",
   "walterturncoat/v9/snfys0Gs98ln43n0d-14ULoToe67ZQ", 24,
   
   "Economica-400-normal",
   "economica/v6/Qw3fZQZaHCLgIWa29ZBrNA", 24,
   
   "Economica-400-italic",
   "economica/v6/Qw3ZZQZaHCLgIWa29ZBbM8IB", 24,
               
   "Economica-700-normal",
   "economica/v6/Qw3aZQZaHCLgIWa29ZBTjeckDw", 24,
               
   "Economica-Bold-Italic",
   "economica/v6/Qw3EZQZaHCLgIWa29ZBbM_q4D3x4", 24
);

$fontCount = count($fontFamilies)/3;

echo "/* ".$fontCount." */";

for ($f=1; $f< $fontCount; $f++) {



    echo "/* ".$f." */";
   echo '
   @font-face {
      font-family: "'.$fontFamilies[($f*3)].'";
      src: url("http://fonts.gstatic.com/s/'.$fontFamilies[($f*3)+1].'.woff2") format("woff2");
   
    }';
}


                        


   for ($f=0; $f< $hfontCount; $f++) {
      echo '
         h'.($f+1).' {
            font-family: "'.$hfontFamilies[($f*3)].'";
            font-size: '.$hfontFamilies[($f*3)+2].'px;
                  }';
                        }

echo '
h1, h2, h3, h4, h5, h6 {
   color: #000000;
   background-color: transparent;
   font-weight: 400;
   font-style: normal;
   font-variant: normal;
   text-decoration: none;
   vertical-align: baseline;
   white-space: pre;
}';

for ($f=0; $f< $fontCount; $f++) {
   echo '
      .t'.$f.' {
         font-family: "'.$fontFamilies[($f*3)].'";
         font-size: '.$fontFamilies[($f*3)+2].'px;
               }';
                     }

?>