import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;">
        <h1 style="color: green; font-weight: bold;">Hello i'm Hala Mohamed, DevOps Engineer</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`\x1b[36mServer is running on port \x1b[33m${port}\x1b[0m`);
});