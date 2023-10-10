import classes from './Header.module.css';
import headerImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';

export default function Header({ openCart }) {
  return (
    <div>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton openCart={openCart} />
      </div>
      <div className={classes['main-image']}>
        <img src={headerImage} alt='Not found' />
      </div>
    </div>
  );
}
