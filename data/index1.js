// manipulation d'une data

const input = document.getElementById('input');
const video = document.getElementById('video');
let link = ""; 

input.addEventListener('input', (e) => {
    changeLink(e.target.value);

    if (link) {
    video.innerHTML = 
    `<iframe width="784" height="480" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
});

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace('watch?v=',"embed/");
    link = embed.split('&')[0]; 
    console.log(link)
}



