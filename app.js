document.addEventListener("DOMContentLoaded", () =>{
    const grid = document.querySelector('.grid'); //Afectara mi grid cada vez que cambie grid
    let squares = document.querySelectorAll('.grid div');//javascript sabe que le hablo a todos mis cuadrados cada vez que cambie squares
    const ScoreDisplay = document.querySelector("#score");
    const StartButton = document.querySelector("#start-button")
    const width = 10

    //Piezas
    conts lTetromino = [[1, width+1, width*2+1, 2], 
        [width, width+1, width+2, width*2+2], 
        [1, width+1, width*2+1,width*2], 
        [width,width*2, width*2+1, width*2+2]
    ]

})