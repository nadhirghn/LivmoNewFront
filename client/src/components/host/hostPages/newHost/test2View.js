import React, { useState, useEffect } from 'react';



import { Paper, Container } from '@mui/material';

import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import './becomehost.scss'
import { Button } from '@mui/material';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { RegisterOrganism, clearErrors } from "../../../../actions/userActions";
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

const Test2View= () => {

  
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
            setRnePreview(reader.result)
            setRne(reader.result)
        }
    }
    reader.readAsDataURL(e.target.files[0])
}

const onChangeee = e => {
    const reader = new FileReader();

    reader.onload = () => {
        if (reader.readyState === 2) {
            setPatentePreview(reader.result)
            setPatente(reader.result)
        }
    }

    reader.readAsDataURL(e.target.files[0])

}
 const onRadiochange = e => {
	setForme(e.target.value)
  };


	
  const theme = useTheme();

  const [country, setCountry] = React.useState([]);

  const history = useHistory();

  //signup
  const [name, setName] = useState('');
    const [contactpersone, setContactPersonne] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [phone, setPhone] = useState('');
    const [codepostale, setCodepostale] = useState('');
    const [address, setAddress] = useState('');
    const [cnss, setCnss] = useState('');
    const [mfiscale, setMfiscale] = useState('');
    const [forme, setForme] = useState('');



    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');

    const [rne, setRne] = useState('');
    const [rnePreview, setRnePreview] = useState('')

    const [patente, setPatente] = useState('');
    const [PatentePreview, setPatentePreview] = useState('')

 
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector(state => state.auth);

  useEffect(() => {

      if(isAuthenticated) {
          history.push('/check');
          alert.success('Inscription Réussie.');
      }
    

    if(error) {
        alert.error(error);
        dispatch(clearErrors());
        
    }
}, [dispatch, alert, isAuthenticated, error, history])


const HandleSubmit = (e) => { 
    

    const formData = new FormData();
    formData.set('name', name);
    formData.set('contactpersone', contactpersone);
    formData.set('email', email);
    formData.set('country', country);
    formData.set('phone', phone);
    formData.set('password', password);
    formData.set('codepostale', codepostale);
    formData.set('address', address);
    formData.set('cnss', cnss);
    formData.set('mfiscale', mfiscale);
    formData.set('forme', forme);

    formData.set('avatar', avatar);
    formData.set('rne', rne);
    formData.set('patente', patente);




    dispatch(RegisterOrganism(formData));
  

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
	  <Grid item xs={12} sm={6}>
	  <TextField
              required
              id="name"
              name="name"
              label="Nom Juridique"
              fullWidth
              autoFocus
              variant="standard"
			  value={name}
			  onChange={(e) => setName(e.target.value)} 


            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Persone à contacter"
              fullWidth
              autoComplete="family-name"
              variant="standard"
			  value={contactpersone}
			  onChange={(e) => setContactPersonne(e.target.value)} 
            />
          </Grid>
  
          <Grid item xs={12}>
            <TextField
                required
              id="email"
              name="email"
              label="Email Organisme"
              fullWidth
              variant="standard"
			  value={email}
			  onChange={(e) => setEmail(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12} >
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
          </Grid>
          <Grid item xs={12} >
		<TextField
			required
			name="phone"
			label="phone"
			id="phone"
       variant="standard"
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
			/>
          </Grid>
          
          <Grid item xs={12}>
              <br />
          <div className='form-group'>
                              <label htmlFor='avatar_upload'>Photo de profil</label>
                             <div className='container has-text-centered'>
                                  <div >
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
                                          className='custom-file-input'
                                          id='customFile'
                                          accept='image/*'
                                          onChange={onChange}
                                      />
                                      
                                      <label className='custom-file-label' htmlFor='customFile'>
                                      Choisir la photo de profil
                                  </label>
                               
                                  </div>
                                  </div>
                          </div>
                          
                          <br />
  
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="password"
              label="Mot de Passe"
              type="password"
              id="password"
              variant="standard"
			        value={password}
			        onChange={(e) => setPassword(e.target.value)}
              />
          </Grid>
        <br/>
		<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Forme Juridique</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
		onChange={onRadiochange}
      >
        <FormControlLabel value="SAS" control={<Radio />} label="SAS" />
        <FormControlLabel value="SA" control={<Radio />} label="SA" />
        <FormControlLabel value="SUARL" control={<Radio />} label="SUARL" />
        <FormControlLabel value="SARL" control={<Radio />} label="SARL" />
        <FormControlLabel value="Autre" control={<Radio />} label="Autre" />



      </RadioGroup>
    </FormControl>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Code Postale"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
			      value={codepostale}
            onChange={(e) => setCodepostale(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Addresse"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
		      	value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cnss"
			      name="cnss"
            label="№ Affiliation CNSS"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
			      value={cnss}
            onChange={(e) => setCnss(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="mfiscale"
            name="mfiscale"
            label="Matricule Fiscale"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
			      value={mfiscale}
            onChange={(e) => setMfiscale(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{marginTop:"1rem"}}>

		<label className='custom-file-label' htmlFor='customFile'>
                       Copie de la patente
        </label>
                             
        <div className='custom-file'>
            <input
                 type='file'
                  name='avatar'
                  className=''
                  id='customFile'
                  accept='image/*,application/pdf'    
				  onChange={onChangeee} 
                    />
                                    
                  
           </div>
         
        </Grid>
        <Grid item xs={12} md={6} style={{marginTop:"1rem"}}>
        <label className='custom-file-label' htmlFor='customFile'>
                       Copie de la RNE
        </label>
                             
        <div className='custom-file'>
            <input
                 type='file'
                  name='avatar'
                  className=''
                  id='customFile'
                  accept='image/*,application/pdf'    
				  onChange={onChangee}
                    />
                                    
                  
           </div>
		   </Grid>
		   <br />
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

export default Test2View