import React from 'react';
// Importing icons from react-icons library
import { FaBoxOpen } from "react-icons/fa6";
import { PiBroomFill } from "react-icons/pi";
import { MdCleaningServices } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import Card from '../Card';




// React component for displaying a section
const Section = ({ id, data, background, title, titleBorderColor, titleTextColor }) => {
    return (
        <div id={id} style={{ background: background, padding: '50px' }}>
            <div
                style={{
                    paddingBottom: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <h2
                    style={{
                        borderRadius: '15px',
                        padding: '15px',
                        border: '5px solid ' + titleBorderColor,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        color: titleTextColor
                    }}>{title}</h2>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '75px',
                    justifyContent: 'center',

                }}>
                {
                    // Map through the data array to render each cleaning service
                    data.map((dataElement) => {

                        return (
                            <Card cardInfo={dataElement} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Section;