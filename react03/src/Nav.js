import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
       <Link to="/"> [ Home ] </Link>
       <Link to="/users"> [ All users ] </Link>
       <Link to="/users/123"> [ User123 ] </Link>
       <Link to="/users/me"> [ User me ] </Link>
    </nav>
  )
}

export default Nav