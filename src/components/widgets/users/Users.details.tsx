import React, {FunctionComponent} from 'react';
import type {User} from '../../../interfaces'
import styles from './Users.widget.module.css'

const UsersDetails: FunctionComponent<User> = user => {
    const {
        id,
        created,
        devices,
        sessions,
        location,
        events,
        attributes,
    } = user;

    return (
        <div className={styles.details}>
            <h1>{id}</h1>
            <h4>{created} - {location}</h4>
            <div className={styles.tilesWrapper}>
                <div className={styles.tile}>
                    <h3>Devices</h3>
                    <p>{devices}</p>
                </div>
                <div className={styles.tile}>
                    <h3>Sessions</h3>
                    <p>{sessions?.length}</p>
                </div>
                <div className={styles.tile}>
                    <h3>Events</h3>
                    <p>{events}</p>
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Attributes</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(attributes).map(entry => <tr key={`${entry[0]}-${entry[1]}`}>
                    <td>{entry[0]}</td>
                    <td>{entry[1]}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    )
}


export default UsersDetails;
