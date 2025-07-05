
# 🌐 Unit Converter PWA

A clean and responsive Progressive Web App (PWA) built using **HTML**, **Tailwind CSS**, and **JavaScript** that lets users convert between different units of length such as meters, kilometers, miles, and feet. You can expand this to support other categories like mass, temperature, time, etc.

---

## 📁 Folder Structure

```

unit/
├── index.html        # Main HTML UI
├── style.css         # Custom styles (mostly optional, Tailwind does the heavy lifting)
└── main.js           # JS logic for conversion



---

## 🚀 Features

- ✅ Converts between Meter, Kilometer, Mile, and Foot
- ✅ Built using Tailwind CSS for modern UI
- ✅ Responsive and mobile-friendly
- ✅ Easy to customize and extend
- ✅ Minimal, clean code structure
- ⚙️ Ready for PWA setup (add manifest + service worker)

---

## 🛠️ How to Use

1. Clone or download this repo.
2. Open `index.html` in any browser.
3. Enter a value, choose units, hit **Convert**.
4. Boom! 🎉 See the result instantly.

---

## 📦 To-Do (Optional Upgrades)

- [ ] Add support for Mass, Temperature, Time, etc.
- [ ] Implement offline support (PWA features)
- [ ] Add history of recent conversions
- [ ] Share/Copy result feature

---

## 🧠 Conversion Formula

All values are internally converted to **meters** first, then to the target unit using this formula:

```

result = (inputValue / fromRate) \* toRate

```

---

## 👨‍💻 Author

Made with 💙 by Dus  
*Tech enthusiast & aspiring engineer*

---

## 📜 License

This project is open-source and free to use for any purpose.
```
