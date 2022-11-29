import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"

import { useState, Fragment } from 'react'


import HomePage from "../pages/home/HomePage"

function AppRouter() {

  return (
    <Fragment>
        <HashRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/*" element={<div> This page does not exits </div>} />
            </Routes>
        </HashRouter>
    </Fragment>
  )
}

export default AppRouter;
