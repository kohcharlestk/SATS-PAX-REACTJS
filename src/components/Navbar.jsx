

export default function Navbar() {

  $(document).ready(function () {
    $('.sidenav').sidenav();
});


 
    return (
        <nav>
        <div className="nav-wrapper">
          <div className="container">
            <a href="index.html" className="brand-logo">
              <img src="images/sats-logo.png" alt="SATS logo" className="logo" />
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger right hide-on-large-only">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
    
              <li>
                <a href="logout.html">
                  LOGOUT<i className="material-icons right">logout</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="sidenav" id="mobile-demo">
            <li className="pad">
            <a href="index.html" className="brand-logo"><img src="images/sats-logo-in.png" alt="SATS logo" /></a>
            </li>
            <div className="divider mt-1" />
             <li>
            <a href="#logout">LOGOUT<i className="small material-icons right">logout</i></a>
            </li>
            </ul>

            <div id="logout" className="modal">
            <div className="modal-content">
            <p className="center h1">Logging out</p>
            </div>
            <div className="modal-content center">
            <a href="#!" className="modal-close waves-effect waves-red btn-large" id="btn-confirm-1">CONFIRM</a>
            </div>
            </div>
      </nav>
      
    );
}

