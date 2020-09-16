import React from "react";

const DataNav = (props) => {
  return (
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
          Главная
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
          Мои Книги
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
          Добавить Книгу
        </a>
      </li>
    </ul>
  );
};
export default DataNav;
