"use strict";

const container = document.querySelector(".container"),
      dogs = document.getElementById("dogs"),
      cat = document.getElementById("cat"),
      fox = document.getElementById("fox");

let  animalCard = document.querySelector(".animal__card");


const getCats = (url)=>{              
  fetch(url)
  .then((response) => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error('Server response wasnt OK');
    }
  })
  .then((json) => {
    
    const creatingElem = (url)=>{
      if(url.match(/[\.jpg\.png\.gif]$/ig)){  /*gif,jpg,png,jpeg */
        animalCard.innerHTML = 
        `<img src = "${url}" width="300px">`;      
      }
      if(url.match(/[\.mp4\.webm]$/ig)){      /*mp4,webm*/
        animalCard.innerHTML = 
        `<video width="300px" autoplay controls loop>
          <source src = "${url}">
        </video>`;
      }
    };


    if(url.match(/cat/ig)){
      let url = json.file;
      creatingElem(url);
    }
    if(url.match(/dog/ig)){
      let url = json.url;
      creatingElem(url);
    }
    if(url.match(/fox/ig)){
      let url = json.image;
      creatingElem(url);
    }
  })
  .catch((error)=>{
      animalCard.innerHTML = error;
      throw new Error(error);
  });
};


 /*json.image for foxes */
 /*json.file for cats */
 /*json.url for dogs */

container.addEventListener("click", (event)=>{
    event = event.target;
    if(event.closest("#dogs")){      
      getCats('https://random.dog/woof.json');
    }  
    if(event.closest("#cat")){
      getCats('https://aws.random.cat/meow');
    }
    if(event.closest("#fox")){
      getCats('https://randomfox.ca/floof/');
    }

    
});
