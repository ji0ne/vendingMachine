import React , {useState} from 'react';



function CreateDrink({drinkName , drinkPrice , onChange , onCreate} : InputDrinkProps) {

        return (
            <div className="inputsSection">
                drinkName :   
                <input name = "drinkName" 
                value={drinkName}
                onChange={onChange}></input> 
                
                drinkPrice : 
                <input name = "drinkPrice"
                value = {drinkPrice} 
                onChange={onChange}></input>
    
                <button onClick ={onCreate}>Create Drink</button>
    
            </div>
        );
    };



    export interface InputDrinkProps {
    drinkName : string;
    drinkPrice : number;
    onChange : React.ChangeEventHandler<HTMLInputElement>;
    onCreate : () => void;
}


// 배열하나파서 onClick마다 요소추가
export default CreateDrink;