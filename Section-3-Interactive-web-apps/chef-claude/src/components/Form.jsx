import React from 'react';

export default function Form() {
    return(
        <form id='my-form'>
            <label for='first-name'>First Name:</label>
            <input type='text' id='first-name' name='first-name' className='rounded-lg mx-5 p-1 border'></input>
            <br/>
            <br/>
            <label for='last-name'>Last Name:</label>
            <input type='text' id='last-name' name='last-name' className='rounded-lg mx-5 p-1 border'></input>
            <br/>
            <br/>
            <input type='submit' value='Submit' className='border p-1 w-28 rounded-md'></input>
        </form>
    )

}