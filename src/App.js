import React from 'react';

import Header from "./components/Header";
import OrderMain from "./components/OrderMain";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <OrderMain/>
            <Footer/>
        </div>
    );
}

export default App;
