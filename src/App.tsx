import React, { Suspense } from 'react';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SidebarContainer } from './components/SidebarContainer/SidebarContainer';
import { PagesUrlsEnum } from './enums/pages-urls.enum';
import { MainContainer } from './components/pages/MainContainer/MainContainer';
import { Footer } from './components/Footer/Footer';
import s from './App.module.scss';

const CatalogContainer = React.lazy(() =>
    import('./components/pages/CatalogContainer/CatalogContainer').then((module) => ({
        default: module.CatalogContainer,
    }))
);
const HowToBuy = React.lazy(() =>
    import('./components/pages/HowToBuy/HowToBuy').then((module) => ({
        default: module.HowToBuy,
    }))
);
const Company = React.lazy(() =>
    import('./components/pages/Company/Company').then((module) => ({
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
                    <div className={s.wrapper}>
                        <Routes>
                            <Route path={PagesUrlsEnum.Main} element={<MainContainer />} />
                            <Route path={PagesUrlsEnum.Catalog} element={<CatalogContainer />} />
                            <Route path={PagesUrlsEnum.HowToBuy} element={<HowToBuy />} />
                            <Route path={PagesUrlsEnum.Company} element={<Company />} />
                        </Routes>
                    </div>
                    <Footer />
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
