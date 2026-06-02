"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity, ArrowLeft, Bell, BrainCircuit, Building2, Check, ChevronLeft, CircleHelp,
  Clock3, Cross, ExternalLink, Fingerprint, Globe2, HeartPulse, Map, MapPin, Menu, MessageCircle, Navigation,
  PhoneCall, Play, QrCode, Radio, Route, ScanFace, ShieldCheck, Sparkles, Stethoscope,
  Thermometer, UserRoundCheck, UsersRound, Watch, Wifi, Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps = [
  ["01", "الاستعداد الافتراضي", "محاكاة تفاعلية للمواقف الأساسية قبل الرحلة.", Play],
  ["02", "تقييم جاهزية الحاج", "قياس موضوعي لمستوى الاستعداد وتحديد فجوات المعرفة.", UserRoundCheck],
  ["03", "إنشاء التوأم الرقمي", "ملف ذكي يتطور مع رحلة الحاج وحالته.", Fingerprint],
  ["04", "الملف الصحي الذكي", "بيانات صحية مهمة متاحة فورًا عند الحاجة.", HeartPulse],
  ["05", "مراقبة المخاطر", "تحليل استباقي للإشارات الصحية والبيئية.", Activity],
  ["06", "المساعدة الطارئة", "ربط سريع بأقرب فريق طبي مع معلومات دقيقة.", Cross],
  ["07", "دعم التائهين", "مساندة ذكية للوصول الآمن واستعادة المسار.", Navigation]
] as const;

const difference = [
  "يبدأ قبل الحج وليس أثناءه فقط",
  "يقيس جاهزية الحاج قبل الرحلة",
  "ينشئ توأمًا رقميًا للحاج",
  "يتنبأ بالمخاطر قبل وقوعها",
  "يدعم الجهات الصحية والأمنية"
];

const flow = [
  ["الحاج", UsersRound],
  ["الساعة الذكية", Watch],
  ["محرك الذكاء", BrainCircuit],
  ["رصد المخاطر", Radio],
  ["مركز التحكم", Building2],
  ["أقرب فريق طبي", Stethoscope],
  ["تطبيق المسعف", PhoneCall],
  ["استجابة أسرع", Zap]
] as const;

const future = [
  ["تكامل الأجهزة القابلة للارتداء", Watch],
  ["اكتشاف التائهين بالذكاء الاصطناعي", ScanFace],
  ["رعاية صحية استباقية", HeartPulse],
  ["ذكاء إدارة الحشود", UsersRound],
  ["تكامل الجهات الحكومية", Building2],
  ["مواءمة رؤية السعودية 2030", Sparkles]
] as const;

function IconBubble({ icon: Icon }: { icon: LucideIcon }) {
  return <span className="icon-bubble"><Icon size={19} strokeWidth={1.9} /></span>;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}

function ScoreRing({ value = 95, label = "جاهز للرحلة" }: { value?: number; label?: string }) {
  return (
    <div className="score-ring" style={{ "--score": `${value * 3.6}deg` } as React.CSSProperties}>
      <div>
        <strong>{value}%</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function PhoneFrame({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <article className={`phone ${className}`}>
      <div className="phone-notch" />
      <div className="phone-status"><span>9:41</span><span><Wifi size={11} /> 5G</span></div>
      <div className="phone-content">
        <div className="phone-head"><span>{title}</span><Bell size={16} /></div>
        {children}
      </div>
      <div className="home-line" />
    </article>
  );
}

function PilgrimDashboard() {
  return (
    <PhoneFrame title="مرحبًا، عبدالله" className="phone-main">
      <div className="mobile-score">
        <div><small>درجة جاهزيتك</small><strong>95%</strong><span>ممتاز، أنت مستعد للرحلة</span></div>
        <ScoreRing value={95} label="" />
      </div>
      <div className="mini-title"><span>التوأم الرقمي</span><em>متصل الآن</em></div>
      <div className="twin-card">
        <div className="avatar"><Fingerprint /></div>
        <div><b>حالتي مستقرة</b><small>آخر تحديث قبل دقيقة</small></div>
        <Activity size={21} />
      </div>
      <div className="metric-row">
        <div><HeartPulse size={17} /><b>78</b><small>نبضة</small></div>
        <div><Thermometer size={17} /><b>36.8°</b><small>الحرارة</small></div>
        <div><Route size={17} /><b>1.2</b><small>كم</small></div>
      </div>
      <div className="alert-safe"><ShieldCheck size={17} /><span>مسارك الحالي آمن ولا توجد تنبيهات</span></div>
      <button className="sos-button"><PhoneCall size={16} /> مساعدة طارئة</button>
    </PhoneFrame>
  );
}

function TrainingPhone() {
  return (
    <PhoneFrame title="التدريب الافتراضي">
      <div className="training-art">
        <Image src="/rafeeq-brand.png" alt="هوية رفيق AI" fill sizes="220px" />
        <span><Play size={18} fill="currentColor" /></span>
      </div>
      <small className="overline">سيناريو اليوم</small>
      <h4>ماذا تفعل عند فقدان المسار؟</h4>
      <p className="mobile-copy">تعلّم خطوات الوصول الآمن وطرق طلب المساعدة داخل المشاعر.</p>
      <div className="progress"><i style={{ width: "72%" }} /></div>
      <div className="lesson-row"><b>3 من 5</b><span>72% مكتمل</span></div>
      <button className="mobile-primary">متابعة التدريب <ChevronLeft size={14} /></button>
    </PhoneFrame>
  );
}

function AlertPhone() {
  return (
    <PhoneFrame title="التنبيهات الذكية">
      <div className="alert-card urgent"><Thermometer /><div><b>تنبيه حرارة</b><small>مستوى الحرارة مرتفع في مسارك الحالي</small></div></div>
      <div className="alert-card"><UsersRound /><div><b>ازدحام متوقع</b><small>استخدم المسار البديل خلال 15 دقيقة</small></div></div>
      <div className="route-card">
        <MapPin size={20} /><div><small>المسار الأنسب الآن</small><b>باب الملك فهد ← المسار B</b></div>
      </div>
      <button className="mobile-primary">عرض المسار الآمن <Navigation size={14} /></button>
    </PhoneFrame>
  );
}

function WatchCard({ type }: { type: "health" | "sos" | "route" }) {
  const content = {
    health: <><HeartPulse size={31} /><small>معدل النبض</small><b>78</b><em>BPM</em></>,
    sos: <><PhoneCall size={31} /><b>SOS</b><small>اضغط 3 ثوانٍ</small></>,
    route: <><Navigation size={31} /><small>المسار الآمن</small><b>280 م</b><em>اتجه يسارًا</em></>
  }[type];
  return <div className={`watch ${type}`}><div className="watch-face">{content}</div></div>;
}

function CommandDashboard() {
  return (
    <div className="dashboard-frame">
      <div className="dash-top"><b><Radio size={17} /> مركز عمليات رفيق</b><span>مباشر الآن <i /></span></div>
      <div className="dash-body">
        <aside>
          <div className="dash-logo">R<span>AI</span></div>
          {["نظرة عامة", "الخريطة الحية", "الحالات", "الحشود", "التنبؤات"].map((x, i) => <div className={i === 0 ? "active" : ""} key={x}>{x}</div>)}
        </aside>
        <main>
          <div className="dash-title"><div><small>الثلاثاء، 02 يونيو 2026</small><h3>لوحة القيادة المركزية</h3></div><button>موسم الحج 1447 هـ</button></div>
          <div className="dash-tabs"><span>خريطة حية</span><span>البلاغات الطارئة</span><span>مراقبة الحشود</span><span>إحصاءات الجاهزية</span><span>الخرائط الحرارية</span></div>
          <div className="dash-stats">
            <div><UsersRound /><small>الحجاج النشطون</small><b>1,842,650</b><em>+12% اليوم</em></div>
            <div><HeartPulse /><small>تنبيهات صحية</small><b>284</b><em className="warn">تحتاج متابعة</em></div>
            <div><CircleHelp /><small>بلاغات تائهين</small><b>42</b><em>68% تم حلها</em></div>
            <div><Clock3 /><small>متوسط الاستجابة</small><b>04:18</b><em>−32 ثانية</em></div>
          </div>
          <div className="dash-grid">
            <div className="map-panel">
              <div className="panel-head"><b>الخريطة الحية</b><small>مكة المكرمة والمشاعر</small></div>
              <div className="map-bg">
                {[["24%", "36%"], ["54%", "28%"], ["67%", "61%"], ["38%", "70%"], ["78%", "43%"]].map(([l,t], i) => <span style={{ left: l, top: t }} className={`map-dot d${i}`} key={l}><i /></span>)}
                <strong className="map-label l1">منى</strong><strong className="map-label l2">المسجد الحرام</strong><strong className="map-label l3">عرفات</strong>
              </div>
            </div>
            <div className="prediction-panel">
              <div className="panel-head"><b>تنبؤات AI</b><BrainCircuit size={16} /></div>
              <div className="prediction warning"><i /><div><b>كثافة مرتفعة متوقعة</b><small>جسر الجمرات • خلال 35 دقيقة</small></div></div>
              <div className="prediction"><i /><div><b>ارتفاع مؤشرات الإجهاد الحراري</b><small>قطاع A12 • مراقبة مستمرة</small></div></div>
              <div className="chart"><span style={{height:"35%"}} /><span style={{height:"44%"}} /><span style={{height:"52%"}} /><span style={{height:"68%"}} /><span style={{height:"58%"}} /><span style={{height:"79%"}} /><span style={{height:"64%"}} /></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#"><span className="brand-orb">R</span><b>رفيق <i>AI</i></b></a>
        <div className="nav-links"><a href="#solution">الحل</a><a href="#how">كيف يعمل</a><a href="#readiness">الجاهزية</a><a href="#vision">الرؤية</a></div>
        <a href="#contact" className="nav-cta">تواصل معنا <ArrowLeft size={15} /></a>
        <button className="menu" aria-label="فتح القائمة"><Menu /></button>
      </nav>

      <section className="hero">
        <div className="hero-glow g1" /><div className="hero-glow g2" />
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <span className="hero-pill"><Sparkles size={14} /> تقنية سعودية لضيوف الرحمن</span>
          <h1>التوأم الرقمي الذكي<br /><em>لرحلة أكثر أمانًا.</em></h1>
          <p>رفيق AI منصة استباقية تبدأ قبل الرحلة، ترفع جاهزية الحاج، ترافقه أثناء المناسك، وتتنبأ بالمخاطر قبل وقوعها.</p>
          <div className="hero-actions"><a href="#solution" className="primary">اكتشف المنصة <ArrowLeft size={17} /></a><a href="#how" className="secondary"><Play size={15} /> شاهد كيف تعمل</a></div>
          <div className="trust-row"><span><ShieldCheck /> خصوصية وأمان</span><span><BrainCircuit /> ذكاء استباقي</span><span><Building2 /> تكامل حكومي</span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .12 }}>
          <div className="hero-grid" />
          <PilgrimDashboard />
          <div className="float-card fc-health"><HeartPulse /><div><small>الحالة الصحية</small><b>مستقرة وآمنة</b></div></div>
          <div className="float-card fc-ai"><BrainCircuit /><div><small>تحليل AI</small><b>لا توجد مخاطر</b></div></div>
          <div className="float-card fc-score"><b>95%</b><small>درجة الجاهزية</small></div>
          <div className="hero-watch"><WatchCard type="health" /></div>
        </motion.div>
      </section>

      <section className="stats-strip">
        <div><b>قبل الرحلة</b><span>محاكاة وتقييم ذكي</span></div><i />
        <div><b>أثناء المناسك</b><span>مرافقة وتنبؤ بالمخاطر</span></div><i />
        <div><b>عند الطوارئ</b><span>استجابة دقيقة وسريعة</span></div>
      </section>

      <section className="problem section">
        <SectionHeading eyebrow="التحدي" title="سلامة الحاج تحتاج رؤية استباقية" text="الحلول التقليدية تبدأ غالبًا بعد وقوع المشكلة. رفيق يقرأ المؤشرات مبكرًا ويحوّل البيانات إلى تدخل ذكي في الوقت المناسب." />
        <div className="problem-cards">
          <article><span>01</span><HeartPulse /><h3>المخاطر الصحية</h3><p>تغيّرات صحية تحتاج إلى اكتشاف مبكر ومتابعة لحظية.</p></article>
          <article><span>02</span><UsersRound /><h3>كثافة الحشود</h3><p>تدفّقات متغيرة تتطلب توجيهًا مرنًا ومسارات أكثر أمانًا.</p></article>
          <article><span>03</span><Navigation /><h3>فقدان المسار</h3><p>بلاغات تائهين تحتاج إلى وصول أسرع وتنسيق أفضل.</p></article>
        </div>
      </section>

      <section className="solution section" id="solution">
        <div className="solution-visual"><div className="twin-orbit o1" /><div className="twin-orbit o2" /><Fingerprint size={104} /><span className="data-node n1">جاهزية <b>95%</b></span><span className="data-node n2">النبض <b>78</b></span><span className="data-node n3">المخاطر <b>منخفضة</b></span></div>
        <div><SectionHeading eyebrow="الحل" title="رفيق ليس تطبيق حج. إنه منصة توأم رقمي." text="تبدأ المنصة قبل انطلاق الرحلة، وتبني نسخة رقمية ذكية لكل حاج. تتعلم من الاستعداد والبيانات الصحية والسياق المكاني لتقدم توصيات فردية ودعمًا للجهات المختصة." />
        <div className="feature-checks">{["تحليل شخصي واستباقي", "قرارات مبنية على بيانات حية", "مساندة الحاج والجهات في منظومة واحدة"].map(x => <span key={x}><Check />{x}</span>)}</div></div>
      </section>

      <section className="how section" id="how">
        <SectionHeading eyebrow="كيف تعمل المنصة؟" title="رحلة ذكية من الاستعداد إلى الاستجابة" text="سبع خطوات مترابطة تصنع تجربة أكثر أمانًا للحاج، وتمنح فرق الميدان صورة أوضح لاتخاذ القرار." />
        <div className="steps">{steps.map(([n, title, text, Icon]) => <article key={n}><small>{n}</small><IconBubble icon={Icon} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="readiness section" id="readiness">
        <div className="readiness-copy">
          <SectionHeading eyebrow="الميزة الفارقة" title="Pilgrim Readiness Score™" text="مؤشر ذكي يقيس جاهزية الحاج قبل الرحلة من خلال التدريب التفاعلي، والمحاكاة، والاستعداد الصحي. ثم يقدم خطة شخصية لسد الفجوات قبل بدء المناسك." />
          <div className="score-legend"><span><i className="green" /> 95% جاهز</span><span><i className="yellow" /> 70% يحتاج تدريب</span><span><i className="red" /> 50% مخاطر مرتفعة</span></div>
          <a href="#contact" className="text-link">استكشف تجربة التقييم <ArrowLeft /></a>
        </div>
        <div className="readiness-card">
          <div className="card-head"><b>تقييم جاهزية الحاج</b><span>تم التحديث اليوم</span></div>
          <div className="score-layout"><ScoreRing /><div><h3>ممتاز، أنت جاهز للرحلة</h3><p>أكملت 8 من أصل 9 وحدات تدريبية. بقي لك تمرين اختياري واحد.</p></div></div>
          <div className="skill-bars"><span><b>السلامة العامة</b><i><em style={{width:"96%"}} /></i><strong>96%</strong></span><span><b>الاستعداد الصحي</b><i><em style={{width:"90%"}} /></i><strong>90%</strong></span><span><b>فهم المسارات</b><i><em style={{width:"84%"}} /></i><strong>84%</strong></span></div>
        </div>
      </section>

      <section className="difference section">
        <div className="difference-title"><p className="eyebrow">لماذا رفيق؟</p><h2>Why Rafeeq AI is Different?</h2><p>نقل تجربة الحاج من الاستجابة المتأخرة إلى الوقاية الذكية.</p></div>
        <div className="diff-list">{difference.map((x, i) => <div key={x}><span>0{i + 1}</span><b>{x}</b><Check /></div>)}</div>
      </section>

      <section className="app-showcase section">
        <SectionHeading eyebrow="تجربة الحاج" title="رفيق في يد الحاج، خطوة بخطوة" text="واجهات عربية أولًا، مصممة بوضوح وطمأنينة لرحلة يتغير سياقها باستمرار." />
        <div className="phones"><TrainingPhone /><PilgrimDashboard /><AlertPhone /></div>
        <div className="screen-tags">{["الترحيب", "التدريب الافتراضي", "درجة الجاهزية", "التوأم الرقمي", "الملف الصحي", "رمز الطوارئ QR", "التنبيهات", "SOS", "الإعدادات"].map(x => <span key={x}>{x}</span>)}</div>
        <div className="micro-screens">
          <article><Sparkles /><small>أهلًا بك في رفيق</small><b>رفيقك الذكي في رحلة آمنة</b><span>بدء التجربة</span></article>
          <article><HeartPulse /><small>الملف الصحي</small><b>بياناتك الأساسية مكتملة</b><span>عرض الملف</span></article>
          <article className="qr-screen"><QrCode /><small>رمز الطوارئ QR</small><b>بياناتك الطبية متاحة للمسعف</b><span>جاهز للمسح</span></article>
          <article className="sos-screen"><PhoneCall /><small>طلب مساعدة عاجلة</small><b>سنرسل موقعك للفريق المختص</b><span>اضغط باستمرار</span></article>
          <article><ShieldCheck /><small>الإعدادات والخصوصية</small><b>أنت تتحكم في بياناتك</b><span>إدارة الأذونات</span></article>
        </div>
      </section>

      <section className="wearables section">
        <div><SectionHeading eyebrow="رفيق على المعصم" title="تنبيهات سريعة. استجابة أقرب." text="واجهة ساعة ذكية تمنح الحاج أهم المعلومات في لحظتها، حتى في وضع البطارية المنخفضة." /><div className="wearable-list">{["معدل النبض والحرارة", "تنبيه الازدحام", "المسار الآمن", "إشعار الطوارئ", "وضع البطارية المنخفضة"].map(x => <span key={x}><Check />{x}</span>)}</div></div>
        <div className="watches"><WatchCard type="health" /><WatchCard type="sos" /><WatchCard type="route" /></div>
      </section>

      <section className="flow section">
        <SectionHeading eyebrow="تدفق الاستجابة للطوارئ" title="من الإشارة الأولى إلى التدخل الميداني" text="كل ثانية مهمة. رفيق يربط الحاج، ومحرك الذكاء، وفرق العمليات، والمسعفين في مسار واحد واضح." />
        <div className="flowline">{flow.map(([title, Icon], i) => <div className="flow-item" key={title}><IconBubble icon={Icon} /><b>{title}</b>{i < flow.length - 1 && <ChevronLeft />}</div>)}</div>
      </section>

      <section className="paramedic section">
        <div><SectionHeading eyebrow="تطبيق المسعف" title="المعلومة الصحيحة تصل قبل الفريق" text="واجهة ميدانية خفيفة تساعد المسعف على الوصول، الاطلاع على الملف الصحي، وتحديث الحالة بأقل عدد من الخطوات." />
          <div className="feature-checks two-col">{["بلاغ وارد", "الموقع الحي", "التاريخ الطبي", "الحساسية", "الملاحة", "تحديث الحالة"].map(x => <span key={x}><Check />{x}</span>)}</div>
        </div>
        <div className="medic-mock">
          <div className="case-top"><span><Radio /> حالة طارئة واردة</span><b>02:18</b></div>
          <div className="patient"><div>ع</div><span><b>عبدالله محمد</b><small>رقم الحاج • 184-2931</small></span><em>عاجل</em></div>
          <div className="patient-stats"><span><HeartPulse /><b>124</b><small>نبضة</small></span><span><Thermometer /><b>39.2°</b><small>حرارة</small></span><span><MapPin /><b>340م</b><small>مسافة</small></span></div>
          <div className="medic-info"><b>معلومات طبية مهمة</b><p><strong>حساسية:</strong> البنسلين</p><p><strong>حالة مزمنة:</strong> السكري - النوع الثاني</p></div>
          <button><Navigation /> بدء الملاحة إلى الحالة</button>
        </div>
      </section>

      <section className="command section">
        <SectionHeading eyebrow="مركز القيادة" title="صورة موحدة لصناعة القرار" text="لوحة تشغيلية للجهات الصحية والأمنية: مؤشرات لحظية، تنبؤات واضحة، وخرائط حرارية تدعم التحرك المبكر." />
        <CommandDashboard />
      </section>

      <section className="vision section" id="vision">
        <SectionHeading eyebrow="المستقبل" title="منصة وطنية تتوسع مع كل رحلة" text="رفيق AI يبني أساسًا قابلًا للتكامل والنمو، ويدعم مستهدفات برنامج خدمة ضيوف الرحمن ضمن رؤية السعودية 2030." />
        <div className="vision-grid">{future.map(([x, Icon]) => <article key={x}><IconBubble icon={Icon} /><h3>{x}</h3><ArrowLeft /></article>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orb" />
        <p className="eyebrow">ابدأ الحوار</p><h2>نبني مستقبلًا أكثر أمانًا<br />لضيوف الرحمن.</h2>
        <p>للتعاون مع الجهات، وبرامج الابتكار، والشراكات الاستراتيجية.</p>
        <a href="mailto:hello@rafeeq.ai">تواصل مع رفيق AI <ArrowLeft /></a>
      </section>

      <footer className="site-footer">
        <div className="footer-glow" />
        <div className="footer-inner">
          <div className="footer-intro">
            <a className="brand footer-brand" href="#"><span className="brand-orb">R</span><b>رفيق <i>AI</i></b></a>
            <p className="eyebrow">تواصل معنا</p>
            <h2>نبقى على تواصل،<br /><em>ونبني الأثر معًا.</em></h2>
            <p>تابع رحلة رفيق AI، وتعرّف أكثر على المشروع والمؤسسة مريم الحربي.</p>
          </div>
          <div className="footer-links">
            <a href="https://x.com/Rafeeq_Hajj" target="_blank" rel="noopener noreferrer" aria-label="Rafeeq AI Official on X">
              <span className="social-icon x-icon">X</span>
              <span><small>الحساب الرسمي على X</small><b>Rafeeq AI Official</b></span>
              <ExternalLink />
            </a>
            <a href="https://mariam-web.vercel.app/#top" target="_blank" rel="noopener noreferrer" aria-label="Founder Website">
              <span className="social-icon"><Globe2 /></span>
              <span><small>الموقع الشخصي للمؤسسة</small><b>Founder Website</b></span>
              <ExternalLink />
            </a>
            <a href="https://x.com/MiraVibesX" target="_blank" rel="noopener noreferrer" aria-label="Mariam Alharbi on X">
              <span className="social-icon x-icon">X</span>
              <span><small>حساب المؤسسة على X</small><b>Mariam Alharbi</b></span>
              <ExternalLink />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Rafeeq AI — Founded by Mariam Alharbi</small>
          <span>التوأم الرقمي الذكي لضيوف الرحمن</span>
        </div>
      </footer>
    </main>
  );
}
