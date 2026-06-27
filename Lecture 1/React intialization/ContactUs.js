import { useEffect, useState } from "react"
import useFetchUser from "./hooks/useFetchUser"

function ContactUs(){

  const user= useFetchUser()


           
     



 
        return(
            <div>
          
            <h1>My github name is {user.name}</h1>
            <img src={user.avatar_url} alt="" />

        
  
            </div>
        )
    }


export default ContactUs


