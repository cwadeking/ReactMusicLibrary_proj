import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Row from './row.js';

function Table(props){

    function renderSingleRow(){
        return(
            <Row />
        )
    }

    function createTable(){


    }

    return(
        {createTable()}
    );
}