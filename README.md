# system-zarzadzania-aktami

Aplikacja kalkulatora z integracją Supabase do przechowywania danych i automatycznym deploymentem na Netlify

## Funkcjonalności
- Podstawowe operacje matematyczne
- Zapisywanie historii obliczeń w Supabase
- Automatyczny deployment na Netlify

## Wymagania
- Node.js
- Konto Supabase
- Konto Netlify

## Instalacja
1. Sklonuj repozytorium
2. Zainstaluj zależności: `npm install`
3. Uruchom aplikację: `npm start`

## Konfiguracja
Utwórz plik `.env` z następującymi zmiennymi:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_KEY=your_supabase_key
