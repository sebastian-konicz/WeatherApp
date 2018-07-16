import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


const Home = () => {
    return <p> Aplikacja React </p>
}



const HelloYou = (props) => {
    console.log(props.match)
    return <h1>
        Witaj {props.match.params.name}
    </h1>
}

const CheckAge = (props) => {

    return <h1>
        { props.match.params.age >= 18  ? 'Pełnoletni' : 'Niepełnoletni' }
    </h1>
}
class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  path='/hello/:name' component={HelloYou} />
                    <Route  path='/checkage/:age' component={CheckAge} />
                </Switch>
            </div>
        </HashRouter>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});