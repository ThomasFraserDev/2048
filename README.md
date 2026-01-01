# 2048
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)

An implementation of the 2048 game, with more in depth stats and modes/modifiers. The standard game is played on a 4x4 board, starting with two randomly placed tiles and more generated after each move. Merge two tiles with the same number into one to increase your score, and the game ends when no more moves are possible. This project was built with React, Vite and Tailwind CSS and features multiple game modes, themes, modifiers and advanced stats.

## Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center;">
<img width="500" alt="Tropical theme limitless screenshot" src="https://github.com/user-attachments/assets/3bf551db-17c1-43cd-bbb1-c6dcb951ad8c" />
<img width="500" alt="Christmas theme limited screenshot" src="https://github.com/user-attachments/assets/5ffb6f5b-78e0-45b9-89c0-8c66df11c8b3" />
<img width="500" alt="Default theme timed screenshot" src="https://github.com/user-attachments/assets/e4ac577a-35d1-4b09-bbab-17fb66478bb5" />
</div>

## How to play

1. Use the arrow keys to shift the tiles on the board
2. Tiles with the same value will merge when they collide, increasing score
3. After each move, a new 2 or 4 value tile will randomly appear on the board
4. Aim to reach the highest score as possible!

## Features

### Game Modes
- Limitless Mode - Aim for the highest score, with infinite moves and time
- Limited Mode - Aim for the highest score, with only 50 moves
- Timed Mode - Aim for the highest score, with only 60 seconds

### Themes
- Default
- Christmas
- Tropical

### Modifiers
- Default
- Spin To Win
- Upside Down

### Stats
- Score
- Moves
- Average Score Per Move
- Average Tile Value
- Last Move
- Last Move Score
- Best Tile
- Highest Score

## Upcoming Features

- [ ] More themes
- [ ] More modifiers

## Download and Run

### Prerequisites

- **Node.js** 18+ and npm
  
### Run Locally
```bash
git clone https://github.com/ThomasFraserDev/2048.git
cd 2048
npm install
npm run dev
```

## Contributing

Contributions are welcome! :]

If you’d like to help improve this project, please follow these steps:
1. Fork the repository and create a new branch from main.
2. For UI changes, screenshots or short clips are encouraged.
3. Make sure the project runs locally:
```bash
npm install
npm run dev
```
4. Open a Pull Request with:
- A clear description of what you changed or added 
- The reasoning behind it

If you’re unsure about an idea or want feedback before starting, feel free to open an issue to discuss it first.

Thanks for helping make this 2048 implementation better! 💜

## License

This software is licensed under the MIT license.
