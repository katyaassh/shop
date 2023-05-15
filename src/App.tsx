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
import { RequireAuth } from './components/common/RequireAuth/RequireAuth';
import { ProfileUrlsEnums } from './enums/profile-urls.enums';
import { Orders } from './components/pages/ProfileContainer/Profile/Orders/Orders';
import { CartContainer } from './components/pages/ProfileContainer/Profile/CartContainer/CartContainer';
import { AdministrationUrlsEnums } from './enums/administration-urls.enums';
import { ProductsContainer } from './components/pages/ProfileContainer/Profile/AdministrationContainer/Administration/Products/ProductsContainer';
import { Administration } from './components/pages/ProfileContainer/Profile/AdministrationContainer/Administration/Administration';
import { ProductForm } from './components/pages/ProfileContainer/Profile/AdministrationContainer/Administration/Products/ProductForm/ProductForm';
import { Products } from './components/pages/ProfileContainer/Profile/AdministrationContainer/Administration/Products/Products/Products';
import { Filters } from './components/pages/ProfileContainer/Profile/AdministrationContainer/Administration/Filters/Filters';
import { OrderItems } from './components/pages/ProfileContainer/Profile/Orders/OrderItems/OrderItems';
import { OrderContainer } from './components/pages/ProfileContainer/Profile/Orders/OrderContainer/OrderContainer';
import { PrivateRoute } from './components/common/PrivateRoute/PrivateRoute';
import { HowToBuy } from './components/pages/HowToBuy/HowToBuy';
import { Company } from './components/pages/Company/Company';
import { PersonalContainer } from './components/pages/ProfileContainer/Profile/PersonalContainer/PersonalContainer';

const CatalogContainer = React.lazy(() =>
    import('./components/pages/CatalogContainer/CatalogContainer').then((module) => ({
        default: module.CatalogContainer,
    }))
);
const AdministrationContainer = React.lazy(() =>
    import('./components/pages/ProfileContainer/Profile/AdministrationContainer/AdministrationContainer').then((module) => ({
        default: module.AdministrationContainer,
    }))
);
const ProductContainer = React.lazy(() =>
    import('./components/pages/ProductContainer/ProductContainer').then((module) => ({
        default: module.ProductContainer,
    }))
);
const SignUpContainer = React.lazy(() =>
    import('./components/pages/SignUpContainer/SignUpContainer').then((module) => ({
        default: module.SignUpContainer,
    }))
);
const SignInContainer = React.lazy(() =>
    import('./components/pages/SignInContainer/SignInContainer').then((module) => ({
        default: module.SignInContainer,
    }))
);
const OrderFormContainer = React.lazy(() =>
    import('./components/pages/OrderFormContainer/OrderFormContainer').then((module) => ({
        default: module.OrderFormContainer,
    }))
);
const ProfileContainer = React.lazy(() =>
    import('./components/pages/ProfileContainer/ProfileContainer').then((module) => ({
        default: module.ProfileContainer,
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
                            <Route index element={<MainContainer />} />
                            <Route path={PagesUrlsEnum.Catalog} element={<CatalogContainer />} />
                            <Route path={`${PagesUrlsEnum.Catalog}/:id`} element={<ProductContainer />} />
                            <Route path={PagesUrlsEnum.HowToBuy} element={<HowToBuy />} />
                            <Route path={PagesUrlsEnum.Company} element={<Company />} />
                            <Route path={PagesUrlsEnum.SignUp} element={<SignUpContainer />} />
                            <Route path={PagesUrlsEnum.SignIn} element={<SignInContainer />} />
                            <Route
                                path={PagesUrlsEnum.OrderForm}
                                element={
                                    <RequireAuth>
                                        <OrderFormContainer />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path={PagesUrlsEnum.Profile}
                                element={
                                    <RequireAuth>
                                        <ProfileContainer />
                                    </RequireAuth>
                                }
                            >
                                <Route index element={<PersonalContainer />} />
                                <Route path={ProfileUrlsEnums.Orders} element={<Orders />}>
                                    <Route index element={<OrderItems />} />
                                    <Route path={`:id`} element={<OrderContainer />} />
                                </Route>
                                <Route path={ProfileUrlsEnums.Cart} element={<CartContainer />} />
                                <Route
                                    path={ProfileUrlsEnums.Administration}
                                    element={
                                        <PrivateRoute>
                                            <AdministrationContainer />
                                        </PrivateRoute>
                                    }
                                >
                                    <Route index element={<Administration />} />
                                    <Route path={AdministrationUrlsEnums.Products} element={<ProductsContainer />}>
                                        <Route index element={<Products />} />
                                        <Route path={'productForm'} element={<ProductForm />} />
                                        <Route path={`productForm/:id`} element={<ProductForm />} />
                                    </Route>
                                    <Route path={AdministrationUrlsEnums.Filters} element={<Filters />} />
                                </Route>
                            </Route>
                        </Routes>
                    </div>
                    <Footer />
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
