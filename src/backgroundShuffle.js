 

function shuffle(){

    const ranNum = Math.floor(Math.random() * 16);

    console.log(`src/${ranNum}.jpg`); 
     
    document.body.style.setProperty('background-image', `rgba(0, 0, 0, 0.7) url('img/${ranNum}.jpg')`);  
    document.body.style.setProperty('background-size', 'cover');   
    document.body.style.setProperty('background-repeat ', 'no-repeat');  
    document.body.style.setProperty('background-blend-mode ', 'darken');    
}

shuffle();
