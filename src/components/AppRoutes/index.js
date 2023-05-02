import  {BrowserRouter, Routes, Route} from 'react-router-dom'

import Dashboard from '../../Pages/Dashboard'
import Inventory from '../../Pages/Inventory'
import Appointments from '../../Pages/Appointments'
import Profile from '../../Pages/Profile'



const AppRoutes = () => {
    return ( 
        
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/inventory' element={<Inventory/>}/>
                <Route path='/appointments' element={<Appointments/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
       
        
     );
}
 
export default AppRoutes;