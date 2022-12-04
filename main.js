const touches = [...document.querySelectorAll('.button')]

const listKeyCode = touches.map(touche => touche.dataset.key)

const screen = document.querySelector('.screen')

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    // console.log(valeur, typeof valeur)
    calcul(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    // console.log(valeur, typeof valeur);
    calcul(valeur)
})

const calcul = (valeur) => {
    if(listKeyCode.includes(valeur)){
        switch(valeur){
            case '8': 
            screen.textContent = "";
            break;
            case '13':
             const calcul = eval(screen.textContent)
             screen.textContent = calcul;   
             break;
            default:
                const indexKeycode = listKeyCode.indexOf(valeur);
                const touche = touches[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul: ' + e.message)
})






