import React, { useContext } from 'react'
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) {
        return <div>Login to yourSelf</div>
    } else {
        return <div>Welcome dosto {user.username}</div>
    }
}

export default Profile;
