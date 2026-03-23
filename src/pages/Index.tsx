import { useState } from "react";
import Icon from "@/components/ui/icon";

const materials = [
  {
    number: "01",
    title: "Роль СМИ в обществе",
    category: "Введение",
    description:
      "Средства массовой информации — не просто каналы новостей, а важнейший институт, формирующий общественное мнение и определяющий ход истории.",
    duration: "15 мин",
  },
  {
    number: "02",
    title: "Информирование и просвещение",
    category: "Функции СМИ",
    description:
      "Главная функция СМИ — оперативное и достоверное информирование граждан. Как пресса, телевидение, радио и интернет расширяют кругозор общества.",
    duration: "20 мин",
  },
  {
    number: "03",
    title: "Формирование общественного мнения",
    category: "Влияние",
    description:
      "Через подбор тем, акценты и комментарии экспертов СМИ способны формировать отношение общества к любым явлениям. Площадка для дискуссий и демократии.",
    duration: "25 мин",
  },
  {
    number: "04",
    title: "СМИ как «четвёртая власть»",
    category: "Контроль",
    description:
      "В демократическом обществе СМИ следят за действиями государства и бизнеса. Журналистские расследования как катализатор реформ.",
    duration: "30 мин",
  },
  {
    number: "05",
    title: "Развлечение и культурная интеграция",
    category: "Культура",
    description:
      "Фильмы, сериалы, ток-шоу объединяют людей вокруг общих интересов. Как СМИ транслируют ценности и формируют культурный код нации.",
    duration: "20 мин",
  },
  {
    number: "06",
    title: "Дезинформация и фейки",
    category: "Вызовы",
    description:
      "В эпоху цифровизации возрастает риск манипуляций и пропаганды. Как распознавать фейковые новости и сохранять критическое мышление.",
    duration: "35 мин",
  },
];

const stats = [
  { value: "6", label: "тем" },
  { value: "2,5ч", label: "материалов" },
  { value: "∞", label: "критического мышления" },
];

export default function Index() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: "#FAFAF8", color: "#111111" }}>

      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ backgroundColor: "#FAFAF8", borderBottom: "1px solid #E8E8E4" }}
      >
        <div className="flex items-center gap-3">
          <span
            style={{
              display: "inline-block",
              width: "24px",
              height: "2px",
              backgroundColor: "#CC2200",
            }}
          />
          <span className="font-display text-lg font-semibold tracking-wide" style={{ color: "#111111" }}>
            МедиаГрамотность
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-light tracking-wider uppercase hover:opacity-60 transition-opacity"
            style={{ color: "#111111" }}
          >
            О курсе
          </a>
          <a
            href="#materials"
            className="text-sm font-light tracking-wider uppercase hover:opacity-60 transition-opacity"
            style={{ color: "#111111" }}
          >
            Материалы
          </a>
          <button
            className="px-5 py-2 text-sm font-medium tracking-wide transition-all hover:opacity-80"
            style={{ backgroundColor: "#CC2200", color: "#FAFAF8", border: "none" }}
          >
            Начать обучение
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-8 max-w-6xl mx-auto">
        <p
          className="text-xs font-medium tracking-widest uppercase mb-6 animate-fade-up"
          style={{ color: "#CC2200" }}
        >
          Образовательный курс
        </p>

        <h1
          className="font-display text-6xl md:text-8xl font-light leading-none mb-4 animate-fade-up"
          style={{ color: "#111111", letterSpacing: "-0.02em", animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
        >
          Читай мир
          <br />
          <em className="font-light italic">критически</em>
        </h1>

        <div
          className="my-8"
          style={{
            width: "80px",
            height: "2px",
            backgroundColor: "#CC2200",
            animation: "line-grow 0.8s ease-out 0.3s forwards",
            transform: "scaleX(0)",
            transformOrigin: "left",
          }}
        />

        <p
          className="text-base font-light leading-relaxed mb-10 max-w-xl"
          style={{ color: "#555550", animation: "fade-up 0.7s ease-out 0.3s forwards", opacity: 0, animationFillMode: "forwards" }}
        >
          Курс о том, как устроены медиа, как они влияют на нас и как научиться
          ориентироваться в потоке информации — отличая факты от манипуляций.
        </p>

        <a href="#materials">
          <button
            className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:gap-5"
            style={{ backgroundColor: "#111111", color: "#FAFAF8" }}
          >
            Перейти к материалам
            <Icon name="ArrowRight" size={16} />
          </button>
        </a>

        {/* Stats */}
        <div
          className="flex gap-12 mt-20 pt-10"
          style={{ borderTop: "1px solid #E8E8E4" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-semibold" style={{ color: "#111111" }}>
                {s.value}
              </p>
              <p className="text-xs font-light tracking-wider uppercase mt-1" style={{ color: "#888882" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase mb-6"
              style={{ color: "#CC2200" }}
            >
              Зачем это нужно
            </p>
            <h2
              className="font-display text-5xl font-light leading-tight mb-8"
              style={{ color: "#FAFAF8" }}
            >
              СМИ — это зеркало
              <br />
              <em className="italic">и двигатель</em> общества
            </h2>
            <p className="text-sm font-light leading-loose" style={{ color: "#AAAAAA" }}>
              Они отражают состояние общества, его проблемы и достижения —
              и одновременно способны ускорять развитие или тормозить его.
              От честности и профессионализма медиа зависит уровень доверия
              в обществе, качество демократии и будущее страны.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "Eye" as const, text: "Распознавай манипуляции" },
              { icon: "Filter" as const, text: "Фильтруй источники" },
              { icon: "Brain" as const, text: "Думай критически" },
              { icon: "Shield" as const, text: "Защищай себя от фейков" },
            ].map((item) => (
              <div
                key={item.text}
                className="p-6 flex flex-col gap-4 transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #2A2A2A" }}
              >
                <Icon name={item.icon} size={20} style={{ color: "#CC2200" }} />
                <p className="text-sm font-light leading-snug" style={{ color: "#FAFAF8" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#CC2200" }}>
                Учебные материалы
              </p>
              <h2 className="font-display text-5xl font-light" style={{ color: "#111111" }}>
                Темы курса
              </h2>
            </div>
            <p className="hidden md:block text-sm font-light" style={{ color: "#888882" }}>
              {materials.length} модулей
            </p>
          </div>

          <div style={{ borderTop: "1px solid #E8E8E4" }}>
            {materials.map((item, i) => (
              <div
                key={item.number}
                className="py-8 cursor-pointer transition-all duration-300"
                style={{ borderBottom: "1px solid #E8E8E4" }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-1">
                    <span
                      className="font-display text-sm transition-colors duration-300"
                      style={{ color: activeCard === i ? "#CC2200" : "#CCCCCC" }}
                    >
                      {item.number}
                    </span>
                  </div>
                  <div className="col-span-2 hidden md:block">
                    <span
                      className="text-xs font-light tracking-wider uppercase transition-colors duration-300"
                      style={{ color: activeCard === i ? "#CC2200" : "#888882" }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="col-span-11 md:col-span-7">
                    <h3
                      className="font-display text-2xl font-light mb-0 transition-all duration-300"
                      style={{ color: "#333330" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm font-light leading-relaxed transition-all duration-300 overflow-hidden"
                      style={{
                        color: "#777772",
                        maxHeight: activeCard === i ? "80px" : "0",
                        opacity: activeCard === i ? 1 : 0,
                        marginTop: activeCard === i ? "12px" : "0",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden md:flex col-span-2 items-center justify-end gap-3">
                    <span className="text-xs font-light" style={{ color: "#AAAAAA" }}>
                      {item.duration}
                    </span>
                    <div
                      className="w-8 h-8 flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: activeCard === i ? "#CC2200" : "transparent",
                        border: `1px solid ${activeCard === i ? "#CC2200" : "#E8E8E4"}`,
                      }}
                    >
                      <Icon
                        name="ArrowRight"
                        size={14}
                        style={{ color: activeCard === i ? "#FAFAF8" : "#AAAAAA" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8" style={{ backgroundColor: "#CC2200" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="font-display text-5xl md:text-6xl font-light mb-6"
            style={{ color: "#FAFAF8" }}
          >
            Начни разбираться
            <br />
            <em className="italic">в медиа сегодня</em>
          </h2>
          <p
            className="text-sm font-light mb-10 max-w-md mx-auto"
            style={{ color: "rgba(250,250,248,0.75)" }}
          >
            Бесплатный курс для тех, кто хочет мыслить независимо и понимать,
            как работает информационное пространство
          </p>
          <button
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:gap-5"
            style={{ backgroundColor: "#FAFAF8", color: "#CC2200" }}
          >
            Начать бесплатно
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10" style={{ borderTop: "1px solid #E8E8E4" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-display text-base font-semibold" style={{ color: "#111111" }}>
            МедиаГрамотность
          </span>
          <p className="text-xs font-light" style={{ color: "#AAAAAA" }}>
            Образовательная платформа · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
