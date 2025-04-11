This project is a basic **logger-middleware**  that implements **custom logging** using the popular middleware library **Morgan**. It logs details about incoming HTTP requests, such as method, URL, response time, client IP, and content type, to the console.

---

## 🚀 Features

- 🌐 Built with **Express.js**
- 🛠️ Uses **Morgan** middleware for logging
- 🧾 Custom Morgan tokens (e.g., `:type` for content-type)
- 📥 Handles multiple routes (`/` and `/post`)
- 📊 Displays key request information:
  - HTTP Method
  - URL
  - Response time
  - IP Address
  - Request content type
  - Timestamp

---

## ⚔️ Challenges Overcome
1. Multiple Middleware per Route
Issue: Morgan didn’t log for both routes unless placed correctly.

✅ Solution: You learned that Morgan can be passed as a middleware before route handlers and needs to be placed inside the route definition if you want different formats per route.

## 2. Custom Token Creation
Issue: Logging Content-Type wasn’t directly available.

✅ Solution: You extended Morgan with a custom token :type using req.headers['content-type'].

## 3. Differentiated Log Formats
Issue: You wanted / and /post to log different details.

✅ Solution: You applied Morgan per route instead of globally, allowing custom formats for each one.

## 📌 Future Improvements
Add global logging for all routes

Write logs to a file using fs or a logging package like winston

Implement logging levels (info, debug, error)

Add more endpoints to test the logger

🧑‍💻 Author
Surya Annadurai
Aspiring Full Stack Developer
Passionate about backend and system design
