import * as React from 'react';
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import { Register, clearErrors } from "../../../actions/userActions";



import Loader from '../../shared/Loader/loader';

import IMG1 from '../../../img/signuplogo.png';
import IMG from '../../../img/logo.png';
import './signup.scss'

//Material UI Imports

import Autocomplete from '@mui/material/Autocomplete';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/material/styles';
import KeyIcon from '@mui/icons-material/Key';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


import InputAdornment from '@mui/material/InputAdornment';
import BadgeIcon from '@mui/icons-material/Badge';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';





const countries = [
	{ code: 'AD', label: 'Andorra', phone: '376' },
	{
		code: 'AE',
		label: 'United Arab Emirates',
		phone: '971',
	},
	{ code: 'AF', label: 'Afghanistan', phone: '93' },
	{
		code: 'AG',
		label: 'Antigua and Barbuda',
		phone: '1-268',
	},
	{ code: 'AI', label: 'Anguilla', phone: '1-264' },
	{ code: 'AL', label: 'Albania', phone: '355' },
	{ code: 'AM', label: 'Armenia', phone: '374' },
	{ code: 'AO', label: 'Angola', phone: '244' },
	{ code: 'AQ', label: 'Antarctica', phone: '672' },
	{ code: 'AR', label: 'Argentina', phone: '54' },
	{ code: 'AS', label: 'American Samoa', phone: '1-684' },
	{ code: 'AT', label: 'Austria', phone: '43' },
	{
		code: 'AU',
		label: 'Australia',
		phone: '61',
		suggested: true,
	},
	{ code: 'AW', label: 'Aruba', phone: '297' },
	{ code: 'AX', label: 'Alland Islands', phone: '358' },
	{ code: 'AZ', label: 'Azerbaijan', phone: '994' },
	{
		code: 'BA',
		label: 'Bosnia and Herzegovina',
		phone: '387',
	},
	{ code: 'BB', label: 'Barbados', phone: '1-246' },
	{ code: 'BD', label: 'Bangladesh', phone: '880' },
	{ code: 'BE', label: 'Belgium', phone: '32' },
	{ code: 'BF', label: 'Burkina Faso', phone: '226' },
	{ code: 'BG', label: 'Bulgaria', phone: '359' },
	{ code: 'BH', label: 'Bahrain', phone: '973' },
	{ code: 'BI', label: 'Burundi', phone: '257' },
	{ code: 'BJ', label: 'Benin', phone: '229' },
	{ code: 'BL', label: 'Saint Barthelemy', phone: '590' },
	{ code: 'BM', label: 'Bermuda', phone: '1-441' },
	{ code: 'BN', label: 'Brunei Darussalam', phone: '673' },
	{ code: 'BO', label: 'Bolivia', phone: '591' },
	{ code: 'BR', label: 'Brazil', phone: '55' },
	{ code: 'BS', label: 'Bahamas', phone: '1-242' },
	{ code: 'BT', label: 'Bhutan', phone: '975' },
	{ code: 'BV', label: 'Bouvet Island', phone: '47' },
	{ code: 'BW', label: 'Botswana', phone: '267' },
	{ code: 'BY', label: 'Belarus', phone: '375' },
	{ code: 'BZ', label: 'Belize', phone: '501' },
	{
		code: 'CA',
		label: 'Canada',
		phone: '1',
		suggested: true,
	},
	{
		code: 'CC',
		label: 'Cocos (Keeling) Islands',
		phone: '61',
	},
	{
		code: 'CD',
		label: 'Congo, Democratic Republic of the',
		phone: '243',
	},
	{
		code: 'CF',
		label: 'Central African Republic',
		phone: '236',
	},
	{
		code: 'CG',
		label: 'Congo, Republic of the',
		phone: '242',
	},
	{ code: 'CH', label: 'Switzerland', phone: '41' },
	{ code: 'CI', label: "Cote d'Ivoire", phone: '225' },
	{ code: 'CK', label: 'Cook Islands', phone: '682' },
	{ code: 'CL', label: 'Chile', phone: '56' },
	{ code: 'CM', label: 'Cameroon', phone: '237' },
	{ code: 'CN', label: 'China', phone: '86' },
	{ code: 'CO', label: 'Colombia', phone: '57' },
	{ code: 'CR', label: 'Costa Rica', phone: '506' },
	{ code: 'CU', label: 'Cuba', phone: '53' },
	{ code: 'CV', label: 'Cape Verde', phone: '238' },
	{ code: 'CW', label: 'Curacao', phone: '599' },
	{ code: 'CX', label: 'Christmas Island', phone: '61' },
	{ code: 'CY', label: 'Cyprus', phone: '357' },
	{ code: 'CZ', label: 'Czech Republic', phone: '420' },
	{
		code: 'DE',
		label: 'Germany',
		phone: '49',
		suggested: true,
	},
	{ code: 'DJ', label: 'Djibouti', phone: '253' },
	{ code: 'DK', label: 'Denmark', phone: '45' },
	{ code: 'DM', label: 'Dominica', phone: '1-767' },
	{
		code: 'DO',
		label: 'Dominican Republic',
		phone: '1-809',
	},
	{ code: 'DZ', label: 'Algeria', phone: '213' },
	{ code: 'EC', label: 'Ecuador', phone: '593' },
	{ code: 'EE', label: 'Estonia', phone: '372' },
	{ code: 'EG', label: 'Egypt', phone: '20' },
	{ code: 'EH', label: 'Western Sahara', phone: '212' },
	{ code: 'ER', label: 'Eritrea', phone: '291' },
	{ code: 'ES', label: 'Spain', phone: '34' },
	{ code: 'ET', label: 'Ethiopia', phone: '251' },
	{ code: 'FI', label: 'Finland', phone: '358' },
	{ code: 'FJ', label: 'Fiji', phone: '679' },
	{
		code: 'FK',
		label: 'Falkland Islands (Malvinas)',
		phone: '500',
	},
	{
		code: 'FM',
		label: 'Micronesia, Federated States of',
		phone: '691',
	},
	{ code: 'FO', label: 'Faroe Islands', phone: '298' },
	{
		code: 'FR',
		label: 'France',
		phone: '33',
		suggested: true,
	},
	{ code: 'GA', label: 'Gabon', phone: '241' },
	{ code: 'GB', label: 'United Kingdom', phone: '44' },
	{ code: 'GD', label: 'Grenada', phone: '1-473' },
	{ code: 'GE', label: 'Georgia', phone: '995' },
	{ code: 'GF', label: 'French Guiana', phone: '594' },
	{ code: 'GG', label: 'Guernsey', phone: '44' },
	{ code: 'GH', label: 'Ghana', phone: '233' },
	{ code: 'GI', label: 'Gibraltar', phone: '350' },
	{ code: 'GL', label: 'Greenland', phone: '299' },
	{ code: 'GM', label: 'Gambia', phone: '220' },
	{ code: 'GN', label: 'Guinea', phone: '224' },
	{ code: 'GP', label: 'Guadeloupe', phone: '590' },
	{ code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
	{ code: 'GR', label: 'Greece', phone: '30' },
	{
		code: 'GS',
		label: 'South Georgia and the South Sandwich Islands',
		phone: '500',
	},
	{ code: 'GT', label: 'Guatemala', phone: '502' },
	{ code: 'GU', label: 'Guam', phone: '1-671' },
	{ code: 'GW', label: 'Guinea-Bissau', phone: '245' },
	{ code: 'GY', label: 'Guyana', phone: '592' },
	{ code: 'HK', label: 'Hong Kong', phone: '852' },
	{
		code: 'HM',
		label: 'Heard Island and McDonald Islands',
		phone: '672',
	},
	{ code: 'HN', label: 'Honduras', phone: '504' },
	{ code: 'HR', label: 'Croatia', phone: '385' },
	{ code: 'HT', label: 'Haiti', phone: '509' },
	{ code: 'HU', label: 'Hungary', phone: '36' },
	{ code: 'ID', label: 'Indonesia', phone: '62' },
	{ code: 'IE', label: 'Ireland', phone: '353' },
	{ code: 'IM', label: 'Isle of Man', phone: '44' },
	{ code: 'IN', label: 'India', phone: '91' },
	{
		code: 'IO',
		label: 'British Indian Ocean Territory',
		phone: '246',
	},
	{ code: 'IQ', label: 'Iraq', phone: '964' },
	{
		code: 'IR',
		label: 'Iran, Islamic Republic of',
		phone: '98',
	},
	{ code: 'IS', label: 'Iceland', phone: '354' },
	{ code: 'IT', label: 'Italy', phone: '39' },
	{ code: 'JE', label: 'Jersey', phone: '44' },
	{ code: 'JM', label: 'Jamaica', phone: '1-876' },
	{ code: 'JO', label: 'Jordan', phone: '962' },
	{
		code: 'JP',
		label: 'Japan',
		phone: '81',
		suggested: true,
	},
	{ code: 'KE', label: 'Kenya', phone: '254' },
	{ code: 'KG', label: 'Kyrgyzstan', phone: '996' },
	{ code: 'KH', label: 'Cambodia', phone: '855' },
	{ code: 'KI', label: 'Kiribati', phone: '686' },
	{ code: 'KM', label: 'Comoros', phone: '269' },
	{
		code: 'KN',
		label: 'Saint Kitts and Nevis',
		phone: '1-869',
	},
	{
		code: 'KP',
		label: "Korea, Democratic People's Republic of",
		phone: '850',
	},
	{ code: 'KR', label: 'Korea, Republic of', phone: '82' },
	{ code: 'KW', label: 'Kuwait', phone: '965' },
	{ code: 'KY', label: 'Cayman Islands', phone: '1-345' },
	{ code: 'KZ', label: 'Kazakhstan', phone: '7' },
	{
		code: 'LA',
		label: "Lao People's Democratic Republic",
		phone: '856',
	},
	{ code: 'LB', label: 'Lebanon', phone: '961' },
	{ code: 'LC', label: 'Saint Lucia', phone: '1-758' },
	{ code: 'LI', label: 'Liechtenstein', phone: '423' },
	{ code: 'LK', label: 'Sri Lanka', phone: '94' },
	{ code: 'LR', label: 'Liberia', phone: '231' },
	{ code: 'LS', label: 'Lesotho', phone: '266' },
	{ code: 'LT', label: 'Lithuania', phone: '370' },
	{ code: 'LU', label: 'Luxembourg', phone: '352' },
	{ code: 'LV', label: 'Latvia', phone: '371' },
	{ code: 'LY', label: 'Libya', phone: '218' },
	{ code: 'MA', label: 'Morocco', phone: '212' },
	{ code: 'MC', label: 'Monaco', phone: '377' },
	{
		code: 'MD',
		label: 'Moldova, Republic of',
		phone: '373',
	},
	{ code: 'ME', label: 'Montenegro', phone: '382' },
	{
		code: 'MF',
		label: 'Saint Martin (French part)',
		phone: '590',
	},
	{ code: 'MG', label: 'Madagascar', phone: '261' },
	{ code: 'MH', label: 'Marshall Islands', phone: '692' },
	{
		code: 'MK',
		label: 'Macedonia, the Former Yugoslav Republic of',
		phone: '389',
	},
	{ code: 'ML', label: 'Mali', phone: '223' },
	{ code: 'MM', label: 'Myanmar', phone: '95' },
	{ code: 'MN', label: 'Mongolia', phone: '976' },
	{ code: 'MO', label: 'Macao', phone: '853' },
	{
		code: 'MP',
		label: 'Northern Mariana Islands',
		phone: '1-670',
	},
	{ code: 'MQ', label: 'Martinique', phone: '596' },
	{ code: 'MR', label: 'Mauritania', phone: '222' },
	{ code: 'MS', label: 'Montserrat', phone: '1-664' },
	{ code: 'MT', label: 'Malta', phone: '356' },
	{ code: 'MU', label: 'Mauritius', phone: '230' },
	{ code: 'MV', label: 'Maldives', phone: '960' },
	{ code: 'MW', label: 'Malawi', phone: '265' },
	{ code: 'MX', label: 'Mexico', phone: '52' },
	{ code: 'MY', label: 'Malaysia', phone: '60' },
	{ code: 'MZ', label: 'Mozambique', phone: '258' },
	{ code: 'NA', label: 'Namibia', phone: '264' },
	{ code: 'NC', label: 'New Caledonia', phone: '687' },
	{ code: 'NE', label: 'Niger', phone: '227' },
	{ code: 'NF', label: 'Norfolk Island', phone: '672' },
	{ code: 'NG', label: 'Nigeria', phone: '234' },
	{ code: 'NI', label: 'Nicaragua', phone: '505' },
	{ code: 'NL', label: 'Netherlands', phone: '31' },
	{ code: 'NO', label: 'Norway', phone: '47' },
	{ code: 'NP', label: 'Nepal', phone: '977' },
	{ code: 'NR', label: 'Nauru', phone: '674' },
	{ code: 'NU', label: 'Niue', phone: '683' },
	{ code: 'NZ', label: 'New Zealand', phone: '64' },
	{ code: 'OM', label: 'Oman', phone: '968' },
	{ code: 'PA', label: 'Panama', phone: '507' },
	{ code: 'PE', label: 'Peru', phone: '51' },
	{ code: 'PF', label: 'French Polynesia', phone: '689' },
	{ code: 'PG', label: 'Papua New Guinea', phone: '675' },
	{ code: 'PH', label: 'Philippines', phone: '63' },
	{ code: 'PK', label: 'Pakistan', phone: '92' },
	{ code: 'PL', label: 'Poland', phone: '48' },
	{
		code: 'PM',
		label: 'Saint Pierre and Miquelon',
		phone: '508',
	},
	{ code: 'PN', label: 'Pitcairn', phone: '870' },
	{ code: 'PR', label: 'Puerto Rico', phone: '1' },
	{
		code: 'PS',
		label: 'Palestine, State of',
		phone: '970',
	},
	{ code: 'PT', label: 'Portugal', phone: '351' },
	{ code: 'PW', label: 'Palau', phone: '680' },
	{ code: 'PY', label: 'Paraguay', phone: '595' },
	{ code: 'QA', label: 'Qatar', phone: '974' },
	{ code: 'RE', label: 'Reunion', phone: '262' },
	{ code: 'RO', label: 'Romania', phone: '40' },
	{ code: 'RS', label: 'Serbia', phone: '381' },
	{ code: 'RU', label: 'Russian Federation', phone: '7' },
	{ code: 'RW', label: 'Rwanda', phone: '250' },
	{ code: 'SA', label: 'Saudi Arabia', phone: '966' },
	{ code: 'SB', label: 'Solomon Islands', phone: '677' },
	{ code: 'SC', label: 'Seychelles', phone: '248' },
	{ code: 'SD', label: 'Sudan', phone: '249' },
	{ code: 'SE', label: 'Sweden', phone: '46' },
	{ code: 'SG', label: 'Singapore', phone: '65' },
	{ code: 'SH', label: 'Saint Helena', phone: '290' },
	{ code: 'SI', label: 'Slovenia', phone: '386' },
	{
		code: 'SJ',
		label: 'Svalbard and Jan Mayen',
		phone: '47',
	},
	{ code: 'SK', label: 'Slovakia', phone: '421' },
	{ code: 'SL', label: 'Sierra Leone', phone: '232' },
	{ code: 'SM', label: 'San Marino', phone: '378' },
	{ code: 'SN', label: 'Senegal', phone: '221' },
	{ code: 'SO', label: 'Somalia', phone: '252' },
	{ code: 'SR', label: 'Suriname', phone: '597' },
	{ code: 'SS', label: 'South Sudan', phone: '211' },
	{
		code: 'ST',
		label: 'Sao Tome and Principe',
		phone: '239',
	},
	{ code: 'SV', label: 'El Salvador', phone: '503' },
	{
		code: 'SX',
		label: 'Sint Maarten (Dutch part)',
		phone: '1-721',
	},
	{
		code: 'SY',
		label: 'Syrian Arab Republic',
		phone: '963',
	},
	{ code: 'SZ', label: 'Swaziland', phone: '268' },
	{
		code: 'TC',
		label: 'Turks and Caicos Islands',
		phone: '1-649',
	},
	{ code: 'TD', label: 'Chad', phone: '235' },
	{
		code: 'TF',
		label: 'French Southern Territories',
		phone: '262',
	},
	{ code: 'TG', label: 'Togo', phone: '228' },
	{ code: 'TH', label: 'Thailand', phone: '66' },
	{ code: 'TJ', label: 'Tajikistan', phone: '992' },
	{ code: 'TK', label: 'Tokelau', phone: '690' },
	{ code: 'TL', label: 'Timor-Leste', phone: '670' },
	{ code: 'TM', label: 'Turkmenistan', phone: '993' },
	{ code: 'TN', label: 'Tunisia', phone: '216' },
	{ code: 'TO', label: 'Tonga', phone: '676' },
	{ code: 'TR', label: 'Turkey', phone: '90' },
	{
		code: 'TT',
		label: 'Trinidad and Tobago',
		phone: '1-868',
	},
	{ code: 'TV', label: 'Tuvalu', phone: '688' },
	{
		code: 'TW',
		label: 'Taiwan, Province of China',
		phone: '886',
	},
	{
		code: 'TZ',
		label: 'United Republic of Tanzania',
		phone: '255',
	},
	{ code: 'UA', label: 'Ukraine', phone: '380' },
	{ code: 'UG', label: 'Uganda', phone: '256' },
	{
		code: 'US',
		label: 'United States',
		phone: '1',
		suggested: true,
	},
	{ code: 'UY', label: 'Uruguay', phone: '598' },
	{ code: 'UZ', label: 'Uzbekistan', phone: '998' },
	{
		code: 'VA',
		label: 'Holy See (Vatican City State)',
		phone: '379',
	},
	{
		code: 'VC',
		label: 'Saint Vincent and the Grenadines',
		phone: '1-784',
	},
	{ code: 'VE', label: 'Venezuela', phone: '58' },
	{
		code: 'VG',
		label: 'British Virgin Islands',
		phone: '1-284',
	},
	{
		code: 'VI',
		label: 'US Virgin Islands',
		phone: '1-340',
	},
	{ code: 'VN', label: 'Vietnam', phone: '84' },
	{ code: 'VU', label: 'Vanuatu', phone: '678' },
	{ code: 'WF', label: 'Wallis and Futuna', phone: '681' },
	{ code: 'WS', label: 'Samoa', phone: '685' },
	{ code: 'XK', label: 'Kosovo', phone: '383' },
	{ code: 'YE', label: 'Yemen', phone: '967' },
	{ code: 'YT', label: 'Mayotte', phone: '262' },
	{ code: 'ZA', label: 'South Africa', phone: '27' },
	{ code: 'ZM', label: 'Zambia', phone: '260' },
	{ code: 'ZW', label: 'Zimbabwe', phone: '263' },
];



function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				livmo
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}


const Signup = () => {


	const minDate = new Date('1930-01-01T00:00:00.000');
	const maxDate = new Date('2004-01-01T00:00:00.000');

	//

	const [passwordEye, setPasswordEye] = useState(false);

	const handlePasswordClick = () => {
		setPasswordEye(!passwordEye)
	}

	//Confirm
	const [confirmpasswordEye, setConfirmPasswordEye] = useState(false);

	const handleConfirmPasswordClick = () => {
		setConfirmPasswordEye(!confirmpasswordEye)
	}

	const color = "#E42651"
	const themes = createTheme();

	const history = useHistory();

	//signup

	const [user, setUser] = useState({
		fname: '',
		lname: '',
		phone: '',
		email: '',

	})
	const [avatar, setAvatar] = useState('')
	const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')
	const [birthday, setBirthDay] = React.useState(null);
	const [password, setPassword] = React.useState(null);

	const { fname, lname, phone, email } = user;

	const onChange = e => {

		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const alert = useAlert();
	const dispatch = useDispatch();
	const { isAuthenticated, error, loading } = useSelector(state => state.auth);

	useEffect(() => {

		if (isAuthenticated) {

			history.push('/check');
			alert.success('Successful registration');

		}


		if (error) {
			alert.error(error);
			dispatch(clearErrors());

		}
	}, [dispatch, alert, isAuthenticated, error, history])
	const Input = styled('input')({
		display: 'none',
	});

	const HandleSubmit = (e) => {


		const formData = new FormData();
		formData.set('fname', fname);
		formData.set('lname', lname);
		formData.set('email', email);
		formData.set('phone', phone);
		formData.set('birthday', birthday);
		formData.set('country', country.label);
		formData.set('password', password);
		formData.set('avatar', avatar);

		const data = {
			fname,
			lname,
			email,
			birthday,
			phone,
			password,
			// avatar,
			country: country.label,
		}

		dispatch(Register(data));

	};
	const onChangee = e => {
		if (e.target.name === 'avatar') {

			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatarPreview(reader.result)
					setAvatar(reader.result)
				}
			}

			reader.readAsDataURL(e.target.files[0])

		} else {
			setUser({ ...user, [e.target.name]: e.target.value })
		}
	}


	// validation

	const { register, handleSubmit, formState: { errors } } = useForm();

	const emailValidation = errors?.email ? errors.email.message : null;
	const picValidation = errors?.pic ? errors.pic.message : null;

	const birthValidation = errors?.birth ? errors.birth.message : null;
	const countryValidation = errors?.country ? errors.country.message : null;
	const fnameValidation = errors?.fname ? errors.fname.message : null;
	const lnameValidation = errors?.lname ? errors.lname.message : null;
	const phoneValidation = errors?.phone ? errors.phone.message : null;
	const pwdValidation = errors?.pwd ? errors.pwd.message : null;
	const confirmpwdValidation = errors?.confirmpwd ? errors.confirmpwd.message : null;






	const [country, setCountry] = React.useState("");





	return (
		<React.Fragment>

			{loading ? <Loader /> : (
				<React.Fragment>
					<ThemeProvider theme={themes}>
						<Grid container component="main" sx={{ height: '100vh' }}>
							<CssBaseline />
							<Grid
								item
								xs={false}
								sm={4}
								md={7}
								sx={{
									backgroundImage: `url(${IMG1})`,
									backgroundRepeat: 'no-repeat',
									backgroundColor: (t) =>
										t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
									backgroundSize: "500px  850px",
									backgroundPosition: 'center',
								}}
							/>
							<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
								<Box
									sx={{
										my: 8,
										mx: 6,
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										marginTop: '4rem'
									}}
								>

									<div className='loginimg'>
										<Link to="/">
											<img src={IMG} alt='logo' />
										</Link>
									</div>
									<Box component="form" noValidate onSubmit={handleSubmit(HandleSubmit)} sx={{ mt: 1 }}>
										<Grid container spacing={2}>
											<Grid item xs={12} >
												<div className='form-group'>
													<figure className='avatarr mr-3 item-rtl'>
														<img
															src={avatarPreview}
															className='rounded-circle'
															alt='Avatar Preview'
														/>
													</figure>
												</div>
												<div className='custom-file'>
													<input
														{...register("pic", { required: "Profile picture is required" })}
														className='custom-file-input'
														type='file'
														name='avatar'
														style={{ display: 'none' }}
														id='customFile'
														accept='image/*'
														onChange={onChangee}
													/>
													{avatarPreview === "/images/default_avatar.jpg" ? (
														<>
															{!!errors?.pic && <span className="text-sm text-red-500">
																{picValidation}</span>}
														</>
													) : (<></>)
													}

													<label className='custom-file-label' htmlFor='customFile' >
														<Input />
														<Button
															variant="contained"
															component="span"
															style={{
																background: "linear-gradient(#F02F32,#DA1D6C)",
																width: '30%',

															}}>
															Upload
														</Button>
													</label>
												</div>

											</Grid>
											<Grid item xs={12} sm={6}>
												<TextField
													id="input-with-icon-textfield"
													label="First Name"
													InputProps={{
														startAdornment: (
															<InputAdornment position="start">
																<BadgeIcon sx={{ color: "#E42651" }} />
															</InputAdornment>
														),
													}}
													margin="normal"
													required
													fullWidth
													name="fname"
													{...register("fname", {
														pattern: {
															value: /^[A-Za-z]+$/,
															message: 'only characters'
														}
													})}
													{...register("fname", {
														minLength: {
															value: 3,
															message: 'Minimum 3 characters'
														}
													})}
													{...register("fname", {
														maxLength: {
															value: 15,
															message: 'Maximum 15 characters'
														}
													})}
													{...register("fname", { required: "First name is required" })}

													error={!!errors?.fname}
													helperText={fnameValidation}

													value={fname}
													onChange={onChange}

												/>
											</Grid>
											<Grid item xs={12} sm={6}>
												<TextField
													id="input-with-icon-textfield"
													label="Last Name"
													InputProps={{
														startAdornment: (
															<InputAdornment position="start">
																<BadgeIcon sx={{ color: "#E42651" }} />
															</InputAdornment>
														),
													}}
													margin="normal"
													required
													fullWidth

													name="lname"
													{...register("lname", {
														pattern: {
															value: /^[A-Za-z]+$/,
															message: 'Only characters'
														}
													})}
													{...register("lname", {
														minLength: {
															value: 3,
															message: 'Minimum 3 characters'
														}
													})}
													{...register("lname", {
														maxLength: {
															value: 15,
															message: 'Maximum 15 characters'
														}
													})}
													{...register("lname", { required: "Last name is required" })}

													error={!!errors?.lname}
													helperText={lnameValidation}
													value={lname}
													onChange={onChange}

												/>
											</Grid>
											<Grid item xs={12}>
												<LocalizationProvider dateAdapter={AdapterDateFns}>

													<DatePicker
														minDate={minDate}
														maxDate={maxDate}
														label="Date of birth"
														value={birthday}
														onChange={(newValue) => {
															setBirthDay(newValue);
														}}
														renderInput={(params) => {

															return (
																<TextField
																	{...params}
																	sx={{
																		svg: { color },
																		input: "black",
																		label: "black",
																		width: "100%"
																	}}


																/>
															);
														}}
													/>
												</LocalizationProvider>
												{/* {birthday === null ? (
										<>
									 <span className="text-sm text-red-500">
                                        Date of birth is required</span>
										</>
									):(<></>)
										}
										*/}
											</Grid>


											<Grid item xs={12}>
												{/*	 <div>{`value: ${country.label !== null ? `'${country.label}'` : 'null'}`}</div> */}
												<Autocomplete
													id="country-select-demo"
													value={country.option}
													onChange={(event, option) => {
														setCountry(option);
													}}
													sx={{ width: '100%' }}
													options={countries}
													autoHighlight
													getOptionLabel={(option) => option.label}
													renderOption={(props, option) => (
														<Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
															<img
																loading="lazy"
																width="20"
																src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
																srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
																alt=""
															/>
															{option.label}
														</Box>
													)}
													renderInput={(params) => (

														<TextField
															{...params}
															sx={{
																label: "black",
															}}
															label="Choose a country"
															inputProps={{
																...params.inputProps,
																autoComplete: 'new-password', // disable autocomplete and autofill
															}}
															{...register("country", {
																required: "Country is required",
															})}
															error={!!errors?.country}
															helperText={countryValidation}
														/>
													)}
												/>

											</Grid>
											<Grid item xs={12} >
												<TextField
													id="input-with-icon-textfield"
													label="Phone"
													name="phone"
													InputProps={{
														startAdornment: (
															<InputAdornment position="start">
																<PhoneIcon sx={{ color: "#E42651" }} />
															</InputAdornment>
														),
													}}
													margin="normal"
													required
													fullWidth
													type='Number'
													{...register("phone", {
														required: "Phone is required, Only numbers is allowed",
														valueAsNumber: true,
														pattern: {
															value: /^(0|[1-9]\d*)(\.\d+)?$/,
														},
													})}
													error={!!errors?.phone}
													helperText={phoneValidation}
													value={phone}
													onChange={onChange}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													id="input-with-icon-textfield"
													label="Email"
													InputProps={{
														startAdornment: (
															<InputAdornment position="start">
																<MailOutlineIcon sx={{ color: "#E42651" }} />
															</InputAdornment>
														),
													}}
													margin="normal"
													fullWidth
													required
													name="email"
													style={{ marginTop: "1rem" }}
													{...register("email", {
														pattern: {
															value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
															message: 'Email is invalid, exemple: example@mail.com'
														}
													})}
													{...register("email", {
														required: 'Email is required',

													})}
													error={!!errors?.email}
													helperText={emailValidation}
													value={email}
													onChange={onChange}
												/>
											</Grid>
											<Grid item xs={12}>
												<div className='relative'>
													<TextField
														id="input-with-icon-textfield"
														label="Password"
														InputProps={{
															startAdornment: (
																<InputAdornment position="start">
																	<KeyIcon sx={{ color: "#E42651" }} />
																</InputAdornment>
															),
														}}
														type={(passwordEye === false) ? 'password' : 'text'}
														margin="normal"
														required
														fullWidth
														name="password"
														style={{ marginTop: "1rem" }}
														{...register("pwd", {
															required: "Password is required",
															pattern: {
																value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
																message: 'Password should include at least one uppercase & one lowercase, one numeric value and one special character'
															},
															minLength: {
																value: 8,
																message: 'Minimum Required length is 8'
															},
															maxLength: {
																value: 20,
																message: "Maximum Required length is 20"
															}
														})}
														error={!!errors?.pwd}
														helperText={pwdValidation}
														value={password}
														onChange={(e) => setPassword(e.target.value)}
													/>

													<div className='text-2xl absolute top-8 right-5'>
														{
															(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordClick} /> :
																<AiFillEye onClick={handlePasswordClick} />
														}


													</div>
												</div>
											</Grid>
											<Grid item xs={12}>
												<div className='relative'>
													<TextField
														id="input-with-icon-textfield"
														label="Confirm Password"
														type={(confirmpasswordEye === false) ? 'password' : 'text'}

														InputProps={{
															startAdornment: (
																<InputAdornment position="start">
																	<KeyIcon sx={{ color: "#E42651" }} />
																</InputAdornment>
															),
														}}
														margin="normal"
														required
														fullWidth
														name="confirmpassword"

														{...register("confirmpwd", {
															required: "Confirm Password is required",
															validate: (value) =>
																value === password || "The passwords do not match"
														})}
														error={!!errors?.confirmpwd}
														helperText={confirmpwdValidation}
													/>

													<div className='text-2xl absolute top-8 right-5' >
														{
															(confirmpasswordEye === false) ? <AiFillEyeInvisible onClick={handleConfirmPasswordClick} /> :
																<AiFillEye onClick={handleConfirmPasswordClick} />
														}


													</div>
												</div>
											</Grid>

										</Grid>
										<Button
											type="submit"
											fullWidth
											variant="contained"
											sx={{ mt: 3, mb: 2 }}
											style={{
												background: "linear-gradient(#F02F32,#DA1D6C)",
												width: '30%',
												marginLeft: '12rem'
											}}
											onClick={handleSubmit}
										>
											Sign up
										</Button>

										<Grid container>

											<Grid item style={{ marginTop: '2rem', marginLeft: '10.8rem' }}>
												<Link to="/login" style={{ color: 'black' }}>
													{"Already a member ? Log In"}
												</Link>
											</Grid>

										</Grid>
										<Copyright sx={{ mt: 5 }} />
									</Box>
								</Box>
							</Grid>
						</Grid>

					</ThemeProvider>
				</React.Fragment>
			)}




		</React.Fragment>

	);
}
export default Signup;
