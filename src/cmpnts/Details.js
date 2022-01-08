import Duration from './Duration'

function Details(props){
    return(
        <div className="Details">
            {props.name}
            {/* <br></br> */}
            {props.mentor}
            <br></br>
            <div style={{width: "100%", height: "20px"}}>

            </div>
            <Duration duration={props.duration}/>
        </div>
    )
}

export default Details;