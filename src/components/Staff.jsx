export default function Staff(props) {
    return (
        <>
        <div className="container">
        <div className="row mt-1">
        <div className="col s8">
        <div className="title-wel">Welcome!</div>
        <div className="title-name">{props.staffname}</div>
        </div>
        <div className="col s4">
        <div className="title-wel">Staff ID No.</div>
        <div className="title-name">{props.staffid}</div>
        </div>
        </div>
        </div> 
        <div className="divider mt-1"></div> 
        </>
    )
}