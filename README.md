# JOB FEED With Server-side Filtering
The purpose of this project is to demonstrate the use of NestJS for backend and API server and Vite, Vue and React for the frontend.

## Description
The project is a Job Feed with Server Side Filtering. There are two folders in the project itself. The frontend and the backend. 

## Getting Started

### Dependencies
* **Operating System:** Windows 10, macOS 12+, or any Linux Distro
* **Node.js:** [v21.0.0 or higher](https://nodejs.org)
* **Package Manager:** [npm](https://npmjs.com)
* **Database: ** [for production: mysql](https://mysql.com) [for development: sqlite] (https://sqlite.org) 
* **SSL/TLS development certificate tool** [for windows and mac: mkcert](https://mkcert.org) [for linux: OpenSSL](https://openssl.org) 

### Libraries and Frameworks

#### Backend

* ** NestJS:** [^11.0.0](https://nestjs.com)

#### Frontend

* ** Vite:** [^8.0.4](https://vite.dev)
* ** React:** [^19.2.5](https://react.dev)
* ** Vue:** [^3.5.32](https://vuejs.org)
* ** TailwindCSS:** [^4.2.2](https://tailwindcss.com)
* ** Tanstack/react-query:** [^5.97.0](https://tanstack.com/query)

### Installing

#### Cloning the Project Repository

1. Clone the repository

    ```
    git clone https://github.com/jubzledesma/job-feed-with-filtering.git
    ```

2. Go into the project folder

    ```
    cd {project folder}/
    ```

#### Setting up the backend

To set up the backend we would first need to install the dependencies and then create a certificate.

##### Installing the dependencies

1. Go into the backend folder

    ```
    cd job_feed_backend
    ```

2. Install dependencies

    ```
    npm install
    ```

##### Environment Files

an example .env.example file is inside the job_feed_backend folder. you need to create a .env.development and .env.production copy.
For running in production make sure to edit and enter the information required. The project uses MySQL and you would need that installed to run in production.

```
cp .env.example .env.development
cp .env.example .env.production
```

##### Creating Certificates 

1. Go into the backend folder certs folder

    ```
    cd job_feed_backend/certs
    ```
2. Generate your Certificates

    1. For Windows and Mac

    ```
    mkcert server 127.0.0.1 
    ```

    2. For Linux

    ```
    openssl req -x509 -newkey rsa:2048 -nodes -keyout server.pem -out server.pem -days 365

    ```

#### Setting up the frontend

##### Installing the dependencies

1. Go into the frontend

    ```
    cd job_feed_frontend
    ```

2. Install dependencies

    ```
    npm install
    ```

### Executing the program in dev

#### Start the backend server in dev mode

Although runnin in dev mode uses sqlite. It places all items in memory.

1. Go into the backend folder

    ``` 
    cd job_feed_backend
    ```

2. Start in dev mode

    ```
    npm run start:dev
    ```



#### Start the frontend in dev mode

1. Go into the frontend folder

    ```
    cd job_feed_frontend
    ```

2. Install dependencies

    ```
    npm run start:dev
    ```

3. Access the Frontend in the browser by going to localhost:3000


### Executing the program in Production

This project requires mysql server to be installed.

## Authors
[@JubzLedesma](https://github.com/jubzledesma)
## License

This project is under the MIT Licenses

## Acknowledgements


