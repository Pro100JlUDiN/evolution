const changePhoto = ()=>{
    const team = document.querySelector("#command .row");

    let firstLink;
    

    team.addEventListener("mouseover",()=>{
        let target = event.target;
        if(target.closest(".command__photo")){
            firstLink = target.src;
            target.src = target.dataset.img;
        }
    });
    
    team.addEventListener("mouseout",()=>{
        let target = event.target;
        if(target.closest(".command__photo")){
            target.src = firstLink;
        }
    });
        
};

export default changePhoto;