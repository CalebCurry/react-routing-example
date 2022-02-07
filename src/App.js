import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from './pages/User';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<User />} />
                    
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
