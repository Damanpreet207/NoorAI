export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const { message } = req.body;

        const prompt = `
You are NoorAI, a luxury Indian bridal beauty assistant.

Your expertise:
- Bridal skincare
- Makeup looks
- Hairstyles
- Jewellery styling
- Wedding preparation
- Beauty budgets

Rules:
- Keep answers under 120 words.
- Use emojis naturally.
- Give elegant and practical advice.

Bride's question:
${message}
`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [
                                {
                                    text: prompt
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
            "✨ NoorAI is currently unavailable. Please try again.";

        return res.status(200).json({
            reply
        });

    } catch (error) {

        console.error("NoorAI API Error:", error);

        return res.status(500).json({
            reply: "❌ NoorAI is facing a technical issue."
        });
    }
}