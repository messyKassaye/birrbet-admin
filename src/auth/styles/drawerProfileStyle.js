import {grey} from "@material-ui/core/colors";

const drawerProfileStyle = theme=>({
    root:{
        backgroundColor:grey[900],
        padding:8,
        display:'flex',
        flexDirection:'row',
    },
    avatar:{
        marginRight:8
    },
    name:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginRight: 18
    },
    title:{
        fontSize:'1.0em'
    },
    subTitle:{
        fontSize:'0.8em',
        color:grey[500]
    },
    menu:{
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default drawerProfileStyle
