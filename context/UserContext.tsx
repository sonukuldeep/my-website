import React, { useState, createContext, useEffect } from "react";
import { FirebaseApp } from "../Firebase/FirebaseConfig.js"
import { getAuth, onAuthStateChanged, } from "firebase/auth"


const auth = getAuth(FirebaseApp);

interface IChildrenType {
    children: React.ReactNode
}

interface IUserContextProps {

    uid: string | null;
    displayName: string | null;
    email: string | null;

}
interface IUserContextType {
    userName: IUserContextProps

    setUserName: React.Dispatch<React.SetStateAction<IUserContextProps>>;
}

const UserContext = createContext({} as IUserContextType)

export const UserContextProvider = ({ children }: IChildrenType) => {
    const [userName, setUserName] = useState<IUserContextProps>({} as IUserContextProps)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("this function runs whenever auth changes", user);
                const { uid, displayName, email } = user
                const data = { uid, displayName, email }
                setUserName(data)
            } else {
                setUserName({ uid: null, displayName: null, email: null })
            }
        });
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext