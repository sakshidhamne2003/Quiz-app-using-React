# 🧠 Quiz Application (React + Vite)

A simple and interactive **Quiz Application** built using **React (Functional Components)** and **Vite**.  
This app displays multiple-choice questions (MCQs), calculates the final score, and allows users to restart the quiz.

---

## 🚀 Features

- Shows **one question at a time**
- Multiple Choice Questions (MCQs)
- User can select **only one option**
- Options are **disabled after selection**
- Shows **correct / incorrect feedback**
- **Progress bar** to track quiz progress
- **Final score display**
- **Restart Quiz** button
- Clean and responsive UI

---

## 🛠️ Tech Stack

- React (Functional Components)
- useState Hook
- Vite
- HTML, CSS, JavaScript
- No backend
- No external libraries


## 📂 Project Structure
src/
├── App.jsx
├── App.css
├── main.jsx
└── index.css


---
## 📊 Quiz Data Format

```js
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer: 1
  }
];

▶️ How to Run the Project
1.Clone the repository
 git clone <your-repository-link>
2. Go inside the project folder
 cd quiz-app
3. Install dependencies
npm install
4. Start the development server
npm run dev
5.Open browser and go to
http://localhost:5173

🔁 Restart Quiz Functionality
The Restart Quiz button resets:
Current question index
Selected option
Score
Feedback state
This is implemented using React useState.

❌ Common Mistakes Avoided
Mutating state directly
Showing all questions at once
Not resetting state on restart
Using class components

🎓 Learning Outcomes
React functional components
useState hook usage
Conditional rendering
Event handling
Basic UI design with CSS

🙌 Author
Sakshi Dhamne
Student | React Developer

⭐ If you like this project, give it a star on GitHub!



