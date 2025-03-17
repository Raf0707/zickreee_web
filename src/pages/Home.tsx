// src/pages/Home.tsx
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const cardsData = [
        { title: "99 имен Аллаха", path: "/allah-names" },
        { title: "Дуа из Корана", path: "/dua-from-quran" },
        { title: "Салаваты", path: "/salavats" },
        { title: "Истигфары", path: "/istigfars" },
        { title: "Дуа для богатства", path: "/dua-for-reachness" },
        { title: "Утренние и вечерние азкары", path: "/morning-and-evening-azkars" },
        { title: "Дуа исмуль А'зам", path: "/dua-ismul-azam" },
        { title: "72 дуа Пророка Мухаммада Салля Ллаху алейхи уа Саллям", path: "/dua-rasul" },
        { title: "Дуа и зикры после намаза", path: "/dua-after-namaz" },
        { title: "33 аята защиты Аль-Хирз", path: "/hirz" },
        { title: "Рукъя - лечение аятами Корана", path: "/rukia" },
        { title: "Дуа и зикры на каждый день", path: "/every-day" },
    ];

    return (
        <div className="min-h-screen bg-[#122428] flex flex-col items-center justify-center overflow-y-auto w-screen">
            {/* Список карточек */}
            <div className="w-full sm:w-screen space-y-4 px-4 sm:px-12 py-6">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="w-full border border-[#14442e] rounded-xl p-4 bg-[#122428] text-center cursor-pointer"
                        onClick={() => navigate(card.path)}
                    >
                        {/* Заголовок карточки */}
                        <h3 className="text-[28px] sm:text-[40px] font-bold text-[#86efac] text-center w-full">
                            {card.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;