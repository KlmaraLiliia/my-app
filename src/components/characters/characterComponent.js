import './characterStyle.css'
function CharacterComponent(props){
    console.log(props)
return <div>
    <img
        src={props.image}
        alt=""/>
   <p>
    {props.description}
       </p>
    </div>
}
export default CharacterComponent ;