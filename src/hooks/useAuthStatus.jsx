import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

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
