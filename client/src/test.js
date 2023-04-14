import { useState } from "react"

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const date = new Date()
function AddRemoveMultipleInputFields(){

    const [values, setValues] = useState(null)

    const [inputFields, setInputFields] = useState([{
        fullName:'',
        emailAddress:'',
        salary:'',
        startactivity: null 

    } ]);
 
    const addInputField = ()=>{
        setInputFields([...inputFields, {
            fullName:'',
            emailAddress:'',
            salary:'',
            startactivity: date   
        } ])
      
    }
    const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
   const handleChange = (index, evnt)=>{

    const list = [...inputFields];
    list[index][evnt.target.name] = evnt.target.value;
    setInputFields(list);

 console.log(inputFields)
 
}
    return(
    
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                  {
                      inputFields.map((data, index)=>{
                          const {fullName, emailAddress, salary, startactivity}= data;
                          return(
                            <div className="col">
                            <div className="form-group">
                            <div className="row my-3" key={index}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
				renderInput={(params) => {
					return (
					  <TextField
						{...params}
						sx={{
						  svg:   "black",
						  input: "black",
						  label: "black",
              color: "black",
						  width: "100%"
						}}
           

					  />
					);
				  }}
                    name="startactivity"
					value={startactivity}
					onChange={(evnt)=>handleChange(index, evnt)}
				/>
				</LocalizationProvider>
                                </div>
                                </div>
                    <div className="col">
                    <div className="form-group">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={fullName} name="fullName" className="form-control"  placeholder="Full Name" />
                    </div>
                    </div>
                    <div className="col">
                    <input type="email" onChange={(evnt)=>handleChange(index, evnt)} value={emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col">
                    <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={salary} name="salary" className="form-control" placeholder="Salary" />
                    </div>
                    <div className="col">
                
                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button>:''}
                  
                 
                    </div>
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12">
                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        
    )
}
export default AddRemoveMultipleInputFields