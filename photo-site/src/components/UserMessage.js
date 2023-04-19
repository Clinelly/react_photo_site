import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm Email</li>
                    <li>Complete Profile</li>
                    <li>Subscribe to Newsletter</li>
                </ol>
            </div>
        ) : (
            <p>Please sign in.</p>
        ) }
    </div>
  )
}

export default UserMessage