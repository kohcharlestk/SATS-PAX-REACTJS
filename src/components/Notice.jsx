

export default function Notice() {

    function removeEle() {
        const element = document.getElementById("alert");
        element.remove();
      }

 
    return (
        <>
        <div className="container mt-1" id="alert">
        <div className="row">
        <div className="col s12 red lighten-1 white-text">
        <div className="text-imp-bd">IMPORTANT !</div>
        <button href="#!" className="btn right teal lighten-1 mt-1" id="alert-confirm" onClick={removeEle}>ok</button>
        <div className="text-imp-1">NEW VEHICLE NO.:</div>
        <div className="text-imp">SMC 8800 Z</div> 
        </div>
        </div>
        </div>
        </>
    )
}