import React, {Component} from 'react';

function Row(props){
    return(
        <tr className ="tr">
            <td>
                {props.value}
            </td>
        </tr>
    );    
}

export default Row;