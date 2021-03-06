import React from 'react';



function UserThumbPreview(props) {

    const { user, changeView} = props;
    const { username, profilePicURL } = user;

    function handleClick(e) {
        changeView(e.target.dataset.target, user)
    }

    return (
        <div className="mx-2 mb-3"> 
            <div className="d-flex flex-column">
                <div data-target="profile" onClick={handleClick}>{  username }</div>
                <img data-target="profile" className="img-thumbnail img-sm" src={profilePicURL} onClick={handleClick}/>
                <button data-target="dm" type="button" className="btn btn-sm btn-success" onClick={handleClick}>slide into their DM </button>
            </div>
        </div>
    );
}

export default UserThumbPreview;
