import React from 'react'
import withLayout from './withLayout'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='banner'>
        <h2>Welcome To My Webpage</h2>
        <p> This webpage is about sports.There is an unknown home stadium for the Black Stars. World Cup and Africa Cup 
        of Nations qualifying matches have been played at the Essipong Stadium and Sekondi-Takoradi 
        Stadium in Sekondi-Takoradi, the Len Clay Stadium, Kumasi Sports Stadium and Abrankese Stadium in Kumasi, 
        the Cape Coast Sports Stadium in Cape Coast, the Accra Sports Stadium in the Accra and the Tamale 
        Stadium in Tamale</p>
        <div className='actions-wrap'>
          <button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
          <button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blogs</button>


        </div>
        </div>
        </div>
  )
}

export default withLayout (Home)