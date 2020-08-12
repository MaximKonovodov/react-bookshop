import React from 'react'
import { Formik } from 'Formik'

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
              onChange={Formik.handleChange}
              value={Formik.values.name}
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              placeholder="author"
              onChange={Formik.handleChange}
              value={Formik.values.author}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              placeholder="price"
              onChange={Formik.handleChange}
              value={Formik.values.price}
            />
          </div>
          <div>
            <input
              type="text"
              name="descr"
              placeholder="description"
              onChange={Formik.handleChange}
              value={Formik.values.descr}
            />
          </div>
          <button type="submit">Загрузить</button>
        </form>
      </>
    )
  }
}