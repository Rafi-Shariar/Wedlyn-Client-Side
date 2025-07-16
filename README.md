# 💍 Wedlyn - A Modern Matrimonial Web Application

**Wedlyn** is a modern, user-friendly matrimonial platform that simplifies the process of finding a life partner. With features tailored for both users and administrators, it ensures a seamless experience from biodata creation to successful matchmaking.

🔗 **Live Demo:** [https://wedlyn-eb797.web.app/](https://wedlyn-eb797.web.app/)

---

## 🚀 Features

### 👤 User Features

- **Explore Biodatas:** Browse a wide range of potential matches.
- **Favorites:** Add biodatas to your favorites list for quick access later.
- **Contact Requests:**
  - Non-premium users can **request contact info** by paying **$5**.
- **Success Stories:** Get inspired by stories of real users who found love on Wedlyn.

#### 🧑‍💼 User Dashboard

- Create and manage personal biodata.
- Request admin to **make biodata premium** (completely free).
- Edit or update biodata anytime.
- Track contact request status and **view approved contact details**.
- Remove biodatas from the favorites list.
- Share your own **successful marriage story**.

---

### 🛠️ Admin Features

- **User Management:** Promote users to admins or revoke roles.
- **Premium Management:** Approve or cancel premium biodata requests.
- **Contact Requests:** View and approve contact requests; share contact info.
- **Success Stories:** Manage and view shared user success stories.
- **Platform Statistics:**
  - Total number of biodatas.
  - Total platform revenue.

---

## 🔒 Authentication & Security

- **Firebase Authentication:** Secure and easy user management.
- **JWT (JSON Web Token):** Protects sensitive API routes and ensures secure data access.

---

## 💳 Payments

- Integrated with **Stripe** for handling $5 payments securely for contact requests.

---
## 💼 Admin Credentials

-  **Email:** admin@gmail.com
-  **Password:** 123456

---

## 📦 Tech Stack

| Layer        | Technology                     |
|--------------|--------------------------------|
| Frontend     | React 19, Vite                 |
| Styling      | Tailwind CSS, Flowbite         |
| Animations   | Framer Motion, Lottie, AOS     |
| State & Data | React Query (TanStack), Axios  |
| Backend Auth | Firebase + JWT                 |
| Charts       | Recharts                       |
| Alerts       | SweetAlert2, React Hot Toast   |
| Icons        | Lucide, React Icons            |

---

## 🛠️ Client-side Dependencies

```json
{
  "@stripe/react-stripe-js": "^3.7.0",
  "@stripe/stripe-js": "^7.4.0",
  "@tailwindcss/vite": "^4.1.11",
  "@tanstack/react-query": "^5.81.5",
  "aos": "^2.3.4",
  "axios": "^1.10.0",
  "clsx": "^2.1.1",
  "firebase": "^11.10.0",
  "flowbite-react": "^0.11.8",
  "framer-motion": "^12.23.1",
  "lottie-react": "^2.4.1",
  "lucide-react": "^0.525.0",
  "motion": "^12.23.3",
  "react": "^19.1.0",
  "react-countup": "^6.5.3",
  "react-dom": "^19.1.0",
  "react-fast-marquee": "^1.6.5",
  "react-hook-form": "^7.60.0",
  "react-hot-toast": "^2.5.2",
  "react-icons": "^5.5.0",
  "react-rating": "^2.0.5",
  "react-router": "^7.6.3",
  "react-star-ratings": "^2.3.0",
  "recharts": "^3.1.0",
  "sweetalert2": "^11.22.2",
  "tailwind-merge": "^3.3.1",
  "tailwindcss": "^4.1.11"
}
