import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import male from "../../media/Naruto.jpg";
import female from "../../media/Sakura.png";

// import AddBook from './addBook'
import UserData from "./userData";
import Messages from "./messages";
import Settings from "./settings"

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("userData"));
  const person = data && data.email;

  return (
    <div>
      <div className="row">
        <div className="col-sm-10">
          <h1>{person}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <div className="text-center">
            <img
              src={male}
              // src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
              className="avatar img-thumbnail"
              alt="avatar"
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
        <div className="col-sm-9">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active text-orange"
                href="#home"
                id="home-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link text-orange"
                href="#messages"
                id="mes-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Messages
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link text-orange"
                href="#settings"
                id="set-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Settiings
              </a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <UserData />
            <Messages />
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
