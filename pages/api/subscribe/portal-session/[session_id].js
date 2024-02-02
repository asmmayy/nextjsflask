export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { session_id } = req.query;

    if (!session_id) {
        return res.status(400).json({ message: 'Missing headers' })
    }

    try {
        let formData = new FormData();
        formData.append("session_id", session_id);
        // const response = await fetch("https://flask-hello-world-new-neon.vercel.app/create-portal-session", {
        const response = await fetch("https://flaskapinextjs.vercel.app/create-portal-session", {
            method: 'POST',
            body: formData
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