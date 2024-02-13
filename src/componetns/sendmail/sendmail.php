<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('from@kultmaket.ru', 'kultmaket.ru');
	//Кому отправить
	$mail->addAddress('workshop@kultmaket.ru');
	//Тема письма
	$mail->Subject = 'Новый заказ на сайте';

	//Тело письма
	$body = '<h4>Надо ответить человеку</h4>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}	
	if(trim(!empty($_POST['company']))){
		$body.='<p><strong>Компания:</strong> '.$_POST['company'].'</p>';
	}	
	if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
	}	
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>Почта:</strong> '.$_POST['email'].'</p>';
	}	
	if(trim(!empty($_POST['sizes']))){
		$body.='<p><strong>Размеры макета:</strong> '.$_POST['sizes'].'</p>';
	}	
	if(trim(!empty($_POST['timelimit']))){
		$body.='<p><strong>Срок изготовления макета:</strong> '.$_POST['timelimit'].'</p>';
	}	
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}	
	
	/*
	//Прикрепить файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//путь загрузки файла
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузим файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>