import './Nav.css'
const { Link } = require("react-router-dom");

function Nav (){
    return <div className='nav'>
        <ul className='ul'>
            <Link to= '/'>
                <li className='li'> Welcome Page </li>
            </Link>
            <Link to='/dogs'>
                <li className='li'> Home Page </li>
            </Link>
            <Link to= '/create'>
                <li className='li'> Create your Breed </li>
            </Link>
        </ul>
    </div>
}

export default Nav