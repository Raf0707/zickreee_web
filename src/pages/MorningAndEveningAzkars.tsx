// src/pages/Salavats.tsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import azkarsData from "../data/morning_and_evening_azkars.json";
import {AnimatePresence, motion} from "framer-motion"; // Импортируем JSON с данными

interface AzkarsData {
    arabic_dua: string;
    transcript: string;
    translate: string;
}

const MorningAndEveningAzkars = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#122428] flex flex-col items-center justify-center overflow-y-auto w-screen">
            {/* Список салаватов */}
            <div className="w-full sm:w-screen space-y-4 px-4 sm:px-12 py-6">
                {azkarsData.map((item: AzkarsData, index: number) => (
                    <div
                        key={index}
                        className="w-full border border-[#14442e] rounded-xl p-4 bg-[#122428] text-center cursor-pointer"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)} // Обработчик клика на всю карточку
                    >
                        {/* Арабский текст дуа */}
                        <h3 className="text-[28px] sm:text-[40px] font-bold text-[#86efac] text-center w-full">
                            {item.arabic_dua}
                        </h3>

                        {/* Стрелочка внизу по центру */}
                        <div className="flex justify-center mt-4">
                            <div className="bg-[#4ade80] p-2 rounded-full">
                                {openIndex === index ? (
                                    <ChevronUp size={24} className="text-[#122428]" />
                                ) : (
                                    <ChevronDown size={24} className="text-[#122428]" />
                                )}
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
                                        <strong>Транскрипция:</strong> {item.transcript}
                                    </p>
                                    {/* Перевод */}
                                    <p className="text-[24px] sm:text-[30px] text-[#4ade80]">
                                        <strong>Перевод:</strong> {item.translate}
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

export default MorningAndEveningAzkars;