let titleRedirect = document.querySelector("h1");
let allSortingButtons = document.querySelectorAll(".sorting");
let allProjectsButton = document.querySelector(".all-projects");
let GDButton = document.querySelector(".gd-projects");
let LDButton = document.querySelector(".ld-projects");
let WDButton = document.querySelector(".wd-projects");
let SDButton = document.querySelector(".sd-projects");
let APBActive = true;
let GDBActive, LDBActive, WDBActive, SDBActive = false;
let allProjects = document.querySelectorAll(".thumbnail-group");
let allCaptions = document.querySelectorAll(".thumbnail-group p");
let sliderLeft1 = document.querySelectorAll(".slider .slider-center .slider-left1");
let sliderLeft2 = document.querySelectorAll(".slider .slider-center .slider-left2");
let sliderLeft3 = document.querySelectorAll(".slider .slider-center .slider-left3");
let sliderLeft4 = document.querySelectorAll(".slider .slider-center .slider-left4");
let sliderRight1 = document.querySelectorAll(".slider .slider-center .slider-right1");
let sliderRight2 = document.querySelectorAll(".slider .slider-center .slider-right2");
let sliderRight3 = document.querySelectorAll(".slider .slider-center .slider-right3");
let sliderRight4 = document.querySelectorAll(".slider .slider-center .slider-right4");
let allSliderPictures1 = document.querySelectorAll(".slider .slider-center .slider-picture1");
let allSliderPictures2 = document.querySelectorAll(".slider .slider-center .slider-picture2");
let allSliderPictures3 = document.querySelectorAll(".slider .slider-center .slider-picture3");
let allSliderPictures4 = document.querySelectorAll(".slider .slider-center .slider-picture4");
let movementValue1, movementValue2, movementValue3, movementValue4 = 0;
let picturesForModal = document.querySelectorAll(".modal-ready img");
let modalExists = false;
let veilDiv = null;
let modalDiv = null;
let modalSliderLeft = null;
let modalSliderRight = null;
let sliderModalActivated1, sliderModalActivated2, sliderModalActivated3, sliderModalActivated4 = false;

titleRedirect.onclick=()=>{
    window.location.href = "index.html";
}

if(picturesForModal){
    picturesForModal.forEach(onePicture => {
        onePicture.onclick=()=>{
            veilDiv = document.createElement("div");
            veilDiv.classList.add("veil");
            document.querySelector("main section").appendChild(veilDiv);
            modalDiv = document.createElement("div");
            modalDiv.classList.add("solo-modal");
            document.querySelector("main section").appendChild(modalDiv);
            if(!onePicture.parentElement.querySelector(".label-right")) {
                var modalImg = document.createElement("img");
                modalImg.classList.add("solo-picture-modal");
                modalImg.src = onePicture.src;
                modalImg.alt = onePicture.alt;
                document.querySelector(".solo-modal").appendChild(modalImg);
            }
            let modalLabelDiv = document.createElement("div");
            var modalLabelText = document.createElement("p");

            if(!onePicture.parentElement.className.includes("donnern-block") && !onePicture.parentElement.className.includes("no-border")){
                modalLabelDiv.classList.add("label-modal-div");
                document.querySelector(".solo-modal").appendChild(modalLabelDiv);
                modalLabelText.classList.add("label-modal-left");
                modalLabelText.innerHTML = onePicture.parentElement.querySelector(".label-left").innerHTML;
                if(onePicture.parentElement.querySelector(".label-right")) {
                    let modalLabelNum = document.createElement("p");
                    modalLabelNum.classList.add("label-modal-right");
                    modalLabelNum.innerHTML = onePicture.parentElement.querySelector(".label-right").innerHTML;
                    document.querySelector(".label-modal-div").appendChild(modalLabelNum);
                    modalLabelText.style.borderBottomRightRadius = "0";
                    modalLabelText.style.borderRight = ".5px solid black";
                    modalLabelNum.style.borderBottomLeftRadius = "0";
                    modalLabelNum.style.borderLeft = ".5px solid black";
                    let modalSliderDiv = document.createElement("div");
                    modalSliderDiv.classList.add("slider-modal-div");
                    document.querySelector(".solo-modal").prepend(modalSliderDiv);
                    let modalSlidersLRDiv = document.createElement("div");
                    modalSlidersLRDiv.classList.add("sliders-lr-modal-div");
                    document.querySelector(".solo-modal").prepend(modalSlidersLRDiv);
                    modalSliderLeft = document.createElement("p");
                    modalSliderLeft.classList.add("label-slider-left");
                    modalSliderLeft.innerHTML = "&#10096;";
                    document.querySelector(".sliders-lr-modal-div").appendChild(modalSliderLeft);
                    modalSliderRight = document.createElement("p");
                    modalSliderRight.classList.add("label-slider-right");
                    modalSliderRight.innerHTML = "&#10097;";
                    document.querySelector(".sliders-lr-modal-div").appendChild(modalSliderRight);
                    
                    if(onePicture.parentElement.className.includes("slider-picture1")) {
                        let cloneSliderGroup1 = document.querySelector(".slider .slider-center .slider-picture1").parentElement.parentElement.cloneNode(true);
                        document.querySelector(".slider-modal-div").prepend(cloneSliderGroup1);
                        cloneSliderGroup1.querySelector(".slider-right1").remove();
                        cloneSliderGroup1.querySelector(".slider-left1").remove();
                        cloneSliderGroup1.querySelectorAll(".label-left").forEach(labelLeftDelete => {
                            labelLeftDelete.remove();
                        });
                        cloneSliderGroup1.querySelectorAll(".label-right").forEach(labelRightDelete => {
                            labelRightDelete.remove();
                        });
                        sliderModalActivated1 = true;
                    }
                    if(onePicture.parentElement.className.includes("slider-picture2")) {
                        let cloneSliderGroup2 = document.querySelector(".slider .slider-center .slider-picture2").parentElement.parentElement.cloneNode(true);
                        document.querySelector(".slider-modal-div").prepend(cloneSliderGroup2);
                        cloneSliderGroup2.querySelector(".slider-right2").remove();
                        cloneSliderGroup2.querySelector(".slider-left2").remove();
                        cloneSliderGroup2.querySelectorAll(".label-left").forEach(labelLeftDelete => {
                            labelLeftDelete.remove();
                        });
                        cloneSliderGroup2.querySelectorAll(".label-right").forEach(labelRightDelete => {
                            labelRightDelete.remove();
                        });
                        sliderModalActivated2 = true;
                    }
                    if(onePicture.parentElement.className.includes("slider-picture3")) {
                        let cloneSliderGroup3 = document.querySelector(".slider .slider-center .slider-picture3").parentElement.parentElement.cloneNode(true);
                        document.querySelector(".slider-modal-div").prepend(cloneSliderGroup3);
                        cloneSliderGroup3.querySelector(".slider-right3").remove();
                        cloneSliderGroup3.querySelector(".slider-left3").remove();
                        cloneSliderGroup3.querySelectorAll(".label-left").forEach(labelLeftDelete => {
                            labelLeftDelete.remove();
                        });
                        cloneSliderGroup3.querySelectorAll(".label-right").forEach(labelRightDelete => {
                            labelRightDelete.remove();
                        });
                        sliderModalActivated3 = true;
                    }
                    if(onePicture.parentElement.className.includes("slider-picture4")) {
                        let cloneSliderGroup4 = document.querySelector(".slider .slider-center .slider-picture4").parentElement.parentElement.cloneNode(true);
                        document.querySelector(".slider-modal-div").prepend(cloneSliderGroup4);
                        cloneSliderGroup4.querySelector(".slider-right4").remove();
                        cloneSliderGroup4.querySelector(".slider-left4").remove();
                        cloneSliderGroup4.querySelectorAll(".label-left").forEach(labelLeftDelete => {
                            labelLeftDelete.remove();
                        });
                        cloneSliderGroup4.querySelectorAll(".label-right").forEach(labelRightDelete => {
                            labelRightDelete.remove();
                        });
                        sliderModalActivated4 = true;
                    }

                }
                document.querySelector(".label-modal-div").appendChild(modalLabelText);
            }
            if(onePicture.parentElement.className.includes("donnern-block") && !onePicture.parentElement.className.includes("no-border")) {
                modalLabelText.classList.add("label-modal-left");
                modalLabelText.innerHTML = onePicture.parentElement.querySelector("h5").innerHTML.replace("&nbsp;:", "");
                modalLabelText.querySelector(".underline").style.textDecoration = "none";
                document.querySelector(".solo-modal").appendChild(modalLabelText);
            }
            if(onePicture.parentElement.className.includes("no-border")) {
                console.log("transparent");
                modalImg.style.border = "none";
            }
            modalExists = true;
        }
    });
}
document.onclick=()=>{
    if(modalExists) {
        if(sliderRight1 && sliderModalActivated1) {
            sliderRight1 = document.querySelectorAll(".slider .slider-center .slider-right1");
            sliderLeft1 = document.querySelectorAll(".slider .slider-center .slider-left1");
            allSliderPictures1 = document.querySelectorAll(".slider .slider-center .slider-picture1");
        }
        if(sliderRight2) {
            sliderRight2 = document.querySelectorAll(".slider .slider-center .slider-right2");
            sliderLeft2 = document.querySelectorAll(".slider .slider-center .slider-left2");
            allSliderPictures2 = document.querySelectorAll(".slider .slider-center .slider-picture2");
        }
        if(sliderRight3) {
            sliderRight3 = document.querySelectorAll(".slider .slider-center .slider-right3");
            sliderLeft3 = document.querySelectorAll(".slider .slider-center .slider-left3");
            allSliderPictures3 = document.querySelectorAll(".slider .slider-center .slider-picture3");
        }
        if(sliderRight4) {
            sliderRight4 = document.querySelectorAll(".slider .slider-center .slider-right4");
            sliderLeft4 = document.querySelectorAll(".slider .slider-center .slider-left4");
            allSliderPictures4 = document.querySelectorAll(".slider .slider-center .slider-picture4");
        }
        veilDiv.onclick=()=>{
            modalDiv.remove();
            veilDiv.remove();
            if(sliderRight1 && sliderModalActivated1) {
                sliderRight1 = document.querySelectorAll(".slider .slider-center .slider-right1");
                sliderLeft1 = document.querySelectorAll(".slider .slider-center .slider-left1");
                allSliderPictures1 = document.querySelectorAll(".slider .slider-center .slider-picture1");
                sliderModalActivated1 = false;
            }
            if(sliderRight2 && sliderModalActivated2) {
                sliderRight2 = document.querySelectorAll(".slider .slider-center .slider-right2");
                sliderLeft2 = document.querySelectorAll(".slider .slider-center .slider-left2");
                allSliderPictures2 = document.querySelectorAll(".slider .slider-center .slider-picture2");
                sliderModalActivated2 = false;
            }
            if(sliderRight3 && sliderModalActivated3) {
                sliderRight3 = document.querySelectorAll(".slider .slider-center .slider-right3");
                sliderLeft3 = document.querySelectorAll(".slider .slider-center .slider-left3");
                allSliderPictures3 = document.querySelectorAll(".slider .slider-center .slider-picture3");
                sliderModalActivated3 = false;
            }
            if(sliderRight4 && sliderModalActivated4) {
                sliderRight4 = document.querySelectorAll(".slider .slider-center .slider-right4");
                sliderLeft4 = document.querySelectorAll(".slider .slider-center .slider-left4");
                allSliderPictures4 = document.querySelectorAll(".slider .slider-center .slider-picture4");
                sliderModalActivated4 = false;
            }
            modalExists = false;
        }
        if(modalSliderLeft!=null){
            modalSliderLeft.onclick=()=> {
                console.log("modal left slide");
                if(sliderModalActivated1) {
                    SlideToLeft1();
                    document.querySelector(".label-modal-left").innerHTML = document.querySelector("section .slider .slider-center .slider-picture1 .active-slider1").parentElement.querySelector(".label-left").innerHTML;
                    document.querySelector(".label-modal-right").innerHTML = document.querySelector("section .slider .slider-center .slider-picture1 .active-slider1").parentElement.querySelector(".label-right").innerHTML;
                }
                if(sliderModalActivated2) {
                    SlideToLeft2();
                    document.querySelector(".label-modal-left").innerHTML = document.querySelector("section .slider .slider-center .slider-picture2 .active-slider2").parentElement.querySelector(".label-left").innerHTML;
                    document.querySelector(".label-modal-right").innerHTML = document.querySelector("section .slider .slider-center .slider-picture2 .active-slider2").parentElement.querySelector(".label-right").innerHTML;
                }
                if(sliderModalActivated3) {
                    SlideToLeft3();
                    document.querySelector(".label-modal-left").innerHTML = document.querySelector("section .slider .slider-center .slider-picture3 .active-slider3").parentElement.querySelector(".label-left").innerHTML;
                    document.querySelector(".label-modal-right").innerHTML = document.querySelector("section .slider .slider-center .slider-picture3 .active-slider3").parentElement.querySelector(".label-right").innerHTML;
                }
                if(sliderModalActivated4) {
                    SlideToLeft4();
                    document.querySelector(".label-modal-left").innerHTML = document.querySelector("section .slider .slider-center .slider-picture4 .active-slider4").parentElement.querySelector(".label-left").innerHTML;
                    document.querySelector(".label-modal-right").innerHTML = document.querySelector("section .slider .slider-center .slider-picture4 .active-slider4").parentElement.querySelector(".label-right").innerHTML;
                }
            }
            modalSliderRight.onclick=()=> {
                if((movementValue1*2)+200!=(allSliderPictures1.length)*100){
                    if(sliderModalActivated1) {
                        SlideToRight1();
                        document.querySelector(".label-modal-left").innerHTML = document.querySelector("section .slider .slider-center .slider-picture1 .active-slider1").parentElement.querySelector(".label-left").innerHTML;
                        document.querySelector(".label-modal-right").innerHTML = document.querySelector("section .slider .slider-center .slider-picture1 .active-slider1").parentElement.querySelector(".label-right").innerHTML;
                        console.log((movementValue1*2)+200);
                        console.log((allSliderPictures1.length)*100);
                    }
                }
                if((movementValue2*2)+200!=(allSliderPictures2.length)*100){
                    if(sliderModalActivated2) {
                        SlideToRight2();
                        document.querySelector(".label-modal-left").innerHTML = document.querySelector("section .slider .slider-center .slider-picture2 .active-slider2").parentElement.querySelector(".label-left").innerHTML;
                        document.querySelector(".label-modal-right").innerHTML = document.querySelector("section .slider .slider-center .slider-picture2 .active-slider2").parentElement.querySelector(".label-right").innerHTML;
                        console.log((movementValue2*2)+200);
                        console.log((allSliderPictures2.length)*100);
                    }
                }
                if((movementValue3*2)+200!=(allSliderPictures3.length)*100){
                    if(sliderModalActivated3) {
                        SlideToRight3();
                        document.querySelector(".label-modal-left").innerHTML = document.querySelector("section .slider .slider-center .slider-picture3 .active-slider3").parentElement.querySelector(".label-left").innerHTML;
                        document.querySelector(".label-modal-right").innerHTML = document.querySelector("section .slider .slider-center .slider-picture3 .active-slider3").parentElement.querySelector(".label-right").innerHTML;
                        console.log((movementValue3*2)+200);
                        console.log((allSliderPictures3.length)*100);
                    }
                }
                if((movementValue4*2)+200!=(allSliderPictures4.length)*100){
                    if(sliderModalActivated4) {
                        SlideToRight4();
                        document.querySelector(".label-modal-left").innerHTML = document.querySelector("section .slider .slider-center .slider-picture4 .active-slider4").parentElement.querySelector(".label-left").innerHTML;
                        document.querySelector(".label-modal-right").innerHTML = document.querySelector("section .slider .slider-center .slider-picture4 .active-slider4").parentElement.querySelector(".label-right").innerHTML;
                        console.log((movementValue4*2)+200);
                        console.log((allSliderPictures4.length)*100);
                    }
                }
            }
        }
    }
}

if(sliderRight1.length!=0){
    document.querySelector("section .slider .slider-center .slider-right1").onclick=()=>{
        SlideToRight1();
    }
}
if(sliderRight2.length!=0){
    document.querySelector("section .slider .slider-center .slider-right2").onclick=()=>{
        SlideToRight2();
    }
}
if(sliderRight3.length!=0){
    document.querySelector("section .slider .slider-center .slider-right3").onclick=()=>{
        SlideToRight3();
    }
}
if(sliderRight4.length!=0){
    document.querySelector("section .slider .slider-center .slider-right4").onclick=()=>{
        SlideToRight4();
    }
}

function SlideToRight1() {
    if(!activeSliderPicture1){
        var activeSliderPicture1 = document.querySelector(".active-slider1");
    }
    allSliderPictures1.forEach(oneSliderPicture => {
        if(activeSliderPicture1!=null){
            if(movementValue1!=(allSliderPictures1.length)*100){
                if(movementValue1!=(allSliderPictures1.length-1)*100){
                    movementValue1 = activeSliderPicture1.id*100;
                }
                oneSliderPicture.style.transform = "translate(-"+movementValue1+"%)";
            }
            if(oneSliderPicture.querySelector("img").className.includes("active-slider1") && oneSliderPicture.querySelector("img").id==((movementValue1/100)) && oneSliderPicture.querySelector("img").id!=allSliderPictures1.length){
                oneSliderPicture.querySelector("img").classList.remove("active-slider1");
            }
            if(oneSliderPicture.querySelector("img").id==((movementValue1/100)+1) && oneSliderPicture.querySelector("img").id!=allSliderPictures1.length+1){
                if(!oneSliderPicture.querySelector("img").className.includes("active-slider1")){
                    oneSliderPicture.querySelector("img").classList.add("active-slider1");
                }
            }
        }
    });
}
function SlideToRight2() {
    if(!activeSliderPicture2){
        var activeSliderPicture2 = document.querySelector(".active-slider2");
    }
    allSliderPictures2.forEach(oneSliderPicture => {
        if(activeSliderPicture2!=null){
            if(movementValue2!=(allSliderPictures2.length)*100){
                if(movementValue2!=(allSliderPictures2.length-1)*100){
                    movementValue2 = (parseInt(activeSliderPicture2.id)-10)*100;
                }
                oneSliderPicture.style.transform = "translate(-"+movementValue2+"%)";
            }
            if(oneSliderPicture.querySelector("img").className.includes("active-slider2") && (parseInt(oneSliderPicture.querySelector("img").id)-10)==((movementValue2/100)) && (parseInt(oneSliderPicture.querySelector("img").id)-10)!=allSliderPictures2.length){
                oneSliderPicture.querySelector("img").classList.remove("active-slider2");
            }
            if((parseInt(oneSliderPicture.querySelector("img").id)-10)==((movementValue2/100)+1) && (parseInt(oneSliderPicture.querySelector("img").id)-10)!=allSliderPictures2.length+1){
                if(!oneSliderPicture.querySelector("img").className.includes("active-slider2")){
                    oneSliderPicture.querySelector("img").classList.add("active-slider2");
                }
            }
        }
    });
}
function SlideToRight3() {
    if(!activeSliderPicture3){
        var activeSliderPicture3 = document.querySelector(".active-slider3");
    }
    allSliderPictures3.forEach(oneSliderPicture => {
        if(activeSliderPicture3!=null){
            if(movementValue3!=(allSliderPictures3.length)*100){
                if(movementValue3!=(allSliderPictures3.length-1)*100){
                    movementValue3 = (parseInt(activeSliderPicture3.id)-100)*100;
                }
                oneSliderPicture.style.transform = "translate(-"+movementValue3+"%)";
            }
            if(oneSliderPicture.querySelector("img").className.includes("active-slider3") && (parseInt(oneSliderPicture.querySelector("img").id)-100)==((movementValue3/100)) && (parseInt(oneSliderPicture.querySelector("img").id)-100)!=allSliderPictures3.length){
                oneSliderPicture.querySelector("img").classList.remove("active-slider3");
            }
            if((parseInt(oneSliderPicture.querySelector("img").id)-100)==((movementValue3/100)+1) && (parseInt(oneSliderPicture.querySelector("img").id)-100)!=allSliderPictures3.length+1){
                if(!oneSliderPicture.querySelector("img").className.includes("active-slider3")){
                    oneSliderPicture.querySelector("img").classList.add("active-slider3");
                }
            }
        }
    });
}
function SlideToRight4() {
    if(!activeSliderPicture4){
        var activeSliderPicture4 = document.querySelector(".active-slider4");
    }
    allSliderPictures4.forEach(oneSliderPicture => {
        if(activeSliderPicture4!=null){
            if(movementValue4!=(allSliderPictures4.length)*100){
                if(movementValue4!=(allSliderPictures4.length-1)*100){
                    movementValue4 = (parseInt(activeSliderPicture4.id)-1000)*100;
                }
                oneSliderPicture.style.transform = "translate(-"+movementValue4+"%)";
            }
            if(oneSliderPicture.querySelector("img").className.includes("active-slider4") && (parseInt(oneSliderPicture.querySelector("img").id)-1000)==((movementValue4/100)) && (parseInt(oneSliderPicture.querySelector("img").id)-1000)!=allSliderPictures4.length){
                oneSliderPicture.querySelector("img").classList.remove("active-slider4");
            }
            if((parseInt(oneSliderPicture.querySelector("img").id)-1000)==((movementValue4/100)+1) && (parseInt(oneSliderPicture.querySelector("img").id)-1000)!=allSliderPictures4.length+1){
                if(!oneSliderPicture.querySelector("img").className.includes("active-slider4")){
                    oneSliderPicture.querySelector("img").classList.add("active-slider4");
                }
            }
        }
    });
}

if(sliderLeft1.length!=0){
    document.querySelector("section .slider .slider-center .slider-left1").onclick=()=>{
        SlideToLeft1();
    }
}
if(sliderLeft2.length!=0){
    document.querySelector("section .slider .slider-center .slider-left2").onclick=()=>{
        SlideToLeft2();
    }
}
if(sliderLeft3.length!=0){
    document.querySelector("section .slider .slider-center .slider-left3").onclick=()=>{
        SlideToLeft3();
    }
}
if(sliderLeft4.length!=0){
    document.querySelector("section .slider .slider-center .slider-left4").onclick=()=>{
        SlideToLeft4();
    }
}

function SlideToLeft1() {
    if(!activeSliderPicture1){
        var activeSliderPicture1 = document.querySelector(".active-slider1");
    }
    allSliderPictures1.forEach(oneSliderPicture => {
        if(activeSliderPicture1!=null){
            if(movementValue1!=(allSliderPictures1.length)*100){
                movementValue1 = (activeSliderPicture1.id*100)-100;
            }
            if(oneSliderPicture.querySelector("img").className.includes("active-slider1") && oneSliderPicture.querySelector("img").id!=1){
                oneSliderPicture.querySelector("img").classList.remove("active-slider1");
            }
            if(oneSliderPicture.querySelector("img").id==((movementValue1/100)) && oneSliderPicture.querySelector("img").id!=allSliderPictures1.length){
                oneSliderPicture.querySelector("img").classList.add("active-slider1");
            }                             
            movementValue1 = movementValue1-100;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            oneSliderPicture.style.transform = "translate(-"+movementValue1+"%)";
        }                                
    });
}
function SlideToLeft2() {
    if(!activeSliderPicture2){
        var activeSliderPicture2 = document.querySelector(".active-slider2");
    }
    allSliderPictures2.forEach(oneSliderPicture => {
        if(activeSliderPicture2!=null){
            if(movementValue2!=(allSliderPictures2.length)*100){
                    movementValue2 = ((parseInt(activeSliderPicture2.id)-10)*100)-100;
            }
            if(oneSliderPicture.querySelector("img").className.includes("active-slider2") && (parseInt(oneSliderPicture.querySelector("img").id)-10)==((movementValue2/100)-100)  && (parseInt(oneSliderPicture.querySelector("img").id)-10)!=1){
                oneSliderPicture.querySelector("img").classList.remove("active-slider2");
            }
            if((parseInt(oneSliderPicture.querySelector("img").id)-10)==((movementValue2/100)) && (parseInt(oneSliderPicture.querySelector("img").id)-10)!=allSliderPictures2.length){
                oneSliderPicture.querySelector("img").classList.add("active-slider2");
            }
            movementValue2 = movementValue2-100;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            oneSliderPicture.style.transform = "translate(-"+movementValue2+"%)";
        }
    });
}
function SlideToLeft3() {
    if(!activeSliderPicture3){
        var activeSliderPicture3 = document.querySelector(".active-slider3");
    }
    allSliderPictures3.forEach(oneSliderPicture => {
        if(activeSliderPicture3!=null){
            if(movementValue3!=(allSliderPictures3.length)*100){
                    movementValue3 = ((parseInt(activeSliderPicture3.id)-100)*100)-100;
            }
            if(oneSliderPicture.querySelector("img").className.includes("active-slider3") && (parseInt(oneSliderPicture.querySelector("img").id)-100)!=1){
                oneSliderPicture.querySelector("img").classList.remove("active-slider3");
            }
            if((parseInt(oneSliderPicture.querySelector("img").id)-100)==((movementValue3/100)) && (parseInt(oneSliderPicture.querySelector("img").id)-100)!=allSliderPictures3.length){
                oneSliderPicture.querySelector("img").classList.add("active-slider3");
            }
            movementValue3 = movementValue3-100;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            oneSliderPicture.style.transform = "translate(-"+movementValue3+"%)";
        }
    });
}
function SlideToLeft4() {
    if(!activeSliderPicture4){
        var activeSliderPicture4 = document.querySelector(".active-slider4");
    }
    allSliderPictures4.forEach(oneSliderPicture => {
        if(activeSliderPicture4!=null){
            if(movementValue4!=(allSliderPictures4.length)*100){
                    movementValue4 = ((parseInt(activeSliderPicture4.id)-1000)*100)-100;            
            }
            if(oneSliderPicture.querySelector("img").className.includes("active-slider4") && (parseInt(oneSliderPicture.querySelector("img").id)-1000)!=1){
                oneSliderPicture.querySelector("img").classList.remove("active-slider4");
            }
            if((parseInt(oneSliderPicture.querySelector("img").id)-1000)==((movementValue4/100)) && (parseInt(oneSliderPicture.querySelector("img").id)-1000)!=allSliderPictures4.length){
                oneSliderPicture.querySelector("img").classList.add("active-slider4");
            }
            movementValue4 = movementValue4-100;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            oneSliderPicture.style.transform = "translate(-"+movementValue4+"%)";
        }
    });
}

allSortingButtons.forEach(oneSortingButton => {
    buttonColorOnHover(oneSortingButton);
});
function buttonColorOnHover(buttonName){
    buttonName.onmouseover=()=>{
        buttonName.style.backgroundColor = "#DDDDDD";
    }
    buttonName.onmouseout=()=>{
        buttonName.style.backgroundColor = "#777887";
    }
}
if(allProjectsButton){
    allProjectsButton.onclick=()=>{
        allProjects.forEach(oneProject => {
            APBActive = true;
            GDBActive = false;
            LDBActive = false;
            WDBActive = false;
            SDBActive = false;
            allProjectsButton.style.backgroundColor = "#DDDDDD";
            GDButton.style.backgroundColor = "#777887";
            LDButton.style.backgroundColor = "#777887";
            WDButton.style.backgroundColor = "#777887";
            SDButton.style.backgroundColor = "#777887";
            if(oneProject.className.includes("hidden")){
                oneProject.classList.remove("hidden");
            }
        });
    }
    allProjectsButton.onmouseout=()=>{
        if(!APBActive){
            allProjectsButton.style.backgroundColor = "#777887";
        }
    }
}

// function progressiveFadeOut(fadingElement){
//     let fadeOut = setInterval(function(){
//         if(fadingElement.style.opacity>0){
//             fadingElement.style.opacity -= 0.1;
//         } else {
//             clearInterval(fadeOut);
//             fadingElement.classList.add("hidden");
//         }
//     }, 200);
// }

if(GDButton){
    GDButton.onclick=()=>{
        allProjects.forEach(GDProjects => {
            APBActive = false;
            GDBActive = true;
            LDBActive = false;
            WDBActive = false;
            SDBActive = false;
            allProjectsButton.style.backgroundColor = "#777887";
            GDButton.style.backgroundColor = "#DDDDDD";
            LDButton.style.backgroundColor = "#777887";
            WDButton.style.backgroundColor = "#777887";
            SDButton.style.backgroundColor = "#777887";
            if(GDProjects.className.includes("gd") && GDProjects.className.includes("hidden")){
                GDProjects.classList.remove("hidden");
                // GDProjects.style.opacity = 1;
            }
            if(!GDProjects.className.includes("gd")){
                // progressiveFadeOut(GDProjects);
                GDProjects.classList.add("hidden");
            }
        });
    }
    GDButton.onmouseout=()=>{
        if(!GDBActive){
            GDButton.style.backgroundColor = "#777887";
        }
    }
}

if(LDButton){
    LDButton.onclick=()=>{
        allProjects.forEach(LDProjects => {
            APBActive = false;
            GDBActive = false;
            LDBActive = true;
            WDBActive = false;
            SDBActive = false;
            allProjectsButton.style.backgroundColor = "#777887";
            GDButton.style.backgroundColor = "#777887";
            LDButton.style.backgroundColor = "#DDDDDD";
            WDButton.style.backgroundColor = "#777887";
            SDButton.style.backgroundColor = "#777887";
            if(LDProjects.className.includes("ld") && LDProjects.className.includes("hidden")){
                LDProjects.classList.remove("hidden");
            }
            if(!LDProjects.className.includes("ld")){
                LDProjects.classList.add("hidden");
            }
        });
    }
    LDButton.onmouseout=()=>{
        if(!LDBActive){
            LDButton.style.backgroundColor = "#777887";
        }
    }
}

if(WDButton){
    WDButton.onclick=()=>{
        allProjects.forEach(WDProjects => {
            APBActive = false;
            GDBActive = false;
            LDBActive = false;
            WDBActive = true;
            SDBActive = false;
            allProjectsButton.style.backgroundColor = "#777887";
            GDButton.style.backgroundColor = "#777887";
            LDButton.style.backgroundColor = "#777887";
            WDButton.style.backgroundColor = "#DDDDDD";
            SDButton.style.backgroundColor = "#777887";
            if(WDProjects.className.includes("wd") && WDProjects.className.includes("hidden")){
                WDProjects.classList.remove("hidden");
            }
            if(!WDProjects.className.includes("wd")){
                WDProjects.classList.add("hidden");
            }
        });
    }
    WDButton.onmouseout=()=>{
        if(!WDBActive){
            WDButton.style.backgroundColor = "#777887";
        }
    }
}

if(SDButton){
    SDButton.onclick=()=>{
        allProjects.forEach(SDProjects => {
            APBActive = false;
            GDBActive = false;
            LDBActive = false;
            WDBActive = false;
            SDBActive = true;
            allProjectsButton.style.backgroundColor = "#777887";
            GDButton.style.backgroundColor = "#777887";
            LDButton.style.backgroundColor = "#777887";
            WDButton.style.backgroundColor = "#777887";
            SDButton.style.backgroundColor = "#DDDDDD";
            if(SDProjects.className.includes("sd") && SDProjects.className.includes("hidden")){
                SDProjects.classList.remove("hidden");
            }
            if(!SDProjects.className.includes("sd")){
                SDProjects.classList.add("hidden");
            }
        });
    }
    SDButton.onmouseout=()=>{
        if(!SDBActive){
            SDButton.style.backgroundColor = "#777887";
        }
    }
}

allCaptions.forEach(oneCaption => {
    if(window.innerWidth<=600){
        oneCaption.classList.remove("hidden");
    }
    if(window.innerWidth>600){
        oneCaption.classList.add("hidden");
    }
});
window.onresize=()=>{
    allCaptions.forEach(oneCaption => {
        if(window.innerWidth<=600){
            oneCaption.classList.remove("hidden");
        }
        if(window.innerWidth>600){
            oneCaption.classList.add("hidden");
        }
    });
}

allProjects.forEach(oneProject => {
    oneProject.onmouseover=()=>{
        if(window.innerWidth>600){
            oneProject.querySelector("a img").style.filter = "grayscale(1)";
            oneProject.querySelector("a img").style.filter = "blur(4px)";
            oneProject.querySelector("p").style.textShadow = "0 0 4px black";
            oneProject.querySelector("p").classList.remove("hidden");
        }
    }
    oneProject.onmouseout=()=>{
        if(window.innerWidth>600){
            oneProject.querySelector("a img").style.filter = "grayscale(0)";
            oneProject.querySelector("a img").style.filter = "blur(0)";
            oneProject.querySelector("p").style.textShadow = "unset";
            oneProject.querySelector("p").classList.add("hidden");
        }
    }
    oneProject.querySelector("a img").onmouseover=()=>{
        if(window.innerWidth<=600){
            oneProject.querySelector("a img").style.filter = "grayscale(1)";
            oneProject.querySelector("a img").style.filter = "blur(4px)";
        }
    }
    oneProject.querySelector("a img").onmouseout=()=>{
        if(window.innerWidth<=600){
            oneProject.querySelector("a img").style.filter = "grayscale(0)";
            oneProject.querySelector("a img").style.filter = "blur(0)";
        }
    }
});

window.onscroll=()=>{
    if(window.scrollY>=600 && document.querySelector('.scrollToTop')==null){
        createScrollToTop();
    }
    if(window.scrollY<600 && document.querySelector('.scrollToTop')!==null){
        removeScrollToTop();
    }
}

function createScrollToTop(){
    var createDiv = document.createElement("scroll");
    document.querySelector("main section").append(createDiv);
    var newDiv = document.querySelector("scroll");
    newDiv.className = "scrollToTop";
    newDiv.innerHTML='<img src="src/icons/ScrollToTop.svg" alt="Icône du bouton de défilement vers le haut">';
    newDiv.style.opacity = 1;
    newDiv.onclick =()=>{
        this.scrollTo({top:0, behavior:"smooth"});
    }
}

function removeScrollToTop(){
    let divCreated = document.querySelector('.scrollToTop');
    let fadeOut = setInterval(function(){
        if(divCreated.style.opacity>0){
            divCreated.style.opacity -= 0.1;
        } else {
            clearInterval(fadeOut);
            divCreated.remove();
        }
    }, 200);
}