import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, CheckCircle, DollarSign, Leaf, Shield, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function RegenVerify() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <a href="/regenverify" className="text-xl font-bold tracking-tight">
            REGEN<span className="text-[#32CD32]">VERIFY</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#problem" className="hover:text-[#32CD32] transition-colors">The Problem</a>
            <a href="#solution" className="hover:text-[#32CD32] transition-colors">Solution</a>
            <a href="#impact" className="hover:text-[#32CD32] transition-colors">Impact</a>
            <a href="#contact" className="hover:text-[#32CD32] transition-colors">Contact</a>
          </div>
          <Button className="bg-[#32CD32] hover:bg-[#2ab02a] text-black font-bold">
            Partner With Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_amazon_canopy.jpg"
            alt="Amazon Rainforest"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <p className="text-[#32CD32] font-bold uppercase tracking-widest mb-4">
              Proof of Life for Restoration
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tighter">
              REGEN<br />VERIFY
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-xl">
              A gamified verification platform that pays local communities to prove trees are alive, giving investors transparent, auditable "Proof of Impact."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#32CD32] hover:bg-[#2ab02a] text-black font-bold text-lg px-8">
                Become a Partner <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg px-8">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white text-black">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p className="text-[#32CD32] font-bold uppercase tracking-widest mb-4">The Problem</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
                Greenwashing is Stalling Investment
              </h2>
              <p className="text-xl text-black/70 mb-8 leading-relaxed">
                Corporations pour money into "tree planting" in the Amazon, but they rarely know if the trees survived 6 months later. "Greenwashing" accusations are rampant. Investors need Proof of Impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-black p-2 mt-1"><Leaf className="h-5 w-5 text-[#32CD32]" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Plant & Forget</h4>
                    <p className="text-black/60">High mortality rates in unmonitored restoration projects.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-black p-2 mt-1"><Shield className="h-5 w-5 text-[#32CD32]" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Trust Deficit</h4>
                    <p className="text-black/60">Satellite data alone cannot verify individual sapling health.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-black p-2 mt-1"><DollarSign className="h-5 w-5 text-[#32CD32]" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Stalled Capital</h4>
                    <p className="text-black/60">ESG investors demand verifiable, auditable proof of impact.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative">
              <img
                src="/images/8B4XOoAemFDg.jpg"
                alt="Restoration Workers"
                className="w-full border-4 border-black grayscale"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#32CD32] p-6 text-center text-black">
                <p className="text-5xl font-black">85%</p>
                <p className="text-sm font-bold uppercase">Verified Survival</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-black">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <p className="text-[#32CD32] font-bold uppercase tracking-widest mb-4">The Solution</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              "Proof of Life" Verification Platform
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="border-l-4 border-[#32CD32] pl-6">
              <div className="text-6xl font-black text-[#708090] mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Escrow Model</h3>
              <p className="text-white/60">Companies pay for restoration. Funds are held in escrow and released only upon verified "Proof of Life."</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="border-l-4 border-[#32CD32] pl-6">
              <div className="text-6xl font-black text-[#708090] mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Gig Economy</h3>
              <p className="text-white/60">Local community members download the app and receive "missions" to visit and photograph geolocated saplings.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="border-l-4 border-[#32CD32] pl-6">
              <div className="text-6xl font-black text-[#708090] mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">AI Verification</h3>
              <p className="text-white/60">Computer vision analyzes the photo to verify the species and health. Verified photos trigger instant micropayments via Pix.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-[#32CD32] text-black">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <p className="text-black/70 font-bold uppercase tracking-widest mb-4">The Impact</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
                A Win-Win for Investors & Communities
              </h2>
              <p className="text-xl text-black/70 mb-8 leading-relaxed">
                RegenVerify creates a new income stream for locals (paying them to keep the forest standing) while providing transparent, auditable data for investors.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black p-6 text-white">
                  <Users className="h-10 w-10 text-[#32CD32] mb-4" />
                  <h4 className="font-bold text-lg mb-2">200+ Guardians</h4>
                  <p className="text-sm text-white/60">Local community members earning income.</p>
                </div>
                <div className="bg-black p-6 text-white">
                  <Camera className="h-10 w-10 text-[#32CD32] mb-4" />
                  <h4 className="font-bold text-lg mb-2">10,000+ Trees</h4>
                  <p className="text-sm text-white/60">Verified and monitored quarterly.</p>
                </div>
                <div className="bg-black p-6 text-white">
                  <Smartphone className="h-10 w-10 text-[#32CD32] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Instant Pix</h4>
                  <p className="text-sm text-white/60">Micropayments sent directly to guardians.</p>
                </div>
                <div className="bg-black p-6 text-white">
                  <CheckCircle className="h-10 w-10 text-[#32CD32] mb-4" />
                  <h4 className="font-bold text-lg mb-2">Auditable Data</h4>
                  <p className="text-sm text-white/60">Transparent reports for ESG compliance.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <img
                src="/images/TByjTlyi9D7N.jpg"
                alt="Community Members"
                className="w-full border-4 border-black"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight">
              Ready to Verify Your Impact?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Partner with us to bring transparent, verifiable restoration to your ESG portfolio. Let's build the gold standard together.
            </p>
            <Button size="lg" className="bg-[#32CD32] hover:bg-[#2ab02a] text-black font-bold text-lg px-12">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-white/40">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; 2026 RegenVerify. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-[#32CD32]">Privacy Policy</a>
            <a href="#" className="hover:text-[#32CD32]">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
