import React from 'react'

const Showname = (props) => {
    
    return (
        <div>
            
            {
                props?.data.map((ele,ind)=>{
                    return<>
                    <h3 style={{ width: "300px", height: "50px", marginLeft: "40%", marginTop: "30px" }}> {ind+1}{ '->' }{ele.frist} {' '} {ele.last} <br/></h3>
                    </>
                })
            }
        </div>
    )
}

export default Showname