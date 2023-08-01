import React, { useContext } from 'react'
import { Data } from './ComA'

const ComC = () => {
    const {name,sir}= useContext(Data)
  return (
    <div>ComC {name}{sir}</div>
  )
}

export default ComC