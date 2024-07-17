import React, { useState } from 'react';
import '../../styles/homepage/homepage.scss';
import { FaMountain, FaTrophy, FaCamera, FaBook } from 'react-icons/fa';

const HomePage = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const handleExpand = (box) => {
    setExpandedBox(expandedBox === box ? null : box);
  };

  const renderBoxContent = (icon, title, description, box) => (
    <>
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => handleExpand(box)}>
        {expandedBox === box ? 'Back' : 'Go'}
      </button>
    </>
  );

  return (
    <div className="homepage">
      <div className={`box ${expandedBox === 'box1' ? 'expanded' : ''}`}>
        {renderBoxContent(<FaMountain />, 'Summer Olympics', 'Bring fame to your name', 'box1')}
        {expandedBox === 'box1' && <div className="details">Details about Summer Olympics</div>}
      </div>
      <div className={`box ${expandedBox === 'box2' ? 'expanded' : ''}`}>
        {renderBoxContent(<FaTrophy />, 'Leaderboard', 'See how you rank', 'box2')}
        {expandedBox === 'box2' && <div className="details">Details about Leaderboard</div>}
      </div>
      <div className={`box ${expandedBox === 'box3' ? 'expanded' : ''}`}>
        {renderBoxContent(<FaCamera />, 'Photos', 'Witness the fun', 'box3')}
        {expandedBox === 'box3' && <div className="details">Details about Photos</div>}
      </div>
      <div className={`box ${expandedBox === 'box4' ? 'expanded' : ''}`}>
        {renderBoxContent(<FaBook />, 'Archives', 'Revisit our greatest hits', 'box4')}
        {expandedBox === 'box4' && <div className="details">Details about Archives</div>}
      </div>
    </div>
  );
};

export default HomePage;