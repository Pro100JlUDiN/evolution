document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
          output = document.getElementById('output');
        //  carsObj = "./cars.json";

    const getCars = new Promise((resolve, reject)=>{
            const request = new XMLHttpRequest();
            request.open('GET', "./cars.json");
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } else {
                    reject('Произошла ошибка');
                    console.log(request);
                }
            });
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
    });

    const choiseCar = (data)=>{
        data.cars.forEach(item => {
            if (item.brand === select.value) {
                const {brand, model, price} = item;
                output.innerHTML = `Тачка ${brand} ${model} <br>
                Цена: ${price}$`;
            }
        });
    };


    select.addEventListener('change', 
    getCars
    .then((choiseCar, error => output.innerHTML = error))
    );

});