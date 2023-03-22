import React, {useState } from 'react';

export const DataAppContext = React.createContext()
function Context(props) {
    const[cartData,setCartData] = useState([])
    const[loginStaus, setLoginStatus] =useState(false)
    const[lth,setlth]=useState(0)
    const[total,settotal]=useState(0)

  
    return (
      <div>
          <DataAppContext.Provider value={{cartData,setCartData,loginStaus,setLoginStatus,lth,setlth,total,settotal}}>
            {props.children}

           </DataAppContext.Provider>
   </div>
    )
  }


export default Context