import React from 'react';

const tabsStyle = {
  position: 'absolute',
  bottom: '30px',
  right: '270px',
  boxShadow: '2px 2px 5px #888888',
  zIndex: 9999
};

const tabStyle = {
  width: '50px',
  height: '50px',
  display: 'inline-block',
  backgroundColor: '#f8f8ff',
  color: '#888888',
  marginRight: '1px',
  fontSize: '35px',
  textAlign: 'center',
  cursor: 'pointer'
};

const Tab = ({ index, onClick }) => (
  <div 
    onClick={() => onClick(index)}
    className='redux-test-recorder-tab'
    style={tabStyle}
  >
    {index + 1}
  </div>
);

const Tabs = ({ numTests, onTabClick }) => {
  const range = Array.from({length: numTests}).map((x, i) => i);
  return(
    <div style={tabsStyle} className='redux-test-recorder-tabs'>
      {range.map(n => <Tab key={n} index={n} onClick={onTabClick} />)}
    </div>
  );
};

export default Tabs;