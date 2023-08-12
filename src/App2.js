import { Route, Routes } from "react-router-dom";
import Home from "./pages2/home/Home";
import './App.css';
import MovieList from "./components2/movieList/MovieList";
import Header from "./components2/header/Header";
import MovieDetail from "./pages2/movieDetail/MovieDetail";
export default function App2(){
    return (
        <div className="App">
             <Header />
             <Routes>
            
                <Route index element={<Home />}></Route>
                <Route path="movies/:type" element={<MovieList/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
                <Route path="movie/:id" element={<MovieDetail />}></Route>
            </Routes>
        </div>
    )
}