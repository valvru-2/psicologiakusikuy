import { useState } from "react"
import { UserContext } from "./UserContext"


export const UserProvider = ({children}) => {

    const [user, setUser] = useState("")

  return (
    <UserContext.Provider value = {{"hola": "mundo", user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}