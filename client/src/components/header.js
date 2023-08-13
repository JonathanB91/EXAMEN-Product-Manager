import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <h1>PROJECT MANAGER</h1>
            <Link to={'/'}>Back To Dashboard</Link>
        </>
    )
}

export default Header;