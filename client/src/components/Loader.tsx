import React from 'react';
import {CircularProgress} from "@mui/material";

const Loading = () => {
    return (<div style={{position:'relative'}}><div style={ {
            position: 'absolute',
            right: 0,
            bottom: 0,
            top: 0,
            left: 0,
            paddingTop:'50%',
            paddingLeft: '50%'
            }}>
                <CircularProgress />
        </div></div>
    );
}

export default Loading;
