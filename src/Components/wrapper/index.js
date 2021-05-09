import React from 'react';
import {Aside,Header} from '../Widegt';



const Wrapper = ({children}) => {

  return (
    <div  className="relative">
         <Header />
         <Aside />
       <div  className={'pl-16 pt-24' }>

            {children}
       </div>
    </div>
  )
}

export default Wrapper;
