import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import './login.scss'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Register = ({data,setData})=> {

    let title = 'Sign Up';
    const {register, handleSubmit, errors} = useForm();    
    const [isStudent, setIsStudent] = useState(true); 

    
    
   async function onSubmit(data){
        //TODO: register api integration and update setData

        // console.log(data)
        // let res = await loginApi.savelogin(data);
        // data.UserDetails = res;
        // putDataInStorage("loginData", data);
        // if (res.Message == "Failed to login.") {
        //     alert(res.Message);
        // } else {
        //     setData(data);
        //     navigate('/dashboard') 
        // }
    };

    const onChange =(val) =>{
        setIsStudent(val.target.value);
    }
    return(
        <>
        <body className='examination'>
        <div className='container'>
            <div className='box' >
            <h1>{title}</h1>
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <TextField
                                id="outlined-basic"  
                                label={
                                    <Typography variant="headline" component="h4"> Username </Typography>
                                  }
                                variant="outlined"  
                                color="secondary" 
                                placeholder='Username'
                                sx={{ mt: 2 }}
                                {...register("loginId",{
                                    required:true
                                })}
                                
                             />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"  
                                type='password'
                                label={
                                    <Typography variant="headline" component="h4"> Password </Typography>
                                  }
                                variant="outlined"  
                                color="secondary" 
                                placeholder='password'
                                sx={{ mt: 2 }}
                                {...register("password",{
                                    required:true
                                })}
                             />
                             <div style={{width: '100%', flex:1, marginTop:20, marginBottom:10}}>
                            
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={isStudent}
                                label="Student / Instructor"
                                onChange={onChange}
                                style={{width: '200px'}}
                            >
                                <MenuItem value={true}>Student</MenuItem>
                                <MenuItem value={false}>Instructor</MenuItem>
                            </Select>
                             </div>
                    
                        </div>
                        <input type="submit" className="btn btn-primary " />
                    </form>
            
                </div>
            </div>
            </body>
        
        </>
    );
    
}

export default Register;


/*



*/