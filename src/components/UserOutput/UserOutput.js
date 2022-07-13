import styles from "./UserOutput.module.scss";



const UserOutput = (props) => {
      return (
            <div className={styles.wrapper}>
<div className={styles.header}>
      <li>Name</li>
      <li>Age</li>
</div>
{props.users.map(users => (
        <div className={styles.output} key={users.id}>
          <li>{users.Name}</li>
          <li>{users.Age}</li>
          </div>  


      ))}
         </div>
         )}
         
               
         
      
   


export default UserOutput;


