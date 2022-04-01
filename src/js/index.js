const btn = document.getElementById('btn-dice')
btn.addEventListener('click', jogarDado)

function jogarDado(){
        mover(6)
        console.log(x);
        document.getElementById('demo').innerHTML = `<img src='src/imagem/dado${x}.png'>`
}


function mover(number){
     
        let numeroAleatorio = (Math.floor(Math.random()*(number+1)));
        if( numeroAleatorio !== 0){
                        x = numeroAleatorio
        } else{
                mover(number)
        }
    
               return x 
        }


