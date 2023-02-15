import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Menu from "./Components/Menu";
import Footer from "Components/Footer";
import DefaultPage from "Components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "Components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />}></Route>
        </Route>

        <Route path="posts/:id" element={<Post></Post>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
