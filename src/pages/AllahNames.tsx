// src/pages/AllahNames.tsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Импортируем framer-motion
import { namesData, NameData } from "../data/namesData";

const AllahNames = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#122428] flex flex-col items-center justify-center overflow-y-auto w-screen">
            {/* Список имен */}
            <div className="w-full sm:w-screen space-y-4 px-4 sm:px-12 py-6">
                {namesData.map((item: NameData, index: number) => (
                    <div
                        key={index}
                        className="w-full border border-[#14442e] rounded-xl p-4 bg-[#122428] text-center cursor-pointer"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)} // Обработчик клика на всю карточку
                    >
                        {/* Верхняя часть карточки */}
                        <div className="flex justify-between items-center">
                            {/* Арабское имя */}
                            <h3 className="text-[48px] sm:text-[70px] font-bold text-[#86efac] text-center w-full">
                                {item.arabicName}
                            </h3>

                            {/* Кнопка стрелочки */}
                            <div className="flex items-center"> {/* Выравнивание по вертикали */}
                                <div className="bg-[#4ade80] p-2 rounded-full">
                                    {openIndex === index ? (
                                        <ChevronUp size={24} className="text-[#122428]" />
                                    ) : (
                                        <ChevronDown size={24} className="text-[#122428]" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Раскрывающаяся часть с анимацией */}
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }} // Начальное состояние (скрыто)
                                    animate={{ opacity: 1, height: "auto" }} // Анимация раскрытия
                                    exit={{ opacity: 0, height: 0 }} // Анимация закрытия
                                    transition={{ duration: 0.3 }} // Длительность анимации
                                    className="mt-4 space-y-2 text-center overflow-hidden"
                                >
                                    {/* Транскрипция */}
                                    <p className="text-[24px] sm:text-[30px] text-[#4ade80]">
                                        <strong>Транскрипция:</strong> {item.transcriptName}
                                    </p>
                                    {/* Перевод */}
                                    <p className="text-[24px] sm:text-[30px] text-[#4ade80]">
                                        <strong>Перевод:</strong> {item.translateName}
                                    </p>
                                    {/* Информация */}
                                    <p className="text-[24px] sm:text-[30px] text-[#4ade80]">
                                        <strong>Информация:</strong> {item.info}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllahNames;