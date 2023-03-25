import React, {useState } from 'react';

export const DataAppContext = React.createContext()
function Context(props) {
    const[cartData,setCartData] = useState([])
    const[loginStaus, setLoginStatus] =useState(false)
    const[lth,setlth]=useState(0)
    const[total,settotal]=useState(0)
    const[glcontext,setglcontext] = useState([])
    const[srbar,setsrbar] =useState('')

  
    return (
      <div>
          <DataAppContext.Provider value={{cartData,setCartData,loginStaus,setLoginStatus,lth,setlth,total,settotal,glcontext,setglcontext,srbar,setsrbar}}>
            {props.children}

           </DataAppContext.Provider>
   </div>
    )
  }


export default Context