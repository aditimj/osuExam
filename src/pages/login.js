import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import validator from 'validator'
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import './login.scss'
import loginApi from '../api/login';

const Login = ({data,setData}) => {
    let title = 'Log in';
    const {register, handleSubmit, errors} = useForm();    
    const navigate = useNavigate();
    
    // Data object stored in data, which can be sent to the other page
   async function onSubmit(data){
        console.log(data)
        let res = await loginApi.savelogin(data);
        data.UserDetails = res;
        if (res.Message == "Failed to login.") {
            alert(res.Message);
        } else {
            setData(data);
            navigate('/dashboard') 
        }
    };

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
                        </div>
                        <input type="submit" className="btn btn-primary " />
                    </form>
            
                </div>
            </div>
            </body>
        
        </>
    );
    
}

export default Login;