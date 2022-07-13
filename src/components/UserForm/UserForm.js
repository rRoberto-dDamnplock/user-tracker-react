import React, {useState}  from "react";
import styles from "./UserForm.module.scss";
import Button from "../UI/Button/Button";

const UserForm = (props) => {

      const [enteredName, setEnteredName] = useState('')
      const [enteredAge, setEnteredAge] = useState('')
      const [isValid, setIsValid] =useState(true)

      const onChangeNameHandler = (event) => {
            if(event.target.value.trim().length > 0){
                  setIsValid(true);
                }
                setEnteredName(event.target.value);
      }

      const onChangeDateHandler = (event) => {
            if(event.target.value.trim().length > 0){
                  setIsValid(true);
                }  
                setEnteredAge(event.target.value);
      }
      
      const submitHandler =(event) => {
            event.preventDefault()
            // props.onAddData(enteredName, enteredAge)
            if( enteredAge.trim().length === 0) {
                  setIsValid(false);
                  return;
                }  if(enteredName.trim().length === 0) {
                  setIsValid(false);
                  return;
                }
                        props.onAddData(enteredName, enteredAge)
            setEnteredName('')
            setEnteredAge('')
            // console.log(`${enteredAge} is ${enteredName}`)
      }
  return (
      
    <form className={`${styles.form} ${!isValid && styles.invalid}`} onSubmit={submitHandler}>
      <div className={styles.control}>
    <div className={styles.label}>
    <label className={`${styles['form__label']} ${!isValid && styles.invalid}`} htmlFor="name">Name</label>
        <label className={styles.labelInv} htmlFor="name">
            <p>Pls add or correct values</p>
            </label>
           
       
        </div>
        <input type="text" name="name" id="name" placeholder="Name" value={enteredName} onChange={onChangeNameHandler} className={styles['form__field']}/>

<label className={styles['form__label2']} htmlFor="age">Age</label >

        <input type="number" name="age" id="age" placeholder="Age" min='5' max='100'value={enteredAge}onChange={onChangeDateHandler}  className={styles['form__field2']} />
        <Button/>
      </div>
    </form>
  
  );
};

export default UserForm;
