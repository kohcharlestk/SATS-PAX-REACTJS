
export default function Sidenav() {


    return (
        <>
            <ul className="sidenav" id="mobile-demo">
            <li className="pad">
            <a href="index.html" className="brand-logo"><img src="images/sats-logo-in.png" alt="SATS logo" /></a>
            </li>
            <div className="divider mt-1" />
            <li>
            <a href="index-trip.html">TRIP<i className="material-icons right">drive_eta</i></a>
            </li>
             <li>
            <a href="/index-trip-dual.html">LOGOUT<i className="small material-icons right">logout</i></a>
            </li>
            </ul>
        </>
    );
} 