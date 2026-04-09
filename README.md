# UNI Chatbot

This is a local AI chatbot for study use.
It can answer from your files and from your local catalog data.

Idea credit: OIJX.
Thank you OIJX. You are a legend.

## What this project is

- a backend API (FastAPI + SQLite)
- a frontend website (React + Vite)
- a local AI model runtime (Ollama)
- file upload + link ingestion + chat history

## What it does

- normal chat with streaming response
- use uploaded files as context
- use local catalog data as background context
- ingest normal URLs
- ingest Google Sheets links
- save conversations and sources

## What you need to install

Install these first:

1. Python 3.11+  
2. Node.js 18+ (Node 20 recommended)  
3. Ollama  
4. Git (optional, for version control)

## One-time setup

### 1) Create env files

```powershell
Copy-Item backend/.env.example backend/.env
Copy-Item frontend/.env.example frontend/.env
```

### 2) Install backend packages

```powershell
python -m venv .venv312
.\.venv312\Scripts\Activate.ps1
pip install -r backend/requirements.txt
```

### 3) Install frontend packages

```powershell
cd frontend
npm install
cd ..
```

### 4) Pull Ollama models

```powershell
ollama pull qwen2.5:7b
ollama pull nomic-embed-text
```

## Start the app

Use the root scripts:

- `./start` -> start backend + frontend
- `./status` -> show running status
- `./stop` -> stop backend + frontend
- `./reset` -> clear runtime data but keep catalog folder
- `./clean` -> reset + cleanup logs/build files

Frontend URL:

- `http://127.0.0.1:5173`

## What to change before real use

Open `backend/.env` and change at least:

1. `APP_NAME`  
2. `ADMIN_PASSWORD` (important)  
3. `CORS_ALLOW_ORIGINS` (set your real frontend domain in production)  
4. `OLLAMA_CHAT_MODEL` / `OLLAMA_EMBEDDING_MODEL` if you use different models  

Open `frontend/.env` and set:

1. `VITE_API_BASE` (your backend URL)

## Folder changes you should make

### Catalog data

- folder: the path in `backend/.env` under `CATALOG_DIR`
- put your own PDF catalog files there
- for public repos, keep real private files out

### Uploaded files

- uploads are stored in `backend/data/uploads/`
- runtime DB is in `backend/data/runtime/`

You usually do not edit those manually.
The app manages them.

## Google Sheets links

You can paste a Google Sheets link in Settings.

Supported style:

- `https://docs.google.com/spreadsheets/d/<id>/edit...`
- optional `#gid=<tab_id>`

How it works:

1. tries public read first
2. if private, it needs backend credentials

Private mode env keys:

- `GOOGLE_SHEETS_SERVICE_ACCOUNT_FILE`
- `GOOGLE_SHEETS_SERVICE_ACCOUNT_JSON`
- `GOOGLE_SHEETS_API_TIMEOUT_SECONDS`

Keep these secrets only in backend `.env`.
Never put secrets in frontend files.

## Run tests

```powershell
.\.venv312\Scripts\Activate.ps1
pytest backend/tests -vv
```

## Build frontend

```powershell
cd frontend
npm run build
cd ..
```

## Quick troubleshooting

If chat does not answer:

1. check Ollama is running
2. check models are pulled
3. run `./status`
4. check `backend/.env` and `frontend/.env`

If frontend cannot reach backend:

1. check `VITE_API_BASE` in `frontend/.env`
2. check `CORS_ALLOW_ORIGINS` in `backend/.env`

## License

Educational Non-Commercial License (ENCL) v1.0

- you can use, edit, and share for study/non-commercial use
- selling or paid commercial use is not allowed

---

Welcome and have fun building your own version.
If something breaks, do not panic, just check the setup steps again.
