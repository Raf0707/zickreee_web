// src/pages/AllahNames.tsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
                        className="w-full border border-[#14442e] rounded-xl p-4 bg-[#122428] text-center"
                    >
                        {/* Верхняя часть карточки */}
                        <div className="flex justify-between items-center">
                            {/* Арабское имя */}
                            <h3 className="text-[48px] sm:text-[70px] font-bold text-[#86efac] text-center w-full">
                                {item.arabicName}
                            </h3>
                            {/* Кнопка стрелочки */}
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="focus:outline-none bg-[#4ade80] p-2 rounded"
                            >
                                {openIndex === index ? (
                                    <ChevronUp size={24} className="#4ade80" />
                                ) : (
                                    <ChevronDown size={24} className="#4ade80" />
                                )}
                            </button>

                        </div>

                        {/* Раскрывающаяся часть */}
                        {openIndex === index && (
                            <div className="mt-4 space-y-2 text-center">
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
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllahNames;
