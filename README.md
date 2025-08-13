# Simple Node.js and Express REST API

A beginner-friendly REST API built with **Node.js** and **Express**.  
It includes basic routes for fetching, adding, and deleting tasks.  
Perfect for anyone learning backend development or looking for a quick starter template.

---

## 🚀 Live Demo
You can test the API live here:  
**[https://node-express-rest-api-starter.onrender.com/tasks](https://node-express-rest-api-starter.onrender.com/tasks)**  

---

## Read Article Here  
**[building-a-simple-rest-api-with-nodejs-and-express](https://tobechiduru.hashnode.dev/building-a-simple-rest-api-with-nodejs-and-express)**  

---

## 📂 Project Structure
```bash
node-express-rest-api-starter/
│ package.json
│ server.js
│ README.md
└── routes/
└── tasks.js

---
```

## 📌 Features
- **GET** `/tasks` → Fetch all tasks
- **POST** `/tasks` → Add a new task
- **DELETE** `/tasks/:id` → Delete a task by ID
- JSON-based API
- Clean and modular route structure

---

## 🛠 Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tobe01/node-express-rest-api-starter.git
   cd node-express-rest-api-starter

   
## Install dependencies:
```bash
npm install

---
```
## Start the server:
```bash
node server.js

```
API will be running at: http://localhost:3000

📡 API Endpoints
Method	   Endpoint	         Description	             Example Request Body

GET	      /tasks	         Get all tasks	                 -
POST	      /tasks	         Create a new task 	    { "title": "New Task" }
DELETE	   /tasks/:id	      Delete a task by ID	           -



🧪 Testing the API
Using Browser:

Visit http://localhost:3000/tasks to view all tasks.

Using Postman or curl:

GET:
```bash
curl http://localhost:3000/tasks

```
POST:
```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Learn Express"}'

```
DELETE:
```bash
curl -X DELETE http://localhost:3000/tasks/1

```

📄 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute it.

🙌 Contributing
Pull requests are welcome.
If you find any bugs or want to suggest improvements, please open an issue.

✍ Author
Tobechi Duru
GitHub: @Tobe01
Hashnode: [https://tobechiduru.hashnode.dev/]
LinkedIn: [https://linkedin.com/in/tobechiduru]
