// Helper: Create custom poster SVG Data URI matching reference website posters
function createPosterSvg(title, subtitle, bgColor, accentColor, iconSvg) {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
        <rect width="300" height="300" fill="${bgColor}" rx="16"/>
        <circle cx="150" cy="120" r="80" fill="${accentColor}" opacity="0.15"/>
        <circle cx="150" cy="120" r="50" fill="${accentColor}" opacity="0.25"/>
        <g transform="translate(110, 70) scale(1.6)">
            ${iconSvg}
        </g>
        <rect x="20" y="210" width="260" height="70" fill="#09090c" opacity="0.85" rx="10"/>
        <text x="150" y="238" font-family="'Prompt', sans-serif" font-weight="800" font-size="16" fill="#ffffff" text-anchor="middle">${title}</text>
        <text x="150" y="262" font-family="'Prompt', sans-serif" font-weight="500" font-size="12" fill="${accentColor}" text-anchor="middle">${subtitle}</text>
    </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Custom SVG Icons for Posters
const chediIcon = `<path d="M25 0 L35 25 L40 50 L10 50 L15 25 Z" fill="#d4af37"/><rect x="18" y="35" width="14" height="15" fill="#f4f1e8"/><circle cx="25" cy="15" r="4" fill="#ffffff"/>`;
const riverIcon = `<path d="M0 25 Q12 10 25 25 T50 25" stroke="#388bfd" stroke-width="4" fill="none"/><path d="M0 35 Q12 20 25 35 T50 35" stroke="#60a5fa" stroke-width="4" fill="none"/><circle cx="25" cy="15" r="8" fill="#d4af37"/>`;
const runnerIcon = `<circle cx="25" cy="10" r="6" fill="#ef4444"/><path d="M15 25 L25 18 L35 25 L25 45" stroke="#ef4444" stroke-width="4" fill="none"/>`;

// Nakhon Pathom Events Data Store
const eventsData = [
    {
        id: 1,
        title: "Nakhon Pathom Run ครั้งที่ 1",
        date: "25 ตุลาคม 2569",
        groupDate: "วันอาทิตย์ที่ 25 ตุลาคม 2569",
        location: "องค์พระปฐมเจดีย์ จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        image: createPosterSvg("มหาเจดีย์ Run", "Nakhon Pathom Run ครั้งที่ 1", "#1a1813", "#d4af37", chediIcon),
        badge: "มินิมาราธอน",
        distances: ["5 KM", "10.5 KM", "21 KM"]
    },
    {
        id: 2,
        title: "งิ้วรายมินิมาราธอน ครั้งที่ 3",
        date: "22 พฤศจิกายน 2569",
        groupDate: "วันอาทิตย์ที่ 22 พฤศจิกายน 2569",
        location: "โรงเรียนงิ้วรายบุญมีรังสฤษดิ์ อ.นครชัยศรี จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        image: createPosterSvg("งิ้วรายมินิมาราธอน", "ครั้งที่ 3 • 2569", "#0f172a", "#388bfd", riverIcon),
        badge: "ฮาล์ฟมาราธอน",
        distances: ["3.5 KM", "10.5 KM", "21 KM"]
    },
    {
        id: 3,
        title: "Banglen Run For Life 2026",
        date: "22 พฤศจิกายน 2569",
        groupDate: "วันอาทิตย์ที่ 22 พฤศจิกายน 2569",
        location: "วัดบางเลน อ.บางเลน จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        image: createPosterSvg("Banglen Run 2026", "Run For Life #3", "#1e1112", "#ef4444", runnerIcon),
        badge: "ฟันรัน / มินิ",
        distances: ["5 KM", "10 KM"]
    }
];

// DOM Elements
const homeView = document.getElementById("homeView");
const calendarView = document.getElementById("calendarView");
const navHome = document.getElementById("navHome");
const navCalendar = document.getElementById("navCalendar");
const mobileNavHome = document.getElementById("mobileNavHome");
const mobileNavCalendar = document.getElementById("mobileNavCalendar");
const navLogo = document.getElementById("navLogo");
const eventsContainer = document.getElementById("eventsContainer");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    renderCalendarEvents();
});

// Setup Navigation View Switcher
function setupNavigation() {
    function switchView(viewName) {
        if (viewName === "home") {
            homeView.classList.remove("hidden");
            calendarView.classList.add("hidden");

            // Update Nav Active Indicator
            navHome.classList.add("text-brandGold", "font-semibold", "relative", "after:absolute", "after:bottom-[-16px]", "after:left-0", "after:right-0", "after:h-[3px]", "after:bg-gradient-to-r", "after:from-brandGoldLight", "after:to-brandGold");
            navHome.classList.remove("text-textMuted");

            navCalendar.classList.remove("text-brandGold", "font-semibold", "relative", "after:absolute", "after:bottom-[-16px]", "after:left-0", "after:right-0", "after:h-[3px]", "after:bg-gradient-to-r", "after:from-brandGoldLight", "after:to-brandGold");
            navCalendar.classList.add("text-textMuted");
        } else if (viewName === "calendar") {
            calendarView.classList.remove("hidden");
            homeView.classList.add("hidden");

            // Update Nav Active Indicator
            navCalendar.classList.add("text-brandGold", "font-semibold", "relative", "after:absolute", "after:bottom-[-16px]", "after:left-0", "after:right-0", "after:h-[3px]", "after:bg-gradient-to-r", "after:from-brandGoldLight", "after:to-brandGold");
            navCalendar.classList.remove("text-textMuted");

            navHome.classList.remove("text-brandGold", "font-semibold", "relative", "after:absolute", "after:bottom-[-16px]", "after:left-0", "after:right-0", "after:h-[3px]", "after:bg-gradient-to-r", "after:from-brandGoldLight", "after:to-brandGold");
            navHome.classList.add("text-textMuted");
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (navHome) navHome.addEventListener("click", (e) => { e.preventDefault(); switchView("home"); });
    if (navCalendar) navCalendar.addEventListener("click", (e) => { e.preventDefault(); switchView("calendar"); });
    if (mobileNavHome) mobileNavHome.addEventListener("click", (e) => { e.preventDefault(); switchView("home"); if (mobileMenu) mobileMenu.classList.add("hidden"); });
    if (mobileNavCalendar) mobileNavCalendar.addEventListener("click", (e) => { e.preventDefault(); switchView("calendar"); if (mobileMenu) mobileMenu.classList.add("hidden"); });
    if (navLogo) navLogo.addEventListener("click", (e) => { e.preventDefault(); switchView("home"); });

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }
}

// Render Calendar Events (Grouped by Date)
function renderCalendarEvents() {
    if (!eventsContainer) return;

    const grouped = {};
    eventsData.forEach(event => {
        if (!grouped[event.groupDate]) {
            grouped[event.groupDate] = [];
        }
        grouped[event.groupDate].push(event);
    });

    let html = "";
    for (const [groupDate, events] of Object.entries(grouped)) {
        html += `
            <div class="space-y-4">
                <div class="flex items-center gap-3">
                    <h3 class="text-sm font-semibold text-textMuted tracking-wide flex items-center gap-2">
                        <span>${groupDate}</span>
                    </h3>
                    <div class="flex-grow h-[1px] bg-cardBorder"></div>
                </div>

                <div class="space-y-3">
                    ${events.map(event => `
                        <div class="event-card bg-cardBg border border-cardBorder rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start cursor-pointer hover:border-brandGold/60 transition">
                            <div class="w-full sm:w-28 h-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 bg-[#09090c] relative border border-cardBorder">
                                <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover">
                            </div>

                            <div class="flex-grow space-y-1.5 w-full text-left">
                                <h4 class="text-base font-bold text-white hover:text-brandGold transition line-clamp-1">
                                    ${event.title}
                                </h4>
                                <div class="text-xs text-textMuted space-y-1">
                                    <p class="flex items-center gap-2">
                                        <i class="fa-regular fa-calendar text-brandGold w-4"></i>
                                        <span>${event.date}</span>
                                    </p>
                                    <p class="flex items-center gap-2">
                                        <i class="fa-solid fa-location-dot text-brandGold w-4"></i>
                                        <span>${event.location}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    eventsContainer.innerHTML = html;
}
