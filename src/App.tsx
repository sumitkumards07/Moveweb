/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Smartphone, MapPin, Navigation, Car, CreditCard, Clock, Map, TrendingUp, ShieldCheck, ChevronRight, QrCode } from 'lucide-react';

const DRIVER_APK_URL = '/app-release.apk';

// Reusable Components
const AppLogo = ({ className = "w-10 h-10", dark = false }: { className?: string; dark?: boolean }) => {
  const carColor = dark ? "#FFFFFF" : "#121212";
  const lightColor = dark ? "#121212" : "#FFFFFF";
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path 
        d="M 18 88 V 40 C 18 20 32 20 50 38 C 68 20 82 20 82 40 V 88" 
        stroke="#FFCC00" 
        strokeWidth="22" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g transform="translate(0, 3)">
        <rect x="42" y="55" width="16" height="8" rx="4" fill="#FFCC00" />
        <path d="M 35 68 C 38 60 42 58 50 58 C 58 58 62 60 65 68 L 68 85 C 68 90 65 92 50 92 C 35 92 32 90 32 85 Z" fill={carColor} />
        <circle cx="30" cy="74" r="3" fill={carColor} />
        <circle cx="70" cy="74" r="3" fill={carColor} />
        <ellipse cx="40" cy="82" rx="5" ry="3" fill={lightColor} transform="rotate(-10 40 82)" />
        <ellipse cx="60" cy="82" rx="5" ry="3" fill={lightColor} transform="rotate(10 60 82)" />
      </g>
    </svg>
  );
};

const AppStoreButton = ({ text, subText, dark = false, href }: { text: string, subText: string, dark?: boolean, href?: string }) => (
  <a href={href} download className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 ${dark ? 'bg-asphalt-black text-white hover:bg-gray-900 border border-gray-800' : 'bg-taxi-yellow text-asphalt-black hover:bg-yellow-400'}`}>
    <Smartphone size={28} />
    <div className="text-left">
      <div className="text-sm font-medium opacity-80">{subText}</div>
      <div className="text-xl border-t border-transparent leading-tight">{text}</div>
    </div>
  </a>
);

const FeatureCard = ({ icon: Icon, title, description, dark = false }: { icon: any, title: string, description: string, dark?: boolean }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-6 rounded-2xl ${dark ? 'bg-gray-900 border border-gray-800 text-white' : 'bg-white shadow-xl text-asphalt-black'}`}
  >
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${dark ? 'bg-taxi-yellow/20 text-taxi-yellow' : 'bg-taxi-yellow/10 text-taxi-yellow'}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className={dark ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-asphalt-black min-h-screen text-white font-sans selection:bg-taxi-yellow selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-asphalt-black/80 border-b border-white/5">
        <div className="flex items-center gap-2">
          <AppLogo className="w-10 h-10" dark={true} />
          <span className="text-2xl font-bold tracking-tight">Tirth Travels<span className="text-taxi-yellow">.</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#benefits" className="hover:text-taxi-yellow transition-colors">Benefits</a>
          <a href="#earnings" className="hover:text-taxi-yellow transition-colors">Earnings</a>
          <a href="#safety" className="hover:text-taxi-yellow transition-colors">Safety</a>
        </div>
        <a href={DRIVER_APK_URL} download className="bg-taxi-yellow text-asphalt-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors inline-block text-center">
          Download App
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 overflow-hidden bg-asphalt-black min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt-black via-asphalt-black/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-taxi-yellow text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-taxi-yellow animate-pulse"></span>
              Join Thousands of Drivers
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Your Car.<br/>
              <span className="text-taxi-yellow text-glow">Your Rules.</span><br/>
              Start Earning.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
              Take control of your income. Drive with <strong className="text-white">Tirth Travels</strong> to enjoy flexible hours, instant payouts, and the best rates in your city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AppStoreButton href={DRIVER_APK_URL} text="Download Tirth Travels APK" subText="Get the Driver App" />
            </div>
          </motion.div>

          {/* 3D Mockup Area - Focusing only on the Driver App */}
          <div className="relative h-[500px] lg:h-[600px] flex justify-center items-center perspective-[2000px]">
            {/* Background glowing orb */}
            <div className="absolute inset-0 bg-taxi-yellow/20 blur-[100px] rounded-full w-3/4 h-3/4 m-auto"></div>
            
            {/* Center Phone - Mover App */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotateY: 0, rotateX: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotateY: -10, rotateX: 5, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute w-[280px] h-[580px] bg-asphalt-black rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden shadow-taxi-yellow/20 z-20"
            >
              <div className="absolute top-0 w-full h-6 bg-gray-900 rounded-b-2xl flex justify-center items-end pb-1 z-20">
                <div className="w-16 h-1.5 bg-gray-700 rounded-full"></div>
              </div>
              <div className="relative w-full h-full flex flex-col px-4 pt-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center border border-gray-700">
                    <Car className="text-taxi-yellow" size={20} />
                  </div>
                  <div className="bg-green-500/20 text-green-400 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    ONLINE
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-widest">Today's Earnings</div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">₹4,250<span className="text-2xl text-gray-500">.00</span></div>
                  <div className="text-green-400 flex items-center gap-1 text-sm font-medium mb-8">
                    <TrendingUp size={14} /> +15% vs yesterday
                  </div>
                  
                  {/* Fake Chart */}
                  <div className="w-full h-40 flex items-end justify-between gap-2 px-2 border-b border-gray-800 pb-2">
                    {[30, 50, 40, 70, 90, 60, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-full bg-taxi-yellow rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-900 mx-2 mb-6 mt-auto rounded-2xl p-4 flex items-center justify-between border border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-taxi-yellow/20 rounded-full flex items-center justify-center">
                      <Navigation className="text-taxi-yellow" size={20} />
                    </div>
                    <div>
                      <div className="font-bold">Next Trip Available</div>
                      <div className="text-xs text-gray-400">2.5 km away • Surge +₹50</div>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Driver Benefits Section */}
      <section id="benefits" className="py-24 bg-[#F8F9FA] text-asphalt-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Why Drive With Tirth Travels?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              We've built our platform around what drivers need most. More earnings, better tools, and complete flexibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={TrendingUp}
              title="Keep More Earnings"
              description="Enjoy industry-leading low commission rates. We believe you should keep the lion's share of what you make."
            />
            <FeatureCard 
              icon={Clock}
              title="Drive When You Want"
              description="No minimum hours, no schedules. Turn the app on when you're ready to earn, turn it off when you're done."
            />
            <FeatureCard 
              icon={CreditCard}
              title="Instant Cash Out"
              description="Don't wait for payday. Transfer your earnings to your bank account instantly, up to 5 times a day."
            />
            <FeatureCard 
              icon={Map}
              title="Smart Heatmaps"
              description="Our predictive maps show you exactly where demand will be highest so you can maximize your time."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="24/7 Driver Support"
              description="We've got your back. Access our dedicated driver support team anytime you need assistance on the road."
            />
            <FeatureCard 
              icon={Car}
              title="Vehicle Rewards"
              description="Get exclusive discounts on fuel, maintenance, and insurance through our driver partner programs."
            />
          </div>
        </div>
      </section>

      {/* Earnings & Safety Section */}
      <section id="earnings" className="py-24 bg-asphalt-black relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px', transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(-100px)' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-taxi-yellow/10 text-taxi-yellow text-sm font-medium mb-6">
              <ShieldCheck size={16} />
              Driver Safety First
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Your safety is our top priority.</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed font-medium">
              We vet every rider on our platform and provide in-app emergency tools so you can drive with peace of mind, day or night.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3 h-3 bg-taxi-yellow rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Rider Verification</h4>
                  <p className="text-gray-400">All riders must pass basic verification and have a valid payment method before requesting a ride.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3 h-3 bg-taxi-yellow rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Emergency Button</h4>
                  <p className="text-gray-400">Instantly connect with local authorities or our 24/7 incident response team right from the app.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3 h-3 bg-taxi-yellow rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Trip Tracking</h4>
                  <p className="text-gray-400">Share your live location and trip status with trusted contacts while you're online.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative perspective-[1000px] h-[500px] flex items-center justify-center">
            {/* Dashboard UI mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl z-20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-taxi-yellow/10 rounded-bl-full blur-2xl"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop" alt="Driver profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Rahul Sharma</h3>
                  <div className="flex items-center gap-1 text-taxi-yellow text-sm">
                    ★ 4.98 Rating • 1,240 Trips
                  </div>
                </div>
              </div>

              <div className="bg-asphalt-black rounded-2xl p-5 border border-gray-800 mb-6">
                <div className="text-sm text-gray-400 mb-2">This Week's Payout</div>
                <div className="text-4xl font-black mb-4">₹18,450</div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Trip Fares</span>
                     <span>₹14,200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Surge Multipliers</span>
                     <span className="text-taxi-yellow">+ ₹2,800</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Tips</span>
                     <span className="text-green-400">+ ₹1,450</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-4 rounded-xl bg-white text-asphalt-black font-bold text-lg hover:bg-gray-100 transition-colors">
                Cash Out Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Ecosystem */}
      <section className="bg-taxi-yellow py-20 text-asphalt-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-[1.1]">
              Ready to start earning?
            </h2>
            <p className="text-xl font-medium mb-8 opacity-80">
              Join millions of drivers who are already earning on their own terms. Download the APK and sign up in minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={DRIVER_APK_URL} download className="inline-flex items-center gap-3 bg-asphalt-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-transform hover:scale-105 active:scale-95 shadow-xl">
                <Smartphone size={24} />
                Download Driver APK
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-4 border border-yellow-200"
            >
              <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center p-2">
                <QrCode className="w-full h-full text-asphalt-black" />
              </div>
              <div className="font-bold text-center">
                Scan to<br/>Download
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-2 text-asphalt-black">
            <AppLogo className="w-8 h-8" dark={false} />
            <span className="font-bold tracking-tight text-xl">Tirth Travels<span className="text-white">.</span></span>
            <span className="ml-4 opacity-70">© 2026 Tirth Travels.</span>
          </div>
          <div className="flex gap-6 opacity-70">
            <a href="/privacy_policy.html" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cities</a>
          </div>
        </div>
      </section>
    </div>
  );
}
