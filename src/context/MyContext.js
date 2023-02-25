import { createContext, useState } from "react";

const MyContext = createContext();

function MyContextComponent(props) {

    const [adm, setAdm] = useState(false);

    return (
        <MyContext.Provider value={{ adm, setAdm }}>
            {props.children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextComponent }