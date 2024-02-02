import link from "@/config";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { email, password, teacher_type } = req.body;

    if (!email || !password || !teacher_type) {
        return res.status(400).json({ message: 'Missing fields' })
    }

    try {
        // const response = await fetch("https://flask-hello-world-new-neon.vercel.app/login", {
        const response = await fetch("https://flaskapinextjs.vercel.app/login", {
        // const response = await fetch(`${link}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, teacher_type })
        });

        if (response.status !== 200) {
            const data = await response.json();
            console.log(data,"login 200")
            return res.status(response.status).json(data);
        }

        const data = await response.json();
        console.log(data,"login")
        return res.status(200).json(data.data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wront, please try again later." })
    }
}