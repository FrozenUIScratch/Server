<?php
	if ($_SERVER['REQUEST_METHOD'] == "GET") {
		$req = $_GET['request'];
		if ($req == "getweb"){
			$htmlDATA = file_get_contents($_GET['data']);
			echo $htmlDATA;
		}
		if ($req == "status"){
			echo "200";
		}
		if ($req == ""){
			
		}

		http_response_code(200);

	} elseif ($_SERVER['REQUEST_METHOD'] == "POST") {
		$req = $_POST['request'];
		if ($req == "getweb"){
			$htmlDATA = file_get_contents($_POST['data']);
			echo $htmlDATA;
		}


		http_response_code(200);
	} else {
		echo("405");
		http_response_code(405);
	}
?>