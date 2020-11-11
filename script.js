var temp=0;
var opt=undefined;
var result=0;
function numbers(number){
    temp=temp*10+Number(number);
    document.getElementById("input").value=temp;
}
function operators(operator){
    if (result==0) {
        result=temp;
        temp=0;
        opt=operator;
        document.getElementById("input").value="";
    } 
    if (opt==undefined) {
        opt=operator;
        temp=0;
        document.getElementById("input").value="";
        

    }
    else if (opt=="+" || opt=="-" || opt=="*" || opt=="/" || opt=="%") {
        if (temp!=0) {
            switch (opt) {
                case "+":
                    result+=temp;
                    temp=0;
                    document.getElementById("input").value=result;
                    opt=operator;
                    break;
                case "-":
                    result-=temp;
                    temp=0;
                    document.getElementById("input").value=result;
                    opt=operator;
                    break;
                case "*":
                    result*=temp;
                    temp=0;
                    document.getElementById("input").value=result;
                    opt=operator;
                    break;
                case "/":
                    result/=temp;
                    temp=0;
                    document.getElementById("input").value=result;
                    opt=operator;
                    break;
                case "%":
                    result%=temp;
                    temp=0;
                    document.getElementById("input").value=result;
                    opt=operator;
                    break;
                default:
                    temp=0;
                    document.getElementById("input").value=result;
                    opt=operator;
                    break;
            }

        }

    }
}
function results(){
    if (opt=="+" || opt=="-" || opt=="*" || opt=="/" || opt=="%") {
        if (temp!=0) {
            switch (opt) {
                case "+":
                    result+=temp;
                    temp=0;
                    opt=undefined;
                    document.getElementById("input").value=result;
                    break;
                case "-":
                    result-=temp;
                    temp=0;
                    opt=undefined;
                    document.getElementById("input").value=result;
                    break;
                case "*":
                    result*=temp;
                    temp=0;
                    opt=undefined;
                    document.getElementById("input").value=result;
                    break;
                case "/":
                    result/=temp;
                    temp=0;
                    opt=undefined;
                    document.getElementById("input").value=result;
                    break;
                case "%":
                    result%=temp;
                    temp=0;
                    opt=undefined;
                    document.getElementById("input").value=result;
                    break;
                default:
                    temp=0;
                    opt=undefined;
                    document.getElementById("input").value=result;
                    break;
            }

        }
        
    }
}