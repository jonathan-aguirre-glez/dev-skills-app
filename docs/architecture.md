# Architecture

## System Design

```
┌─────────────────┐     ┌─────────────────┐
│   Web Client    │     │ Android Client  │
│ (React + Vite)  │     │ (Kotlin + JC)   │
└────────┬────────┘     └────────┬────────┘
         │                       │
         └───────────┬───────────┘
                     ▼
           ┌─────────────────┐
           │   API Server    │
           │ (Node + Express)│
           └────────┬────────┘
          ┌─────────┼─────────┐
          ▼         ▼         ▼
   ┌──────────┐ ┌────────┐ ┌────────┐
   │PostgreSQL│ │ Redis  │ │AI API  │
   │          │ │ Cache  │ │        │
   └──────────┘ └────────┘ └────────┘
```

## REST API Design

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/api/health`         | Health check                       |
| POST   | `/api/auth/login`     | User login                         |
| POST   | `/api/auth/register`  | User registration                  |
| GET    | `/api/challenges`     | List all challenges                |
| GET    | `/api/challenges/:id` | Get a specific challenge           |
| POST   | `/api/submissions`    | Submit a challenge solution        |
| GET    | `/api/progress`       | Get user progress                  |
| POST   | `/api/ai/feedback`    | Get AI-powered feedback on code    |

## Planned Database Schema

| Table       | Description                                    |
|-------------|------------------------------------------------|
| users       | User accounts and profiles                     |
| challenges  | Coding challenges and metadata                 |
| submissions | User submissions for challenges                |
| progress    | User progress and gamification data            |
| forums      | Community forum posts and comments             |
