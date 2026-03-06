# 🚀 Dev Skills App

A web and Android app to help improve your development abilities through interactive challenges, tutorials, progress tracking, and AI-powered feedback.

## 📐 Architecture

```
Frontend (Web / Android)  ⟺  API Server (Node.js)  ⟺  Database (PostgreSQL)
         ↑                              ↓
         └───── AI Service (OpenAI / Gemini) ──────────────────┘
```

## 🗂️ Project Structure

```
dev-skills-app/
├── .github/workflows/     # CI/CD pipelines
├── web/
│   ├── client/            # React frontend
│   └── server/            # Node.js + Express backend API
├── android/               # Kotlin + Jetpack Compose app
└── docs/                  # Documentation
```

## 🛠️ Tech Stack

### Web
| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | React + TypeScript   |
| Backend     | Node.js + Express    |
| Database    | PostgreSQL           |
| Deployment  | Vercel / Railway     |

### Android
| Layer       | Technology                |
|-------------|---------------------------|
| UI          | Jetpack Compose           |
| Language    | Kotlin                    |
| Networking  | Retrofit + OkHttp         |
| DI          | Hilt                      |

## ✨ Features (Planned)

- [ ] Interactive coding challenges and quizzes
- [ ] Video and text tutorials
- [ ] Progress tracking and gamification (badges, streaks)
- [ ] Community forums and peer code review
- [ ] AI-powered code feedback and suggestions
- [ ] GitHub integration (track contributions)

## 🚀 Getting Started

### Web Client
```bash
cd web/client
npm install
npm run dev
```

### Web Server
```bash
cd web/server
npm install
npm run dev
```

### Android
Open the `android/` folder in Android Studio and run the app.

## 📄 License

MIT © jonathan-aguirre-glez