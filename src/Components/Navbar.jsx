
import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    render(){
        return (
            <div style={{display:"flex",justifyContent:'space-evenly',padding:'20px',fontSize:'25px',marginBottom:'3%',backgroundColor:'grey',color:'white',fontWeight:'400'}}>
                <Link to='/'>ADD PRODUCT</Link>
                <Link to='/show'>ALL PRODUCTS</Link>
            </div>
        )
    }
}
export default Navbar