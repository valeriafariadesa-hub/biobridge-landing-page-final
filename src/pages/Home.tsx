import { ArrowRight, CheckCircle, Globe, MapPin, QrCode, Smartphone, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const translations = {
  pt: {
    nav: {
      problem: "O Problema",
      solution: "Solução",
      howItWorks: "Como Funciona",
      contact: "Contato",
      requestDemo: "Agendar uma Conversa",
    },
    hero: {
      tagline: "Conformidade EUDR Simplificada",
      title: "A Ponte Entre\na Amazônia e\na Europa",
      description: "Um CRM móvel offline-first que capacita pequenos produtores amazônicos a comprovar que seus produtos são livres de desmatamento, desbloqueando acesso ao mercado europeu.",
      getStarted: "Começar",
      learnMore: "Quer saber mais? Agende uma conversa.",
    },
    problem: {
      label: "O Problema",
      title: "$2 Bilhões USD em Exportações em Risco",
      description: "O Regulamento de Desmatamento da UE (EUDR) exige prova digital de que produtos como café, cacau e madeira são livres de desmatamento. Pequenos produtores na Amazônia carecem de tecnologia para cumprir, arriscando seus meios de vida e sendo cortados do mercado europeu.",
      geolocation: "Mandato de Geolocalização",
      geolocationDesc: "Cada produto deve ser rastreado para uma coordenada GPS específica.",
      connectivity: "Zero Conectividade",
      connectivityDesc: "Regiões profundas da Amazônia não têm acesso à internet.",
      satellite: "Verificação por Satélite",
      satelliteDesc: "Os dados devem ser comparados com mapas de desmatamento.",
      cutoffDate: "Data Limite",
    },
    solution: {
      label: "A Solução",
      title: "Rastreabilidade Offline-First",
      description: "Fechamos a divisão digital com um CRM móvel ultra-simples. Nossa interface foi desenhada com foco total no trabalhador rural, priorizando a simplicidade para quem possa não ter muita intimidade com tecnologia. Funciona sem internet, captura dados de GPS automaticamente e sincroniza com a nuvem quando a conectividade está disponível.",
      simpleApp: "Aplicativo Simples",
      simpleAppDesc: "Desenhado para líderes de cooperativas, não para especialistas em tecnologia.",
      qrScanning: "Escaneamento QR",
      qrScanningDesc: "Vincule colheitas a sacos com um simples scan.",
      autoGps: "GPS Automático",
      autoGpsDesc: "Coordenadas capturadas automaticamente, sem entrada do usuário.",
      instantPassport: "Passaporte Instantâneo",
      instantPassportDesc: "Gere um PDF/QR de conformidade para compradores.",
    },
    howItWorks: {
      label: "Como Funciona",
      title: "Da Floresta para Frankfurt em 3 Passos",
      capture: "Capturar",
      captureDesc: "Agentes de campo registram colheitas e escaneiam códigos QR offline. GPS é capturado automaticamente.",
      verify: "Verify",
      verifyDesc: "Os dados sincronizam com a nuvem e são automaticamente comparados com mapas de desmatamento por satélite.",
      certify: "Certificar",
      certifyDesc: "Um 'Passaporte de Conformidade' é gerado, pronto para ser compartilhado com importadores europeus.",
    },
    output: {
      label: "O Resultado",
      title: "O Passaporte de Conformidade",
      description: "O resultado final é um documento digital verificável que prova que a origem do produto é livre de desmatamento. Pode ser compartilhado como PDF ou escaneado como código QR, fornecendo confiança instantânea para importadores alemães e europeus.",
      gpsCoordinates: "Coordenadas GPS verificáveis de origem",
      satelliteTimestamp: "Timestamp de verificação por satélite",
      qrCode: "Código QR único e à prova de falsificação",
      samplePassport: "Ver um Passaporte de Exemplo",
    },
    cta: {
      title: "Pronto para Fechar a Lacuna?",
      description: "Vamos conversar sobre como BioBridge AI pode ajudar sua organização a acessar o mercado europeu.",
      requestDemo: "Agendar uma Conversa",
    },
    footer: {
      copyright: "© 2026 BioBridge AI. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
    },
  },
  en: {
    nav: {
      problem: "The Problem",
      solution: "Solution",
      howItWorks: "How It Works",
      contact: "Contact",
      requestDemo: "Schedule a Conversation",
    },
    hero: {
      tagline: "EUDR Compliance Made Simple",
      title: "The Bridge\ntBetween\nthe Amazon\nand Europe",
      description: "An offline-first mobile CRM that empowers small Amazonian producers to prove their products are deforestation-free, unlocking access to the EU market.",
      getStarted: "Get Started",
      learnMore: "Want to learn more? Schedule a conversation.",
    },
    problem: {
      label: "The Problem",
      title: "$2 Billion USD in Exports at Risk",
      description: "The EU Deforestation Regulation (EUDR) requires digital proof that products like coffee, cocoa, and wood are deforestation-free. Small producers in the Amazon lack the technology to comply, risking their livelihoods and cutting them off from the European market.",
      geolocation: "Geolocation Mandate",
      geolocationDesc: "Every product must be traced to a specific GPS coordinate.",
      connectivity: "Zero Connectivity",
      connectivityDesc: "Deep Amazonian regions have no internet access.",
      satellite: "Satellite Verification",
      satelliteDesc: "Data must be cross-referenced with deforestation maps.",
      cutoffDate: "Cutoff Date",
    },
    solution: {
      label: "The Solution",
      title: "Offline-First Traceability",
      description: "We bridge the digital divide with an ultra-simple mobile CRM designed for field agents. It works without internet, captures GPS data automatically, and syncs to the cloud when connectivity is available.",
      simpleApp: "Simple App",
      simpleAppDesc: "Designed for co-op leaders, not tech experts.",
      qrScanning: "QR Scanning",
      qrScanningDesc: "Link harvests to bags with a simple scan.",
      autoGps: "Auto GPS",
      autoGpsDesc: "Coordinates captured automatically, no user input needed.",
      instantPassport: "Instant Passport",
      instantPassportDesc: "Generate a compliance PDF/QR for buyers.",
    },
    howItWorks: {
      label: "How It Works",
      title: "From Forest to Frankfurt in 3 Steps",
      capture: "Capture",
      captureDesc: "Field agents log harvests and scan QR codes offline. GPS is captured automatically.",
      verify: "Verify",
      verifyDesc: "Data syncs to the cloud and is automatically cross-referenced with satellite deforestation maps.",
      certify: "Certify",
      certifyDesc: "A \"Compliance Passport\" is generated, ready to be shared with European importers.",
    },
    output: {
      label: "The Output",
      title: "The Compliance Passport",
      description: "The final output is a verifiable digital document that proves the product's origin is deforestation-free. It can be shared as a PDF or scanned as a QR code, providing instant trust for German and European importers.",
      gpsCoordinates: "Verifiable GPS coordinates of origin",
      satelliteTimestamp: "Satellite verification timestamp",
      qrCode: "Unique, tamper-proof QR code",
      samplePassport: "See a Sample Passport",
    },
    cta: {
      title: "Ready to Bridge the Gap?",
      description: "Let's talk about how BioBridge AI can help your organization access the European market.",
      requestDemo: "Schedule a Conversation",
    },
    footer: {
      copyright: "© 2026 BioBridge AI. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const t = translations[language];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "pt" | "en" | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: "pt" | "en") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F7F5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00382B] text-[#F1F7F5]">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="font-display text-xl font-bold tracking-tight">
            BioBridge<span className="text-[#dd6036]">AI</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#problem" className="hover:text-[#00A896] transition-colors">{t.nav.problem}</a>
            <a href="#solution" className="hover:text-[#00A896] transition-colors">{t.nav.solution}</a>
            <a href="#how-it-works" className="hover:text-[#00A896] transition-colors">{t.nav.howItWorks}</a>
            <a href="#contact" className="hover:text-[#00A896] transition-colors">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 bg-[#1C4E43] p-1 rounded">
              <button
                onClick={() => handleLanguageChange("pt")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "pt"
                    ? "bg-[#dd6036] text-white"
                    : "text-[#F1F7F5] hover:text-[#00A896]"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-[#dd6036] text-white"
                    : "text-[#F1F7F5] hover:text-[#00A896]"
                }`}
              >
                EN
              </button>
            </div>
            <Button className="bg-[#dd6036] hover:bg-[#c94f2a] text-white font-bold" onClick={() => window.open('https://form.typeform.com/to/qMMYzSqn', '_blank')}>
              {t.nav.requestDemo}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663305354612/7kQgTxnnMrrf2uXEzV7VPV/hero_amazon_canopy_ffbad119.jpg"
            alt="Amazon Rainforest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00382B]/90 via-[#00382B]/70 to-transparent" />
        </div>
        <div className="container relative z-10">
        <motion.div
  initial="hidden"
  animate="visible"
  variants={fadeIn}
  className="max-w-4xl text-[#F1F7F5]"
>
  <p 
    className="text-[#dd6036] text-lg font-bold uppercase tracking-[0.2em] mb-4"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
    {t.hero.tagline}
  </p>
<h1 
  className="mb-6 text-white max-w-[800px]"
  style={{ 
    fontFamily: "'Montserrat', sans-serif", 
    fontWeight: 900, 
    fontSize: "clamp(40px, 8vw, 72px)", 
    lineHeight: "1.1",
    letterSpacing: "-0.01em",
    textTransform: "none",
    // This line only applies the breaks if the screen is wider than 768px
    whiteSpace: typeof window !== 'undefined' && window.innerWidth > 768 ? "pre-line" : "normal"
  }}
>
  {t.hero.title}
</h1>
  <p className="text-xl md:text-2xl text-[#F1F7F5]/80 mb-8 leading-relaxed max-w-2xl">
    {t.hero.description}
  </p>
</motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-[#00382B] text-[#F1F7F5]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p className="text-[#dd6036] font-bold uppercase tracking-widest mb-4">{t.problem.label}</p>
              <h2 
  className="text-white mb-6"
  style={{ 
    fontFamily: "'Montserrat', sans-serif", 
    fontWeight: 900, 
    fontSize: "clamp(40px, 5vw, 56px)", 
    lineHeight: "1.1" 
  }}
>
  {t.problem.title}
</h2>
              <p className="text-xl text-[#F1F7F5]/80 mb-8 leading-relaxed">
                {t.problem.description}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-[#dd6036] p-2 mt-1"><MapPin className="h-5 w-5 text-[#F1F7F5]" /></div>
                  <div>
                    <h4 className="font-bold text-lg">{t.problem.geolocation}</h4>
                    <p className="text-[#F1F7F5]/70">{t.problem.geolocationDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-[#dd6036] p-2 mt-1"><Wifi className="h-5 w-5 text-[#F1F7F5]" /></div>
                  <div>
                    <h4 className="font-bold text-lg">{t.problem.connectivity}</h4>
                    <p className="text-[#F1F7F5]/70">{t.problem.connectivityDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-[#dd6036] p-2 mt-1"><Globe className="h-5 w-5 text-[#F1F7F5]" /></div>
                  <div>
                    <h4 className="font-bold text-lg">{t.problem.satellite}</h4>
                    <p className="text-[#F1F7F5]/70">{t.problem.satelliteDesc}</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
              <img
                src="/images/mu1SprUaCWgJ.jpg"
                alt="Amazon Deforestation Map"
                className="w-full border-8 border-[#1C4E43]"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#dd6036] p-6 text-center">
                <p className="font-display text-5xl font-black">2020</p>
                <p className="text-sm font-bold uppercase">{t.problem.cutoffDate}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-[#F1F7F5]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663305354612/7kQgTxnnMrrf2uXEzV7VPV/hero_field_agent_ea84b2c6.jpg"
                alt="Field Agent with Mobile App"
                className="w-full border-8 border-[#00382B]"
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="order-1 md:order-2">
              <p className="text-[#00A896] font-bold uppercase tracking-widest mb-4">{t.solution.label}</p>
              <h2 
  className="text-[#00382B] mb-6"
  style={{ 
    fontFamily: "'Montserrat', sans-serif", 
    fontWeight: 900, 
    fontSize: "clamp(40px, 5vw, 56px)", 
    lineHeight: "1.1" 
  }}
>
  {t.solution.title}
</h2>
              <p className="text-xl text-[#00382B]/80 mb-8 leading-relaxed">
                {t.solution.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#00382B] p-6 text-[#F1F7F5]">
                  <Smartphone className="h-10 w-10 text-[#00A896] mb-4" />
                  <h4 className="font-bold text-lg mb-2">{t.solution.simpleApp}</h4>
                  <p className="text-sm text-[#F1F7F5]/70">{t.solution.simpleAppDesc}</p>
                </div>
                <div className="bg-[#00382B] p-6 text-[#F1F7F5]">
                  <QrCode className="h-10 w-10 text-[#00A896] mb-4" />
                  <h4 className="font-bold text-lg mb-2">{t.solution.qrScanning}</h4>
                  <p className="text-sm text-[#F1F7F5]/70">{t.solution.qrScanningDesc}</p>
                </div>
                <div className="bg-[#00382B] p-6 text-[#F1F7F5]">
                  <MapPin className="h-10 w-10 text-[#00A896] mb-4" />
                  <h4 className="font-bold text-lg mb-2">{t.solution.autoGps}</h4>
                  <p className="text-sm text-[#F1F7F5]/70">{t.solution.autoGpsDesc}</p>
                </div>
                <div className="bg-[#00382B] p-6 text-[#F1F7F5]">
                  <CheckCircle className="h-10 w-10 text-[#00A896] mb-4" />
                  <h4 className="font-bold text-lg mb-2">{t.solution.instantPassport}</h4>
                  <p className="text-sm text-[#F1F7F5]/70">{t.solution.instantPassportDesc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-[#dd6036] text-[#F1F7F5]">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <p className="text-[#00382B] font-bold uppercase tracking-widest mb-4">{t.howItWorks.label}</p>
            <h2 
  className="text-white mb-6"
  style={{ 
    fontFamily: "'Montserrat', sans-serif", 
    fontWeight: 900, 
    fontSize: "clamp(32px, 5vw, 56px)", 
    lineHeight: "1.1",
    letterSpacing: "-0.01em",
    textTransform: "none",
    // Disable forced breaks on mobile
    whiteSpace: typeof window !== 'undefined' && window.innerWidth > 768 ? "pre-line" : "normal"
  }}
>
  {t.cta.title}
</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-[#00382B] p-8 text-center">
              <div 
                className="text-[#00A896] mb-4"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif", 
                  fontWeight: 900, 
                  fontSize: "72px",
                  lineHeight: "1"
                }}
              >
                01
              </div>
              <h3 
                className="text-[#F1F7F5] text-2xl mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
              >
                {t.howItWorks.capture}
              </h3>
              <p className="text-[#F1F7F5]/80">{t.howItWorks.captureDesc}</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-[#00382B] p-8 text-center">
              <div 
                className="text-[#00A896] mb-4"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif", 
                  fontWeight: 900, 
                  fontSize: "72px",
                  lineHeight: "1"
                }}
              >
                02
              </div>
              <h3 
                className="text-[#F1F7F5] text-2xl mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
              >
                {t.howItWorks.verify}
              </h3>
              <p className="text-[#F1F7F5]/80">{t.howItWorks.verifyDesc}</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-[#00382B] p-8 text-center">
              <div 
                className="text-[#00A896] mb-4"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif", 
                  fontWeight: 900, 
                  fontSize: "72px",
                  lineHeight: "1"
                }}
              >
                03
              </div>
              <h3 
                className="text-[#F1F7F5] text-2xl mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
              >
                {t.howItWorks.certify}
              </h3>
              <p className="text-[#F1F7F5]/80">{t.howItWorks.certifyDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Passport Section */}
      <section className="py-24 bg-[#F1F7F5]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p className="text-[#00A896] font-bold uppercase tracking-widest mb-4">{t.output.label}</p>
              <h2 
  className="text-[#00382B] mb-6"
  style={{ 
    fontFamily: "'Montserrat', sans-serif", 
    fontWeight: 900, 
    fontSize: "clamp(40px, 5vw, 56px)", 
    lineHeight: "1.1" 
  }}
>
  {t.output.title}
</h2>
              <p className="text-xl text-[#00382B]/80 mb-8 leading-relaxed">
                {t.output.description}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-[#00382B]">
                  <CheckCircle className="h-6 w-6 text-[#00A896]" />
                  <span className="font-medium">{t.output.gpsCoordinates}</span>
                </li>
                <li className="flex items-center gap-4 text-[#00382B]">
                  <CheckCircle className="h-6 w-6 text-[#00A896]" />
                  <span className="font-medium">{t.output.satelliteTimestamp}</span>
                </li>
                <li className="flex items-center gap-4 text-[#00382B]">
                  <CheckCircle className="h-6 w-6 text-[#00A896]" />
                  <span className="font-medium">{t.output.qrCode}</span>
                </li>
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663305354612/7kQgTxnnMrrf2uXEzV7VPV/compliance_passport_mockup_2f4f8b28.jpg"
                alt="Compliance Passport Mockup"
                className="w-full border-8 border-[#00A896]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#00382B] text-[#F1F7F5]">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-[#F1F7F5]/80 mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <Button size="lg" className="bg-[#dd6036] hover:bg-[#c94f2a] text-white font-bold text-lg px-12" onClick={() => window.open('https://form.typeform.com/to/qMMYzSqn', '_blank')}>
              {t.cta.requestDemo} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#00382B] border-t border-[#1C4E43] text-[#F1F7F5]/60">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#00A896]">{t.footer.privacy}</a>
            <a href="#" className="hover:text-[#00A896]">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
