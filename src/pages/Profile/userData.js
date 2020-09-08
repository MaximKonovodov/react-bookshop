import React from "react";

const UserData = (props) => {
  const person = props.person;
  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <hr />
      <h3>{person}</h3>
      <hr />
    </div>
  );
};
export default UserData;
