import React,{useContext,useState , useEffect} from 'react';
import Wrapper from '../wrapper/'
import {Context} from '../../App'
import {Card} from '../Widegt'


const Home = () => {

  const [count , setCount] = useState(10)
  const {resulte} = useContext(Context)

  const rs =  resulte.slice(0,count)
   useEffect(()=>{
     const ele = document.querySelector('#inner');
     if(ele){

       window.addEventListener('scroll',(e)=>{
         let a = window.pageYOffset;

         console.log(ele);
       })
     }
   },[])


 return <Wrapper>

            <div id='inner'  className='
            h-scree px-2 scroll-y-auto
            scrollbar scrollbar-thumb-red-900  scrollbar-track-gray-500
            mx-auto grid grid-cols-1
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-x-2 gap-y-10  px-2 '>

          {

               resulte && rs.length && (rs.map(i=><Card

                                title={i.item.title}
                                img={i.item.img}
                                name={i.item.name}
                                views={i.item.views}
                                date={i.item.date}
                                />))
          }

            </div>

        </Wrapper>

}

export default Home;
