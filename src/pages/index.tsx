import React, {useState, useEffect} from 'react'
import Layout from "@/components/layout/Layout";
import UsersWidget from "@/components/widgets/users/Users.widget";
import UsersListitem from "@/components/widgets/users/Users.listitem";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false)
            })
    }, []);

    return (
        <Layout>
            {isLoading
                ? <h1>Loading...</h1>
                : <UsersWidget
                    title="Users in Audience"
                    subtitle="Total users - Showing {/counter/} matching users"
                    data={users}
                />
            }
        </Layout>
    )
}
