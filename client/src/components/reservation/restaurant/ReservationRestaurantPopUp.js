import React, {useState} from "react";
import {
    Box, Button, FormControl, Grid,
    InputAdornment,
    InputLabel,
    Modal,
    OutlinedInput,
    Select,
    Slider,
    SxProps
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {makeStyles} from "@mui/styles";
import ReservationRestaurantPopUpItem from "./ReservationRestaurantPopUpItem";

// Styling
const style = {
    position: 'absolute',
    marginTop: '10px',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    border: '2px solid #fff',
    boxShadow: 24,
    width: '95%'
};
const selectSx: SxProps={
    '& fieldset': {
        borderRadius: '12.6757px',
        boxShadow: '3.61787px 3.61787px 8.44169px 2.41191px rgba(0, 0, 0, 0.25)',
    },
    '& svg':{
        color: "#E22357",
    }
    ,
    '& div':{
        fontWeight: '700'
    },
}
const textFieldSx: SxProps={
    '& fieldset':{
        width: '150px',
        overflow: 'hidden'
    }
}
const menuItemSx: SxProps={
    '&.MuiMenuItem-root':{
        fontWeight: '700',
    }
}
const useStyles= makeStyles({
    button:{
        position: "absolute",
        right: '0px'
    }
})


const ReservationRestaurantPopUp =({open, handleClose}) =>{

    const classes= useStyles();

    //This is preset data, when you get the restaurant data from the backend put it in const called backendData
    const backendData= [
        {id: '1', name: 'Go Sushi!', dish: 'All salmon', type: 'Resto-Bar', specialty: 'Sushi' , location: 'Sousse', price: 120, workTime: '12:00 23:00' , season: 'Fall Summer', image:'https://as2.ftcdn.net/v2/jpg/02/81/34/47/1000_F_281344776_BU8Z7Yr6TM3cdjrwu3zsa0OqE0YbXJTY.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '2', name: 'Pastarica', dish: 'Pasta',type: 'Restaurant', specialty: 'Traditional' ,location: 'Mahdia', price: 90, workTime: '12:00 23:00',season: 'Spring Summer', image:'https://t3.ftcdn.net/jpg/03/06/99/14/240_F_306991497_rmfzNAvIhvyWCmJk1amXMyyR8G42qA9X.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '3', name: 'El binna', dish: 'Burgers',type: 'Fast Food', specialty: 'Burgers' ,location: 'Hammamet', price: 100, workTime: '12:00 23:00', season: 'Summer', image:'https://t4.ftcdn.net/jpg/03/01/64/43/240_F_301644355_EAswkNvgdIUgpJQ6jFPYZCkELR0jFM8J.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '4', name: 'EL BATTATA', dish: 'Potatoes',type: 'Restaurant', specialty: 'Traditional' ,location: 'Djerba', price: 300, workTime: '12:00 23:00',season: 'Winter Summer', image:'https://t3.ftcdn.net/jpg/02/72/97/68/240_F_272976827_c0kdRw1cmEg4gNfYbgrVIMYx6G1PhaBA.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '5', name: 'Ching', dish: 'Rice',type: 'Restaurant', specialty: 'Traditional' ,location: 'Djerba', price: 120, workTime: '12:00 23:00',season: 'Fall Summer', image:'https://t4.ftcdn.net/jpg/02/80/41/07/240_F_280410764_4Lzr1cycrzk7NEpOMqMnzIirZwZ6VFYQ.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '6', name: 'Hola!', dish: 'Pasta',type: 'Restaurant', specialty: 'Traditional' ,location: 'Mahdia', price: 130, workTime: '12:00 23:00',season: 'Spring Summer', image:'https://t3.ftcdn.net/jpg/03/06/99/14/240_F_306991497_rmfzNAvIhvyWCmJk1amXMyyR8G42qA9X.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '7', name: 'Dar El7ouma', dish: 'All salmon',type: 'Restaurant', specialty: 'Traditional' ,location: 'Hammamet', price: 350, workTime: '12:00 23:00',season: 'Summer', image:'https://t4.ftcdn.net/jpg/04/94/76/01/240_F_494760101_uDYrDBavlxK8P7OLf0tKzTqqWH6QHkcm.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '8', name: 'Plan B', dish: 'Burgers',type: 'Fast Food', specialty: 'Burgers' ,location: 'Hammamet', price: 200, workTime: '12:00 23:00',season: 'Summer', image:'https://t4.ftcdn.net/jpg/03/01/64/43/240_F_301644355_EAswkNvgdIUgpJQ6jFPYZCkELR0jFM8J.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '9', name: 'Fishy', dish: 'Fishes',type: 'Resto-Bar', specialty: 'Grill' ,location: 'Sousse', price: 170, workTime: '12:00 23:00', season: 'Fall Summer', image:'https://t4.ftcdn.net/jpg/02/86/77/93/240_F_286779381_7dWk7rw26zFAHHCJLRtbi3IaqdLjkf3i.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: '10', name: 'Another one', dish: 'Stuff',type: 'Resto-Bar', specialty: 'Traditional' ,location: 'Sousse', price: 170, workTime: '12:00 23:00', season: 'Fall Summer', image:'https://as2.ftcdn.net/v2/jpg/02/81/34/47/1000_F_281344776_BU8Z7Yr6TM3cdjrwu3zsa0OqE0YbXJTY.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    ]


    //Select option for search
    const typeOptions= [ 'Restaurant', 'Fast Food', 'Resto-Bar'];
    const seasonOptions= [ 'Summer', 'Fall', 'Winter', 'Spring'];
    const locationOptions= [ 'Tunis', 'Sousse', 'Mahdia', 'Djerba'];
    const specialtyOptions= ['Burgers', 'Sushi', 'Traditional', 'Grill'];

    //Max price and min price
    const maxPrice=500, minPrice=0;
    //Search states
    const [type, setType]= useState('none')
    const [specialty, setSpecialty]= useState('none')
    const [season, setSeason]= useState('none')
    const [price, setPrice]= useState([minPrice, maxPrice])
    const [location, setLocation]= useState('none')
    // Handlers
    const handleChangeType = (event) => {
        let newType= event.target.value
        setType(newType)
        handleDataSearch(newType, specialty, season, price, location)
    }
    const handleChangeSpecialty = (event) => {
        let newSpecialty= event.target.value
        setSpecialty(newSpecialty)
        handleDataSearch(type, newSpecialty, season, price, location)
    }
    const handleChangeSeason =(event)=> {
        let newSeason = event.target.value
        setSeason(newSeason)
        handleDataSearch(type, specialty, newSeason, price, location)
    }
    const handlePriceChange =(event)=> {
        let newPrice= event.target.value
        setPrice(newPrice)
        handleDataSearch(type, specialty, season, newPrice, location)
    }
    const handleChangeLocation =(event)=> {
        let newLocation= event.target.value
        setLocation(newLocation)
        handleDataSearch(type, specialty, season, price, newLocation)
    }
    const handleChangeMinPrice= (newMinPrice)=> {
        setPrice([newMinPrice.target.value, price[1]])
        handleDataSearch(type, specialty, season, [newMinPrice.target.value, price[1]], location)
    }
    const handleChangeMaxPrice= (newMaxPrice)=> {
        setPrice([price[0], newMaxPrice.target.value])
        handleDataSearch(type, specialty, season, [price[0], newMaxPrice.target.value], location)
    }
    const handleRestPrice= ()=>setPrice([minPrice, maxPrice])


    // See more options
    const maxItems= 8;
    const maxItemsAdder= 8;
    const [itemsCount, setItemsCount]= useState(maxItems)
    const handleItemsCountAdd= ()=> {
        setItemsCount(itemsCount + maxItemsAdder)
        handleDataSearch(type, specialty, season, price, location)
    }

    // Init data
    const [data, setData]= useState(backendData.length>maxItems?backendData.slice(0,maxItems):backendData)

    //Search
    const handleDataSearch =(type, specialty, season, price, location)=>{
        let filteredData= backendData
        if(type!=='none')
            filteredData= filteredData.filter(d=> d.type.includes(type))
        if(specialty!=='none')
            filteredData= filteredData.filter(d=> d.specialty.includes(specialty))
        if(season!=='none')
            filteredData= filteredData.filter(d=> d.season.includes(season))
        if(location!=='none')
            filteredData= filteredData.filter(d=> d.location.includes(location))
        if(price[0]>minPrice || price[1]<maxPrice)
            filteredData= filteredData.filter(d=> d.price>=price[0] && d.price<=price[1])
        if(filteredData.length>itemsCount)
            filteredData= filteredData.slice(0, itemsCount)
        setData(filteredData)
    }

    return(
        <Modal open={open} onClose={handleClose} className="overflow-scroll">
            <Box style={style} className="bg-white p-10 text-center rounded-xl">
                <Grid container justifyContent="center" columnGap={3} className="mb-8">
                    {/* Type select */}
                    <Select
                            value={type}
                            className="w-[140px] font-bold"
                            sx={selectSx}
                            onChange={handleChangeType}
                    >
                        <MenuItem value="none" sx={menuItemSx} selected>Type</MenuItem>
                        {typeOptions.map((item)=>(
                            <MenuItem  sx={menuItemSx} key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>

                    {/* Specialty select */}
                    <Select
                        value={specialty}
                        className="w-[140px] font-bold"
                        sx={selectSx}
                        onChange={handleChangeSpecialty}
                    >
                        <MenuItem value="none" sx={menuItemSx} selected>Specialty</MenuItem>
                        {specialtyOptions.map((item)=>(
                            <MenuItem  sx={menuItemSx} key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>

                    {/* Season select */}
                    <Select defaultValue="none"
                            className="w-[140px]"
                            sx={selectSx}
                            onChange={handleChangeSeason}>
                        <MenuItem value="none" sx={menuItemSx} selected>Season</MenuItem>
                        {seasonOptions.map((item)=>(
                            <MenuItem  key={item} sx={menuItemSx} value={item}>{item}</MenuItem>
                        ))}
                    </Select>

                    <FormControl>
                        <InputLabel shrink={false}
                            sx={{
                            width: '100%',
                            fontWeight: '700',
                            color: 'black'
                        }}>{(price[0]>minPrice || price[1]<maxPrice)?price[0]+' - '+price[1]:'Price'}</InputLabel>
                        <Select
                            className="w-[140px]"
                            sx={selectSx}>
                            <MenuItem sx={{ height: '200px', width: '450px', padding: '30px'}}>
                                <Box className="relative" width='100%' paddingTop="20px">
                                    <Slider
                                        onChange={handlePriceChange}
                                        value={price}
                                        min={0}
                                        max={500}
                                        step={10}
                                        valueLabelDisplay="on"
                                    />

                                    <Box className="relative">
                                        <FormControl>
                                            <InputLabel htmlFor="minPrice">Min price</InputLabel>
                                            <OutlinedInput
                                                type="number"
                                                id="minPrice"
                                                value={price[0]}
                                                sx={textFieldSx}
                                                startAdornment={<InputAdornment position="start">DT</InputAdornment>}
                                                label="Min price"
                                                onChange={handleChangeMinPrice}
                                            />
                                        </FormControl>

                                        <FormControl>
                                            <InputLabel htmlFor="maxPrice">Max price</InputLabel>
                                            <OutlinedInput
                                                type="number"
                                                id="maxPrice"
                                                value={price[1]}
                                                sx={textFieldSx}
                                                startAdornment={<InputAdornment position="start">DT</InputAdornment>}
                                                label="Max price"
                                                onChange={handleChangeMaxPrice}
                                            />
                                        </FormControl>

                                    </Box>

                                    <Box className="relative w-full pt-3">
                                        <Button className="" onClick={handleRestPrice}>Clear</Button>
                                        <Button className={classes.button}>Save</Button>
                                    </Box>
                                </Box>
                            </MenuItem>
                        </Select>
                    </FormControl>

                    {/* Location select */}
                    <Select defaultValue='none'
                            className="w-[140px]"
                            sx={selectSx}
                            onChange={handleChangeLocation}>
                        <MenuItem value="none" sx={menuItemSx}  selected>Location</MenuItem>
                        {locationOptions.map((item)=>(
                            <MenuItem  key={item} value={item} sx={menuItemSx}>{item}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid container justifyContent="center">
                    {data.map((item, index)=>(
                        <ReservationRestaurantPopUpItem key={index} data={item} />
                    ))}
                </Grid>
                <Box className="">
                    <Button sx={{
                        textTransform: 'none',
                        color:'white',
                        background: 'linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%)',
                        width: '121px',
                        height: '40px',
                        fontWeight: '700',
                        borderRadius: '13px'
                    }}
                            onClick={handleItemsCountAdd}
                    >See more</Button>
                </Box>
            </Box>

        </Modal>
    )
}

export default ReservationRestaurantPopUp;

