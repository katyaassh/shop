import React from "react";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {SidebarContainer} from "./components/SidebarContainer/SidebarContainer";
import {Catalog} from "./components/Catalog/Catalog";
import {HowToBuy} from "./components/HowToBuy/HowToBuy";
import {Company} from "./components/Company/Company";

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <SidebarContainer/>
                    <Routes>
                        <Route path='/catalog' element={<Catalog/>}/>
                        <Route path='/howtobuy' element={<HowToBuy/>}/>
                        <Route path='/company' element={<Company/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
