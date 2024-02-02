export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { user_url } = req.body;

    if (!user_url) {
        return res.status(400).json({ message: 'Missing user url' })
    }

    try {
        // const res = await fetch(`https://flask-hello-world-new-neon.vercel.app/lesson-planner`, {
        const res = await fetch(`https://flaskapinextjs.vercel.app/lesson-planner`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_url })
        });

        const data = await res.json();

        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wront, please try again later." })
    }
    
}