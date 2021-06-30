import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand text-white">Patitas</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/perdidos">Perdidos</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/publicidad" >publicidad</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex rrss">
                    <img src="https://image.flaticon.com/icons/png/512/124/124021.png" alt="" />
                    <img src="https://image.flaticon.com/icons/png/512/2111/2111463.png" alt="" />
                    <img src="https://image.flaticon.com/icons/png/512/124/124010.png" alt="" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
