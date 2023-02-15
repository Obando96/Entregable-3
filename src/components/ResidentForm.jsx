import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {
    return (
        <form className='residentForm' onSubmit={handleSubmit}>
            <input className='residentForm_input' id='idLocation' type="text" placeholder='Type a location id' />
            <button className='residentForm_btn'>Search</button>
        </form>
    )
}

export default ResidentForm