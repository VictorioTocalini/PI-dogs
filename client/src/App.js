import './App.css';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Formulario from './components/form';
import Cards from './components/Cards';
import { GET_DOGS,GET_BY_NAME,GET_BY_ID,GET_TEMPERAMENT } from "./actions/constantes";
import DogDetail from './components/DogDetail';
import Welcome from './components/Welcome';
import Nav from './components/Nav'

function App(props) {
  return (
    <div className="App">
        <Route path='/'>
          <Nav/>
        </Route>
        <Route exact path='/'>
         <Welcome></Welcome>
        </Route>
        <Route exact path= '/dogs'>
          <Cards/>
        </Route>
        <Route path= '/dogs/:id'>
          <DogDetail />
        </Route>
        <Route exact path='/create'>
          <Formulario />
        </Route>
    </div>
  );
};

function mapStateToProps(state){
  return{
    dogs: state.dogs,
    temperament: state.temperament,
    dogByName: state.dogByName,
    dogById: state.dogById
  }
}

function mapDispatchToProps(dispatch){
  return{
    get_dogs: () => dispatch({type: GET_DOGS}),
    get_by_name: ()=> dispatch({type: GET_BY_NAME}),
    get_by_id: ()=> dispatch({type: GET_BY_ID}),
    get_temperament: ()=> dispatch({type: GET_TEMPERAMENT}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

