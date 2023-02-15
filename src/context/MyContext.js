import { createContext, useState } from "react";

const MyContext = createContext();

function MyContextComponent(props) {

    const [select, setSelect] = useState({
        selected: ""
    });

    return (
        <MyContext.Provider value={{ select, setSelect }}>
            {props.children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextComponent }