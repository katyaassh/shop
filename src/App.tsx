import React, { Suspense } from 'react';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SidebarContainer } from './components/SidebarContainer/SidebarContainer';
import { PagesUrlsEnum } from './enums/pagesUrls.enum';

const Catalog = React.lazy(() =>
    import('./components/Catalog/Catalog').then((module) => ({
        default: module.Catalog,
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
                        <Route path={PagesUrlsEnum.Catalog} element={<Catalog />} />
                        <Route path={PagesUrlsEnum.HowToBuy} element={<HowToBuy />} />
                        <Route path={PagesUrlsEnum.Company} element={<Company />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
