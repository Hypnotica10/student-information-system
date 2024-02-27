import { ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ open, icon, text, path }) => {
    return (
        <Tooltip
            arrow
            title={open ? '' : text}
            placement='right'
        >
            <ListItem sx={{ display: 'block' }}>
                <ListItemButton
                    component={Link}
                    to={path}
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
        </Tooltip>
    );
};

export default Item;