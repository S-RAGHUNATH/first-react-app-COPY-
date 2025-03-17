import { useState } from "react"


function UserForm(){
    function updateFirstname(evt){
        setFirstName(evt.target.value) 
        //reqd value ll be present in target.value of evt and that value is set to state using setFirstName
        //In ths way, updated value is always present in state
    }
    function updateSecondname(evt){
        setSecondName(evt.target.value)
    }

    //one generic func for mulitple inputs
    function formChange(evt){
        const changeField = evt.target.name
        const newValue = evt.target.value
        setFormData(currValue => { //as updating based on current value we use ths mthd
            // currValue[changeField] = newValue
            // return {...currValue}  //returning the copy suing spread
            
            //COMMONLY USED WAY - ALTERNATIVE
            return {
                ...currValue,
                [changeField]: newValue
            }
        })
    }

        function handleSubmit(){
        console.log(firstName, secondName, formData)
    }

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('username da')
    const [formData, setFormData] = useState({emailId: '', password: ''}) //state as an object-betterway
    return(
        <div>
            {/* As 'for' is a reserved word in js, we use 'htmlFor' in react to sync this with 
            'id' in input tag
            
            state is set as value. hence value={firstName} 
            */}
            <label htmlFor='firstname'>Firstname</label>
            <input type="text" placeholder="username" value={firstName} 
            onChange={updateFirstname} id='firstname'></input>

            <label htmlFor='secondname'>lastname</label>
            <input type="text" placeholder="username" value={secondName} 
            onChange={updateSecondname} id='secondname'></input>
            
            {/* name attribute is used to edentify and update the particular field 
            To use this mthd, keys in state musr match name attribute*/}
            <label htmlFor='emailid'>email</label>
            <input type="text" placeholder="emailID" value={formData.emailId} 
            onChange={formChange} id='emailid' name="emailId"></input>

            <label htmlFor='password'>password</label>
            <input type="password" placeholder="password" value={formData.password} 
            onChange={formChange} id='password' name="password"></input>

            <button onClick={handleSubmit}>click</button>            

        </div>
    )
}
export default UserForm