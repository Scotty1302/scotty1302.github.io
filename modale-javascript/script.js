let allImages = document.querySelectorAll(".original-image");
let voile = document.querySelector("#voile");
let modale = document.querySelector("#modale");
let chevronLeft = document.querySelector("#modale #image-group .chevron-left");
let chevronRight = document.querySelector("#modale #image-group .chevron-right");
let allNavButtons = document.querySelectorAll(".nav-button");

allImages.forEach(function(oneImage){
    allNavButtons.forEach(function(oneNavButton){
        oneImage.onclick=function(){
            let newImage = oneImage.src;
            document.querySelector("#modale #image-group img").src = newImage;
            chevronLeft.id = parseInt(oneImage.id)-1;
            chevronRight.id = parseInt(oneImage.id)+1;
            toggleModale();
    
            if(chevronRight.id==allImages.length+1){
                chevronRight.classList.add("remove");
            } else {
                chevronRight.classList.remove("remove");
            }
        
            if(chevronLeft.id==0){
                chevronLeft.classList.add("remove");
            } else {
                chevronLeft.classList.remove("remove");
            }
        }
    
        chevronLeft.onclick=function(){
            console.log("OKG");
            document.querySelector("#modale #image-group img").src = allImages[parseInt(chevronLeft.id)-1].src;
            chevronLeft.id = parseInt(chevronLeft.id)-1;
            chevronRight.id = parseInt(chevronRight.id)-1;
    
            if(chevronRight.id==allImages.length+1){
                chevronRight.classList.add("remove");
            } else {
                chevronRight.classList.remove("remove");
            }
        
            if(chevronLeft.id==0){
                chevronLeft.classList.add("remove");
            } else {
                chevronLeft.classList.remove("remove");
            }
        }
    
        chevronRight.onclick=function(){
            console.log("OKD");
            document.querySelector("#modale #image-group img").src = allImages[parseInt(chevronRight.id)-1].src;
            chevronLeft.id = parseInt(chevronLeft.id)+1;
            chevronRight.id = parseInt(chevronRight.id)+1;
    
            if(chevronRight.id==allImages.length+1){
                chevronRight.classList.add("remove");
            } else {
                chevronRight.classList.remove("remove");
            }
        
            if(chevronLeft.id==0){
                chevronLeft.classList.add("remove");
            } else {
                chevronLeft.classList.remove("remove");
            }
        }

        oneNavButton.onclick=function(){
            let navID = oneNavButton.id;
            document.querySelector("#modale #image-group img").src = allImages[navID-1].src;
    
            if(oneNavButton.id==allImages.length){
                chevronRight.classList.add("remove");
            } else {
                chevronRight.classList.remove("remove");
            }
        
            if(oneNavButton.id==1){
                chevronLeft.classList.add("remove");
            } else {
                chevronLeft.classList.remove("remove");
            }

            chevronLeft.id = parseInt(oneNavButton.id)-1;
            chevronRight.id = parseInt(oneNavButton.id)+1;
        }
    });
});

voile.onclick=()=>{
    toggleModale();
}

function toggleModale() {
    voile.classList.toggle("show");
    modale.classList.toggle("show");
}