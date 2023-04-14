import React, { Fragment, useEffect, useState} from 'react'

import Box from "@mui/material/Box";
import {format} from "date-fns";

import Layout from '../shared/layout';
import Lodging from './Logdging';
import Loader from '../shared/Loader/loader'
import {menuItemSx, muiButtonSx, popperSx, priceTextFieldSx, selectSx} from "../shared/ListsMuiStyles";


import { useDispatch, useSelector } from 'react-redux'


import { getTraderLodgings } from '../../actions/lodgingActions'


//MUI IMPORTS
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';
import {
  InputAdornment,
  OutlinedInput,
  Select,
  Slider,
  Stack,
  TextField
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import '../shared/listsStyle.scss';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {FilterAltOff, LocationCity, LocationOn, Search} from "@mui/icons-material";



import './lodging.scss'

const AllLodgings = ({ match }) => {


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTraderLodgings());
  }, [dispatch])
 

  const { loading, lodgings } = useSelector(state => state.lodgings)
  const [lodgingsData, setLodgings]= useState(lodgings)

    
 
  useEffect(() => {
    setLodgings(lodgings);
}, [ lodgings]);



  //
  const categoryArray=["Whole house", "Private room", "Shared room"]
  const typeArray=["House", "Apartment", "Hotel", "House hotel", "Residence", "Motel"]
  //const seasonsArray=["Summer", "Fall", "Winter", "Spring"]
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
  const maxPrice = 500

  const stepLodgings= 4 //How many items is going to be added
  const seeMore = ()=> setLodgingsMaxLength(lodgingsDataMaxLength + stepLodgings)
  const maxLodgings = 12 //Initial max
  const [lodgingsDataMaxLength, setLodgingsMaxLength]= useState(maxLodgings)

   //States


   const [dateFilter, setDateFilter]= useState(null)

   const [categoryFilter, setCategoryFilter]= useState('none')
   const [typeFilter, setTypeFilter]= useState('none')
   const [seasonFilter, setSeasonFilter]= useState('none')
   const [cityFilter, setCityFilter]= useState('none')
   const [priceFilter, setPriceFilter]= useState([minPrice, maxPrice])


      //Handlers
      const handleDateFilterChange= (date)=> setDateFilter(date)

      const handleCategoryFilterChange= (event)=> setCategoryFilter(event.target.value)
      const handleTypeFilterChange= (event)=> setTypeFilter(event.target.value)
      const handleSeasonFilterChange= (event)=> setSeasonFilter(event.target.value)
      const handleCityFilterChange= (event)=> setCityFilter(event.target.value)
  
      const handlePriceFilterChange= (event)=> setPriceFilter(event.target.value)
      const handlePriceFilterClear= ()=> setPriceFilter([minPrice, maxPrice])

      const clearFilters= ()=>{
        setDateFilter(null)
        setCategoryFilter('none')
        setTypeFilter('none')
        setSeasonFilter('none')
        setCityFilter('none')
        setPriceFilter([minPrice, maxPrice])

        setLodgings(lodgings)
        setLodgingsMaxLength(maxLodgings)
    }

    const dateFormat= (date)=>{
        return format(date, "d/MM/yyyy")
    }



    function search()  {
        let allLodgings = lodgings;

        if(dateFilter!=null)
            allLodgings= allLodgings.filter(lodging=> lodging.startDate===dateFormat(dateFilter))

        if(categoryFilter!=='none')
            allLodgings= allLodgings.filter(lodging=> lodging.lodgingCategory===categoryFilter)
        if(typeFilter!=='none')
            allLodgings= allLodgings.filter(lodging=> lodging.lodgingType===typeFilter)

        if(seasonFilter!=='none')
            allLodgings= allLodgings.filter(lodging=> lodging.season===seasonFilter)
        if(cityFilter!=='none')
            allLodgings= allLodgings.filter(lodging=> lodging.address===cityFilter)

        allLodgings= allLodgings.filter(lodging=> lodging.pricepernight>=priceFilter[0] && lodging.pricepernight<=priceFilter[1])
 
        setLodgingsMaxLength(maxLodgings)
        setLodgings(allLodgings);
    }

  //







    return(
        <Layout>
        {loading ? <Loader /> : (
            <Fragment>
<>
<Box>

{/* Filters */}
<Grid container justifyContent="center" className="mt-28">
    <Stack spacing={3}>
        <Grid container justifyContent="center" className="space-x-6 flex">
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


            <Button className="pinkGradientText" sx={{...muiButtonSx}}
                    onClick={clearFilters}
            >
                <FilterAltOff sx={{color: "red"}} fontSize="large"/>
            </Button>

            <Button className="pinkGradientBgWhiteText" sx={{...muiButtonSx}} onClick={search}>
                <Search sx={{color: "white"}} fontSize="large"/>
            </Button>
        </Grid>

        <Box className="space-x-6 flex">
            {/* Category */}
            <Select
                sx={selectSx}
                className="selectFilter"
                value={categoryFilter}
                onChange={handleCategoryFilterChange}
            >
                <MenuItem sx={menuItemSx} value="none">
                    Category
                </MenuItem>
                {categoryArray.map((cat,index)=>
                    <MenuItem sx={menuItemSx} key={index} value={cat}>
                        {cat}
                    </MenuItem>
                )}
            </Select>

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

            {/* Season 
            <Select
                sx={selectSx}
                className="selectFilter"
                value={seasonFilter}
                onChange={handleSeasonFilterChange}
            >
                <MenuItem sx={menuItemSx} value="none">
                    Season
                </MenuItem>
                {seasonsArray.map((season,index)=>
                    <MenuItem sx={menuItemSx} key={index} value={season}>
                        {season}
                    </MenuItem>
                )}
            </Select>
*/}

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
    </Stack>

</Grid>

    


          <Box className="mt-12">
                <Grid container justifyContent="center">
                    {
                        lodgingsData.slice(0, lodgingsDataMaxLength).map(lodging=>
                            <Box key={lodging._id}>
                               
                                    <Lodging key={lodging._id} lodging={lodging}
                              
                                    />
                        
                            </Box>
                        )
                    }
                </Grid>
                {
                    lodgingsData.length>lodgingsDataMaxLength?
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
                           
        </>         
            </Fragment>
        )}

    </Layout>
)
}

export default AllLodgings;