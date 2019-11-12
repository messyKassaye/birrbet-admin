import React from "react";
import Avatar from "@material-ui/core/Avatar";
import withStyles from "@material-ui/core/styles/withStyles";
import drawerProfileStyle from "../styles/drawerProfileStyle";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from "@material-ui/core/IconButton";
class DrawerProfile extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <Avatar className={classes.avatar}></Avatar>

                <div className={classes.name}>
                    <span className={classes.title}>Meseret kassaye</span>
                    <span className={classes.subTitle}>product owner</span>
                </div>
                <div className={classes.menu}>
                    <IconButton color='inherit'>
                        <MoreHorizIcon/>
                    </IconButton>
                </div>
            </div>
        );
    }


}
export default withStyles(drawerProfileStyle)(DrawerProfile)
