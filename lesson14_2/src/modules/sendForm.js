const sendForm = ()=>{
    const errorMessage = "./images/error.gif",
          loadMessage = "./images/loading.gif",
          successMessage = "./images/kote.jpg";
    
    //форма для заявки
    const mainForm = document.getElementById("form1"),
          popUpWindow = document.getElementById("form3"),
          bottomForm = document.getElementById("form2");
    const statusMessage = document.createElement("img");

    
    // обработка введенных данных и отправка
    const treatmentForms = (form)=>{
        //почва для очистки полей ввода
        let inputArr = [];
        form.addEventListener("change", ()=>{
            inputArr.push(event.target);
        });

        //добавление сообщений состояния
        form.addEventListener("submit", (event)=>{
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.src = loadMessage;
            
            const formData = new FormData(form);
            let body = {};
            
            formData.forEach((val, key)=>{
                body[key] = val;
            });

            postData(body)
            .then((response)=>{
                if(response.status !== 200){
                    throw new Error("status network is not 200");
                }
                statusMessage.src = successMessage;
                inputArr.forEach(item => item.value = "");
            })
            .catch((error)=>{
                statusMessage.src = errorMessage;
                console.error(error);
            });

        });

        // отправка данных
        const postData = (body)=>{
            return fetch("./server.php",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
        };

        //валидация форм
        form.addEventListener("input", (event)=>{
            let target = event.target;
            // ввод только кириллицы для ввода имени и сообщения
            if(target.closest('[type = "text"]') || target.closest(".mess")){
                target.value = target.value.replace(/[^А-я ]/g, "");
            }
            // ввод только цифр и "+"
            if(target.closest('[type = "tel"]')){
                target.value = target.value.replace(/[^\+\d]/gi, "");
            }
        });
        
    };
    
    treatmentForms(mainForm);
    treatmentForms(popUpWindow);
    treatmentForms(bottomForm);
};

export default sendForm;