import Clock from "react-live-clock";


export default function ClockWidget() {
    return (
        <div className='clock'>
            <Clock
              format={"HH:mm A"}
  						ticking={true}
							blinking={true}
  						timezone={"Rok"} 
						/>
        </div>
    )
}