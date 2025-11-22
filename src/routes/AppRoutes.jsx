// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Category from "../pages/Category";
import Game from "../pages/Game";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/category'
          element={<Category />}
        />
        <Route
          path='/game'
          element={<Game />}
        />
      </Route>

      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  );
}
