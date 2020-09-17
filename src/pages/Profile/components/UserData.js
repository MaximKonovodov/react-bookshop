import React from 'react';

const UserData = (props) => {
  const { person } = props;
  return (
    <div
      className='tab-pane fade show active'
      id='home'
      role='tabpanel'
      aria-labelledby='home-tab'
    >
      <hr />
      <h3>{person.email}</h3>
      <hr />
      <h6>createdAt:{person.createdAt}</h6>
      <hr />
      <h6>updatedAt:{person.updatedAt}</h6>
    </div>
  );
};
export default UserData;
