import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import AppMode from '../appMode/appMode';
import AppFooter from '../appFooter/appFooter';
import './Layout.scss';

function Layout(): React.ReactElement {
  const addActiveClass = (props: { isActive: boolean }): string => (props.isActive ? 'active' : '');

  return (
    <>
      <header className="app__header">
        <Link to="/" className="app__logo">
          Weather
        </Link>
        <nav className="app__menu">
          <ul>
            <li>
              <NavLink className={addActiveClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={addActiveClass} to="/search">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink className={addActiveClass} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={addActiveClass} to="/contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <AppMode />
      </header>
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}

export default Layout;
