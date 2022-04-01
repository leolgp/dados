const btn = document.getElementById('btn-dice')
btn.addEventListener('click', jogarDado)

function jogarDado(){
        let numero = mover(6);
        console.log('funçao jogarDado: ',numero);
         document.getElementById('demo').innerHTML = `<img src='src/imagem/dado${numero}.png'>`
}



function mover(number){
        
        let numeroAleatorio = (Math.floor(Math.random()*(number+1)));
        console.log('funçao mover: ', numeroAleatorio);
        if (numeroAleatorio === 0 ){
         jogarDado();
        } else {
               return numeroAleatorio 
        }
}

