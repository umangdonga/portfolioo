// Vector SVG data URIs for Umang Donga's real projects
// Recreates the exact UI layouts uploaded by Umang:
// 1. Gharbedhu.com E-Commerce Web Storefront
// 2. Captain Ticketu Kids Movie Booking & Parent Control
// 3. CampusConnect Student Portal (Good Morning Umang)
// 4. Indu Cafe Dark Food Ordering & Live Order Ticket
// 5. RideBox Urban Ride Hailing Mobility

export const GHARBEDHU_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1e24" />
      <stop offset="100%" stop-color="#0f0f12" />
    </linearGradient>
    <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2d2d34" />
      <stop offset="100%" stop-color="#1c1c20" />
    </linearGradient>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Dark Atmospheric Backdrop -->
  <rect width="1200" height="750" fill="url(#bgGrad)" />

  <!-- Laptop Stand / Base -->
  <g filter="url(#dropShadow)">
    <rect x="150" y="70" width="900" height="570" rx="20" fill="url(#laptopGrad)" stroke="#4a4a55" stroke-width="2" />
    <!-- Camera Notch / Bezel -->
    <circle cx="600" cy="85" r="4" fill="#08080a" />
    <circle cx="600" cy="85" r="1.5" fill="#1e293b" />

    <!-- Screen Display Area -->
    <rect x="175" y="100" width="850" height="520" rx="4" fill="#ffffff" />
    
    <!-- WEB APP: Gharbedhu.com -->
    <g transform="translate(175, 100)">
      <!-- Top Navbar (Navy Blue) -->
      <rect width="850" height="56" fill="#1b2559" />
      
      <!-- Logo Box -->
      <rect x="25" y="10" width="85" height="36" rx="6" fill="#ffffff" />
      <path d="M45 22 L55 14 L65 22 L65 32 L45 32 Z" fill="#f97316" />
      <circle cx="68" cy="33" r="2.5" fill="#1b2559" />
      <circle cx="76" cy="33" r="2.5" fill="#1b2559" />
      <text x="32" y="41" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1b2559">Gharbedhu.com</text>

      <!-- Search Bar (Orange Pill) -->
      <rect x="145" y="13" width="410" height="30" rx="15" fill="#f97316" />
      <circle cx="165" cy="28" r="6" stroke="#ffffff" stroke-width="2" fill="none" />
      <line x1="169" y1="32" x2="175" y2="38" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
      <text x="185" y="32" font-family="sans-serif" font-size="12" fill="#ffedd5">Search for products...</text>

      <!-- Right Nav Icons -->
      <!-- Wishlist -->
      <circle cx="715" cy="28" r="12" fill="#ef4444" />
      <path d="M710 26 C710 24 712 22 715 25 C718 22 720 24 720 26 C720 29 715 32 715 32 C715 32 710 29 710 26 Z" fill="#ffffff" />
      <text x="702" y="48" font-family="sans-serif" font-size="9" fill="#ffffff">Wishlist</text>

      <!-- Cart -->
      <path d="M756 22 H760 L764 32 H775 L778 24 H762" stroke="#ffffff" stroke-width="2" fill="none" stroke-linejoin="round" />
      <circle cx="766" cy="35" r="2" fill="#ffffff" />
      <circle cx="774" cy="35" r="2" fill="#ffffff" />
      <text x="760" y="48" font-family="sans-serif" font-size="9" fill="#ffffff">Cart</text>

      <!-- Account -->
      <circle cx="810" cy="25" r="5" stroke="#ffffff" stroke-width="1.8" fill="none" />
      <path d="M802 36 C802 31 806 30 810 30 C814 30 818 31 818 36" stroke="#ffffff" stroke-width="1.8" fill="none" />
      <text x="797" y="48" font-family="sans-serif" font-size="9" fill="#ffffff">Account</text>

      <!-- Hero Banner (Shop Men's - Peach/Warm Orange) -->
      <rect y="56" width="850" height="120" fill="#fed7aa" />
      <text x="50" y="96" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#1e1e24">Shop Men's</text>
      <text x="50" y="118" font-family="sans-serif" font-size="11" fill="#44403c">Our men's shop brings you the perfect mix of style and comfort. From trendy casuals to elegant</text>
      <text x="50" y="132" font-family="sans-serif" font-size="11" fill="#44403c">formals, we have everything for every occasion. Each piece is crafted with quality and modern design in mind.</text>
      <text x="50" y="146" font-family="sans-serif" font-size="11" fill="#44403c">Upgrade your wardrobe and define your personality with confidence.</text>

      <!-- Main Shop Body Area -->
      <!-- Left Filter Sidebar -->
      <g transform="translate(40, 195)">
        <rect width="180" height="295" rx="14" fill="#ffedd5" />
        <!-- Sort By Header -->
        <rect x="10" y="12" width="160" height="30" rx="8" fill="#f97316" />
        <text x="22" y="31" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Sort By:</text>
        <text x="110" y="31" font-family="sans-serif" font-size="11" fill="#ffffff">Popular</text>
        <path d="M152 28 L157 33 L162 28" stroke="#ffffff" stroke-width="2" fill="none" />

        <!-- Checkbox Items -->
        <g transform="translate(20, 60)">
          <!-- Shirts -->
          <rect x="0" y="0" width="16" height="16" rx="4" fill="#e2e8f0" />
          <text x="28" y="13" font-family="sans-serif" font-size="11" fill="#334155">Shirts</text>
          
          <!-- T-Shirts (CHECKED) -->
          <rect x="0" y="26" width="16" height="16" rx="4" fill="#0284c7" />
          <path d="M4 34 L7 37 L12 30" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" />
          <text x="28" y="39" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">T-Shirts</text>

          <!-- Jeans -->
          <rect x="0" y="52" width="16" height="16" rx="4" fill="#e2e8f0" />
          <text x="28" y="65" font-family="sans-serif" font-size="11" fill="#334155">Jeans</text>

          <!-- Trousers / Pants -->
          <rect x="0" y="78" width="16" height="16" rx="4" fill="#e2e8f0" />
          <text x="28" y="91" font-family="sans-serif" font-size="11" fill="#334155">Trousers / Pants</text>

          <!-- Jackets -->
          <rect x="0" y="104" width="16" height="16" rx="4" fill="#e2e8f0" />
          <text x="28" y="117" font-family="sans-serif" font-size="11" fill="#334155">Jackets</text>

          <!-- Hoodies & Sweatshirts -->
          <rect x="0" y="130" width="16" height="16" rx="4" fill="#e2e8f0" />
          <text x="28" y="143" font-family="sans-serif" font-size="11" fill="#334155">Hoodies &amp; Sweatshirts</text>

          <!-- Kurta & Ethnic Wear -->
          <rect x="0" y="156" width="16" height="16" rx="4" fill="#e2e8f0" />
          <text x="28" y="169" font-family="sans-serif" font-size="11" fill="#334155">Kurta &amp; Ethnic Wear</text>

          <!-- Blazers & Suits -->
          <rect x="0" y="182" width="16" height="16" rx="4" fill="#e2e8f0" />
          <text x="28" y="195" font-family="sans-serif" font-size="11" fill="#334155">Blazers &amp; Suits</text>
        </g>
      </g>

      <!-- Right Products Grid (3 Cards) -->
      <!-- Product 1: Geometric Tribal T-Shirt -->
      <g transform="translate(245, 195)">
        <rect width="180" height="235" rx="16" fill="#f8fafc" stroke="#e2e8f0" />
        <!-- Image placeholder -->
        <rect x="12" y="12" width="156" height="150" rx="12" fill="#f1f5f9" />
        <!-- Tribal Pattern Illustration on Model -->
        <circle cx="90" cy="65" r="22" fill="#fdba74" />
        <rect x="70" y="87" width="40" height="60" rx="8" fill="#ffffff" stroke="#cbd5e1" />
        <line x1="72" y1="96" x2="108" y2="96" stroke="#b91c1c" stroke-width="2" stroke-dasharray="3,2" />
        <line x1="72" y1="104" x2="108" y2="104" stroke="#0369a1" stroke-width="2" stroke-dasharray="3,2" />
        <line x1="72" y1="112" x2="108" y2="112" stroke="#b91c1c" stroke-width="2" stroke-dasharray="3,2" />
        <text x="12" y="185" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">T-Shirt With Tap's Details</text>
        <text x="12" y="202" font-family="sans-serif" font-size="11" fill="#eab308">★★★★☆ <tspan fill="#64748b" font-size="10">4/5</tspan></text>
        <text x="12" y="222" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">$399</text>
      </g>

      <!-- Product 2: Maroon Red T-Shirt -->
      <g transform="translate(445, 195)">
        <rect width="180" height="235" rx="16" fill="#f8fafc" stroke="#e2e8f0" />
        <!-- Image placeholder -->
        <rect x="12" y="12" width="156" height="150" rx="12" fill="#f1f5f9" />
        <circle cx="90" cy="65" r="22" fill="#fed7aa" />
        <rect x="70" y="87" width="40" height="60" rx="8" fill="#991b1b" />
        <text x="12" y="185" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">T-Shirt With Tap's Details</text>
        <text x="12" y="202" font-family="sans-serif" font-size="11" fill="#eab308">★★★★☆ <tspan fill="#64748b" font-size="10">4/5</tspan></text>
        <text x="12" y="222" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">$399</text>
      </g>

      <!-- Product 3: Colorblock T-Shirt -->
      <g transform="translate(645, 195)">
        <rect width="180" height="235" rx="16" fill="#f8fafc" stroke="#e2e8f0" />
        <!-- Image placeholder -->
        <rect x="12" y="12" width="156" height="150" rx="12" fill="#f1f5f9" />
        <circle cx="90" cy="65" r="22" fill="#fed7aa" />
        <!-- Tri-color block: Mustard, White, Navy -->
        <rect x="70" y="87" width="40" height="20" fill="#eab308" />
        <rect x="70" y="107" width="40" height="18" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.5" />
        <rect x="70" y="125" width="40" height="22" rx="4" fill="#1e293b" />
        <text x="12" y="185" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">T-Shirt With Tap's Details</text>
        <text x="12" y="202" font-family="sans-serif" font-size="11" fill="#eab308">★★★★☆ <tspan fill="#64748b" font-size="10">4/5</tspan></text>
        <text x="12" y="222" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">$399</text>
      </g>
    </g>

    <!-- Laptop Bottom Lip -->
    <path d="M100 640 L1100 640 L1070 655 L130 655 Z" fill="#3f3f46" />
    <rect x="520" y="640" width="160" height="6" rx="3" fill="#27272a" />
  </g>
</svg>
`)}`;

export const CAPTAIN_TICKETU_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bgTicketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
    <filter id="phoneShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <rect width="1200" height="750" fill="url(#bgTicketGrad)" />

  <!-- PHONE 1: Parent Control -->
  <g transform="translate(60, 45)" filter="url(#phoneShadow)">
    <!-- Chassis -->
    <rect width="330" height="660" rx="42" fill="#09090b" stroke="#3f3f46" stroke-width="4" />
    <!-- Screen -->
    <rect x="12" y="12" width="306" height="636" rx="32" fill="#ffffff" />
    <!-- Dynamic Island -->
    <rect x="105" y="20" width="96" height="24" rx="12" fill="#000000" />
    
    <!-- Status Bar -->
    <text x="32" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">9:41</text>
    
    <!-- Mascot Speech Card -->
    <g transform="translate(24, 60)">
      <!-- Ticketu Mascot -->
      <rect x="10" y="10" width="60" height="75" rx="8" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
      <circle cx="30" cy="40" r="5" fill="#000000" />
      <circle cx="50" cy="40" r="5" fill="#000000" />
      <path d="M32 55 Q40 64 48 55" stroke="#000000" stroke-width="2" fill="none" />
      <!-- Captain Hat -->
      <path d="M15 15 Q40 0 65 15 Z" fill="#1e3a8a" />
      <!-- Speech Bubble -->
      <rect x="85" y="5" width="165" height="85" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="95" y="24" font-family="sans-serif" font-size="9" font-weight="bold" fill="#dc2626">Hi there, Captain</text>
      <text x="95" y="36" font-family="sans-serif" font-size="8.5" fill="#334155">Ticketu! Let's set up</text>
      <text x="95" y="47" font-family="sans-serif" font-size="8.5" fill="#334155">rules so kirtan stays</text>
      <text x="95" y="58" font-family="sans-serif" font-size="8.5" fill="#334155">safe and sound. Pick</text>
      <text x="95" y="69" font-family="sans-serif" font-size="8.5" fill="#334155">what's best for kid!</text>
    </g>

    <!-- Heading -->
    <text x="24" y="178" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">Parent Control</text>

    <!-- Controls List -->
    <!-- Toggle 1: Approve Booking -->
    <g transform="translate(24, 195)">
      <rect width="260" height="60" rx="14" fill="#ffffff" stroke="#f1f5f9" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.04))" />
      <rect x="14" y="14" width="32" height="32" rx="8" fill="#fee2e2" />
      <text x="22" y="34" font-size="16">🎟️</text>
      <text x="56" y="28" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Approve Booking</text>
      <text x="56" y="42" font-family="sans-serif" font-size="9" fill="#64748b">Require parent approval</text>
      <!-- Switch ON (Red) -->
      <rect x="205" y="20" width="42" height="22" rx="11" fill="#dc2626" />
      <circle cx="236" cy="31" r="9" fill="#ffffff" />
    </g>

    <!-- Toggle 2: Payment Approval -->
    <g transform="translate(24, 268)">
      <rect width="260" height="60" rx="14" fill="#ffffff" stroke="#f1f5f9" />
      <rect x="14" y="14" width="32" height="32" rx="8" fill="#fee2e2" />
      <text x="22" y="34" font-size="16">💳</text>
      <text x="56" y="28" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Payment Approval</text>
      <text x="56" y="42" font-family="sans-serif" font-size="9" fill="#64748b">Require approval for payment</text>
      <!-- Switch OFF -->
      <rect x="205" y="20" width="42" height="22" rx="11" fill="#cbd5e1" />
      <circle cx="216" cy="31" r="9" fill="#ffffff" />
    </g>

    <!-- Toggle 3: Notification Alerts -->
    <g transform="translate(24, 341)">
      <rect width="260" height="60" rx="14" fill="#ffffff" stroke="#f1f5f9" />
      <rect x="14" y="14" width="32" height="32" rx="8" fill="#fee2e2" />
      <text x="22" y="34" font-size="16">🔔</text>
      <text x="56" y="28" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Notification Alerts</text>
      <text x="56" y="42" font-family="sans-serif" font-size="9" fill="#64748b">Get alerts when kids start</text>
      <!-- Switch ON (Red) -->
      <rect x="205" y="20" width="42" height="22" rx="11" fill="#dc2626" />
      <circle cx="236" cy="31" r="9" fill="#ffffff" />
    </g>

    <!-- Age Rating Pills -->
    <g transform="translate(24, 414)">
      <rect width="260" height="74" rx="14" fill="#ffffff" stroke="#f1f5f9" />
      <text x="14" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Set Age Rating</text>
      <text x="14" y="38" font-family="sans-serif" font-size="8.5" fill="#64748b">Restrict content based on age</text>
      <g transform="translate(10, 46)">
        <rect x="0" y="0" width="48" height="20" rx="6" fill="#dc2626" />
        <text x="6" y="14" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">All Ages</text>
        <rect x="54" y="0" width="48" height="20" rx="6" fill="#fee2e2" />
        <text x="60" y="14" font-family="sans-serif" font-size="8" fill="#991b1b">7+ Years</text>
        <rect x="108" y="0" width="56" height="20" rx="6" fill="#fee2e2" />
        <text x="114" y="14" font-family="sans-serif" font-size="8" fill="#991b1b">12+ Years</text>
        <rect x="170" y="0" width="56" height="20" rx="6" fill="#fee2e2" />
        <text x="176" y="14" font-family="sans-serif" font-size="8" fill="#991b1b">15+ Years</text>
      </g>
    </g>

    <!-- Passcode Warning Box -->
    <rect x="24" y="500" width="260" height="40" rx="10" fill="#fef2f2" stroke="#fecaca" />
    <text x="36" y="524" font-family="sans-serif" font-size="9" fill="#b91c1c">🔒 These settings are protected by passcode</text>

    <!-- Save Button (Red) -->
    <rect x="24" y="555" width="260" height="46" rx="23" fill="#dc2626" />
    <text x="80" y="583" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Save and Start the app</text>
  </g>

  <!-- PHONE 2: Choose a Cinema -->
  <g transform="translate(435, 45)" filter="url(#phoneShadow)">
    <rect width="330" height="660" rx="42" fill="#09090b" stroke="#3f3f46" stroke-width="4" />
    <rect x="12" y="12" width="306" height="636" rx="32" fill="#f8fafc" />
    <rect x="105" y="20" width="96" height="24" rx="12" fill="#000000" />
    <text x="32" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">9:41</text>

    <!-- Top Bar -->
    <text x="24" y="70" font-family="sans-serif" font-size="16" fill="#dc2626">←</text>
    <text x="90" y="70" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">The Super Mario</text>
    <text x="280" y="70" font-family="sans-serif" font-size="14" fill="#dc2626">🔍</text>

    <!-- Choose a Cinema Hero -->
    <text x="24" y="110" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0f172a">Choose a</text>
    <text x="24" y="132" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0f172a">Cinema</text>
    <text x="24" y="152" font-family="sans-serif" font-size="10" fill="#64748b">Pick the perfect spot for your adventure!</text>

    <!-- Mascot with sunglasses -->
    <rect x="235" y="90" width="45" height="55" rx="6" fill="#facc15" stroke="#ca8a04" />
    <rect x="240" y="105" width="35" height="12" rx="4" fill="#000000" />

    <!-- Cinema 1: Galaxy Cinemas -->
    <g transform="translate(24, 175)">
      <rect width="260" height="78" rx="14" fill="#ffffff" stroke="#f1f5f9" />
      <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Galaxy Cinemas</text>
      <text x="14" y="44" font-family="sans-serif" font-size="10" fill="#dc2626">📍 0.8 miles away</text>
      <!-- Popular Pill -->
      <rect x="14" y="52" width="56" height="18" rx="6" fill="#fef08a" />
      <text x="20" y="64" font-family="sans-serif" font-size="9" font-weight="bold" fill="#854d0e">Popular!</text>
      <!-- Select Button -->
      <rect x="180" y="22" width="68" height="34" rx="12" fill="#dc2626" />
      <text x="196" y="43" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Select</text>
    </g>

    <!-- Cinema 2: PVR Motera Ahmedabad -->
    <g transform="translate(24, 265)">
      <rect width="260" height="72" rx="14" fill="#ffffff" stroke="#f1f5f9" />
      <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">PVR: Motera, ahemdabad</text>
      <text x="14" y="46" font-family="sans-serif" font-size="10" fill="#dc2626">📍 5 km away</text>
      <rect x="180" y="20" width="68" height="34" rx="12" fill="#dc2626" />
      <text x="196" y="41" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Select</text>
    </g>

    <!-- Cinema 3: Apple Cinema -->
    <g transform="translate(24, 348)">
      <rect width="260" height="78" rx="14" fill="#ffffff" stroke="#f1f5f9" />
      <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Apple cinema</text>
      <text x="14" y="44" font-family="sans-serif" font-size="10" fill="#dc2626">📍 3 km away</text>
      <rect x="14" y="52" width="56" height="18" rx="6" fill="#fef08a" />
      <text x="20" y="64" font-family="sans-serif" font-size="9" font-weight="bold" fill="#854d0e">Popular!</text>
      <rect x="180" y="22" width="68" height="34" rx="12" fill="#dc2626" />
      <text x="196" y="43" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Select</text>
    </g>

    <!-- Cinema 4: RajHanse Theater -->
    <g transform="translate(24, 438)">
      <rect width="260" height="72" rx="14" fill="#ffffff" stroke="#f1f5f9" />
      <text x="14" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">RajHanse theater</text>
      <text x="14" y="46" font-family="sans-serif" font-size="10" fill="#dc2626">📍 2 km away</text>
      <rect x="180" y="20" width="68" height="34" rx="12" fill="#dc2626" />
      <text x="196" y="41" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Select</text>
    </g>
  </g>

  <!-- PHONE 3: Pick Time & Date -->
  <g transform="translate(810, 45)" filter="url(#phoneShadow)">
    <rect width="330" height="660" rx="42" fill="#09090b" stroke="#3f3f46" stroke-width="4" />
    <rect x="12" y="12" width="306" height="636" rx="32" fill="#ffffff" />
    <rect x="105" y="20" width="96" height="24" rx="12" fill="#000000" />
    <text x="32" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">9:41</text>

    <!-- Top Bar -->
    <text x="24" y="70" font-family="sans-serif" font-size="16" fill="#dc2626">←</text>
    <text x="80" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">The Super Mario Galaxy</text>

    <text x="24" y="110" font-family="sans-serif" font-size="19" font-weight="bold" fill="#0f172a">Pick Your</text>
    <text x="24" y="132" font-family="sans-serif" font-size="19" font-weight="bold" fill="#0f172a">Time &amp; Date</text>

    <!-- Date selector -->
    <g transform="translate(20, 155)">
      <!-- May 11 Mon (SELECTED) -->
      <rect x="0" y="0" width="56" height="60" rx="12" fill="#dc2626" />
      <text x="12" y="20" font-family="sans-serif" font-size="9" fill="#fecaca">MAY</text>
      <text x="18" y="38" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">11</text>
      <text x="14" y="52" font-family="sans-serif" font-size="9" fill="#ffffff">MON</text>

      <!-- May 12 Tue -->
      <rect x="66" y="0" width="56" height="60" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="78" y="20" font-family="sans-serif" font-size="9" fill="#64748b">MAY</text>
      <text x="84" y="38" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">12</text>
      <text x="80" y="52" font-family="sans-serif" font-size="9" fill="#64748b">TUE</text>

      <!-- May 13 Wed -->
      <rect x="132" y="0" width="56" height="60" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="144" y="20" font-family="sans-serif" font-size="9" fill="#64748b">MAY</text>
      <text x="150" y="38" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">13</text>
      <text x="146" y="52" font-family="sans-serif" font-size="9" fill="#64748b">WED</text>

      <!-- May 14 Thu -->
      <rect x="198" y="0" width="56" height="60" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="210" y="20" font-family="sans-serif" font-size="9" fill="#64748b">MAY</text>
      <text x="216" y="38" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">14</text>
      <text x="212" y="52" font-family="sans-serif" font-size="9" fill="#64748b">THU</text>
    </g>

    <!-- Morning Times -->
    <text x="24" y="246" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">🌅 Morning</text>
    <g transform="translate(20, 258)">
      <rect x="0" y="0" width="76" height="34" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="14" y="21" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">10:00 AM</text>
      <rect x="86" y="0" width="76" height="34" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="100" y="21" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">11:15 AM</text>
      <rect x="172" y="0" width="90" height="34" rx="10" fill="#f1f5f9" />
      <text x="180" y="16" font-family="sans-serif" font-size="9" fill="#94a3b8">11:45 AM</text>
      <text x="180" y="28" font-family="sans-serif" font-size="7.5" font-weight="bold" fill="#dc2626">SOLD OUT</text>
    </g>

    <!-- Afternoon Times -->
    <text x="24" y="322" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">☀️ Afternoon</text>
    <g transform="translate(20, 334)">
      <!-- 01:30 PM (SELECTED RED) -->
      <rect x="0" y="0" width="76" height="34" rx="10" fill="#dc2626" />
      <text x="14" y="21" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#ffffff">01:30 PM</text>
      <rect x="86" y="0" width="76" height="34" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="100" y="21" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">02:45 PM</text>
      <rect x="172" y="0" width="76" height="34" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="186" y="21" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">03:55 PM</text>
    </g>

    <!-- Evening Times -->
    <text x="24" y="398" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">🌙 Evening</text>
    <g transform="translate(20, 410)">
      <rect x="0" y="0" width="76" height="34" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="14" y="21" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">06:00 PM</text>
      <rect x="86" y="0" width="76" height="34" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="100" y="21" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">07:30 PM</text>
      <rect x="172" y="0" width="76" height="34" rx="10" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="186" y="21" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0f172a">08:00 PM</text>
    </g>

    <!-- Primary Action: Continue to Seats -->
    <rect x="24" y="555" width="260" height="46" rx="23" fill="#dc2626" />
    <text x="82" y="583" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Continue to Seats</text>
  </g>
</svg>
`)}`;

export const CAMPUS_CONNECT_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bgCampus" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1329" />
      <stop offset="100%" stop-color="#030712" />
    </linearGradient>
    <filter id="phoneShadow2" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <rect width="1200" height="750" fill="url(#bgCampus)" />

  <!-- PHONE 1: Good Morning Umang (Campus Map & Actions) -->
  <g transform="translate(180, 45)" filter="url(#phoneShadow2)">
    <rect width="360" height="660" rx="44" fill="#09090b" stroke="#334155" stroke-width="4" />
    <rect x="12" y="12" width="336" height="636" rx="34" fill="#f8fafc" />
    <rect x="120" y="20" width="96" height="24" rx="12" fill="#000000" />
    <text x="36" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">9:41</text>

    <!-- Header: Good Morning Umang -->
    <g transform="translate(24, 60)">
      <text x="0" y="14" font-family="sans-serif" font-size="11" fill="#64748b">Tuesday, Oct 24</text>
      <text x="0" y="36" font-family="sans-serif" font-size="19" font-weight="bold" fill="#0f172a">Good Morning, Umang</text>
      <!-- Notification Bell in navy circle -->
      <circle cx="275" cy="22" r="18" fill="#0f2942" />
      <text x="268" y="28" font-size="14">🔔</text>
    </g>

    <!-- Search Bar -->
    <g transform="translate(24, 118)">
      <rect width="288" height="42" rx="12" fill="#ffffff" stroke="#e2e8f0" />
      <text x="14" y="26" font-size="14">🔍</text>
      <text x="36" y="26" font-family="sans-serif" font-size="11" fill="#94a3b8">Finding building, lab and classroom</text>
    </g>

    <!-- Campus Map Card -->
    <g transform="translate(24, 175)">
      <rect width="288" height="175" rx="16" fill="#ffffff" stroke="#e2e8f0" />
      <text x="14" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Campus Map</text>
      
      <!-- 3D Map Area -->
      <rect x="14" y="34" width="260" height="90" rx="10" fill="#dcfce7" stroke="#bbf7d0" />
      <!-- Stylized buildings on map -->
      <rect x="40" y="55" width="40" height="35" rx="4" fill="#ffffff" stroke="#94a3b8" />
      <rect x="110" y="45" width="55" height="40" rx="4" fill="#ffffff" stroke="#94a3b8" />
      <rect x="190" y="60" width="45" height="30" rx="4" fill="#ffffff" stroke="#94a3b8" />
      <!-- Path line -->
      <path d="M25 80 Q90 100 150 75 T250 85" stroke="#f97316" stroke-width="3" fill="none" stroke-dasharray="4,3" />
      <!-- View Full Map Pill -->
      <rect x="160" y="85" width="105" height="28" rx="14" fill="#0f2942" />
      <text x="175" y="103" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff">🗺️ View Full Map</text>

      <text x="14" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Explore Campus Buildings</text>
      <text x="14" y="158" font-family="sans-serif" font-size="9" fill="#64748b">Find labs, department, and reception area</text>
    </g>

    <!-- Quick Action Grid (2x2) -->
    <g transform="translate(24, 370)">
      <text x="0" y="0" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Quick Action</text>
      <text x="250" y="0" font-family="sans-serif" font-size="11" fill="#0284c7">See All</text>

      <!-- Action 1: Bus Service -->
      <g transform="translate(0, 14)">
        <rect width="138" height="85" rx="14" fill="#0f2942" />
        <text x="54" y="38" font-size="22">🚌</text>
        <text x="35" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Bus service</text>
        <text x="32" y="70" font-family="sans-serif" font-size="8" fill="#94a3b8">Menu &amp; Specials</text>
      </g>

      <!-- Action 2: Admission -->
      <g transform="translate(150, 14)">
        <rect width="138" height="85" rx="14" fill="#0f2942" />
        <text x="54" y="38" font-size="22">🎓</text>
        <text x="40" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Admission</text>
        <text x="36" y="70" font-family="sans-serif" font-size="8" fill="#94a3b8">Status &amp; FAQs</text>
      </g>

      <!-- Action 3: Hostel -->
      <g transform="translate(0, 110)">
        <rect width="138" height="85" rx="14" fill="#0f2942" />
        <text x="54" y="45" font-size="24">🛏️</text>
        <text x="50" y="68" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Hostel</text>
      </g>

      <!-- Action 4: Library -->
      <g transform="translate(150, 110)">
        <rect width="138" height="85" rx="14" fill="#0f2942" />
        <text x="54" y="45" font-size="24">📖</text>
        <text x="50" y="68" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Library</text>
      </g>
    </g>

    <!-- Bottom Nav -->
    <rect x="24" y="585" width="288" height="48" rx="24" fill="#ffffff" stroke="#e2e8f0" />
    <text x="50" y="615" font-size="16">🏠</text>
    <text x="115" y="615" font-size="16">📍</text>
    <text x="180" y="615" font-size="16">🌐</text>
    <text x="245" y="615" font-size="16">👤</text>
  </g>

  <!-- PHONE 2: Notifications (Academic & Social Updates) -->
  <g transform="translate(660, 45)" filter="url(#phoneShadow2)">
    <rect width="360" height="660" rx="44" fill="#09090b" stroke="#334155" stroke-width="4" />
    <rect x="12" y="12" width="336" height="636" rx="34" fill="#f8fafc" />
    <rect x="120" y="20" width="96" height="24" rx="12" fill="#000000" />
    <text x="36" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">9:41</text>

    <!-- Top Bar -->
    <g transform="translate(24, 60)">
      <circle cx="16" cy="16" r="16" fill="#0f2942" />
      <text x="10" y="21" font-size="14" fill="#ffffff">←</text>
      <text x="44" y="22" font-family="sans-serif" font-size="18" font-weight="bold" fill="#0f172a">Notifications</text>
    </g>

    <!-- Academic Updates Section -->
    <text x="24" y="122" font-family="sans-serif" font-size="10" font-weight="bold" fill="#64748b" letter-spacing="1">ACADEMIC UPDATES</text>

    <!-- Notification 1: Advanced Algorithms -->
    <g transform="translate(24, 134)">
      <rect width="288" height="85" rx="14" fill="#ffffff" stroke="#e2e8f0" />
      <circle cx="28" cy="30" r="14" fill="#dcfce7" />
      <text x="21" y="36" font-size="14">⏰</text>
      <text x="52" y="24" font-family="sans-serif" font-size="8" font-weight="bold" fill="#16a34a">NEW GRADE</text>
      <text x="235" y="24" font-family="sans-serif" font-size="8" fill="#94a3b8">10m ago •</text>
      <text x="52" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Advanced Algorithms</text>
      <text x="52" y="58" font-family="sans-serif" font-size="9" fill="#475569">Your final grade for CS402 has been</text>
      <text x="52" y="70" font-family="sans-serif" font-size="9" fill="#475569">posted. Great job on the project!</text>
    </g>

    <!-- Notification 2: Library Due -->
    <g transform="translate(24, 230)">
      <rect width="288" height="85" rx="14" fill="#ffffff" stroke="#e2e8f0" />
      <circle cx="28" cy="30" r="14" fill="#ffedd5" />
      <text x="21" y="36" font-size="14">⏳</text>
      <text x="52" y="24" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ea580c">LIBRARY DUE</text>
      <text x="245" y="24" font-family="sans-serif" font-size="8" fill="#94a3b8">2h ago</text>
      <text x="52" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Book Return Reminder</text>
      <text x="52" y="58" font-family="sans-serif" font-size="9" fill="#475569">'Design Patterns: Elements of Reusable</text>
      <text x="52" y="70" font-family="sans-serif" font-size="9" fill="#475569">Object-Oriented Software' is due tomorrow.</text>
    </g>

    <!-- Social Updates Section -->
    <text x="24" y="340" font-family="sans-serif" font-size="10" font-weight="bold" fill="#64748b" letter-spacing="1">SOCIAL UPDATES</text>

    <!-- Notification 3: Coding Club Meeting -->
    <g transform="translate(24, 352)">
      <rect width="288" height="85" rx="14" fill="#ffffff" stroke="#e2e8f0" />
      <circle cx="28" cy="30" r="14" fill="#dbeafe" />
      <text x="21" y="36" font-size="14">♣️</text>
      <text x="52" y="24" font-family="sans-serif" font-size="8" font-weight="bold" fill="#2563eb">CLUB EVENT</text>
      <text x="245" y="24" font-family="sans-serif" font-size="8" fill="#94a3b8">4h ago</text>
      <text x="52" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Coding Club Meeting</text>
      <text x="52" y="58" font-family="sans-serif" font-size="9" fill="#475569">Don't forget our weekly sync at the</text>
      <text x="52" y="70" font-family="sans-serif" font-size="9" fill="#475569">Innovation Lab at 5:00 PM today!</text>
    </g>

    <!-- Notification 4: Live Music Night -->
    <g transform="translate(24, 448)">
      <rect width="288" height="85" rx="14" fill="#ffffff" stroke="#e2e8f0" />
      <circle cx="28" cy="30" r="14" fill="#f3e8ff" />
      <text x="21" y="36" font-size="14">🎙️</text>
      <text x="52" y="24" font-family="sans-serif" font-size="8" font-weight="bold" fill="#9333ea">SOCIAL</text>
      <text x="235" y="24" font-family="sans-serif" font-size="8" fill="#94a3b8">Yesterday</text>
      <text x="52" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Live Music Night</text>
      <text x="52" y="58" font-family="sans-serif" font-size="9" fill="#475569">Don't forget our weekly sync at the</text>
      <text x="52" y="70" font-family="sans-serif" font-size="9" fill="#475569">Innovation Lab at 5:00 PM today!</text>
    </g>

    <!-- Bottom Nav -->
    <rect x="24" y="585" width="288" height="48" rx="24" fill="#ffffff" stroke="#e2e8f0" />
    <text x="50" y="615" font-size="16">🏠</text>
    <text x="115" y="615" font-size="16">📍</text>
    <text x="180" y="615" font-size="16">🌐</text>
    <text x="245" y="615" font-size="16">👤</text>
  </g>
</svg>
`)}`;

export const INDU_CAFE_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bgCafe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121214" />
      <stop offset="100%" stop-color="#050506" />
    </linearGradient>
    <filter id="phoneShadow3" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <rect width="1200" height="750" fill="url(#bgCafe)" />

  <!-- PHONE 1: Indu Cafe Home & Live Order Confirmation -->
  <g transform="translate(180, 45)" filter="url(#phoneShadow3)">
    <rect width="360" height="660" rx="44" fill="#09090b" stroke="#27272a" stroke-width="4" />
    <rect x="12" y="12" width="336" height="636" rx="34" fill="#121212" />
    <rect x="120" y="20" width="96" height="24" rx="12" fill="#000000" />
    <text x="36" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">9:41</text>

    <!-- Header: Hello Akanksha -->
    <g transform="translate(24, 60)">
      <text x="0" y="20" font-family="sans-serif" font-size="17" font-weight="bold" fill="#ffffff">Hello <tspan fill="#facc15">Akanksha</tspan></text>
      <text x="0" y="38" font-family="sans-serif" font-size="10" fill="#a1a1aa">Welcome to the indu cafe.</text>
      <circle cx="275" cy="22" r="16" fill="#1f1f22" />
      <text x="268" y="27" font-size="13" fill="#facc15">🔔</text>
    </g>

    <!-- Search Bar -->
    <g transform="translate(24, 115)">
      <rect width="288" height="38" rx="19" fill="#1e1e24" stroke="#2e2e34" />
      <text x="14" y="24" font-size="13">🔍</text>
      <text x="34" y="24" font-family="sans-serif" font-size="11" fill="#71717a">pizza, burger, paratha...</text>
    </g>

    <!-- Category Pills -->
    <g transform="translate(24, 168)">
      <!-- All (Active Yellow) -->
      <rect x="0" y="0" width="48" height="52" rx="12" fill="#facc15" />
      <text x="14" y="24" font-size="18">🍔</text>
      <text x="16" y="44" font-family="sans-serif" font-size="9" font-weight="bold" fill="#000000">All</text>
      
      <!-- Pizza -->
      <rect x="58" y="0" width="48" height="52" rx="12" fill="#1f1f23" stroke="#2e2e34" />
      <text x="72" y="24" font-size="18">🍕</text>
      <text x="70" y="44" font-family="sans-serif" font-size="9" fill="#a1a1aa">Pizza</text>

      <!-- Burger -->
      <rect x="116" y="0" width="48" height="52" rx="12" fill="#1f1f23" stroke="#2e2e34" />
      <text x="130" y="24" font-size="18">🍔</text>
      <text x="125" y="44" font-family="sans-serif" font-size="9" fill="#a1a1aa">Burger</text>

      <!-- Noodles -->
      <rect x="174" y="0" width="48" height="52" rx="12" fill="#1f1f23" stroke="#2e2e34" />
      <text x="188" y="24" font-size="18">🍜</text>
      <text x="180" y="44" font-family="sans-serif" font-size="9" fill="#a1a1aa">Noodles</text>

      <!-- Paratha -->
      <rect x="232" y="0" width="56" height="52" rx="12" fill="#1f1f23" stroke="#2e2e34" />
      <text x="250" y="24" font-size="18">🫓</text>
      <text x="240" y="44" font-family="sans-serif" font-size="9" fill="#a1a1aa">Paratha</text>
    </g>

    <!-- Yellow Perforated Ticket: Order Confirmed -->
    <g transform="translate(24, 235)">
      <rect width="288" height="150" rx="14" fill="#fde047" />
      <!-- Ticket notched cutouts -->
      <circle cx="0" cy="75" r="8" fill="#121212" />
      <circle cx="288" cy="75" r="8" fill="#121212" />
      
      <!-- Left side of ticket -->
      <circle cx="45" cy="30" r="10" fill="#22c55e" />
      <text x="40" y="34" font-size="11" fill="#ffffff">✓</text>
      <text x="65" y="28" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1e1e24">Order Confirmed</text>
      <text x="65" y="40" font-family="sans-serif" font-size="8" fill="#713f12">16/4/2026</text>

      <text x="20" y="65" font-family="sans-serif" font-size="9.5" fill="#422006">Classic Burger</text>
      <text x="90" y="65" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#422006">Rs.150/-</text>
      <text x="20" y="80" font-family="sans-serif" font-size="9.5" fill="#422006">Cold Drink</text>
      <text x="90" y="80" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#422006">Rs.60/-</text>
      
      <line x1="20" y1="92" x2="135" y2="92" stroke="#ca8a04" stroke-width="1" stroke-dasharray="3,2" />
      <text x="20" y="108" font-family="sans-serif" font-size="11" font-weight="bold" fill="#000000">Total</text>
      <text x="80" y="108" font-family="sans-serif" font-size="11" font-weight="bold" fill="#000000">Rs.210/-</text>

      <!-- Right side: wait message & status button -->
      <text x="155" y="40" font-family="sans-serif" font-size="9.5" font-style="italic" font-weight="bold" fill="#854d0e">Please wait 10 minutes</text>
      <text x="155" y="55" font-family="sans-serif" font-size="9" fill="#854d0e">your order will be ready</text>
      <text x="155" y="68" font-family="sans-serif" font-size="9" fill="#854d0e">shortly.</text>

      <!-- Live-order status button -->
      <rect x="155" y="90" width="115" height="28" rx="14" fill="#ffffff" stroke="#ca8a04" />
      <text x="168" y="108" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#854d0e">Live-order status</text>
    </g>

    <!-- Recommended for you -->
    <g transform="translate(24, 400)">
      <text x="0" y="14" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Recommended for you</text>
      <text x="245" y="14" font-family="sans-serif" font-size="10" fill="#facc15">See all</text>

      <!-- Food Card -->
      <g transform="translate(0, 26)">
        <rect width="138" height="130" rx="14" fill="#1c1c20" stroke="#2e2e34" />
        <rect x="10" y="10" width="118" height="60" rx="10" fill="#2d2d34" />
        <text x="50" y="45" font-size="28">🍔</text>
        <text x="10" y="86" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Classic Burger</text>
        <text x="10" y="112" font-family="sans-serif" font-size="11" font-weight="bold" fill="#facc15">Rs.150/-</text>
        <rect x="75" y="96" width="54" height="24" rx="12" fill="#facc15" />
        <text x="82" y="112" font-family="sans-serif" font-size="8" font-weight="bold" fill="#000000">Add to cart</text>
      </g>

      <!-- Second Food Card -->
      <g transform="translate(150, 26)">
        <rect width="138" height="130" rx="14" fill="#1c1c20" stroke="#2e2e34" />
        <rect x="10" y="10" width="118" height="60" rx="10" fill="#2d2d34" />
        <text x="50" y="45" font-size="28">🔥</text>
        <text x="10" y="86" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Classic Burger</text>
        <text x="10" y="112" font-family="sans-serif" font-size="11" font-weight="bold" fill="#facc15">Rs.150/-</text>
        <rect x="75" y="96" width="54" height="24" rx="12" fill="#facc15" />
        <text x="82" y="112" font-family="sans-serif" font-size="8" font-weight="bold" fill="#000000">Add to cart</text>
      </g>
    </g>

    <!-- Bottom Nav -->
    <rect x="24" y="585" width="288" height="48" rx="24" fill="#18181b" stroke="#2e2e34" />
    <text x="50" y="615" font-size="16">🏠</text>
    <text x="140" y="615" font-size="16">🛍️</text>
    <text x="230" y="615" font-size="16">👤</text>
  </g>

  <!-- PHONE 2: Indu Cafe Cart Screen -->
  <g transform="translate(660, 45)" filter="url(#phoneShadow3)">
    <rect width="360" height="660" rx="44" fill="#09090b" stroke="#27272a" stroke-width="4" />
    <rect x="12" y="12" width="336" height="636" rx="34" fill="#121212" />
    <rect x="120" y="20" width="96" height="24" rx="12" fill="#000000" />
    <text x="36" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">9:41</text>

    <!-- Top Bar: Cart -->
    <g transform="translate(24, 60)">
      <text x="0" y="20" font-size="18" fill="#ffffff">←</text>
      <text x="125" y="20" font-family="sans-serif" font-size="17" font-weight="bold" fill="#ffffff">Cart</text>
      <text x="268" y="20" font-size="16" fill="#a1a1aa">🗑️</text>
    </g>

    <!-- Cart Item: Classic Burger -->
    <g transform="translate(24, 100)">
      <rect width="288" height="110" rx="16" fill="#1c1c20" stroke="#2e2e34" />
      <rect x="12" y="12" width="85" height="85" rx="12" fill="#2d2d34" />
      <text x="35" y="62" font-size="36">🍔</text>
      <text x="108" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Classic Burger</text>
      <text x="108" y="48" font-family="sans-serif" font-size="8.5" fill="#71717a">A burger is a popular fast food made with a</text>
      <text x="108" y="60" font-family="sans-serif" font-size="8.5" fill="#71717a">patty, buns, and various toppings.</text>
      <text x="108" y="85" font-family="sans-serif" font-size="13" font-weight="bold" fill="#facc15">Rs.150/-</text>
      <!-- Stepper [-] 2 [+] -->
      <g transform="translate(215, 70)">
        <text x="0" y="14" font-size="14" fill="#ffffff">-</text>
        <circle cx="22" cy="10" r="10" fill="#2e2e34" />
        <text x="18" y="14" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">2</text>
        <text x="38" y="14" font-size="14" fill="#ffffff">+</text>
      </g>
    </g>

    <!-- Add with your order -->
    <g transform="translate(24, 226)">
      <text x="0" y="14" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Add with your order</text>
      
      <!-- Cold Drink -->
      <g transform="translate(0, 26)">
        <rect width="138" height="100" rx="14" fill="#1c1c20" stroke="#2e2e34" />
        <text x="50" y="38" font-size="26">🥤</text>
        <text x="12" y="60" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">Ice Cold Drink</text>
        <text x="12" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#facc15">Rs.60/-</text>
        <text x="85" y="80" font-family="sans-serif" font-size="10" fill="#a1a1aa">- 0 +</text>
      </g>

      <!-- Potato Chips / Fries -->
      <g transform="translate(150, 26)">
        <rect width="138" height="100" rx="14" fill="#1c1c20" stroke="#2e2e34" />
        <text x="50" y="38" font-size="26">🍟</text>
        <text x="12" y="60" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff">Potato Chips</text>
        <text x="12" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#facc15">Rs.100/-</text>
        <text x="85" y="80" font-family="sans-serif" font-size="10" fill="#a1a1aa">- 0 +</text>
      </g>
    </g>

    <!-- Add Coupon -->
    <g transform="translate(24, 370)">
      <rect width="288" height="42" rx="12" fill="#1c1c20" stroke="#2e2e34" />
      <rect x="12" y="9" width="24" height="24" rx="6" fill="#facc15" />
      <text x="18" y="25" font-size="12" font-weight="bold" fill="#000000">%</text>
      <text x="45" y="26" font-family="sans-serif" font-size="11" fill="#71717a">Add Coupon code</text>
    </g>

    <!-- Payment Summary -->
    <g transform="translate(24, 430)">
      <text x="0" y="14" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Payment Summary</text>
      <text x="0" y="38" font-family="sans-serif" font-size="10" fill="#a1a1aa">Subtotal</text>
      <text x="245" y="38" font-family="sans-serif" font-size="10" fill="#ffffff">Rs.300</text>
      
      <text x="0" y="56" font-family="sans-serif" font-size="10" fill="#a1a1aa">Discount</text>
      <text x="240" y="56" font-family="sans-serif" font-size="10" fill="#22c55e">-Rs.20</text>

      <text x="0" y="74" font-family="sans-serif" font-size="10" fill="#a1a1aa">Service fee</text>
      <text x="245" y="74" font-family="sans-serif" font-size="10" fill="#ffffff">Rs.00</text>

      <line x1="0" y1="88" x2="288" y2="88" stroke="#facc15" stroke-width="1" />
      <text x="0" y="110" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Total amount</text>
      <text x="228" y="110" font-family="sans-serif" font-size="14" font-weight="bold" fill="#facc15">Rs.320</text>
    </g>

    <!-- Action Buttons -->
    <g transform="translate(24, 568)">
      <rect x="0" y="0" width="138" height="44" rx="22" fill="#facc15" />
      <text x="35" y="27" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">Add Items</text>

      <rect x="150" y="0" width="138" height="44" rx="22" fill="#facc15" />
      <text x="195" y="27" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">Confirm</text>
    </g>
  </g>
</svg>
`)}`;

export const RIDEBOX_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bgRide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1c1917" />
      <stop offset="100%" stop-color="#0c0a09" />
    </linearGradient>
    <filter id="phoneShadow4" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.8"/>
    </filter>
  </defs>

  <rect width="1200" height="750" fill="url(#bgRide)" />

  <!-- PHONE 1: Ride Box Suggestions -->
  <g transform="translate(180, 45)" filter="url(#phoneShadow4)">
    <rect width="360" height="660" rx="44" fill="#09090b" stroke="#44403c" stroke-width="4" />
    <rect x="12" y="12" width="336" height="636" rx="34" fill="#fefce8" />
    <rect x="120" y="20" width="96" height="24" rx="12" fill="#000000" />
    <text x="36" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">9:41</text>

    <!-- Top Brand: RIDE BOX -->
    <g transform="translate(125, 60)">
      <rect width="110" height="30" rx="15" fill="#4ade80" opacity="0.8" />
      <text x="18" y="20" font-size="14">🚗</text>
      <text x="40" y="21" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">RIDE BOX</text>
    </g>

    <!-- Search Input -->
    <g transform="translate(24, 105)">
      <rect width="288" height="42" rx="21" fill="#ffffff" stroke="#e2e8f0" />
      <text x="14" y="26" font-size="14">🔍</text>
      <text x="36" y="26" font-family="sans-serif" font-size="11" fill="#64748b">Enter the Pick-up point</text>
      <!-- Later Pill -->
      <rect x="215" y="8" width="60" height="26" rx="13" fill="#f1f5f9" />
      <text x="225" y="25" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">📅 Later</text>
    </g>

    <!-- Suggestions Grid -->
    <text x="24" y="172" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0f172a">Suggestions</text>

    <g transform="translate(24, 185)">
      <!-- Row 1 -->
      <g transform="translate(0, 0)">
        <rect width="66" height="66" rx="14" fill="#ffffff" stroke="#f1f5f9" />
        <text x="22" y="34" font-size="22">🚗</text>
        <text x="20" y="54" font-family="sans-serif" font-size="9" fill="#0f172a">Trip</text>
      </g>

      <g transform="translate(74, 0)">
        <rect width="66" height="66" rx="14" fill="#ffffff" stroke="#f1f5f9" />
        <!-- 50% tag -->
        <rect x="14" y="-5" width="38" height="14" rx="4" fill="#15803d" />
        <text x="18" y="5" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">🏷️ 50%</text>
        <text x="22" y="34" font-size="22">🛵</text>
        <text x="8" y="54" font-family="sans-serif" font-size="9" fill="#0f172a">Send items</text>
      </g>

      <g transform="translate(148, 0)">
        <rect width="66" height="66" rx="14" fill="#ffffff" stroke="#f1f5f9" />
        <text x="22" y="34" font-size="22">🚕</text>
        <text x="14" y="54" font-family="sans-serif" font-size="9" fill="#0f172a">Intercity</text>
      </g>

      <g transform="translate(222, 0)">
        <rect width="66" height="66" rx="14" fill="#ffffff" stroke="#f1f5f9" />
        <rect x="14" y="-5" width="38" height="14" rx="4" fill="#ca8a04" />
        <text x="18" y="5" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">Promo</text>
        <text x="22" y="34" font-size="22">🔄</text>
        <text x="14" y="54" font-family="sans-serif" font-size="9" fill="#0f172a">Reserve</text>
      </g>

      <!-- Row 2 -->
      <g transform="translate(0, 78)">
        <rect width="66" height="66" rx="14" fill="#ffffff" stroke="#f1f5f9" />
        <text x="22" y="34" font-size="22">🚙</text>
        <text x="14" y="54" font-family="sans-serif" font-size="9" fill="#0f172a">Rentals</text>
      </g>

      <g transform="translate(74, 78)">
        <rect width="66" height="66" rx="14" fill="#ffffff" stroke="#f1f5f9" />
        <text x="22" y="34" font-size="22">🧑‍🤝‍🧑</text>
        <text x="18" y="54" font-family="sans-serif" font-size="9" fill="#0f172a">Teens</text>
      </g>

      <g transform="translate(148, 78)">
        <rect width="66" height="66" rx="14" fill="#ffffff" stroke="#f1f5f9" />
        <text x="22" y="34" font-size="22">👵</text>
        <text x="14" y="54" font-family="sans-serif" font-size="9" fill="#0f172a">Seniors</text>
      </g>

      <g transform="translate(222, 78)">
        <rect width="66" height="66" rx="14" fill="#ffffff" stroke="#f1f5f9" />
        <text x="22" y="34" font-size="22">▦</text>
        <text x="14" y="54" font-family="sans-serif" font-size="9" fill="#0f172a">See all</text>
      </g>
    </g>

    <!-- Gear up safety banner -->
    <g transform="translate(24, 355)">
      <rect width="288" height="210" rx="20" fill="#facc15" />
      <text x="18" y="36" font-family="sans-serif" font-size="17" font-weight="bold" fill="#0f172a">Gear up for safety</text>
      <text x="18" y="58" font-family="sans-serif" font-size="17" font-weight="bold" fill="#0f172a">at $3</text>
      
      <!-- Get started button -->
      <rect x="18" y="80" width="85" height="30" rx="15" fill="#ffffff" />
      <text x="26" y="99" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Get started</text>

      <!-- Safety Biker graphics -->
      <circle cx="210" cy="120" r="50" fill="#eab308" />
      <text x="175" y="140" font-size="52">🏍️</text>
    </g>

    <!-- Bottom Nav -->
    <rect x="24" y="585" width="288" height="48" rx="24" fill="#ffffff" stroke="#e2e8f0" />
    <text x="50" y="615" font-size="16">🏠</text>
    <text x="115" y="615" font-size="16">🚗</text>
    <text x="180" y="615" font-size="16">📋</text>
    <text x="245" y="615" font-size="16">👤</text>
  </g>

  <!-- PHONE 2: Choose a trip (Bottom Sheet & Route) -->
  <g transform="translate(660, 45)" filter="url(#phoneShadow4)">
    <rect width="360" height="660" rx="44" fill="#09090b" stroke="#44403c" stroke-width="4" />
    <rect x="12" y="12" width="336" height="636" rx="34" fill="#f8fafc" />
    <rect x="120" y="20" width="96" height="24" rx="12" fill="#000000" />
    <text x="36" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#000000">9:41</text>

    <!-- Map Top Background -->
    <rect x="12" y="45" width="336" height="210" fill="#e2e8f0" />
    <!-- Road Grid Pattern -->
    <line x1="12" y1="120" x2="348" y2="120" stroke="#ffffff" stroke-width="8" />
    <line x1="160" y1="45" x2="160" y2="255" stroke="#ffffff" stroke-width="8" />
    <!-- Route Line -->
    <path d="M60 180 L160 120 L280 90" stroke="#0284c7" stroke-width="6" fill="none" stroke-linecap="round" />
    <!-- Destination Pin -->
    <circle cx="280" cy="90" r="8" fill="#ef4444" />
    <!-- Top HUD: Pulin Park Society -->
    <g transform="translate(180, 60)">
      <rect width="130" height="34" rx="8" fill="#000000" />
      <text x="12" y="16" font-family="sans-serif" font-size="8" fill="#facc15">2 MIN</text>
      <text x="12" y="28" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff">Pulin Park Society &gt;</text>
    </g>

    <!-- Yellow Bottom Sheet: Choose a trip -->
    <g transform="translate(12, 210)">
      <rect width="336" height="438" rx="28" fill="#facc15" />
      <rect x="150" y="10" width="36" height="4" rx="2" fill="#713f12" opacity="0.4" />
      
      <text x="90" y="44" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0f172a">Choose a trip</text>
      
      <!-- Promo applied tag -->
      <g transform="translate(24, 60)">
        <rect width="125" height="20" rx="6" fill="#fef08a" />
        <text x="10" y="14" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#854d0e">🏷️ 5% promotion applied</text>
      </g>

      <!-- Ride Option 1: Auto (Rickshaw) -->
      <g transform="translate(20, 92)">
        <rect width="296" height="74" rx="14" fill="#ffffff" stroke="#000000" stroke-width="2" />
        <text x="18" y="45" font-size="28">🛺</text>
        <text x="65" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">Auto</text>
        <text x="110" y="32" font-family="sans-serif" font-size="11" fill="#64748b">👤 3</text>
        <text x="65" y="48" font-family="sans-serif" font-size="9.5" fill="#64748b">10:38 am / 2 min</text>
        <!-- Faster badge -->
        <rect x="65" y="54" width="56" height="16" rx="4" fill="#2563eb" />
        <text x="70" y="65" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">⚡ Faster</text>

        <!-- Price -->
        <text x="235" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#16a34a">$47.50</text>
        <text x="245" y="46" font-family="sans-serif" font-size="10" text-decoration="line-through" fill="#94a3b8">50.00</text>
      </g>

      <!-- Ride Option 2: Bike (Motorcycle) -->
      <g transform="translate(20, 178)">
        <rect width="296" height="74" rx="14" fill="#ffffff" stroke="#e2e8f0" />
        <text x="18" y="45" font-size="28">🏍️</text>
        <text x="65" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">Bike</text>
        <text x="110" y="32" font-family="sans-serif" font-size="11" fill="#64748b">👤 1</text>
        <text x="65" y="48" font-family="sans-serif" font-size="9.5" fill="#64748b">10:43 am / 7 min</text>
        <rect x="65" y="54" width="56" height="16" rx="4" fill="#2563eb" />
        <text x="70" y="65" font-family="sans-serif" font-size="8" font-weight="bold" fill="#ffffff">⚡ Faster</text>

        <text x="235" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#16a34a">$23.50</text>
        <text x="245" y="46" font-family="sans-serif" font-size="10" text-decoration="line-through" fill="#94a3b8">40.00</text>
      </g>

      <!-- Ride Option 3: Scooter -->
      <g transform="translate(20, 264)">
        <rect width="296" height="74" rx="14" fill="#ffffff" stroke="#e2e8f0" />
        <text x="18" y="45" font-size="28">🛵</text>
        <text x="65" y="32" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">Scooter</text>
        <text x="120" y="32" font-family="sans-serif" font-size="11" fill="#64748b">👤 1</text>
        <text x="65" y="48" font-family="sans-serif" font-size="9.5" fill="#64748b">10:43 am / 6 min</text>

        <text x="235" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#16a34a">$24.50</text>
        <text x="245" y="46" font-family="sans-serif" font-size="10" text-decoration="line-through" fill="#94a3b8">40.00</text>
      </g>

      <!-- Cash Selector -->
      <g transform="translate(20, 348)">
        <rect width="296" height="34" rx="8" fill="#ffffff" opacity="0.6" />
        <text x="20" y="22" font-size="12">💵</text>
        <text x="40" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#000000">Cash &gt;</text>
      </g>

      <!-- Choose Auto Primary Button -->
      <rect x="20" y="390" width="296" height="42" rx="21" fill="#000000" />
      <text x="110" y="416" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Choose Auto</text>
    </g>
  </g>
</svg>
`)}`;

// 6. Care Band: Safety & Support Wearable (HealthTech & IoT)
export const CARE_BAND_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="cbBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16" />
      <stop offset="100%" stop-color="#04070d" />
    </linearGradient>
    <linearGradient id="bandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <filter id="cbGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="cbShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="25" flood-color="#000000" flood-opacity="0.75" />
    </filter>
  </defs>

  <!-- Dark Atmospheric Backdrop -->
  <rect width="1200" height="750" fill="url(#cbBg)" />

  <!-- Background Decorative Wave & Grid -->
  <path d="M 0 500 Q 300 450 600 520 T 1200 460" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.15" fill="none" />
  <path d="M 0 560 Q 300 510 600 580 T 1200 520" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.1" fill="none" />

  <!-- PHONE 1: Wearable Dashboard & Vital Telemetry -->
  <g transform="translate(180, 45)" filter="url(#cbShadow)">
    <rect width="360" height="660" rx="44" fill="#0b111e" stroke="#1e293b" stroke-width="3.5" />
    <rect x="12" y="12" width="336" height="636" rx="34" fill="#0f172a" />
    <!-- Dynamic Island -->
    <rect x="120" y="20" width="96" height="24" rx="12" fill="#020617" />
    <circle cx="195" cy="32" r="3" fill="#10b981" />
    <text x="36" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f8fafc">9:41</text>

    <!-- Header -->
    <g transform="translate(24, 60)">
      <text x="0" y="16" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" letter-spacing="1">CARE BAND ECOSYSTEM</text>
      <text x="0" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="bold" fill="#ffffff">Safety & Support</text>
      <circle cx="280" cy="24" r="14" fill="#0284c7" fill-opacity="0.2" />
      <circle cx="280" cy="24" r="5" fill="#38bdf8" />
    </g>

    <!-- Wearable Status Card -->
    <g transform="translate(20, 115)">
      <rect width="296" height="110" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <circle cx="50" cy="55" r="32" fill="#0284c7" fill-opacity="0.15" />
      <!-- Smart Band Icon -->
      <rect x="35" y="35" width="30" height="40" rx="8" fill="#38bdf8" />
      <rect x="42" y="42" width="16" height="26" rx="4" fill="#0f172a" />
      <circle cx="50" cy="55" r="3" fill="#10b981" />

      <text x="96" y="42" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">CareBand v2 Linked</text>
      <text x="96" y="60" font-family="sans-serif" font-size="11" fill="#94a3b8">Battery: 94% • BT 5.3 Active</text>
      
      <rect x="96" y="72" width="90" height="20" rx="10" fill="#065f46" />
      <text x="108" y="86" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#34d399">● STATUS: SAFE</text>
    </g>

    <!-- Live Health Telemetry Grid -->
    <g transform="translate(20, 240)">
      <!-- Heart Rate -->
      <rect width="142" height="96" rx="16" fill="#1e293b" stroke="#334155" />
      <text x="14" y="24" font-size="14">❤️</text>
      <text x="14" y="52" font-family="sans-serif" font-size="22" font-weight="bold" fill="#f43f5e">74 <tspan font-size="11" fill="#94a3b8">BPM</tspan></text>
      <text x="14" y="76" font-family="sans-serif" font-size="10" fill="#94a3b8">Resting Heart Rate</text>

      <!-- Body Temp -->
      <g transform="translate(154, 0)">
        <rect width="142" height="96" rx="16" fill="#1e293b" stroke="#334155" />
        <text x="14" y="24" font-size="14">🌡️</text>
        <text x="14" y="52" font-family="sans-serif" font-size="22" font-weight="bold" fill="#38bdf8">98.4 <tspan font-size="11" fill="#94a3b8">°F</tspan></text>
        <text x="14" y="76" font-family="sans-serif" font-size="10" fill="#94a3b8">Optimal Normal</text>
      </g>
    </g>

    <!-- Emergency One-Tap SOS Action -->
    <g transform="translate(20, 355)">
      <rect width="296" height="120" rx="20" fill="#450a0a" stroke="#dc2626" stroke-width="1.5" />
      <circle cx="60" cy="60" r="32" fill="#ef4444" filter="url(#cbGlow)" />
      <text x="44" y="66" font-family="sans-serif" font-size="14" font-weight="900" fill="#ffffff">SOS</text>
      <text x="110" y="48" font-family="sans-serif" font-size="15" font-weight="bold" fill="#fecaca">Emergency Trigger</text>
      <text x="110" y="68" font-family="sans-serif" font-size="10.5" fill="#f87171">Long press 3s or Band double-tap</text>
      <text x="110" y="86" font-family="sans-serif" font-size="9.5" fill="#cbd5e1">Auto-notifies 3 Guardians + EMS</text>
    </g>

    <!-- Fall Detection / Safe Geofence -->
    <g transform="translate(20, 490)">
      <rect width="296" height="74" rx="16" fill="#1e293b" stroke="#334155" />
      <text x="16" y="32" font-size="18">🛡️</text>
      <text x="48" y="28" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Automated Fall Detection</text>
      <text x="48" y="44" font-family="sans-serif" font-size="10" fill="#94a3b8">Gyroscope + Accelerometer AI</text>
      <text x="48" y="60" font-family="sans-serif" font-size="9" fill="#10b981">Active Guardian Monitoring</text>
      <circle cx="265" cy="38" r="12" fill="#10b981" fill-opacity="0.2" />
      <path d="M260 38 L264 42 L271 34" stroke="#10b981" stroke-width="2" fill="none" />
    </g>

    <!-- Bottom Nav -->
    <rect x="20" y="585" width="296" height="48" rx="24" fill="#0b111e" stroke="#1e293b" />
    <text x="50" y="615" font-size="16">🛡️</text>
    <text x="120" y="615" font-size="16">📍</text>
    <text x="190" y="615" font-size="16">📈</text>
    <text x="260" y="615" font-size="16">⚙️</text>
  </g>

  <!-- PHONE 2: Guardian Live GPS Tracking & Emergency Circle -->
  <g transform="translate(660, 45)" filter="url(#cbShadow)">
    <rect width="360" height="660" rx="44" fill="#0b111e" stroke="#1e293b" stroke-width="3.5" />
    <rect x="12" y="12" width="336" height="636" rx="34" fill="#0f172a" />
    <rect x="120" y="20" width="96" height="24" rx="12" fill="#020617" />
    <text x="36" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f8fafc">9:41</text>

    <!-- Live Map Canvas -->
    <g transform="translate(12, 50)">
      <rect width="336" height="340" rx="20" fill="#1e293b" />
      <!-- Grid Roads -->
      <line x1="0" y1="120" x2="336" y2="120" stroke="#334155" stroke-width="12" />
      <line x1="160" y1="0" x2="160" y2="340" stroke="#334155" stroke-width="12" />
      <line x1="40" y1="240" x2="336" y2="240" stroke="#334155" stroke-width="8" />
      <!-- Safe Geofence Zone Circle -->
      <circle cx="160" cy="160" r="100" fill="#0284c7" fill-opacity="0.12" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="6,4" />
      <!-- User Pin -->
      <circle cx="160" cy="160" r="18" fill="#0284c7" fill-opacity="0.4" />
      <circle cx="160" cy="160" r="8" fill="#38bdf8" />
      <circle cx="160" cy="160" r="3" fill="#ffffff" />
      
      <!-- Callout Badge -->
      <g transform="translate(80, 85)">
        <rect width="160" height="38" rx="10" fill="#0f172a" stroke="#38bdf8" />
        <text x="12" y="16" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#38bdf8">INSIDE SAFE HOME ZONE</text>
        <text x="12" y="30" font-family="sans-serif" font-size="10" fill="#ffffff">GPS Accuracy: ± 2 meters</text>
      </g>
    </g>

    <!-- Trusted Guardian Circle -->
    <g transform="translate(20, 410)">
      <text x="4" y="0" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Emergency Response Circle</text>
      
      <!-- Contact 1: Mother -->
      <g transform="translate(0, 16)">
        <rect width="296" height="54" rx="14" fill="#1e293b" />
        <circle cx="30" cy="27" r="16" fill="#ec4899" />
        <text x="24" y="32" font-size="12" fill="#ffffff">👩</text>
        <text x="56" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Mom (Primary Contact)</text>
        <text x="56" y="40" font-family="sans-serif" font-size="10" fill="#34d399">● Instant Alert Verified</text>
        <circle cx="265" cy="27" r="14" fill="#065f46" />
        <text x="259" y="32" font-size="12">📞</text>
      </g>

      <!-- Contact 2: Local EMS -->
      <g transform="translate(0, 80)">
        <rect width="296" height="54" rx="14" fill="#1e293b" />
        <circle cx="30" cy="27" r="16" fill="#dc2626" />
        <text x="24" y="32" font-size="12" fill="#ffffff">🚑</text>
        <text x="56" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Campus Emergency Patrol</text>
        <text x="56" y="40" font-family="sans-serif" font-size="10" fill="#94a3b8">Direct Dispatch Ready</text>
        <circle cx="265" cy="27" r="14" fill="#7f1d1d" />
        <text x="259" y="32" font-size="12">🚨</text>
      </g>
    </g>

    <!-- Live Telemetry Broadcast Status -->
    <g transform="translate(20, 560)">
      <rect width="296" height="52" rx="14" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" />
      <text x="16" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">Live Telemetry Encrypted (AES-256)</text>
      <text x="16" y="40" font-family="sans-serif" font-size="9.5" fill="#94a3b8">Cloud sync every 5s with BLE Fallback</text>
    </g>
  </g>
</svg>
`)}`;

// 7. Competitive App Analysis Based on the 10 Laws of UX
export const UX_LAWS_ANALYSIS_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="uxBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="750" fill="url(#uxBg)" />

  <!-- Grid Guide Accent Lines -->
  <line x1="60" y1="120" x2="1140" y2="120" stroke="#27272a" stroke-width="1" />
  <line x1="60" y1="680" x2="1140" y2="680" stroke="#27272a" stroke-width="1" />

  <!-- Top Hero Header -->
  <g transform="translate(80, 45)">
    <rect width="170" height="26" rx="6" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-width="1" />
    <text x="12" y="17" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#60a5fa" letter-spacing="1">UX RESEARCH CASE STUDY</text>
    <text x="0" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#ffffff">Competitive App Analysis: 10 Laws of UX</text>
    <text x="0" y="80" font-family="sans-serif" font-size="13" fill="#a1a1aa">Benchmarking cognitive ergonomics, interaction ergonomics, and decision velocity across top consumer platforms</text>
  </g>

  <!-- Main Analysis Board -->
  <g transform="translate(80, 145)">
    <!-- Column 1: Core UX Laws Evaluated -->
    <g transform="translate(0, 0)" filter="url(#cardShadow)">
      <rect width="320" height="500" rx="18" fill="#18181b" stroke="#27272a" stroke-width="1.5" />
      
      <!-- Section Title -->
      <rect x="20" y="20" width="280" height="36" rx="8" fill="#27272a" />
      <text x="36" y="43" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">10 Laws of UX Framework</text>
      
      <!-- Law 1: Hick's Law -->
      <g transform="translate(20, 72)">
        <rect width="280" height="70" rx="10" fill="#09090b" stroke="#3f3f46" />
        <circle cx="25" cy="25" r="10" fill="#3b82f6" />
        <text x="21" y="29" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">1</text>
        <text x="44" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Hick's Law</text>
        <text x="44" y="40" font-family="sans-serif" font-size="9.5" fill="#a1a1aa">Time to decide increases with choices</text>
        <rect x="44" y="48" width="120" height="12" rx="6" fill="#1e3a8a" />
        <rect x="44" y="48" width="95" height="12" rx="6" fill="#3b82f6" />
        <text x="175" y="58" font-family="sans-serif" font-size="8.5" fill="#93c5fd">92% Compliance</text>
      </g>

      <!-- Law 2: Fitts's Law -->
      <g transform="translate(20, 152)">
        <rect width="280" height="70" rx="10" fill="#09090b" stroke="#3f3f46" />
        <circle cx="25" cy="25" r="10" fill="#10b981" />
        <text x="21" y="29" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">2</text>
        <text x="44" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Fitts's Law</text>
        <text x="44" y="40" font-family="sans-serif" font-size="9.5" fill="#a1a1aa">Target distance &amp; touch zone ergonomics</text>
        <rect x="44" y="48" width="120" height="12" rx="6" fill="#064e3b" />
        <rect x="44" y="48" width="105" height="12" rx="6" fill="#10b981" />
        <text x="175" y="58" font-family="sans-serif" font-size="8.5" fill="#6ee7b7">88% Compliance</text>
      </g>

      <!-- Law 3: Jakob's Law -->
      <g transform="translate(20, 232)">
        <rect width="280" height="70" rx="10" fill="#09090b" stroke="#3f3f46" />
        <circle cx="25" cy="25" r="10" fill="#f59e0b" />
        <text x="21" y="29" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">3</text>
        <text x="44" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Jakob's Law</text>
        <text x="44" y="40" font-family="sans-serif" font-size="9.5" fill="#a1a1aa">Users expect familiar mental models</text>
        <rect x="44" y="48" width="120" height="12" rx="6" fill="#78350f" />
        <rect x="44" y="48" width="112" height="12" rx="6" fill="#f59e0b" />
        <text x="175" y="58" font-family="sans-serif" font-size="8.5" fill="#fde68a">95% Compliance</text>
      </g>

      <!-- Law 4: Miller's Law -->
      <g transform="translate(20, 312)">
        <rect width="280" height="70" rx="10" fill="#09090b" stroke="#3f3f46" />
        <circle cx="25" cy="25" r="10" fill="#8b5cf6" />
        <text x="21" y="29" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">4</text>
        <text x="44" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Miller's Law</text>
        <text x="44" y="40" font-family="sans-serif" font-size="9.5" fill="#a1a1aa">Working memory chunking (7±2 items)</text>
        <rect x="44" y="48" width="120" height="12" rx="6" fill="#4c1d95" />
        <rect x="44" y="48" width="90" height="12" rx="6" fill="#8b5cf6" />
        <text x="175" y="58" font-family="sans-serif" font-size="8.5" fill="#ddd6fe">85% Compliance</text>
      </g>

      <!-- Summary Pill -->
      <g transform="translate(20, 395)">
        <rect width="280" height="85" rx="12" fill="#27272a" />
        <text x="16" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Evaluated 6 Leading Apps</text>
        <text x="16" y="44" font-family="sans-serif" font-size="9.5" fill="#a1a1aa">BookMyShow • Uber • Swiggy • Zomato</text>
        <text x="16" y="62" font-family="sans-serif" font-size="9.5" fill="#a1a1aa">Spotify • Airbnb</text>
      </g>
    </g>

    <!-- Column 2: Comparative Heatmaps & Heuristic Breakdown -->
    <g transform="translate(345, 0)" filter="url(#cardShadow)">
      <rect width="695" height="500" rx="18" fill="#18181b" stroke="#27272a" stroke-width="1.5" />
      
      <!-- Table Header -->
      <rect x="25" y="20" width="645" height="42" rx="8" fill="#27272a" />
      <text x="40" y="46" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Comparative Heuristic Scoring Matrix</text>
      <text x="350" y="46" font-family="sans-serif" font-size="11" fill="#a1a1aa">Cognitive Friction Index (Lower is Better)</text>

      <!-- Benchmark Card 1: App A vs App B -->
      <g transform="translate(25, 75)">
        <rect width="645" height="120" rx="12" fill="#09090b" stroke="#3f3f46" />
        <!-- App 1 -->
        <text x="24" y="28" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Fitts's Law: Primary CTA Placement</text>
        <text x="24" y="48" font-family="sans-serif" font-size="11" fill="#71717a">Bottom thumb-zone accessibility vs top-right menu nesting</text>
        
        <rect x="24" y="65" width="280" height="38" rx="8" fill="#1c1917" stroke="#44403c" />
        <text x="36" y="88" font-family="sans-serif" font-size="11" fill="#fbbf24">App A: Floating Bottom Dock (Fastest)</text>
        <text x="270" y="88" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4ade80">0.24s</text>

        <rect x="330" y="65" width="290" height="38" rx="8" fill="#1c1917" stroke="#44403c" />
        <text x="342" y="88" font-family="sans-serif" font-size="11" fill="#f87171">App B: Top Header Menu (Strain Zone)</text>
        <text x="585" y="88" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ef4444">0.86s</text>
      </g>

      <!-- Benchmark Card 2: Hick's Law Filtering & Search -->
      <g transform="translate(25, 210)">
        <rect width="645" height="120" rx="12" fill="#09090b" stroke="#3f3f46" />
        <text x="24" y="28" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Hick's Law: Decision Complexity during Checkout</text>
        <text x="24" y="48" font-family="sans-serif" font-size="11" fill="#71717a">Progressive disclosure vs 14 upfront unsegmented form fields</text>
        
        <rect x="24" y="65" width="280" height="38" rx="8" fill="#1c1917" stroke="#44403c" />
        <text x="36" y="88" font-family="sans-serif" font-size="11" fill="#38bdf8">3-Step Accordion Flow</text>
        <text x="250" y="88" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">-42% Drop</text>

        <rect x="330" y="65" width="290" height="38" rx="8" fill="#1c1917" stroke="#44403c" />
        <text x="342" y="88" font-family="sans-serif" font-size="11" fill="#f87171">Single Wall of Inputs</text>
        <text x="575" y="88" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ef4444">+68% Hesitation</text>
      </g>

      <!-- Key Insights Summary Grid -->
      <g transform="translate(25, 345)">
        <rect width="310" height="135" rx="12" fill="#27272a" />
        <text x="20" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#60a5fa">💡 Key Research Takeaways</text>
        <text x="20" y="55" font-family="sans-serif" font-size="10.5" fill="#e4e4e7">• Thumb-friendly 48px target minimum reduces mis-taps by 65%</text>
        <text x="20" y="78" font-family="sans-serif" font-size="10.5" fill="#e4e4e7">• Chunking checkout steps into 3 phases preserves user momentum</text>
        <text x="20" y="101" font-family="sans-serif" font-size="10.5" fill="#e4e4e7">• Visual confirmation triggers peak-end emotional reassurance</text>
      </g>

      <g transform="translate(360, 345)">
        <rect width="310" height="135" rx="12" fill="#27272a" />
        <text x="20" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="#34d399">🎯 Redesign Architecture Impact</text>
        <text x="20" y="55" font-family="sans-serif" font-size="10.5" fill="#e4e4e7">• Formulated 10 UX guidelines implemented in Umang's apps</text>
        <text x="20" y="78" font-family="sans-serif" font-size="10.5" fill="#e4e4e7">• Documented heuristic scorecard for cross-platform auditing</text>
        <text x="20" y="101" font-family="sans-serif" font-size="10.5" fill="#e4e4e7">• Full design system tokens verified against WCAG AA standards</text>
      </g>
    </g>
  </g>
</svg>
`)}`;

export const UMANG_DEFAULT_PORTRAIT_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <!-- Backgrounds & Gradients -->
    <linearGradient id="wallBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f7f5ed" />
      <stop offset="100%" stop-color="#eee9dd" />
    </linearGradient>
    <linearGradient id="sageBlob" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d3e0d2" />
      <stop offset="100%" stop-color="#c1d2c0" />
    </linearGradient>
    <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f0b98f" />
      <stop offset="60%" stop-color="#e3a77b" />
      <stop offset="100%" stop-color="#d39264" />
    </linearGradient>
    <linearGradient id="blazer" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2a2a30" />
      <stop offset="50%" stop-color="#1b1b20" />
      <stop offset="100%" stop-color="#101014" />
    </linearGradient>
    <linearGradient id="laptopLid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#404652" />
      <stop offset="100%" stop-color="#272c35" />
    </linearGradient>
    <linearGradient id="deskWood" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ebe4d5" />
      <stop offset="100%" stop-color="#dfd7c5" />
    </linearGradient>
  </defs>

  <!-- 1. Canvas Background -->
  <rect width="600" height="600" fill="url(#wallBg)" />

  <!-- 2. Organic Sage-Green Blob Backdrop -->
  <path d="M160 380 C120 320 140 210 210 160 C280 110 380 120 440 180 C500 240 510 330 450 390 C400 440 320 450 240 430 C190 420 170 400 160 380 Z" fill="url(#sageBlob)" opacity="0.85" />

  <!-- 3. Upper Left Doodles & Handwritten Note: "Better Experiences for Real People" -->
  <g id="leftDoodle" stroke="#3b483b" stroke-linecap="round">
    <!-- Lightbulb -->
    <path d="M125 105 C115 105 108 115 108 124 C108 132 113 138 116 142 L116 150 L134 150 L134 142 C137 138 142 132 142 124 C142 115 135 105 125 105 Z" fill="#fff9db" stroke-width="2.2" />
    <path d="M118 150 L132 150 L130 156 L120 156 Z" fill="#cfcfc4" stroke-width="1.8" />
    <path d="M120 125 L124 133 L126 133 L130 125" fill="none" stroke-width="1.8" />
    <!-- Rays -->
    <line x1="125" y1="94" x2="125" y2="86" stroke-width="2" />
    <line x1="106" y1="102" x2="100" y2="96" stroke-width="2" />
    <line x1="144" y1="102" x2="150" y2="96" stroke-width="2" />
    <line x1="96" y1="124" x2="88" y2="124" stroke-width="2" />
    <line x1="154" y1="124" x2="162" y2="124" stroke-width="2" />

    <!-- Handwritten text -->
    <text x="75" y="195" font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" font-size="21" font-weight="bold" fill="#3b483b" transform="rotate(-10 75 195)">Better</text>
    <text x="70" y="222" font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" font-size="20" font-weight="bold" fill="#3b483b" transform="rotate(-10 70 222)">Experiences</text>
    <text x="80" y="246" font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" font-size="18" font-weight="bold" fill="#3b483b" transform="rotate(-10 80 246)">for Real</text>
    <text x="85" y="270" font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" font-size="21" font-weight="bold" fill="#3b483b" transform="rotate(-10 85 270)">People</text>
  </g>

  <!-- 4. Upper Right Doodles & Handwritten Note: "Design Research Build Iterate" -->
  <g id="rightDoodle" stroke="#3b483b" stroke-linecap="round">
    <!-- Paper Airplane -->
    <g transform="translate(505, 290) rotate(-15)">
      <polygon points="0,0 28,-14 38,16 18,10" fill="#ffffff" stroke="#3b483b" stroke-width="2" />
      <polygon points="0,0 38,16 16,5" fill="#f0f4f0" stroke="#3b483b" stroke-width="1.8" />
      <path d="M-6,24 C-15,30 -25,24 -20,15 C-15,6 -2,8 5,0" fill="none" stroke="#3b483b" stroke-width="1.6" stroke-dasharray="3,3" />
    </g>

    <!-- Handwritten text -->
    <text x="500" y="210" font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" font-size="20" font-weight="bold" fill="#3b483b" transform="rotate(8 500 210)">Design</text>
    <text x="495" y="235" font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" font-size="20" font-weight="bold" fill="#3b483b" transform="rotate(8 495 235)">Research</text>
    <text x="502" y="260" font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" font-size="20" font-weight="bold" fill="#3b483b" transform="rotate(8 502 260)">Build</text>
    <text x="498" y="285" font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" font-size="20" font-weight="bold" fill="#3b483b" transform="rotate(8 498 285)">Iterate</text>
  </g>

  <!-- 5. Body & Attire (Umang) -->
  <g id="characterBody">
    <!-- Shoulders & Torso -->
    <path d="M120 520 L150 370 C165 310 205 295 255 295 C305 295 345 310 365 370 L480 430 L490 520 Z" fill="url(#blazer)" />

    <!-- Inner Black Crewneck T-Shirt -->
    <path d="M235 285 Q280 325 325 285 L335 370 Q280 395 225 370 Z" fill="#121215" />

    <!-- Left Blazer Lapel -->
    <path d="M185 340 L235 285 L260 405 L230 520 L170 520 Z" fill="#202026" stroke="#121215" stroke-width="1.5" />
    <!-- Right Blazer Lapel -->
    <path d="M375 340 L325 285 L300 405 L330 520 L390 520 Z" fill="#202026" stroke="#121215" stroke-width="1.5" />

    <!-- Neck -->
    <path d="M255 240 L255 295 Q280 312 305 295 L305 240 Z" fill="#d39264" />
    <path d="M255 240 Q280 260 305 240" fill="#c37e50" opacity="0.6" />
  </g>

  <!-- 6. Head & Facial Features -->
  <g id="characterHead">
    <!-- Ears -->
    <path d="M205 185 C195 185 195 220 210 225 Z" fill="#dfa275" />
    <path d="M355 185 C365 185 365 220 350 225 Z" fill="#dfa275" />

    <!-- Face Shape -->
    <path d="M210 170 C210 115 350 115 350 170 C350 235 320 268 280 268 C240 268 210 235 210 170 Z" fill="url(#skin)" />

    <!-- Hair (Styled Modern Volume with Texture) -->
    <path d="M205 160 C205 110 235 80 280 80 C325 80 355 105 355 160 C350 135 330 118 310 112 C285 105 250 106 220 124 C212 130 208 144 205 160 Z" fill="#141416" />
    <!-- Hair Strands & Texture -->
    <path d="M225 125 C240 100 270 90 300 90 C330 90 350 105 352 135 C340 118 318 112 285 112 C255 112 238 122 225 125 Z" fill="#24242a" />
    <path d="M260 90 Q285 75 315 88" stroke="#32323c" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M235 110 Q255 95 285 100" stroke="#32323c" stroke-width="2" fill="none" stroke-linecap="round" />

    <!-- Eyebrows -->
    <path d="M228 172 Q246 166 260 172" fill="none" stroke="#18181b" stroke-width="3.5" stroke-linecap="round" />
    <path d="M300 172 Q314 166 332 172" fill="none" stroke="#18181b" stroke-width="3.5" stroke-linecap="round" />

    <!-- Glasses (Stylish Black Rectangular Frames) -->
    <!-- Left Lens -->
    <rect x="220" y="174" width="46" height="34" rx="7" fill="#ffffff" fill-opacity="0.12" stroke="#18181c" stroke-width="3.2" />
    <!-- Right Lens -->
    <rect x="294" y="174" width="46" height="34" rx="7" fill="#ffffff" fill-opacity="0.12" stroke="#18181c" stroke-width="3.2" />
    <!-- Glasses Bridge -->
    <path d="M266 186 Q280 182 294 186" fill="none" stroke="#18181c" stroke-width="3.2" stroke-linecap="round" />
    <!-- Glasses Temples -->
    <line x1="220" y1="184" x2="204" y2="182" stroke="#18181c" stroke-width="2.8" stroke-linecap="round" />
    <line x1="340" y1="184" x2="356" y2="182" stroke="#18181c" stroke-width="2.8" stroke-linecap="round" />
    <!-- Subtle Lens Reflection Glints -->
    <line x1="226" y1="180" x2="242" y2="180" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" opacity="0.75" />
    <line x1="300" y1="180" x2="316" y2="180" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" opacity="0.75" />

    <!-- Eyes (Warm & Confident) -->
    <ellipse cx="243" cy="191" rx="5.5" ry="4.5" fill="#18181b" />
    <circle cx="245" cy="189.5" r="1.8" fill="#ffffff" />
    <ellipse cx="317" cy="191" rx="5.5" ry="4.5" fill="#18181b" />
    <circle cx="319" cy="189.5" r="1.8" fill="#ffffff" />

    <!-- Nose -->
    <path d="M280 186 L280 215 Q280 222 274 222 Q280 225 286 222" fill="none" stroke="#ba7a57" stroke-width="2.6" stroke-linecap="round" />

    <!-- Smile -->
    <path d="M260 238 Q280 252 300 238" fill="none" stroke="#995738" stroke-width="3.2" stroke-linecap="round" />
    <path d="M264 238 Q280 247 296 238" fill="#ffffff" opacity="0.85" />
  </g>

  <!-- 7. Left Arm & Hand Holding Stylus Under Chin -->
  <g id="handPose">
    <!-- Forearm / Sleeve -->
    <path d="M210 470 L250 340 L280 340 L240 480 Z" fill="#1b1b20" />
    <!-- Hand / Knuckles Supporting Chin -->
    <path d="M260 300 C250 275 270 260 285 270 C295 278 290 295 275 305 Z" fill="#e3a77b" stroke="#cf8f60" stroke-width="1.5" />
    <ellipse cx="268" cy="275" rx="7" ry="9" fill="#e3a77b" transform="rotate(-15 268 275)" />
    <!-- Digital Stylus Pen -->
    <line x1="242" y1="285" x2="295" y2="235" stroke="#121215" stroke-width="5" stroke-linecap="round" />
    <line x1="295" y1="235" x2="300" y2="230" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round" />
  </g>

  <!-- 8. Modern Minimalist Desk Surface -->
  <g id="deskForeground">
    <rect x="0" y="475" width="600" height="125" fill="url(#deskWood)" />
    <line x1="0" y1="475" x2="600" y2="475" stroke="#d5ccb8" stroke-width="2" />
  </g>

  <!-- 9. Stack of 3 Books on Left: UX RESEARCH, UI DESIGN, BRAND & PRODUCT -->
  <g id="bookStack" transform="translate(20, 410)">
    <!-- Bottom Book: BRAND & PRODUCT (Black) -->
    <rect x="0" y="60" width="135" height="24" rx="4" fill="#141416" stroke="#25252b" stroke-width="1.2" />
    <rect x="4" y="62" width="12" height="20" rx="2" fill="#23232a" />
    <text x="32" y="76" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold" fill="#ffffff" letter-spacing="0.5">BRAND &amp; PRODUCT</text>

    <!-- Middle Book: UI DESIGN (Slate / Dark Grey) -->
    <rect x="5" y="34" width="130" height="23" rx="4" fill="#2c3440" stroke="#3b4452" stroke-width="1.2" />
    <rect x="9" y="36" width="12" height="19" rx="2" fill="#3a4556" />
    <text x="36" y="50" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="bold" fill="#ffffff" letter-spacing="0.5">UI DESIGN</text>

    <!-- Top Book: UX RESEARCH (Forest / Sage Green) -->
    <rect x="10" y="8" width="125" height="23" rx="4" fill="#2d4a3e" stroke="#3b5e4f" stroke-width="1.2" />
    <rect x="14" y="10" width="12" height="19" rx="2" fill="#3c6353" />
    <text x="34" y="24" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="bold" fill="#ffffff" letter-spacing="0.5">UX RESEARCH</text>
  </g>

  <!-- 10. Ceramic Mug with Peacock Feather Motif -->
  <g id="mug" transform="translate(165, 435)">
    <!-- Mug Body -->
    <rect x="15" y="0" width="46" height="52" rx="7" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
    <!-- Mug Handle -->
    <path d="M15 12 C4 12 4 40 15 40" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
    <path d="M15 12 C4 12 4 40 15 40" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
    <!-- Peacock Feather Emblem on Mug -->
    <path d="M38 16 C30 20 28 32 38 38 C48 32 46 20 38 16 Z" fill="#0d9488" />
    <circle cx="38" cy="27" r="5" fill="#0284c7" />
    <circle cx="38" cy="27" r="2.5" fill="#eab308" />
    <line x1="38" y1="38" x2="38" y2="44" stroke="#0d9488" stroke-width="1.5" />
  </g>

  <!-- 11. Graphic Drawing Tablet -->
  <g id="drawingTablet" transform="translate(100, 500)">
    <rect x="0" y="0" width="165" height="42" rx="8" fill="#1c1d22" stroke="#2a2b32" stroke-width="1.5" />
    <!-- Active Drawing Area -->
    <rect x="25" y="6" width="130" height="30" rx="4" fill="#121316" />
    <circle cx="12" cy="14" r="3" fill="#383a42" />
    <circle cx="12" cy="28" r="3" fill="#383a42" />
  </g>

  <!-- 12. Sleek Laptop with Figma Logo on Lid -->
  <g id="laptop" transform="translate(255, 360)">
    <!-- Angled Laptop Display Lid -->
    <polygon points="25,0 265,0 245,150 5,150" fill="url(#laptopLid)" stroke="#22262d" stroke-width="2" />
    <polygon points="30,5 260,5 242,145 10,145" fill="#353b47" opacity="0.3" />

    <!-- Figma Logo Mark on Laptop Back Lid -->
    <g transform="translate(130, 68) scale(0.9)">
      <!-- Top-left orange-red -->
      <path d="M0,0 C0,-6.6 5.4,-12 12,-12 C18.6,-12 24,-6.6 24,0 C24,6.6 18.6,12 12,12 L0,12 Z" fill="#f24e1e" />
      <!-- Top-right purple -->
      <circle cx="36" cy="0" r="12" fill="#ff7262" />
      <!-- Middle-left purple -->
      <path d="M0,24 C0,17.4 5.4,12 12,12 C18.6,12 24,17.4 24,24 C24,30.6 18.6,36 12,36 L0,36 Z" fill="#a259ff" />
      <!-- Middle-right blue -->
      <circle cx="36" cy="24" r="12" fill="#1abcfe" />
      <!-- Bottom-left green -->
      <path d="M0,48 C0,41.4 5.4,36 12,36 L24,36 L24,48 C24,54.6 18.6,60 12,60 C5.4,60 0,54.6 0,48 Z" fill="#0acf83" />
    </g>

    <!-- Laptop Base / Hinge -->
    <polygon points="0,150 250,150 270,165 -20,165" fill="#1b1e24" stroke="#121418" stroke-width="1" />
  </g>

  <!-- 13. Potted Green Desk Plant on Far Right -->
  <g id="plant" transform="translate(525, 415)">
    <!-- Ceramic Planter Pot -->
    <polygon points="12,50 48,50 42,90 18,90" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
    <!-- Soil -->
    <ellipse cx="30" cy="50" rx="18" ry="4" fill="#583f33" />
    <!-- Leaves -->
    <path d="M30 48 Q20 30 10 20 Q25 25 30 48" fill="#4ade80" stroke="#16a34a" stroke-width="1" />
    <path d="M30 48 Q40 28 52 18 Q38 25 30 48" fill="#22c55e" stroke="#15803d" stroke-width="1" />
    <path d="M30 48 Q30 18 28 0 Q36 15 30 48" fill="#16a34a" stroke="#14532d" stroke-width="1" />
    <path d="M30 48 Q10 40 -5 32 Q15 42 30 48" fill="#86efac" stroke="#16a34a" stroke-width="1" />
    <path d="M30 48 Q48 40 65 32 Q45 42 30 48" fill="#15803d" stroke="#14532d" stroke-width="1" />
  </g>
</svg>
`)}`;


