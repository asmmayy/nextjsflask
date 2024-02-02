import link from "@/config";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { uid } = req.query;

    if (!uid) {
        return res.status(400).json({ message: 'Missing fields' })
    }

    try {
        // const response = await fetch(`https://flask-hello-world-new-neon.vercel.app/get-user-status?user_id=${uid}`, {
        const response = await fetch(`${link}/get-user-status?user_id=${uid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.status !== 200) {
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