import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper.jsx';
import GenresInDb from './GenresInDb.jsx';
import LastMovieInDb from './LastMovieInDb.jsx';
import ContentRowMovies from './ContentRowMovies.jsx';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound.jsx';
import { Link, Route, Routes } from 'react-router-dom';

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span>
                    </Link>
                </li>
                
                {/*<!-- Buscador -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-search"></i>
                        <span>Search a movie</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End Microdesafio 2 -->*/}
            <Routes>
                <Route exact path="/" element={<ContentWrapper />} />
                <Route path="/GenresInDb" element={<GenresInDb />} />
                <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
                <Route path="/ContentRowMovies" element={<ContentRowMovies />} />
                <Route path="/SearchMovies" element={<SearchMovies />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/*<!-- End Microdesafio 2 -->*/}
        </>
    )
}
export default SideBar;