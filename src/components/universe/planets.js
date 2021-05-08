import './planets.css'
export default function Planets(props){
    let {number,name,diameter,days} = props;
    return (
        <div>
            <img src= {props.img}
                 alt=""/>
            <h2>{number}{name}</h2>
            <p>{diameter}</p>
            <p>{days}</p>
        </div>
    )
}