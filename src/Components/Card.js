import React from 'react';



// React component for displaying pricing information
const Card = ({ cardInfo }) => {
    if (cardInfo.length === 0) {
        return (
            <p></p>
        )
    }
    console.log(cardInfo);
    return (

        <div style={{
            textAlign: 'center',
            width: '300px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            padding: '20px',
            borderRadius: '25px',
            background: '#fff',
            border: '5px solid #f17a96',
        }}>
            {cardInfo.icon} {/* Render the icon for each cleaning service */}
            <h2 style={{ color: '#f17a96', fontSize: '25px', paddingBottom: '10px' }}>{cardInfo.name}</h2>
            <p style={{}}>{cardInfo.details}</p>
            <ul style={{}}>
                {cardInfo.rates && cardInfo.rates.map((rate, index) => (
                    <li key={index} style={{ listStyleType: 'circle', color: '#242424', fontSize: '15px' }}>{rate}</li>
                ))}
            </ul>

        </div>

    );
}

export default Card;