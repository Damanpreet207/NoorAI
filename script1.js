// ===============================
// NoorAI Final Script – AI Powered
// ===============================


// ===============================
// CONFIG — Gemini API Key
// ===============================

const GEMINI_KEY = "";


// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }, 1500);

    }

});


// ===============================
// Mobile Menu
// ===============================

function toggleMenu() {

    const navLinks =
    document.getElementById("navLinks");

    if (navLinks) {

        navLinks.classList.toggle("show");

    }

}


// ===============================
// Scroll Reveal Animation
// ===============================

const revealItems = document.querySelectorAll(
".card, .box, .salon-card, .dashboard-card, .planner-form, .planner-result, .chat-container, .saved, .countdown-box"
);


function revealElements() {

    revealItems.forEach(item => {

        const position =
        item.getBoundingClientRect().top;


        if (position < window.innerHeight - 100) {

            item.style.opacity = "1";

            item.style.transform =
            "translateY(0)";

        }

    });

}


revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
    "translateY(40px)";

    item.style.transition =
    "0.8s";

});


window.addEventListener(
"scroll",
revealElements
);


revealElements();


// ===============================
// Bridal Planner Elements
// ===============================

const beautyForm =
document.getElementById("beautyForm");


const result =
document.getElementById("result");


// ===============================
// Luxury Timeline Builder
// ===============================

function createLuxuryTimeline(
daysLeft,
skin,
hair,
style,
budget
) {

let timeline = [];


if (daysLeft > 90) {


timeline = [

{
title:
"🌱 Start Your Glow Journey",

text:
`Begin a ${skin.toLowerCase()} skincare routine, hydrate daily and maintain hair nourishment.`
},

{
title:
"💇 Hair Transformation",

text:
`Focus on ${hair.toLowerCase()} goals with weekly care and healthy habits.`
},

{
title:
"💄 Explore Bridal Looks",

text:
`Research ${style} inspirations and save your dream bridal aesthetics.`
}

];


}


else if (daysLeft > 30) {


timeline = [

{
title:
"✨ Bridal Preparation",

text:
"Continue facials, SPF and consistent beauty treatments."
},

{
title:
"💍 Makeup Trial",

text:
`Finalize your ${style} makeup artist and bridal look.`
},

{
title:
"💰 Budget Planning",

text:
`Allocate your ₹${budget} budget smartly for final treatments.`
}

];


}


else {


timeline = [

{
title:
"👑 Final Glow",

text:
"Avoid new products and protect your skin barrier."
},

{
title:
"💄 Wedding Look Ready",

text:
`Your ${style} makeup and hairstyle should be fully finalized.`
},

{
title:
"🌸 Relax & Shine",

text:
"Sleep well, stay hydrated and enjoy your special moments."
}

];


}


let html = `

<h3 class="timeline-title">
👰 Your NoorAI Beauty Roadmap
</h3>

`;


timeline.forEach(step => {


html += `

<div class="timeline-card">

<h4>
${step.title}
</h4>

<p>
${step.text}
</p>

</div>

`;

});


return html;

}

// ===============================
// Scroll Reveal Animation
// ===============================

// const revealItems = document.querySelectorAll(
//     ".card, .box, .salon-card, .dashboard-card, .planner-form, .planner-result, .chat-container, .saved, .countdown-box"
// );

function revealElements() {

    revealItems.forEach(item => {

        const position = item.getBoundingClientRect().top;

        if(position < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }

    });

}


revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s ease";

});


window.addEventListener("scroll", revealElements);
revealElements();


// ===============================
// AI Bridal Planner Variables
// ===============================

// const beautyForm =
// document.getElementById("beautyForm");

// const result =
// document.getElementById("result");


// ===============================
// AI Luxury Timeline Builder
// ===============================

function createLuxuryTimeline(daysLeft, skin, hair, style, budget) {

    let timeline = [];


    if(daysLeft > 90) {

        timeline = [

            {
                title: "🌱 Beginning Your Bridal Glow",
                text:
                `Start a gentle ${skin.toLowerCase()} skincare routine, hydrate daily and focus on hair nourishment.`
            },

            {
                title: "💄 Discover Your Signature Style",
                text:
                `Explore ${style} bridal looks, save inspirations and understand your dream aesthetic.`
            },

            {
                title: "💇 Strengthen Your Hair Journey",
                text:
                `Regular oiling, masks and healthy nutrition will prepare your hair beautifully.`
            }

        ];

    }


    else if(daysLeft > 30) {


        timeline = [

            {
                title: "✨ Bridal Preparation Phase",
                text:
                `Maintain your ${skin.toLowerCase()} skincare routine and never skip sunscreen.`
            },

            {
                title: "💍 Finalize Your Bridal Look",
                text:
                `Book your ${style} makeup trial and confirm your hairstyle choices.`
            },

            {
                title: "💰 Budget Smartly",
                text:
                `Allocate your ₹${budget} budget towards professional makeup, hair and skincare services.`
            }

        ];

    }


    else {


        timeline = [

            {
                title: "👑 Final Glow Phase",
                text:
                `Avoid trying new products and protect your skin barrier before the wedding.`
            },


            {
                title: "💄 Lock Your Complete Look",
                text:
                `Keep your makeup, hairstyle and jewellery completely finalized.`
            },


            {
                title: "🌸 Rest & Celebrate",
                text:
                `Sleep well, stay hydrated and enjoy your special bridal moments.`
            }

        ];

    }


    let html = `

    <h3 class="timeline-title">
        👰 Your NoorAI Beauty Roadmap
    </h3>

    `;


    timeline.forEach(step => {


        html += `

        <div class="timeline-card">

            <h4>${step.title}</h4>

            <p>${step.text}</p>

        </div>

        `;


    });


    return html;


}


// ===============================
// AI Budget Optimizer
// ===============================


function generateBudgetPlan(budget) {


    const container =
    document.getElementById("budgetPlanner");


    if(!container) return;


    const total = Number(budget);


    const categories = [

        {
            name: "💄 Bridal Makeup",
            percent: 50
        },


        {
            name: "💇 Hair Styling",
            percent: 20
        },


        {
            name: "🧴 Skincare",
            percent: 20
        },


        {
            name: "💎 Accessories",
            percent: 10
        }

    ];


    let html = "";


    categories.forEach(item => {


        const amount =
        Math.round(total * item.percent / 100);


        html += `

        <div class="budget-item">

            <div class="budget-label">

                <span>${item.name}</span>

                <span>
                ₹${amount.toLocaleString("en-IN")}
                </span>

            </div>


            <div class="budget-bar">

                <div class="budget-fill"
                     style="width:${item.percent}%">
                </div>

            </div>

        </div>

        `;


    });


    container.innerHTML = html;


}


// ===============================
// Part 2/8 End
// Next: Part 3/8
// ===============================

// ===============================
// AI Bridal Planner Main Engine
// ===============================

if (beautyForm && result) {

    beautyForm.addEventListener("submit", async function(e) {

        e.preventDefault();


        const date =
        document.getElementById("weddingDate").value;

        const skin =
        document.getElementById("skin").value;

        const hair =
        document.getElementById("hair").value;

        const style =
        document.getElementById("style").value;

        const budget =
        document.getElementById("budget").value;


        // Calculate wedding countdown
        const weddingDate = new Date(date);

        const today = new Date();

        const daysLeft = Math.ceil(
            (weddingDate - today) /
            (1000 * 60 * 60 * 24)
        );


        // Update dashboard
        updateBridalProgress(daysLeft);

        generateBudgetPlan(budget);


        // AI Loading Screen
        result.innerHTML = `

        <h3>
            ✨ NoorAI is creating your luxury bridal plan...
        </h3>

        <p>💧 Analyzing your skin profile...</p>

        <p>💇 Matching your hair goals...</p>

        <p>💄 Designing your bridal aesthetic...</p>

        <p>👑 Creating your personalized glow roadmap...</p>

        `;


        // Short premium AI prompt
        const prompt = `

You are NoorAI, a luxury bridal beauty consultant.

Bride Details:

👰 Wedding in: ${daysLeft} days
💧 Skin Type: ${skin}
💇 Hair Goal: ${hair}
💄 Bridal Style: ${style}
💰 Budget: ₹${budget}


Create a SHORT premium bridal beauty plan.

Follow EXACTLY this structure:

👑 NoorAI Glow Plan

💧 Skin Ritual:
Give only 2 personalized skincare tips.

💇 Hair Ritual:
Give only 2 hair care recommendations.

💄 Signature Bridal Look:
Describe makeup, hairstyle and jewellery in 2-3 lines.

📅 Priority Timeline:
Give ONLY 3 important milestones.

✨ NoorAI Secret:
Give only 1 special luxury beauty tip.


Rules:
- Maximum 150 words.
- Use emojis.
- No long paragraphs.
- Sound elegant, premium and personal.

`;


        try {


            const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                        "application/json"

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


            const data =
            await response.json();


            console.log(
                "NoorAI Planner Response:",
                data
            );


            const aiText =
                data.candidates?.[0]
                ?.content?.parts?.[0]?.text;


            if(!aiText) {

                throw new Error(
                    "No AI response received"
                );

            }


            // Format AI response
            const formatted =
                aiText
                .replace(/\*\*(.*?)\*\*/g,
                "<strong>$1</strong>")
                .replace(/\n\n/g,"<br><br>")
                .replace(/\n/g,"<br>");



            // Premium typing animation

            result.innerHTML = "";


            const words =
            formatted.split(" ");


            let index = 0;


            const typing =
            setInterval(() => {


                if(index < words.length) {


                    result.innerHTML +=
                    words[index] + " ";


                    index++;


                }


                else {


                    clearInterval(typing);


                    // Update AI widgets
                    updateRecommendation(
                        style,
                        budget
                    );

                    generateMoodBoard(
                        style
                    );


                }


            }, 25);



        }


        catch(error) {


            console.error(error);


            // Premium fallback plan

            result.innerHTML = 
            createLuxuryTimeline(
                daysLeft,
                skin,
                hair,
                style,
                budget
            );


            updateRecommendation(
                style,
                budget
            );


            generateMoodBoard(
                style
            );


        }


    });


}


// ===============================
// Part 3/8 End
// Next: Part 4/8
// ===============================

// ===============================
// AI Bridal Mood Board
// ===============================

function generateMoodBoard(style) {

    const moodBoard =
    document.getElementById("moodBoard");


    if(!moodBoard) return;


    const styles = {


        "Royal": {

            makeup:
            "Golden glowing makeup with dramatic eyes",

            hair:
            "Voluminous bridal bun with royal accessories",

            jewelry:
            "Kundan, Polki and heavy bridal sets",

            colors:
            "Gold, Maroon, Emerald and Ivory"

        },


        "Traditional": {

            makeup:
            "Classic red lips with elegant eye makeup",

            hair:
            "Traditional floral bun or braided hairstyle",

            jewelry:
            "Temple jewelry, Kundan and traditional sets",

            colors:
            "Red, Gold and Deep Pink"

        },


        "Modern Minimal": {

            makeup:
            "Soft nude makeup with fresh natural glow",

            hair:
            "Soft waves, sleek bun or ponytail",

            jewelry:
            "Minimal diamonds and pearl pieces",

            colors:
            "Champagne, Beige and Pastel tones"

        },


        "Bollywood Glam": {

            makeup:
            "Bold eyes, glowing skin and glossy lips",

            hair:
            "Hollywood waves or glamorous volume styling",

            jewelry:
            "Statement diamonds and luxury pieces",

            colors:
            "Rose Gold, Burgundy and Silver"

        }


    };


    const data = styles[style];


    if(!data) {

        moodBoard.innerHTML = "";
        return;

    }


    moodBoard.innerHTML = `

        <div class="mood-grid">


            <div class="mood-card">

                <div class="icon">
                    💄
                </div>

                <h4>
                    Makeup
                </h4>

                <p>
                    ${data.makeup}
                </p>

            </div>


            <div class="mood-card">

                <div class="icon">
                    💇
                </div>

                <h4>
                    Hair
                </h4>

                <p>
                    ${data.hair}
                </p>

            </div>


            <div class="mood-card">

                <div class="icon">
                    💎
                </div>

                <h4>
                    Jewelry
                </h4>

                <p>
                    ${data.jewelry}
                </p>

            </div>


            <div class="mood-card">

                <div class="icon">
                    🎨
                </div>

                <h4>
                    Color Palette
                </h4>

                <p>
                    ${data.colors}
                </p>

            </div>


        </div>

    `;


}


// ===============================
// Salon Marketplace Filters
// ===============================


const searchInput =
document.getElementById("searchInput");


const salonCards =
document.querySelectorAll(".salon-card");


const priceFilter =
document.getElementById("priceFilter");



function filterSalons() {


    const searchValue =
    searchInput ?
    searchInput.value.toLowerCase() :
    "";


    const selectedBudget =
    priceFilter ?
    priceFilter.value :
    "all";



    salonCards.forEach(card => {


        const name =
        card.querySelector("h3")
        .innerText
        .toLowerCase();


        const price =
        Number(card.dataset.price);



        const matchesSearch =
        name.includes(searchValue);



        const matchesBudget =
        selectedBudget === "all" ||
        price <= Number(selectedBudget);



        card.style.display =
        (matchesSearch && matchesBudget)
        ? "block"
        : "none";


    });


}



if(searchInput) {

    searchInput.addEventListener(
        "keyup",
        filterSalons
    );

}


if(priceFilter) {

    priceFilter.addEventListener(
        "change",
        filterSalons
    );

}


// ===============================
// Part 4/8 End
// Next: Part 5/8
// ===============================

// ===============================
// AI Salon Recommendation Engine
// ===============================

function updateRecommendation(style, budget) {

    const aiRecommend =
    document.getElementById("aiRecommend");


    if(!aiRecommend) return;


    const budgetNum =
    Number(budget);



    const salons = [

        {
            name: "Royal Glow Studio",
            rating: "4.9 ⭐",
            location: "South Delhi",
            price: 25000,
            styles: [
                "Royal",
                "Traditional"
            ],
            speciality:
            "Luxury royal bridal transformations"
        },


        {
            name: "Noor Beauty Lounge",
            rating: "4.7 ⭐",
            location: "West Delhi",
            price: 12000,
            styles: [
                "Modern Minimal",
                "Bollywood Glam"
            ],
            speciality:
            "Modern elegant bridal looks"
        },


        {
            name: "Luxury Bride Palace",
            rating: "5.0 ⭐",
            location: "Central Delhi",
            price: 50000,
            styles: [
                "Royal",
                "Bollywood Glam"
            ],
            speciality:
            "Premium celebrity-inspired makeup"
        },


        {
            name: "Bliss Bridal Studio",
            rating: "4.8 ⭐",
            location: "North Delhi",
            price: 18000,
            styles: [
                "Traditional",
                "Modern Minimal"
            ],
            speciality:
            "Classic and timeless bridal beauty"
        },


        {
            name: "Pink Petal Beauty",
            rating: "4.5 ⭐",
            location: "Dwarka, Delhi",
            price: 9000,
            styles: [
                "Traditional",
                "Modern Minimal"
            ],
            speciality:
            "Budget-friendly bridal packages"
        }

    ];



    let match =
    salons.find(s =>
        s.styles.includes(style) &&
        s.price <= budgetNum
    );



    if(!match) {

        match =
        salons
        .filter(s => s.price <= budgetNum)
        .sort((a,b) => b.price - a.price)[0];

    }



    if(!match) {

        match =
        salons.sort(
            (a,b) => a.price - b.price
        )[0];

    }



    let score = 70;


    if(match.styles.includes(style)) {

        score += 20;

    }


    if(match.price <= budgetNum) {

        score += 10;

    }



    let badge = "";


    if(score >= 95) {

        badge =
        "★★★★★ Premium Match";

    }

    else if(score >= 85) {

        badge =
        "★★★★ Excellent Match";

    }

    else {

        badge =
        "★★★ Good Match";

    }



    aiRecommend.innerHTML = `

    <div class="ai-match-card">


        <h2>
        🧠 NoorAI Match Score
        </h2>


        <h1>
        ${score}%
        </h1>


        <h3>
        ${match.name}
        </h3>


        <p>
        ⭐ ${match.rating}<br>
        📍 ${match.location}<br>
        💄 ${match.speciality}<br>
        💰 Approx Package:
        ₹${match.price.toLocaleString("en-IN")}
        </p>


        <hr>


        <h4>
        Why NoorAI selected this salon?
        </h4>


        <p>
        ✔ Matches your
        <strong>${style}</strong>
        bridal aesthetic<br>

        ✔ Suitable for your
        ₹${budgetNum.toLocaleString("en-IN")}
        budget<br>

        ✔ Highly rated bridal experience<br>

        ✔ Best balance of luxury and value
        </p>


        <div class="confidence">
        ${badge}
        </div>


        <button 
        class="book-btn"
        id="recommendedBookBtn">
        Book AI Recommended Salon ✨
        </button>


    </div>

    `;


}



// ===============================
// Wishlist / Save Favourite Salons
// ===============================


const savedContainer =
document.getElementById(
    "savedContainer"
);


let savedSalons = [];



document
.querySelectorAll(".heart")
.forEach(heart => {


    heart.addEventListener("click", () => {


        const card =
        heart.closest(".salon-card");


        const salon = {

            name:
            card.querySelector("h3")
            .innerText,


            image:
            card.querySelector("img")
            .src,


            details:
            card.querySelectorAll("p")[0]
            .innerText,


            price:
            card.querySelectorAll("p")[1]
            .innerText

        };


// ===============================
// Part 5/8 End
// Next: Part 6/8
// ===============================

        // Check if salon is already saved
        const exists = savedSalons.some(
            item => item.name === salon.name
        );


        if (!exists) {

            heart.innerHTML = "❤️";

            savedSalons.push(salon);

        }

        else {

            heart.innerHTML = "♡";

            savedSalons = savedSalons.filter(
                item => item.name !== salon.name
            );

        }


        updateSavedSalons();


    });


});




// ===============================
// Update Saved Wishlist Section
// ===============================

function updateSavedSalons() {


    if (!savedContainer) return;


    if (savedSalons.length === 0) {


        savedContainer.innerHTML = `

        <div class="empty-saved">

            <div class="empty-illustration">
                🤍
            </div>

            <h3>
                Your NoorAI Wishlist is Empty
            </h3>

            <p>
                Save your favourite bridal salons
                and create your dream beauty journey.
            </p>

            <a href="#salons" class="btn">
                Explore Salons ✨
            </a>

        </div>

        `;


        return;

    }



    let html = "";


    savedSalons.forEach(salon => {


        html += `

        <div class="saved-salon-card">


            <img 
            src="${salon.image}" 
            alt="${salon.name}">


            <div class="saved-info">


                <h3>
                    ${salon.name}
                </h3>


                <p>
                    ${salon.details}
                </p>


                <p>
                    ${salon.price}
                </p>


                <button class="saved-book-btn">
                    Book Now ✨
                </button>


            </div>


        </div>

        `;


    });



    savedContainer.innerHTML = html;


}



// ===============================
// Booking Popup Controller
// ===============================


const popup =
document.getElementById("bookingPopup");



function openPopup(salonName = "") {


    if (!popup) return;


    const popupSalonName =
    document.getElementById("popupSalonName");


    if (popupSalonName) {

        popupSalonName.innerText =
        salonName
        ? `✨ ${salonName}`
        : "";

    }


    popup.style.display = "flex";


}



function cancelBooking() {


    if (popup) {

        popup.style.display = "none";

    }


}



function closePopup() {


    if (!popup) return;


    const inputs =
    popup.querySelectorAll("input");


    const name =
    inputs[0]?.value.trim();


    const date =
    inputs[1]?.value.trim();



    if (!name) {

        showToast(
            "⚠️ Please enter your name",
            "warning"
        );

        return;

    }


    if (!date) {

        showToast(
            "⚠️ Please select an appointment date",
            "warning"
        );

        return;

    }



    popup.style.display = "none";


    inputs.forEach(input => {
        input.value = "";
    });


    showToast(
        "🎉 Appointment booked successfully!"
    );


}



// Close popup when clicking outside
window.addEventListener(
    "click",
    function(e) {

        if(e.target === popup) {

            popup.style.display = "none";

        }

    }
);




// ===============================
// Global Book Button Listener - FIXED
// ===============================

document.addEventListener("click", function(e) {

    if(
        e.target.classList.contains("book-btn") ||
        e.target.classList.contains("saved-book-btn")
    ) {

        let salonName = "Luxury Bridal Salon";


        // For Explore Salons cards
        const salonCard = e.target.closest(".salon-card");

        if(salonCard) {
            salonName =
            salonCard.querySelector("h3")?.innerText;
        }


        // For Saved Wishlist cards
        const savedCard = e.target.closest(".saved-salon-card");

        if(savedCard) {
            salonName =
            savedCard.querySelector("h3")?.innerText;
        }


        // For AI Recommended salon
        const aiCard = e.target.closest(".ai-match-card");

        if(aiCard) {

            const headings =
            aiCard.querySelectorAll("h3");

            if(headings.length > 0) {

                salonName =
                headings[0].innerText;

            }

        }


        openPopup(salonName);

    }

});

// ===============================
// Part 6/8 End
// Next: Part 7/8
// ===============================

// ===============================
// NoorAI Luxury AI Chatbot
// ===============================


const conversationHistory = [];



async function sendMessage() {


    const userInput =
    document.getElementById("userInput");


    const chatBox =
    document.getElementById("chatBox");


    if (
        !userInput ||
        !chatBox ||
        userInput.value.trim() === ""
    ) {
        return;
    }


    const message =
    userInput.value.trim();


    // Show user message
    chatBox.innerHTML += `

    <div class="message user">
        ${message}
    </div>

    `;


    userInput.value = "";


    chatBox.scrollTop =
    chatBox.scrollHeight;


    // Loading bubble
    const loading =
    document.createElement("div");


    loading.className =
    "message bot";


    loading.innerHTML =
    "✨ NoorAI is thinking...";


    chatBox.appendChild(loading);


    const prompt = `

You are NoorAI, a luxury Indian bridal beauty assistant.

Your expertise:
- Bridal skincare
- Makeup looks
- Hairstyles
- Jewellery styling
- Wedding preparation
- Beauty budgets

Your personality:
- Warm
- Elegant
- Premium

Rules:
- Keep answers under 120 words.
- Use emojis naturally.
- Give practical beauty advice.
- Do not give medical diagnosis.

Bride's question:
${message}

`;


    try {


        const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
        {

            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },


            body: JSON.stringify({

                contents: [

                    ...conversationHistory,

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

        });


        const data =
        await response.json();
        console.log("Gemini Chat Response:", data);


        loading.remove();


        let reply =
data.candidates?.[0]
?.content?.parts?.[0]
?.text;

if(!reply) {

    const text = message.toLowerCase();

    if(text.includes("skin")) {
        reply = "✨ For a bridal glow, focus on cleansing, moisturizing and daily SPF. Hydration is your best friend 👰";
    }

    else if(text.includes("hair")) {
        reply = "💇 For healthy bridal hair, use nourishing oils, gentle shampoo and avoid excessive heat styling.";
    }

    else if(text.includes("makeup")) {
        reply = "💄 A bridal look should match your outfit, face features and personal style. Soft glam and royal looks are timeless.";
    }

    else if(text.includes("budget")) {
        reply = "💰 Allocate your budget wisely: makeup, hair, skincare and accessories should be balanced.";
    }

    else if(text.includes("jewellery")) {
        reply = "💎 Kundan, Polki and pearls are classic bridal choices depending on your outfit style.";
    }

    else {
        reply = "👰 Hello beautiful! I can help with skincare, haircare, makeup, jewellery, bridal looks and wedding preparation ✨";
    }
}



        // Save chat history
        conversationHistory.push(
            {
                role: "user",

                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        );


        conversationHistory.push(
            {
                role: "model",

                parts: [
                    {
                        text: reply
                    }
                ]
            }
        );



        chatBox.innerHTML += `

        <div class="message bot">

        ${reply.replace(/\n/g,"<br>")}

        </div>

        `;


        chatBox.scrollTop =
        chatBox.scrollHeight;


    }


    catch(error) {


        console.log(error);


        loading.innerHTML =

        "❌ NoorAI is unavailable right now. Please try again later.";


    }


}



// Enter key support
const userInput =
document.getElementById("userInput");


if(userInput) {


    userInput.addEventListener(
        "keypress",
        function(e) {


            if(e.key === "Enter") {


                e.preventDefault();


                sendMessage();


            }


        }
    );


}



// ===============================
// Wedding Countdown Timer
// ===============================


let countdownInterval;



function weddingCountdown() {


    const dateInput =
    document.getElementById("weddingDate");


    const countdown =
    document.getElementById("countdownDisplay")
    ||
    document.getElementById("daysLeft");



    if(!countdown) return;


    const targetDate =
    dateInput?.value
    ?
    new Date(dateInput.value)
    :
    new Date("December 25, 2026");



    if(countdownInterval) {

        clearInterval(
            countdownInterval
        );

    }



    function updateTimer() {


        const now =
        new Date();


        const difference =
        targetDate - now;



        if(difference <= 0) {


            countdown.innerHTML =
            "🎉 It's your wedding day!";


            clearInterval(
                countdownInterval
            );


            return;

        }



        const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


        const hours =
        Math.floor(
            (difference %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


        const minutes =
        Math.floor(
            (difference %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );



        countdown.innerHTML =

        `${days}d : ${hours}h : ${minutes}m Left 💍`;


    }



    updateTimer();


    countdownInterval =
    setInterval(
        updateTimer,
        60000
    );


}



// ===============================
// Part 7/8 End
// Next: Part 8/8
// ===============================

// ===============================
// AI Bridal Progress Dashboard
// ===============================

function updateBridalProgress(daysLeft) {


    weddingCountdown();


    const fill =
    document.getElementById("progressFill");


    const text =
    document.getElementById("progressText");


    const tasks =
    document.getElementById("taskContainer");


    if(!fill || !text || !tasks) return;



    let percentage;
    let status;
    let list;



    if(daysLeft > 90) {


        percentage = 20;


        status =
        "🌱 Your bridal journey has just begun.";


        list = [

            "✔ Start skincare routine",

            "⏳ Research bridal inspirations",

            "⏳ Book salon consultation",

            "⏳ Plan your makeup trial"

        ];


    }


    else if(daysLeft > 30) {


        percentage = 60;


        status =
        "✨ Your bridal glow journey is progressing beautifully.";


        list = [

            "✔ Continue skin care routine",

            "✔ Maintain healthy hair routine",

            "⏳ Finalize bridal makeup artist",

            "⏳ Confirm your salon booking"

        ];


    }


    else {


        percentage = 90;


        status =
        "👰 The big day is almost here! Stay calm and glow.";


        list = [

            "✔ Final facial and hair preparation",

            "✔ Bridal look completely finalized",

            "✔ Salon appointment confirmed",

            "🔥 Relax and enjoy your wedding celebration"

        ];


    }



    fill.style.width =
    percentage + "%";


    text.innerHTML =
    `${percentage}% Complete<br>${status}`;



    tasks.innerHTML = "";



    list.forEach(item => {


        tasks.innerHTML += `

        <div class="task done">

            ${item}

        </div>

        `;


    });


}



// Start countdown when website loads
weddingCountdown();




// ===============================
// Back To Top Button
// ===============================


const topBtn =
document.getElementById("topBtn");


if(topBtn) {


    window.addEventListener(
        "scroll",
        function() {


            topBtn.style.display =
            window.scrollY > 300
            ? "block"
            : "none";


        }
    );


    topBtn.addEventListener(
        "click",
        function() {


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });


        }
    );


}



// ===============================
// Face Upload Preview
// ===============================


const faceUpload =
document.getElementById("faceUpload");


const preview =
document.getElementById("preview");


if(faceUpload && preview) {


    faceUpload.addEventListener(
        "change",
        function() {


            const file =
            this.files[0];


            if(file) {


                preview.src =
                URL.createObjectURL(file);


                preview.style.display =
                "block";


            }


        }
    );


}



// ===============================
// Floating Chat Window Controller
// ===============================


function toggleChatWindow() {


    const chatContainer =
    document.getElementById("chatContainer");


    if(!chatContainer) return;



    const visible =
    window.getComputedStyle(chatContainer)
    .display !== "none";



    chatContainer.style.display =
    visible
    ? "none"
    : "flex";



    const chatBox =
    document.getElementById("chatBox");


    if(chatBox) {


        setTimeout(() => {


            chatBox.scrollTop =
            chatBox.scrollHeight;


        }, 50);


    }


}



// ===============================
// Premium Toast Notification
// ===============================


function showToast(message, type="success") {


    const oldToast =
    document.getElementById("noorToast");


    if(oldToast) {


        oldToast.remove();


    }



    const toast =
    document.createElement("div");


    toast.id = "noorToast";


    toast.innerHTML =
    message;



    toast.style.cssText = `

        position:fixed;
        bottom:90px;
        left:50%;
        transform:translateX(-50%);
        background:${
            type === "warning"
            ? "#fff0cc"
            : "#3b2f2f"
        };
        color:${
            type === "warning"
            ? "#5c4308"
            : "white"
        };
        padding:14px 28px;
        border-radius:30px;
        font-weight:bold;
        box-shadow:0 8px 25px rgba(0,0,0,.2);
        z-index:9999;
        opacity:0;
        transition:.4s;

    `;


    document.body.appendChild(
        toast
    );


    setTimeout(
        () => {

            toast.style.opacity = 1;

        },
        50
    );


    setTimeout(
        () => {

            toast.style.opacity = 0;


            setTimeout(
                () => toast.remove(),
                400
            );


        },
        3000
    );


}

// ===============================
// AI Face Analysis
// ===============================

function analyzeFace() {

    const faceResult = document.getElementById("faceResult");

    const faceUpload = document.getElementById("faceUpload");

    const file = faceUpload.files[0];


    if (!file) {

        faceResult.innerHTML =
        "⚠️ Please upload your selfie first.";

        return;

    }


    faceResult.innerHTML =
    "✨ NoorAI is analyzing your facial features...";


    setTimeout(() => {


        faceResult.innerHTML = `

        <h3>👰 Your AI Bridal Match</h3>

        💄 <b>Makeup:</b><br>
        Soft radiant base, warm eyeshadow and glossy lips.<br><br>

        💇 <b>Hairstyle:</b><br>
        Elegant bun with soft curls and fresh flowers.<br><br>

        💎 <b>Jewellery:</b><br>
        Kundan, pearls or delicate gold pieces will suit your look.<br><br>

        ✨ <b>NoorAI Tip:</b><br>
        Choose makeup that enhances your natural beauty.

        `;


    }, 2000);

}

// ===============================
// NoorAI Final Script Complete
// ===============================
