import React, {Suspense} from 'react';
import s from './App.module.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import clsx from "clsx";
import {Profile} from "./pages/Profile/Profile";
import {Feed} from "./pages/Feed/Feed";
import {Messages} from "./pages/Messages/Messages";
import {Friends} from "./pages/Friends/Friends";
import {Groups} from "./pages/Groups/Groups";
import {Photos} from "./pages/Photos/Photos";

function App() {
    return (
        <BrowserRouter>
            <Suspense>
                <div className={s.app}>
                    <Header/>
                    <main className={clsx('container', s.main)}>
                        <Navbar/>
                        <Routes>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/feed' element={<Feed/>}/>
                            <Route path='/messages' element={<Messages/>}/>
                            <Route path='/friends' element={<Friends/>}/>
                            <Route path='/groups' element={<Groups/>}/>
                            <Route path='/photos' element={<Photos/>}/>
                        </Routes>
                    </main>
                </div>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
