<?php
    abstract class ClassConnection {
        protected function connectDB() {
            try {
                $conn = new PDO("mysql:host=127.0.0.1;dbname=react", "root", "simon2311");
                return $conn;
            } catch (PDOException $ex) {
                echo $ex->getMessage();
            }
        }
    }
