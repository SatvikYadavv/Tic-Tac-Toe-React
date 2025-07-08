# Tic-Tac-Toe React App

A feature-rich, animated Tic-Tac-Toe game built using **React**, **Material-UI (MUI)**, and **Lottie** animations. This game is styled with custom CSS and includes real-time sound effects, score tracking via localStorage, responsive design, and links to other React projects.

---

## ✨ Features

* Two-player game (Player X and Player O)
* Scoreboard with localStorage persistence
* Animated win effects (Lottie firework animations)
* Audio cues for each move, win, and reset
* Victory line animation for win highlight
* Pause/resume and full game reset functionality
* Responsive layout with mobile support
* Drawer navigation to other hosted projects
* Footer with contact links (GitHub, WhatsApp, LinkedIn, Email)

---

## 🚀 Live Demo

Play the game online here: [Play Tic-Tac-Toe]

---

## 📁 Project Structure

```bash
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js             # Main Game Logic
│   ├── App.css            # Styling for Game
│   ├── Components/
│   │   ├── Footer.js
│   │   ├── NavBar2.js     # Responsive AppBar with Drawer
│   │   └── SquareMesh.js  # Game Cells
│   ├── Assests/           # Audio files for game effects
│   ├── data.json          # Lottie animation data
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
```

---

## 📅 How to Use

### Prerequisites

* Node.js (v18 or above)
* npm (v9 or above)

### Installation

```bash
git clone https://github.com/your-username/tic-tac-toe.git
cd tic-tac-toe
npm install
npm start
```

### Run Production Build

```bash
npm run build
```

---

## 🎮 How to Play

1. Click any square to mark X or O.
2. Players alternate turns.
3. First player to align 3 marks (horizontally, vertically, or diagonally) wins.
4. Win triggers animation and audio effects.
5. Score auto-saves and displays.
6. Use the reset buttons to clear board or scores.

---

## 🔧 Customisation

| Feature         | How to Change                          |
| --------------- | -------------------------------------- |
| Win animations  | Replace `data.json` (Lottie file)      |
| Sound effects   | Replace files in `src/Assests/` folder |
| Project links   | Edit `NavBar2.js` drawer list          |
| Footer details  | Update social links in `Footer.js`     |
| Colors & styles | Modify `App.css` and component styles  |

---

## 👥 Developer Info

**Author:** Satvik Yadav

* GitHub: [SatvikYadavv](https://github.com/SatvikYadavv)
* LinkedIn: [Satvik Yadav](https://www.linkedin.com/in/satvik-yadavin/)
* WhatsApp: +91 8175855161
* Email: [yadavsatvik8175@gmail.com](mailto:yadavsatvik8175@gmail.com)

---

## ✉ License

This project is licensed under the MIT License.

from where did you gathered the contact details in the code
