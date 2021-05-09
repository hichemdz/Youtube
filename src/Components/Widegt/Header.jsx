import React , {useContext,useState} from 'react';
import {Context} from '../../App'

import LogoBars from './logo_bars';
import Came from '../../icon/came';
import Reg from '../../icon/reg';
import Bell from '../../icon/bell';
import Search from '../../icon/search';
import Speaker from '../../icon/speaker';
import Fuse from 'fuse.js'
const List = ({data,click}) =>{
  return <li onClick={click}>{data}</li>;
}
const Header = () => {

   const {videos, options, sm , setSm,setSearch} = useContext(Context)
   const [show,setShow] = useState(false)
   const [searchInput , setSearchInput ] = useState('hichem')
   let list = new Fuse(videos, options)
   let searchList = list.search(searchInput);

  // submit search

   const onSearch = () => {
     setSearch(searchInput)
     setSearchInput(' ')
     setShow(false)
   }

   // close list

   const onCHoose = (d) => {
     setSearchInput(d);
     setShow(false)
   }
   // change search
   const searched = (e) => {

     setSearchInput(e.target.value)
     setTimeout(function () {

        console.log(e.target.value);

        if( searchInput !== ' ' && !show  ) {
          setShow(true)
        }

     }, 300);



   }
 return (
        <header className='fixed w-full top-0 left-0 h-16 border-b border-gray-800 bg-gray-900  flex items-center h-16 z-10 grid grid-cols-12 '>
          <div className='col-span-6 sm:col-span-3'>
                <LogoBars onClick={()=>setSm(!sm)}/>
          </div>

          <div className='hidden md:block col-span-6 relative'>
               <div className='flex space-x-8 items-center'>
                  <div className='flex w-full focus:outline-white'>
                       <input value={searchInput}  onChange={searched} className='text-white focus:outline-none w-full bg-gray-900 px-3 h-10 border-t border-l border-b border-gray-700' type='search' placeholder='Search ...' />
                       <button className='bg-gray-900 focus:outline-none border-gray-700 border-t border-b border-r   w-12 h-10 flex items-center justify-center'>
                            <Search click={onSearch} className=''/>
                       </button>
                 </div>

                 <button className='w-8 h-8 flex items-center justify-center'>
                        <Speaker />
                 </button>
               </div>
               {
                 show && (

                   <div className='absolute
                   top-12 p-2 w-full left-0 bg-gray-700 text-white'>
                     <ul>
                      {
                        searchList && searchList.length >0 && (

                           searchList.map(i=>{
                            return <List click={()=> onCHoose(i.item.title)} key={i.item.id} data={i.item.title} />
                           })

                        )
                      }
                     </ul>
                   </div>
                 )
               }
          </div>

          <div className='hidden  lg:block col-span-1'></div>

          <div className='col-span-6 sm:col-span-9   md:col-span-3 lg:col-span-2'>
            <div className='px-4 justify-end flex space-x-8 items-center '>
              <Came className='w-6 h-6 '/>
              <Reg className='w-6 h-6 '/>
              <Bell className='w-6 h-6 '/>

              <div className='w-8 h-8 bg-gray-700 rounded-full'>
              </div>
            </div>
          </div>
        </header>
      )

}

export default Header;
