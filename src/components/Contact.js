import React,{useState} from 'react'


function Contact() {

    const [form, setForm] = useState (

        {
            name: "", 
            email:"",
            message:"",
        }
    ) 

    const handleEmail = (event) =>{

        event.preventDefault();
        window.location.href="mailto:awee@myseneca.ca?body=" + form.message
        console.log(form)
    }

    return (
       
        <section className="contactsection" id="Contact-Me">
     
            <h2 className="section-titlewhite">
                Contact Me
            </h2>

        <div className = "container" id = "contactcontainer">
            
            <form onSubmit = {handleEmail}>
               <div> <input required value ={form.name} onChange = {(event)=>setForm({...form, name: event.target.value})} placeholder = "Your Name"/> </div>

               <br/>

               <div> <input type = "email" required value ={form.email} onChange = {(event)=>setForm({...form, email: event.target.value})} placeholder = "Your Email"/> </div>

               <br/>

               <div > <textarea  style={{width: "500px", height: "200px"}} required value ={form.message} onChange = {(event)=>setForm({...form, message: event.target.value})}  placeholder = "Enter your message (you can resize this box)"> </textarea> </div>
               <br/>

                <div> <input value = "Send Email" type = "submit" /></div>
                   
             </form>

             

        </div>


   

        </section>
      


        
    )
}

export default Contact
