# 📂 jsd12_week_03

This week focuses on **Front-end Foundations** with HTML5 and **Intermediate JavaScript** concepts, specifically focusing on functions and interactive CLI programs.

---

## 📑 Topics Covered

### 1. HTML101: Web Structure 🏗️
- **Semantic HTML**: Using tags like `<h1>` to `<h3>`, `<p>`, and lists (`<ul>`, `<ol>`) correctly.
- **Hyperlinks & Navigation**: Implementing internal page anchors (`#id`) and external links with `target="_blank"`.
- **Text Formatting**: Practicing with semantic tags like `<strong>`, `<b>`, `<del>`, `<mark>`, and typography elements like `<sup>` and `<sub>`.
- **Media Integration**: Understanding how to include images and video (`.jpg`, `.mp4`).

### 2. JavaScript Functions & Logic ⚙️
- **Function Types**: Exploring Declarative functions and Arrow functions.
- **Interactive Programs**: 
    - Using the `readline` module for Node.js to handle user input.
    - Implementing unit conversion logic (Kilograms to Pounds and vice-versa).
- **Data Manipulation**: Practicing `parseFloat()` and `toFixed()` for precise numeric output.

---

## 📁 Repository Structure

### 🌐 `/html`
- `index.html`: The main landing page demonstrating HTML tags and navigation.
- `form.html`: Exercises on user input fields.
- `table.html`: Practice with structured data display.
- `my-personal-profile.html`: A personal project applying HTML skills.

### 📜 `/js-functions`
- `convert-temp.js`: Temperature conversion logic.
- `arrow-functions.js` & `declarative-function.js`: Comparing different JS syntaxes.
- `my-example-program.js`: CLI-based weight converter using `readline`.

---

## 💻 Code Highlight: Weight Converter

```javascript
// Example of the logic implemented this week
function kgToPounds(kg) {
  return kg * 2.20462;
}

// User interaction via Node.js CLI
rl.question("Enter weight: ", function (weightInput) {
  const weight = parseFloat(weightInput);
  // ... conversion logic
});
