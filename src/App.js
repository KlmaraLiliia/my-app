
import './App.css';
 import CharacterComponent from "./components/characters/characterComponent";
 import Planets from "./components/universe/planets";

function App() {

  return (

<div>
   <CharacterComponent description={'dark'} image={'https://game-tournaments.com/media/logo/t65739.png?7'}/>
  <CharacterComponent description={'star'} image ={'https://cdn3.vectorstock.com/i/1000x1000/88/12/star-check-shape-gold-logo-vector-15008812.jpg'}/>
    <Planets
        img = {'https://image.shutterstock.com/image-vector/space-planets-asteroid-moon-fantastic-260nw-1051255550.jpg'}
    />
  <Planets
        number = {1}
        name ={'. Mercury'}
        diameter ={'4,878 km'}
        days ={'59 Earth days'}
        img ={'https://i1.wp.com/www.webbyfeed.com/wp-content/uploads/2020/03/mercury.jpg?fit=837%2C836&ssl=1'}
    />
    <Planets
        number = {2}
        name ={'. Venus'}
        diameter ={'12,104 km'}
        days ={'225 Earth days'}
        img = {'http://ipfactly.com/wp-content/uploads/2014/01/venus400.jpg'}
        />
</div>

  );
}
export default App;
