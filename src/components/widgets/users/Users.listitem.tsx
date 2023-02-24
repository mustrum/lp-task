import React, {FunctionComponent} from 'react';
import type {User} from '../../../interfaces'
import styles from './Users.widget.module.css'

const UsersListItem: FunctionComponent<User> = user => {
    const {id, devices, sessions, location} = user;
    const displayedText = `${devices} Devices - ${sessions?.length} Sessions - ${location}`;

    return (
        <div className={styles.listitem} onClick={() => {
            user.onClickHandler(user);
        }}>
            <h3 className="bold">{id}</h3>
            <p>{displayedText}</p>
        </div>
    )
};

export default UsersListItem;
