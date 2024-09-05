import react from 'react';
import { InputDrinkProps } from '../CreateDrink';

//배열 map으로 순회

export function DrinkList(prop : InputDrinkProps) {

    return(
        <div>
            <li>
                음료명 : {prop.drinkName} 가격 : {prop.drinkPrice}
            </li>

        </div>
    );



}

