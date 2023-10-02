import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../actions';
import Modal from "./Modal";
import Nav from "./Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectMemoizedContacts } from '../selector'; 
import "./Contacts.css";

function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectMemoizedContacts);    
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();
  

  const navigateToEdit = (id) => {
    console.log(id)
    navigate(`/edit/${id}`);
  };

  const openModal = (id) => {
    console.log(contacts)
    setSelectedContact(id);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const confirmDelete = () => {
    dispatch(deleteContact(selectedContact)); 
    closeModal();
  };

  return (
    <>
      <Nav />
      <Modal show={showModal} onClose={closeModal} onConfirm={confirmDelete} />
      <div className="contacts">
        <h2>Список контактів</h2>
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Телефон</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
          {contacts && contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id}> 
                <td>{contact.name}</td>
                <td>{contact.username}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => openModal(contact.id)}>Видалити</button>
                  <button onClick={() => navigateToEdit(contact.id)}>Редагувати</button>
                </td>
              </tr>
              ))
            ) : (
              <tr key="no-contacts">
                <td colSpan="4">
                  <p>Нет контактов</p>
                </td>
              </tr>
            )}

            </tbody>

          </table>
         </div>
      </>
  );
}

export default Contacts;
