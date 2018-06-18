import React from 'react';
import Card from '../Card';

const CardList = ({ robots }) => {
    
    const CardList = robots.map(robot => <Card key={robot.id} {...robot} />);
    return (
        <div className="card-list">
            {CardList}
        </div>
    );
}
export default CardList;