import styles from './ContactForm.module.css';
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Button from '../Button/Button';
import { IoMailSharp } from "react-icons/io5";
import { useState } from 'react';
const ContactForm = () => {
    const [name, setName] = useState("Anshu");
    const [email, setEmail] = useState("support@dosomecoding.com");
    const [text, setText] = useState("Subscribe to this channel");
  
    const onSubmit = (event) => {
      event.preventDefault();
  
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);
 };
  return (
    <section
    className={styles.container}
    >
<div
className={styles.contact_form}
>
    <div className={styles.top_btn}>
    <Button 
    text="VIA SUPPORT CHAT" 
    icon={<MdOutlineMessage fontSize="24px"/>}/>
    <Button 
    text="VIA CALL" 
    icon={<IoMdCall fontSize="24px"/>}/>
    </div>
   <div>
   <Button 
   isOutline={true} 
   text="VIA EMAIL FORM" 
   icon={<IoMailSharp fontSize="24px"/>}/>
   </div>
   <form
   onSubmit={onSubmit}
    action="">
   <div className={styles.form_control}>
   <label htmlFor="name">Name</label>
   <input type="text" />
   </div>
   <div className={styles.form_control}>
   <label htmlFor="email">E-mail</label>
   <input type="text" />
   </div>
   <div className={styles.form_control}>
   <label htmlFor="name">Text</label>
   <textarea name="text" rows="8"/>
   </div>
    <div style={{
         display:"flex",
         justifyContent: "end"
    } 
    }>
         <Button 
   text="SUBMIT" 
   />
   </div>
  <div>
    {name + " " + email + " " + text}
  </div>
   </form>

</div>

<div
className={styles.contact_image}
>
<img src="images/contact.svg" alt="" />
</div>
    </section>
  )
}

export default ContactForm