
export default function TripToHome(props)  {

    return(
        <>
          <div className="container">
    <div className="row mt-1">
      <div className="col s12">
        <div className="title-category">TRIP DETAILS</div>
      </div>
      <div className="col s6">
        <div className="title-ref right"></div>
      </div>
    </div>
  </div>
        <div className="container">
  <div className="card-home z-depth-1">
    <div className="row">
      <div className="col s2">
        <i className="material-icons teal-text icon-sz">home</i>
      </div>
      <div className="col s7">
        <div className="title-dat-h">DATE</div>
        <div className="title-dat-1">{props.date}</div>
      </div>
      <div className="col s3">
        <div className="title-dat-h">TIME </div>
        <div className="title-dat-1">{props.time}</div>
      </div>
    </div>
    <div className="divider mb1" />
    <div className="row">
      <div className="col s2" />
      <div className="col s10">
        <div className="title-dat-h">VEHICLE NO. </div>
        <div className="title-dat-1">{props.vehicleno}</div>
      </div>
    </div>
    <div className="divider mb1" />
    <div className="row">
      <div className="col s2" />
      <div className="col s10">
        <div className="title-dat-h">PICK UP </div>
        <div className="title-dat-1">{props.pickup}</div>
      </div>
    </div>
    <div className="row">
      <div className="col s2" />
      <div className="col s10">
        <div className="title-dat-h">DROP OFF </div>
        <div className="title-dat-1">{props.dropoff}</div>
        <div className="title-dat-1" id="postal_h_1">
          S{props.postal}
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}