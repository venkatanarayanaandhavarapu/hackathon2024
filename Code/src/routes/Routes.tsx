import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "../components/HomePage";
import UploadPage from "../components/UploadPage";
import InnerContent from "../components/InnerContent";

export const MainRoutes=() => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<InnerContent/>}>
                    <Route path="/" element={<Navigate replace to="home" />} />
                    <Route path="/home" element={<HomePage/>} />
                    <Route path="/upload" element={<UploadPage/>} />
                </ Route>
            </Routes>
        </div>
    );
}