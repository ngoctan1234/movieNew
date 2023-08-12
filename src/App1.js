
import Students from "./components/Students";
import List from "./components/List";
import TestUseEffect from "./components/TestUseEffect";
import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import { Button, Modal, Nav } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Menu from "./components/menu/Menu";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route, Link } from "react-router-dom"
export default function App() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Menu</Link>
                    <Link to="/sidebar">Sidebar</Link>
                </li>

            </ul>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/sidebar" element={<Sidebar />} />
            </Routes>
        </div>
    )
}