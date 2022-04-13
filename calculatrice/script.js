let allNums = document.querySelectorAll(".number-button");
let numDisplay = document.querySelector(".operation-display");
//let intNumDisplay = parseInt(numDisplay.innerHTML);
let plusOperator = document.querySelector(".operator-plus");
let resultOperator = document.querySelector(".operator-result");
let selectedNum=true;
let chooseOperatorOK=false;
let chooseSecondOK=false;
let resultOK=null;
let numberOne=0;
let numberTwo=0;
let deleteButton = document.querySelector(".operator-delete");

deleteButton.onclick=()=>{
    selectedNum=true;
    chooseOperatorOK=false;
    chooseSecondOK=false;
    resultOK=null;
    numberOne=0;
    numberTwo=0;
    numDisplay.innerHTML = "0";
    console.log("Opération annulée");
}

allNums.forEach(function(singleNum){
    let intSingleNum = parseInt(singleNum.innerHTML);
    singleNum.onclick=()=>{
        if(selectedNum==true && !chooseOperatorOK){
            selectedNum = intSingleNum;
            console.log(intSingleNum);
            numDisplay.innerHTML=intSingleNum;
            numberOne=intSingleNum;
            console.log("Premier nombre sélectionné : "+parseInt(numDisplay.innerHTML));
            console.log("Choisissez un opérateur");
            chooseOperatorOK = true;
            selectedNum=false
        } else {
            if(!selectedNum && !chooseOperatorOK && chooseSecondOK) {
            numDisplay.innerHTML=intSingleNum;
            numberTwo=intSingleNum;
            console.log("Second nombre sélectionné : "+numDisplay.innerHTML);
            chooseSecondOK = false;
            resultOK = plusOperator;
            } else {
                console.log("Choisissez un opérateur");
            }
        }
    }

    plusOperator.onclick=()=>{
        if(selectedNum!=-1){
            console.log("Opérateur : +");
            chooseSecondOK = true;
            chooseOperatorOK = false;
        }
    }

    resultOperator.onclick=()=>{
        if(resultOK==plusOperator){
            numDisplay.innerHTML=numberOne+numberTwo;
            console.log("Résultat : "+numDisplay.innerHTML);
            selectedNum=true;
            chooseOperatorOK=false;
            chooseSecondOK=false;
            resultOK=null;
            numberOne=0;
            numberTwo=0;

        }
    }
});

/*console.log(intNumDisplay+intSingleNum);
intNumDisplay=intNumDisplay+intSingleNum;
numDisplay.innerHTML=intNumDisplay;*/