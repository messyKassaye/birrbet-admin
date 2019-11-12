import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import taskListStyle from "../styles/taskListStyle";
import {Typography} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
class TasksList extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
              <Typography variant='h6'>{this.props.taskQuantity}</Typography>
                <span style={{color:grey[500],fontSize:'0.9em'}}>{this.props.taskType}</span>
            </div>
        );
    }


}

export default withStyles(taskListStyle)(TasksList)
