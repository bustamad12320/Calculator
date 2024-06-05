import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={"calculator"} element={<div> Routes are working </div>}/>
                <Route path={"*"} element={<div> Temporary landing page </div>}/>
            </Routes>
        </Router>
    );
}

const entryPoint = document.getElementById('david-calculator');
const root = createRoot(entryPoint);
root.render(<App/>);