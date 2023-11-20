import React, { useState, useEffect } from 'react';
import '../css/menu.css';

const Menu = ({scroll}) => {
  
  const sections = ['home', 'productos', 'promociones', 'spots', 'nestlé cocoa plan', 'historia'];

  return (
    <div className="menu">
      <div className="bar">
      <div
          className="line"
          style={{
            width: `${scroll}%`,
          }}
        />
      </div>
      <div className="menu-content">
        {sections.map((section, index) => (
          <div key={section} className="menu-item">
            <div
              className="circle"
            />
            <div className="label">
              {section.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;