import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllahNames from "./pages/AllahNames";
import Salavats from "./pages/Salavats";
import Istigfars from "./pages/Istigfars";
import DuaForReachness from "./pages/DuaForReachness";
import DuaFromQuran from "./pages/DuaFromQuran";
import MorningAndEveningAzkars from "./pages/MorningAndEveningAzkars";
import DuaIsmulAzam from "./pages/DuaIsmulAzam";
import DuaRasul from "./pages/DuaRasul";
import Toolbar from "./components/Toolbar.tsx";
import About from "./pages/About.tsx";
import AfterNamaz from "./pages/AfterNamaz.tsx";
import Hirz from "./pages/Hirz.tsx";
import Rukia from "./pages/Rukia.tsx";
import EveryDay from "./pages/EveryDay.tsx";
//import bridge from "@vkontakte/vk-bridge";

// Отправляет событие инициализации нативному клиенту
//bridge.send("VKWebAppInit");

const App = () => {
    return (
        <Router basename="/zickreee_web"> {/* Добавил basename */}
            {/* Toolbar отображается на всех экранах */}
            <Toolbar />
            {/* Основной контент */}
            <div className="pt-16"> {/* Отступ сверху, чтобы контент не перекрывался Toolbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allah-names" element={<AllahNames />} />
                    <Route path="/salavats" element={<Salavats />} />
                    <Route path="/istigfars" element={<Istigfars />} />
                    <Route path="/dua-for-reachness" element={<DuaForReachness />} />
                    <Route path="/morning-and-evening-azkars" element={<MorningAndEveningAzkars />} />
                    <Route path="/dua-ismul-azam" element={<DuaIsmulAzam />} />
                    <Route path="/dua-rasul" element={<DuaRasul />} />
                    <Route path="/dua-after-namaz" element={<AfterNamaz />} />
                    <Route path="/hirz" element={<Hirz />} />
                    <Route path="/rukia" element={<Rukia />} />
                    <Route path="/every-day" element={<EveryDay />} />
                    <Route path="/dua-from-quran" element={<DuaFromQuran />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

