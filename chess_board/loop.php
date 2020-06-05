<?php

$loop = '<div class="board">';

for( $i = 1; $i <= 8; $i++)
{
$loop = $loop . '<div class="row">';
    for ($j = 1; $j <= 8; $j++){
       $class = $i % 2 == $j % 2 ? 'white': 'black';

       $figures =  '';
       if($i == 4 && $j == 2){
        $figures = '<img src="https://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png">';
       }

       if($i == 8 && $j == 6){
           $figures = '<img src="https://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/queen.png">';
       }
        
     $loop .='<div class="' . $class . '">' . $figures . '</div>';
    }
    $loop = $loop . '</div>';
}
$loop = $loop . '</div>';