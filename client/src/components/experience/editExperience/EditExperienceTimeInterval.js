import React from "react";
import {Button, Grid, Modal, Stack, SxProps, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {Controller, useForm} from "react-hook-form";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {format, parse} from "date-fns";

function ErrorText(props){
    const {children,  ...other} = props;
    return(
        <Box className="errorText">
            {children}
        </Box>
    )
}

const EditExperienceTimeInterval = ({open, onClose, timeIntervals, handleDataChange}) =>{


    //Style
    const modalStyle = {
        position: 'absolute',
        marginTop: '10px',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        //border: '10px solid red',
        width: '80%'
    };
    const dateTextFieldSx: SxProps={
        '& fieldset': {
            borderRadius: '12.6757px',
            boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
        },
        '& svg':{
            color: "#E22357",
        }
        ,
        '& input':{
            height: '11px'
        }
    }
    const textFieldStyle={
        width: '150px'
    }

    //Convert time string into type date
    const formatStringToTime=(timeString)=> {
        return parse(timeString, 'HH:mm', new Date)
    }

    //Input: Mon Aug 15 2022 08:00:00 GMT+0100 (GMT+01:00) => Output: 15:00
    const timeFormat= (time)=>{
        return format(time, "HH:mm")
    }

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit= (data)=> {
        //Create the time array
        let timeIntervals= [
            timeFormat(data.experienceTimeStart1),
            timeFormat(data.experienceTimeEnd1),
            timeFormat(data.experienceTimeStart2),
            timeFormat(data.experienceTimeEnd2),
        ]
        //return the array to the parent & close
        handleDataChange(timeIntervals)
        onClose()
    }

    return(
        <Modal open={open} onClose={onClose}>
            <Box style={modalStyle} className="bg-white p-10 text-center rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid container columnSpacing={8} justifyContent="center">
                    <Grid item>
                        <Stack>
                            <label>Start time:</label>
                            <Controller
                                control={control}
                                name="experienceTimeStart1"
                                rules={{required: true}}
                                defaultValue={timeIntervals[0]?
                                    formatStringToTime(timeIntervals[0])
                                    :new Date().getTime()
                                }
                                render={({field})=>(
                                    <TimePicker
                                        onChange={(date)=>field.onChange(date)}
                                        inputFormat="HH:mm"
                                        renderInput={(params)=>
                                            <TextField sx={dateTextFieldSx}
                                                       style={textFieldStyle}
                                                       {...params}/>}
                                        value={field.value}
                                    />
                                )}
                            />
                            {errors.experienceTimeStart1 && <ErrorText>This is required</ErrorText>}
                        </Stack>
                    </Grid>

                    <Grid item>
                        <Stack>
                            <label>End time:</label>
                            <Controller
                                control={control}
                                name="experienceTimeEnd1"
                                rules={{required: true}}
                                defaultValue={timeIntervals[1]?
                                    formatStringToTime(timeIntervals[1])
                                    :new Date().getTime()
                                }
                                render={({field})=>(
                                    <TimePicker
                                        onChange={(date)=>field.onChange(date)}
                                        inputFormat="HH:mm"
                                        renderInput={(params)=>
                                            <TextField sx={dateTextFieldSx}
                                                       style={textFieldStyle}
                                                       {...params}/>}
                                        value={field.value}
                                    />
                                )}
                            />
                            {errors.experienceTimeEnd1 && <ErrorText>This is required</ErrorText>}
                        </Stack>
                    </Grid>

                    <Grid item>
                        <Stack>
                            <label>Start time:</label>
                            <Controller
                                control={control}
                                name="experienceTimeStart2"
                                rules={{required: true}}
                                defaultValue={timeIntervals[2]?
                                    formatStringToTime(timeIntervals[2])
                                    :new Date().getTime()
                                }
                                render={({field})=>(
                                    <TimePicker
                                        onChange={(date)=>field.onChange(date)}
                                        inputFormat="HH:mm"
                                        renderInput={(params)=>
                                            <TextField sx={dateTextFieldSx}
                                                       style={textFieldStyle}
                                                       {...params}/>}
                                        value={field.value}
                                    />
                                )}
                            />
                            {errors.experienceTimeStart2 && <ErrorText>This is required</ErrorText>}
                        </Stack>
                    </Grid>

                    <Grid item>
                        <Stack>
                            <label>End time:</label>
                            <Controller
                                control={control}
                                name="experienceTimeEnd2"
                                rules={{required: true}}
                                defaultValue={timeIntervals[3]?
                                    formatStringToTime(timeIntervals[3])
                                    :new Date().getTime()
                                }
                                render={({field})=>(
                                    <TimePicker
                                        onChange={(date)=>field.onChange(date)}
                                        inputFormat="HH:mm"
                                        renderInput={(params)=>
                                            <TextField sx={dateTextFieldSx}
                                                       style={textFieldStyle}
                                                       {...params}/>}
                                        value={field.value}
                                    />
                                )}
                            />
                            {errors.experienceTimeEnd2 && <ErrorText>This is required</ErrorText>}
                        </Stack>
                    </Grid>

                    <Grid item>
                        <Stack className="mt-[30%]">
                            <Button type="submit" className="pinkGradientBgWhiteText">Add time</Button>
                        </Stack>
                    </Grid>

                </Grid>
                    </LocalizationProvider>
                </form>
            </Box>
        </Modal>
    )
}

export default EditExperienceTimeInterval;