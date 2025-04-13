import { createContext, useState } from "react";
const stateContext=createContext([]);
export  function ContextProvider({children})
{
const [listState,setListState]=useState(false);
console.log("the list state now is",listState);
return <>
    <stateContext.Provider value={{listState,setListState}}>
    {children}
    </stateContext.Provider>
</>    
}
export default stateContext;
