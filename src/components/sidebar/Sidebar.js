import React from 'react';
import { drawerWidth } from '../../theme';
import styled from '@emotion/styled';
import { Divider, IconButton, List } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import Item from '../item/Item';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import Person3RoundedIcon from '@mui/icons-material/Person3Rounded';
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(15)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme, open),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Sidebar = ({ open, setOpen }) => {

    const handleCloseSidebar = () => {
        setOpen(!open);
    }
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader open={open}>
                {open && (
                    <IconButton
                        onClick={handleCloseSidebar}
                    >
                        <KeyboardArrowLeftRoundedIcon />
                    </IconButton>
                )}
            </DrawerHeader>
            <Divider />
            <List>
                <Item
                    open={open}
                    text='Thông tin trường học'
                    icon={<HomeRoundedIcon />}
                    path='/'
                ></Item>
                <Item
                    open={open}
                    text='Báo cáo môn học'
                    icon={<LeaderboardRoundedIcon />}
                    path='/bao-cao-mon-hoc'
                ></Item>
                <Item
                    open={open}
                    text='Báo cáo học kỳ'
                    icon={<PollRoundedIcon />}
                    path='/bao-cao-hoc-ky'
                ></Item>
            </List>
            <Divider />
            <List>
                <Item
                    open={open}
                    text='Thông tin học sinh'
                    icon={<PeopleRoundedIcon />}
                    path='/thong-tin-hoc-sinh'
                ></Item>
                <Item
                    open={open}
                    text='Thông tin giáo viên'
                    icon={<Person3RoundedIcon />}
                    path='/thong-tin-giao-vien'
                ></Item>
                <Item
                    open={open}
                    text='Lớp học'
                    icon={<ClassRoundedIcon />}
                    path='/thong-tin-lop'
                ></Item>        
                <Item
                    open={open}
                    text='Bảng điểm'
                    icon={<SchoolRoundedIcon />}
                    path='/bang-diem'
                ></Item>        
                <Item
                    open={open}
                    text='Phân công giảng dạy'
                    icon={<EditCalendarRoundedIcon />}
                    path='/phan-cong-giang-day'
                ></Item>        
                <Item
                    open={open}
                    text='Môn học'
                    icon={<SubjectRoundedIcon />}
                    path='/mon-hoc'
                ></Item>        
                <Item
                    open={open}
                    text='Quy định'
                    icon={<CreateRoundedIcon />}
                    path='/noi-qui'
                ></Item>        
                <Item
                    open={open}
                    text='Đăng xuất'
                    icon={<LogoutRoundedIcon />}
                ></Item>        
            </List>
        </Drawer>
    );
};

export default Sidebar;