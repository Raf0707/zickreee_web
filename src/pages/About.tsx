// src/pages/AboutApp.tsx
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import {
    FaAndroid,
    FaApple,
    FaInfoCircle,
    FaCode,
    FaRubleSign,
    FaUser,
    FaEnvelope,
    FaStar,
    FaVk,
    FaTelegram,
    //FaCogs,
} from "react-icons/fa"; // Иконки из react-icons

const AboutApp = () => {
    const [isVersionDialogOpen, setVersionDialogOpen] = useState(false);
    const [isDownloadIosDialogOpen, setDownloadIosDialogOpen] = useState(false);
    {/*const navigate = useNavigate();*/}

    const openVersionDialog = () => setVersionDialogOpen(true);
    const closeVersionDialog = () => setVersionDialogOpen(false);

    const openDownloadIosDialog = () => setDownloadIosDialogOpen(true);
    const closeDownloadIosDialog = () => setDownloadIosDialogOpen(false);

    {/*const goToSettings = () => navigate("/settings");*/}

    return (
        <div className="min-h-screen bg-[#122428] flex flex-col items-center justify-center overflow-y-auto w-screen">
            {/* Основной контейнер */}
            <div className="w-full sm:w-screen space-y-4 px-4 sm:px-12 py-6">
                {/* Карточка с названием приложения и подзаголовком */}
                <div className="w-full border border-[#14442e] rounded-xl p-12 bg-[#122428] text-center">
                    {/* Заголовок с логотипом */}
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        {/* Логотип */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl sm:text-2xl font-bold">٩٩</span>
                        </div>
                        {/* Название приложения */}
                        <h2 className="text-[28px] font-bold text-[#86efac]">Al Asma Ul Husna</h2>
                    </div>
                    {/* Подзаголовок */}
                    <p className="text-xl sm:text-2xl text-[#4ade80]">from R&R</p>
                </div>

                {/* Карточка для каждого элемента */}
                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={openVersionDialog}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaInfoCircle size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Версия: 1.0</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("https://github.com/Raf0707/Al_Asma_Ul_Husna_WEB", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaCode size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Исходный код</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("https://www.donationalerts.com/r/raf0707", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaRubleSign size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Поддержать автора</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("https://www.rustore.ru/catalog/app/ru.tabiin.alasmaulhusna", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaAndroid size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Скачать на Android</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={openDownloadIosDialog}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaApple size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Скачать на iOS</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("https://github.com/Raf0707", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaUser size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Рафаил Кикматулин</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("mailto:raf_android-dev@mail.ru", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaEnvelope size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">raf_android-dev@mail.ru</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("https://www.rustore.ru/catalog/app/ru.tabiin.alasmaulhusna", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaStar size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Оценить приложение</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("https://vk.com/mahabbaa", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaVk size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Мы в VK</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("https://t.me/ibnRustum", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaTelegram size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Мы в Telegram</p>
                    </div>
                </div>

                <div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={() => window.open("https://www.rustore.ru/catalog/developer/90b1826e", "_blank")}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaCode size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Другие Приложения</p>
                    </div>
                </div>

                {/*<div className="w-full border border-[#14442e] rounded-xl p-6 bg-[#122428] text-center cursor-pointer" onClick={goToSettings}>
                    <div className="flex items-center justify-center space-x-4">
                        <FaCogs size={24} className="text-[#22c55e]" />
                        <p className="text-xl sm:text-2xl text-[#4ade80]">Настройки</p>
                    </div>
                </div>*/}
            </div>

            {/* Диалоговое окно для версии */}
            {isVersionDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[#122428] border border-[#14442e] rounded-xl p-6 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#86efac] mb-4">
                            Версия 1.0
                        </h3>
                        <p className="text-lg sm:text-xl text-[#4ade80]">
                            Текущая версия приложения: 1.0, но если у вас есть пожелания по новому функционалу —
                            напишите ваши предложения нам на почту
                        </p>

                        <div className="flex flex-col gap-3 mt-4">
                            <button
                                onClick={() => window.open("mailto:raf_android-dev@mail.ru", "_blank")}
                                className="bg-[#4ade80] px-4 py-2 rounded-lg"
                            >
                                Написать пожелания по функционалу
                            </button>
                            <button
                                onClick={closeVersionDialog}
                                className="bg-[#4ade80] px-4 py-2 rounded-lg"
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Диалоговое окно для скачивания на iOS */}
            {isDownloadIosDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[#122428] border border-[#14442e] rounded-xl p-6 text-center">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#86efac] mb-4">
                            Скачать на iOS
                        </h3>
                        <p className="text-lg sm:text-xl text-[#4ade80]">
                            Наше приложение выйдет в App Store для iOS совсем скоро —
                            когда у разработчика появится MacBook Pro 16 M3 Pro для разработки,
                            iPhone 13 Pro Max для тестирования и лицензия разработчика App Store для публикации приложения.
                            <br />
                            (Да, разработчик татарин)
                        </p>

                        <div className="flex flex-col gap-3 mt-4">
                            <button
                                onClick={() => window.open("https://www.donationalerts.com/r/raf0707", "_blank")}
                                className="bg-[#4ade80] px-4 py-2 rounded-lg"
                            >
                                Помочь разработчику с покупками
                            </button>
                            <button
                                onClick={() => window.open("mailto:raf_android-dev@mail.ru", "_blank")}
                                className="bg-[#4ade80] px-4 py-2 rounded-lg"
                            >
                                Связаться с разработчиком и купить ему MacBook Pro 16 M3 Pro,
                                iPhone 13 Pro Max и лицензию разработчика App Store
                            </button>
                            <button
                                onClick={closeDownloadIosDialog}
                                className="bg-[#4ade80] px-4 py-2 rounded-lg"
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AboutApp;