import React, {FunctionComponent, useState} from 'react'
import UsersListItem from "@/components/widgets/users/Users.listitem";
import UsersDetails from "@/components/widgets/users/Users.details";
import type {UsersWidgetProps} from '../../../interfaces'
import styles from './Users.widget.module.css'

const UsersWidget: FunctionComponent<UsersWidgetProps> = ({data, title, subtitle}) => {
    const [displayedUser, setdisplayedUser] = useState(data[0]);
    const text = subtitle.replace('{/counter/}', ` ${data.length} `);

    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <h4>{text}</h4>
                </div>
                <div className={styles.list}>
                    {data.map(user => {
                        user.onClickHandler = (elem: any) => {
                            setdisplayedUser(elem);
                        };
                        return (
                            <UsersListItem key={user.id} {...user}  />
                        )
                    })}
                </div>
            </div>
            <div className={styles.detailsWrapper}>
                {data.length > 0 ? <UsersDetails {...displayedUser}/> : <></>}
            </div>
        </div>
    )
};

export default UsersWidget;
