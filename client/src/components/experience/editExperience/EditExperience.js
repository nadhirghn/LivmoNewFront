import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useForm, Controller} from "react-hook-form";
import {Button, FormControlLabel, Grid, Input, Radio, RadioGroup, Select, Stack, TextField} from "@mui/material";
import './editExperience.scss'
import MenuItem from "@mui/material/MenuItem";
import {SxProps} from "@mui/material";
import plusIcon from "../../img/plusIcon.png";
import closeIcon from "../../img/closeIcon.png";
import { DateTimePicker, LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import EditExperienceTimeInterval from "./EditExperienceTimeInterval";
import {format, parse} from "date-fns";

import Layout from "../../shared/layout"

function ErrorText(props){
    const {children,  ...other} = props;
    return(
        <Box className="errorText">
            {children}
        </Box>
    )
}


const EditExperience =()=> {

    //style
    const selectInput: SxProps={
        '& fieldset':{
            borderRadius: '12.6757px',
            boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
        }
    }
    const inputsContainerSx: SxProps={
        '& .MuiGrid-item':{
            width: '25%',
            minWidth: '210px'
        }
    }
    const muiButtonSx:SxProps={
        '&.MuiButton-root':{
            width: '155px',
            height: '44px',
            boxShadow: '1.57533px 0.787666px 3.93833px 1.57533px rgba(0, 0, 0, 0.4)',
            borderRadius: '20px',

            fontSize: '17px',
            fontWeight: '700',
        }
    }
    const radioSx: SxProps={
        color:"red",
        '&.Mui-checked': {
            color: ' #12B38C',
        },
    }
    const popperSx: SxProps={
        "& .MuiCalendarPicker-root": {// All background
            //backgroundColor: "rgb(241,5,48)",
        },
        "& .MuiPickersDay-dayWithMargin": {//All days
            color: "#F02F32",
            fontSize: "20px"
        },
        "& .MuiIcon-root": { //The year
            //    color: "rgb(8,232,12)",
        },
        "& .Mui-selected": { //Selected
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            color: "white",
        },
        "& .css-1dozdou": { //
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            marginTop: '0px',
            marginBottom: '0px',
            paddingTop: '8px',
            paddingBottom: '8px',
            maxHeight: '50px',
        },"& .MuiTypography-root": { //Days
            fontSize: "20px",
            color: "#F02F32",
        },"& .css-1v994a0": { // Month-year picked
            fontSize: "20px",
        },
        "& .css-13go44a-MuiButtonBase-root-MuiIconButton-root": { //PM button
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-13go44a-MuiButtonBase-root-MuiIconButton-root .MuiTypography-root": { //PM Text
            color: "white",
        },
        "& .css-1t8wyba-MuiButtonBase-root-MuiIconButton-root": { //AM button
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-1t8wyba-MuiButtonBase-root-MuiIconButton-root .MuiTypography-root": { //AM Text
            color: "white",
        },
        "& .css-12ha4i7": { //Time dot
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-7lip4c": { //Hour line
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-a1rc6s": { //Hour line
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
        },
        "& .css-2ujp1m": { //Hour line
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            border: "16px solid",
            borderImage: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)'
        },
        "& .css-118whkv": { //Circle
            background: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)",
            border: "16px solid",
            borderRadius: "30px",
        },
    }
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
    const fileInputLabel={
        height: '44px',
            boxShadow: '1.57533px 0.787666px 3.93833px 1.57533px rgba(0, 0, 0, 0.4)',
            borderRadius: '11px',
            fontWeight: '600',
            fontSize: '20px',
            paddingLeft: '15px',
            paddingRight: '15px',
            paddingTop: '12px',
            paddingBottom: '12px',
            textTransform: 'uppercase'
    }

    //Preset data
    const experience= {id: 1, name: "Rtiba Forest Hiking", theme: "Nature", subTheme: "Hiking", location: "Rtiba, Tunisia",
        price: 120, spots: 20, mapLink: "", season: "Summer", dateType: "Interval date", durationDays: 2, durationHours:7,
        dateStart: "20/08/2022 10:00", dateEnd: "23/08/2022 15:00", timeInterval: [ "08:00", "12:00", "14:00", "18:00"], daysOff: [],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        minAge: 10, isPetsAllowed: null,
        criteria: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        gallery:[
            "https://t4.ftcdn.net/jpg/02/12/62/79/240_F_212627923_L2vmREAE9lGLnmFbNPhf2TfCRT44z6PB.jpg",
            "https://t4.ftcdn.net/jpg/02/12/62/79/240_F_212627923_L2vmREAE9lGLnmFbNPhf2TfCRT44z6PB.jpg",
        ]
    }

    const activity= {
        id:1, activity: "Hiking", duration: 8,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        gallery:[
            "https://t4.ftcdn.net/jpg/02/12/62/79/240_F_212627923_L2vmREAE9lGLnmFbNPhf2TfCRT44z6PB.jpg",
            "https://t4.ftcdn.net/jpg/02/12/62/79/240_F_212627923_L2vmREAE9lGLnmFbNPhf2TfCRT44z6PB.jpg",
        ]
    }

    const dish= {
        id:1, dish: "Burger",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        gallery:[
            "https://t4.ftcdn.net/jpg/03/01/64/43/240_F_301644355_EAswkNvgdIUgpJQ6jFPYZCkELR0jFM8J.jpg",
            "https://t4.ftcdn.net/jpg/03/01/64/43/240_F_301644355_EAswkNvgdIUgpJQ6jFPYZCkELR0jFM8J.jpg",
        ]
    }

    const transport= {
        id:1, transport: "Bus", seats: 20, locationStart: "Tunis", locationEnd: "Tunis",
        departureTime: "08:00", arrivalTime: "11:00",
        rules: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        gallery:[
            "https://t3.ftcdn.net/jpg/03/90/32/16/240_F_390321632_gbpPQS44ZlUOJ6DgWyDxzUAKEfmC5xec.jpg",
            "https://t3.ftcdn.net/jpg/03/90/32/16/240_F_390321632_gbpPQS44ZlUOJ6DgWyDxzUAKEfmC5xec.jpg",
        ]
    }

    const lodging= {
        id:1, category: "Private room", type: "Guest house", address: "14 Rue Samir, Rtiba, Tunis",
        startDate: "27/08/2022 22:00", endDate: "28/08/2022 22:00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        criteria: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        gallery:[
            "https://t3.ftcdn.net/jpg/01/26/79/46/240_F_126794631_74xvlIMAeOr1PlbYWp8IlZ1vsSGMYiLW.jpg",
            "https://t3.ftcdn.net/jpg/01/26/79/46/240_F_126794631_74xvlIMAeOr1PlbYWp8IlZ1vsSGMYiLW.jpg",
        ]
    }


    //States
    const [experienceGallery, setExperienceGallery]= useState(experience.gallery)
    const [activityGallery, setActivityGallery]= useState(activity.gallery)
    const [dishGallery, setDishGallery]= useState(dish.gallery)
    const [transportGallery, setTransportGallery]= useState(transport.gallery)
    const [lodgingGallery, setLodgingGallery]= useState(lodging.gallery)
    const [timeIntervalModal, setTimeIntervalModal]= useState(false)
    const [timeIntervals, setIntervals]= useState(experience.timeInterval)


    //Handlers
    const handleTimeIntervalModalOpen= ()=> setTimeIntervalModal(true)
    const handleTimeIntervalModalClose= ()=> setTimeIntervalModal(false)
    const handleTimeIntervalsChange= (data)=>  setIntervals(data)

    //Galleries handlers
    const handleExperienceGalleryRemove = (index)=> {
        const stateCopy= experienceGallery
        stateCopy.splice(index, 1)
        setExperienceGallery([...stateCopy])
    }
    const handleExperienceGalleryAdd = (newImage)=> setExperienceGallery([...experienceGallery, newImage])

    const handleActivityGalleryRemove = (index)=> {
        const stateCopy= activityGallery
        stateCopy.splice(index, 1)
        setActivityGallery([...stateCopy])
    }
    const handleActivityGalleryAdd = (newImage)=> setActivityGallery([...activityGallery, newImage])

    const handleDishGalleryRemove = (index)=> {
        const stateCopy= dishGallery
        stateCopy.splice(index, 1)
        setDishGallery([...stateCopy])
    }
    const handleDishGalleryAdd = (newImage)=> setDishGallery([...dishGallery, newImage])

    const handleTransportGalleryRemove = (index)=> {
        const stateCopy= transportGallery
        stateCopy.splice(index, 1)
        setTransportGallery([...stateCopy])
    }
    const handleTransportGalleryAdd = (newImage)=> setTransportGallery([...transportGallery, newImage])

    const handleLodgingGalleryRemove = (index)=> {
        const stateCopy= lodgingGallery
        stateCopy.splice(index, 1)
        lodgingGallery([...stateCopy])
    }
    const handleLodgingGalleryAdd = (newImage)=> setLodgingGallery([...lodgingGallery, newImage])



    //Upload the picture to server here
    const handleImageUploadExperience= (event)=> {
        let url= URL.createObjectURL(event.target.files[0])
        handleExperienceGalleryAdd(url)
    }
    const handleImageUploadActivity= (event)=> {
        let url= URL.createObjectURL(event.target.files[0])
        handleActivityGalleryAdd(url)
    }
    const handleImageUploadDish= (event)=> {
        let url= URL.createObjectURL(event.target.files[0])
        handleDishGalleryAdd(url)
    }
    const handleImageUploadTransport= (event)=> {
        let url= URL.createObjectURL(event.target.files[0])
        handleTransportGalleryAdd(url)
    }
    const handleImageUploadLodging= (event)=> {
        let url= URL.createObjectURL(event.target.files[0])
        handleLodgingGalleryAdd(url)
    }



    const experienceThemes= ["Nature", "Event", "Culture", "Other"]
    const subThemes= ["Hiking", "Kayaking", "Camping", "Other"]
    const seasons= ["Winter", "Spring", "Summer", "Fall"]
    const dateTypes= ["Specific date", "Open date", "Interval date"]
    const weekDays= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const lodgingCategories= [ 'Hotel', 'Private room', 'Guest house', 'Villa'];
    const lodgingTypes= [ 'Hotel', 'Private room', 'Guest house', 'Villa'];

    const { register, handleSubmit, control, watch, reset, formState: { errors } } = useForm();

    useEffect(()=>{
        reset({"dateType": experience.dateType})
    }, [] )


    //Convert date string into type date
    const formatStringToDate=(dateString)=> {
        return parse(dateString, "dd/MM/yyyy HH:mm", new Date())
    }
    //Convert time string into type date
    const formatStringToTime=(timeString)=> {
        return parse(timeString, 'HH:mm', new Date)
    }

    //Input: Sat Aug 20 2022 10:00:00 GMT+0100 (GMT+01:00) => Output: 20/08/2022 10:00
    const dateFormat= (date)=>{
        return format(date, "d/MM/yyyy HH:mm")
    }

    //Input: Mon Aug 15 2022 08:00:00 GMT+0100 (GMT+01:00) => Output: 15:00
    const timeFormat= (time)=>{
        return format(time, "HH:mm")
    }

    const onSubmit= data=> {

        //Experience
        let experience= {
            name: data.name,
            theme: data.theme,
            subTheme: data.subTheme,
            location: data.experienceLocation,
            price: data.price,
            spots: data.spots,
            mapLink: data.mapLink,
            season: data.season,
            description: data.experienceDescription,
            minAge: data.minAge,
            isPetsAllowed: data.isPetsAllowed?data.isPetsAllowed:false,
            criteria: data.experienceCriteria,
            dateType: data.dateType,
            gallery: experienceGallery
        }
        //Experience date type
        switch (data.dateType){
            case "Interval date": {
                experience= {...experience, timeIntervals: timeIntervals, daysOff: data.daysOff?data.daysOff:''}
                break;
            }
            case 'Specific date':{
                experience= {...experience,
                    dateStart: dateFormat(data.experienceDateStart),
                    dateEnd: dateFormat(data.experienceDateEnd)
                }
                break;
            }
            default:{
                experience= {...experience,
                    durationDays: data.durationDays,
                    durationHours: data.durationHours
                }
                break;
            }
        }

        console.log(experience)


        //Activity
        let activity={
            activity: data.activity,
            activityDuration: data.activityDuration,
            description: data.activityDescription,
            gallery: activityGallery
        }
        console.log(activity)

        //Dish
        let dish={
            dish: data.dish,
            description: data.dishDescription,
            gallery: dishGallery
        }
        console.log(dish)

        //Transport
        let transport={
            transport: data.transport,
            seats: data.transportSeats,
            locationStart: data.transportLocationStart,
            locationEnd: data.transportLocationEnd,
            rules: data.transportRules,
            departure: timeFormat(data.transportDepartureTime),
            arrival: timeFormat(data.transportArrivalTime),
            gallery: transportGallery
        }
        console.log(transport)

        //Lodging
        let lodging={
            category: data.lodgingCategory,
            type: data.lodgingType,
            address: data.lodgingAddress,
            dateStart: dateFormat(data.lodgingDateStart),
            dateEnd: dateFormat(data.lodgingDateEnd),
            description: data.lodgingDescription,
            instructions: data.lodgingInstructions,
            criteria: data.lodgingCriteria,
            gallery: lodgingGallery
        }
        console.log(lodging)

    }

    return(

        <React.Fragment>
            <Layout>


            <Box>
                <EditExperienceTimeInterval onClose={handleTimeIntervalModalClose} open={timeIntervalModal}
                                            timeIntervals={timeIntervals} handleDataChange={handleTimeIntervalsChange}
                />
                <Box className="editImageHero relative">
                    <Box className="editImageHeroText">
                        Edit experience
                    </Box>
                </Box>

                <Box className="ml-20 mt-[5%] p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Experience */}
                        <Box>
                        {/* Experience name*/}
                        <Box className="flex space-x-6" alignItems="center">
                            <input className="experienceNameInput pinkGradientText inputBox" defaultValue={experience.name}
                                   {...register("name", {required: true}) }/>
                            {errors.name && <ErrorText>This is required</ErrorText>}
                        </Box>

                        {/* Divider */}
                        <Box>
                            <hr className="dividerName" />
                        </Box>

                        <Grid className="inputsContainer" container columnSpacing={20} rowSpacing={5}>


                            {/* Theme */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Experience theme:</label>
                                    <Select defaultValue={experience.theme}
                                            className="basicInput" sx={selectInput}
                                            {...register("theme", {required: true}) }>
                                        {
                                            experienceThemes.map(theme=>(
                                                <MenuItem key={theme} value={theme}>
                                                    {theme}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                    {errors.theme && <ErrorText>This is required</ErrorText>}
                                </Stack>
                            </Grid>

                            {/* Sub-theme */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Sub-theme:</label>
                                   <Select defaultValue={experience.subTheme}
                                           className="basicInput" sx={selectInput}
                                           {...register("subTheme", {required: true}) }>
                                    <MenuItem value="none">Sub theme</MenuItem>
                                    {
                                        subThemes.map(subTheme=>(
                                            <MenuItem key={subTheme} value={subTheme}>
                                                {subTheme}
                                            </MenuItem>
                                        ))
                                    }
                                       {errors.subTheme && <ErrorText>This is required</ErrorText>}
                                </Select>
                            </Stack>
                            </Grid>

                            {/* Location */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Experience location:</label>
                                    <input defaultValue={experience.location} className="basicInput inputBox inputNotSelect"
                                           {...register("experienceLocation", {required: true}) }/>
                                    {errors.experienceLocation && <ErrorText>This is required</ErrorText>}
                            </Stack>
                            </Grid>

                            {/* Price */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Price per person:</label>
                                    <input type="number" defaultValue={experience.price}
                                           {...register("price", {required: true}) }
                                           className="basicInput inputBox inputNotSelect"/>
                                    {errors.price && <ErrorText>This is required</ErrorText>}
                                </Stack>
                            </Grid>

                            {/* Spots */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Spots:</label>
                                    <input type="number" defaultValue={experience.spots}
                                            {...register("spots", {required: true}) }
                                           className="basicInput inputBox inputNotSelect"/>
                                    {errors.spots && <ErrorText>This is required</ErrorText>}
                                </Stack>
                            </Grid>

                            {/* Map link */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Map link:</label>
                                    <input defaultValue={experience.mapLink}
                                           {...register("mapLink", {required: false}) }
                                           className="basicInput inputBox inputNotSelect"/>
                                </Stack>
                            </Grid>

                            {/* Season */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Season:</label>
                                    <Select defaultValue={experience.season}
                                            className="basicInput" sx={selectInput}
                                            {...register("season", {required: true}) }
                                    >
                                        {
                                            seasons.map(season=>(
                                                <MenuItem key={season} value={season}>
                                                    {season}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                    {errors.season && <ErrorText>This is required</ErrorText>}
                                </Stack>
                            </Grid>

                            {/* Date type */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Date type:</label>
                                    <Select defaultValue={experience.dateType}
                                            className="basicInput"
                                            sx={selectInput}
                                            {...register("dateType", {required: true}) }
                                    >
                                        <MenuItem value="none">Date type</MenuItem>
                                        {
                                            dateTypes.map(type=>(
                                                <MenuItem key={type} value={type}>
                                                    {type}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                    {errors.dateType && <ErrorText>This is required</ErrorText>}
                                </Stack>
                            </Grid>

                            {/* Date types */}
                            {
                                watch("dateType")==='Open date'?
                                    //Open date
                                <Grid item container columnSpacing={5}>
                                    <Grid item>
                                        <Stack className="space-y-1">
                                            <label className="inputLabel">Duration (Days)</label>
                                            <div className="largeInput inputBox inputNotSelect text-center" style={{ display: "inline", padding: "2px"}}>
                                                <input style={{outline: "0" ,border: "0"}} defaultValue={experience.durationDays}
                                                       {...register("durationDays", {required: true}) }
                                                       type="number"/>
                                                <span className="">Days</span>
                                            </div>
                                            {errors.durationDays && <ErrorText>This is required</ErrorText>}
                                        </Stack>
                                    </Grid>
                                    <Grid item>
                                        <Stack className="space-y-1">
                                            <label className="inputLabel">Duration (Hours)</label>
                                            <div className="largeInput inputBox inputNotSelect text-center" style={{ display: "inline", padding: "2px"}}>
                                                <input style={{outline: "0" ,border: "0"}} defaultValue={experience.durationHours}
                                                       {...register("durationHours", {required: true}) }
                                                    max={24}
                                                       type="number"/>
                                                <span className="">Hours</span>
                                            </div>
                                            {errors.durationHours && <ErrorText>This is required</ErrorText>}
                                        </Stack>
                                    </Grid>
                                </Grid>
                                :watch("dateType")==='Specific date'?
                                    //Specific date
                                        <Grid item container columnSpacing={5}>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <Grid item>
                                                    <Stack className="space-y-2">
                                                        <label className="inputLabel">Experience start date:</label>
                                                        <Controller
                                                            control={control}
                                                            name="experienceDateStart"
                                                            rules={{required: true}}
                                                            defaultValue={experience.dateStart?
                                                                formatStringToDate(experience.dateStart):
                                                                new Date()
                                                                }

                                                            render={({field})=>(
                                                                <DateTimePicker
                                                                    PopperProps={{sx:popperSx}}
                                                                    onChange={(date)=>field.onChange(date)}
                                                                    inputFormat="dd/MM/yyyy HH:mm"
                                                                    renderInput={(params)=>
                                                                        <TextField sx={dateTextFieldSx}
                                                                                   style={{outline: "0" ,border: "0"}}
                                                                                   {...params}/>}
                                                                    value={field.value}
                                                                />
                                                            )}
                                                            />
                                                        {errors.experienceDateStart && <ErrorText>This is required</ErrorText>}
                                                    </Stack>
                                                </Grid>
                                                <Grid item>
                                                    <Stack className="space-y-2">
                                                        <label className="inputLabel">Experience end date:</label>
                                                        <Controller
                                                            control={control}
                                                            name="experienceDateEnd"
                                                            rules={{required: true}}
                                                            defaultValue={experience.dateEnd?
                                                                formatStringToDate(experience.dateEnd):
                                                                new Date()
                                                            }
                                                            render={({field})=>(
                                                                <DateTimePicker
                                                                    PopperProps={{sx:popperSx}}
                                                                    onChange={(date)=>field.onChange(date)}
                                                                    inputFormat="dd/MM/yyyy HH:mm"
                                                                    renderInput={(params)=>
                                                                        <TextField sx={dateTextFieldSx}
                                                                                   style={{outline: "0" ,border: "0"}}
                                                                                   {...params}/>}
                                                                    value={field.value}
                                                                />
                                                            )}
                                                        />
                                                        {errors.experienceDateEnd && <ErrorText>This is required</ErrorText>}
                                                    </Stack>
                                                </Grid>
                                            </LocalizationProvider>
                                        </Grid>
                                        :
                                    //Interval date
                                    <Grid item container columnSpacing={10}>
                                        <Grid item>
                                            <Stack className="space-y-2">
                                                <label className="inputLabel">Time intervals:</label>
                                                <div className="largeInput inputBox inputNotSelect text-center cursor-pointer"
                                                     onClick={handleTimeIntervalModalOpen}
                                                     style={{ display: "inline", padding: "2px"}}>
                                                    <input style={{outline: "0" ,border: "0"}}
                                                           disabled
                                                           value={timeIntervals}
                                                           />
                                                </div>
                                            </Stack>
                                        </Grid>
                                        <Grid item>
                                            <Stack className="space-y-2">
                                                <label className="inputLabel">Days off:</label>
                                                <Select
                                                    multiple
                                                    defaultValue={experience.daysOff}
                                                    className="largeInput" sx={selectInput}
                                                    {...register("dayOff") }
                                                >
                                                    {
                                                        weekDays.map(day=>
                                                            <MenuItem key={day} value={day}>
                                                                {day}
                                                            </MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                            }

                            {/* Description */}
                            <Grid item width="100%">
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Experience description:</label>
                                    <textarea defaultValue={experience.description} type="text"
                                              {...register("experienceDescription", {required: true}) }
                                           className="h-24 inputBox inputNotSelect"/>
                                    {errors.experienceDescription && <ErrorText>This is required</ErrorText>}
                                </Stack>
                            </Grid>

                            {/* Age */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Minimum age:</label>
                                    <input defaultValue={experience.minAge} type="number"
                                           {...register("minAge", {required: true}) }
                                           className="basicInput inputBox inputNotSelect"/>
                                    {errors.minAge && <ErrorText>This is required</ErrorText>}
                                </Stack>
                            </Grid>

                            {/* Pets */}
                            <Grid item>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Pets:</label>
                                    <RadioGroup row defaultValue={experience.isPetsAllowed}
                                                {...register("isPetsAllowed", {required: false}) }
                                    >
                                        <FormControlLabel value={true} control={<Radio sx={radioSx} />} label="Yes" />
                                        <FormControlLabel value={false} control={<Radio sx={radioSx} />} label="No" />
                                    </RadioGroup>
                                </Stack>
                            </Grid>

                            {/* Criteria */}
                            <Grid item xs={true}>
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Other criteria:</label>
                                    <textarea defaultValue={experience.criteria} type="text"
                                              {...register("experienceCriteria", {required: false}) }
                                              className="h-24 w-full inputBox inputNotSelect"/>
                                </Stack>
                            </Grid>

                            {/* Images */}
                            <Grid item width="100%">
                                <Stack className="space-y-2">
                                    <label className="inputLabel">Photos:</label>
                                    <Grid container columns={3} columnSpacing={3}>
                                        {
                                            experienceGallery.map((imageSrc, i)=>(
                                                <Grid item key={i} className="relative">
                                                    <img src={imageSrc} className="galleryImage" alt={"Photo "+i}/>
                                                    <img onClick={()=>handleExperienceGalleryRemove(i)} src={closeIcon} alt="Delete image" className="deletePhoto"/>
                                                </Grid>
                                            ))
                                        }
                                        {
                                            experienceGallery.length<3?
                                                <Grid item>
                                                    <Input id="uploadImageExperience" style={{display: 'none'}}
                                                           type="file" onChange={handleImageUploadExperience}/>
                                                    <label htmlFor="uploadImageExperience">
                                                        <Box className="addImageToGallery">
                                                            <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                                                            <Box className="pinkGradientText addImageToGalleryText">
                                                                Add a photo
                                                            </Box>
                                                        </Box>
                                                    </label>
                                                </Grid>:
                                            null
                                        }
                                    </Grid>
                                </Stack>
                            </Grid>


                        </Grid>


                    </Box>

                        {/* Divider */}
                        <Box>
                            <hr className="dividerLong" />
                        </Box>

                        {/* Activity */}
                        <Box>

                            <Grid className="inputsContainer" container columnSpacing={20} rowSpacing={5}>

                                <Grid item>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Activity:</label>
                                        <input defaultValue={activity.activity} className="basicInput inputBox inputNotSelect"
                                               {...register("activity", {required: true}) }/>
                                        {errors.activity && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                <Grid item>
                                    <Stack className="space-y-1">
                                        <label className="inputLabel">Duration</label>
                                        <div className="largeInput inputBox inputNotSelect text-center" style={{ display: "inline", padding: "2px"}}>
                                            <input style={{outline: "0" ,border: "0"}} defaultValue={activity.duration}
                                                   {...register("activityDuration", {required: true}) } max={24}
                                                   type="number"/>
                                            <span className="">Hours</span>
                                        </div>
                                        {errors.activityDuration && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Description */}
                                <Grid item width="100%">
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Experience description:</label>
                                        <textarea defaultValue={activity.description} type="text"
                                                  {...register("activityDescription", {required: true}) }
                                                  className="h-24 inputBox inputNotSelect"/>
                                        {errors.activityDescription && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Images */}
                                <Grid item width="100%">
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Photos:</label>
                                        <Grid container columns={3} columnSpacing={3}>
                                            {
                                                activityGallery.map((imageSrc, i)=>(
                                                    <Grid item key={i} className="relative">
                                                        <img src={imageSrc} className="galleryImage" alt={"Photo "+i}/>
                                                        <img onClick={()=>handleActivityGalleryRemove(i)} src={closeIcon} alt="Delete image" className="deletePhoto"/>
                                                    </Grid>
                                                ))
                                            }
                                            {
                                                activityGallery.length<3?
                                                    <Grid item>
                                                        <Input id="uploadImageActivity" style={{display: 'none'}}
                                                               type="file" onChange={handleImageUploadActivity}/>
                                                        <label htmlFor="uploadImageActivity">
                                                            <Box className="addImageToGallery">
                                                                <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                                                                <Box className="pinkGradientText addImageToGalleryText">
                                                                    Add a photo
                                                                </Box>
                                                            </Box>
                                                        </label>
                                                    </Grid>:
                                                    null
                                            }
                                        </Grid>
                                    </Stack>
                                </Grid>

                            </Grid>


                        </Box>

                        {/* Divider */}
                        <Box>
                            <hr className="dividerLong" />
                        </Box>

                        {/* Food */}
                        <Box>

                            <Grid className="inputsContainer" container columnSpacing={20} rowSpacing={5}>

                                <Grid item>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Dish:</label>
                                        <input defaultValue={dish.dish} className="basicInput inputBox inputNotSelect"
                                               {...register("dish", {required: true}) }/>
                                        {errors.dish && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Description */}
                                <Grid item xs={true}>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Dish description:</label>
                                        <textarea defaultValue={dish.description} type="text"
                                                  {...register("dishDescription", {required: true}) }
                                                  className="h-24 inputBox inputNotSelect"/>
                                        {errors.dishDescription && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Images */}
                                <Grid item width="100%">
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Photos:</label>
                                        <Grid container columns={3} columnSpacing={3}>
                                            {
                                                dishGallery.map((imageSrc, i)=>(
                                                    <Grid item key={i} className="relative">
                                                        <img src={imageSrc} className="galleryImage" alt={"Photo "+i}/>
                                                        <img onClick={()=>handleDishGalleryRemove(i)} src={closeIcon} alt="Delete image" className="deletePhoto"/>
                                                    </Grid>
                                                ))
                                            }
                                            {
                                                dishGallery.length<3?
                                                    <Grid item>
                                                        <Input id="uploadImageDish" style={{display: 'none'}}
                                                               type="file" onChange={handleImageUploadDish}/>
                                                        <label htmlFor="uploadImageDish">
                                                            <Box className="addImageToGallery">
                                                                <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                                                                <Box className="pinkGradientText addImageToGalleryText">
                                                                    Add a photo
                                                                </Box>
                                                            </Box>
                                                        </label>
                                                    </Grid>:
                                                    null
                                            }
                                        </Grid>
                                    </Stack>
                                </Grid>

                            </Grid>


                        </Box>

                        {/* Divider */}
                        <Box>
                            <hr className="dividerLong" />
                        </Box>

                        {/* Transport */}
                        <Box>

                            <Grid className="inputsContainer" container columnSpacing={20} rowSpacing={5}>

                                {/* Transport */}
                                <Grid item>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Transport:</label>
                                        <input defaultValue={transport.transport} className="basicInput inputBox inputNotSelect"
                                               {...register("transport", {required: true}) }/>
                                        {errors.transport && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Seats */}
                                <Grid item>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Seats:</label>
                                        <input defaultValue={transport.seats} className="basicInput inputBox inputNotSelect"
                                               type="number"
                                               {...register("transportSeats", {required: true}) }/>
                                        {errors.transportSeats && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* From */}
                                <Grid item>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">From:</label>
                                        <input defaultValue={transport.locationStart} className="basicInput inputBox inputNotSelect"
                                               {...register("transportLocationStart", {required: true}) }/>
                                        {errors.transportLocationStart && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* To */}
                                <Grid item>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">To:</label>
                                        <input defaultValue={transport.locationEnd} className="basicInput inputBox inputNotSelect"
                                               {...register("transportLocationEnd", {required: true}) }/>
                                        {errors.transportLocationEnd && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Rules */}
                                <Grid item width="40%">
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Transport rules:</label>
                                        <textarea defaultValue={transport.rules} type="text"
                                                  {...register("transportRules", {required: true}) }
                                                  className="h-24 inputBox inputNotSelect"/>
                                        {errors.transportRules && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Departure */}
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Grid item>
                                    <Stack>
                                        <label>Departure:</label>
                                        <Controller
                                            control={control}
                                            name="transportDepartureTime"
                                            rules={{required: true}}
                                            defaultValue={transport.departureTime?
                                                formatStringToTime(transport.departureTime)
                                                :new Date().getTime()
                                            }
                                            render={({field})=>(
                                                <TimePicker
                                                    onChange={(date)=>field.onChange(date)}
                                                    inputFormat="HH:mm"
                                                    renderInput={(params)=>
                                                        <TextField sx={dateTextFieldSx}
                                                                   style={{outline: "0" ,border: "0"}}
                                                                   {...params}/>}
                                                    value={field.value}
                                                />
                                            )}
                                        />
                                    </Stack>
                                </Grid>

                                {/* Arrival */}
                                <Grid item>
                                    <Stack>
                                        <label>Arrival:</label>
                                        <Controller
                                            control={control}
                                            name="transportArrivalTime"
                                            rules={{required: true}}
                                            defaultValue={transport.arrivalTime?
                                                formatStringToTime(transport.arrivalTime)
                                                :new Date().getTime()
                                            }
                                            render={({field})=>(
                                                <TimePicker
                                                    onChange={(date)=>field.onChange(date)}
                                                    inputFormat="HH:mm"
                                                    renderInput={(params)=>
                                                        <TextField sx={dateTextFieldSx}
                                                                   style={{outline: "0" ,border: "0"}}
                                                                   {...params}/>}
                                                    value={field.value}
                                                />
                                            )}
                                        />
                                    </Stack>
                                </Grid>
                                </LocalizationProvider>

                                {/* Images */}
                                <Grid item width="100%">
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Photos:</label>
                                        <Grid container columns={3} columnSpacing={3}>
                                            {
                                                transportGallery.map((imageSrc, i)=>(
                                                    <Grid item key={i} className="relative">
                                                        <img src={imageSrc} className="galleryImage" alt={"Photo "+i}/>
                                                        <img onClick={()=>handleTransportGalleryRemove(i)} src={closeIcon} alt="Delete image" className="deletePhoto"/>
                                                    </Grid>
                                                ))
                                            }
                                            {
                                                transportGallery.length<3?
                                                    <Grid item>
                                                        <Input id="uploadImageTransport" style={{display: 'none'}}
                                                               type="file" onChange={handleImageUploadTransport}/>
                                                        <label htmlFor="uploadImageTransport">
                                                            <Box className="addImageToGallery">
                                                                <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                                                                <Box className="pinkGradientText addImageToGalleryText">
                                                                    Add a photo
                                                                </Box>
                                                            </Box>
                                                        </label>
                                                    </Grid>:
                                                    null
                                            }
                                        </Grid>
                                    </Stack>
                                </Grid>

                            </Grid>


                        </Box>

                        {/* Divider */}
                        <Box>
                            <hr className="dividerLong" />
                        </Box>

                        {/* Lodging */}
                        <Box>

                            <Grid className="inputsContainer" container columnSpacing={20} rowSpacing={5}>

                                {/* Lodging category */}
                                <Grid item>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Lodging category:</label>
                                        <Select defaultValue={lodging.category}
                                                className="basicInput" sx={selectInput}
                                                {...register("lodgingCategory", {required: true}) }>
                                            {
                                                lodgingCategories.map(category=>(
                                                    <MenuItem key={category} value={category}>
                                                        {category}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>
                                        {errors.lodgingCategory && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Lodging type */}
                                <Grid item>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Lodging type:</label>
                                        <Select defaultValue={lodging.type}
                                                className="basicInput" sx={selectInput}
                                                {...register("lodgingType", {required: true}) }>
                                            {
                                                lodgingTypes.map(type=>(
                                                    <MenuItem key={type} value={type}>
                                                        {type}
                                                    </MenuItem>
                                                ))
                                            }
                                        </Select>
                                        {errors.lodgingType && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Address */}
                                <Grid item xs={true}>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Address:</label>
                                        <input defaultValue={lodging.address} type="text"
                                                  {...register("lodgingAddress", {required: true}) }
                                                  className="h-[40px] inputBox inputNotSelect"/>
                                        {errors.lodgingAddress && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                <Grid item container columnSpacing={5}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Grid item>
                                            <Stack className="space-y-2">
                                                <label className="inputLabel">Begins:</label>
                                                <Controller
                                                    control={control}
                                                    name="lodgingDateStart"
                                                    rules={{required: true}}
                                                    defaultValue={lodging.startDate?
                                                        formatStringToDate(lodging.startDate):
                                                        new Date()
                                                    }

                                                    render={({field})=>(
                                                        <DateTimePicker
                                                            PopperProps={{sx:popperSx}}
                                                            onChange={(date)=>field.onChange(date)}
                                                            inputFormat="dd/MM/yyyy HH:mm"
                                                            renderInput={(params)=>
                                                                <TextField sx={dateTextFieldSx}
                                                                           style={{outline: "0" ,border: "0"}}
                                                                           {...params}/>}
                                                            value={field.value}
                                                        />
                                                    )}
                                                />
                                                {errors.lodgingDateStart && <ErrorText>This is required</ErrorText>}
                                            </Stack>
                                        </Grid>
                                        <Grid item>
                                            <Stack className="space-y-2">
                                                <label className="inputLabel">Ends:</label>
                                                <Controller
                                                    control={control}
                                                    name="lodgingDateEnd"
                                                    rules={{required: true}}
                                                    defaultValue={lodging.endDate?
                                                        formatStringToDate(lodging.endDate):
                                                        new Date()
                                                    }

                                                    render={({field})=>(
                                                        <DateTimePicker
                                                            PopperProps={{sx:popperSx}}
                                                            onChange={(date)=>field.onChange(date)}
                                                            inputFormat="dd/MM/yyyy HH:mm"
                                                            renderInput={(params)=>
                                                                <TextField sx={dateTextFieldSx}
                                                                           style={{outline: "0" ,border: "0"}}
                                                                           {...params}/>}
                                                            value={field.value}
                                                        />
                                                    )}
                                                />
                                                {errors.lodgingDateEnd && <ErrorText>This is required</ErrorText>}
                                            </Stack>
                                        </Grid>
                                    </LocalizationProvider>
                                </Grid>

                                {/* Lodging description */}
                                <Grid item width="50%">
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Lodging description:</label>
                                        <textarea defaultValue={lodging.description} type="text"
                                                  {...register("lodgingDescription", {required: true}) }
                                                  className="h-24 inputBox inputNotSelect"/>
                                        {errors.lodgingDescription && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Instructions */}
                                <Grid item xs={true}>
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Instructions:</label>
                                        <textarea defaultValue={lodging.instructions} type="text"
                                                  {...register("lodgingInstructions", {required: true}) }
                                                  className="h-24 inputBox inputNotSelect"/>
                                        {errors.lodgingInstructions && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>

                                {/* Lodging criteria */}
                                <Grid item width="50%">
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Criteria:</label>
                                        <textarea defaultValue={lodging.criteria} type="text"
                                                  {...register("lodgingCriteria", {required: true}) }
                                                  className="h-24 inputBox inputNotSelect"/>
                                        {errors.lodgingCriteria && <ErrorText>This is required</ErrorText>}
                                    </Stack>
                                </Grid>



                                {/* Images */}
                                <Grid item width="100%">
                                    <Stack className="space-y-2">
                                        <label className="inputLabel">Photos:</label>
                                        <Grid container columns={3} columnSpacing={3}>
                                            {
                                                lodgingGallery.map((imageSrc, i)=>(
                                                    <Grid item key={i} className="relative">
                                                        <img src={imageSrc} className="galleryImage" alt={"Photo "+i}/>
                                                        <img onClick={()=>handleLodgingGalleryRemove(i)} src={closeIcon} alt="Delete image" className="deletePhoto"/>
                                                    </Grid>
                                                ))
                                            }
                                            {
                                                lodgingGallery.length<3?
                                                    <Grid item>
                                                        <Input id="uploadImageLodging" style={{display: 'none'}}
                                                               type="file" onChange={handleImageUploadLodging}/>
                                                        <label htmlFor="uploadImageLodging">
                                                            <Box className="addImageToGallery">
                                                                <img src={plusIcon} alt="Plus icon" className="plusImage"/>
                                                                <Box className="pinkGradientText addImageToGalleryText">
                                                                    Add a photo
                                                                </Box>
                                                            </Box>
                                                        </label>
                                                    </Grid>:
                                                    null
                                            }
                                        </Grid>
                                    </Stack>
                                </Grid>

                            </Grid>


                        </Box>

                        <Box className="mt-12">
                            <Button className="pinkGradientBgWhiteText" sx={muiButtonSx} type="submit">Confirm</Button>
                        </Box>
                    </form>
                </Box>


            </Box>
            </Layout>
        </React.Fragment>
        )
    }

export default EditExperience;