import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Author from './components/Author';

/** Pag Containers */
import Settings from './Containers/Settings';
import Portfolio from './Containers/Portfolio';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <h2>React Goodbye is a save reminder wrapper under React Router</h2>
        <ul className="nav-bar">
          <li className="nav-item">
            <NavLink
              activeClassName="active-link"
              className="nav-link"
              exact
              to="/"
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active-link"
              className="nav-link"
              to="/settings"
            >
              Settings
            </NavLink>
          </li>
        </ul>
        <div style={{ paddingLeft: '24px' }}>
          <Switch>
            <Route
              exact
              path="/"
              render={renderProps => (
                <Portfolio
                  {...renderProps}
                  initialValue="Hi stranger, edit me and change route"
                />
              )}
            />
            <Route
              path="/settings"
              render={routerProps => (
                <Settings {...routerProps} initialValue="public" />
              )}
            />
          </Switch>
        </div>
        <Author
          name="Jay Chung(xJkit)"
          githubLink="https://github.com/xJkit"
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
