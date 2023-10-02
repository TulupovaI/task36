import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../actions';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import Nav from "./Nav";
import "./EditContact.css";

function EditContact() {
 const dispatch = useDispatch();
 const { id } = useParams();
 const navigate = useNavigate();

  
 const contacts = useSelector(state => state.contacts);

 const contact = contacts.find(contact => contact.id === parseInt(id));
 console.log(contact)
  if (!contact) return <div>Contact not found</div>;
  
  const [editedContact, setEditedContact] = useState(contact);

  const handleEditContact = (e) => {
    e.preventDefault();
    dispatch(editContact(editedContact));
    navigate('/');
  };
  
  useEffect(() => {
    setEditedContact(contact);
  }, [contact]);

 

  return (
    <>
    <Nav/>
    
    <div className="edit-contact">
       <h2>Редагування контакту</h2>
       <form onSubmit={handleEditContact}>
        <div className="inp">
          <label htmlFor="name">Ім'я:</label>
            <input
            type="text"
            id="name"
            name="name"
            value={editedContact.name}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />

          <label htmlFor="username">Прізвище:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={editedContact.username}
            onChange={(e) =>
              setEditedContact({ ...editedContact, username: e.target.value })
            }
          />

          <label htmlFor="phone">Телефон:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={editedContact.phone}
            onChange={(e) =>
              setEditedContact({ ...editedContact, phone: e.target.value })
            }
          />
        </div>

          <div className="buttons">
            <button className="btn-form" type="submit">Зберегти</button>
            <NavLink to="/" className="btn-form">Скасувати</NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditContact;






