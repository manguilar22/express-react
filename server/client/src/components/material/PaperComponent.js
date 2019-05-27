import React, {Component} from "react";

import {Paper} from "@material-ui/core";

import {styles} from "./css/index";

const PaperComponent = () => {
    return (
        <Paper classes={styles.paper}>
            Welcome to React
        </Paper>
    );
};

export default PaperComponent;