import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import LoginPage from "./pages/LoginPage";
import PrivateRouter from "./routes/PrivateRouter";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";

import AdminLayouts from "./layouts/Admin/AdminLayouts";
import ManageProduct from "./pages/admin/manageProduct";
import ManageContact from "./pages/admin/manageContact";
import MenuDetails from "./pages/MenuDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!user; // Kiểm tra đăng nhập
  const isAdmin = user?.role === 1; // Kiểm tra quyền Admin

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Trang đăng nhập */}
        <Route path="/login" element={<LoginPage />} />

        {/* Các trang không cần đăng nhập */}
        <Route
          path="/"
          element={
            <Layouts>
              <Home />
            </Layouts>
          }
        />
        <Route
          path="/about"
          element={
            <Layouts>
              <About />
            </Layouts>
          }
        />
        <Route
          path="/menu"
          element={
            <Layouts>
              <Menu />
            </Layouts>
          }
        />
        <Route
          path="/menu/:id"
          element={
            <Layouts>
              <MenuDetails />
            </Layouts>
          }
        />
        {/* Các trang yêu cầu đăng nhập */}
        <Route
          path="/contact"
          element={
            isAuthenticated ? (
              <Layouts>
                <Contact />
              </Layouts>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/pages"
          element={
            isAuthenticated && user.role === 1 ? (
              <Layouts>
                <Pages />
              </Layouts>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Trang Admin (Chỉ Admin mới vào được) */}
        <Route
          path="/product-manage"
          element={
            isAdmin ? (
              <AdminLayouts>
                <ManageProduct />
              </AdminLayouts>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/contact-table"
          element={
            isAdmin ? (
              <AdminLayouts>
                <ManageContact />
              </AdminLayouts>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
