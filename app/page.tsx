import Image from "next/image";
import {
  ArrowLeft, BarChart3, BrainCircuit, Building2, Check, Cloud, Compass, CreditCard,
  Lightbulb, Mail, MessageCircle, Phone, Rocket, ShieldCheck, ShoppingCart, Smartphone,
  Sparkles, Store, Target, Truck, Users, UtensilsCrossed, Workflow, Shirt,
} from "lucide-react";
import MobileNav from "./MobileNav";

/* ---------------- المحتوى ---------------- */

const PHONE = "0502449983";
const PHONE_INTL = `966${PHONE.slice(1)}`;
const EMAIL = "info@ibtidar.com";

const nav = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "الخدمات" },
  { href: "#logistics", label: "الذراع اللوجستي" },
  { href: "#impact", label: "الأثر" },
  { href: "#vision", label: "الرؤية" },
];

const services = [
  { icon: Smartphone, title: "تطوير التطبيقات والمنصات الذكية", note: "iOS · Android · Web" },
  { icon: Cloud, title: "تصميم الأنظمة السحابية وإدارة الحلول الرقمية", note: "Cloud" },
  { icon: BarChart3, title: "التحليل الرقمي ولوحات التحكم التشغيلية", note: "BI & Analytics" },
  { icon: Workflow, title: "أتمتة العمليات الإدارية والتكامل التقني", note: "API & ERP" },
  { icon: BrainCircuit, title: "خدمات الذكاء الاصطناعي وتحليل البيانات التشغيلية", note: "AI" },
  { icon: Building2, title: "التحول الرقمي للمنشآت الصغيرة والمتوسطة", note: "SMEs" },
  { icon: ShoppingCart, title: "تطوير المتاجر الإلكترونية وخدمات الدفع الإلكتروني", note: "E-commerce" },
  { icon: Compass, title: "الاستشارات التقنية وإدارة المشاريع الرقمية", note: "Consulting" },
];

const values = [
  { icon: Lightbulb, name: "الابتكار", text: "تقديم حلول تقنية فريدة ومتكاملة." },
  { icon: Target, name: "الاستدامة", text: "بناء مشاريع طويلة الأمد تراعي الأثر الاقتصادي والمجتمعي." },
  { icon: Sparkles, name: "المرونة", text: "مواكبة التغيرات السريعة في البيئة التقنية." },
  { icon: ShieldCheck, name: "التميز", text: "الالتزام بالجودة العالية في جميع مراحل التطوير والتنفيذ." },
  { icon: Users, name: "التمكين", text: "دعم العملاء وشركاء النجاح لتحقيق أقصى استفادة من التحول الرقمي." },
];

const roles = [
  { title: "منظومات متكاملة", text: "نبني نظمًا رقمية متكاملة تربط بين الشركات والعملاء عبر تقنيات ذكية توفر الكفاءة التشغيلية والشفافية." },
  { title: "رقمنة سحابية", text: "نعتمد نموذج عمل قائمًا على الرقمنة السحابية والتكامل التقني لتقليل التكاليف، وتحسين إدارة البيانات، ورفع رضا المستخدمين." },
  { title: "قرارات مبنية على البيانات", text: "نوفر التحليل الذكي للبيانات والأتمتة التشغيلية لتساعد المؤسسات على اتخاذ قرارات دقيقة مبنية على مؤشرات أداء واقعية." },
];

const logistics = [
  "إدارة عمليات الطلبات والاستلام والتوصيل عبر منصات موحدة",
  "تمكين الشركاء من تتبع الأداء وتحليل النتائج التشغيلية",
  "توفير نظام دفع إلكتروني آمن ومتكامل",
  "تقديم دعم فني وتشغيلي للمغاسل والمتاجر والمطاعم عبر النظام الرقمي",
];

const sectors = [
  { icon: Shirt, name: "المغاسل" },
  { icon: Store, name: "المتاجر" },
  { icon: UtensilsCrossed, name: "المطاعم" },
];

const impact = [
  "خلق فرص عمل نوعية في مجالات التقنية والتشغيل",
  "دعم المنشآت الصغيرة والمتوسطة عبر رقمنة أعمالها",
  "تمكين الشباب من دخول قطاع التقنية عبر مبادرات التدريب والاحتضان",
  "تعزيز الابتكار المحلي في المجالات التقنية والذكاء الاصطناعي",
  "دعم الاستدامة بحلول رقمية تقلل الاعتماد على الورق والنقل التقليدي",
];

const vision = [
  "التوسع في تقديم حلول الذكاء الاصطناعي وتحليل البيانات التنبؤية",
  "إطلاق «أكاديمية ابتدار الحلول» لتأهيل الكفاءات السعودية في مجال التقنية",
  "فتح شراكات استراتيجية مع حاضنات ومسرّعات الأعمال",
  "التوسع الإقليمي لتقديم الحلول التقنية للأسواق الخليجية والعربية",
  "الاستثمار في مشاريع رقمية وطنية تخدم رؤية السعودية 2030",
];

/* ---------------- مكونات صغيرة ---------------- */

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 text-sm font-semibold ${light ? "text-brand-100" : "text-brand"}`}>{children}</p>
  );
}

function Heading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`text-3xl font-bold leading-snug md:text-[2.5rem] md:leading-[1.3] ${light ? "text-white" : "text-navy"}`}>
      {children}
    </h2>
  );
}

/** لوحة تشغيلية توضيحية في الهيرو (مبنية بـ HTML، بدون صور) */
function HeroVisual() {
  const bars = [38, 52, 44, 66, 58, 78, 92];
  return (
    <div className="relative mx-auto w-full max-w-[460px]" aria-hidden>
      <div className="absolute -inset-6 rounded-[2rem] bg-brand/10 blur-2xl" />

      {/* البطاقة الرئيسية */}
      <div className="relative rounded-2xl border border-line bg-white p-6 shadow-lift">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted">الطلبات هذا الأسبوع</p>
            <p className="mt-1 text-3xl font-bold text-navy">1,284</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700" dir="ltr">
            +24%
          </span>
        </div>
        <div className="mt-6 flex h-32 items-end gap-2.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`bar flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-brand" : "bg-brand-100"}`}
              style={{ height: `${h}%`, animationDelay: `${0.3 + i * 0.06}s` }}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between text-xs text-muted">
          {["سبت", "أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"].map((d) => <span key={d}>{d}</span>)}
        </div>
      </div>

      {/* بطاقة التوصيل */}
      <div className="absolute -bottom-8 -start-4 w-56 rounded-xl border border-line bg-white p-4 shadow-lift sm:-start-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand"><Truck size={18} /></span>
          <div>
            <p className="text-sm font-semibold text-navy">الطلب في الطريق</p>
            <p className="text-xs text-muted">الوصول خلال 18 دقيقة</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-mist"><div className="h-full w-2/3 rounded-full bg-brand" /></div>
      </div>

      {/* بطاقة الدفع */}
      <div className="absolute -top-6 -end-3 flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-lift sm:-end-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white"><CreditCard size={18} /></span>
        <div>
          <p className="text-sm font-semibold text-navy">دفع ناجح</p>
          <p className="text-xs text-muted" dir="ltr">SAR 245.00</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- الصفحة ---------------- */

export default function Page() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        تخطَّ إلى المحتوى
      </a>

      {/* الترويسة */}
      <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md">
        <div className="relative mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-5">
          <a href="#top" aria-label="ابتدار الحلول - الصفحة الرئيسية" className="flex shrink-0 items-center gap-2">
            <Image src="/mark.png" alt="" width={48} height={48} priority className="h-10 w-10" />
            <span className="text-lg font-bold text-navy">ابتدار الحلول</span>
          </a>
          <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-[15px] font-medium text-navy/75 transition hover:bg-mist hover:text-navy">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 md:inline-block">
              تواصل معنا
            </a>
            <MobileNav items={nav} />
          </div>
        </div>
      </header>

      <main id="main">
        {/* الهيرو */}
        <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-white">
          <div className="hero-grid pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-16 md:grid-cols-[1.1fr_1fr] md:pb-32 md:pt-24">
            <div>
              <p className="rise inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-4 py-1.5 text-sm font-medium text-brand shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand" />
                شركة سعودية للتحول الرقمي
              </p>
              <h1 className="rise rise-2 mt-6 text-4xl font-bold leading-[1.3] text-navy sm:text-5xl md:text-[3.5rem] md:leading-[1.25]">
                نبادر بأعمالك نحو <span className="text-brand">المستقبل الرقمي</span>
              </h1>
              <p className="rise rise-3 mt-6 max-w-xl text-lg leading-8 text-muted">
                نمكّن المؤسسات والقطاعات التقليدية من دخول العالم الرقمي عبر منظومات ذكية ومتكاملة
                تجمع بين التقنية والإدارة والاستدامة.
              </p>
              <div className="rise rise-4 mt-9 flex flex-wrap gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-semibold text-white shadow-card transition hover:bg-brand-600">
                  ابدأ مشروعك
                  <ArrowLeft size={18} className="transition group-hover:-translate-x-1" aria-hidden />
                </a>
                <a href="#services" className="inline-flex items-center rounded-xl border border-line bg-white px-7 py-3.5 font-semibold text-navy transition hover:border-navy/30">
                  تعرّف على خدماتنا
                </a>
              </div>
              <dl className="rise rise-4 mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
                {[
                  { k: "+20", v: "عامًا من الخبرة" },
                  { k: "8", v: "خدمات تقنية" },
                  { k: "2030", v: "متوافقون مع الرؤية" },
                ].map((s) => (
                  <div key={s.v}>
                    <dt className="sr-only">{s.v}</dt>
                    <dd className="text-2xl font-bold text-navy md:text-3xl" dir="ltr" style={{ textAlign: "right" }}>{s.k}</dd>
                    <dd className="mt-1 text-sm text-muted">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rise rise-3 px-4 sm:px-8">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* من نحن */}
        <section id="about" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Eyebrow>من نحن</Eyebrow>
              <Heading>لماذا «ابتدار الحلول»؟</Heading>
              <p className="mt-5 leading-8 text-muted">
                «ابتدار الحلول» تعني المبادرة والمسارعة إلى الشيء قبل غيرك. وهذا ما نفعله: نبادر بعملائنا
                إلى الحلول الرقمية قبل أن تصبح ضرورة، ليسبقوا السوق بدل أن يلحقوا به.
              </p>
              <p className="mt-4 leading-8 text-muted">
                نسعى لأن نكون شريكًا استراتيجيًا في بناء الاقتصاد الرقمي الوطني، بما يتماشى مع رؤية
                المملكة 2030، ونفتح آفاقًا جديدة أمام ريادة الأعمال في السوق السعودي.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, name, text }, i) => (
                <li
                  key={name}
                  className={`rounded-2xl border border-line bg-white p-6 transition hover:border-brand/30 hover:shadow-card ${i === values.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand">
                    <Icon size={20} aria-hidden />
                  </span>
                  <p className="mt-4 text-lg font-bold text-navy">{name}</p>
                  <p className="mt-1.5 leading-7 text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* الخدمات */}
        <section id="services" className="bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <Eyebrow>الخدمات</Eyebrow>
              <Heading>خدماتنا التقنية</Heading>
              <p className="mt-4 leading-8 text-muted">
                مجموعة متكاملة من الخدمات تغطي رحلة التحول الرقمي، من الفكرة إلى التشغيل.
              </p>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, note }) => (
                <li key={title} className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition group-hover:bg-brand">
                    <Icon size={22} aria-hidden />
                  </span>
                  <p className="mt-5 flex-1 text-[17px] font-bold leading-7 text-navy">{title}</p>
                  <p dir="ltr" className="mt-4 text-right text-xs font-semibold uppercase tracking-wider text-brand">{note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* دورنا */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <Eyebrow>كيف نعمل</Eyebrow>
              <Heading>دورنا في تمكين التحول الرقمي</Heading>
            </div>
            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {roles.map((r, i) => (
                <li key={r.title} className="relative border-t-2 border-line pt-8">
                  <span className="absolute -top-[2px] start-0 h-[2px] w-16 bg-brand" />
                  <span className="text-sm font-bold text-brand" dir="ltr">0{i + 1}</span>
                  <p className="mt-2 text-xl font-bold text-navy">{r.title}</p>
                  <p className="mt-3 leading-8 text-muted">{r.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* الذراع اللوجستي */}
        <section id="logistics" className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
          <div className="pointer-events-none absolute -top-40 end-[-10rem] h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
            <div>
              <Eyebrow light>الذراع اللوجستي</Eyebrow>
              <Heading light>الذراع اللوجستي الرقمي للشركات التقليدية</Heading>
              <p className="mt-5 max-w-lg leading-8 text-white/70">
                نلعب دور الذراع اللوجستي الرقمي للشركات التي تفتقر إلى بنية رقمية متكاملة، فنتولى
                التقنية لتتفرغ أنت لنشاطك.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {sectors.map(({ icon: Icon, name }) => (
                  <span key={name} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm">
                    <Icon size={16} className="text-brand-100" aria-hidden />
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-3">
              {logistics.map((l) => (
                <li key={l} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5 backdrop-blur-sm">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand">
                    <Check size={16} strokeWidth={3} aria-hidden />
                  </span>
                  <span className="leading-7 text-white/90">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* الأثر */}
        <section id="impact" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <Eyebrow>الأثر</Eyebrow>
              <Heading>الأثر الاقتصادي والاجتماعي</Heading>
              <p className="mt-5 leading-8 text-muted">
                نسهم في تعزيز التحول الرقمي والاقتصاد المعرفي في المملكة من خلال:
              </p>
            </div>
            <ul className="divide-y divide-line rounded-2xl border border-line bg-white">
              {impact.map((item) => (
                <li key={item} className="flex items-start gap-4 p-5 leading-7 text-navy/90">
                  <Check size={20} className="mt-1 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* الفريق والرؤية */}
        <section id="vision" className="bg-mist py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-line bg-white p-8 md:p-10">
              <Eyebrow>الفريق المؤسس</Eyebrow>
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-2xl font-bold text-white">أ</span>
                <div>
                  <p className="text-xl font-bold text-navy">أحمد فؤاد سيف</p>
                  <p className="text-sm text-muted">المؤسس والمدير العام</p>
                </div>
              </div>
              <p className="mt-6 leading-8 text-muted">
                خبير في إدارة سلاسل الإمداد والتحول الرقمي بخبرة تتجاوز 20 عامًا في كبرى شركات
                الأغذية والصناعات التحويلية.
              </p>
              <p className="mt-4 leading-8 text-muted">
                يقود الفريق التقني مبرمجون ومهندسون مختصون في تطوير التطبيقات السحابية والتكامل بين
                الأنظمة، بالتعاون مع شركاء نجاح محليين ودوليين في البرمجيات والخدمات اللوجستية
                والتحليل الرقمي.
              </p>
            </div>
            <div className="rounded-3xl border border-line bg-white p-8 md:p-10">
              <Eyebrow>المستقبل</Eyebrow>
              <h3 className="text-2xl font-bold text-navy">رؤيتنا المستقبلية</h3>
              <ul className="mt-6 space-y-4">
                {vision.map((v) => (
                  <li key={v} className="flex items-start gap-3 leading-7 text-navy/90">
                    <Rocket size={18} className="mt-1 shrink-0 text-brand" aria-hidden />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* التواصل */}
        <section id="contact" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-700 to-brand-600 px-6 py-14 text-center text-white md:px-16 md:py-20">
              <div className="pointer-events-none absolute inset-x-0 -bottom-32 mx-auto h-72 w-[40rem] max-w-full rounded-full bg-brand/40 blur-3xl" />
              <div className="relative">
                <Heading light>جاهز لتحوّل أعمالك رقميًا؟</Heading>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/75">
                  أخبرنا عن نشاطك وسنقترح عليك الحل المناسب.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <a href={`https://wa.me/${PHONE_INTL}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 font-semibold text-navy transition hover:bg-brand-50">
                    <MessageCircle size={18} aria-hidden />
                    واتساب
                  </a>
                  <a href={`tel:+${PHONE_INTL}`} className="inline-flex items-center gap-2.5 rounded-xl border border-white/25 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                    <Phone size={18} aria-hidden />
                    <span dir="ltr">{PHONE}</span>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2.5 rounded-xl border border-white/25 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                    <Mail size={18} aria-hidden />
                    <span dir="ltr">{EMAIL}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* التذييل */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2">
              <Image src="/mark.png" alt="" width={40} height={40} className="h-9 w-9" />
              <span className="font-bold text-navy">ابتدار الحلول</span>
            </div>
            <p className="text-sm text-muted" dir="ltr">IBTIDAR ALHULUL COMPANY</p>
          </div>
          <nav aria-label="روابط التذييل" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-navy">{n.label}</a>
            ))}
          </nav>
          <p className="text-sm text-muted" dir="ltr">© 2026 IBTIDAR ALHULUL COMPANY. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
