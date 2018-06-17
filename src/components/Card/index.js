import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className="card bg-light-red dib br3 pa3 ma2 grow">
            <img
                alt='robot'
                src={`https://robohash.org/set_set2/${id}?size=200x200`}
            />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;