import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import { createBook } from '../../../api';

const AddBook = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: 'Novel',
    example_text: '',
    author: '',
    price: 0,
  });

  const [file, setFile] = useState();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const createBookHandler = async () => {
    const data = new FormData();
    data.append('form', form);
    data.append('photo', file);

    createBook(data);
  };

  return (
    <div
      className='tab-pane fade'
      id='settings'
      role='tabpanel'
      aria-labelledby='set-tab'
    >
      <hr />
      <Form>
        <Form.Row>
          <Col>
            <Form.Group controlId='name'>
              <div className='col-xs-6'>
                <Form.Label>Название</Form.Label>
                <Form.Control
                  type='text'
                  value={form.name}
                  name='name'
                  required
                  onChange={changeHandler}
                />
              </div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId='author'>
              <div className='col-xs-6'>
                <Form.Label>Автор</Form.Label>
                <Form.Control
                  type='text'
                  value={form.author}
                  name='author'
                  required
                  onChange={changeHandler}
                />
              </div>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group controlId='description'>
          <div className='col-xs-6'>
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as='textarea'
              rows='2'
              value={form.description}
              name='description'
              required
              onChange={changeHandler}
            />
          </div>
        </Form.Group>

        <Form.Row>
          <Col>
            <Form.Group controlId='category'>
              <div className='col-xs-6'>
                <Form.Label>Категория</Form.Label>
                <Form.Control
                  as='select'
                  value={form.category}
                  name='category'
                  required
                  onChange={changeHandler}
                >
                  <option value='Sci-Fi and Fantasy'>Sci-Fi and Fantasy</option>
                  <option value='Mystery and Suspense'>
                    Mystery and Suspense
                  </option>
                  <option value='Literature and Fiction'>
                    Literature and Fiction
                  </option>
                  <option value='Novel'>Novel</option>
                </Form.Control>
              </div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId='price'>
              <div className='col-xs-6'>
                <Form.Label>Цена</Form.Label>
                <Form.Control
                  type='number'
                  value={form.price}
                  placeholder='$'
                  name='price'
                  required
                  onChange={changeHandler}
                />
              </div>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group controlId='example_Text'>
          <div className='col-xs-6'>
            <Form.Label>Пример текста</Form.Label>
            <Form.Control
              as='textarea'
              rows='7'
              value={form.example_text}
              name='example_text'
              onChange={changeHandler}
            />
          </div>
        </Form.Group>

        <Form.Group controlId='book_photo'>
          <div className='col-xs-6'>
            {/* <Form.Label>Обложка</Form.Label> */}
            <Form.File
              name='file'
              label='Обложка книги'
              data-browse='Загрузить'
              custom
              onChange={(e) => {
                const file = e.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </Form.Group>
      </Form>

      <div className='form-group'>
        <div className='col-xs-12'>
          <button onClick={createBookHandler}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
export default AddBook;
