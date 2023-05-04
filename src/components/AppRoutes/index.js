import  {BrowserRouter, Routes, Route} from 'react-router-dom'

import Dashboard from '../../Pages/Dashboard'
import Inventory from '../../Pages/Inventory'
import Appointments from '../../Pages/Appointments'
import Profile from '../../Pages/Profile'
import Stripe from '../../Pages/StripePpayment'



const AppRoutes = () => {
    return ( 
        
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/inventory' element={<Inventory/>}/>
                <Route path='/appointments' element={<Appointments/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/payment' element={<Stripe/>}/>
            </Routes>
       
        
     );
}
 
export default AppRoutes;