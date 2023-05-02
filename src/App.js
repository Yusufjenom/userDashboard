import {Space} from 'antd';
import { useState, createContext } from 'react'


import './App.css';
import AppHeader from './components/AppHeader';
import PageContent from './components/PageContent';
import SideMenu from './components/SideMenu';
import AppFooter from './components/AppFooter';

export const AppContext = createContext()

function App() {
  const [globalUserName, setGlobalUserName ] = useState("")
  
  return (
  <div className="App">
    <AppContext.Provider value={{globalUserName, setGlobalUserName}}>
      <AppHeader/>
      <div className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter/>
    </AppContext.Provider>
  </div>
  );
}

export default App;
