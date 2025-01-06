# Webshop Project

A simple webshop application built using React, TypeScript, Node.js, and PostgreSQL. This project is fully dockerized for easy deployment and testing.

## Features

### Frontend
- **React with TypeScript** for building the UI.
- **Pages**:
  - **Home**: Displays a list of products.
  - **Cart**: Shows items added to the cart and the total price.
  - **Order Confirmation**: Displays the order summary or errors after purchase.
- **State Management**: Handled using useState and useEffect hooks.

### Backend
- **Node.js with Express** (TypeScript) for handling APIs.
- **TypeORM** for database interaction.
- **REST API** endpoints to fetch products and handle orders.

### Database
- **PostgreSQL** for storing product information and handling inventory updates.
- Seeded with initial data via an init.sql script.

### Dockerized Setup
- Runs in isolated containers for easy deployment.
- Three containers
  - Frontend: Runs the React app.
  - Backend: Runs the Node.js server.
  - Database: Hosts the PostgreSQL database.

## Prerequisites
- Docker installed on your machine.
- Basic knowledge of Node.js and React is helpful but not required.

## Setup

### Clone the Repository:
bash
git clone https://github.com/Klaszlo5/webshop.git
cd webshop


### Start the Application with Docker Compose:
bash
docker-compose up --build


### Open the App in Your Browser:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3001](http://localhost:3001)

### Root Directory
/webshop
  /database
  /frontend
  /backend
  .dockerignore
  .gitignore
  docker-compose.yml      # Main Docker Compose configuration
  README.md               # Project documentation


## API Endpoints

### Items
- **GET** /api/items: Fetch a list of all available products.

### Orders
- **POST** /api/order: Place an order by providing product IDs and quantities.

## Running the App

### With Docker
- Open Command Prompt or PowerShell.
- **Build and run all containers:**
  docker-compose up --build

- **Stop containers:**
  docker-compose down
  
  - **Install Backend Dependencies**
  In the /backend directory, run:
		- npm install
  - **Install Frontend Dependencies**
  In the /frontend directory, run:
		- npm install
  - then in backend:
		- npm run start
  This will start the backend server on http://localhost:3001.

  - **Start the Frontend**
  In the /frontend directory, run:
		- npm run start
  This will start the frontend server on http://localhost:3000.
  # Run Locally (Without Docker)
   **Clone the Repository:**
   git clone https://github.com/Klaszlo5/webshop.git
   cd webshop
# Set Up the Database:

1. Install and start PostgreSQL.
2. Run the init.sql script located in /database to seed the database.

	- Install Dependencies:
Backend:
	**cd backend**
	**npm install**
	**npm run start**
Frontend:
	**cd frontend**
	**npm install**
	**npm run start**

Access the App:
Frontend: **http://localhost:3000**
Backend: **http://localhost:3001**

## Error Handling

### Frontend
- Displays errors for failed API calls.
- Prevents orders if there’s insufficient stock.

### Backend
- Handles database connection failures.
- Rejects orders when requested stock is unavailable.
