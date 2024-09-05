 function Calculate(num1,num2,operation) {
    if(typeof num1 !== "number" || (typeof num2 !=="number") ) {
        console.log("please enter valid numbers for num1 and num2") ;
        return ;
    }
    if(typeof operation !== "string "){
        console.log ("please enter a valid string for the operation")
        return;
    }
    switch (operation.toLowerCase()) {
        case "add":
        case "addition": 
            console.log("Results: " + ("num1 + num2"))
            break
            case "sub" :
            case "subtraction" :
                console.log ( "Return :" + (num1 - num2))

        case "division":
        case "divide":
            console.log("Results" + (num1))
        

    }
}