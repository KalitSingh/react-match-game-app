# 🎯 Match Game (React App)

A fast-paced image matching game built using React.js. Test your observation skills by matching the correct thumbnail with the displayed image before time runs out!

---

## 📸 Project Preview

![Match Game UI](/match-game-img.png)

---

## 🚀 Live Demo
*(Coming soon — will update after deployment)*

---

## 📌 Features

- 🖼️ Dynamic image matching gameplay  
- ⏱️ 60-second countdown timer  
- 📂 Category-based filtering (Fruits, Animals, Places)  
- 🎯 Score tracking system  
- ❌ Instant game over on wrong selection  
- 🔁 Restart game functionality  
- ⚡ Image preloading for faster performance  
- 🔒 Conditional navigation (checkbox validation before starting)

---

## 🕹️ How to Play

- A **big image** is displayed at the top  
- Select the **matching thumbnail** from the options below  
- ✅ Correct match → score increases + new image appears  
- ❌ Wrong match → game over  
- ⏳ You have **60 seconds** to score maximum points  

---

## 🧠 Tech Stack

- **Frontend:** React.js  
- **Routing:** React Router  
- **Styling:** CSS  
- **State Management:** React State  
- **Performance Optimization:** Image Preloading  

---

## ⚡ Performance Optimization

All images are preloaded at the start to ensure instant switching:

```js
componentDidMount() {
  imagesList.forEach(each => {
    const img = new Image()
    img.src = each.imageUrl
  })
}
```
---

## 🔐 Conditional Navigation

User must accept instructions before starting:

```js
const handlePlayClick = () => {
  if (isChecked) {
    navigate("/matchgame")
  } else {
    alert("Please accept the instructions first!")
  }
}
```
---

## 📂 Project Structure 

src/
│
├── components/
│   ├── Navbar
│   ├── TabsComponent
│   ├── AlbumComponent
│   ├── GameoverComponent
│
├── pages/
│   ├── InstructionPage
│   ├── MatchGameMain
│
├── App.js
└── App.css 

--- 


## 🛠️ Installation & Setup 

```bash
git clone https://github.com/your-username/match-game.git
cd match-game
npm install
npm start
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Kalit Singh


--- 

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
