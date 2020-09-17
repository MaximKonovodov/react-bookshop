import React, { useEffect, useState } from 'react';
import { getBooks } from '../../api';

// import male from '../../media/Naruto.jpg';
// import female from '../../media/Sakura.png';

import DataNav from './components/DataNav';
import UserData from './components/UserData';
import BookCollection from './components/BookCollection';
import AddBook from './components/AddBook';

const Profile = ({ user }) => {
  const [person, setPerson] = useState(null);
  const [books, setBooks] = useState();

  const loadBooks = async () => {
    const data = await getBooks('');
    setBooks(data.rows);
  };
  useEffect(() => {
    setPerson(user);
    loadBooks();
  }, []);

  if (!person) return <div>Loading</div>;
  return (
    <div className='container-md'>
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
              className='avatar'
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
            <BookCollection books={books} />
            <AddBook />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
