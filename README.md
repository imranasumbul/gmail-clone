# Gmail Clone

This is a full-stack Gmail clone application built using React, Vite, TypeScript, Tailwind CSS on the frontend, and Express, Prisma, and TypeScript on the backend.

## Table of Contents


- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Technologies Used](#technologies-used)
- [License](#license)



## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 14 or later
- **npm**: Comes with Node.js
- **Prisma**: Installed globally (optional, for managing the database)


## Installation

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/imranasumbul/gmail-clone.git
cd gmail-clone

```

## Backend Setup

- Navigate to the server directory:

```bash
cd server
```

- Install all the dependencies

```bash
npm install
```
- If you haven't set up your database, you'll need to configure Prisma by editing the prisma/schema.prisma file and setting your database URL in an .env file.

- Initialize prisma 

```bash
npx prisma init
```

 