


<?php

// establish PDO. Exceptions on, Emulate off.

$db = new PDO(
                                'mysql:host=localhost;dbname=JHSweeps;charset=utf8',
                                'jha',
                                'PLus3xwww82Lo7hqVi3m' ,
                                array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));


// localize POST variables. Dunno why I need this anymore since we're not doing escape strings, but whatev.
$fn = $_POST['FirstName'];
$ln = $_POST['LastName'];
$em = $_POST['Email'];
$te = $_POST['Phone'];
$ad = $_POST['Address'];
$ct = $_POST['City'];
$st = $_POST['State'];
$zi = $_POST['Postal_Code'];
$re = $_POST['exterior_prroject_timing'];
$ch = $_POST['att'];
$cn = $_POST['Campaign_Number__c'];

// scrub text values (not anymore. Thanks PDO!)

// prep MYSQL statement. Establishes statement with array for values. This BINDS my values to my entries.
$stmt = $db->prepare("INSERT INTO leads (firstname, lastname, email, tel, street, city, state, zip, repair, att, Campaign_Number_c) VALUES(:field1,:field2,:field3,:field4,:field5,:field6,:field7,:field8,:field9,:field10,:field11)");

// Execute the prepared statement...throw in the locals!

$stmt->execute(array(
        ':field1' => $fn,

        $stmt->execute(array(
        ':field1' => $fn,
        ':field2' => $ln,
        ':field3' => $em,
        ':field4' => $te,
        ':field5' => $ad,
        ':field6' => $ct,
        ':field7' => $st,
        ':field8' => $zi,
        ':field9' => $re,
        ':field10' => $ch,
        ':field11' => $cn
));

// Recycle everything! Use this to confirm success.
$affected_rows = $stmt->rowCount();


if ($affected_rows === 1) {


        header('Location:thankyou.html');


} else {

        // send them to an error page
        header('Location:error.html');
};


?>