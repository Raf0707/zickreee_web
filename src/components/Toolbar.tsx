// src/components/Toolbar.tsx
import { Link, useLocation } from "react-router-dom";
import { Info, List, Home } from "lucide-react"; // Импортируем иконки "info", "list" и "home"

const Toolbar = () => {
    const location = useLocation(); // Получаем текущий путь

    return (
        <div className="fixed top-0 left-0 w-full bg-[#122428] border-b border-[#14442e] z-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                {/* Логотип и название приложения */}
                <div className="flex items-center space-x-2">
                    {/* Иконка (увеличена) */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl sm:text-4xl font-bold">Z</span>
                    </div>
                    {/* Название приложения */}
                    <h2 className="text-[25px] sm:text-[30px] font-bold text-[#86efac]">
                        Zickreee
                    </h2>
                </div>

                {/* Кнопки "info", "list" и "home" */}
                <div className="flex items-center space-x-4">
                    {/* Кнопка "home" для возврата на главную */}
                    <Link
                        to="/"
                        className="text-[#86efac] hover:text-[#4ade80]"
                    >
                        <Home className="w-8 h-8 sm:w-12 sm:h-12" stroke="#86efac" />
                    </Link>

                    {/* Кнопка "info" или "list" */}
                    <Link
                        to={location.pathname === "/about" ? "/" : "/about"}
                        className="text-[#86efac] hover:text-[#4ade80]"
                    >
                        {location.pathname === "/about" ? (
                            <List className="w-8 h-8 sm:w-12 sm:h-12" stroke="#86efac" /> // Иконка "list"
                        ) : (
                            <Info className="w-8 h-8 sm:w-12 sm:h-12" stroke="#86efac" /> // Иконка "info"
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;