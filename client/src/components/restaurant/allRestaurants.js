import React, { Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'



//
import Layout from '../shared/layout';
import Restaurant from './Restaurant';
import Loader from '../shared/Loader/loader'
import {menuItemSx, muiButtonSx, priceTextFieldSx, selectSx} from "../shared/ListsMuiStyles";
import './restaurant.scss'

//
import { getTraderRestaurants } from '../../actions/restaurantActions'

//Mui
import { Grid } from '@mui/material';
import Button from '@mui/material/Button'
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {
  InputAdornment,
  OutlinedInput,
  Select,
  Slider,
  Stack,
} from "@mui/material";
import {FilterAltOff, Search} from "@mui/icons-material";



const AllRestaurants = ({ match }) => {

  const dispatch = useDispatch();  
  const { loading, restaurants } = useSelector(state => state.restaurants)

  useEffect(() => {
    dispatch(getTraderRestaurants());
  }, [dispatch])

  const [foodData, setFood]= useState(restaurants)

  useEffect(() => {
    setFood(restaurants);
}, [restaurants]);

  //
  const typeArray=["Theme Restaurant", "Fast Food", "Resto-Bar", "Bistros", "Roadside Restaurants", "Breweries", "Gourmet Restaurants"]
    const specialityArray=["Kafteji", "Chicken", "Grill", "Fish", "Pizza", "Vegan", "Chawarma", "Ayari", "Leblebi"]
  
    const citiesArray=[
      "Ariana",
      "Béja",
      "Ben Arous",
      "Bizerte",
      "Gabès",
      "Gafsa",
      "Jendouba",
      "Kairouan",
      "Kasserine",
      "Kébili",
      "Le Kef",
      "Mahdia",
      "La Manouba",
      "Médenine",
      "Monastir",
      "Nabeul",
        "Sfax",
      "Sidi Bouzid",
      "Siliana",
      "Sousse",
      "Tataouine",
      "Tozeur",
      "Tunis",
      "Zaghouan",
    ]

    const minPrice = 0
    const maxPrice = 100

    const maxFood = 12 //Initial max
    const stepFood= 4 //How many items is going to be added


    //States


    const [foodDataMaxLength, setFoodMaxLength]= useState(maxFood)

    //const [dateFilter, setDateFilter]= useState(null)

    const [typeFilter, setTypeFilter]= useState('none')
    const [specialityFilter, setSpecialityFilter]= useState('none')
    
    const [cityFilter, setCityFilter]= useState('none')
    const [priceFilter, setPriceFilter]= useState([minPrice, maxPrice])




    //Handlers
    //const handleDateFilterChange= (date)=> setDateFilter(date)

    const handleTypeFilterChange= (event)=> setTypeFilter(event.target.value)
    const handleSpecialityFilterChange= (event)=> setSpecialityFilter(event.target.value)
    const handleCityFilterChange= (event)=> setCityFilter(event.target.value)

    const handlePriceFilterChange= (event)=> setPriceFilter(event.target.value)
    const handlePriceFilterClear= ()=> setPriceFilter([minPrice, maxPrice])




    const seeMore = ()=> setFoodMaxLength(foodDataMaxLength + stepFood)

    const clearFilters= ()=>{
        //setDateFilter(null)
        setTypeFilter('none')
        setSpecialityFilter('none')
        setCityFilter('none')
        setPriceFilter([minPrice, maxPrice])

        setFoodMaxLength(maxFood)
        setFood(restaurants)

    }

  



    function search()  {
        let allFood= restaurants;

        if(typeFilter!=='none')
            allFood= allFood.filter(food=> food.restaurantType===typeFilter)
        if(specialityFilter!=='none')
            allFood= allFood.filter(food=> food.restaurantSpecialty===specialityFilter)
        if(cityFilter!=='none')
            allFood= allFood.filter(food=> food.address===cityFilter)

        allFood= allFood.filter(food=> food.price>=priceFilter[0] && food.price<=priceFilter[1])

        setFoodMaxLength(maxFood)
        setFood(allFood)
    }
  //




  

  



    return(
        <Layout>
        {loading ? <Loader /> : (
            <Fragment>
 <Box>

{/* Filters */}
<Grid container justifyContent="center" className="mt-28">
    <Stack spacing={3}>


        <Box className="space-x-6 flex">

            {/* Type */}
            <Select
                sx={selectSx}
                className="selectFilter"
                value={typeFilter}
                onChange={handleTypeFilterChange}
            >
                <MenuItem sx={menuItemSx} value="none">
                    Type
                </MenuItem>
                {typeArray.map((type,index)=>
                    <MenuItem sx={menuItemSx} key={index} value={type}>
                        {type}
                    </MenuItem>
                )}
            </Select>

            {/* Speciality */}
            <Select
                sx={selectSx}
                className="selectFilter"
                value={specialityFilter}
                onChange={handleSpecialityFilterChange}
            >
                <MenuItem sx={menuItemSx} value="none">
                    Speciality
                </MenuItem>
                    {specialityArray.map((cat,index)=>
                    <MenuItem sx={menuItemSx} key={index} value={cat}>
                        {cat}
                    </MenuItem>
                )}
            </Select>

    

            {/* Price */}
            <Select
                sx={selectSx}
                className="selectFilter"
                value="none"
            >
                <MenuItem disabled  value="none">
                    Price
                </MenuItem>
                <Box className="priceBox space-y-2">
                    <Box>
                        <Slider
                            onChange={handlePriceFilterChange}
                            value={priceFilter}
                            min={minPrice}
                            max={maxPrice}
                            step={10}
                            valueLabelDisplay="on"
                        />
                    </Box>
                    <Box className="flex">
                        <OutlinedInput
                            type="number"
                            id="minPrice"
                            value={priceFilter[0]}
                            sx={priceTextFieldSx}
                            endAdornment={<InputAdornment position="start">DT</InputAdornment>}
                            label="Min price"
                            disabled
                        />

                        <OutlinedInput
                            type="number"
                            id="maxPrice"
                            value={priceFilter[1]}
                            sx={priceTextFieldSx}
                            endAdornment={<InputAdornment position="start">DT</InputAdornment>}
                            label="Max price"
                            disabled
                        />
                    </Box>
                    <Box>
                        <Button className="pinkGradientText"
                                sx={{
                                    width: '100px',
                                    height: '35px',
                                    boxShadow: '1.57533px 0.787666px 3.93833px 1.57533px rgba(0, 0, 0, 0.4)',
                                    borderRadius: '4px',

                                    border: "3px solid transparent",
                                    borderImage: "linear-gradient(90deg, #F02F32 0%, #E22357 59.52%, #DA1D6C 100%) 1 round",
                                    WebkitMask:'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',

                                    fontWeight: '700',

                                }}
                                onClick={handlePriceFilterClear}
                        >Clear</Button>
                    </Box>
                </Box>
            </Select>


            {/* City */}
            <Select
                sx={selectSx}
                className="selectFilter"
                value={cityFilter}
                onChange={handleCityFilterChange}
            >
                <MenuItem sx={menuItemSx} value="none" className="menuItemStyle">
                    City
                </MenuItem>
                {citiesArray.map((city,index)=>
                    <MenuItem sx={menuItemSx} key={index} value={city}>
                        {city}
                    </MenuItem>
                )}
            </Select>




        </Box>

        <Grid container justifyContent="center" className="space-x-6 flex">
            {/*
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    inputFormat="dd/MM/yyyy"
                    onChange={handleDateFilterChange}
                    value={dateFilter}
                    PopperProps={{sx:popperSx}}
                    label="When?"
                    renderInput={(params)=>
                        <TextField className="relative selectFilter" sx={selectSx} {...params}/>} />
            </LocalizationProvider>
            */}

            <Button className="pinkGradientText" sx={{...muiButtonSx}}
                    onClick={clearFilters}
            >
                <FilterAltOff sx={{color: "red"}} fontSize="large"/>
            </Button>

            <Button className="pinkGradientBgWhiteText" sx={{...muiButtonSx}} onClick={search}>
                <Search sx={{color: "white"}} fontSize="large"/>
            </Button>
        </Grid>

    </Stack>

</Grid>

                <Box className="mt-12">
                <Grid container justifyContent="center">
                    {
                        foodData.slice(0, foodDataMaxLength).map(restaurant=>
                            <Box key={restaurant._id}>
                               
                                    <Restaurant key={restaurant._id} restaurant={restaurant}
                              
                                    />
                        
                            </Box>
                        )
                    }
                </Grid>
                {
                    foodData.length>foodDataMaxLength?
                        <Grid container justifyContent="center">
                            <Button className="pinkGradientBgWhiteText" onClick={seeMore}
                                    sx={{...muiButtonSx, width: '150px'}}>See more</Button>
                        </Grid>
                        :null
                }
        <br/>
        <br/>

            </Box>
              
              </Box>  
            </Fragment>
        )}

    </Layout>
)
}

export default AllRestaurants;