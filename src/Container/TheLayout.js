import React from "react";

import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
import TheContent from "./TheContent";


import { BrowserRouter as Router } from 'react-router-dom'


export default function ThLayout() {

    const loading = (
        <div className="pt-3 text-center">
            <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
    );

    return (
        <>
            <Router>
                <TheHeader />
                <React.Suspense fallback={loading}>
                        <TheContent />
                </React.Suspense>
            </Router>
            <TheFooter />
        </>
    );
}

