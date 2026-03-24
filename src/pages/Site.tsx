import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

type Section = "residents" | "sights" | "emergency" | "rules";

const residents = [
  { nick: "Xazbik_", role: "Мэр" },
  { nick: "Der1zon", role: "Со-основатель" },
];

const emergency = [
  { nick: "Xazbik_", reason: "— " },
  { nick: "Der1zon", reason: "— " },
];

const sights = [
  {
    image:
      "https://cdn.poehali.dev/projects/eaba1b87-06df-4840-a348-60b8458f0228/files/01b2b2ce-a047-4913-8ae2-c6ff7ce9fb88.jpg",
    title: "Ратуша Хазбиково",
    description:
      "Главное административное здание города. Здесь заседает мэр Xazbik_ и принимаются все важные решения о развитии города.",
  },
  {
    image:
      "https://cdn.poehali.dev/projects/eaba1b87-06df-4840-a348-60b8458f0228/files/842ef2f2-5b57-4d68-acb4-6604f9d3fded.jpg",
    title: "Москва-Сити",
    description:
      "Деловой квартал Хазбиково — величественный комплекс небоскрёбов в сердце города. Является гордостью и символом процветания Хазбиково.",
  },
];

const navItems: { id: Section; label: string; icon: string }[] = [
  { id: "residents", label: "Жители города", icon: "Users" },
  { id: "sights", label: "Достопримечательности", icon: "Landmark" },
  { id: "emergency", label: "ЧС города", icon: "ShieldAlert" },
  { id: "rules", label: "Правила города", icon: "ScrollText" },
];

export default function Site() {
  const navigate = useNavigate();
  const [active, setActive] = useState<Section>("residents");

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
            — Сайт города Хазбиково
          </span>
        </h1>
      </header>

      <div className="flex flex-col md:flex-row flex-1">
        <aside className="md:w-64 border-b md:border-b-0 md:border-r border-gray-800 p-4">
          <nav className="flex md:flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all w-full text-left ${
                  active === item.id
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 md:p-10">
          {active === "residents" && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Icon name="Users" size={22} className="text-purple-400" />
                Жители города
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-gray-400">
                      <th className="px-6 py-3 text-left">#</th>
                      <th className="px-6 py-3 text-left">Никнейм</th>
                      <th className="px-6 py-3 text-left">Роль</th>
                    </tr>
                  </thead>
                  <tbody>
                    {residents.map((r, i) => (
                      <tr
                        key={r.nick}
                        className="border-t border-gray-800 hover:bg-gray-900 transition-colors"
                      >
                        <td className="px-6 py-4 text-gray-500">{i + 1}</td>
                        <td className="px-6 py-4 text-white font-mono font-semibold">
                          {r.nick}
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-purple-900/40 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-800">
                            {r.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {active === "sights" && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Icon name="Landmark" size={22} className="text-purple-400" />
                Достопримечательности города
              </h2>
              <div className="flex flex-col gap-8">
                {sights.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-gray-800 overflow-hidden bg-gray-900/40"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {s.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {active === "emergency" && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Icon name="ShieldAlert" size={22} className="text-purple-400" />
                ЧС города
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-gray-400">
                      <th className="px-6 py-3 text-left">#</th>
                      <th className="px-6 py-3 text-left">Никнейм</th>
                      <th className="px-6 py-3 text-left">Причина</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emergency.length === 0 ? (
                      <tr>
                        <td
                          colSpan={3}
                          className="px-6 py-8 text-center text-gray-500"
                        >
                          Нарушителей нет
                        </td>
                      </tr>
                    ) : (
                      emergency.map((e, i) => (
                        <tr
                          key={e.nick}
                          className="border-t border-gray-800 hover:bg-gray-900 transition-colors"
                        >
                          <td className="px-6 py-4 text-gray-500">{i + 1}</td>
                          <td className="px-6 py-4 text-white font-mono font-semibold">
                            {e.nick}
                          </td>
                          <td className="px-6 py-4 text-gray-400">
                            {e.reason}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {active === "rules" && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Icon name="ScrollText" size={22} className="text-purple-400" />
                Правила города
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
                  <h3 className="text-white font-bold text-lg mb-4 text-purple-300">
                    ПРАВИЛА ГОРОДА ХАЗБИКОВО:
                  </h3>
                  <ul className="space-y-2">
                    <li>1. Соблюдать правила сервера</li>
                    <li>2.1 Не гриферить</li>
                    <li>2.2 Не воровать</li>
                    <li>2.3 Не драться где попало</li>
                    <li>3. Хорошо себя вести</li>
                    <li>4. Помогать друг другу</li>
                    <li>5.1 Развивать город</li>
                    <li>5.2 Приглашать вступить других</li>
                    <li>6.1 Слушаться мэра Xazbik_</li>
                    <li>6.2 Любить и уважать мэра</li>
                  </ul>
                </div>

                <div className="bg-red-950/30 rounded-2xl border border-red-900/50 p-6">
                  <h3 className="text-red-400 font-bold text-lg mb-4">
                    На территории Москва-сити запрещается:
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      1. Использование взрывоопасных предметов: ТНТ, кристаллов
                      Края, зарядов ветра.
                    </li>
                    <li>
                      2. Использование источников огня: огнива, оружия с
                      зачарованием «Заговор огня», а также лука с зачарованием
                      «Воспламенение».
                    </li>
                    <li>3. Разливание воды</li>
                    <li>4. Применение булавы</li>
                    <li>
                      5. Провоцирование драк и ведение боя в непредназначенных
                      для этого местах.
                    </li>
                    <li>
                      6. Использование любых иных предметов, механизмов или
                      действий, способных причинить вред игрокам или постройкам.
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-950/30 rounded-2xl border border-blue-900/50 p-6">
                  <h3 className="text-blue-400 font-bold text-lg mb-4">
                    ПРОСЬБА:
                  </h3>
                  <ul className="space-y-2">
                    <li>1. Соблюдать правила</li>
                    <li>2.1 Помогать городу и жителям</li>
                    <li>2.2 Развивать город</li>
                    <li>3.1 Быть не афк</li>
                    <li>3.2 Быть активным в тг города</li>
                    <li>4. Покупать лицензию для ларьков и магазинов</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        <p className="font-semibold text-gray-400">XAZBGAMES.RU</p>
        <p>© 2026 Хазбиково. Все права защищены.</p>
      </footer>
    </div>
  );
}
