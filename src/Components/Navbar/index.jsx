import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = 'underline-offset-3';
  
  return (
    <nav className='bg-gray-900 text-white p-4'>
      <ul className='flex justify-start items-center'>
        <li className='font-semibold text-lg'>
          <NavLink to='/' className={`p-2 ${activeStyle} border border-white rounded transition duration-300 hover:bg-gray-800`}>
            AlphaStore
          </NavLink>
        </li>
        <li>
          <NavLink to='/Home' className={`p-2 ${activeStyle} border border-white rounded transition duration-300 hover:bg-gray-800`}>
          Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/Developers' className={`p-2 ${activeStyle} border border-white rounded transition duration-300 hover:bg-gray-800`}>
            Developers
          </NavLink>
        </li>
        <li>
          <NavLink to='/Projects' className={`p-2 ${activeStyle} border border-white rounded transition duration-300 hover:bg-gray-800`}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/About-me' className={`p-2 ${activeStyle} border border-white rounded transition duration-300 hover:bg-gray-800`}>
            About me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
