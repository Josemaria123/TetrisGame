document.addEventListener("DOMContentLoaded", () =>{//Se ejecutara el codigo cada vez que se cargue todo el archivo html y sus estilos
    const grid = document.querySelector('.grid'); //Afectara mi grid cada vez que cambie grid
    let squares = document.querySelectorAll('.grid div');//javascript sabe que le hablo a todos mis cuadrados cada vez que cambie squares
    const ScoreDisplay = document.querySelector("#score");
    const StartButton = document.querySelector("#start-button")
    const width = 10

    //Piezas
    const lTetromino = [[1, width+1, width*2+1, 2], 
        [width, width+1, width+2, width*2+2], 
        [1, width+1, width*2+1,width*2], 
        [width,width*2, width*2+1, width*2+2]
    ]

    const tTetromino =[[1, width, width+1, width+2],
        [1, width+1, width+2,width*2+1],
        [width, width+1, width+2, width*2+1], 
        [1, width, width+1, width*2+1]
    ]

    const oTetromino = [[0,1,width, width+1],
        [0,1,width, width+1],
        [0,1,width, width+1],
        [0,1,width, width+1]
    ]

    const iTetromino = [[1, width+1, width*2+1,width*3+1],
        [width, width+1, width+2,width+3],
        [1, width+1, width*2+1,width*3+1],
        [width, width+1, width+2, width+3]
    ]
    const theTetrominoes = [lTetromino, tTetromino, oTetromino, iTetromino];
    let random = Math.floor(Math.random()*theTetrominoes.length)

    //Selecciona un tetromino al azar
    let currentRotation = 0
    let currentPosition = 4
    console.log(random);
    let current = theTetrominoes[random][currentRotation];//Retorna un array 

    //Draw the first tetromino

    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add("tetromino")
        })
    }

    //Undraw the tetromino
    
    function undraw(){
        current.forEach(index => {
            squares[currentPosition+index].classList.remove("tetromino")
        })
    }
    
    timerId = setInterval(moveDown, 1000)//mueve el tetromino hacia abajo cada un segundo

    function moveDown(){
        undraw();
        currentPosition += width;
        draw()
        freeze()
    }


    //freeze statement

    function freeze(){
        if (current.some(index => squares[currentPosition+index+width].classList.contains("taken"))){
    
            current.forEach(index => squares[currentPosition + index].classList.add("taken"))
            random = Math.floor(Math.random()*theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
        }
    }
})