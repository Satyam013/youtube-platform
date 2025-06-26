# 🎬 Namaste YouTube Clone

A feature-rich, production-grade **YouTube Clone** built with **React.js**, **Redux Toolkit**, **Tailwind CSS**, **YouTube Data API v3**, and **TMDB API** — showcasing a blend of real-world UI/UX, scalable architecture, and advanced frontend engineering practices.

This project simulates the full YouTube experience:

- 📹 Video streaming and watch pages
- 🔎 Smart search with suggestions and mic input
- 💬 Live chat simulation
- 📁 Video library with Watch Later, History, and Likes
- 🩳 Shorts scrolling experience
- 🎥 Movies/TV section powered by **TMDB API**
- 📈 Local analytics, persistent state, and offline support

> 💡 Designed to reflect professional-grade architecture suitable for interviews and real-world use.

---

## 🌟 Why This Project?

This isn’t just a clone — it's a demonstration of:

- 🧠 Real-world problem solving using React, Redux, APIs, and persistent storage
- 🧩 Component-driven development with modular UI and feature-specific logic
- 🗂️ Full-stack ready architecture — scalable, testable, and easy to maintain

Key Engineering Concepts:

- 🔁 **State persistence via Redux + Local Storage** — ensures session continuity
- 🎤 **Debounced search bar with mic input** — replicates YouTube's search UX
- 🔄 **Live chat simulation using mock polling** — mimics real-time interactivity
- 🌐 **Offline mode using IndexedDB** — watch history works even when offline
- 🧱 **Component modularity + custom hooks** — ensures clean, scalable code
- 📑 **LLD-driven development** — included `LLD_Process.txt` explains design choices

> ✅ Built with interviewers in mind — this project displays proficiency in:
>
> - UI architecture
> - API integration
> - Asynchronous data handling
> - State management with Redux Toolkit
> - User-centric design & performance optimizations

---

## 🚀 Features

- 🔍 **Smart Search Experience**

  - Debounced input with instant suggestions
  - Voice input via browser’s Speech API
  - Result routing and dynamic query handling

- 📺 **Watch Page**

  - Embedded player with metadata, likes, views
  - Subscriptions, likes, dislikes with Redux

- 🩳 **Shorts Experience**

  - Scrollable vertical layout
  - Auto-play/pause logic for smooth UX

- 📁 **Library Pages**

  - History, Watch Later, and Saved videos
  - Synced to Redux & Local Storage

- 💬 **Live Chat Simulation**

  - Polling-based message streaming
  - Real-time chat-like experience

- 🎥 **TMDB Movie Section**

  - Shows trending and popular movies
  - TMDB API integration with image/media cards

- 📢 **Mock Ads**

  - Dynamic ads injected using mock data
  - Can be toggled for monetization simulation

- 📈 **Local Analytics**

  - Most watched, liked videos tracked
  - Great for behavioral analysis (demo purpose)

- 🌐 **Offline Support**
  - IndexedDB for watch history storage
  - Graceful degradation without internet

---

## 🏗️ Folder Structure

namaste-youtube/
├── public/
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt

├── src/
│ ├── components/
│ │ ├── BodySection/
│ │ ├── Buttons/
│ │ ├── ChatMessages/
│ │ ├── Comments/
│ │ ├── Explore/
│ │ ├── Header/
│ │ ├── Theme/
│ │ ├── UI/
│ │ ├── UnderDevelopment/
│ │ ├── VideoCards/
│ │ ├── Body.js
│ │ ├── ThemeToggle.js
│ │ ├── WatchControls.js
│ │ └── WatchPage.js

│ ├── utils/
│ │ ├── constants/
│ │ ├── slices/
│ │ ├── appStore.js
│ │ ├── format.js
│ │ ├── helper.js
│ │ └── mockAd.js

│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.js
│ ├── reportWebVitals.js
│ └── setupTests.js

├── .env
├── .gitignore
├── LLD_Process.txt
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js

---

---

## 🧰 Technologies Used

| Technology                | Purpose                                       |
| ------------------------- | --------------------------------------------- |
| **React.js**              | Component-based UI library                    |
| **Redux Toolkit**         | Centralized state management                  |
| **Tailwind CSS**          | Utility-first responsive styling              |
| **React Router DOM**      | Page routing/navigation                       |
| **YouTube Data API v3**   | Fetch videos, metadata, search suggestions    |
| **TMDB API**              | Retrieve movie/TV content data                |
| **IndexedDB**             | Client-side offline storage for watch history |
| **Speech API**            | Voice input for search bar                    |
| **setInterval (Polling)** | Live chat simulation                          |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/namaste-youtube.git
cd namaste-youtube
```

Install Dependencies -> npm install

Create .env File
-> REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
-> REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here

Run the App -> npm start
Go to: http://localhost:3000

Contributing ->

- Fork the repo
- Create your branch: git checkout -b feature-name
- Commit your changes: git commit -m 'Add feature'
- Push to GitHub: git push origin feature-name
- Open a Pull Request

Made by - Satyam Kandpal
Email: satyamkandpal8@gmail.com
Linkedin - https://www.linkedin.com/in/satyam-kandpal-019326251/
