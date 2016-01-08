<?php
$name = $_POST["name"];
$pass = $_POST["pass"];

$dbhost = "127.0.0.1";
$dbusername = "c3170";
$dbpass = "kk70mgjtc6qv";
$dbname = "instance_c3170_modx";

$mysqli = new mysqli($dbhost, $dbusername, $dbpass, $dbname);

if ($mysqli->connect_error) {
    die('Ошибка подключения (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

if ($mysqli->query("INSERT INTO user (login, password) VALUES ('$name','$pass')") === TRUE) {
    printf("Таблица myCity успешно создана.\n");
}

$mysqli->close();