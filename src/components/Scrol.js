import React from 'react';
const Scrol = (props) => {


    return(
        <div style={{overflow:'scroll' ,border: '5px solid blue', height:'600px'}}>
            {props.children}
        </div>
    );
}
export default Scrol;