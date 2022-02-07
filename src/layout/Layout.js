import { Link } from 'react-router-dom';

function Layout(props) {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>

            {props.children}
        </div>
    );
}

export default Layout;
