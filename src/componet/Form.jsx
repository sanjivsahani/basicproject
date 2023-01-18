import React, { useState } from 'react'
import Showname from './Showname'

const Form = () => {
    let initstate = {
        frist: "",
        last: ""
    }
    const [name, setname] = useState(initstate)
    const [data,setdata]=useState([])
    const handleChange = (event) => {
        setname({...name, [event.target.name]: event.target.value })
    }
    const handleClick = () =>{
        setdata([...data,name])
      
    }
    return (
        <>
            <div>
                <input type="text" style={{ width: "300px", height: "50px", marginLeft: "40%", marginTop: "20px" }} name="frist" placeholder='Frist name' onChange={handleChange} />
                <br />
                <input type="text" style={{ width: "300px", height: "50px", marginLeft: "40%", marginTop: "20px" }} name="last" placeholder='last  name' onChange={handleChange} />

                <button onClick={handleClick} style={{ width: "300px", height: "50px", marginLeft: "40%", marginTop: "20px" }}>add name </button>
            </div>
            <Showname data = {data}/>
        </>
    )
}

export default Form