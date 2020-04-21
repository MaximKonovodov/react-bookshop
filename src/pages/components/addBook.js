import React from 'react'
import { Formik } from 'formik'

export default class addBookBlock extends React.Component {
  render() {
    const { name, author, price, descr } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              placeholder="author"
              onChange={formik.handleChange}
              value={formik.values.author}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              placeholder="price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </div>
          <div>
            <input
              type="text"
              name="descr"
              placeholder="description"
              onChange={formik.handleChange}
              value={formik.values.descr}
            />
          </div>
          <button type="submit">Загрузить</button>
        </form>
      </>
    )
  }
}