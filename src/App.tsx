import React, {Suspense} from "react";
import s from "./App.module.scss";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import clsx from "clsx";


const Profile = React.lazy(() => import('./pages/Profile/Profile').then((module) => ({
    default: module.Profile
})));

const Feed = React.lazy(() => import('./pages/Feed/Feed').then((module) => ({
    default: module.Feed
})));

const Messages = React.lazy(() => import('./pages/Messages/Messages').then((module) => ({
    default: module.Messages
})));

const Friends = React.lazy(() => import('./pages/Friends/Friends').then((module) => ({
    default: module.Friends
})));

const Groups = React.lazy(() => import('./pages/Groups/Groups').then((module) => ({
    default: module.Groups
})));

const Photos = React.lazy(() => import('./pages/Photos/Photos').then((module) => ({
    default: module.Photos
})));


function App() {
    return (
        <BrowserRouter>
            <div className={s.app}>
                <Header/>
                <main className={clsx('container', s.main)}>
                    <Navbar/>
                    <div className={s.content}>
                        <Suspense fallback={<div>loading...</div>}>
                            <Routes>
                                <Route path='/profile' element={<Profile/>}/>
                                <Route path='/feed' element={<Feed/>}/>
                                <Route path='/messages' element={<Messages/>}/>
                                <Route path='/friends' element={<Friends/>}/>
                                <Route path='/groups' element={<Groups/>}/>
                                <Route path='/photos' element={<Photos/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
