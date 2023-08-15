import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/homePage/homePage';
import SearchPage from '../../pages/searchPage/searchPage';
import SearchResults from '../../pages/searchResults/searchResults';
import ContactsPage from '../../pages/contactsPage/contactsPage';
import Spinner from '../Spinners/spinerGeo/SpinnerGeo';
import { useSelector } from 'react-redux';
import { TThemeMode } from '../../types/themeMode.type';
import './app.scss';

const PageNotFound = lazy(() => import('../../pages/pageNotFound/pageNotFound'));
const AboutPage = lazy(() => import('../../pages/aboutPage/aboutPage'));

function App(): React.ReactElement {
  const themeMode = useSelector((state: TThemeMode) => state.lightMode);
  return (
    <BrowserRouter>
      <div className={`app ${themeMode ? null : 'theme_dark'}`}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/search/:id" element={<SearchResults />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
