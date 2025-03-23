# Next.js & Docker Todo App 🚀

This is a small **Todo App** built with **Next.js** to learn **Docker** containerization and deployment. The goal of this project is to understand how to:

- Set up a **Next.js** application.
- Containerize the app using **Docker**.
- Use **Docker Compose** for managing services.
- Optimize Docker images for production.

## Tech Stack

- **Next.js** – React framework for building web applications.
- **Docker & Docker Compose** – Containerization and service management.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Installation & Running the Project

1. **Clone the repository**
   ```sh
   git clone https://github.com/iradukunda12/TodoApp.git
   cd nextjs-docker-todo
   ```

2. **Build and run the Docker container**
   ```sh
   docker-compose up --build
   ```

3. Open your browser and visit:  
   `http://localhost:3000`

## Docker Commands

- **Build Docker Image:**
  ```sh
  docker build -t TodoApp.
  ```

- **Run Docker Container:**
  ```sh
  docker run -p 3000:3000 TodoApp
  ```

- **Stop Containers:**
  ```sh
  docker-compose down
  ```

## License

This project is licensed under the MIT License.
