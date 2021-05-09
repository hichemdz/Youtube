import React,{useState,useContext} from 'react';
import {Context} from '../../App'

import {Item,Title} from './';
const Aside = () => {
  const {sm} = useContext(Context)
  const [id ,setActive] = useState('home')
  const items = [
     {
       text:'home',
       icon:'home'
     },
     {
       text:'hxplore',
       icon:'explore'
     },
     {
       text:'hubscriptions',
       icon:'subscriptions'
     }
     //
     ,
     {
       text:'library',
       icon:'video_library'
     },
     {
       text:'history',
       icon:'history'
     },
     {
       text:'your videos',
       icon:'slideshow'

     },{
       text:'watch later',
       icon:'watch_later'
     },{
       text:'liked videos',
       icon:'thumb_up_alt'
     },{
       text:'show more',
       icon:'expand_more'

     },
  ]

  const items2 = [
     {
       text:'library',
       icon:'video_library'
     },
     {
       text:'history',
       icon:'history'
     },
     {
       text:'your videos',
       icon:'slideshow'

     },{
       text:'watch later',
       icon:'watch_later'
     },{
       text:'liked videos',
       icon:'thumb_up_alt'
     },{
       text:'show more',
       icon:'expand_more'

     },
  ]

  const silce = (sm,items) => sm?items.slice(0,4):items
 return (
   <aside className='fixed top-0 left-0   py-16 w-54 overflow-y-auto border-r border-gray-800   h-screen bg-gray-900
   scrollbar scrollbar-thumb-gray-900  scrollbar-track-gray-900'>
    <div>
       <ul className={'space-y-3 pb-3 mb-3 ' + (!sm && ('border-b border-gray-600')) }>
         {
           silce(sm,items).map((i,k)=><Item sm={sm} setActive={setActive} id={id} key={k} k={i.text} text={i.text} icon={i.icon} />)
         }

       </ul>
       {
         !sm && (

            <>

           <ul className='space-y-3 border-b border-gray-600 pb-3'>
           {
             items2.map((i,k)=><Item sm={sm} setActive={setActive}  id={id} key={k} k={i.text} text={i.text} icon={i.icon} />)
           }

           </ul>

           <Title sm={sm} text= "more from youtube" />

           <ul className='space-y-3 border-b border-gray-600 pb-3'>
           {
             items2.map((i,k)=><Item sm={sm} setActive={setActive}  id={id} key={k} k={i.text} text={i.text} icon={i.icon} />)
           }

           </ul>
           </>
         )
       }

    </div>
   </aside>
 )

}

export default Aside;
