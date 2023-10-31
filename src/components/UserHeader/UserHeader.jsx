import React, { useState } from 'react';
import './_UserHeader.scss';
import { useSelector } from 'react-redux';
import { makeSelectFirstName, makeSelectLastName } from '../../store/selectors.js';

function UserHeader() {
  const firstName = useSelector(makeSelectFirstName); 
  const lastName = useSelector(makeSelectLastName);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  // annuler la modification et masquer le formulaire
  const handleCancelClick = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className='userHeader'>
      <div className="header">
        <h1 className='headerWelcomeTxt'>Welcome back</h1>
        {isEditing ? (
          <div className="sectionEditName">
            <form className="editNameContent" >
              <div className="editNameInputs">
                <input
                  className='inputEditName'
                  type="text"
                  placeholder="Tony"
                  required
                />
                <input
                  className='inputEditName'
                  type="text"
                  placeholder="Jarvis"
                  required
                />
              </div>
              <div className="editNameButtons">
                <button className="editName-button" type="submit">Save</button>
                <button className="editName-button cancel" onClick={handleCancelClick}>Cancel</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="headerWelcomeName">
            <h2 className='headerWelcomeName'>{firstName} {lastName} !</h2>
            <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserHeader;




