import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const sections = [
  {
    title: "Вся Информация о Сайте",
    icon: "Info",
    content: (
      <div className="space-y-3 text-gray-300 leading-relaxed">
        <p>
          Сайт был создан компанией{" "}
          <span className="text-purple-400 font-semibold">Xaz&amp;Der1</span>{" "}
          специально для города{" "}
          <span className="text-white font-semibold">'Хазбиково'</span> на
          сервере <span className="text-white font-semibold">ChichWaka</span>.
          Наш сайт создан, чтобы познакомить вас с уникальными чертами города.
        </p>
        <p>
          На сайте можно найти: Жители города, Тест-сервер города, Правила
          города, Достопримечательности города и многое другое.
        </p>
        <p className="text-purple-300 font-medium italic">
          Путешествуйте с удовольствием — Хазбиково ждёт вас!
        </p>
      </div>
    ),
  },
  {
    title: "Для чего был создан сайт?",
    icon: "Target",
    content: (
      <div className="space-y-3 text-gray-300 leading-relaxed">
        <p>
          Сайт был создан в исключительно информационных целях — для обеспечения
          открытого и оперативного доступа жителей, гостей города и
          представителей организаций к достоверным сведениям о деятельности
          органов местного самоуправления, городских программах, мероприятиях и
          услугах.
        </p>
        <p className="text-gray-400 italic">
          Никого и ничего мы не хотели задеть или оскорбить, все совпадения
          случайны.
        </p>
      </div>
    ),
  },
  {
    title: "О компании Xaz&Der1",
    icon: "Building2",
    content: (
      <div className="space-y-3 text-gray-300 leading-relaxed">
        <p>
          Компания{" "}
          <span className="text-purple-400 font-semibold">Xaz&amp;Der1</span>{" "}
          начала своё производство совсем недавно. В компанию входят игроки
          ChichWaka{" "}
          <span className="text-white font-semibold">Xazbik_</span> и{" "}
          <span className="text-white font-semibold">Der1zon</span>.
        </p>
        <p>
          О данных игроках есть информация: Они лучшие друзья и всегда на
          сервере и не только играли вместе. Всё начиналось ещё очень давно,
          как игрок Xazbik_ создал свой город и нашёл друга Der1zon, с которым
          был знаком ещё с первого сезона сервера. Они начали общаться в тг и
          дс ежедневно, каждый день они улучшали свой город.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center">
            <p className="text-purple-400 font-bold text-sm">10.02.2026</p>
            <p className="text-gray-400 text-xs mt-1">Создан Discord-сервер</p>
          </div>
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center">
            <p className="text-purple-400 font-bold text-sm">01.03.2026</p>
            <p className="text-gray-400 text-xs mt-1">Создан Тест-сервер MC</p>
          </div>
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center">
            <p className="text-purple-400 font-bold text-sm">20.03.2026</p>
            <p className="text-gray-400 text-xs mt-1">Идея создания сайта</p>
          </div>
        </div>
        <p className="text-purple-300 font-medium italic">
          Вот так и появился данный сайт от компании Xaz&amp;Der1
        </p>
      </div>
    ),
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <header className="border-b border-gray-800 px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
        </button>
        <h1 className="text-white font-bold text-xl">
          Xaz<span className="text-purple-500">Games</span>
          <span className="text-gray-500 font-normal text-sm ml-2">
            — Описание
          </span>
        </h1>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-10">
        <div className="space-y-6">
          {sections.map((s, i) => (
            <div
              key={i}
              className="bg-gray-900/40 rounded-2xl border border-gray-800 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-purple-900/50 rounded-lg flex items-center justify-center border border-purple-800">
                  <Icon name={s.icon} size={18} className="text-purple-400" />
                </div>
                <h2 className="text-white font-bold text-lg">{s.title}</h2>
              </div>
              {s.content}
            </div>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        <p className="font-semibold text-gray-400">XAZBGAMES.RU</p>
        <p>© 2026 Хазбиково. Все права защищены.</p>
      </footer>
    </div>
  );
}
