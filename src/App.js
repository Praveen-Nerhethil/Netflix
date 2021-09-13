import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,comedy,horror,romance,documents} from './links/links'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netfilx Originals' />
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={romance} title='Romance' isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
     <RowPost url={documents} title='Documentaries' isSmall/>

    </div>
  );
}

export default App;
