import React, { useState } from 'react';
import {
  Heart, ShoppingBag, Search, ChevronDown, Check, Star, ShieldCheck,
  Calendar, Clock, MapPin, Sparkles, Bell, ArrowLeft, ArrowRight,
  Coffee, ExternalLink, Ticket, CheckCircle2, Sliders, Lock, Zap
} from 'lucide-react';

// ==========================================
// 1. GHARBEDHU.COM (LAPTOP STOREFRONT)
// ==========================================
export const GharbedhuMockup: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState('Popular');
  const [selectedCategory, setSelectedCategory] = useState('T-Shirts');

  const categories = [
    'Shirts', 'T-Shirts', 'Jeans', 'Trousers / Pants',
    'Jackets', 'Hoodies & Sweatshirts', 'Kurta & Ethnic Wear', 'Blazers & Suits'
  ];

  return (
    <div className="w-full flex flex-col items-center select-none py-2">
      {/* MacBook Pro Enclosure */}
      <div className="w-full max-w-4xl bg-neutral-900 dark:bg-black rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-neutral-700 dark:border-neutral-800 shadow-2xl">
        {/* Top Bezel with Camera */}
        <div className="flex items-center justify-between pb-2 px-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-blue-900" />
          </div>
          <div className="text-[10px] font-mono text-neutral-400">gharbedhu.com/shop/mens</div>
        </div>

        {/* Screen Display Area */}
        <div className="bg-white text-neutral-900 rounded-lg sm:rounded-xl overflow-hidden shadow-inner border border-neutral-200">
          {/* Top Brand Header */}
          <div className="bg-[#1b2559] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
            {/* Brand Logo */}
            <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded-md shadow-xs">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-black text-xs">
                🏠
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-[#1b2559] tracking-tight">
                Gharbedhu<span className="text-orange-500">.com</span>
              </span>
            </div>

            {/* Orange Pill Search Bar */}
            <div className="flex-1 max-w-md mx-2">
              <div className="bg-orange-500 rounded-full px-3 sm:px-4 py-1.5 flex items-center gap-2 text-white shadow-xs">
                <Search className="w-3.5 h-3.5 text-white/90 shrink-0" />
                <span className="text-xs text-orange-100 placeholder:text-orange-200 font-medium truncate">
                  Search for products, brands and more...
                </span>
              </div>
            </div>

            {/* Header Right Nav */}
            <div className="flex items-center gap-4 text-white text-xs font-medium">
              <div className="relative flex flex-col items-center cursor-pointer hover:text-orange-300">
                <Heart className="w-4 h-4 text-white fill-red-500" />
                <span className="text-[9px] mt-0.5">Wishlist</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <div className="flex flex-col items-center cursor-pointer hover:text-orange-300">
                <ShoppingBag className="w-4 h-4" />
                <span className="text-[9px] mt-0.5">Cart</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer hover:text-orange-300">
                <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-[9px] font-bold">
                  U
                </div>
                <span className="text-[9px] mt-0.5">Account</span>
              </div>
            </div>
          </div>

          {/* Men's Shop Peach Banner */}
          <div className="bg-[#fed7aa] px-6 sm:px-8 py-5 sm:py-6 border-b border-orange-200">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mb-1">
              Shop Men&apos;s
            </h2>
            <p className="text-xs sm:text-sm text-neutral-800 max-w-3xl leading-relaxed">
              Our men&apos;s shop brings you the perfect mix of style and comfort. From trendy casuals to elegant formals, we have everything for every occasion. Each piece is crafted with quality and modern design in mind. Upgrade your wardrobe and define your personality with confidence.
            </p>
          </div>

          {/* Catalog Layout */}
          <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 bg-neutral-50/50">
            {/* Left Filter Sidebar */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="bg-[#ffedd5] border border-orange-200 rounded-xl p-3.5 sm:p-4">
                {/* Sort Dropdown */}
                <div className="bg-orange-500 text-white rounded-lg px-3 py-2 flex items-center justify-between text-xs font-semibold mb-4 shadow-xs">
                  <span>Sort By:</span>
                  <span className="flex items-center gap-1">
                    {selectedSort} <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Filter Items */}
                <div className="space-y-2">
                  {categories.map((cat) => {
                    const isChecked = selectedCategory === cat;
                    return (
                      <div
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className="flex items-center gap-2.5 text-xs text-neutral-800 cursor-pointer hover:text-orange-600 font-medium select-none"
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-sky-600 border-sky-600 text-white'
                              : 'border-neutral-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{cat}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Product Grid (3 Cards matching Umang's design) */}
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Product 1 */}
              <div className="bg-white border border-neutral-200 rounded-xl p-3 shadow-xs hover:shadow-md transition-shadow">
                <div className="aspect-square rounded-lg bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden mb-2.5 p-2">
                  <div className="w-20 h-24 bg-white border border-neutral-200 rounded-lg shadow-xs flex flex-col items-center justify-center relative">
                    <span className="text-2xl">😎</span>
                    <div className="w-12 h-1.5 bg-red-600 rounded-full mt-1" />
                    <div className="w-12 h-1.5 bg-sky-600 rounded-full mt-1" />
                    <div className="w-12 h-1.5 bg-amber-500 rounded-full mt-1" />
                  </div>
                  <span className="absolute top-2 right-2 p-1 rounded-full bg-white/80 text-neutral-400 hover:text-red-500">
                    <Heart className="w-3 h-3" />
                  </span>
                </div>
                <h4 className="font-bold text-xs text-neutral-900 line-clamp-1">T-Shirt With Tap&apos;s Details</h4>
                <div className="flex items-center gap-1 text-[11px] text-amber-500 my-0.5">
                  {'★★★★☆'} <span className="text-neutral-400 text-[10px]">4/5</span>
                </div>
                <div className="font-extrabold text-sm text-neutral-900">$399</div>
              </div>

              {/* Product 2 */}
              <div className="bg-white border border-neutral-200 rounded-xl p-3 shadow-xs hover:shadow-md transition-shadow">
                <div className="aspect-square rounded-lg bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden mb-2.5 p-2">
                  <div className="w-20 h-24 bg-rose-900 border border-rose-950 rounded-lg shadow-xs flex flex-col items-center justify-center relative text-white">
                    <span className="text-2xl">💪</span>
                    <div className="text-[8px] font-mono tracking-tighter opacity-75 mt-1">ATHLETIC</div>
                  </div>
                  <span className="absolute top-2 right-2 p-1 rounded-full bg-white/80 text-neutral-400 hover:text-red-500">
                    <Heart className="w-3 h-3" />
                  </span>
                </div>
                <h4 className="font-bold text-xs text-neutral-900 line-clamp-1">T-Shirt With Tap&apos;s Details</h4>
                <div className="flex items-center gap-1 text-[11px] text-amber-500 my-0.5">
                  {'★★★★☆'} <span className="text-neutral-400 text-[10px]">4/5</span>
                </div>
                <div className="font-extrabold text-sm text-neutral-900">$399</div>
              </div>

              {/* Product 3 */}
              <div className="bg-white border border-neutral-200 rounded-xl p-3 shadow-xs hover:shadow-md transition-shadow">
                <div className="aspect-square rounded-lg bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden mb-2.5 p-2">
                  <div className="w-20 h-24 rounded-lg shadow-xs flex flex-col overflow-hidden border border-neutral-200">
                    <div className="h-1/3 bg-amber-400" />
                    <div className="h-1/3 bg-white" />
                    <div className="h-1/3 bg-slate-900" />
                  </div>
                  <span className="absolute top-2 right-2 p-1 rounded-full bg-white/80 text-neutral-400 hover:text-red-500">
                    <Heart className="w-3 h-3" />
                  </span>
                </div>
                <h4 className="font-bold text-xs text-neutral-900 line-clamp-1">T-Shirt With Tap&apos;s Details</h4>
                <div className="flex items-center gap-1 text-[11px] text-amber-500 my-0.5">
                  {'★★★★☆'} <span className="text-neutral-400 text-[10px]">4/5</span>
                </div>
                <div className="font-extrabold text-sm text-neutral-900">$399</div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Bottom Lip */}
        <div className="h-3 bg-neutral-800 rounded-b-xl mt-1 flex items-center justify-center">
          <div className="w-24 h-1 bg-neutral-700 rounded-full" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. CAPTAIN TICKETU (3 MOBILE SCREENS)
// ==========================================
export const CaptainTicketuMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'parent' | 'cinema' | 'time'>('parent');
  const [approveBooking, setApproveBooking] = useState(true);
  const [paymentApproval, setPaymentApproval] = useState(false);
  const [notificationAlerts, setNotificationAlerts] = useState(true);
  const [selectedAge, setSelectedAge] = useState('All Ages');
  const [selectedDate, setSelectedDate] = useState('11');
  const [selectedTime, setSelectedTime] = useState('01:30 PM');

  return (
    <div className="w-full flex flex-col items-center select-none py-2">
      {/* Screen Selector for Mobile Screens */}
      <div className="flex items-center gap-2 mb-4 bg-neutral-900/80 backdrop-blur-md p-1.5 rounded-full border border-neutral-800">
        <button
          onClick={() => setActiveTab('parent')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'parent'
              ? 'bg-red-600 text-white shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          1. Parent Control
        </button>
        <button
          onClick={() => setActiveTab('cinema')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'cinema'
              ? 'bg-red-600 text-white shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          2. Choose Cinema
        </button>
        <button
          onClick={() => setActiveTab('time')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeTab === 'time'
              ? 'bg-red-600 text-white shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          3. Time &amp; Date
        </button>
      </div>

      {/* Screen Showcase Grid: On large screens, shows all 3 side-by-side or active focused */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {/* Screen 1: Parent Control */}
        <div
          className={`transition-all duration-300 ${
            activeTab === 'parent' ? 'ring-2 ring-red-500/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-white rounded-[30px] p-4 text-neutral-900 min-h-[580px] flex flex-col justify-between">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900 mb-3 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Mascot Speech Box */}
                <div className="bg-red-50/70 border border-red-100 rounded-2xl p-3 flex gap-3 items-center mb-4">
                  {/* Captain Ticketu Mascot */}
                  <div className="w-14 h-16 bg-amber-400 border-2 border-amber-500 rounded-lg shrink-0 relative flex flex-col items-center justify-center text-center shadow-xs">
                    <div className="w-full h-3 bg-blue-900 rounded-t-sm absolute top-0 text-[7px] text-white font-black leading-tight flex items-center justify-center">
                      CAPTAIN
                    </div>
                    <span className="text-xl mt-2">🎟️</span>
                    <div className="text-[7px] font-bold text-neutral-900">TICKETU</div>
                  </div>
                  <div className="text-[10px] text-neutral-700 leading-snug">
                    <strong className="text-red-600 font-bold block text-[11px]">Hi there, Captain Ticketu!</strong>
                    Let&apos;s set up some rules so the kirtan stays safe and sound. Pick what&apos;s best for your kid!
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-neutral-900 mb-3">
                  Parent Control
                </h3>

                {/* Control Toggles */}
                <div className="space-y-2.5">
                  {/* Approve Booking */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-2.5 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-sm">🎟️</div>
                      <div>
                        <div className="text-xs font-bold text-neutral-900">Approve Booking</div>
                        <div className="text-[9px] text-neutral-500">Require parent approval</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setApproveBooking(!approveBooking)}
                      className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                        approveBooking ? 'bg-red-600' : 'bg-neutral-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          approveBooking ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Payment Approval */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-2.5 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-sm">💳</div>
                      <div>
                        <div className="text-xs font-bold text-neutral-900">Payment Approval</div>
                        <div className="text-[9px] text-neutral-500">Require approval for payment</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setPaymentApproval(!paymentApproval)}
                      className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                        paymentApproval ? 'bg-red-600' : 'bg-neutral-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          paymentApproval ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Notification Alerts */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-2.5 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-sm">🔔</div>
                      <div>
                        <div className="text-xs font-bold text-neutral-900">Notification Alerts</div>
                        <div className="text-[9px] text-neutral-500">Get alerts when kids start</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setNotificationAlerts(!notificationAlerts)}
                      className={`w-10 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                        notificationAlerts ? 'bg-red-600' : 'bg-neutral-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          notificationAlerts ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Age Rating Pills */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-2.5 shadow-xs">
                    <div className="text-xs font-bold text-neutral-900">Set Age Rating</div>
                    <div className="text-[9px] text-neutral-500 mb-2">Restrict content based on age</div>
                    <div className="grid grid-cols-4 gap-1">
                      {['All Ages', '7+ Years', '12+ Years', '15+ Years'].map((age) => (
                        <button
                          key={age}
                          onClick={() => setSelectedAge(age)}
                          className={`py-1 rounded-md text-[9px] font-bold cursor-pointer transition-colors ${
                            selectedAge === age ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Protected Warning */}
                <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-2 text-[9.5px] text-red-700 flex items-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5 shrink-0" />
                  <span>These settings are protected by passcode.</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button className="w-full py-2.5 rounded-full bg-red-600 text-white text-xs font-bold shadow-md hover:bg-red-700 transition-colors">
                  Save and Start the app
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 2: Choose Cinema */}
        <div
          className={`transition-all duration-300 ${
            activeTab === 'cinema' ? 'ring-2 ring-red-500/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-neutral-50 rounded-[30px] p-4 text-neutral-900 min-h-[580px] flex flex-col justify-between">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900 mb-2 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Top Nav */}
                <div className="flex items-center justify-between py-1 mb-2">
                  <span className="text-red-600 text-sm font-bold">←</span>
                  <span className="text-xs font-bold text-neutral-800">The Super Mario</span>
                  <Search className="w-4 h-4 text-red-600" />
                </div>

                {/* Header Title with Mascot */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-black text-neutral-900 leading-tight">Choose a<br />Cinema</h3>
                    <p className="text-[10px] text-neutral-500">Pick the perfect spot for your adventure!</p>
                  </div>
                  <div className="w-12 h-14 bg-amber-400 border border-amber-500 rounded-lg flex items-center justify-center text-xl shadow-xs">
                    😎
                  </div>
                </div>

                {/* Cinema Cards List */}
                <div className="space-y-2.5">
                  {/* Cinema 1 */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-3 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="text-xs font-bold text-neutral-900">Galaxy Cinemas</div>
                      <div className="text-[10px] text-red-600 flex items-center gap-1 my-0.5">
                        <MapPin className="w-2.5 h-2.5" /> 0.8 miles away
                      </div>
                      <span className="inline-block px-1.5 py-0.5 bg-yellow-200 text-yellow-900 rounded text-[8px] font-bold">
                        Popular!
                      </span>
                    </div>
                    <button className="px-3.5 py-1.5 bg-red-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-red-700">
                      Select
                    </button>
                  </div>

                  {/* Cinema 2 */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-3 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="text-xs font-bold text-neutral-900">PVR: Motera, ahemdabad</div>
                      <div className="text-[10px] text-red-600 flex items-center gap-1 my-0.5">
                        <MapPin className="w-2.5 h-2.5" /> 5 km away
                      </div>
                    </div>
                    <button className="px-3.5 py-1.5 bg-red-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-red-700">
                      Select
                    </button>
                  </div>

                  {/* Cinema 3 */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-3 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="text-xs font-bold text-neutral-900">Apple cinema</div>
                      <div className="text-[10px] text-red-600 flex items-center gap-1 my-0.5">
                        <MapPin className="w-2.5 h-2.5" /> 3 km away
                      </div>
                      <span className="inline-block px-1.5 py-0.5 bg-yellow-200 text-yellow-900 rounded text-[8px] font-bold">
                        Popular!
                      </span>
                    </div>
                    <button className="px-3.5 py-1.5 bg-red-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-red-700">
                      Select
                    </button>
                  </div>

                  {/* Cinema 4 */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-3 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="text-xs font-bold text-neutral-900">RajHanse theater</div>
                      <div className="text-[10px] text-red-600 flex items-center gap-1 my-0.5">
                        <MapPin className="w-2.5 h-2.5" /> 2 km away
                      </div>
                    </div>
                    <button className="px-3.5 py-1.5 bg-red-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-red-700">
                      Select
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Indicator */}
              <div className="w-24 h-1 bg-neutral-300 rounded-full mx-auto mt-3" />
            </div>
          </div>
        </div>

        {/* Screen 3: Time & Date */}
        <div
          className={`transition-all duration-300 ${
            activeTab === 'time' ? 'ring-2 ring-red-500/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-white rounded-[30px] p-4 text-neutral-900 min-h-[580px] flex flex-col justify-between">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900 mb-2 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                <div className="flex items-center gap-2 py-1 mb-2">
                  <span className="text-red-600 text-sm font-bold">←</span>
                  <span className="text-xs font-bold text-neutral-800">The Super Mario Galaxy</span>
                </div>

                <h3 className="text-lg font-black text-neutral-900 leading-tight mb-3">
                  Pick Your<br />Time &amp; Date
                </h3>

                {/* Date Pills */}
                <div className="grid grid-cols-4 gap-1.5 mb-4">
                  {[
                    { day: '11', name: 'MON' },
                    { day: '12', name: 'TUE' },
                    { day: '13', name: 'WED' },
                    { day: '14', name: 'THU' }
                  ].map((d) => (
                    <button
                      key={d.day}
                      onClick={() => setSelectedDate(d.day)}
                      className={`p-2 rounded-xl text-center cursor-pointer transition-colors ${
                        selectedDate === d.day
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                      }`}
                    >
                      <div className="text-[8px] font-bold tracking-wider opacity-80">MAY</div>
                      <div className="text-base font-black my-0.5">{d.day}</div>
                      <div className="text-[8px] font-bold">{d.name}</div>
                    </button>
                  ))}
                </div>

                {/* Showtimes */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-neutral-800 block mb-1.5">🌅 Morning</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['10:00 AM', '11:15 AM'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-1.5 rounded-lg text-[10px] font-bold border transition-colors ${
                            selectedTime === t
                              ? 'bg-red-600 text-white border-red-600'
                              : 'bg-neutral-50 text-neutral-800 border-neutral-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                      <div className="py-1 rounded-lg text-[9px] font-bold bg-neutral-100 text-neutral-400 border border-neutral-200 flex flex-col items-center justify-center">
                        <span>11:45 AM</span>
                        <span className="text-[7px] text-red-600 font-extrabold">SOLD OUT</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-neutral-800 block mb-1.5">☀️ Afternoon</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['01:30 PM', '02:45 PM', '03:55 PM'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-1.5 rounded-lg text-[10px] font-bold border transition-colors ${
                            selectedTime === t
                              ? 'bg-red-600 text-white border-red-600'
                              : 'bg-neutral-50 text-neutral-800 border-neutral-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-neutral-800 block mb-1.5">🌙 Evening</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['06:00 PM', '07:30 PM', '08:00 PM'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-1.5 rounded-lg text-[10px] font-bold border transition-colors ${
                            selectedTime === t
                              ? 'bg-red-600 text-white border-red-600'
                              : 'bg-neutral-50 text-neutral-800 border-neutral-200'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue to Seats Button */}
              <div className="mt-4">
                <button className="w-full py-2.5 rounded-full bg-red-600 text-white text-xs font-bold shadow-md hover:bg-red-700 transition-colors">
                  Continue to Seats ({selectedTime})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. CAMPUSCONNECT (2 MOBILE SCREENS)
// ==========================================
export const CampusConnectMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'notifications'>('dashboard');

  return (
    <div className="w-full flex flex-col items-center select-none py-2">
      <div className="flex items-center gap-2 mb-4 bg-neutral-900/80 backdrop-blur-md p-1.5 rounded-full border border-neutral-800">
        <button
          onClick={() => setActiveScreen('dashboard')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeScreen === 'dashboard'
              ? 'bg-[#0f2942] text-white shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Campus Dashboard
        </button>
        <button
          onClick={() => setActiveScreen('notifications')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeScreen === 'notifications'
              ? 'bg-[#0f2942] text-white shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Notifications &amp; Updates
        </button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Screen 1: Dashboard */}
        <div
          className={`transition-all duration-300 ${
            activeScreen === 'dashboard' ? 'ring-2 ring-sky-500/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-slate-50 rounded-[30px] p-4 text-neutral-900 min-h-[580px] flex flex-col justify-between">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900 mb-2 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Header: Good Morning Umang */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-neutral-500 font-medium">Tuesday, Oct 24</span>
                    <h3 className="text-base font-extrabold text-[#0f2942]">Good Morning, Umang</h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#0f2942] flex items-center justify-center text-white shadow-xs relative">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-400 rounded-full border border-white" />
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white border border-slate-200 rounded-xl px-3 py-2 flex items-center gap-2 mb-3.5 shadow-xs">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-xs text-slate-400">Finding building, lab and classroom</span>
                </div>

                {/* Campus Map Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900">Campus Map</span>
                  </div>
                  
                  {/* Isometric Campus Graphic */}
                  <div className="h-24 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-xl border border-emerald-200 relative overflow-hidden flex items-center justify-center p-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-10 bg-white rounded shadow-xs border border-slate-300 flex items-center justify-center text-xs">🏛️</div>
                      <div className="w-14 h-12 bg-white rounded shadow-xs border border-slate-300 flex items-center justify-center text-xs">🏢</div>
                      <div className="w-12 h-10 bg-white rounded shadow-xs border border-slate-300 flex items-center justify-center text-xs">🏫</div>
                    </div>
                    <button className="absolute bottom-2 right-2 px-3 py-1 bg-[#0f2942] text-white rounded-full text-[9px] font-bold shadow-xs">
                      🗺️ View Full Map
                    </button>
                  </div>

                  <div className="text-xs font-bold text-slate-900">Explore Campus Buildings</div>
                  <div className="text-[10px] text-slate-500">Find labs, department, and reception area</div>
                </div>

                {/* Quick Actions Grid (2x2) */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-2">
                    <span>Quick Action</span>
                    <span className="text-sky-600 text-[10px]">See All</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-[#0f2942] text-white p-3 rounded-xl flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="text-2xl mb-1">🚌</span>
                      <span className="text-xs font-bold">Bus service</span>
                      <span className="text-[8px] text-slate-300">Menu &amp; Specials</span>
                    </div>

                    <div className="bg-[#0f2942] text-white p-3 rounded-xl flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="text-2xl mb-1">🎓</span>
                      <span className="text-xs font-bold">Admission</span>
                      <span className="text-[8px] text-slate-300">Status &amp; FAQs</span>
                    </div>

                    <div className="bg-[#0f2942] text-white p-3 rounded-xl flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="text-2xl mb-1">🛏️</span>
                      <span className="text-xs font-bold">Hostel</span>
                    </div>

                    <div className="bg-[#0f2942] text-white p-3 rounded-xl flex flex-col items-center justify-center text-center shadow-xs">
                      <span className="text-2xl mb-1">📖</span>
                      <span className="text-xs font-bold">Library</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="bg-white border border-slate-200 rounded-2xl py-2 px-4 flex items-center justify-between text-slate-400 mt-3">
                <span className="text-sky-600">🏠</span>
                <span>📍</span>
                <span>🌐</span>
                <span>👤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 2: Notifications */}
        <div
          className={`transition-all duration-300 ${
            activeScreen === 'notifications' ? 'ring-2 ring-sky-500/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-slate-50 rounded-[30px] p-4 text-neutral-900 min-h-[580px] flex flex-col justify-between">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900 mb-2 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#0f2942] text-white flex items-center justify-center text-xs font-bold">
                    ←
                  </div>
                  <h3 className="text-base font-extrabold text-[#0f2942]">Notifications</h3>
                </div>

                {/* Academic Updates */}
                <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2">
                  ACADEMIC UPDATES
                </div>

                <div className="space-y-2.5 mb-4">
                  {/* Notification 1 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3 flex gap-2.5 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0">
                      ⏰
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="font-bold text-emerald-600">NEW GRADE</span>
                        <span className="text-slate-400">10m ago •</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900">Advanced Algorithms</div>
                      <div className="text-[10px] text-slate-600 leading-snug">
                        Your final grade for CS402 has been posted. Great job on the project!
                      </div>
                    </div>
                  </div>

                  {/* Notification 2 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3 flex gap-2.5 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs shrink-0">
                      ⏳
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="font-bold text-orange-600">LIBRARY DUE</span>
                        <span className="text-slate-400">2h ago</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900">Book Return Reminder</div>
                      <div className="text-[10px] text-slate-600 leading-snug">
                        &apos;Design Patterns: Elements of Reusable Object-Oriented Software&apos; is due tomorrow.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Updates */}
                <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2">
                  SOCIAL UPDATES
                </div>

                <div className="space-y-2.5">
                  {/* Notification 3 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3 flex gap-2.5 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs shrink-0">
                      ♣️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="font-bold text-blue-600">CLUB EVENT</span>
                        <span className="text-slate-400">4h ago</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900">Coding Club Meeting</div>
                      <div className="text-[10px] text-slate-600 leading-snug">
                        Don&apos;t forget our weekly sync at the Innovation Lab at 5:00 PM today!
                      </div>
                    </div>
                  </div>

                  {/* Notification 4 */}
                  <div className="bg-white border border-slate-200 rounded-xl p-3 flex gap-2.5 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs shrink-0">
                      🎙️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="font-bold text-purple-600">SOCIAL</span>
                        <span className="text-slate-400">Yesterday</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900">Live Music Night</div>
                      <div className="text-[10px] text-slate-600 leading-snug">
                        Campus acoustic night registration is now open for students.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="bg-white border border-slate-200 rounded-2xl py-2 px-4 flex items-center justify-between text-slate-400 mt-3">
                <span className="text-sky-600">🏠</span>
                <span>📍</span>
                <span>🌐</span>
                <span>👤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. INDU CAFE (DARK FOOD ORDERING & TICKET)
// ==========================================
export const InduCafeMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'store' | 'cart'>('store');
  const [burgerCount, setBurgerCount] = useState(2);

  return (
    <div className="w-full flex flex-col items-center select-none py-2">
      <div className="flex items-center gap-2 mb-4 bg-neutral-900/80 backdrop-blur-md p-1.5 rounded-full border border-neutral-800">
        <button
          onClick={() => setActiveScreen('store')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeScreen === 'store'
              ? 'bg-yellow-400 text-neutral-950 shadow-md font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Store &amp; Live Ticket
        </button>
        <button
          onClick={() => setActiveScreen('cart')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeScreen === 'cart'
              ? 'bg-yellow-400 text-neutral-950 shadow-md font-bold'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          Cart &amp; Checkout
        </button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Screen 1: Store & Live Ticket */}
        <div
          className={`transition-all duration-300 ${
            activeScreen === 'store' ? 'ring-2 ring-yellow-400/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-[#121212] rounded-[30px] p-4 text-white min-h-[580px] flex flex-col justify-between border border-neutral-800">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-white mb-2 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Header: Hello Akanksha */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-base font-extrabold text-white">
                      Hello <span className="text-yellow-400">Akanksha</span>
                    </h3>
                    <p className="text-[10px] text-neutral-400">Welcome to the indu cafe.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-yellow-400 text-sm">
                    🔔
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-[#1e1e24] border border-neutral-700/60 rounded-full px-3 py-1.5 flex items-center gap-2 mb-3.5">
                  <Search className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-xs text-neutral-400">pizza, burger, paratha...</span>
                </div>

                {/* Category Pills */}
                <div className="flex items-center justify-between gap-1 mb-4">
                  <div className="bg-yellow-400 text-neutral-950 p-2 rounded-xl text-center w-12 flex flex-col items-center">
                    <span className="text-base">🍔</span>
                    <span className="text-[9px] font-black">All</span>
                  </div>
                  <div className="bg-[#1e1e24] border border-neutral-800 text-neutral-300 p-2 rounded-xl text-center w-12 flex flex-col items-center">
                    <span className="text-base">🍕</span>
                    <span className="text-[9px]">Pizza</span>
                  </div>
                  <div className="bg-[#1e1e24] border border-neutral-800 text-neutral-300 p-2 rounded-xl text-center w-12 flex flex-col items-center">
                    <span className="text-base">🍔</span>
                    <span className="text-[9px]">Burger</span>
                  </div>
                  <div className="bg-[#1e1e24] border border-neutral-800 text-neutral-300 p-2 rounded-xl text-center w-12 flex flex-col items-center">
                    <span className="text-base">🍜</span>
                    <span className="text-[9px]">Noodles</span>
                  </div>
                  <div className="bg-[#1e1e24] border border-neutral-800 text-neutral-300 p-2 rounded-xl text-center w-12 flex flex-col items-center">
                    <span className="text-base">🫓</span>
                    <span className="text-[9px]">Paratha</span>
                  </div>
                </div>

                {/* Perforated Yellow Live Ticket (Order Confirmed) */}
                <div className="bg-yellow-400 text-neutral-950 rounded-2xl p-3 mb-4 relative overflow-hidden shadow-md">
                  <div className="flex items-center justify-between border-b border-yellow-500/60 pb-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="text-[10px] font-extrabold">Order Confirmed</div>
                        <div className="text-[8px] text-yellow-900">16/4/2026</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-bold italic text-yellow-900">Please wait 10 mins</div>
                      <div className="text-[8px] text-yellow-900">ready shortly</div>
                    </div>
                  </div>

                  <div className="space-y-1 text-[10px]">
                    <div className="flex justify-between">
                      <span>Classic Burger</span>
                      <span className="font-bold">Rs.150/-</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cold Drink</span>
                      <span className="font-bold">Rs.60/-</span>
                    </div>
                    <div className="flex justify-between font-black text-xs pt-1 border-t border-yellow-500/40">
                      <span>Total</span>
                      <span>Rs.210/-</span>
                    </div>
                  </div>

                  <button className="w-full mt-2 py-1 bg-white text-yellow-900 rounded-full text-[9px] font-extrabold shadow-xs hover:bg-neutral-50">
                    Live-order status
                  </button>
                </div>

                {/* Recommended For You */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                    <span>Recommended for you</span>
                    <span className="text-yellow-400 text-[10px]">See all</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#1c1c20] border border-neutral-800 rounded-xl p-2.5">
                      <div className="h-16 rounded-lg bg-neutral-800 flex items-center justify-center text-3xl mb-1.5">
                        🍔
                      </div>
                      <div className="text-xs font-bold text-white truncate">Classic Burger</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-bold text-yellow-400">Rs.150/-</span>
                        <button className="px-2 py-0.5 bg-yellow-400 text-neutral-950 rounded-full text-[9px] font-bold">
                          Add
                        </button>
                      </div>
                    </div>

                    <div className="bg-[#1c1c20] border border-neutral-800 rounded-xl p-2.5">
                      <div className="h-16 rounded-lg bg-neutral-800 flex items-center justify-center text-3xl mb-1.5">
                        🔥
                      </div>
                      <div className="text-xs font-bold text-white truncate">Spicy Paneer</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-bold text-yellow-400">Rs.180/-</span>
                        <button className="px-2 py-0.5 bg-yellow-400 text-neutral-950 rounded-full text-[9px] font-bold">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="bg-[#18181b] border border-neutral-800 rounded-2xl py-2 px-6 flex items-center justify-between text-neutral-400 mt-3">
                <span className="text-yellow-400 font-bold">🏠</span>
                <span>🛍️</span>
                <span>👤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 2: Cart */}
        <div
          className={`transition-all duration-300 ${
            activeScreen === 'cart' ? 'ring-2 ring-yellow-400/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-[#121212] rounded-[30px] p-4 text-white min-h-[580px] flex flex-col justify-between border border-neutral-800">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-white mb-2 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Top Bar */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold">←</span>
                  <span className="text-sm font-bold text-white">Cart</span>
                  <span className="text-neutral-400 text-sm">🗑️</span>
                </div>

                {/* Item in Cart */}
                <div className="bg-[#1c1c20] border border-neutral-800 rounded-xl p-3 flex gap-3 mb-3">
                  <div className="w-16 h-16 rounded-lg bg-neutral-800 flex items-center justify-center text-3xl shrink-0">
                    🍔
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-white">Classic Burger</div>
                    <div className="text-[9px] text-neutral-400 line-clamp-2 leading-tight mt-0.5">
                      A burger is a popular fast food made with a patty, buns, and various toppings.
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-extrabold text-yellow-400">Rs.150/-</span>
                      <div className="flex items-center gap-2 text-xs">
                        <button
                          onClick={() => setBurgerCount(Math.max(1, burgerCount - 1))}
                          className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="font-bold">{burgerCount}</span>
                        <button
                          onClick={() => setBurgerCount(burgerCount + 1)}
                          className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add With Your Order */}
                <div className="mb-3">
                  <div className="text-xs font-bold text-white mb-2">Add with your order</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#1c1c20] border border-neutral-800 rounded-xl p-2.5 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold">Ice Cold Drink</div>
                        <div className="text-[10px] text-yellow-400 font-bold">Rs.60/-</div>
                      </div>
                      <span className="text-xs text-neutral-400 font-mono">- 0 +</span>
                    </div>

                    <div className="bg-[#1c1c20] border border-neutral-800 rounded-xl p-2.5 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold">Potato Chips</div>
                        <div className="text-[10px] text-yellow-400 font-bold">Rs.100/-</div>
                      </div>
                      <span className="text-xs text-neutral-400 font-mono">- 0 +</span>
                    </div>
                  </div>
                </div>

                {/* Add Coupon */}
                <div className="bg-[#1c1c20] border border-neutral-800 rounded-xl p-2.5 flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded bg-yellow-400 text-black flex items-center justify-center font-bold text-[10px]">
                    %
                  </span>
                  <span className="text-xs text-neutral-400">Add Coupon code</span>
                </div>

                {/* Payment Summary */}
                <div className="bg-[#1c1c20] border border-neutral-800 rounded-xl p-3 space-y-1 text-xs">
                  <div className="font-bold text-white mb-1.5">Payment Summary</div>
                  <div className="flex justify-between text-neutral-400 text-[11px]">
                    <span>Subtotal</span>
                    <span>Rs.{150 * burgerCount}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400 text-[11px]">
                    <span>Discount</span>
                    <span className="text-emerald-400">-Rs.20</span>
                  </div>
                  <div className="flex justify-between text-neutral-400 text-[11px]">
                    <span>Service fee</span>
                    <span>Rs.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-white pt-1.5 border-t border-neutral-700 text-xs">
                    <span>Total amount</span>
                    <span className="text-yellow-400">Rs.{150 * burgerCount - 20}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="py-2.5 rounded-full bg-neutral-800 text-white text-xs font-bold">
                  Add Items
                </button>
                <button className="py-2.5 rounded-full bg-yellow-400 text-neutral-950 text-xs font-black shadow-md hover:bg-yellow-300">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. RIDEBOX (URBAN MOBILITY & RIDE HAILING)
// ==========================================
export const RideBoxMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'suggestions' | 'trips'>('suggestions');
  const [selectedVehicle, setSelectedVehicle] = useState('Auto');

  return (
    <div className="w-full flex flex-col items-center select-none py-2">
      <div className="flex items-center gap-2 mb-4 bg-neutral-900/80 backdrop-blur-md p-1.5 rounded-full border border-neutral-800">
        <button
          onClick={() => setActiveScreen('suggestions')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeScreen === 'suggestions'
              ? 'bg-yellow-400 text-neutral-950 font-bold shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          1. Suggestions &amp; Services
        </button>
        <button
          onClick={() => setActiveScreen('trips')}
          className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
            activeScreen === 'trips'
              ? 'bg-yellow-400 text-neutral-950 font-bold shadow-md'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          2. Choose a Trip Sheet
        </button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Screen 1: Suggestions */}
        <div
          className={`transition-all duration-300 ${
            activeScreen === 'suggestions' ? 'ring-2 ring-yellow-400/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-yellow-50/50 rounded-[30px] p-4 text-neutral-900 min-h-[580px] flex flex-col justify-between">
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900 mb-2 px-2">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Brand Header */}
                <div className="flex items-center justify-center my-2">
                  <div className="bg-emerald-400/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="text-sm">🚗</span>
                    <span className="text-xs font-black tracking-wider text-neutral-900">RIDE BOX</span>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white border border-neutral-200 rounded-full p-1.5 pl-3 flex items-center justify-between mb-4 shadow-xs">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Search className="w-3.5 h-3.5" />
                    <span>Enter the Pick-up point</span>
                  </div>
                  <span className="bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full text-[10px] font-bold">
                    📅 Later
                  </span>
                </div>

                {/* Suggestions 8 Grid */}
                <h4 className="text-xs font-bold text-neutral-900 mb-2.5">Suggestions</h4>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-white border border-neutral-100 rounded-xl p-2 text-center shadow-xs">
                    <span className="text-xl">🚗</span>
                    <span className="text-[9px] font-bold block mt-1">Trip</span>
                  </div>

                  <div className="bg-white border border-neutral-100 rounded-xl p-2 text-center shadow-xs relative">
                    <span className="absolute -top-1.5 right-1 bg-emerald-700 text-white text-[7px] font-extrabold px-1 rounded">
                      50%
                    </span>
                    <span className="text-xl">🛵</span>
                    <span className="text-[9px] font-bold block mt-1">Send items</span>
                  </div>

                  <div className="bg-white border border-neutral-100 rounded-xl p-2 text-center shadow-xs">
                    <span className="text-xl">🚕</span>
                    <span className="text-[9px] font-bold block mt-1">Intercity</span>
                  </div>

                  <div className="bg-white border border-neutral-100 rounded-xl p-2 text-center shadow-xs relative">
                    <span className="absolute -top-1.5 right-1 bg-yellow-600 text-white text-[7px] font-extrabold px-1 rounded">
                      Promo
                    </span>
                    <span className="text-xl">🔄</span>
                    <span className="text-[9px] font-bold block mt-1">Reserve</span>
                  </div>

                  <div className="bg-white border border-neutral-100 rounded-xl p-2 text-center shadow-xs">
                    <span className="text-xl">🚙</span>
                    <span className="text-[9px] font-bold block mt-1">Rentals</span>
                  </div>

                  <div className="bg-white border border-neutral-100 rounded-xl p-2 text-center shadow-xs">
                    <span className="text-xl">🧑‍🤝‍🧑</span>
                    <span className="text-[9px] font-bold block mt-1">Teens</span>
                  </div>

                  <div className="bg-white border border-neutral-100 rounded-xl p-2 text-center shadow-xs">
                    <span className="text-xl">👵</span>
                    <span className="text-[9px] font-bold block mt-1">Seniors</span>
                  </div>

                  <div className="bg-white border border-neutral-100 rounded-xl p-2 text-center shadow-xs">
                    <span className="text-xl">▦</span>
                    <span className="text-[9px] font-bold block mt-1">See all</span>
                  </div>
                </div>

                {/* Promotional Gear Up Banner */}
                <div className="bg-yellow-400 rounded-2xl p-4 relative overflow-hidden shadow-sm">
                  <div className="max-w-[150px]">
                    <h5 className="text-sm font-black text-neutral-900 leading-tight">
                      Gear up for safety at $3
                    </h5>
                    <button className="mt-2.5 px-3 py-1 bg-white text-neutral-900 rounded-full text-[10px] font-extrabold shadow-xs">
                      Get started
                    </button>
                  </div>
                  <div className="absolute -right-2 bottom-0 text-5xl">
                    🏍️
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="bg-white border border-neutral-200 rounded-2xl py-2 px-4 flex items-center justify-between text-neutral-400 mt-3">
                <span className="text-yellow-600">🏠</span>
                <span>🚗</span>
                <span>📋</span>
                <span>👤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 2: Choose a Trip Sheet */}
        <div
          className={`transition-all duration-300 ${
            activeScreen === 'trips' ? 'ring-2 ring-yellow-400/50 scale-[1.01]' : 'opacity-90 hidden md:block'
          }`}
        >
          <div className="bg-neutral-950 p-3 rounded-[38px] border-4 border-neutral-800 shadow-2xl">
            <div className="bg-slate-100 rounded-[30px] text-neutral-900 min-h-[580px] flex flex-col justify-between overflow-hidden relative">
              {/* Map Route Area */}
              <div className="h-44 bg-slate-200 relative p-3">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-900 mb-2 px-1">
                  <span>9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Route Path Graphic */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <path d="M 50 80 Q 150 50 250 110" stroke="#0284c7" strokeWidth="6" fill="none" strokeDasharray="6,4" />
                </svg>

                {/* Top HUD: Pulin Park Society */}
                <div className="absolute bottom-3 right-3 bg-black text-white px-3 py-1 rounded-lg text-left shadow-lg">
                  <div className="text-[8px] text-yellow-400 font-bold">2 MIN</div>
                  <div className="text-[10px] font-bold">Pulin Park Society &gt;</div>
                </div>
              </div>

              {/* Yellow Bottom Sheet */}
              <div className="bg-yellow-400 rounded-t-3xl p-4 flex-1 flex flex-col justify-between shadow-2xl -mt-4 relative z-10">
                <div>
                  <div className="w-10 h-1 bg-yellow-900/40 rounded-full mx-auto mb-2" />
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-black text-neutral-950">Choose a trip</h4>
                    <span className="text-[8px] font-bold bg-yellow-200 text-yellow-900 px-2 py-0.5 rounded-full">
                      5% promotion applied
                    </span>
                  </div>

                  {/* Vehicle Options */}
                  <div className="space-y-2">
                    {/* Auto */}
                    <div
                      onClick={() => setSelectedVehicle('Auto')}
                      className={`p-2.5 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                        selectedVehicle === 'Auto'
                          ? 'bg-white border-2 border-neutral-950 shadow-md'
                          : 'bg-white/80 border border-yellow-500/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🛺</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black">Auto</span>
                            <span className="text-[10px] text-neutral-500">👤 3</span>
                          </div>
                          <div className="text-[9px] text-neutral-600">10:38 am / 2 min</div>
                          <span className="bg-blue-600 text-white text-[7px] font-extrabold px-1 rounded">
                            ⚡ Faster
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-emerald-700">$47.50</div>
                        <div className="text-[9px] text-neutral-400 line-through">50.00</div>
                      </div>
                    </div>

                    {/* Bike */}
                    <div
                      onClick={() => setSelectedVehicle('Bike')}
                      className={`p-2.5 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                        selectedVehicle === 'Bike'
                          ? 'bg-white border-2 border-neutral-950 shadow-md'
                          : 'bg-white/80 border border-yellow-500/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🏍️</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black">Bike</span>
                            <span className="text-[10px] text-neutral-500">👤 1</span>
                          </div>
                          <div className="text-[9px] text-neutral-600">10:43 am / 7 min</div>
                          <span className="bg-blue-600 text-white text-[7px] font-extrabold px-1 rounded">
                            ⚡ Faster
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-emerald-700">$23.50</div>
                        <div className="text-[9px] text-neutral-400 line-through">40.00</div>
                      </div>
                    </div>

                    {/* Scooter */}
                    <div
                      onClick={() => setSelectedVehicle('Scooter')}
                      className={`p-2.5 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                        selectedVehicle === 'Scooter'
                          ? 'bg-white border-2 border-neutral-950 shadow-md'
                          : 'bg-white/80 border border-yellow-500/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🛵</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black">Scooter</span>
                            <span className="text-[10px] text-neutral-500">👤 1</span>
                          </div>
                          <div className="text-[9px] text-neutral-600">10:43 am / 6 min</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-emerald-700">$24.50</div>
                        <div className="text-[9px] text-neutral-400 line-through">40.00</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Button */}
                <div className="mt-2">
                  <div className="flex items-center justify-between text-[11px] font-bold mb-1.5 px-1">
                    <span>Payment</span>
                    <span className="cursor-pointer">💵 Cash &gt;</span>
                  </div>
                  <button className="w-full py-2.5 rounded-full bg-black text-white text-xs font-black shadow-lg hover:bg-neutral-900 transition-colors">
                    Choose {selectedVehicle}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
