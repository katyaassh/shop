import React from "react";
import {Header} from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <main>
                    Тут все будет
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
