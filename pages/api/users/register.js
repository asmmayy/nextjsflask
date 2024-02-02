export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { email, password, teacher_type } = req.body;

    if (!email || !password || !teacher_type) {
        return res.status(400).json({ message: 'Missing email, password or teacher_type' })
    }

    try {
        // const response = await fetch("https://flask-hello-world-new-neon.vercel.app/signup", {
        const response = await fetch("https://flask-hello-world-omega-ivory.vercel.app/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, teacher_type })
        })

        if (response.status !== 200 || response.status !== 201) {
            const data = await response.json();
            return res.status(response.status).json(data);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wront, please try again later." })
    }
}