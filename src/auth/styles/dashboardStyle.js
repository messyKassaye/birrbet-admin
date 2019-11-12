import {deepOrange, deepPurple, green, grey, red} from "@material-ui/core/colors";

const drawerWidth = 240;
const dashboardStyle = theme=>({
    root: {
        display: 'flex',
        padding: 0,
    },
    drawerRoot:{
        backgroundColor:'black',
        height:'100%',
        width: '100%',
        position:'relative',
        color:'white',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        display:'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        paddingTop: 20,
    },
    grow:{
        flexGrow: 1
    },

    logo:{
        display:'flex',
        [theme.breakpoints.down('xs')]:{
            display:'none',
        }
    },
    app_name:{
        marginLeft: 10,
        display:'flex',
        [theme.breakpoints.down('xs')]:{
            marginLeft:-20
        }
    },
    sidenav_toolbar:{
        padding: 10,
        display:'flex',
        justifyContent:'space-between'
    }
})

export default dashboardStyle
