import { Box } from "@mui/material";
import {
  HashRouter,
  NavLink,
  Route,
  Routes
} from 'react-router-dom';
import Play from './pages/Play'
import Service from './pages/Service'
import WowNews from './pages/WowNews'
import Home from './pages/Home'

function App() {


  return (
    <div className="container">
      <HashRouter>
        <div className="login-link">
          <img alt='' src='https://www.wowpaper.com.tw/images/top_2015_logo.png' />
          <Box className='u_flex--center u_flex--column' >
            <NavLink to="/" className='largeA-w'>
              <p>壁紙樂園</p>
            </NavLink>
            <Box display='flex' mt={2}
            // sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' } }}
            >
              <NavLink to="/news" >
                <p>會員登入</p>
              </NavLink>
              <Box pr={1} pl={1} sx={{ mt: '-3px' }}
              // display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
              >|</Box>
              <NavLink to="/play">
                <p>顧客中心</p>
              </NavLink></Box>
          </Box>
        </div>
        <div className="nav-link">
          <NavLink to="/"
            className={(navData) => navData.isActive ? "active-93" : ""}
          >
            <p>壁紙商場</p>
          </NavLink>
          <NavLink to="/news" className={(navData) => navData.isActive ? "active-93" : ""}
          >
            <p>WOWNEWS</p>
          </NavLink>
          <NavLink to="/play" className={(navData) => navData.isActive ? "active-93" : ""}
          >
            <p>壁紙這樣玩</p>
          </NavLink>
          <NavLink to="/service" className={(navData) => navData.isActive ? "active-93" : ""}
          >
            <p>服務說明</p>
          </NavLink>
        </div>
        {/* Routes, Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<WowNews />} />
          <Route path="/play" element={<Play />} />
          <Route path="/service" element={<Service />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                {/* <p>There's nothing here!</p> */}
                {/* <p className="bg-red-500 text-white">Hello Vite + React + Tailwind CSS!</p> */}
              </main>
            }
          />
        </Routes>

      </HashRouter>
    </div>
  )
}

export default App
