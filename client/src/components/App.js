import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Course from './Course'

function App() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/courses" component={Course} />
        </div>
    )
}

export default App;