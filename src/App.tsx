/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Smartphone, MapPin, Navigation, Car, CreditCard, Clock, Map, TrendingUp, ShieldCheck, ChevronRight, QrCode } from 'lucide-react';

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
  <a href={href} download className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 ${dark ? 'bg-asphalt-black text-white hover:bg-gray-900 border border-gray-800' : 'bg-white text-asphalt-black hover:bg-gray-100'}`}>
    <Smartphone size={24} />
    <div className="text-left">
      <div className="text-xs font-medium opacity-80">{subText}</div>
      <div className="text-sm border-t border-transparent leading-tight">{text}</div>
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
  const yHeroOffset = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-asphalt-black min-h-screen text-white font-sans selection:bg-taxi-yellow selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 backdrop-blur-md bg-asphalt-black/80 border-b border-white/5">
        <div className="flex items-center gap-2">
          <AppLogo className="w-10 h-10" dark={true} />
          <span className="text-2xl font-bold tracking-tight">Move<span className="text-taxi-yellow">.</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#user" className="hover:text-taxi-yellow transition-colors">For Users</a>
          <a href="#driver" className="hover:text-taxi-yellow transition-colors">For Drivers</a>
          <a href="#safety" className="hover:text-taxi-yellow transition-colors">Safety</a>
        </div>
        <a href="/move_user_release.apk" download className="bg-taxi-yellow text-asphalt-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors inline-block text-center">
          Get the App
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 overflow-hidden bg-asphalt-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-taxi-yellow text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-taxi-yellow animate-pulse"></span>
              Live in 50+ Cities
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Your City,<br/>
              <span className="text-taxi-yellow text-glow">Your Pace.</span><br/>
              Get Moving.
            </h1>
            <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              One ecosystem, two apps. Ride seamlessly with <strong className="text-white">Move</strong>, or earn on your schedule with <strong className="text-white">Mover</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AppStoreButton href="/move_user_release.apk" text="Move (Users)" subText="Download" />
              <AppStoreButton href="/moverr_driver_release.apk" text="Mover (Drivers)" subText="Download" dark />
            </div>
          </motion.div>

          {/* 3D Mockup Area */}
          <div className="relative h-[500px] lg:h-[600px] flex justify-center items-center perspective-[2000px]">
            {/* Background glowing orb */}
            <div className="absolute inset-0 bg-taxi-yellow/20 blur-[100px] rounded-full w-3/4 h-3/4 m-auto"></div>
            
            {/* Left Phone - Move App */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: 20, rotateX: 10, rotateZ: -5 }}
              animate={{ opacity: 1, y: 0, rotateY: 15, rotateX: 5, rotateZ: -5 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ x: -60, zOffset: 100 } as any}
              className="absolute w-[240px] h-[500px] bg-white rounded-[2.5rem] border-[8px] border-gray-100 shadow-2xl overflow-hidden z-10"
            >
              <div className="absolute top-0 w-full h-6 bg-gray-100 rounded-b-2xl flex justify-center items-end pb-1 z-20">
                <div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
              </div>
              <div className="relative w-full h-full bg-gray-50 flex flex-col pt-8">
                {/* Fake Map */}
                <div className="absolute inset-0 bg-[#E8F0F2] overflow-hidden">
                  {/* Grid lines */}
                  <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#d1e3e8 1px, transparent 1px), linear-gradient(90deg, #d1e3e8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  {/* Route path */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 500">
                    <path d="M 40,300 C 60,200 180,250 160,100" fill="none" stroke="#FFCC00" strokeWidth="6" strokeDasharray="8 4" className="opacity-80"/>
                  </svg>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-[85px] left-[145px] text-asphalt-black drop-shadow-md"
                  >
                    <MapPin fill="#FFCC00" size={32} />
                  </motion.div>
                </div>
                {/* Overlay Sheet */}
                <div className="absolute bottom-0 w-full h-[200px] bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-5 flex flex-col gap-4">
                  <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-2"></div>
                  <div className="font-bold text-asphalt-black text-lg">Finding your ride...</div>
                  <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-taxi-yellow/20 rounded-full flex items-center justify-center text-taxi-yellow">
                      <Car size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-asphalt-black">Premium</div>
                      <div className="text-xs text-gray-500">3 mins away</div>
                    </div>
                    <div className="ml-auto font-bold text-asphalt-black">₹150</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Phone - Mover App */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotateY: -20, rotateX: 10, rotateZ: 5 }}
              animate={{ opacity: 1, y: 30, rotateY: -15, rotateX: 5, rotateZ: 5 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ x: 60, zOffset: -100 } as any}
              className="absolute w-[240px] h-[500px] bg-asphalt-black rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden shadow-taxi-yellow/10"
            >
              <div className="absolute top-0 w-full h-6 bg-gray-900 rounded-b-2xl flex justify-center items-end pb-1 z-20">
                <div className="w-16 h-1.5 bg-gray-700 rounded-full"></div>
              </div>
              <div className="relative w-full h-full flex flex-col px-4 pt-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-tr from-taxi-yellow to-orange-400"></div>
                  </div>
                  <div className="bg-green-500/20 text-green-400 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    ONLINE
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center flex-1">
                  <div className="text-gray-400 text-sm font-medium mb-1">Today's Earnings</div>
                  <div className="text-4xl font-black text-white mb-8 tracking-tighter">₹4,250<span className="text-xl text-gray-500">.00</span></div>
                  
                  {/* Fake Chart */}
                  <div className="w-full h-32 flex items-end justify-between gap-2 px-2">
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
                
                <div className="bg-gray-900 mx-2 mb-4 mt-auto rounded-2xl p-4 flex items-center justify-between border border-gray-800">
                  <div className="font-bold">Next Trip</div>
                  <ChevronRight size={20} className="text-gray-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Move Section (User) */}
      <section id="user" className="py-24 bg-[#F8F9FA] text-asphalt-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative perspective-[1000px]">
            <motion.div 
              initial={{ opacity: 0, rotateX: 20, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white p-2 rounded-[2rem] shadow-2xl aspect-[9/16] max-w-[300px] mx-auto relative z-10 border border-gray-100"
            >
              <div className="bg-gray-50 rounded-[1.5rem] w-full h-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-[#E8F0F2]">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-taxi-yellow/20 rounded-full animate-ping"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-taxi-yellow rounded-full shadow-lg border-2 border-white relative z-10"></div>
                   </div>
                 </div>
                 {/* Route Info Overlay */}
                 <motion.div 
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg text-sm"
                 >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-lg">Connaught Place</span>
                      <span className="font-bold text-taxi-yellow">8 min</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="h-full bg-taxi-yellow"
                      />
                    </div>
                 </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute top-1/4 -right-8 lg:-right-12 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 border border-gray-100 z-20"
            >
              <div className="w-12 h-12 bg-taxi-yellow rounded-full flex items-center justify-center">
                <Car className="text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Driver arriving</div>
                <div className="font-black text-xl">AF-2894</div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Tap. Ride. Arrive.</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Getting around your city has never been this simple. Request a ride in seconds and let Move handle the rest with transparent pricing and real-time tracking.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureCard 
                icon={Navigation}
                title="Live Tracking"
                description="Watch your driver approach on the map in real-time."
              />
              <FeatureCard 
                icon={CreditCard}
                title="Upfront Pricing"
                description="Know exactly what you'll pay before you even book."
              />
              <FeatureCard 
                icon={ShieldCheck}
                title="Safety First"
                description="Share your trip status with friends and family instantly."
              />
              <FeatureCard 
                icon={Clock}
                title="Schedule Ahead"
                description="Book rides up to 30 days in advance for peace of mind."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mover Section (Driver) */}
      <section id="driver" className="py-24 bg-asphalt-black relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px', transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(-100px)' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-taxi-yellow/10 text-taxi-yellow text-sm font-medium mb-6">
              <TrendingUp size={16} />
              High Earnings Potential
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Be the Mover.<br/>Earn on your terms.</h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
              Turn your vehicle into a business. With Mover, you have the flexibility to drive whenever you want, wherever you want, and keep more of what you earn.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureCard 
                icon={TrendingUp}
                title="Instant Payouts"
                description="Cash out your earnings instantly, up to 5 times a day."
                dark
              />
              <FeatureCard 
                icon={Map}
                title="Smart Heatmaps"
                description="See real-time demand to find the busiest areas and surge pricing."
                dark
              />
            </div>
          </div>

          <div className="relative perspective-[1000px] h-[500px] flex items-center justify-center">
            {/* Isometric abstract city block (built with CSS) */}
            <motion.div 
              style={{ rotateX: 60, rotateZ: -45 }}
              className="relative w-64 h-64 bg-gray-900 border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center z-10"
            >
               {/* Buildings */}
               <motion.div 
                 initial={{ height: 10 }}
                 whileInView={{ height: 80 }}
                 transition={{ duration: 1 }}
                 className="absolute bottom-4 left-4 w-12 bg-gray-800 shadow-[-5px_0_0_rgba(255,255,255,0.05)] border-t border-gray-700" 
                 style={{ transformStyle: 'preserve-3d' }}
               />
               <motion.div 
                 initial={{ height: 10 }}
                 whileInView={{ height: 120 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 bg-gray-800 shadow-[-5px_0_0_rgba(255,255,255,0.05)] border-t border-taxi-yellow" 
               >
                 <div className="absolute inset-0 bg-taxi-yellow/20 animate-pulse"></div>
               </motion.div>
               <motion.div 
                 initial={{ height: 10 }}
                 whileInView={{ height: 60 }}
                 transition={{ duration: 1, delay: 0.1 }}
                 className="absolute top-4 right-4 w-12 bg-gray-800 shadow-[-5px_0_0_rgba(255,255,255,0.05)] border-t border-gray-700" 
               />

               {/* Paths */}
               <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0,50 L 50,50 L 50,0" fill="none" stroke="#FFCC00" strokeWidth="2" strokeDasharray="4 2" className="opacity-50" />
                  <path d="M 50,50 L 100,50" fill="none" stroke="#FFCC00" strokeWidth="3" className="glow-yellow animate-pulse" />
               </svg>
            </motion.div>

            {/* Hovering Dashboard Dashboard UI */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: -40, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-10 w-full max-w-[320px] bg-asphalt-black/95 backdrop-blur-xl border border-gray-800 rounded-2xl p-5 shadow-2xl z-20"
            >
              <div className="text-xs text-taxi-yellow font-bold uppercase mb-1 tracking-wider">Surge Active</div>
              <div className="text-white font-bold text-xl mb-4">+ ₹80 next trip</div>
              <div className="h-16 flex items-end gap-1">
                {[1, 2, 3, 5, 8, 4, 2].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h * 10}%` }}
                    transition={{ delay: 1 + (i * 0.1) }}
                    className="flex-1 bg-gradient-to-t from-taxi-yellow/20 to-taxi-yellow rounded-t-sm"
                  />
                ))}
              </div>
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
              Ready to Move<br/>or be a Mover?
            </h2>
            <p className="text-xl font-medium mb-8 opacity-80">
              Join millions of users and drivers in the network today. It takes less than 2 minutes to get started.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/move_user_release.apk" download className="inline-block text-center bg-asphalt-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-transform hover:scale-105 active:scale-95 shadow-xl">
                Get the App
              </a>
              <a href="/moverr_driver_release.apk" download className="inline-block text-center bg-transparent border-2 border-asphalt-black text-asphalt-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-black/5 transition-transform hover:scale-105 active:scale-95">
                Sign up to Drive
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
            <span className="font-bold tracking-tight text-xl">Move<span className="text-white">.</span></span>
            <span className="ml-4 opacity-70">© 2026 Move Technologies Inc.</span>
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
