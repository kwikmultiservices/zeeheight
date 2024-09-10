import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductUploadForm from "./pages/Dashboard";
import Dashboard from "./pages/MainDasboard";
import ViewProduct from "./comp/ViewProduct";
import ProductDetail from "./pages/ProductDetails";

// import Rentals from "./page/Rentals";
// import About from "./page/About-Us";
// import Contact from "./page/Contact-Us";

// import AdminDashboard from "./page/AdminDashboard";
// import ViewsUsers from "./page/ViewsUsers";
// import Product from "./page/Product";
// import CreateProduct from "./page/CreateProduct";
// import EditProduct from "./page/EditProduct";
// import Allaitem from "./page/AllProduct";
// import ProductCart from "./page/ProductCart";
// import SupportList from "./page/SupportList";
// import Categories from "./page/Categories";
// import AllProductitem from "./page/GetAppProduct";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/dashboard/admin" element={<Dashboard />} />
            <Route path="/upload/admin" element={<ProductUploadForm />} />
            <Route path="/upload/product" element={<ViewProduct />} />
            <Route path="/products/:productName" element={<ProductDetail />} />
            {/* <Route path="/gallery" element={<Rentals />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
           
            <Route path="/auth/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/dashboard/users" element={<ViewsUsers />} />
            <Route path="/dashboard/product" element={<Product />} />
            <Route path="/new/product" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="/product/brands" element={<Allaitem />} />
            <Route path="/dashboard/contact" element={<SupportList />} />
            <Route path="/get-product/:category" element={<Categories />} />
            <Route path="/entry-product" element={<AllProductitem />} />
            <Route path="/product/brands/checkout/:id" element={<ProductCart />} /> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
