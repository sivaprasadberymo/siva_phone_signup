import React, {useState} from 'react';


      function Display(){
          
          const [phone,setphone]=useState("");
          const [countryCode,setcountryCode]=useState("");
          
         
       async function login()
       {
           
           let item={phone,countryCode};
           console.warn(item)
           let result= await fetch("https://api.berymo.com/api/security/phone-verify/send-code",{
               method:'POST',
               headers:{
                   "Content-Type":'application/json',
                   "Accept":'*/*'
               },
               body:JSON.stringify(item)
           })
           result= await result.json();
           console.warn(result)
       }
        return(
        <center>
             <form>
         
              
         <label>
               phone:
               <input type="number" placeholder="phone" onChange={(e)=>setphone(e.target.value)}></input>
         </label>
         <label>
             countryCode
             <input type="number" placeholder="countryCode" onChange={(e)=>setcountryCode(e.target.value)}></input>
         </label>
         <hr/>
         <div>
         <label>
         <button className="btn btn-primary" onClick={login}>login</button>
         </label>
         </div>
       </form>
  
        </center>
  )   
    
        }

export default Display