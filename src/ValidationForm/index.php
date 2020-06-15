<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server
if($_SERVER['HTTPS_REFERER'] === "https://allbeautybysara.co.uk/"){
    // extract the data from $_POST
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $message = isset($_POST['message']) ? $_POST['message'] : null;
    $email = isset($_POST['sendto']) ? $_POST['sendto'] : null;

    if($name && $message && $email){
    
        //Load composer's autoloader
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'no-reply@netlify.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = '';           // SMTP username
            $mail->Password   = '';                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom('allbeautybysara@gmail.com', 'React Contact form');
            $mail->addAddress($email);     // Add a recipient
            $mail->addReplyTo('allbeautybysara@gmail.com', 'Information');

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = 'React Contact form';
            $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>Message:</b> '
            . $message;

            if($mail->send())
                echo "Message has been sent!";
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }
}else{
    echo "You can't use this server!";
}
?>