<?php
    include('ClassConnection.php');

    class ClassCarros extends ClassConnection {
        public function exibeCarros() {
            $stmt = $this->connectDB()->prepare("SELECT * FROM carros");
            $stmt->execute();

            $J = [];
            $I = 0;

            while($Fetch = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $J[$I] = [
                    "id"=>$Fetch['id'],
                    "name"=>$Fetch['name'],
                    "age"=>$Fetch['age'],
                    "hobby"=>$Fetch['hobby']
                ];

                $I++;
            }

            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json");
            echo json_encode($J, JSON_UNESCAPED_UNICODE);
        }
    }