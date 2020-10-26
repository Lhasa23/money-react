import React from 'react';
import './App.css';
import styled from "styled-components";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Nav from "./components/Nav";
import Layout from "./components/Layout";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App () {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags/>
                        </Route>
                        <Route path="/money">
                            <Money/>
                        </Route>
                        <Route path="/statistics">
                            <Statistics/>
                        </Route>
                        <Redirect exact from="/" to="/money"/>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Main>
            </Wrapper>
        </Router>
    );
}

function Tags() {
    return (
        <Layout>
            <h2>Tags</h2>
        </Layout>
    );
}

function Statistics() {
    return (
        <Layout>
            <h2>Statistics</h2>
        </Layout>
    );
}

function Money() {
    return (
        <Layout>
            <h2>Money</h2>
        </Layout>
    );
}

function NoMatch() {
    return <h2>404</h2>;
}

export default App;
