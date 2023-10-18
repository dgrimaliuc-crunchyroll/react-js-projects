import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from '../MealItem/MealItem';
import { fetchMeals } from '../../httpUtils/httpUtils';
import Card from '../Card/Card';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchMeals()
      .then((data) => {
        setMeals(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes.meals}>
      <Card>
        {isLoading && <h1>Loading...</h1>}
        {error && <p className={classes.error}>{error}</p>}
        <ul>
          {meals.map((m) => (
            <MealItem key={m.id} meal={m} />
          ))}
        </ul>
      </Card>
    </div>
  );
}
