import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "./styles/dashboardStyle";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import {SwipeableDrawer} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/logo.svg'
import theme from "../theme/appTheme";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import DrawerProfile from "./widgets/DrawerProfile";
import TasksList from "./widgets/TasksList";
import DrawerMenu from "./widgets/DrawerMenu";
import {grey} from "@material-ui/core/colors";
import AuthRoute from "./authRoute";
import Container from "@material-ui/core/Container";
class Dashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            currentPage:'Dashboard'
        }
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this)

    }


    handleDrawerToggle = (value,page) => event=>{
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({
            mobileOpen: value,
            currentPage:page
        })
    }


    render() {
        const {classes} = this.props
        const {container} = this.props;
        const drawer = (
            <div className={classes.drawerRoot}>
                <AppBar style={{position: "relative", backgroundColor: 'transparent'}}>
                    <Toolbar className={classes.sidenav_toolbar}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <IconButton size='small' color='inherit' style={{marginRight:10}}>
                                <PlaylistAddCheckIcon/>
                            </IconButton>
                           <Typography>Birr bet</Typography>
                        </div>

                        <IconButton size='small' color='inherit'>
                            <SearchIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <DrawerProfile/>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                    <TasksList taskQuantity={372} taskType={'Completed tasks'}/>
                    <TasksList taskQuantity={11} taskType={'Open tasks'}/>
                </div>

                <div style={{marginTop:50}}>
                    <Typography style={{color:grey[500],textTransform:'uppercase',fontSize:'1.0em',marginLeft:20}} gutterBottom>Menu</Typography>
                    <DrawerMenu/>
                </div>
            </div>
        )
        return (
            <div className={classes.root}>
                <AppBar elevation={0} position="fixed" className={classes.appBar}>
                    <Toolbar  style={{backgroundColor:'white',color:'black'}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle(true)}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Link to='/' className={classes.logo}>
                            <img
                                alt='Tablet Promotions'
                                src={logo}
                                width='32' height='32'
                                className={classes.brandIcon}/>
                        </Link>
                        <Typography className={classes.app_name}>{'Birr bet'}</Typography>
                        <div className={classes.grow}/>
                        <div className={classes.profile}>
                        </div>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <SwipeableDrawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}

                            onOpen={this.handleDrawerToggle(true,this.state.currentPage)}
                            onClose={this.handleDrawerToggle(false,this.state.currentPage)}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </SwipeableDrawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <SwipeableDrawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open={this.state.mobileOpen}
                            onOpen={this.handleDrawerToggle(true,this.state.currentPage)}
                            onClose={this.handleDrawerToggle(false,this.state.currentPage)}
                        >
                            {drawer}
                        </SwipeableDrawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Container maxWidth='lg'>
                        <AuthRoute/>
                    </Container>
                </main>
            </div>
        );
    }


}


export default withStyles(dashboardStyle)(Dashboard)
