import React from 'react'
import { useRouteError } from 'react-router';

const Error = () => {
    const error=useRouteError()
  return (
    <div style={{display:'center', color:'blue'}}>Something went wrong {error.status}😕</div>
  )
}
export default Error;