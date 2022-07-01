<?php

    session_start();
    
    define("ROOT", rtrim(str_replace("\\", "/", dirname($_SERVER["SCRIPT_NAME"])), "/"));

    $url = explode("/", $_SERVER['REQUEST_URI']);

    $controller = $url[2] ?: "home";

    $id = $url[3] ?? "";

    require("Controllers/controller-" . $controller . ".php");

?>