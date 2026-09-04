 document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const generateBtn = document.getElementById("generateBtn");
    const resultBox = document.getElementById("resultBox");
    const promptResult = document.getElementById("promptResult");
    const copyBtn = document.getElementById("copyBtn");
    // =========================
    // DARK MODE
    // =========================
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        themeToggle.textContent =
            document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
    // =========================
    // GENERATE PROMPT
    // =========================
    generateBtn.addEventListener("click", function () {
        const idea = document.getElementById("idea").value.trim();
        const aiType = document.getElementById("aiType").value;
        const style = document.getElementById("style").value;
        if (!idea) {
            alert("Please enter your idea first.");
            return;
        }
        let expandedIdea = "";
        let dynamicDetails = "";
        const ideaLower = idea.toLowerCase();
        // =========================
        // SMART KEYWORD INTELLIGENCE
        // =========================
        // CYBERPUNK
        if (ideaLower.includes("cyberpunk")) {
            dynamicDetails += `
STYLE INTELLIGENCE:
Use a cyberpunk visual language with towering futuristic megastructures, glowing neon signage, holographic advertisements, autonomous technology, dense urban environments, reflective wet surfaces, atmospheric fog, and a high-tech dystopian mood.
VISUAL DETAILS:
Add layered streets, elevated walkways, flying vehicles, holographic interfaces, glowing windows, steam vents, cables, futuristic transportation, robotic elements, and small environmental details that make the city feel inhabited.
`;
        }
        // PORTRAIT / PEOPLE
        if (
            ideaLower.includes("portrait") ||
            ideaLower.includes("person") ||
            ideaLower.includes("girl") ||
            ideaLower.includes("boy") ||
            ideaLower.includes("man") ||
            ideaLower.includes("woman")
        ) {
            dynamicDetails += `
PORTRAIT INTELLIGENCE:
Focus on a clearly defined subject with realistic facial structure, natural expression, detailed eyes, realistic skin texture, hairstyle, clothing, accessories, and believable body proportions.
VISUAL DETAILS:
Add subtle facial expressions, realistic skin imperfections, hair strands, fabric texture, natural posture, controlled background separation, and cinematic subject lighting.
`;
        }
        // LANDSCAPE
        if (
            ideaLower.includes("landscape") ||
            ideaLower.includes("mountain") ||
            ideaLower.includes("forest") ||
            ideaLower.includes("nature")
        ) {
            dynamicDetails += `
LANDSCAPE INTELLIGENCE:
Create a wide environmental composition with layered foreground, middle ground, and distant background.
VISUAL DETAILS:
Add mountains, vegetation, rocks, atmospheric perspective, natural terrain, clouds, mist, distant environmental elements, realistic textures, and strong depth.
`;
        }
        // ARCHITECTURE / CITY
        if (
            ideaLower.includes("building") ||
            ideaLower.includes("architecture") ||
            ideaLower.includes("house") ||
            ideaLower.includes("city")
        ) {
            dynamicDetails += `
ARCHITECTURE INTELLIGENCE:
Focus on believable structural design, scale, geometry, materials, windows, entrances, roads, surrounding infrastructure, and the relationship between architecture and its environment.
VISUAL DETAILS:
Add realistic surfaces, structural elements, lighting interaction, signs, balconies, streets, surrounding buildings, transportation infrastructure, and human-scale details.
`;
        }
        // ANIME
        if (ideaLower.includes("anime")) {
            dynamicDetails += `
ANIME INTELLIGENCE:
Use polished anime-inspired character design with expressive facial features, stylized proportions, clean line aesthetics, detailed hair, dynamic clothing, vibrant environments, and cinematic visual storytelling.
VISUAL DETAILS:
Add expressive eyes, carefully designed costumes, environmental effects, dramatic poses, atmospheric backgrounds, and polished anime-style rendering.
`;
        }
        // PRODUCT
        if (
            ideaLower.includes("product") ||
            ideaLower.includes("phone") ||
            ideaLower.includes("car") ||
            ideaLower.includes("watch")
        ) {
            dynamicDetails += `
PRODUCT INTELLIGENCE:
Treat the main object as the hero subject.
VISUAL DETAILS:
Define the product's materials, shape, surface finish, proportions, design language, branding placement, reflections, highlights, background, and presentation environment.
Use premium commercial product photography principles with controlled lighting and clean composition.
`;
        }
        // SPACE / SCI-FI
        if (
            ideaLower.includes("space") ||
            ideaLower.includes("galaxy") ||
            ideaLower.includes("planet") ||
            ideaLower.includes("spaceship") ||
            ideaLower.includes("sci-fi")
        ) {
            dynamicDetails += `
SCI-FI INTELLIGENCE:
Build a believable futuristic environment with advanced technology, spacecraft, planetary surfaces, orbital structures, distant celestial objects, and carefully designed futuristic interfaces.
VISUAL DETAILS:
Add stars, atmospheric glow, volumetric lighting, spacecraft details, metallic surfaces, energy systems, distant planets, and realistic environmental scale.
`;
        }
        // FANTASY
        if (
            ideaLower.includes("fantasy") ||
            ideaLower.includes("magic") ||
            ideaLower.includes("castle") ||
            ideaLower.includes("dragon")
        ) {
            dynamicDetails += `
FANTASY INTELLIGENCE:
Create an immersive fantasy world with believable magical elements, detailed environments, distinctive architecture, mythical creatures, ancient structures, and atmospheric storytelling.
VISUAL DETAILS:
Add magical particles, glowing effects, dramatic landscapes, detailed costumes, ancient materials, mysterious structures, and environmental depth.
`;
        }
        // HORROR
        if (
            ideaLower.includes("horror") ||
            ideaLower.includes("scary") ||
            ideaLower.includes("haunted") ||
            ideaLower.includes("dark")
        ) {
            dynamicDetails += `
HORROR INTELLIGENCE:
Create an unsettling atmosphere using environmental storytelling, dramatic shadows, isolated spaces, subtle visual tension, aged materials, and carefully controlled lighting.
VISUAL DETAILS:
Add fog, abandoned structures, damaged surfaces, dim practical lights, deep shadows, atmospheric particles, unsettling environmental details, and cinematic tension.
`;
        }
        // =========================
        // IMAGE
        // =========================
        if (aiType === "image") {
            expandedIdea =
`Create a visually rich ${style} AI image based on the idea "${idea}".
SMART VISUAL EXPANSION:
Interpret the core idea creatively and transform it into a specific visual scene without changing its original meaning.
SUBJECT:
Clearly define the main subject and its visual identity. Add relevant appearance, characteristics, clothing, objects, technology, architecture, or visual elements that naturally belong to the concept.
SETTING:
Create a believable environment around the subject. Define the location, surrounding structures, background elements, weather, time of day, and environmental conditions.
VISUAL STORY:
Introduce meaningful interactions between the subject and environment so the image communicates a clear visual story.
ATMOSPHERE:
Define weather, air quality, fog, mist, particles, reflections, environmental effects, and overall mood.
COMPOSITION:
Create a cinematic composition using foreground, subject placement, background layers, depth, perspective, symmetry or visual balance.
CAMERA:
Specify camera angle, framing, perspective, lens characteristics, depth of field, and focus.
LIGHTING:
Define light direction, intensity, shadows, highlights, reflections, practical lights, and cinematic mood.
COLORS:
Create a professional color palette that supports the selected ${style} style.
MATERIALS AND TEXTURES:
Describe realistic surfaces, materials, fabrics, architecture, metals, glass, skin, roads, vegetation, or other relevant textures.
REALISM:
Keep every added element coherent, believable, visually consistent, and connected to the original idea.
QUALITY:
Make the final image concept highly detailed, immersive, polished, cinematic, and optimized for modern AI image generation.`;
        }
        // =========================
        // VIDEO
        // =========================
        else if (aiType === "video") {
            expandedIdea =
`Create a cinematic ${style} video concept based on the idea "${idea}".
SMART VIDEO EXPANSION:
Transform the idea into a complete visual sequence with a clear beginning, progression, and ending.
SCENE:
Define the environment, subjects, time of day, atmosphere, and visual setting.
ACTION:
Describe what the subjects are doing and how the environment changes over time.
CAMERA:
Use appropriate cinematic shots, camera angles, camera movement, tracking shots, close-ups, wide shots, and transitions.
MOTION:
Describe realistic movement of people, vehicles, objects, weather, particles, and environmental elements.
LIGHTING:
Define lighting changes, shadows, highlights, practical lights, and cinematic atmosphere.
PACING:
Create a professional rhythm with appropriate shot duration and visual progression.
QUALITY:
Make the video concept coherent, cinematic, immersive, detailed, and optimized for modern AI video generation.`;
        }
        // =========================
        // TEXT
        // =========================
        else if (aiType === "text") {
            expandedIdea =
`Create ${style} content based on the idea "${idea}".
SMART TEXT EXPANSION:
Develop the idea into meaningful, useful, and engaging content.
AUDIENCE:
Identify the intended audience and their level of knowledge.
STRUCTURE:
Organize the content logically with a strong introduction, clear sections, supporting points, examples, and conclusion.
TONE:
Use a ${style} tone appropriate for the purpose and audience.
DETAIL:
Add useful context, explanations, examples, practical insights, and relevant information without unnecessary repetition.
QUALITY:
Make the final content clear, engaging, accurate, well-structured, and professional.`;
        }
        // =========================
        // CODE
        // =========================
        else if (aiType === "code") {
            expandedIdea =
`Develop a ${style} software solution based on the idea "${idea}".
SMART CODE EXPANSION:
Transform the idea into a practical technical specification.
FUNCTIONALITY:
Define the main features, user interactions, inputs, outputs, and expected behavior.
ARCHITECTURE:
Define appropriate components, application structure, data flow, APIs, storage, and dependencies.
IMPLEMENTATION:
Choose suitable technologies and provide clean, maintainable implementation guidance.
ERROR HANDLING:
Consider invalid inputs, failures, edge cases, and recovery behavior.
SECURITY:
Consider authentication, authorization, validation, privacy, and common security risks where relevant.
TESTING:
Define important test cases and expected results.
QUALITY:
Keep the solution scalable, maintainable, efficient, secure, and production-ready.`;
        }
        // =========================
        // STUDY
        // =========================
        else if (aiType === "study") {
            expandedIdea =
`Teach the topic "${idea}" using a ${style} learning approach.
SMART STUDY EXPANSION:
Turn the topic into a complete learning experience.
FOUNDATION:
Start with the fundamental concepts and required prerequisites.
EXPLANATION:
Explain every important concept step by step using simple language where appropriate.
EXAMPLES:
Provide practical examples and progressively harder applications.
EXAM FOCUS:
Highlight important formulas, facts, concepts, common traps, and frequently tested ideas.
PRACTICE:
Include practice questions with increasing difficulty.
REVISION:
End with concise revision notes and key takeaways.
QUALITY:
Make the learning experience structured, understandable, exam-focused, and effective.`;
        }
        // =========================
        // FINAL PROMPT
        // =========================
        const prompt =
`${expandedIdea}
DYNAMIC INTELLIGENCE:
${dynamicDetails}
TASK:
Transform the expanded concept into a professional, ready-to-use AI prompt.
CONTEXT:
Preserve the original idea while intelligently adding relevant details that improve clarity, specificity, and quality.
REQUIREMENTS:
Make the prompt specific, detailed, coherent, and optimized for the selected AI type.
QUALITY:
Prioritize accuracy, consistency, creativity, realism, clarity, and professional quality.
OUTPUT:
Return one complete, polished, ready-to-use prompt.`;
        // SHOW RESULT
        promptResult.textContent = prompt;
        resultBox.style.display = "block";
        resultBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
    // =========================
    // COPY PROMPT
    // =========================
    copyBtn.addEventListener("click", async function () {
        try {
            await navigator.clipboard.writeText(
                promptResult.textContent
            );
            copyBtn.textContent = "✅ Copied!";
            setTimeout(function () {
                copyBtn.textContent = "📋 Copy";
            }, 2000);
        }
        catch (error) {
            alert("Unable to copy. Please copy the prompt manually.");
        }
    });
});
