document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");
    const generateBtn = document.getElementById("generateBtn");
    const resultBox = document.getElementById("resultBox");
    const promptResult = document.getElementById("promptResult");
    const copyBtn = document.getElementById("copyBtn");

    // Dark mode
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        themeToggle.textContent =
            document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    // Generate Smart Expanded Prompt
    generateBtn.addEventListener("click", function () {

        const idea = document.getElementById("idea").value.trim();
        const aiType = document.getElementById("aiType").value;
        const style = document.getElementById("style").value;

        if (!idea) {
            alert("Please enter your idea first.");
            return;
        }

        let expandedIdea = "";

        // IMAGE
if (aiType === "image") {
    expandedIdea =
`Create a visually rich ${style} AI image based on the idea "${idea}".
SMART VISUAL EXPANSION:
Interpret the core idea creatively and expand it into a specific visual scene without changing its original meaning.
SUBJECT:
Define the main subject clearly. Add relevant appearance, characteristics, clothing, objects, technology, architecture, or visual elements that naturally fit the concept.
SETTING:
Build a believable environment around the subject. Add appropriate locations, structures, background elements, weather, time of day, and environmental features.
VISUAL STORY:
Add meaningful details that make the scene feel alive and tell a visual story. Include natural interactions between the subject and environment.
FUTURISTIC DETAILS:
When appropriate, introduce believable futuristic technology, architecture, transportation, interfaces, infrastructure, or lifestyle elements that fit the concept and time period.
ATMOSPHERE:
Define the mood, weather, air quality, fog, particles, reflections, and overall atmosphere.
COMPOSITION:
Create a strong cinematic composition with foreground, main subject placement, background, depth, perspective, symmetry or visual balance.
CAMERA:
Specify an appropriate camera angle, framing, perspective, lens characteristics, and depth of field.
LIGHTING:
Create detailed lighting with direction, intensity, shadows, highlights, reflections, and mood.
COLORS:
Choose a professional color palette that supports the requested ${style} style and atmosphere.
MATERIALS AND TEXTURES:
Add realistic materials, surfaces, architectural details, clothing textures, reflections, and environmental details.
REALISM:
Keep the expanded details believable, coherent, visually consistent, and connected to the original idea.
QUALITY:
Make the final concept highly detailed, immersive, polished, professional, and optimized for modern AI image generation.`;
}

        // VIDEO
        else if (aiType === "video") {

            expandedIdea =
`Create a cinematic ${style} video concept based on the idea "${idea}".

Expand the concept into a visually engaging sequence with a clear setting, subjects, actions, camera movements, cinematic shots, environmental motion, lighting changes, atmosphere, pacing, and transitions.

Make every visual element support the original idea and create a coherent professional video concept.`;
        }

        // TEXT
        else if (aiType === "text") {

            expandedIdea =
`Create ${style} content based on the idea "${idea}".

Expand the idea into useful and meaningful content by identifying the purpose, audience, key information, supporting points, examples, structure, tone, and practical value.

Keep the original idea as the foundation while adding relevant details that make the final content more complete and engaging.`;
        }

        // CODE
        else if (aiType === "code") {

            expandedIdea =
`Develop a ${style} software solution based on the idea "${idea}".

Expand the concept into clear technical requirements, user functionality, application logic, data flow, components, error handling, edge cases, security considerations, and testing requirements.

Choose an appropriate technical approach and keep the solution practical, maintainable, and scalable.`;
        }

        // STUDY
        else if (aiType === "study") {

            expandedIdea =
`Teach the topic "${idea}" using a ${style} learning approach.

Expand the topic into a complete learning experience covering fundamental concepts, step-by-step explanations, examples, important formulas or facts, common mistakes, exam-focused points, practice questions, and concise revision notes.

Build understanding progressively from basic concepts to more advanced applications.`;
        }

        const prompt =
`${expandedIdea}

TASK:
Transform the expanded concept into a professional, ready-to-use AI prompt.

CONTEXT:
Preserve the original idea while intelligently adding relevant details that improve clarity, specificity, and quality.

REQUIREMENTS:
Make the prompt specific, detailed, coherent, and optimized for the selected AI type.

QUALITY:
Avoid unnecessary details that do not support the original idea. Prioritize accuracy, consistency, realism, creativity, and professional quality.

OUTPUT:
Return one complete, polished, ready-to-use prompt.`;

        promptResult.textContent = prompt;
        resultBox.style.display = "block";

        resultBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

    // Copy prompt
    copyBtn.addEventListener("click", async function () {

        try {

            await navigator.clipboard.writeText(
                promptResult.textContent
            );

            copyBtn.textContent = "✅ Copied!";

            setTimeout(function () {
                copyBtn.textContent = "📋 Copy";
            }, 2000);

        } catch (error) {

            alert("Unable to copy. Please copy the prompt manually.");
        }
    });

});
