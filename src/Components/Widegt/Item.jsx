export const Item = ({icon,k,id ,setActive, text , sm}) => {

  return (
    <li onClick={(()=>setActive(text))} className={ (id===k?'bg-gray-700':'') +' cursor-pointer flex items-center space-x-3 py-1 px-4'}>
              <span className={"material-icons text-ms mt-1 " + (id===k?'text-gray-100':'text-gray-400')}>{icon}</span>
              <span className={(sm && ('hidden ')  ) + (id===k?' text-gray-100 font-bold':' text-gray-200 ') + ' text-sm mt-1 capitalize  '}>{text}</span>
    </li>

  )
}

export const Title = ({text , sm}) => {
   return <h3 className={(sm && ('hidden ') ) +' p-4 text-gray-400 text-md font-bold'}>{text.toUpperCase()}</h3>
}
