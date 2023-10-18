import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from '../MealItem/MealItem';
import { fetchMeals } from '../../httpUtils/httpUtils';
import Card from '../Card/Card';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals().then((data) => setMeals(data));
  }, []);

  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {meals.map((m) => (
            <MealItem key={m.id} meal={m} />
          ))}
        </ul>
      </Card>
    </div>
  );
}
