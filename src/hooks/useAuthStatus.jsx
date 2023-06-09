import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

//we won't write default, because we want to export two things from here 
export function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)

    //check information came or not else we will add loading effect
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(()=>{
        const auth = getAuth()
        // onAuthStateChanged gives us the user
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setLoggedIn(true)
            }
            setCheckingStatus(false)
        })
    },[])
  return {loggedIn, checkingStatus}
}
