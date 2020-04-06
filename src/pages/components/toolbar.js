import React from 'react';
export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.sorted = { age: true, name: true };
  }

  sort(type) { }
  reset() { }

  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={() => console.log('sort by name')}>
          Sort by name
        </button>
        <button className="btn btn-default" onClick={() => console.log('sort by age')}>
          Sort by age
        </button>
        <button className="btn btn-danger" onClick={() => console.log('reset')}>
          Reset
        </button>
      </div>
    );
  }
}