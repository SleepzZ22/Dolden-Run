# 🏃‍♂️ GOLDEN RUN - แพลตฟอร์มค้นหาและปฏิทินงานวิ่ง (Running Event Platform)

[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**GOLDEN RUN** คือเว็บแอปพลิเคชันสำหรับนักวิ่งและผู้สนใจสุขภาพ ที่รวบรวมข้อมูลกิจกรรมงานวิ่ง มินิมาราธอน ฮาล์ฟมาราธอน และเทรลรันทั่วประเทศไทย นำเสนอด้วยดีไซน์ **Modern Luxury Dark Theme (ดำ-ทอง)** พร้อมระบบแผนที่ Interactive และปฏิทินงานวิ่งที่จัดกลุ่มตามช่วงเวลา เพื่อให้นักวิ่งค้นหาและวางแผนการซ้อมและลงสมัครได้อย่างสะดวกและรวดเร็ว

---

## ✨ จุดเด่นและฟีเจอร์หลัก (Key Features)

### 1. 🏠 หน้าหลัก (Home View)
- **กิจกรรมไฮไลท์ประจำเดือน (Hero Featured Banner):** แบนเนอร์ขนาดใหญ่แสดงงานวิ่งเด่น พร้อมรายละเอียด วันที่ สถานที่ ผู้จัดงาน และปุ่มคลิกดูรายละเอียด/สมัครทันที
- **จัดหมวดหมู่ชัดเจน:**
  - **เปิดใหม่ (Newly Opened):** งานวิ่งที่เพิ่งเปิดรับสมัคร ไม่พลาด Early Bird
  - **ยอดนิยม (Popular Events):** งานวิ่งยอดฮิตที่มีผู้เข้าร่วมจำนวนมาก
  - **จัดขึ้นเร็วๆ นี้ (Upcoming):** เตรียมตัวให้พร้อมสำหรับงานวิ่งในเดือนนี้
- **ระบบค้นหา (Search System):** ค้นหากิจกรรมได้อย่างรวดเร็ว

### 2. 🔍 ระบบแสดงรายละเอียดงานวิ่งแบบเจาะลึก (Event Details Modal)
- **Interactive Popup Modal:** คลิกที่การ์ดงานวิ่งหรือปุ่มรายละเอียดได้จากทุกหน้าจอ
- **ข้อมูลครบถ้วนสำหรับนักวิ่ง:**
  - ภาพแบนเนอร์/โปสเตอร์ขนาดใหญ่ และ Badge ประเภทงาน
  - วันที่จัดกิจกรรม, สถานที่จัดงาน, ผู้จัดงาน และเวลาปล่อยตัว (Start Time)
  - วัตถุประสงค์และรายละเอียดเส้นทางวิ่ง
  - ตารางแจกแจงระยะทาง, ค่าสมัคร, เวลาปล่อยตัว และเวลา Cut-off ของแต่ละระยะ (3.5K, 5K, 10K, 21K, 42.195K)
  - รายการ Race Pack & สิทธิประโยชน์ที่นักวิ่งจะได้รับ (เสื้อที่ระลึก, เหรียญรางวัล, BIB, อาหาร-น้ำดื่ม)
- **ระบบแชร์และแจ้งเตือน (Share & Toast Notification):** ปุ่มคัดลอกลิงก์เพื่อแชร์กิจกรรม และระบบ Toast Notification แจ้งเตือนแบบลอยตัวมุมขวาล่าง
- **การควบคุมที่สะดวก:** ปิด Modal ได้ทั้งคลิกปุ่ม ✕, คลิกพื้นที่ภายนอก (Backdrop) หรือกดปุ่ม `ESC` บนคีย์บอร์ด

### 3. 📅 ปฏิทินและแผนที่งานวิ่ง (Interactive Calendar & Map View)
- **ระบบค้นหาและกรองแบบ Real-time (Instant Search & Distance Filter):**
  - **Quick Distance Filter:** กรองงานวิ่งตามระยะทางได้ทันที (Fun Run 3-5 KM, Mini 10-10.5 KM, Half 21 KM, Marathon 42 KM)
  - **Live Search Input:** ค้นหาชื่อกิจกรรม สถานที่ หรืออำเภอ โดยแสดงผลแบบ Real-time ทันทีที่พิมพ์
  - **Interactive Distance Chips:** คลิกที่ป้ายระยะทางบนการ์ด เพื่อคัดกรองงานวิ่งระยะนั้นได้ทันที
  - **Empty State & Reset Filter:** มีหน้าจอแจ้งเตือนสวยงามเมื่อไม่พบผลลัพธ์ พร้อมปุ่มรีเซ็ตตัวกรองทั้งหมด
- **แผนที่ประเทศไทย Interactive (Vector SVG Map):** คลิกเลือกดูงานวิ่งตามพิกัด/จังหวัด (เช่น นครปฐม) พร้อมไอคอน Pulse Animation ระบุตำแหน่ง
- **การจัดกลุ่มตามวัน (Grouped by Date):** แสดงรายการงานวิ่งแยกตามวันจัดกิจกรรมอย่างเป็นระเบียบ ทำให้นักวิ่งเปรียบเทียบตารางเวลาได้ง่าย
- **Dynamic Poster Generator:** ระบบสร้างภาพโปสเตอร์ SVG เสมือนจริงอัตโนมัติด้วย JavaScript ปรับแต่งไอคอน สี และรายละเอียดของแต่ละงานได้ทันที

### 4. 🎨 การออกแบบและการใช้งาน (UI/UX Design)
- **Modern Dark & Gold Palette:** ใช้โทนสี ดำเข้ม (`#09090c`), ทองพรีเมียม (`#d4af37`) มอบความรู้สึกพรีเมียมและสบายตา
- **Responsive Web Design:** รองรับการใช้งานสมบูรณ์แบบบนทุกหน้าจอ ทั้งมือถือ (Mobile Drawer Menu), แท็บเล็ต และคอมพิวเตอร์
- **Typography ระดับพรีเมียม:** ใช้ Google Fonts (Kanit & Prompt) เพื่อความอ่านง่ายและทันสมัย

---

## 🛠️ สถาปัตยกรรมและเทคโนโลยีที่ใช้ (Tech Stack)

| ส่วนประกอบ | เทคโนโลยีที่เลือกใช้ | รายละเอียดการใช้งาน |
| :--- | :--- | :--- |
| **Markup** | HTML5 | วางโครงสร้าง Semantic HTML รองรับ Single-Page Navigation แบบ Section-based |
| **Styling** | Tailwind CSS (CDN) + Custom CSS | ออกแบบ Utilities-First ทำงานร่วมกับ CSS Variables และ Custom Effects |
| **Logic & Data** | JavaScript (Vanilla ES6+) | ระบบ State/View Switching, DOM Manipulation, SVG Poster Data Generator |
| **Icons & Fonts** | Font Awesome 6 + Google Fonts | ไอคอนสไตล์โมเดิร์น และฟอนต์ภาษาไทย (Prompt, Kanit) |
| **Graphics** | SVG (Scalable Vector Graphics) | แผนที่ประเทศไทย Interactive และโปสเตอร์เวกเตอร์ที่ไม่แตกเมื่อขยาย |

---

## 📂 โครงสร้างโฟลเดอร์ของโปรเจกต์ (Project Structure)

```text
Run/
├── index.html       # หน้าเว็บหลัก (HTML Layout, Header, Home View, Calendar View, Footer)
├── app.js           # ระบบการสลับหน้า, ฐานข้อมูลกิจกรรม (Data Store), การ Render งานวิ่ง และ Poster SVG
├── styles.css       # สไตล์ CSS เพิ่มเติม (Custom Scrollbar, Glassmorphism, Animations)
└── README.md        # เอกสารอธิบายโปรเจกต์และการติดตั้ง
```

---

## 🚀 วิธีการติดตั้งและเปิดใช้งาน (Getting Started)

### วิธีที่ 1: รันผ่าน XAMPP / Local Server
1. นำโฟลเดอร์ `Run` ไปวางไว้ที่ไดเรกทอรี `htdocs` ของ XAMPP เช่น:
   ```text
   C:\xampp\htdocs\Run
   ```
2. เปิดโปรแกรม **XAMPP Control Panel** และกด Start ที่ **Apache**
3. เปิดเว็บเบราว์เซอร์แล้วเข้าสู่ URL:
   ```text
   http://localhost/Run/
   ```

### วิธีที่ 2: รันผ่าน Live Server (VS Code) หรือเปิดไฟล์ตรง
- คลิกขวาที่ไฟล์ `index.html` แล้วเลือก **Open with Live Server** 
- หรือดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดใช้งานบนเบราว์เซอร์ได้โดยตรงทันที

---

## 🧭 การต่อยอดในอนาคต (Roadmap & Future Enhancements)

- [ ] **ระบบสมาชิกและการชำระเงิน:** รองรับการลงทะเบียนนักวิ่งและชำระเงินผ่าน PromptPay / Credit Card
- [ ] **ระบบฟิลเตอร์แบบไดนามิก:** กรองข้อมูลตามระยะทาง (5K, 10K, 21K, 42K), จังหวัด, และช่วงราคา
- [ ] **API & Database Integration:** เชื่อมต่อ Backend (เช่น Node.js / PHP / Supabase) เพื่อให้ผู้จัดงานสร้างและแก้ไขงานวิ่งได้เอง
- [ ] **ระบบแจ้งเตือน (Notifications):** แจ้งเตือนวันเปิดรับสมัครและวันจัดงานผ่าน LINE Notify หรือ Email

---

## 👨‍💻 ผู้พัฒนา (Author)
- **GOLDEN RUN Project Team**
- พัฒนาขึ้นเพื่อเป็นแพลตฟอร์มศูนย์รวมกิจกรรมงานวิ่งสำหรับคนรักสุขภาพ
