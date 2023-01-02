<?php 

    function dados($str){
        if ($_SERVER['SERVER_NAME'] =='localhost'){
            $json = file_get_contents("data.json");
            
        }else{
            $json = file_get_contents("/var/www/html/360Linux/360/data.json");
            
        }

        $data = json_decode($json);
        
        
        foreach ($data as $key => $value) {
            if ($key == $str){
                
                return $value;
            }
        }
    }
    


?>