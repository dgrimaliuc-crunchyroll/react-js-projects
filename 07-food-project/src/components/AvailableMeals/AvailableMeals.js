import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from '../MealItem/MealItem';
import Card from '../Card/Card';

export default function AvailableMeals({ meals }) {
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {meals.map((m, index) => (
            <MealItem key={index} meal={m} />
          ))}
        </ul>
      </Card>
    </div>
  );
}
