import React, { useContext, useEffect } from 'react';
import Routing from './Router';
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';
// import { ThemeProvider } from './contextProvider.jsx';
import { DataContext } from './Components/DataProvider/DataProvider';
import { Type } from './Utility/actiontype';
import { auth } from './Utility/firebase'




function App() {
  const [{user}, dispatch] = useContext(DataContext);
  useEffect(()=> {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      } else {
         dispatch({
           type: Type.SET_USER,
           user: null,
         });
      }
    });
  }, []);
  return <Routing/>;
    // <ThemeProvider>
    //   <ComponentA/>
    //   <ComponentB/>
    // </ThemeProvider>


}

export default App;
