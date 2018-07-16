import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const Main = () => {
    return <h1> Witaj na stronie </h1>
}



const Home = () => {
    return <h1> Witaj na stronie </h1>
}

const Blog = () => {
    return <h1> Blog </h1>
}

const Pricing = () => {
    return <h1> Cennik </h1>
}

const activeStyle = {
    backgroundColor:'green'
};

class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <div><h1>Aplikacja React z React Router
                    <ul>
                        <li>
                            <NavLink to="/blog" activeStyle={activeStyle}> blog </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" activeStyle={activeStyle}> cennik </NavLink>
                        </li>
                    </ul></h1></div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/pricing' component={Pricing} />
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