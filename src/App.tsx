import React, { Suspense } from 'react';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SidebarContainer } from './components/SidebarContainer/SidebarContainer';
import { PagesUrlsEnum } from './enums/pagesUrls.enum';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

const CatalogContainer = React.lazy(() =>
    import('./components/CatalogContainer/CatalogContainer').then((module) => ({
        default: module.CatalogContainer,
    }))
);
const HowToBuy = React.lazy(() =>
    import('./components/HowToBuy/HowToBuy').then((module) => ({
        default: module.HowToBuy,
    }))
);
const Company = React.lazy(() =>
    import('./components/Company/Company').then((module) => ({
        default: module.Company,
    }))
);

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense>
                    <Header />
                    <SidebarContainer />
                    <Routes>
                        <Route path={'/'} element={<Main />} />
                        <Route path={PagesUrlsEnum.Catalog} element={<CatalogContainer />} />
                        <Route path={PagesUrlsEnum.HowToBuy} element={<HowToBuy />} />
                        <Route path={PagesUrlsEnum.Company} element={<Company />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
