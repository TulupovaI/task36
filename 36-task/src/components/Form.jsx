import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../actions';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Nav from "./Nav";
import "./Form.css";


function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const contacts = useSelector(state => state.contacts); // Получение контактов из state

  function submitFormHandler(e) {
    e.preventDefault();
    // Вычисление нового уникального id для контакта
    const newId = contacts.length ? Math.max(...contacts.map(c => c.id)) + 1 : 1; 
    
    dispatch(addContact({ id: newId, username, name, phone })); // Добавление нового id в объект контакта
    navigate('/');
    setUsername("");
    setName("");
    setPhone("");
  }

  return (
    <>
    <Nav/>
    <div className="wrapper">
      <form className="new-user">
        <label htmlFor="username">Введіть своє прізвище:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="name">Введіть своє ім'я:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phone">Введіть номер телефону:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="buttons">
        <button className="btn-form" onClick={submitFormHandler}>
          Зберегти
        </button>

          
          <NavLink to="/" className="btn-form">
            Скасувати
          </NavLink>
        </div>
      </form>
    </div>
  </>  
  );
}

export default Form;
