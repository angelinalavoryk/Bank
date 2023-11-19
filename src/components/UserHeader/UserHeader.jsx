import React, { useState } from 'react';
import './_UserHeader.scss';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectFirstName, makeSelectLastName } from '../../store/selectors.js';
import { updateUserName } from '../../store/authAction.js';

function UserHeader() {
  const firstName = useSelector(makeSelectFirstName); 
  const lastName = useSelector(makeSelectLastName);
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const dispatch = useDispatch();
  //open
  const handleEditClick = () => {
    setIsEditing(true);
  };
  //close
  const handleCancelClick = () => {
    setIsEditing(false);
    setNewFirstName(firstName); // réinitialise les valeurs à celles actuelles
    setNewLastName(lastName);
  };

  //save
  const handleSaveClick = () => {
    // Envoyer la mise à jour au backend
    dispatch(updateUserName(newFirstName, newLastName));
    setIsEditing(false);
  };

  return (
    <div className='userHeader'>
      <div className="header">
        <h1 className='headerWelcomeTxt'>Welcome back</h1>
        {isEditing ? (
          <div className="sectionEditName">
            <div className="editNameInputs">
              <input
                className='inputEditName'
                type="text"
                placeholder="Tony"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
              <input
                className='inputEditName'
                type="text"
                placeholder="Jarvis"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
            </div>
            <div className="editNameButtons">
              <button className="editName-button save" onClick={handleSaveClick}>Save</button>
              <button className="editName-button cancel" onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="headerWelcomeName">
            <h2 className='headerWelcomeName'>{firstName}  {lastName} !</h2>
            <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserHeader;



