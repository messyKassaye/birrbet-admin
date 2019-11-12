import React from "react";
import menu from "../data/menu";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from "@material-ui/core/Collapse";
import withStyles from "@material-ui/core/styles/withStyles";
import menuStyle from "../styles/menuStyle";
class DrawerMenu extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <List>
                    {menu.map((item) => (
                        item.children
                            ?
                            (
                                <div key={ item.name }>
                                    <ListItem
                                        button
                                        component={Link}
                                        onClick={ () => this.handleClick( item.name ) }
                                        className={classes.parent}>
                                        <ListItemIcon style={{color: 'white'}}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.name}/>
                                        { this.state[ item.name ] ?
                                            <ExpandLess /> :
                                            <ExpandMore />
                                        }
                                    </ListItem>
                                    <Collapse
                                        className={classes.sub_menu}
                                        in={ this.state[ item.name ] }
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        { this.handler( item.children ) }
                                    </Collapse>
                                </div>
                            )
                            :
                            (
                                <ListItem
                                    button
                                    component={Link}
                                    to={item.route}
                                    key={item.name}
                                    className={classes.parent}>
                                    <ListItemText primary={item.name} style={{display:'flex',justifyContent:'start'}}/>
                                </ListItem>
                            )
                    ))}
                </List>
            </div>
        );
    }


}

export default withStyles(menuStyle)(DrawerMenu)
