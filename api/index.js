
const quote = document.getElementById('quote');

const getQuote = () => {
fetch('https://api.quotable.io/random') // va chercher l'api
    .then((res) => res.json())          // une que t'as une réponse tu me l'a traite en json
    .then((data) => {                   // récup data
       quote.innerHTML = data.content
    });       
    
fetch('https://picsum.photos/1600/1000')
    .then((res) => {
        document.getElementById('pic').innerHTML = 
            `<img src=${res.url} />`;
    })
};   

quote.addEventListener('click', () => getQuote());// au click je change de sitation
getQuote();
