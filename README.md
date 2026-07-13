# 📚 BookNest

**BookNest** is an online book borrowing platform where you can borrow books digitally. Built with **Next.js**, **TailwindCSS**, **BetterAuth**, and **MongoDB**.

🔗 **Live Site:** [https://neyamul-assignment-8.vercel.app/home](https://neyamul-assignment-8.vercel.app/home)

---

Some features on this website require you to be logged in — for example, you can't view book details without an account. Don't have one? You can register in seconds! This project helped me learn authentication using **MongoDB** and **BetterAuth**.

---

## ✨ Key Features

- 🏠 **Home Page** — Hero banner with "Find Your Next Read", scrolling marquee of new arrivals, and featured books section
- 🔍 **Book Search** — Search books by title from the All Books page
- 🗂️ **Category Filter** — Sidebar to filter books by Story, Tech, or Science
- 📖 **Book Details** — Private route showing full book info, availability, and borrow action
- 🔐 **Authentication** — Email/password login & registration + Google OAuth via BetterAuth
- 👤 **My Profile** — Private route to view and update user name and avatar
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- 🔒 **Secure Config** — All API keys and secrets stored in environment variables

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| [Next.js](https://nextjs.org/) | React framework (SSR + routing) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) / [HeroUI](https://heroui.com/) | UI component library |
| [BetterAuth](https://better-auth.com/) | Authentication (Email + Google) |
| MongoDB | Database |

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | Core framework |
| `react` / `react-dom` | UI rendering |
| `tailwindcss` | CSS styling |
| `daisyui` | Tailwind component library |
| `better-auth` | Auth with email & Google OAuth |
| `mongoose` | MongoDB ODM |
| `swiper` | Book carousel / slider |
| `react-toastify` | Toast notifications |
| `react-icons` | Icons throughout the UI |

<!-- ---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/your-username/booknest.git
cd booknest
npm install
cp .env.example .env.local
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) -->