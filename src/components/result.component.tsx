import React, { Component, useEffect } from 'react'
import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CSS from 'csstype';






import '../App.css'


interface Props {
    word: string,
    root: string,
    overlaping_charaters:string[];
    overlap_number: number,
    is_partial: boolean
}


const h1Styles: CSS.Properties = {
    margin: '10% 0 0',
};

const itemStyles: CSS.Properties = {
    overflowX: 'auto',
}




const Result = ({ word, root, overlap_number, is_partial, overlaping_charaters }: Props) => {

    if (overlap_number > 0) {
        if (is_partial) {
            //show partial
            return (
                <div className="alert alert-warning" style={h1Styles} role="alert">
                    <div >Found only a partial match.</div>
                    <div style={itemStyles}>word: {word}</div>
                    <div style={itemStyles}>root: {root}</div>
                    <div style={itemStyles}>overlaping_charaters:</div>
                    <div style={itemStyles}>{ overlaping_charaters }</div>
                    <div style={itemStyles}>overlap_number: {overlap_number}</div>
                </div>
            )

        } else {
            //show match
            return (
                <div className="alert alert-success" style={h1Styles} role="alert">
                    <div>Found a match!</div>
                    <div style={itemStyles}>word: {word}</div>
                    <div style={itemStyles}>root: {root}</div>
                    <div style={itemStyles}>overlaping_charaters:</div>
                    <div style={itemStyles}>{ overlaping_charaters }</div>
                    <div style={itemStyles}>overlap_number: {overlap_number}</div>
                </div>
            )

        }

    } else {
        //No match found
        return (
            <div className="alert alert-danger" style={h1Styles} role="alert">

                <div>No match found</div>

            </div>
        )
    }
}


export default Result
