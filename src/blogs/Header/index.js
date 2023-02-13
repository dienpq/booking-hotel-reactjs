import { AppBar, Avatar, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { useState } from 'react';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="fixed" color='inherit' className={styles.boxHeader}>
            <Container fixed>
                <Grid container spacing={2}>
                    <Grid item xs={5} className={styles.headerLeft}>
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="default"
                                aria-label="menu"
                                sx={{ mr: 0 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                        <Logo />
                    </Grid>
                    <Grid item xs={7} className={styles.headerRight}>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, mx: 1 }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 8 }}>
                                <Avatar src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default Header;