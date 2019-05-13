<?php


if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){
   $privatekey = "6LeahaEUAAAAAGI0On6Bd11i2ZnDOL9disQ9pxBa";
   $captcha = $_POST['g-recaptcha-response'];
   $url = 'https://www.google.com/recaptcha/api/siteverify';
   $data = array(
       'secret' => $privatekey,
       'response' => $captcha,
       'remoteip' => $_SERVER['REMOTE_ADDR']
   );
 
   $curlConfig = array(
       CURLOPT_URL => $url,
       CURLOPT_POST => true,
       CURLOPT_RETURNTRANSFER => true,
       CURLOPT_POSTFIELDS => $data
   );
 
   $ch = curl_init();
   curl_setopt_array($ch, $curlConfig);
   $response = curl_exec($ch);
   curl_close($ch);
   $jsonResponse = json_decode($response);
   if ($jsonResponse->success === true) {
      echo $response;
   }
   else {
       $errMsg = 'Robot verification failed, please try again.';
     }
 } else{
 
   $errMsg = 'Please click on the reCAPTCHA box.';
 }
?>