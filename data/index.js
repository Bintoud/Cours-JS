const array = ['Paris', 'Lyon', 'Montreal', 'Bordeau'];
const array1 = ['Paris', 33, ['Montreal', 'Bordeau'], true];
// console.log(array) // j'appel mon array;
//console.log(array[2]); // j'appel un élem de mon array ici 'Montreal';
//console.log(array[2][4]) // je récupère la cinquième lettre de 'Montreal' donc le r

// pour enumérer tout ce qui est ds un array on use FOR
// < = inférieure

//for(i = 0; i < array1.length; i++ ) {
//    console.log(array1[i]);
    // console.log(typeof array1[i]) //pour savoir quel type de donnée que s'est.
//}

// *******************************************************************************
const input = document.getElementById('input');
const video = document.getElementById('video');
let link = ""; // je crée cet var pour pouvoir insérer un lien

//récup la valeur d1 input
input.addEventListener('input', (e) => {
    //console.log(e.target.value);
// a chaque fois que ds l'input il y a un évent qui se passe tu récup la valeur de (e.target.value) et tu la passe a link;
//link = e.target.value;
changeLink(e.target.value); // appel ma fonction changeLink

//ajout d'une video ds la div video html
// s'il n'y a pas de lien tu ne m'affiche pas las vidéo
    if (link) {
    video.innerHTML = 
    `<iframe width="784" height="480" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
});

// pour traiter, anlyser et transformer une donnée 
// je créer une fonction qui sera relancer à chaque fois ds notre  je vais devoir passer ds notre addEventListener
// (linkToChange) sera = (e.target.value)
// link = embed.split('&')[0] pour enlever le & afin que la video fonctonne 
// ligne41 [0]veut dire tu me garde que le 1er array
const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=', "embed/");
    link = embed.split('&')[0]; 
    console.log(link)
}


// https://www.youtube.com/embed/QB1DTl7HFnc?list=PLEiMYEzpB4QuviwNtxEcwqymS_us7gH8H

//https://www.youtube.com/watch?v=QB1DTl7HFnc&list=PLEiMYEzpB4QuviwNtxEcwqymS_us7gH8H&index=6;