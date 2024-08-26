import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: 'mxslurp.click',
    port: 2525,
    secure: false, // Set to true if using SSL
    auth: {
        user: 'e6597262-595c-44d6-b6df-c6d3dc695d1f@mailslurp.net',
        pass: 'I6AP9eUXA2HbP0pYkE2IgY8OuVbaKqUB' // Your actual password
    }
})

export default transporter;