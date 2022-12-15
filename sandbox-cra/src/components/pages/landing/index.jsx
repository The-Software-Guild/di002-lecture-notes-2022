// landing index.jsx
// compose the landign UI made up of many other components and stuff
import { Outlet } from 'react-router-dom';

import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

function Landing() {
     return (
          <>
               <Navbar />
               {/* refactor this portion to be dynamic
               meaning I need toa ccount for any matching child routes */}
               
               {/* this outlet is amtching child routes from '/landing' in file app.jsx */}
               <Outlet /> 
               
               <Footer />
          </>
     );
};

export default Landing;
