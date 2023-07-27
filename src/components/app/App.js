import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "../header/Header";
import Footer from "../footer/Footer";
import { MainPage, CoffeePage, GoodsPage, NotFound } from '../pages';


const App = () => {
        return (
            <Router>
                <Header/>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/CoffeePage" element={<CoffeePage />} />
                        <Route path="/GoodsPage" element={<GoodsPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>  
                <Footer/>
            </Router>
        )
    
}

export default App;




