import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styled from 'styled-components';
import HomePage from "../HomePage/HomePage";
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolios from '../Portfolios/Portfolios';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { IconButton, Switch } from "@mui/material";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <div className="App">
        <Sidebar navToggle={navToggle} />

        <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon/>
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={themeToggler}
                  
                />
              </div>
            </div>
        </div>

        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

        <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
            <div className="line-5"></div>
            <div className="line-6"></div>
          </div>

         
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
      

        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4 ,.line-5, .line-6{
      width: 3px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;