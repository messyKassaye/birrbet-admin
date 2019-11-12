import {red} from "@material-ui/core/colors";

const homeStyle = theme=>({
    grow:{
        display:'flex',
        flexGrow:1
    },
    brandIcon: {
        marginLeft: theme.spacing(3),
        display: 'flex',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },
    adminGate:{
        display:'flex',
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },
    content:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:120
    }
})

export default homeStyle
