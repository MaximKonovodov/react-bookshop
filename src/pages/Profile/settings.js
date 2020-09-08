import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

import { createBook } from "../../api";

const Settings = (props) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "Novel",
    example_text: "",
    author: "",
    price: 0,
  });

  const [file, setFile] = useState();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const createBookHandler = async () => {
    const data = new FormData();
    data.append("form", JSON.stringify(form));
    data.append("name", form.name);
    data.append(
      "added_by",
      JSON.parse(localStorage.getItem("userData")).userId
    );
    data.append("photo", file);

    const resData = createBook(data);
  };

  return (
    <div
      className="tab-pane fade"
      id="settings"
      role="tabpanel"
      aria-labelledby="set-tab"
    >
      <hr />
      <Form>
        <Form.Row>
          <Col>
            <Form.Group controlId="name">
              <div className="col-xs-6">
                <Form.Label>Название</Form.Label>
                <Form.Control
                  type="text"
                  value={form.name}
                  name="name"
                  placeholder="Страх и отвращение в Лас-Вегасе"
                  required
                  onChange={changeHandler}
                />
              </div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="author">
              <div className="col-xs-6">
                <Form.Label>Автор</Form.Label>
                <Form.Control
                  type="text"
                  value={form.author}
                  name="author"
                  placeholder="Хантер Стоктон Томпсон"
                  required
                  onChange={changeHandler}
                />
              </div>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group controlId="description">
          <div className="col-xs-6">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              value={form.description}
              name="description"
              required
              onChange={changeHandler}
            />
          </div>
        </Form.Group>

        <Form.Row>
          <Col>
            <Form.Group controlId="category">
              <div className="col-xs-6">
                <Form.Label>Категория</Form.Label>
                <Form.Control
                  as="select"
                  value={form.category}
                  name="category"
                  required
                  onChange={changeHandler}
                >
                  <option value="Sci-Fi and Fantasy">Sci-Fi and Fantasy</option>
                  <option value="Mystery and Suspense">
                    Mystery and Suspense
                  </option>
                  <option value="Literature and Fiction">
                    Literature and Fiction
                  </option>
                  <option value="Novel">Novel</option>
                </Form.Control>
              </div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="price">
              <div className="col-xs-6">
                <Form.Label>Цена</Form.Label>
                <Form.Control
                  type="number"
                  value={form.price}
                  placeholder="$"
                  name="price"
                  required
                  onChange={changeHandler}
                />
              </div>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group controlId="example_Text">
          <div className="col-xs-6">
            <Form.Label>Пример текста</Form.Label>
            <Form.Control
              as="textarea"
              rows="7"
              value={form.example_text}
              name="example_text"
              placeholder="У нас было 2 пакетика травы, 75 таблеток мескалина, 5 упаковок кислоты, полсолонки кокаина и целое множество транквилизаторов всех сортов и расцветок, депрессанты, а также текила, ром, ящик пива, пинта чистого эфира и 2 дюжины ампул амилнитрита. Не то чтобы это был необходимый запас для поездки, но если начал собирать дурь, становится трудно остановиться. Единственное, что вызывало у меня опасение — это эфир. Ничто в мире не бывает более беспомощным, безответственным и порочным, чем эфирные зомби. Я знал, что рано или поздно мы перейдем и на эту дрянь."
              onChange={changeHandler}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="book_photo">
          <div className="col-xs-6">
            {/* <Form.Label>Обложка</Form.Label> */}
            <Form.File
              name="file"
              label="Обложка книги"
              data-browse="Загрузить"
              custom
              onChange={(e) => {
                const file = e.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </Form.Group>
      </Form>

      <div className="form-group">
        <div className="col-xs-12">
          <button onClick={createBookHandler}>Отправить</button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
