import React ,{useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CreateDrink from './components/CreateDrink';

function App() {

  const [inputs, setInputs] = useState({
    drinkName : '',
    drinkPrice : 0
  });

  const {drinkName, drinkPrice} = inputs;


  const [drinks, setDrinks] = useState([
    {
      drinkID : 1,
      drinkName : "스프라이트",
      drinkPrice : 1300
    },
    {
      drinkID : 2,
      drinkName : "솔의눈",
      drinkPrice : 1355
    }
  ]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name , value} = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: name === 'drinkPrice' ? parseFloat(value) || 0 : value,  // drinkPrice일 경우 숫자로 변환
    }));
  };

  const nextDrink = useRef(4);
  const onCreate = () =>
  {
    const drink = {
      drinkID : nextDrink.current,
      drinkName,
      drinkPrice
    };

    setDrinks([...drinks,drink]);

    setInputs({
      drinkName : '',
      drinkPrice : 0
    });
    nextDrink.current +=1;
  }

  function Drink({drink} : DrinkProps)
  {
    return (
      <div>
        음료 : {drink.drinkName}
        <br />
        가격 : {drink.drinkPrice}
      </div>
    );
  }

  function DrinkList({ drinks }: DrinkListProps) {
    return (
      <div>
        {drinks.map((drink) => (
          <Drink drink={drink} key={drink.drinkID} />
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <CreateDrink
        drinkName={drinkName}
        drinkPrice={drinkPrice}
        onChange={onChange}
        onCreate={onCreate}
      ></CreateDrink>

    <DrinkList drinks={drinks} />

    </div>
  );
}

interface DrinkProps {
  drink : {
    drinkID : number;
    drinkName : string;
    drinkPrice : number;
  };
}

interface DrinkListProps {
  drinks: DrinkProps['drink'][];
}

export default App;
