import React from 'react';
import { TestNavbar, TestJumboTron, PageFooter, TestCard } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <TestNavbar/>

            <TestJumboTron />

            <TestCard />

            <PageFooter />

        </div>
        )
};

export default App;