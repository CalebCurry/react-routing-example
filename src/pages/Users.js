import { Link } from "react-router-dom";

function UsersPage() {
    const users = [
        {
            id: 542,
            name: "Caleb",
        },
        {
            id: 43,
            name: "Claire",
        },
    ];

    return (
        <div>
            <p>This is the Users Page</p>
            <ul>
                {users.map((user) => {
                    return (
                        <li>
                            <Link to={"/users/" + user.id}>{user.id}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default UsersPage;
