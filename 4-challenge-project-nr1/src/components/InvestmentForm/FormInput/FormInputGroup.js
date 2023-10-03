import styles from './FormInput.module.css';
import FormInput from './FormInput';

export default function FormInputGroup({ inputs }) {
  return (
    <div className={styles['input-group']}>
      <FormInput key={inputs[0].id} props={inputs[0]} />
      <FormInput key={inputs[1].id} props={inputs[1]} />
    </div>
  );
}
