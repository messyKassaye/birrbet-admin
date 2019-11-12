const loginStyle = theme=>({
    container:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    header:{
        backgroundColor:'#3C4252',
        color:'white',
        fontSize:'0.5em'
    },
    form:{
        marginTop:-80,
        zIndex:12,
        paddingLeft: 150,
        paddingRight: 150,
        [theme.breakpoints.down('xs')]:{
            paddingLeft: 0,
            paddingRight: 0,
        }
    },
    text_input:{
        width:'100%',
        marginBottom:20
    },
    login_btn:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default loginStyle
