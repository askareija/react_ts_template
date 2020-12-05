/*  * Button component
    * Author : Aden Aziz Hasnayakin
    * Created at: Jum'at, 04 Desember 2020 - 10:49 WIB
*/

import React from 'react'

const Button: React.FunctionComponent = () => {
  
  const clickHandler = () => {
    alert('You clicked me.')
  }

  return (
    <div>
      <button onClick={clickHandler}>I'm A Button, Click Me.</button>
    </div>
  )
}

export default Button
