const btn = document.querySelector('#btn');
const img = document.getElementById('img');

//Autre façon de faire
// btn.onclick = function() { img.classList.toggle('show')} 
// btn.onclick = () => {img.classList.toggle('show')}

btn.addEventListener('click', () => {
    img.classList.toggle('show');
})
// add= ajouter remove= enlever toggle= fait l'inverse des 2;

// ******************************************************
const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (e) => {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + '%';
    //pour savoir quel pourcentage exact on est de la fenetre lorsqu'on bouge la souris
    // on injecte du style = valeur de X diviser part la largeur de lécran * 100 
    //car left est en % et la valeur puisque qu'elle est en % on concatène(+) avec %

    if (e.x > 600) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none";
    }
})

// **********************************************************

document.getElementById('input').addEventListener('input', (e) => {
  vertical.innerHTML = e.target.value;
})

// *******************************************************

const theme = document.querySelectorAll('.theme'); // récup toutes les class themess
// const dark = document.querySelector('.dark');
// const salmon = document.querySelector('.salmon');
// const yellow = document.querySelector('.yellow');

//pour mettre des event sur plusieurs chose du dom avec les meme directives
theme.forEach((item) => { 
    item.addEventListener('click', (e) => { // a chaque fois que le click est lancer tu m'exécute ligne 46 et apres le switch
        console.log(e.target.id); // <= pour savoir quel elem a été cliquer
        document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme"); // pour renouveler faire remove
        switch(e.target.id) {
            case "dark": // si je clic sur dark
                document.body.classList.add("darkTheme");// sur la classlist du body (document.body.classList)du ajoute(add) la class .darkTheme (créer ds le css )
                break; 
            case "salmon":
                document.body.classList.add("salmonTheme");
                break;
            case "yellow":
                document.body.classList.add("yellowTheme");
                break;  
            default:
                null;
        }
    })
})

// forEach= pour chacun des élem on va mettre un evenement 