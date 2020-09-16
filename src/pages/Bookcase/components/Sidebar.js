import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const AUTHORS = [
  'Хантер С. Томпсон',
  'Говард Ф. Лавкрафт',
  'Андрей В. Курпатов',
  'Джоан К. Роулинг',
];
const CATEGORIES = [
  'Sci-Fi and Fantasy',
  'Mystery and Suspense',
  'Literature and Fiction',
  'Novel',
];
const PRICE_MIN = 20;

const Sidebar = ({ filter, setFilter }) => {
  const setInputs = (arr, type, checked) => {
    let x = 0;
    return arr.map((name) => {
      x++;
      return (
        <InputGroup key={name}>
          <InputGroup.Prepend>
            <InputGroup.Checkbox
              onChange={changeHandler}
              name={type}
              value={x}
            />
          </InputGroup.Prepend>

          <InputGroup.Append>
            <InputGroup.Text>{name}</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      );
    });
  };

  const changeHandler = (event) => {
    const { name, value, checked } = event.target;

    if (checked && name === 'category') {
      setFilter({ ...filter, categories: [...filter.categories, value] });
    }
    if (checked && name === 'author') {
      setFilter({ ...filter, authors: [...filter.authors, value] });
    }

    if (checked === false && name === 'category') {
      const arr = [];
      filter.categories.map((arrValue) => {
        if (arrValue !== value) arr.push(arrValue);
      });
      setFilter({ ...filter, categories: [...arr] });
    }
    if (checked === false && name === 'author') {
      const arr = [];
      filter.authors.map((arrValue) => {
        if (arrValue !== value) arr.push(arrValue);
      });
      setFilter({ ...filter, authors: [...arr] });
    }

    name === 'price' &&
      setFilter({ ...filter, price: [filter.price[0], value] });
  };

  return (
    <Form.Group>
      <Form.Label>Авторы:</Form.Label>
      {setInputs(AUTHORS, 'author')}
      <Form.Label>Категории:</Form.Label>
      {setInputs(CATEGORIES, 'category')}
      <Form.Label>
        Цена: {PRICE_MIN} - {filter.price[1]}
      </Form.Label>
      <Form.Control
        type='range'
        min={PRICE_MIN}
        max='200'
        name='price'
        onChange={changeHandler}
        value={filter.price[1]}
      />
    </Form.Group>
  );
};
export default Sidebar;
