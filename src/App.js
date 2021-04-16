import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={ToDoList} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
