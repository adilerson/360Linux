<?php 

    function dados($str){
        $json = file_get_contents("360Linux/360/data.json");

        $data = json_decode($json);
        
        
        foreach ($data as $key => $value) {
            if ($key == $str){
                
                return $value;
            }
        }
    }
    


?>