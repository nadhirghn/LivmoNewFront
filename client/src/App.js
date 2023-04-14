import { useEffect } from 'react';

//Protected Routes Imports
import ProtectedRoute from './components/route/ProtectedRoutes';
import HostProtectedRoute from './components/route/HostProtectedRoutes';
import TraderProtectedRoutes from './components/route/TraderProtectedRoutes';


import { loadUser } from './actions/userActions';
import store from './store'
import { ThemeProvider } from "@mui/material/styles";

import theme from '../src/components/shared/theme'
import './App.scss';
import './index.css';

import {BrowserRouter as Router , Switch, Route  } from 'react-router-dom';


import Home from './components/userPages/Home';
import ServicesExperience from './components/userPages/Service_Experience';
import BecomeAccounts from './components/userPages/BecomeAccount';

import HostForm from './components/host/hostPages/newHost/HostForm';

import LodgingDetails from './components/lodging/lodgingDetails';






import ForgotPassword from './components/userAuth/Login/ForgotPassword'
import NewPassword from './components/userAuth/Login/NewPassword';
import Check from './components/userAuth/Signup/Check';
import Login from './components/userAuth/Login/Loginpage';
import Signup from './components/userAuth/Signup/SignupPage';
import TraderForm from './components/trader/TraderForm';

import Test1View from './components/host/hostPages/newHost/test1View';
import Test2View from './components/host/hostPages/newHost/test2View';


import AllExperiences from './components/experience/allExperiences';
import ExperienceDetails from './components/experience/experienceDetails';

import NewRestaurant from './components/restaurant/newRestaurant';


import NewLodging from './components/lodging/newLodging';
import NewTransport from './components/transport/newTransport';
import AllRestaurants from './components/restaurant/allRestaurants';
import AllLodgings from './components/lodging/allLodgings'
import AllTransport from './components/transport/allTransport';

import AddRemoveMultipleInputFields from './test'

//Host pages
import Host from './components/userAuth/Profile/host/Host';

import Merchant from './components/userAuth/Profile/merchant/Merchant'

import User from './components/userAuth/Profile/user/User'


import RestaurantDetails from './components/restaurant/restaurantDetails';
import TransportDetails from './components/transport/transportDetails';
import ExperienceForm from './components/experience/ExperienceForm';


//Profile
import UserProfile from './components/userAuth/Profile/UserProfile';

//Reservation 
import Reservation from "./components/reservation/Reservation";


//Contact
import Contact from './components/userPages/Contact';

//Dialog 
import CustomizedDialogs from './Dialog/dialog1'


import UserSettings from './components/userAuth/Profile/userSettings/UserSettings'


//Update services
import LogdingForm from './components/lodging/updateLodging'
import DishForm from './components/restaurant/updateRestaurant'
import TransportForm from './components/transport/updateTransport'

//update experiences
import EditExperience from "./components/experience/editExperience/EditExperience";
import Activation from './components/userAuth/Signup/Activation';


function App() {
  useEffect(() => {
 store.dispatch(loadUser())
 
  }, [])
  

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>

  

      <Route exact path='/settings' component={UserSettings} />
      <Route exact path='/dialog1' component={CustomizedDialogs} />



    <Route exact path='/' component={Home} />
    <Route exact path='/service_experience' component={ServicesExperience} />
    <Route exact path='/becomeaccount' component={BecomeAccounts} />
    <Route exact path='/t1' component={AddRemoveMultipleInputFields} />



    



    <Route exact path='/password/forgot' component={ForgotPassword} />
    <Route exact path='/password/reset/:token' component={NewPassword} />

    <Route exact path='/confirm/:activationcode' component={Activation} />
    <Route exact path='/check' component={Check} />

    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />

    <Route exact path='/test2' component={Test1View} />
    <Route exact path='/test3' component={Test2View} />








   {/* Host Routes */}

    <Route exact path='/becomehost' component={HostForm} />
    <HostProtectedRoute exact path='/newexperience' component={ExperienceForm} />
    <Route exact path='/allexperiences' component={AllExperiences} />
    <Route  path="/experience/:id" component={ExperienceDetails} />
    <HostProtectedRoute exact path='/host/me' component={Host} />
    <Route exact path='/updateexperience' component={EditExperience} />




   {/* Trader Routes */}
    <Route exact path='/becometrader' component={TraderForm} />

    <TraderProtectedRoutes exact path='/merchant/me' component={Merchant} />

  {/* Add Services */}
    <TraderProtectedRoutes exact path='/newrestaurant' component={NewRestaurant} />
    <TraderProtectedRoutes exact path='/newlodging' component={NewLodging} />
    <TraderProtectedRoutes exact path='/newtransport' component={NewTransport} />

  {/* Update Services */}
    <TraderProtectedRoutes exact path='/merchant/lodging/:id' component={LogdingForm} />
    <TraderProtectedRoutes exact path='/merchant/restaurant/:id' component={DishForm} />
    <TraderProtectedRoutes exact path='/merchant/transport/:id' component={TransportForm} />




    <Route exact path='/allrestaurants' component={AllRestaurants} />
    <Route exact path='/alllodgings' component={AllLodgings} />
    <Route exact path='/alltransports' component={AllTransport} />

    <Route  path="/lodging/:id" component={LodgingDetails} />
    <Route  path="/restaurant/:id" component={RestaurantDetails} />
    <Route  path="/transport/:id" component={TransportDetails} />





    






   {/* Reservation Routes */}
    <Route exact path='/contactus' component={Contact} />






   {/* Reservation Routes */}
   <Route exact path='/reservation' component={Reservation}  />

   {/* User Profile Routes */}

  <ProtectedRoute exact path='/me/user' component={User}  />





    </Switch>



    </Router>
    </ThemeProvider>
</div>

  );
}

export default App;

