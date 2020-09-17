import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BooksCollection = ({ books }) => {
  if (!books) return <div>Loading</div>;
  return (
    <div
      className='tab-pane fade'
      id='messages'
      role='tabpanel'
      aria-labelledby='mes-tab'
    >
      <hr />

      <Accordion>
        {books.map((book) => (
          <Card key={book.id}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey={book.id}>
                {book.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={book.id}>
              <Card.Body>
                <p>Название: {book.name}</p>
                <p>Описание: {book.description}</p>
                <p>Автор: {book.author.name}</p>
                <p>Жанр: {book.category.value}</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
};
export default BooksCollection;
