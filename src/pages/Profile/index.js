import React, { useEffect, useState } from 'react';

import male from '../../media/Naruto.jpg';
import female from '../../media/Sakura.png';

import DataNav from './dataNav';
import UserData from './userData';
import Messages from './messages';
import Settings from './settings';

const Profile = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'));
    setPerson(data && data.email);
  });

  return (
    <div>
      {/* <div className="row">
        <div className="col-sm-10">
          <h1>{person}</h1>
        </div>
      </div> */}

      <div className='row'>
        <div className='col-sm-3'>
          <div className='text-center'>
            <img
              // src={female}
              src='http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
              className='avatar img-thumbnail'
              alt='avatar'
            />
            {/* <h6>Upload a different photo...</h6> */}
            {/* <input
              type="file"
              className="text-center center-block file-upload"
            /> */}
          </div>
          <hr />
          <br />
        </div>
        <div className='col-sm-9'>
          <DataNav />
          <div className='tab-content' id='myTabContent'>
            <UserData person={person} />
            <Messages />
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
