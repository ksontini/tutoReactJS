import './App.css';
//https://reactrouter.com/en/main/start/tutorial#setup
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";


import About from './About';
import Users from './Users';
import Home from './Home';
import NoMatch from './NoMatch';
import Layout from './Layout';

export default function App() {
  return (
    <BrowserRouter>
        {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
    </BrowserRouter> 
  );
}
