//user defined error
//error propogation and error handling
//use of throw keyword

class InvalidAge extends Error{

    constructor(msg){
        super(msg)
        this.name = "InvalidAge" 
    }
}

function AgeValidator(age){
    if(age < 18) {
        throw new InvalidAge("Age less than 18")
    }else {
        console.log("Valid Age...");
    }
} 


function errorPropogator(){
    AgeValidator(5)
}

function errorHandler(){
   try {
       errorPropogator()
   } catch (error) {
       console.error(error.message)
   }
}

errorHandler()