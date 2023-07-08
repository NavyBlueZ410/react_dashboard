import React, { useState } from 'react'
import {Box, Typography, IconButton,Link} from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Outlet } from 'react-router-dom'

function MenuBar() {
const [openSidebar,setOpenSidebar] = useState(true)

const sidebar = {
    background: 'var(--color-white)',
    width: openSidebar? '250px' : '80px',
    position:'fixed',
    height:'100vh',
    padding: '0 1rem',
    border:'1px solid var(--color-bg)'
}
const topbar = {
    background: 'var(--color-white)',
    height:'50px',
    display: 'flex',
    justifyContent: 'end',
    alignItems:'center',
    padding: {xl:'0 2rem',lg:'0 2rem',md:'0 2rem',sm:'0 2rem',xs:'0 1rem'}
}
const content = {
    marginLeft: openSidebar? '250px' : '80px'
}
const boxIconSidebar = {
    display: 'flex',
    justifyContent: openSidebar ? 'end' : 'center',
    marginBottom: '0.5rem',
    height:'50px',
    alignItems:'center'
}
const boxMenu = {
    display: 'flex',
    width:'100%',
    alignItems: 'center',
    justifyContent: openSidebar? 'start' : 'center',
    marginBottom: '0.5rem',
    alignItems: 'center',
    background: 'tranpernt',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    textDecoration: 'none',
    ':hover': {
        background: 'var(--color-green)',
        color: 'var(--color-white)'
      },
}
const textMenu = {
    display: openSidebar? 'inline-block' : 'none',
    margin:'auto 0 auto 0.5rem'
}
const container = {
    padding: {xl:'2rem',lg:'2rem',md:'2rem',sm:'2rem',xs:'1rem'}
}
const icon = {
    fontSize:'1.5rem',
    color:'var(--color-primary)'
}

const menu = [
    {
        id:'menu01',
        icon: <WidgetsIcon />,
        menu:'Home',
        path:'/'
    },
    {
        id:'menu02',
        icon: <AccountBoxIcon />,
        menu:'Profile',
        path:'/profile'
    },

]

  return (
    <>
      <Box sx={sidebar}>
          <Box sx={boxIconSidebar}>
            <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
              {openSidebar? (<MenuIcon color='primary' />) : (<ArrowForwardIosIcon  color='primary'/>)}
            </IconButton>
          </Box>
          {
            menu.map((item) => (
                <Link key={item['id']} href={item['path']} sx={boxMenu}>
                        {item['icon']} 
                        <Typography variant="p" component='p' sx={textMenu}>{item['menu']}</Typography>
                </Link>
            ))
          }
      </Box>
      <Box sx={topbar}>
        <Box>
            <IconButton>
                <AccountCircleIcon  color='primary'/>
            </IconButton>
        </Box>
      </Box>
      <Box sx={content}>
        <Box sx={container}>
          <Outlet/>
        </Box>
      </Box>
    </>
  )
}

export default MenuBar