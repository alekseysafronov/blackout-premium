import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone, MessageCircle, MapPin, Clock, Sparkles, Car, Armchair,
  DoorOpen, CircleDot, LayoutGrid, Wrench, Check, Instagram,
  Send, ShieldCheck, HandHeart, Menu, X, ChevronRight,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import heroImage from "@/assets/hero-interior.jpg";
import materialsImage from "@/assets/materials.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

const galleryItems = [
  { src: work1, title: "Сиденья · Натуральная кожа", desc: "Ромбовидная прострочка, золотая нить" },
  { src: work2, title: "Потолок · Алькантара", desc: "Идеальное натяжение без складок" },
  { src: work3, title: "Руль · Алькантара + кожа", desc: "Ручная прострочка" },
  { src: work4, title: "Дверные карты", desc: "Премиальная кожа с акцентами" },
  { src: work5, title: "Торпеда · Alcantara", desc: "Сложная работа с пластиком" },
  { src: work6, title: "Полная перетяжка салона", desc: "Комплексное обновление интерьера" },
];

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const PHONE = "+79036933313";
const PHONE_DISPLAY = "+7 903 693-33-13";
const WHATSAPP = `https://wa.me/79036933313`;
const ADDRESS = "г. Рязань, ул. МОГЭС, д. 13, паркинг, место Н97";

const services = [
  { icon: LayoutGrid, title: "Перетяжка потолка", desc: "Алькантара, ткань премиум-класса. Идеальное натяжение без складок." },
  { icon: Armchair, title: "Перетяжка сидений", desc: "Кожа, экокожа, комбинированные решения с прострочкой." },
  { icon: DoorOpen, title: "Перетяжка дверных карт", desc: "Полное преображение интерьера с акцентными вставками." },
  { icon: CircleDot, title: "Перетяжка руля", desc: "Алькантара или премиальная кожа. Ручная прострочка." },
  { icon: LayoutGrid, title: "Перетяжка торпеды", desc: "Сложная работа с пластиком — для самых требовательных." },
  { icon: Car, title: "Полная перетяжка салона", desc: "Комплексное обновление: от потолка до багажного отделения." },
];

const materials = [
  { name: "Алькантара", origin: "Италия · Япония", flag: "🇮🇹 🇯🇵" },
  { name: "Замша искусственная", origin: "Премиум качество", flag: "✦" },
  { name: "Натуральная кожа", origin: "Германия · Италия · Австрия · Россия", flag: "🇩🇪 🇮🇹 🇦🇹 🇷🇺" },
  { name: "Потолочная ткань", origin: "Германия", flag: "🇩🇪" },
  { name: "Premium Экокожа на микрофибре", origin: "Гипоаллергенная, износостойкая", flag: "★" },
];

const timeline = [
  { label: "От 1 дня", desc: "Перетяжка руля, мелкие работы" },
  { label: "2–3 дня", desc: "Потолок, дверные карты" },
  { label: "5–10 дней", desc: "Комплект сидений" },
  { label: "2–4 недели", desc: "Полная перетяжка салона" },
];

const repairItems = [
  "Восстановление поролона на внешней боковой поддержке",
  "Укрепление поролона на фасадных частях",
  "Изменение форм сидений",
  "Частичная замена деталей обшивки",
];

const advantages = [
  { icon: HandHeart, title: "Индивидуальный подход", desc: "Каждый проект — диалог с владельцем. Учитываем стиль, бюджет, пожелания." },
  { icon: Sparkles, title: "Бесплатная консультация", desc: "Приедете, посмотрим, посоветуем. Ни к чему не обязывает." },
  { icon: ShieldCheck, title: "Работа с пластиком", desc: "Перетяжка панелей любой сложности: Alcantara, кожа, Premium экокожа." },
];

function LandingPage() {
  const ref = useReveal<HTMLDivElement>();
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-md gold-border flex items-center justify-center">
              <span className="gold-text font-display font-bold text-lg">B</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold tracking-wide text-sm md:text-base">BLACKOUT</div>
              <div className="text-[10px] md:text-xs gold-text font-medium tracking-[0.2em]">PREMIUM</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
            {[
              ["services", "Услуги"],
              ["materials", "Материалы"],
              ["timeline", "Сроки"],
              ["repair", "Ремонт"],
              ["gallery", "Работы"],
              ["contact", "Контакты"],
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-foreground transition-colors">
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE}`} className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[color:var(--gold-bright)] transition-colors">
              <Phone size={16} className="text-[color:var(--gold)]" />
              {PHONE_DISPLAY}
            </a>
            <button onClick={() => scrollTo("contact")} className="hidden md:inline-flex px-4 py-2 rounded-md bg-[color:var(--gold)] text-[color:var(--primary-foreground)] text-sm font-semibold hover:bg-[color:var(--gold-bright)] transition-all hover:shadow-[0_0_30px_-5px_var(--gold)]">
              Записаться
            </button>
            <button className="lg:hidden p-2" onClick={() => setNavOpen(!navOpen)} aria-label="Меню">
              {navOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col p-5 gap-3">
              {[
                ["services", "Услуги"], ["materials", "Материалы"], ["timeline", "Сроки"],
                ["repair", "Ремонт"], ["gallery", "Работы"], ["contact", "Контакты"],
              ].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="text-left py-2 border-b border-border/50">
                  {label}
                </button>
              ))}
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 py-2 text-[color:var(--gold)]">
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-5 md:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--gold) 20%, transparent), transparent 50%)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] gold-text font-semibold mb-6 animate-fade-in">
            <Sparkles size={14} /> Премиальное автоателье · Рязань
          </div>
          <h1 className="max-w-4xl font-display font-bold text-4xl sm:text-5xl md:text-7xl leading-[1.05] animate-fade-up">
            Перетяжка салонов автомобилей <span className="gold-text">премиум-класса</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-up [animation-delay:120ms]">
            Алькантара, натуральная кожа, экокожа Premium. Ручная работа, авторские лекала, безупречная посадка.
            Превращаем интерьер вашего автомобиля в произведение искусства.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:240ms]">
            <button onClick={() => scrollTo("contact")} className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[color:var(--gold)] text-[color:var(--primary-foreground)] font-semibold hover:bg-[color:var(--gold-bright)] transition-all hover:shadow-[0_0_40px_-5px_var(--gold)]">
              Записаться на консультацию
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border hover:border-[color:var(--gold)] hover:text-[color:var(--gold-bright)] transition-colors">
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border hover:border-[color:var(--gold)] hover:text-[color:var(--gold-bright)] transition-colors">
              <Phone size={18} /> Позвонить
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { k: "10+", v: "лет опыта" },
              { k: "500+", v: "выполненных проектов" },
              { k: "24/7", v: "по предварительной записи" },
              { k: "5★", v: "отзывы клиентов" },
            ].map((s, i) => (
              <div key={i} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="p-5 rounded-lg bg-[color:var(--surface)] border border-border">
                <div className="text-2xl md:text-3xl font-display font-bold gold-text">{s.k}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services" eyebrow="Услуги" title="Что мы делаем">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} data-reveal style={{ transitionDelay: `${i * 60}ms` }}
              className="group p-7 rounded-xl bg-[color:var(--surface)] border border-border hover:border-[color:var(--gold)]/60 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--gold)_30%,transparent)]">
              <div className="w-12 h-12 rounded-lg gold-border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="text-[color:var(--gold-bright)]" size={22} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MATERIALS */}
      <Section id="materials" eyebrow="Материалы" title="Только проверенные поставщики">
        <p className="max-w-2xl text-muted-foreground mb-10 -mt-4" data-reveal>
          Работаем с европейскими и японскими производителями. Большой ассортимент в наличии и под заказ.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {materials.map((m, i) => (
            <div key={i} data-reveal style={{ transitionDelay: `${i * 60}ms` }}
              className="flex items-center justify-between p-6 rounded-xl bg-[color:var(--surface)] border border-border hover:border-[color:var(--gold)]/40 transition-colors">
              <div>
                <div className="font-display font-semibold text-lg">{m.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.origin}</div>
              </div>
              <div className="text-2xl shrink-0 ml-4 opacity-80">{m.flag}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section id="timeline" eyebrow="Сроки" title="От 1 дня до нескольких недель">
        <div className="relative">
          <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent hidden md:block" />
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((t, i) => (
              <div key={i} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="text-center md:text-left">
                <div className="relative inline-flex md:flex w-14 h-14 rounded-full gold-border items-center justify-center mb-4 mx-auto md:mx-0 bg-background">
                  <Clock size={20} className="text-[color:var(--gold-bright)]" />
                </div>
                <div className="font-display font-bold text-xl gold-text">{t.label}</div>
                <div className="text-sm text-muted-foreground mt-2">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* REPAIR */}
      <Section id="repair" eyebrow="Ремонт сидений" title="Ремонт автомобильных сидений любой сложности">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div data-reveal className="p-8 rounded-xl bg-[color:var(--surface)] border border-border">
            <Wrench className="text-[color:var(--gold-bright)] mb-5" size={28} />
            <ul className="space-y-4">
              {repairItems.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1 w-6 h-6 rounded-full bg-[color:var(--gold)]/15 text-[color:var(--gold-bright)] text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ transitionDelay: "120ms" }} className="space-y-5">
            <div className="p-6 rounded-xl gold-border">
              <h4 className="font-display font-semibold text-lg mb-2 gold-text">Большой выбор материалов</h4>
              <p className="text-sm text-muted-foreground">
                Натуральная кожа, экокожа, ткань — в наличии и под заказ. Подберём оттенок, фактуру и плотность под ваш проект.
              </p>
            </div>
            <div className="p-6 rounded-xl gold-border">
              <h4 className="font-display font-semibold text-lg mb-2 gold-text">Латексированный поролон</h4>
              <p className="text-sm text-muted-foreground">
                Используем латексированный и прорезиненный поролон — держит форму годами, не проседает, не крошится.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ADVANTAGES */}
      <Section id="advantages" eyebrow="Почему мы" title="Преимущества Blackout Premium">
        <div className="grid md:grid-cols-3 gap-5">
          {advantages.map((a, i) => (
            <div key={i} data-reveal style={{ transitionDelay: `${i * 80}ms` }}
              className="p-7 rounded-xl bg-gradient-to-b from-[color:var(--surface-elevated)] to-[color:var(--surface)] border border-border">
              <a.icon className="text-[color:var(--gold-bright)] mb-5" size={28} />
              <h3 className="font-display font-semibold text-xl mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" eyebrow="Портфолио" title="Примеры работ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <figure key={i} data-reveal style={{ transitionDelay: `${i * 60}ms` }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[color:var(--surface)] border border-border">
              <div className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, oklch(0.2 0 0) 0%, oklch(0.15 0 0) 50%, oklch(0.12 0 0) 100%)`,
                }} />
              <div className="absolute inset-0 opacity-20"
                style={{ background: `radial-gradient(circle at ${20 + i * 12}% ${30 + i * 8}%, var(--gold), transparent 60%)` }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="text-[color:var(--gold)]/30" size={64} />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-xs uppercase tracking-widest gold-text font-semibold">Пример работ #{i + 1}</div>
                <div className="text-sm text-foreground/90 mt-1">Перетяжка салона · Алькантара</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div data-reveal>
              <div className="text-xs uppercase tracking-[0.3em] gold-text font-semibold mb-4">Контакты</div>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6">
                Запишитесь на <span className="gold-text">бесплатную</span> консультацию
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Оставьте заявку — перезвоним в удобное время, ответим на вопросы и согласуем визит.
              </p>

              <div className="space-y-5">
                <ContactRow icon={MapPin} title="Адрес">
                  {ADDRESS}
                </ContactRow>
                <ContactRow icon={Phone} title="Телефон">
                  <a href={`tel:${PHONE}`} className="hover:text-[color:var(--gold-bright)] transition-colors">{PHONE_DISPLAY}</a>
                </ContactRow>
                <ContactRow icon={MessageCircle} title="WhatsApp">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-[color:var(--gold-bright)] transition-colors">
                    Написать в WhatsApp
                  </a>
                </ContactRow>
                <ContactRow icon={Clock} title="Часы работы">
                  Круглосуточно — <span className="text-[color:var(--gold-bright)]">только по предварительной записи</span>.
                  Въезд и приём согласовываются заранее.
                </ContactRow>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden border border-border aspect-[16/9] bg-[color:var(--surface)]">
                <iframe
                  title="Карта"
                  src="https://yandex.ru/map-widget/v1/?text=Рязань%20МОГЭС%2013&z=15"
                  className="w-full h-full grayscale-[0.3] contrast-110"
                  loading="lazy"
                />
              </div>
            </div>

            <div data-reveal style={{ transitionDelay: "120ms" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[color:var(--surface)]/60 px-5 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md gold-border flex items-center justify-center">
                <span className="gold-text font-display font-bold text-lg">B</span>
              </div>
              <div>
                <div className="font-display font-bold tracking-wide">BLACKOUT</div>
                <div className="text-[10px] gold-text tracking-[0.2em]">PREMIUM</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Премиальное автоателье в Рязани. Перетяжка салонов автомобилей.
            </p>
            <p className="text-xs text-[color:var(--gold-bright)] mt-3">
              Круглосуточно · только по предварительной записи
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Контакты</div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin size={16} className="text-[color:var(--gold)] shrink-0 mt-0.5" />{ADDRESS}</li>
              <li className="flex gap-3"><Phone size={16} className="text-[color:var(--gold)] shrink-0 mt-0.5" />
                <a href={`tel:${PHONE}`} className="hover:text-[color:var(--gold-bright)]">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex gap-3"><MessageCircle size={16} className="text-[color:var(--gold)] shrink-0 mt-0.5" />
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-[color:var(--gold-bright)]">WhatsApp</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Мы в соцсетях</div>
            <div className="flex gap-3">
              {[Instagram, Send, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-[color:var(--gold)] hover:text-[color:var(--gold-bright)] transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Blackout Premium · blackout-premium.ru</div>
          <div>Все права защищены</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[color:var(--gold)] text-[color:var(--primary-foreground)] flex items-center justify-center shadow-[0_10px_40px_-5px_var(--gold)] hover:scale-110 transition-transform"
        aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14" data-reveal>
          <div className="text-xs uppercase tracking-[0.3em] gold-text font-semibold mb-3">{eyebrow}</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 shrink-0 rounded-lg gold-border flex items-center justify-center">
        <Icon size={18} className="text-[color:var(--gold-bright)]" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{title}</div>
        <div className="text-foreground/95 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", time: "", service: "", comment: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", phone: "", time: "", service: "", comment: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-7 md:p-10 rounded-2xl bg-[color:var(--surface)] border border-border relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }} />
      <div className="relative">
        <h3 className="font-display font-bold text-2xl mb-1">Оставить заявку</h3>
        <p className="text-sm text-muted-foreground mb-6">Перезвоним в удобное время</p>

        <div className="space-y-4">
          <Field label="Имя" required>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="form-input" placeholder="Как к вам обращаться" />
          </Field>
          <Field label="Телефон" required>
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="form-input" placeholder="+7 (___) ___-__-__" />
          </Field>
          <Field label="Удобное время для звонка">
            <input value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="form-input" placeholder="Например: после 18:00" />
          </Field>
          <Field label="Тип услуги">
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="form-input">
              <option value="">— выберите —</option>
              {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              <option value="Ремонт сидений">Ремонт сидений</option>
              <option value="Консультация">Консультация</option>
            </select>
          </Field>
          <Field label="Комментарий">
            <textarea rows={3} value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })}
              className="form-input resize-none" placeholder="Опишите задачу или задайте вопрос" />
          </Field>
        </div>

        <button type="submit"
          className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[color:var(--gold)] text-[color:var(--primary-foreground)] font-semibold hover:bg-[color:var(--gold-bright)] transition-all hover:shadow-[0_0_40px_-5px_var(--gold)]">
          {sent ? <><Check size={18} /> Заявка отправлена</> : <>Записаться на консультацию <ChevronRight size={18} /></>}
        </button>
        <p className="text-[11px] text-muted-foreground mt-4 text-center">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: color-mix(in oklab, var(--background) 60%, transparent);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--foreground);
          font-size: 0.95rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 20%, transparent);
        }
        .form-input::placeholder { color: var(--muted-foreground); opacity: 0.7; }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
        {label}{required && <span className="text-[color:var(--gold)] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
