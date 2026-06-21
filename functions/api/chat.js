export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            reply: "Method not allowed"
        });
    }

    try {

        const { message } = req.body;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_KEY}`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text:
`You are NoorAI, a luxury Indian bridal beauty assistant.

Rules:
- Be elegant and friendly.
- Keep answers under 120 words.
- Use emojis naturally.

Question:
${message}`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        const reply =
            data.candidates?.[0]
            ?.content?.parts?.[0]
            ?.text ||
            "Sorry, I couldn't generate a reply.";

        return res.status(200).json({
            reply
        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({
            reply:
            "❌ NoorAI is unavailable right now."
        });

    }

}