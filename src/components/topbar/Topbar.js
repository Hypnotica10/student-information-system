import React from 'react';
import { drawerWidth } from '../../theme';
import styled from '@emotion/styled';
import MuiAppBar from '@mui/material/AppBar';
import { Box, IconButton, InputBase, Toolbar } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Topbar = ({ open, setOpen }) => {
    const handleOpenSidebar = () => {
        setOpen(!open)
    }

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpenSidebar}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuOutlinedIcon />
                </IconButton>
                
                <Box
                    display='flex'
                    border='1px solid gray'
                    borderRadius='5px'
                >
                    <InputBase
                        sx={{ ml: 2 }}
                        placeholder='Search...'
                    ></InputBase>
                    <IconButton>
                        <SearchRoundedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;