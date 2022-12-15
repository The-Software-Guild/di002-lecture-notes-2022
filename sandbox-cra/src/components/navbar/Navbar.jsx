// navbar.jsx
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
     const navigate = useNavigate();

     const handlePokemonNav = () => {
          // navigate to pokemon page
          navigate('/landing/pokemon');
     }

     return (
          <div>
               {/* just <a /> html tags */}
               <Link to={'/landing/counter'}>Counter Page</Link>

               <p
                    style={{ cursor: 'pointer' }}
                    onClick={handlePokemonNav}>
                    Pokemon Page
               </p>
          </div>
     );
};

export default Navbar;