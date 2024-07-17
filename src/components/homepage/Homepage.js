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
      {expandedBox === null && (
        <>
          <div className={`box`} onClick={() => handleExpand('box1')}>
            {renderBoxContent(<FaMountain />, 'Summer Olympics', 'Bring fame to your name', 'box1')}
          </div>
          <div className={`box`} onClick={() => handleExpand('box2')}>
            {renderBoxContent(<FaTrophy />, 'Leaderboard', 'See how you rank', 'box2')}
          </div>
          <div className={`box`} onClick={() => handleExpand('box3')}>
            {renderBoxContent(<FaCamera />, 'Photos', 'Witness the fun', 'box3')}
          </div>
          <div className={`box`} onClick={() => handleExpand('box4')}>
            {renderBoxContent(<FaBook />, 'Archives', 'Revisit our greatest hits', 'box4')}
          </div>
        </>
      )}
      {expandedBox !== null && (
        <div className={`box expanded`}>
          {expandedBox === 'box1' && (
            <>
              {renderBoxContent(<FaMountain />, 'Summer Olympics', 'Bring fame to your name', 'box1')}
              <div className="details">Details about Summer Olympics</div>
            </>
          )}
          {expandedBox === 'box2' && (
            <>
              {renderBoxContent(<FaTrophy />, 'Leaderboard', 'See how you rank', 'box2')}
              <div className="details">Details about Leaderboard</div>
            </>
          )}
          {expandedBox === 'box3' && (
            <>
              {renderBoxContent(<FaCamera />, 'Photos', 'Witness the fun', 'box3')}
              <div className="details">Details about Photos</div>
            </>
          )}
          {expandedBox === 'box4' && (
            <>
              {renderBoxContent(<FaBook />, 'Archives', 'Revisit our greatest hits', 'box4')}
              <div className="details">Details about Archives</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;