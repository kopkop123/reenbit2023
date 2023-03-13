import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Character from './components/Character/Character';
import './App.css';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/character/:id" element={<Character />} />
            </Routes>
        </HashRouter>
    )
}

export default App;
