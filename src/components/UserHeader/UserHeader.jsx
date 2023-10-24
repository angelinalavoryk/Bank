import React from 'react';
import './_UserHeader.scss';




function UserHeader() {
  return (
    <div className='userHeader'>
        <div className="header">
            <h1 className='headerWelcomeTxt'>Welcome back</h1>
            <h2 className='headerWelcomeName'>Name</h2>
                <button className="edit-button">Edit Name</button>
        </div>

        <div>
            <form className="editNameContent">
                <div className="editNameInputs">
                    <input
                    type="text"
                    placeholder="Tony"
                    required
                    />
                    <input
                    type="text"
                    placeholder="Jarvis"
                    required
                    />
                </div>
                <div className="editNameButtons">
                    <button className="editName-button" type="submit">Save</button>
                    <button className="editName-button cancel">Cancel</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default UserHeader;