import {createContext, useState , useEffect} from 'react';
import {Home} from './Components/';
import  dt  from './Components/data/vides.json';
import Fuse from 'fuse.js'
export const Context = createContext();

function App() {
  const [sm,setSm] = useState(true);
  const [search,setSearch] = useState(' ');
  const [videos,setVideos] =  useState([])

  useEffect(()=>{

   setVideos(dt);

  //axios.get(dt).then(res=>console.log('axios',res))

  },[])

  const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: [
    "title",
    "name",
    'views'
  ]
};


const fuse = new Fuse(videos, options);

const resulte = fuse.search(search);

  return (
    <Context.Provider value={{sm,setSm,search,setSearch,resulte,videos, options}}>
       <Home />
    </Context.Provider>
  );
}

export default App;
