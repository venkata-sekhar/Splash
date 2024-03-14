import React from 'react';

export default function Spinner() {
    return (
        <div style={{justifyContent:"center", display:"flex"}}>
            <br /><br />
        <h2 style={{color:"white", fontWeight:"bold",marginRight:"7px"}}>Loading</h2>
        <div className="spinner-border text-warning" role="status">
            <span className='visually-hidden'>Loading...</span>
        </div>
        </div>
    )
}