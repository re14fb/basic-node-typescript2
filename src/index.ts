import express, { Application, Request, Response } from "express";
const app: Application = express();

// Server port
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    let age: number = 84;

    res.json({
        name: "Renata Ferreira",
        age: age,
        email: "re@email.com",
        phone: 9999999999,
        country: "Brazil"
    });
});

app.listen(port, (): void => console.log(`Server running http://localhost:${port}`));