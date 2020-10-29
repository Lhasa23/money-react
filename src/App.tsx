import React from 'react';
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import Tag from './views/Tag';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/tags">
                    <Tags/>
                </Route>
                <Route exact path="/tags/:id">
                    <Tag/>
                </Route>
                <Route exact path="/money">
                    <Money/>
                </Route>
                <Route exact path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

function NoMatch() {
    return <h2>404</h2>;
}

export default App;
