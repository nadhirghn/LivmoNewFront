import React, { useState, useEffect } from 'react';



import { Paper, Container } from '@mui/material';

import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';


import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import './becomehost.scss'
import { Button } from '@mui/material';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { updateToHostProfile, loadUser, clearErrors } from '../../../../actions/userActions'
import { HOSTUPDATE_PROFILE_RESET } from '../../../../constants/userConstants'

import { useHistory } from 'react-router-dom';
import Layout from '../../../shared/layout';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const countries = [
  "Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
    "Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Palestine",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

const Test1View = () => {

	
  const theme = useTheme();



  const history = useHistory();

  const { user } = useSelector(state => state.auth);
const { error, isUpdated } = useSelector(state => state.user)

  //signup
  const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');


  const [phone, setPhone] = useState('');
    const [codepostale, setCodepostale] = useState('');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');

    const [cin, setCin] = useState('');
    const [cinPreview, setCinPreview] = useState('')

    const [patente, setPatente] = useState('');
    const [PatentePreview, setPatentePreview] = useState('')

	const [country, setCountry] = useState('');
	
  const alert = useAlert();
  const dispatch = useDispatch();


  useEffect(() => {

    if (user) {
        setFname(user.fname);
        setLname(user.lname);
        setEmail(user.email);
        setCountry(user.country);
        setAddress(user.address);
        setCodepostale(user.codepostale);
        setPhone(user.phone);

    }

    if (error) {
        alert.error(error);
        dispatch(clearErrors());
    }

    if (isUpdated) {
        alert.success('Host created successfully')
        dispatch(loadUser());

        history.push('/')

        dispatch({
            type: HOSTUPDATE_PROFILE_RESET
        })
    }

}, [dispatch, alert, error, history, isUpdated, user])



const HandleSubmit = (e) => { 
    

    const formData = new FormData();
    formData.set('fname', fname);
    formData.set('lname', lname);
    formData.set('email', email);
    formData.set('country', country);
    formData.set('phone', phone);
    formData.set('codepostale', codepostale);
    formData.set('address', address);
    formData.set('avatar', avatar);
    formData.set('cin', cin);


    dispatch(updateToHostProfile(formData));
  

};



  function getStyles(name, country) {
    return {
      fontWeight:
        country.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const onChange = e => {
    const reader = new FileReader();

    reader.onload = () => {
        if (reader.readyState === 2) {
            setAvatarPreview(reader.result)
            setAvatar(reader.result)
        }
    }

    reader.readAsDataURL(e.target.files[0])

}
const onChangee = e => {
    const reader = new FileReader();

    reader.onload = () => {
        if (reader.readyState === 2) {
            setCinPreview(reader.result)
            setCin(reader.result)
        }
    }
    reader.readAsDataURL(e.target.files[0])
}

const onChangeee = e => {
    const reader = new FileReader();

    reader.onload = () => {
        if (reader.readyState === 2) {
            setPatentePreview(reader.resulte)
            setPatente(reader.resulte)
        }
    }

    reader.readAsDataURL(e.target.files[0])

}

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCountry(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <React.Fragment>
        <Layout>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} style={{marginTop:"6rem"}}>

      <Typography variant="h6" gutterBottom>
    Compte :
      </Typography>
      <Box component="form"  onSubmit={HandleSubmit} noValidate  >



          <TextField
            required
            id="firstName"
            name="firstName"
            label="Prénom"
            fullWidth
			autoFocus
            variant="standard"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />


          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nom"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={lname}
            onChange={(e) => setLname(e.target.value)} 
          />



          <TextField
		  	required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />


        <FormControl sx={{ width: "100%", marginTop: "1rem"}}>
        <InputLabel id="demo-multiple-name-label">Pays</InputLabel>
        <Select				
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          input={<OutlinedInput label="Country" />}
          MenuProps={MenuProps}
		  
        >
          {countries.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, country, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>


		<TextField
			required
			name="phone"
			label="phone"
			id="phone"
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
			/>

		  <br />

          <TextField
            required
            id="cardName"
            label="Code Postale"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={codepostale}
            onChange={(e) => setCodepostale(e.target.value)}
 
          />

          <TextField
            required
            id="cardNumber"
            label="Adresse physique"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={address}
            onChange={(e) => setAddress(e.target.value)}

          />
        
        <label className='custom-file-label' htmlFor='customFile'>
                       Copie de la patente
        </label>
                             
        <div className='custom-file'>
            <input
                 type='file'
                  name='patente'
                  className=''
                  id='customFile'
                  accept='image/*,application/pdf' 
                  onChange={onChangeee} 
                    />
                                    
                  
           </div>
         

        <label className='custom-file-label' htmlFor='customFile'>
                       Copie de la CIN
        </label>
                             
        <div className='custom-file'>
            <input
                 type='file'
                  name='cin'
                  className=''
                  id='customFile'
                  accept='image/*,application/pdf' 
                  onChange={onChangee} 
                    />
                                    
                  
           </div>

        <br/>

        <div className='form-group'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                           
                                <div>
                                    <figure className='avatarr mr-3 item-rtl'>
                                        <img
                                            src={avatarPreview}
                                            className='rounded-circle'
                                            alt='Avatarr Preview'
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className=''
                                        id='customFile'
                                        accept='image/*'
                                        onChange={onChange}
                                    />
                                    
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Avatar
                                </label>
                             
                                </div>
                   
                        </div>

        <br/>

        <Button variant="contained"
		   color="secondary" 
           onClick={HandleSubmit}
            >
			submit 
		  </Button>

     </Box>
      
   </Paper>
   </Container>
      </Layout>
    </React.Fragment>
  );
}

export default Test1View