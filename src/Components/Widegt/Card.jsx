import {str} from '../helper';
import moment from 'moment';
const Card  = ({cls , title , img, name, views, date}) => {

  return  <div className={'w-full space-y-2  ' + (cls) }>
               <div className=' lg:w-74 lg:mx-auto'>
                  <div className='bg-gray-800  w-full  md:h-40 '>
                    <img className='w-full h-full' src={img} alt='youtube thumbmail' />
                  </div>
                  <div className='flex justify-start  items-start w-72 my-4 grid grid-cols-5'>
                      <div className=' w-12 h-12 bg-gray-800 rounded-full'></div>
                      <div className='col-span-4 w-full h-8 space-y-1 px-2'>
                          <div className='px-1 text-md bg-gray-00  text-white '>
                              <p>{str(43,title,' ...')}</p>
                          </div>
                          <div className='px-1 text-sm text-gray-500 bg-gray-00 '>
                             <p className=''>{name}</p>
                             <p>{views} views {moment().startOf(date).fromNow()  }</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>;
}

export default Card;




export const CardSearch   = ({cls , title , img, name, views, date}) => {

  return  <div className={'w-full space-y-2  ' + (cls) }>
               <div className=' lg:w-74 lg:mx-auto'>
                  <div className='bg-gray-800  w-full  md:h-40 '>
                    <img className='w-full h-full' src={img} alt='youtube thumbmail' />
                  </div>
                  <div className='flex justify-start  items-start w-72 my-4 grid grid-cols-5'>
                      <div className=' w-12 h-12 bg-gray-800 rounded-full'></div>
                      <div className='col-span-4 w-full h-8 space-y-1 px-2'>
                          <div className='px-1 text-md bg-gray-00  text-white '>
                              <p>{str(43,title,' ...')}</p>
                          </div>
                          <div className='px-1 text-sm text-gray-500 bg-gray-00 '>
                             <p className=''>{name}</p>
                             <p>{views} views {moment().startOf(date).fromNow()  }</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>;
}
