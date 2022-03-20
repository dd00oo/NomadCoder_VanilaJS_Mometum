 

function shuffle(){

    const ranNum = Math.floor(Math.random() * 16);

    console.log(`src/${ranNum}.jpg`); 
     
    document.body.style.setProperty('background-image', `url('img/${ranNum}.jpg')`);  
    document.body.style.setProperty('background-size', 'cover');   
    document.body.style.setProperty('background-repeat ', 'no-repeat');    
}

shuffle();