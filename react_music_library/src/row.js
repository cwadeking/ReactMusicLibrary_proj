import React from 'react';

function Row(props){
    
    return(
        <span>
            <td>{props.song}</td>
        </span>
    );    
}

export default Row;
{/* <td>{props.album}</td>
<td>{props.artist}</td>
<td>{props.genre}</td>
<td>{props.releaseDate}</td> */}