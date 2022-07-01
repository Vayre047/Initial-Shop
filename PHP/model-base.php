<?php

    class Base {
        public $db;

        public function __construct()
        {
            $this->db = new PDO("mysql:host=localhost;dbname=mainstore;chartset=utf8mb4", "root", "");
        }
    }

?>