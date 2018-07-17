import React from 'react';
import {Header} from './header/header.jsx'

class App extends React.Component {
    render(){
       return  <div>
            <h1>Hello world</h1>
           <Header/>
       </div>
    }
}

export {App}