import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Doctors Portal</Link>
                    </Typography>
                    <Link to="/appointment" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">APPOINTMENT</Button></Link>

                    {
                        user?.email ?
                            <Box>
                                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Dashboard</Button></Link>
								
                                <Button onClick={logout} style={{ textDecoration: 'none', color: 'white' }} color="inherit">LOGOUT</Button>
                            </Box>
                            :
                            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">LOGIN</Button></Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;