import * as React from "react"

function Bars(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 13h18v-2H3v2zm0-5h18V6H3v2zm0-7v2h18V1H3z" fill="#fff" />
    </svg>
  )
}

export default Bars
