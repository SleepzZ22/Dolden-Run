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
const palaceIcon = `<path d="M10 45 L10 20 L25 5 L40 20 L40 45 Z" fill="#d4af37"/><circle cx="25" cy="25" r="6" fill="#ffffff"/>`;
const treeIcon = `<circle cx="25" cy="18" r="14" fill="#10b981"/><path d="M22 30 L28 30 L28 45 L22 45 Z" fill="#b45309"/>`;

// Nakhon Pathom & Nearby Events Data Store with Full Details
const eventsData = [
    {
        id: 1,
        title: "Nakhon Pathom Run ครั้งที่ 1",
        date: "25 ตุลาคม 2569",
        groupDate: "วันอาทิตย์ที่ 25 ตุลาคม 2569",
        location: "องค์พระปฐมเจดีย์ อ.เมือง จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        organizer: "เทศบาลนครนครปฐม ร่วมกับ สมาคมกีฬานครปฐม",
        startTime: "05:00 น. เป็นต้นไป",
        image: createPosterSvg("มหาเจดีย์ Run", "Nakhon Pathom Run ครั้งที่ 1", "#1a1813", "#d4af37", chediIcon),
        badge: "มินิมาราธอน",
        distances: ["5 KM", "10.5 KM", "21 KM"],
        description: "งานวิ่งการกุศลและส่งเสริมการท่องเที่ยวรอบองค์พระปฐมเจดีย์ ปูชนียสถานคู่บ้านคู่เมือง สัมผัสบรรยากาศยามเช้าและเส้นทางประวัติศาสตร์ รายได้หลังหักค่าใช้จ่ายมอบให้โรงพยาบาลนครปฐม",
        categories: [
            { name: "Fun Run", dist: "5 KM", fee: "450 บาท", cutoff: "1.0 ชม.", start: "06:00 น." },
            { name: "Mini Marathon", dist: "10.5 KM", fee: "550 บาท", cutoff: "2.0 ชม.", start: "05:30 น." },
            { name: "Half Marathon", dist: "21 KM", fee: "750 บาท", cutoff: "3.5 ชม.", start: "05:00 น." }
        ]
    },
    {
        id: 2,
        title: "งิ้วรายมินิมาราธอน ครั้งที่ 3",
        date: "22 พฤศจิกายน 2569",
        groupDate: "วันอาทิตย์ที่ 22 พฤศจิกายน 2569",
        location: "โรงเรียนงิ้วรายบุญมีรังสฤษดิ์ อ.นครชัยศรี จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        organizer: "ชมรมศิษย์เก่าโรงเรียนงิ้วรายบุญมีรังสฤษดิ์",
        startTime: "05:15 น.",
        image: createPosterSvg("งิ้วรายมินิมาราธอน", "ครั้งที่ 3 • 2569", "#0f172a", "#388bfd", riverIcon),
        badge: "ฮาล์ฟมาราธอน",
        distances: ["3.5 KM", "10.5 KM", "21 KM"],
        description: "วิ่งรับลมริมแม่น้ำท่าจีน สัมผัสวิถีชีวิตชาวนครชัยศรี เส้นทางราบเรียบวิ่งง่าย เหมาะสำหรับนักวิ่งที่ต้องการทำสถิติ New PB พร้อมจุดบริการน้ำดื่มและผลไม้ท้องถิ่นตลอดเส้นทาง",
        categories: [
            { name: "Fun Run ชุมชน", dist: "3.5 KM", fee: "400 บาท", cutoff: "1.0 ชม.", start: "06:15 น." },
            { name: "Mini Marathon", dist: "10.5 KM", fee: "500 บาท", cutoff: "2.0 ชม.", start: "05:45 น." },
            { name: "Half Marathon", dist: "21 KM", fee: "700 บาท", cutoff: "3.5 ชม.", start: "05:15 น." }
        ]
    },
    {
        id: 3,
        title: "Banglen Run For Life 2026",
        date: "22 พฤศจิกายน 2569",
        groupDate: "วันอาทิตย์ที่ 22 พฤศจิกายน 2569",
        location: "วัดบางเลน อ.บางเลน จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        organizer: "ชมรมเดิน-วิ่งเพื่อสุขภาพอำเภอบางเลน",
        startTime: "05:45 น.",
        image: createPosterSvg("Banglen Run 2026", "Run For Life #3", "#1e1112", "#ef4444", runnerIcon),
        badge: "ฟันรัน / มินิ",
        distances: ["5 KM", "10 KM"],
        description: "วิ่งเพื่อสุขภาพสูดอากาศบริสุทธิ์ทุ่งบางเลน ชวนครอบครัวมาร่วมออกกำลังกาย เส้นทางผ่านสะพานข้ามแม่น้ำและตลาดโบราณ อิ่มอร่อยกับอาหารท้องถิ่นหลังเข้าเส้นชัย",
        categories: [
            { name: "Fun Run ครอบครัว", dist: "5 KM", fee: "400 บาท", cutoff: "1.0 ชม.", start: "06:00 น." },
            { name: "Mini Marathon", dist: "10 KM", fee: "500 บาท", cutoff: "2.0 ชม.", start: "05:45 น." }
        ]
    },
    {
        id: 4,
        title: "สนามจันทร์ มาราธอน 2026 (Sanam Chandra Marathon)",
        date: "13 ธันวาคม 2569",
        groupDate: "วันอาทิตย์ที่ 13 ธันวาคม 2569",
        location: "พระราชวังสนามจันทร์ อ.เมือง จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        organizer: "จังหวัดนครปฐม และ การท่องเที่ยวแห่งประเทศไทย (ททท.)",
        startTime: "03:30 น. เป็นต้นไป",
        image: createPosterSvg("สนามจันทร์ มาราธอน", "Full Marathon 2026", "#191624", "#a855f7", palaceIcon),
        badge: "มาราธอนเต็มรูปแบบ",
        distances: ["10 KM", "21 KM", "42.195 KM"],
        description: "มาราธอนระดับมาตรฐานระดับประเทศ เส้นทางวิ่งผ่านพระราชวังสนามจันทร์ พระตำหนักชาลีมงคลอาสน์ และแลนด์มาร์กสำคัญทั่วนครปฐม รับรองระยะทางโดยสมาคมกรีฑาฯ",
        categories: [
            { name: "Mini Marathon", dist: "10 KM", fee: "600 บาท", cutoff: "2.0 ชม.", start: "05:45 น." },
            { name: "Half Marathon", dist: "21 KM", fee: "850 บาท", cutoff: "3.5 ชม.", start: "04:30 น." },
            { name: "Full Marathon", dist: "42.195 KM", fee: "1,150 บาท", cutoff: "7.0 ชม.", start: "03:30 น." }
        ]
    },
    {
        id: 5,
        title: "กำแพงแสน กรีนรัน ครั้งที่ 5 (Kamphaeng Saen Green Run)",
        date: "20 ธันวาคม 2569",
        groupDate: "วันอาทิตย์ที่ 20 ธันวาคม 2569",
        location: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        organizer: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน",
        startTime: "05:45 น.",
        image: createPosterSvg("กำแพงแสน กรีนรัน", "Green Campus #5", "#0d1f14", "#10b981", treeIcon),
        badge: "ฟันรัน / มินิ",
        distances: ["5 KM", "10 KM"],
        description: "สัมผัสอุโมงค์ต้นไม้และถนนชมพูพันธุ์ทิพย์อันเลื่องชื่อ วิ่งรับลมหนาวในรั้วมหาวิทยาลัยสีเขียว รายได้สมทบทุนการศึกษาสำหรับนิสิตเรียนดีแต่ขาดแคลนทุนทรัพย์",
        categories: [
            { name: "เดิน-วิ่งเพื่อสุขภาพ", dist: "5 KM", fee: "450 บาท", cutoff: "1.2 ชม.", start: "06:00 น." },
            { name: "มินิมาราธอนสีเขียว", dist: "10 KM", fee: "550 บาท", cutoff: "2.0 ชม.", start: "05:45 น." }
        ]
    },
    {
        id: 6,
        title: "ดอนตูม ซูเปอร์ฮาล์ฟมาราธอน 2026",
        date: "27 ธันวาคม 2569",
        groupDate: "วันอาทิตย์ที่ 27 ธันวาคม 2569",
        location: "ที่ว่าการอำเภอดอนตูม จ.นครปฐม",
        province: "นครปฐม",
        region: "ภาคกลาง",
        organizer: "อำเภอดอนตูม ร่วมกับ ชุมชนท่องเที่ยว OTOP ดอนตูม",
        startTime: "05:00 น.",
        image: createPosterSvg("ดอนตูม ฮาล์ฟ", "Super Half 2026", "#211a10", "#f59e0b", runnerIcon),
        badge: "ฮาล์ฟมาราธอน",
        distances: ["5 KM", "10.5 KM", "21 KM"],
        description: "ท้าทายความเร็วปิดท้ายปีบนเส้นทางสายวัฒนธรรมและเกษตรกรรมดอนตูม ลิ้มลองผลไม้และของดีเมืองดอนตูม เสื้อและเหรียญรางวัลดีไซน์พิเศษลิมิเต็ดส่งท้ายปี 2569",
        categories: [
            { name: "Fun Run", dist: "5 KM", fee: "450 บาท", cutoff: "1.0 ชม.", start: "06:00 น." },
            { name: "Mini Marathon", dist: "10.5 KM", fee: "550 บาท", cutoff: "2.0 ชม.", start: "05:30 น." },
            { name: "Super Half Marathon", dist: "21 KM", fee: "750 บาท", cutoff: "3.5 ชม.", start: "05:00 น." }
        ]
    }
];

// Home Featured Event (เกาะล้าน วิ่งเพื่อน้อง) Data for Modal
const featuredHomeEvent = {
    id: 99,
    title: "เกาะล้าน วิ่งเพื่อน้อง ครั้งที่ 4 (KOH LARN RUN FOR KIDS 2026)",
    date: "12 ธันวาคม 2569",
    groupDate: "วันเสาร์ที่ 12 ธันวาคม 2569",
    location: "หาดแสม / เกาะล้าน พัทยา จ.ชลบุรี",
    province: "ชลบุรี",
    region: "ภาคตะวันออก",
    organizer: "Pattaya City & ชมรมส่งเสริมการท่องเที่ยวเกาะล้าน",
    startTime: "05:30 น.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    badge: "กิจกรรมไฮไลท์ประจำเดือน",
    distances: ["5 KM", "10 KM", "21 KM"],
    description: "สัมผัสประสบการณ์วิ่งบนเกาะสวรรค์แห่งอ่าวไทย เส้นทางเลียบชายหาดแสมและเนินเขาชมวิวทะเลแบบ 360 องศา รายได้มอบเป็นทุนการศึกษาและจัดซื้ออุปกรณ์การเรียนให้โรงเรียนบนเกาะล้าน",
    categories: [
        { name: "Beach Fun Run", dist: "5 KM", fee: "550 บาท", cutoff: "1.5 ชม.", start: "06:15 น." },
        { name: "Island Mini Marathon", dist: "10 KM", fee: "650 บาท", cutoff: "2.5 ชม.", start: "05:45 น." },
        { name: "Scenic Half Marathon", dist: "21 KM", fee: "850 บาท", cutoff: "4.0 ชม.", start: "05:30 น." }
    ]
};

// State
let selectedDistance = "all";
let searchKeyword = "";
let currentActiveModalEvent = null;

// DOM Elements
const homeView = document.getElementById("homeView");
const calendarView = document.getElementById("calendarView");
const navHome = document.getElementById("navHome");
const navCalendar = document.getElementById("navCalendar");
const mobileNavHome = document.getElementById("mobileNavHome");
const mobileNavCalendar = document.getElementById("mobileNavCalendar");
const navLogo = document.getElementById("navLogo");
const eventsContainer = document.getElementById("eventsContainer");
const eventCountBadge = document.getElementById("eventCountBadge");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Search Inputs
const searchInput = document.getElementById("searchInput");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const calendarSearchInput = document.getElementById("calendarSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");

// Distance Filter Buttons
const distanceFilterContainer = document.getElementById("distanceFilterContainer");

// Modal Elements
const eventDetailModal = document.getElementById("eventDetailModal");
const modalContent = document.getElementById("modalContent");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalCloseActionBtn = document.getElementById("modalCloseActionBtn");
const modalImg = document.getElementById("modalImg");
const modalBadge = document.getElementById("modalBadge");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalLocation = document.getElementById("modalLocation");
const modalOrganizer = document.getElementById("modalOrganizer");
const modalStartTime = document.getElementById("modalStartTime");
const modalDescription = document.getElementById("modalDescription");
const modalDistancesContainer = document.getElementById("modalDistancesContainer");
const modalShareBtn = document.getElementById("modalShareBtn");
const modalRegisterBtn = document.getElementById("modalRegisterBtn");

// Toast Elements
const toastNotification = document.getElementById("toastNotification");
const toastMessage = document.getElementById("toastMessage");
const toastIcon = document.getElementById("toastIcon");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupFiltersAndSearch();
    setupModalEvents();
    setupHomeEventsInteractions();
    renderFilteredEvents();
});

// Setup Navigation View Switcher
function setupNavigation() {
    function switchView(viewName) {
        if (viewName === "home") {
            homeView.classList.remove("hidden");
            calendarView.classList.add("hidden");

            // Update Nav Active Indicator
            navHome.className = "nav-link active px-3 py-2 rounded-md text-brandGold font-semibold relative after:absolute after:bottom-[-16px] after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-brandGoldLight after:to-brandGold";
            navCalendar.className = "nav-link px-3 py-2 rounded-md text-textMuted hover:text-brandGold transition";
            if (mobileNavHome) mobileNavHome.className = "block py-2 text-brandGold font-bold";
            if (mobileNavCalendar) mobileNavCalendar.className = "block py-2 text-textMuted hover:text-brandGold";
        } else if (viewName === "calendar") {
            calendarView.classList.remove("hidden");
            homeView.classList.add("hidden");

            // Update Nav Active Indicator
            navCalendar.className = "nav-link active px-3 py-2 rounded-md text-brandGold font-semibold relative after:absolute after:bottom-[-16px] after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-brandGoldLight after:to-brandGold";
            navHome.className = "nav-link px-3 py-2 rounded-md text-textMuted hover:text-brandGold transition";
            if (mobileNavCalendar) mobileNavCalendar.className = "block py-2 text-brandGold font-bold";
            if (mobileNavHome) mobileNavHome.className = "block py-2 text-textMuted hover:text-brandGold";
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.switchView = switchView;

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

// Setup Filters & Real-time Search
function setupFiltersAndSearch() {
    // 1. Distance Filter Buttons
    if (distanceFilterContainer) {
        const filterBtns = distanceFilterContainer.querySelectorAll(".distance-filter-btn");
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const distance = btn.getAttribute("data-distance");
                setDistanceFilter(distance);
            });
        });
    }

    // 2. Calendar In-page Search Input
    if (calendarSearchInput) {
        calendarSearchInput.addEventListener("input", (e) => {
            searchKeyword = e.target.value.trim().toLowerCase();
            updateClearButton();
            renderFilteredEvents();
        });
    }

    // Clear search button
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            if (calendarSearchInput) calendarSearchInput.value = "";
            searchKeyword = "";
            updateClearButton();
            renderFilteredEvents();
        });
    }

    // 3. Header Global Search (Desktop & Mobile)
    function handleGlobalSearch(inputElement) {
        if (!inputElement) return;
        const triggerSearch = () => {
            const query = inputElement.value.trim();
            if (query !== "") {
                window.switchView("calendar");
                if (calendarSearchInput) {
                    calendarSearchInput.value = query;
                    searchKeyword = query.toLowerCase();
                    updateClearButton();
                }
                renderFilteredEvents();
            }
        };

        inputElement.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                triggerSearch();
            }
        });

        inputElement.addEventListener("input", (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                if (!homeView.classList.contains("hidden")) {
                    window.switchView("calendar");
                }
                if (calendarSearchInput) calendarSearchInput.value = query;
                searchKeyword = query.toLowerCase();
                updateClearButton();
                renderFilteredEvents();
            } else {
                searchKeyword = "";
                if (calendarSearchInput) calendarSearchInput.value = "";
                updateClearButton();
                renderFilteredEvents();
            }
        });
    }

    handleGlobalSearch(searchInput);
    handleGlobalSearch(mobileSearchInput);
}

// Update Clear Search Button Visibility
function updateClearButton() {
    if (!clearSearchBtn) return;
    if (searchKeyword.length > 0) {
        clearSearchBtn.classList.remove("hidden");
    } else {
        clearSearchBtn.classList.add("hidden");
    }
}

// Change Distance Filter & update button styles
function setDistanceFilter(distance) {
    selectedDistance = distance;
    if (distanceFilterContainer) {
        const filterBtns = distanceFilterContainer.querySelectorAll(".distance-filter-btn");
        filterBtns.forEach(btn => {
            const btnDistance = btn.getAttribute("data-distance");
            if (btnDistance === distance) {
                btn.className = "distance-filter-btn active px-3.5 py-1.5 rounded-lg font-bold bg-gradient-to-r from-brandGoldLight via-brandGold to-brandGoldDark text-darkBg shadow-md shadow-brandGold/20 transition flex items-center gap-1.5";
            } else {
                btn.className = "distance-filter-btn px-3 py-1.5 rounded-lg font-medium text-textMuted bg-[#16161d] hover:text-brandGold hover:border-brandGold/40 border border-cardBorder transition flex items-center gap-1.5";
            }
        });
    }
    renderFilteredEvents();
}

// Filter Logic Engine
function getFilteredEvents() {
    return eventsData.filter(event => {
        let matchDistance = true;
        if (selectedDistance !== "all") {
            const d = parseFloat(selectedDistance);
            matchDistance = event.distances.some(distStr => {
                const num = parseFloat(distStr);
                if (d === 5) return num >= 3 && num <= 6;
                if (d === 10) return num >= 10 && num <= 11;
                if (d === 21) return num >= 20 && num <= 22;
                if (d === 42) return num >= 40;
                return false;
            });
        }

        let matchSearch = true;
        if (searchKeyword) {
            const inTitle = event.title.toLowerCase().includes(searchKeyword);
            const inLocation = event.location.toLowerCase().includes(searchKeyword);
            const inProvince = event.province.toLowerCase().includes(searchKeyword);
            const inBadge = event.badge.toLowerCase().includes(searchKeyword);
            const inDistances = event.distances.some(dist => dist.toLowerCase().includes(searchKeyword));
            matchSearch = inTitle || inLocation || inProvince || inBadge || inDistances;
        }

        return matchDistance && matchSearch;
    });
}

// Render Filtered Events
function renderFilteredEvents() {
    if (!eventsContainer) return;

    const filtered = getFilteredEvents();

    if (eventCountBadge) {
        eventCountBadge.textContent = `${filtered.length} กิจกรรม`;
    }

    if (filtered.length === 0) {
        eventsContainer.innerHTML = `
            <div class="bg-cardBg border border-dashed border-cardBorder rounded-2xl p-10 text-center space-y-4">
                <div class="w-16 h-16 rounded-full bg-brandGold/10 text-brandGold flex items-center justify-center mx-auto text-2xl">
                    <i class="fa-solid fa-person-running"></i>
                </div>
                <div class="space-y-1">
                    <h3 class="text-lg font-bold text-white">ไม่พบงานวิ่งที่ตรงกับเงื่อนไขการค้นหา</h3>
                    <p class="text-xs text-textMuted max-w-sm mx-auto">
                        ลองเปลี่ยนคำค้นหา หรือเลือกตัวกรองระยะทางอื่นเพื่อค้นหากิจกรรมเพิ่มเติม
                    </p>
                </div>
                <button onclick="resetAllFilters()" class="inline-flex items-center gap-2 bg-[#1f1e18] hover:bg-brandGold hover:text-darkBg border border-brandGold/50 text-brandGold text-xs font-bold px-4 py-2 rounded-xl transition">
                    <i class="fa-solid fa-rotate-left"></i>
                    <span>ล้างตัวกรองทั้งหมด</span>
                </button>
            </div>
        `;
        return;
    }

    const grouped = {};
    filtered.forEach(event => {
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
                        <i class="fa-regular fa-calendar-days text-brandGold text-xs"></i>
                        <span>${groupDate}</span>
                    </h3>
                    <div class="flex-grow h-[1px] bg-cardBorder"></div>
                </div>

                <div class="space-y-3">
                    ${events.map(event => `
                        <div onclick="openEventDetailsById(${event.id})" 
                            class="event-card group bg-cardBg border border-cardBorder rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start cursor-pointer hover:border-brandGold/60 hover:shadow-lg hover:shadow-brandGold/5 transition duration-300">
                            <!-- Poster Image -->
                            <div class="w-full sm:w-32 h-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-[#09090c] relative border border-cardBorder">
                                <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                                <span class="absolute top-2 left-2 bg-brandGold/90 text-darkBg text-[10px] font-black px-2 py-0.5 rounded shadow">
                                    ${event.badge}
                                </span>
                            </div>

                            <!-- Content Details -->
                            <div class="flex-grow space-y-2 w-full text-left">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <h4 class="text-base font-bold text-white group-hover:text-brandGold transition line-clamp-1">
                                        ${event.title}
                                    </h4>
                                    <span class="text-[11px] text-brandGoldLight bg-brandGold/10 px-2 py-0.5 rounded-full border border-brandGold/20 self-start sm:self-auto">
                                        จ.นครปฐม
                                    </span>
                                </div>

                                <div class="text-xs text-textMuted space-y-1">
                                    <p class="flex items-center gap-2">
                                        <i class="fa-regular fa-calendar text-brandGold w-4"></i>
                                        <span class="text-textLight">${event.date}</span>
                                    </p>
                                    <p class="flex items-center gap-2">
                                        <i class="fa-solid fa-location-dot text-brandGold w-4"></i>
                                        <span>${event.location}</span>
                                    </p>
                                </div>

                                <!-- Distances Chips -->
                                <div class="pt-1 flex flex-wrap items-center justify-between gap-2">
                                    <div class="flex flex-wrap items-center gap-1.5">
                                        <span class="text-[11px] text-textMuted font-medium mr-1">ระยะทาง:</span>
                                        ${event.distances.map(dist => {
                                            const cleanNum = parseFloat(dist);
                                            let filterKey = "5";
                                            if (cleanNum >= 10 && cleanNum <= 11) filterKey = "10";
                                            else if (cleanNum >= 20 && cleanNum <= 22) filterKey = "21";
                                            else if (cleanNum >= 40) filterKey = "42";
                                            
                                            return `
                                                <button onclick="event.stopPropagation(); setDistanceFilter('${filterKey}')" 
                                                    class="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#181820] hover:bg-brandGold hover:text-darkBg border border-cardBorder text-brandGold transition" title="คลิกเพื่อกรองระยะ ${dist}">
                                                    ${dist}
                                                </button>
                                            `;
                                        }).join('')}
                                    </div>
                                    <span class="text-xs text-brandGold group-hover:underline flex items-center gap-1 font-medium">
                                        <span>ดูรายละเอียด</span>
                                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                    </span>
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

// Modal Setup & Event Listeners
function setupModalEvents() {
    if (!eventDetailModal) return;

    function closeModal() {
        if (!modalContent) return;
        modalContent.classList.remove("scale-100", "opacity-100");
        modalContent.classList.add("scale-95", "opacity-0");
        setTimeout(() => {
            eventDetailModal.classList.add("hidden");
            document.body.style.overflow = "";
        }, 200);
    }

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (modalCloseActionBtn) modalCloseActionBtn.addEventListener("click", closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

    // ESC Key to close
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !eventDetailModal.classList.contains("hidden")) {
            closeModal();
        }
    });

    // Share Button
    if (modalShareBtn) {
        modalShareBtn.addEventListener("click", () => {
            const shareUrl = window.location.href;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareUrl).then(() => {
                    showToast("คัดลอกลิงก์กิจกรรมเรียบร้อยแล้ว!", "fa-circle-check");
                }).catch(() => {
                    showToast("แชร์กิจกรรมเรียบร้อยแล้ว!", "fa-circle-check");
                });
            } else {
                showToast("แชร์กิจกรรมเรียบร้อยแล้ว!", "fa-circle-check");
            }
        });
    }

    // Register Button
    if (modalRegisterBtn) {
        modalRegisterBtn.addEventListener("click", () => {
            const title = currentActiveModalEvent ? currentActiveModalEvent.title : "กิจกรรม";
            showToast(`เปิดระบบลงทะเบียนสำหรับ "${title}" เรียบร้อยแล้ว!`, "fa-ticket");
        });
    }

    window.closeEventModal = closeModal;
}

// Open Modal with Event Data
function openEventModal(event) {
    if (!eventDetailModal || !event) return;
    currentActiveModalEvent = event;

    // Populate data
    if (modalImg) modalImg.src = event.image;
    if (modalBadge) modalBadge.textContent = event.badge || "กิจกรรมวิ่ง";
    if (modalTitle) modalTitle.textContent = event.title;
    if (modalDate) modalDate.textContent = event.date;
    if (modalLocation) modalLocation.textContent = event.location;
    if (modalOrganizer) modalOrganizer.textContent = event.organizer || "ผู้จัดงานวิ่ง";
    if (modalStartTime) modalStartTime.textContent = event.startTime || "05:00 น.";
    if (modalDescription) modalDescription.textContent = event.description || "สัมผัสประสบการณ์วิ่งสุขภาพกับเส้นทางที่ได้มาตรฐานและบรรยากาศอันน่าประทับใจ";

    // Populate Distances Table
    if (modalDistancesContainer) {
        const categories = event.categories || event.distances.map(d => ({
            name: "ประเภทการแข่งขัน",
            dist: d,
            fee: "500 บาท",
            cutoff: "2.0 ชม.",
            start: "05:30 น."
        }));

        modalDistancesContainer.innerHTML = categories.map(cat => `
            <div class="bg-[#16161d] border border-cardBorder rounded-xl p-3 space-y-1.5 hover:border-brandGold/40 transition">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white">${cat.name}</span>
                    <span class="text-[11px] font-extrabold text-brandGold bg-brandGold/10 px-2 py-0.5 rounded border border-brandGold/20">${cat.dist}</span>
                </div>
                <div class="text-[11px] text-textMuted space-y-0.5 pt-1 border-t border-cardBorder/60">
                    <p class="flex justify-between">
                        <span>ค่าสมัคร:</span>
                        <strong class="text-textLight font-semibold">${cat.fee}</strong>
                    </p>
                    <p class="flex justify-between">
                        <span>ปล่อยตัว:</span>
                        <span class="text-textLight">${cat.start || "05:30 น."}</span>
                    </p>
                    <p class="flex justify-between">
                        <span>Cut-off:</span>
                        <span class="text-textLight">${cat.cutoff}</span>
                    </p>
                </div>
            </div>
        `).join('');
    }

    // Show Modal
    eventDetailModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        if (modalContent) {
            modalContent.classList.remove("scale-95", "opacity-0");
            modalContent.classList.add("scale-100", "opacity-100");
        }
    }, 10);
}

// Open Modal by Event ID
window.openEventDetailsById = function(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (event) {
        openEventModal(event);
    }
};

// Setup Home Page Interactions (Hero Banner & Cards)
function setupHomeEventsInteractions() {
    // 1. Hero Featured Event Buttons
    const heroDetailBtn = document.querySelector("#homeView section:first-of-type button:first-of-type");
    const heroRegisterBtn = document.querySelector("#homeView section:first-of-type button:last-of-type");
    const heroImageContainer = document.querySelector("#homeView section:first-of-type .aspect-\\[16\\/10\\]");

    if (heroDetailBtn) {
        heroDetailBtn.addEventListener("click", () => openEventModal(featuredHomeEvent));
    }
    if (heroRegisterBtn) {
        heroRegisterBtn.addEventListener("click", () => openEventModal(featuredHomeEvent));
    }
    if (heroImageContainer) {
        heroImageContainer.classList.add("cursor-pointer");
        heroImageContainer.addEventListener("click", () => openEventModal(featuredHomeEvent));
    }

    // 2. Make all event cards in Home View clickable to view details
    const homeCards = document.querySelectorAll("#homeView .event-card");
    const demoDetails = [
        {
            id: 101,
            title: "งานเดิน-วิ่ง การกุศล ครั้งที่ 29 KNT RUN 2026",
            date: "5 ธันวาคม 2569",
            location: "ลานอเนกประสงค์ หลังตลาดน้ำบางน้ำผึ้ง จ.สมุทรปราการ",
            province: "สมุทรปราการ",
            organizer: "โรงพยาบาลกล้วยน้ำไทและกล้วยน้ำไทมูลนิธิ",
            startTime: "05:30 น.",
            image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=600&auto=format&fit=crop",
            badge: "เปิดรับสมัครวันนี้",
            distances: ["3 KM", "5 KM", "10 KM"],
            description: "วิ่งรับลมธรรมชาติคุ้งบางกะเจ้า ปอดกลางเมืองกรุงเทพฯ เพื่อนำรายได้จัดซื้ออุปกรณ์การแพทย์มอบให้ผู้ป่วยยากไร้",
            categories: [
                { name: "เดินเพื่อสุขภาพ", dist: "3 KM", fee: "400 บาท", cutoff: "1.0 ชม.", start: "06:15 น." },
                { name: "Fun Run", dist: "5 KM", fee: "500 บาท", cutoff: "1.5 ชม.", start: "06:00 น." },
                { name: "Mini Marathon", dist: "10 KM", fee: "600 บาท", cutoff: "2.0 ชม.", start: "05:30 น." }
            ]
        },
        {
            id: 102,
            title: "ธัญญประเทรลรัน 2026 ครั้งที่ 13",
            date: "29 พฤศจิกายน 2569",
            location: "ธัญญประ ภูเก็ต จ.ภูเก็ต",
            province: "ภูเก็ต",
            organizer: "ธัญญประ รีสอร์ทสุขภาพและกีฬา",
            startTime: "05:00 น.",
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop",
            badge: "เทรลรัน",
            distances: ["5 KM", "15 KM", "30 KM"],
            description: "วิ่งเทรลท่ามกลางธรรมชาติป่าเขาเขตร้อนของเกาะภูเก็ต ท้าทายความสูงชันและเส้นทางธรรมชาติแบบ Unseen",
            categories: [
                { name: "Trail Fun", dist: "5 KM", fee: "650 บาท", cutoff: "2.0 ชม.", start: "06:00 น." },
                { name: "Trail Mini", dist: "15 KM", fee: "950 บาท", cutoff: "3.5 ชม.", start: "05:30 น." },
                { name: "Super Trail", dist: "30 KM", fee: "1,450 บาท", cutoff: "6.0 ชม.", start: "05:00 น." }
            ]
        },
        {
            id: 103,
            title: "Kirei Kirei Global HandWashing Day Run วิ่งด้วยใจให้น้องมือสะอาดปี 3",
            date: "4 ตุลาคม 2569",
            location: "สวนวชิรเบญจทัศ (สวนรถไฟ) กรุงเทพมหานคร",
            province: "กรุงเทพมหานคร",
            organizer: "บริษัท ไลอ้อน (ประเทศไทย) จำกัด",
            startTime: "06:00 น.",
            image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=600&auto=format&fit=crop",
            badge: "ยอดนิยม",
            distances: ["3 KM", "5 KM", "10 KM"],
            description: "งานวิ่งเพื่อสุขภาพของครอบครัว ณ สวนรถไฟ พร้อมกิจกรรมสร้างเสริมสุขอนามัยสำหรับเด็กและครอบครัว",
            categories: [
                { name: "Family Run", dist: "3 KM", fee: "350 บาท", cutoff: "1.0 ชม.", start: "06:30 น." },
                { name: "Fun Run", dist: "5 KM", fee: "450 บาท", cutoff: "1.2 ชม.", start: "06:15 น." },
                { name: "Mini Marathon", dist: "10 KM", fee: "550 บาท", cutoff: "2.0 ชม.", start: "06:00 น." }
            ]
        }
    ];

    homeCards.forEach((card, idx) => {
        card.addEventListener("click", () => {
            const data = demoDetails[idx % demoDetails.length];
            openEventModal(data);
        });
    });
}

// Show Toast Notification
function showToast(message, iconClass = "fa-circle-check") {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    if (toastIcon) {
        toastIcon.className = `fa-solid ${iconClass} text-brandGold text-base`;
    }
    toastNotification.classList.remove("translate-y-16", "opacity-0", "pointer-events-none");
    toastNotification.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
        toastNotification.classList.remove("translate-y-0", "opacity-100");
        toastNotification.classList.add("translate-y-16", "opacity-0", "pointer-events-none");
    }, 3000);
}

// Reset All Filters function
window.resetAllFilters = function() {
    selectedDistance = "all";
    searchKeyword = "";
    if (calendarSearchInput) calendarSearchInput.value = "";
    if (searchInput) searchInput.value = "";
    if (mobileSearchInput) mobileSearchInput.value = "";
    updateClearButton();
    setDistanceFilter("all");
};

// Global exports
window.setDistanceFilter = setDistanceFilter;
window.openEventModal = openEventModal;
window.showToast = showToast;
