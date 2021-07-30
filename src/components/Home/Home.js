import React,{ useEffect,useState} from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  const [joke,setJoke]=useState('Loading...');
  const newJoke=()=>{
    fetch (`http://api.icndb.com/jokes/random?firstName=Vijay&lastName=Pratap`)
    .then(res=>res.json())
    .then(res2=>{console.log(res2)
      setJoke(res2.value.joke)
    })

  }
  useEffect(()=>{
       newJoke()
    
  },[]
  )
  return (
    <Card className={classes.home}>
      <h1>{joke}</h1>
      <Button onClick={newJoke}>Next Joke</Button>
    </Card>
  );
};

export default Home;
