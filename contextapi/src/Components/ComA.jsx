
import React, { createContext } from 'react'
import ComC from './ComC'
const Data= createContext()

const ComA = () => {
  return (
    <div>
              <Data.Provider value={"yogesh"}>
               <ComC />
              </Data.Provider>
    </div>
  )
}

export default ComA
export {Data}