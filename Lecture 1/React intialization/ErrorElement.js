import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {

    const err=useRouteError()
    console.log(err)
  return (
    <div>ErrorElement</div>
  )
}

export default ErrorElement