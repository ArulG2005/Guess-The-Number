import React from "react";

function Result({secretNum,term}){
    let result;
    if(term){
        if(secretNum<term){
            result="Higher";
        }
        else if(secretNum>term){
            result="Lower"
        }
        else{
            result="Yipee! correct";
            
        }
    }
    return(
        <h3>You Guess : {result}</h3>
    );
}
export default Result;