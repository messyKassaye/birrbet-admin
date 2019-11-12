import {deepOrange, deepPurple, green, grey, red} from "@material-ui/core/colors";


const  menuStyle = theme=>({
    root: {
        display: 'flex',
        padding: 0
    },
    parent: {
        backgroundColor: 'black',
        display:'flex',
        justifyContent:'start',
        alignItems:'start',
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        '&:hover': {
            backgroundColor: '#1976d2',
            borderTopRightRadius:50,
            borderBottomRightRadius:50,
        },
    },
    drawerRoot:{
        backgroundColor:'black',
        height:'100%',
        width: '100%',
        position:'relative',
        color:'white',
    },

    sub_menu:{
        backgroundColor:grey[800],
        border:'1px solid #2B2B2B'
    },
})

export default menuStyle
