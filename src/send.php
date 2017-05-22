
<?
// CRM server conection data
define('CRM_HOST', 'ubc.bitrix24.ua'); // your CRM domain name
define('CRM_PORT', '443'); // CRM server port
define('CRM_PATH', '/crm/configs/import/lead.php'); // CRM server REST service path

// CRM server authorization data
define('CRM_LOGIN', 'ubc.script@gmail.com'); // login of a CRM user able to manage leads
define('CRM_PASSWORD', 'route12345'); // password of a CRM user

/********************************************************************************************/

// POST processing
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{

	// get lead data from the form
	$postData = array(
		'TITLE' => "Рівненська Брама -".$_POST["whatForm"], //Имя лида
		'SOURCE_DESCRIPTION' => $_SERVER['HTTP_REFERER'], //Коментарий об источнике
		'SOURCE_ID'=>'WEB', //Индификатор источника
		'NAME' => $_POST["name"], //Поле "Полное имя"
		'PHONE_MOBILE' => substr(htmlspecialchars(trim($_POST['phone'])), 0, 100), //Поле "Телефон"
		'EMAIL_WORK' => substr(htmlspecialchars(trim($_POST['email'])), 0, 100), //Поле "E-Mail"
		'COMMENTS' => $_POST["whatForm"], //Поле "Коментарий"
	);

	// append authorization data
	if (defined('CRM_AUTH'))
	{
		$postData['AUTH'] = CRM_AUTH;
	}
	else
	{
		$postData['LOGIN'] = CRM_LOGIN;
		$postData['PASSWORD'] = CRM_PASSWORD;
	}

	// open socket to CRM
	$fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
	if ($fp)
	{
		// prepare POST data
		$strPostData = '';
		foreach ($postData as $key => $value)
			$strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);

		// prepare POST headers
		$str = "POST ".CRM_PATH." HTTP/1.0\r\n";
		$str .= "Host: ".CRM_HOST."\r\n";
		$str .= "Content-Type: application/x-www-form-urlencoded\r\n";
		$str .= "Content-Length: ".strlen($strPostData)."\r\n";
		$str .= "Connection: close\r\n\r\n";
		$str .= $strPostData;

		// send POST to CRM
		fwrite($fp, $str);

		// get CRM headers
		$result = '';
		while (!feof($fp))
		{
			$result .= fgets($fp, 128);
		}
		fclose($fp);

		// cut response headers
		$response = explode("\r\n\r\n", $result);

		$output = '<pre>'.print_r($response[1], 1).'</pre>';
	}
	else
	{
		echo 'Connection Failed! '.$errstr.' ('.$errno.')';
	}
}
else
{
	$output = '';
}

?>

<?php

	// $owner_email = "example@example.com"; // емейл на который отправляются письма

$owner_email = "7078050@gmail.com";

	$headers = "Content-type: text/html; charset=utf-8 \r\n";

	$subject = 'Повідомлення з сайту ' . $_SERVER['Рівненська Брама'];

	$messageBody = "";



	if($_POST["whatForm"] != ''){

		$messageBody .= '<p><strong>Форма:</strong> ' . $_POST["whatForm"] . '</p>' . "\r\n";

	}



	if(isset($_POST['name'])) {

        $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);

        $messageBody .= '<b>Ім`я відправника:</b>' . $name . "\r\n";

    }

    if(isset($_POST['phone'])) {

        $phone = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);

        $messageBody .= '<b>Номер телефона:</b>' . $phone . "\r\n";

    }

    if(isset($_POST['email'])) {

        $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);

        $messageBody .= '<b>Електронна пошта:</b>' . $email . "\r\n";

    }



	try{

		if(!mail($owner_email, $subject, $messageBody, $headers)){

			throw new Exception('mail failed');

		} else {

			echo 'mail sent';

		}

	}catch(Exception $e){

		echo $e->getMessage() ."\n";

	}

?>

