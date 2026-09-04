 document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("themeToggle");
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");

    // =========================
    // DARK MODE
    // =========================

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark");

            themeToggle.textContent =
                document.body.classList.contains("dark") ? "☀️" : "🌙";
        });
    }

    // =========================
    // HELPER
    // =========================

    function hasAny(text, words) {
        return words.some(word => text.includes(word));
    }

    // =========================
    // QUALITY SCORE
    // =========================

    function calculateQualityScore(prompt, idea, aiType) {

        let score = 40;

        const promptLength = prompt.length;

        // Length / detail
        if (promptLength > 500) score += 10;
        if (promptLength > 1000) score += 10;
        if (promptLength > 1800) score += 5;

        // Structure
        const sections = [
            "SUBJECT:",
            "SETTING",
            "CAMERA:",
            "LIGHTING:",
            "QUALITY:",
            "OUTPUT:"
        ];

        sections.forEach(section => {
            if (prompt.includes(section)) {
                score += 3;
            }
        });

        // Idea clarity
        if (idea.length >= 15) score += 4;
        if (idea.length >= 30) score += 3;

        // AI-specific intelligence
        if (aiType === "image") {
            if (prompt.includes("COMPOSITION:")) score += 3;
            if (prompt.includes("COLOR PALETTE:")) score += 2;
            if (prompt.includes("MATERIALS & TEXTURES:")) score += 2;
        }

        if (aiType === "video") {
            if (prompt.includes("MOTION:")) score += 3;
            if (prompt.includes("PACING:")) score += 2;
        }

        if (aiType === "text") {
            if (prompt.includes("AUDIENCE:")) score += 3;
            if (prompt.includes("STRUCTURE:")) score += 2;
        }

        if (aiType === "code") {
            if (prompt.includes("ERROR HANDLING:")) score += 3;
            if (prompt.includes("TESTING:")) score += 2;
        }

        if (aiType === "study") {
            if (prompt.includes("EXAM FOCUS:")) score += 3;
            if (prompt.includes("PRACTICE:")) score += 2;
        }

        return Math.min(Math.round(score), 100);
    }

    // =========================
    // QUALITY BREAKDOWN
    // =========================

    function createQualityBox(score) {

        let clarity = Math.min(100, score + 2);
        let detail = Math.min(100, score + 4);
        let structure = Math.min(100, score + 1);
        let aiReady = Math.min(100, score + 3);

        return `
            <div class="quality-box">

                <div class="quality-title">
                    <div>
                        <span>✨ Prompt Quality</span>
                        <strong>${score}/100</strong>
                    </div>
                </div>

                <div class="quality-bars">

                    <div class="quality-item">
                        <div>
                            <span>🎯 Clarity</span>
                            <b>${clarity}%</b>
                        </div>
                        <div class="quality-bar">
                            <span style="width:${clarity}%"></span>
                        </div>
                    </div>

                    <div class="quality-item">
                        <div>
                            <span>🧠 Detail</span>
                            <b>${detail}%</b>
                        </div>
                        <div class="quality-bar">
                            <span style="width:${detail}%"></span>
                        </div>
                    </div>

                    <div class="quality-item">
                        <div>
                            <span>🏗️ Structure</span>
                            <b>${structure}%</b>
                        </div>
                        <div class="quality-bar">
                            <span style="width:${structure}%"></span>
                        </div>
                    </div>

                    <div class="quality-item">
                        <div>
                            <span>🤖 AI Readiness</span>
                            <b>${aiReady}%</b>
                        </div>
                        <div class="quality-bar">
                            <span style="width:${aiReady}%"></span>
                        </div>
                    </div>

                </div>

                <button id="improveBtn" class="improve-btn">
                    💡 Improve Prompt ✨
                </button>

            </div>
        `;
    }

    // =========================
    // IMPROVE PROMPT
    // =========================

    function improvePrompt(originalPrompt, idea, aiType, style) {

        let improved = originalPrompt;

        const improvementBlock = `

SMART PROMPT OPTIMIZATION:

INTENT:
Preserve the exact meaning and core intention of "${idea}".

SPECIFICITY:
Make every important element specific, intentional, and visually or logically meaningful. Replace vague instructions with concrete descriptions whenever possible.

COHERENCE:
Ensure that all subjects, environments, actions, objects, style choices, lighting, structure, and supporting details work together consistently.

CONTEXT:
Add useful contextual information that helps the AI understand the situation, purpose, audience, environment, or visual world.

PRECISION:
Use clear, direct instructions. Avoid ambiguity, unnecessary repetition, generic language, and conflicting requirements.

AI OPTIMIZATION:
Organize the instructions so an AI model can easily identify the main subject, desired result, constraints, quality requirements, and output format.

STYLE CONSISTENCY:
Maintain the requested ${style} style throughout the entire result.

ORIGINAL IDEA PROTECTION:
Do not replace, distort, or change the original idea. Improvements must strengthen the original concept rather than introduce unrelated concepts.

FINAL OPTIMIZATION:
Prioritize clarity, specificity, coherence, useful detail, strong hierarchy, realistic relationships between elements, and reliable AI interpretation.
`;

        improved += improvementBlock;

        return improved;
    }

    // =========================
    // GENERATE PROMPT
    // =========================

    if (generateBtn) {

        generateBtn.addEventListener("click", function () {

            const ideaElement = document.getElementById("idea");
            const aiTypeElement = document.getElementById("aiType");
            const styleElement = document.getElementById("style");

            const idea = ideaElement.value.trim();
            const aiType = aiTypeElement.value;
            const style = styleElement.value;

            if (!idea) {
                alert("Please enter your idea first.");
                return;
            }

            const ideaLower = idea.toLowerCase();

            let expandedIdea = "";

            // =====================================================
            // IMAGE MODE
            // =====================================================

            if (aiType === "image") {

                let subject = "";
                let environment = "";
                let technology = "";
                let atmosphere = "";
                let camera = "";
                let lighting = "";
                let colors = "";
                let materials = "";
                let extraDetails = "";

                // CYBERPUNK
                if (hasAny(ideaLower, [
                    "cyberpunk",
                    "neon",
                    "futuristic city",
                    "future city"
                ])) {

                    subject =
                        "A vast futuristic megacity in 2050 dominated by towering glass-and-metal skyscrapers, enormous holographic billboards, elevated transportation systems, autonomous flying vehicles, and dense pedestrian districts.";

                    environment =
                        "A rain-soaked downtown district at night with reflective wet asphalt, narrow streets, steam rising from underground vents, elevated walkways connecting skyscrapers, glowing storefronts, layered urban infrastructure, and distant towers disappearing into atmospheric fog.";

                    technology =
                        "Autonomous flying taxis, delivery drones, robotic street systems, holographic advertisements, transparent digital interfaces, intelligent traffic systems, illuminated transit rails, futuristic electric vehicles, and advanced urban infrastructure.";

                    atmosphere =
                        "Heavy cinematic rain, volumetric fog, drifting steam, floating rain particles, glowing reflections, humid night air, atmospheric haze, and a mysterious high-tech urban mood.";

                    camera =
                        "Low-angle cinematic establishing shot from street level, wide 28mm lens, deep perspective, strong foreground reflections, towering vertical composition, realistic depth of field, and carefully balanced framing.";

                    lighting =
                        "Intense cyan and magenta neon lighting mixed with warm amber window lights, glowing advertisements illuminating the rain and fog, soft rim lighting, deep architectural shadows, and volumetric light beams.";

                    colors =
                        "Electric cyan, neon magenta, violet, deep blue, charcoal black, metallic gray, and subtle warm amber highlights.";

                    materials =
                        "Rain-covered asphalt, reflective glass, brushed metal, dark concrete, illuminated plastic, holographic surfaces, wet cables, futuristic vehicle panels, and highly detailed architectural textures.";

                    extraDetails =
                        "Include pedestrians wearing sleek futuristic clothing, small robotic devices, glowing signs in multiple languages, cables between buildings, ventilation systems releasing steam, rooftop structures, distant aircraft, illuminated windows, and subtle signs of everyday life.";
                }

                // PORTRAIT
                else if (hasAny(ideaLower, [
                    "portrait",
                    "person",
                    "girl",
                    "boy",
                    "man",
                    "woman",
                    "face",
                    "character"
                ])) {

                    subject =
                        "A clearly defined human character with realistic facial proportions, expressive eyes, natural skin texture, detailed hairstyle, carefully designed clothing, and a distinct visual identity.";

                    environment =
                        "A visually appropriate environment that supports the character, with a softly detailed background, natural depth, subtle environmental storytelling, and elements that complement the subject.";

                    technology =
                        "Use relevant objects, accessories, clothing details, or futuristic elements only when they naturally support the character and original concept.";

                    atmosphere =
                        "A carefully controlled atmosphere with subtle environmental particles, realistic air depth, gentle background separation, and a mood matching the original idea.";

                    camera =
                        "Professional portrait photography composition, natural perspective, 50mm or 85mm lens characteristics, controlled framing, realistic depth of field, sharp eyes, and strong subject separation.";

                    lighting =
                        "Soft directional key light, subtle fill light, natural rim lighting, realistic facial shadows, controlled highlights, and cinematic skin illumination.";

                    colors =
                        "A sophisticated cinematic color palette chosen to complement the character, clothing, environment, and requested style.";

                    materials =
                        "Detailed skin texture, individual hair strands, realistic fabric, leather, metal accessories, natural surface imperfections, and physically believable materials.";

                    extraDetails =
                        "Add subtle facial expression, natural posture, realistic clothing folds, small environmental details, and believable interactions between the character and surroundings.";
                }

                // LANDSCAPE
                else if (hasAny(ideaLower, [
                    "landscape",
                    "mountain",
                    "forest",
                    "nature",
                    "valley",
                    "lake",
                    "ocean",
                    "beach"
                ])) {

                    subject =
                        "A dramatic natural landscape with a clearly defined focal environment, detailed terrain, vegetation, geological formations, and strong visual depth.";

                    environment =
                        "An expansive environment with layered foreground, midground, and background elements, atmospheric perspective, natural terrain variation, distant scenery, and believable environmental conditions.";

                    technology =
                        "Avoid unnecessary technology unless it naturally belongs to the original concept. Add only objects that strengthen the visual story.";

                    atmosphere =
                        "Natural atmospheric haze, clouds, mist, wind movement, airborne particles, realistic humidity, and environmental depth.";

                    camera =
                        "Wide cinematic landscape composition using a 24mm wide-angle lens, strong leading lines, balanced foreground, dramatic horizon placement, and deep focus.";

                    lighting =
                        "Natural directional sunlight or dramatic golden-hour lighting with realistic shadows, highlights, atmospheric light rays, and subtle environmental reflections.";

                    colors =
                        "Rich natural greens, earthy browns, atmospheric blues, soft highlights, and a cinematic color grade appropriate to the requested style.";

                    materials =
                        "Detailed rocks, soil, vegetation, water surfaces, tree bark, clouds, terrain textures, and realistic natural materials.";

                    extraDetails =
                        "Add small environmental storytelling elements such as distant wildlife, trails, plants, weather effects, reflections, or subtle human presence when appropriate.";
                }

                // ARCHITECTURE / CITY
                else if (hasAny(ideaLower, [
                    "building",
                    "architecture",
                    "house",
                    "city",
                    "skyscraper",
                    "tower",
                    "street"
                ])) {

                    subject =
                        "A visually striking architectural structure with clearly defined geometry, scale, facade design, windows, entrances, structural elements, and surrounding urban context.";

                    environment =
                        "A believable city or architectural environment with streets, surrounding buildings, pedestrians, vehicles, landscaping, infrastructure, and realistic spatial relationships.";

                    technology =
                        "Add appropriate transportation systems, digital displays, smart infrastructure, lighting systems, or futuristic architectural technology when relevant.";

                    atmosphere =
                        "Detailed environmental atmosphere including weather, haze, reflections, shadows, airborne particles, and realistic urban activity.";

                    camera =
                        "Cinematic architectural photography using a wide-angle lens, strong geometric perspective, controlled vertical lines, dramatic framing, and realistic depth.";

                    lighting =
                        "Directional natural or artificial lighting interacting realistically with the building facade, glass, metal, concrete, windows, and surrounding environment.";

                    colors =
                        "A professional architectural color palette with balanced tones, controlled contrast, and colors supporting the selected style.";

                    materials =
                        "Glass, steel, concrete, stone, wood, brushed metal, illuminated surfaces, realistic windows, structural joints, and detailed facade textures.";

                    extraDetails =
                        "Include realistic signs, doors, windows, street furniture, vehicles, pedestrians, vegetation, utility systems, and small architectural details.";
                }

                // PRODUCT / CAR / TECH
                else if (hasAny(ideaLower, [
                    "product",
                    "car",
                    "phone",
                    "laptop",
                    "watch",
                    "shoes",
                    "bottle",
                    "robot",
                    "vehicle"
                ])) {

                    subject =
                        "A premium, clearly defined product with precise proportions, sophisticated design language, realistic surface details, functional components, and a polished professional appearance.";

                    environment =
                        "A carefully designed studio or contextual environment that supports the product without distracting from it.";

                    technology =
                        "Highlight relevant functional components, interfaces, mechanisms, materials, and technological features that naturally belong to the product.";

                    atmosphere =
                        "Clean controlled atmosphere with subtle depth, realistic reflections, carefully placed environmental elements, and a premium commercial mood.";

                    camera =
                        "Professional product photography using a 50mm or 85mm lens, precise framing, controlled perspective, shallow-to-moderate depth of field, and strong product separation.";

                    lighting =
                        "Professional studio lighting with large softboxes, controlled highlights, subtle rim lighting, realistic reflections, and carefully shaped shadows.";

                    colors =
                        "Premium commercial color grading with a cohesive palette that complements the product design.";

                    materials =
                        "Realistic metal, glass, plastic, leather, rubber, fabric, polished surfaces, micro-textures, seams, buttons, and material transitions.";

                    extraDetails =
                        "Add realistic product imperfections, precise edges, reflections, contact shadows, packaging elements, and premium commercial presentation.";
                }

                // SPACE / SCI-FI
                else if (hasAny(ideaLower, [
                    "space",
                    "galaxy",
                    "planet",
                    "astronaut",
                    "spaceship",
                    "sci-fi",
                    "science fiction"
                ])) {

                    subject =
                        "A highly detailed futuristic space subject with believable engineering, clearly defined structures, advanced equipment, and a strong visual focal point.";

                    environment =
                        "A vast cosmic environment containing planets, stars, nebulae, orbital structures, distant spacecraft, or futuristic stations appropriate to the original concept.";

                    technology =
                        "Advanced spacecraft systems, holographic interfaces, robotic equipment, energy systems, communication arrays, and believable futuristic engineering.";

                    atmosphere =
                        "Deep cosmic darkness, glowing particles, subtle atmospheric light, distant stars, planetary haze, and dramatic spatial depth.";

                    camera =
                        "Epic cinematic wide-angle composition with dramatic perspective, strong scale relationships, deep focus, and carefully controlled framing.";

                    lighting =
                        "Strong directional cosmic lighting, intense highlights, deep shadows, glowing planetary light, and realistic illumination across spacecraft surfaces.";

                    colors =
                        "Deep black, electric blue, violet, cyan, white highlights, and subtle planetary colors.";

                    materials =
                        "Advanced metal alloys, reflective glass, carbon composites, illuminated panels, mechanical components, and realistic spacecraft surfaces.";

                    extraDetails =
                        "Add distant stars, small spacecraft, orbital debris, glowing interfaces, structural details, and subtle engineering elements.";
                }

                // FANTASY
                else if (hasAny(ideaLower, [
                    "fantasy",
                    "magic",
                    "wizard",
                    "dragon",
                    "castle",
                    "mythical"
                ])) {

                    subject =
                        "A richly designed fantasy subject with distinctive visual characteristics, detailed clothing or armor, expressive features, and believable interaction with the magical environment.";

                    environment =
                        "An expansive fantasy environment with ancient architecture, mystical landscapes, atmospheric depth, natural elements, and carefully designed environmental storytelling.";

                    technology =
                        "Replace technology with believable magical objects, artifacts, glowing symbols, enchanted structures, or mystical mechanisms when appropriate.";

                    atmosphere =
                        "Magical mist, floating particles, glowing energy, atmospheric haze, dramatic clouds, and an immersive mysterious mood.";

                    camera =
                        "Epic cinematic composition with a wide lens, dramatic perspective, strong subject placement, and deep environmental storytelling.";

                    lighting =
                        "Magical volumetric lighting, glowing highlights, directional moonlight or sunlight, atmospheric shadows, and realistic illumination.";

                    colors =
                        "Deep blues, violet, emerald, gold, warm amber, and subtle magical highlights.";

                    materials =
                        "Stone, ancient wood, metal armor, fabric, leather, crystals, magical surfaces, vegetation, and detailed environmental textures.";

                    extraDetails =
                        "Add subtle magical particles, ancient symbols, distant creatures, weather effects, architectural details, and small storytelling elements.";
                }

                // HORROR
                else if (hasAny(ideaLower, [
                    "horror",
                    "haunted",
                    "ghost",
                    "dark",
                    "scary",
                    "abandoned"
                ])) {

                    subject =
                        "A disturbing but clearly defined horror subject with unsettling visual characteristics, realistic textures, and a strong psychological presence.";

                    environment =
                        "An abandoned or isolated environment with decaying architecture, empty corridors, damaged structures, overgrown vegetation, and signs of neglect.";

                    technology =
                        "Use broken lights, old monitors, abandoned equipment, flickering electronics, or other environmental technology only when appropriate.";

                    atmosphere =
                        "Dense fog, dust particles, cold humid air, drifting mist, darkness, subtle environmental movement, and an oppressive atmosphere.";

                    camera =
                        "Low-angle cinematic framing with a slightly wide lens, deep shadows, controlled perspective, and deliberate negative space.";

                    lighting =
                        "Minimal directional lighting, flickering practical lights, harsh shadows, subtle rim lighting, and dramatic areas of darkness.";

                    colors =
                        "Desaturated blue-gray tones, black, muted green, dark red accents, and limited warm highlights.";

                    materials =
                        "Aged concrete, cracked walls, rusted metal, dirty glass, decaying wood, wet surfaces, dust, and damaged fabrics.";

                    extraDetails =
                        "Add subtle signs of previous human activity, distant silhouettes, damaged objects, footprints, flickering lights, and environmental clues.";
                }

                // DEFAULT IMAGE
                else {

                    subject =
                        `A clearly defined main subject based on "${idea}", with relevant appearance, characteristics, objects, and visual elements that naturally support the original concept.`;

                    environment =
                        "A believable environment built specifically around the subject, including appropriate location, architecture, weather, time of day, background elements, and environmental features.";

                    technology =
                        "Introduce technology, objects, transportation, interfaces, or infrastructure only when they naturally fit the original concept.";

                    atmosphere =
                        "A carefully designed atmosphere with appropriate weather, air quality, fog, particles, reflections, environmental depth, and mood.";

                    camera =
                        "A professional cinematic camera angle and framing with an appropriate lens, realistic perspective, controlled depth of field, and strong visual balance.";

                    lighting =
                        "Detailed directional lighting with realistic shadows, highlights, reflections, ambient illumination, and mood appropriate to the concept.";

                    colors =
                        `A professional color palette that supports the ${style} visual style and overall atmosphere.`;

                    materials =
                        "Realistic surfaces, materials, textures, environmental details, and subtle imperfections appropriate to the scene.";

                    extraDetails =
                        "Add meaningful visual details that make the environment feel alive while keeping every element relevant to the original idea.";
                }

                // STYLE INTELLIGENCE

                let styleDirection = "";

                if (style === "cinematic") {
                    styleDirection =
                        "Premium cinematic visual language, dramatic composition, film-quality production design, atmospheric depth, realistic lighting, sophisticated color grading, and immersive visual storytelling.";
                }

                else if (style === "creative") {
                    styleDirection =
                        "Highly creative visual interpretation with imaginative composition, distinctive design choices, expressive details, artistic atmosphere, and strong visual identity.";
                }

                else if (style === "professional") {
                    styleDirection =
                        "Clean professional visual direction, precise composition, realistic details, controlled lighting, polished presentation, and high visual consistency.";
                }

                else {
                    styleDirection =
                        "Clean and simple visual direction with clear subject focus, balanced composition, natural lighting, and only relevant supporting details.";
                }

                expandedIdea =
`Create a ${style}, highly detailed AI image based on this original idea:

"${idea}"

SMART VISUAL EXPANSION:

SUBJECT:
${subject}

SETTING & ENVIRONMENT:
${environment}

TECHNOLOGY & OBJECTS:
${technology}

VISUAL STORY:
Create natural interactions between the subject, environment, people, objects, and surrounding elements. Make the scene feel alive and purposeful rather than artificially assembled.

ATMOSPHERE:
${atmosphere}

COMPOSITION:
Use strong foreground, midground, and background separation. Create visual depth, clear subject hierarchy, leading lines, balanced framing, and intentional placement of major elements.

CAMERA:
${camera}

LIGHTING:
${lighting}

COLOR PALETTE:
${colors}

MATERIALS & TEXTURES:
${materials}

ADDITIONAL VISUAL DETAILS:
${extraDetails}

STYLE DIRECTION:
${styleDirection}

CORE IDEA PROTECTION:
Preserve the original idea exactly at its core. Every added detail must naturally support the concept rather than changing its meaning.

QUALITY:
Ultra-detailed, immersive, photorealistic where appropriate, coherent, professionally composed, realistic proportions, physically believable lighting, detailed textures, strong atmospheric depth, polished visual storytelling, and optimized for modern AI image generation.

NEGATIVE:
Avoid generic visuals, unnecessary objects, inconsistent perspective, distorted anatomy, unrealistic materials, flat lighting, excessive clutter, poor composition, low-detail environments, blurry textures, and elements unrelated to the original idea.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.`;
            }

            // =====================================================
            // VIDEO MODE
            // =====================================================

            else if (aiType === "video") {

                expandedIdea =
`Create a ${style}, highly detailed AI video based on this idea:

"${idea}"

VIDEO INTELLIGENCE:

SCENE:
Define the main environment, location, time of day, weather, and visual context.

SUBJECT & ACTION:
Clearly describe the main subject and exactly what it is doing. Make the movement natural, purposeful, and visually understandable.

CAMERA:
Specify camera angle, framing, lens characteristics, camera movement, tracking, pans, tilts, zooms, and transitions.

MOTION:
Describe realistic movement of characters, objects, vehicles, clothing, hair, particles, weather, and environmental elements.

LIGHTING:
Define directional lighting, shadows, highlights, reflections, practical lights, and atmospheric illumination.

ATMOSPHERE:
Add appropriate weather, fog, particles, smoke, dust, rain, reflections, and environmental movement.

PACING:
Create cinematic pacing with a clear beginning, visual development, and satisfying ending.

VISUAL STYLE:
${style} visual language with professional composition, strong storytelling, realistic materials, and consistent visual identity.

QUALITY:
Smooth motion, consistent subjects, realistic physics, coherent environments, cinematic lighting, high detail, professional production quality, and temporal consistency.

OUTPUT:
Return one complete, ready-to-use AI video generation prompt.`;
            }

            // =====================================================
            // TEXT MODE
            // =====================================================

            else if (aiType === "text") {

                expandedIdea =
`Create a ${style}, high-quality AI text response based on this idea:

"${idea}"

TEXT INTELLIGENCE:

OBJECTIVE:
Clearly identify the purpose of the content and the result that should be achieved.

AUDIENCE:
Determine the most appropriate target audience and adapt vocabulary, complexity, and explanation accordingly.

STRUCTURE:
Organize the response with a strong introduction, logical sections, useful details, and a clear conclusion when appropriate.

TONE:
Use a ${style} communication style that feels natural, confident, clear, and engaging.

CONTENT:
Expand the original idea with relevant information, examples, explanations, context, and practical details without adding unnecessary information.

CLARITY:
Use precise language, logical flow, readable formatting, and clear explanations.

QUALITY:
Make the final response accurate, useful, polished, coherent, engaging, and professionally written.

OUTPUT:
Return one complete, ready-to-use AI writing prompt.`;
            }

            // =====================================================
            // CODE MODE
            // =====================================================

            else if (aiType === "code") {

                expandedIdea =
`Create a professional AI coding prompt based on this idea:

"${idea}"

CODE INTELLIGENCE:

REQUIREMENTS:
Clearly define the functionality, user requirements, inputs, outputs, and expected behavior.

ARCHITECTURE:
Recommend a suitable technical architecture, file structure, components, modules, APIs, and dependencies where relevant.

IMPLEMENTATION:
Generate clean, maintainable, readable, modular code following appropriate best practices.

ERROR HANDLING:
Consider invalid inputs, edge cases, failures, unexpected behavior, and graceful error handling.

SECURITY:
Identify relevant security considerations and avoid unsafe implementation patterns.

PERFORMANCE:
Optimize the solution where appropriate without sacrificing readability or maintainability.

TESTING:
Include appropriate test cases, validation steps, and debugging guidance.

EXPLANATION:
Explain important implementation decisions clearly when necessary.

QUALITY:
The final solution should be reliable, scalable, maintainable, efficient, and production-ready where appropriate.

OUTPUT:
Return one complete, ready-to-use AI coding prompt.`;
            }

            // =====================================================
            // STUDY MODE
            // =====================================================

            else if (aiType === "study") {

                expandedIdea =
`Create a professional AI study prompt based on this idea:

"${idea}"

STUDY INTELLIGENCE:

LEVEL:
Adapt the explanation to the learner's level and existing understanding.

CONCEPTS:
Break the topic into clear concepts and explain difficult ideas step by step.

EXAMPLES:
Use simple examples, analogies, diagrams-in-words, and practical applications where useful.

EXAM FOCUS:
Highlight important concepts, formulas, definitions, patterns, and commonly tested areas.

COMMON MISTAKES:
Identify mistakes students commonly make and explain how to avoid them.

PRACTICE:
Provide practice questions progressing from basic understanding to challenging application.

REVISION:
Include a concise revision strategy, key takeaways, and memory techniques where appropriate.

QUALITY:
Make the learning experience clear, structured, engaging, accurate, and optimized for effective exam preparation.

OUTPUT:
Return one complete, ready-to-use AI study prompt.`;
            }

            // =====================================================
            // SHOW RESULT
            // =====================================================

            const resultBox = document.getElementById("resultBox");
            const promptResult = document.getElementById("promptResult");

            if (promptResult) {
                promptResult.textContent = expandedIdea;
            }
// Save generated prompt to history
savePromptToHistory(
    expandedIdea,
    aiType,
    style
);
            if (resultBox) {

                resultBox.style.display = "block";

                // Remove old quality box
                const oldQuality = document.getElementById("qualityBox");

                if (oldQuality) {
                    oldQuality.remove();
                }

                const score = calculateQualityScore(
                    expandedIdea,
                    idea,
                    aiType
                );

                const qualityContainer =
                    document.createElement("div");

                qualityContainer.id = "qualityBox";

                qualityContainer.innerHTML =
                    createQualityBox(score);

                resultBox.appendChild(qualityContainer);

                // Improve button
                const improveBtn =
                    document.getElementById("improveBtn");

                if (improveBtn) {

                    improveBtn.addEventListener("click", function () {

                        const currentPrompt =
                            promptResult.textContent;

                        const improvedPrompt =
                            improvePrompt(
                                currentPrompt,
                                idea,
                                aiType,
                                style
                            );

                        promptResult.textContent =
                            improvedPrompt;

                        const newScore =
                            Math.min(
                                100,
                                calculateQualityScore(
                                    improvedPrompt,
                                    idea,
                                    aiType
                                ) + 5
                            );

                        qualityContainer.innerHTML =
                            createQualityBox(newScore);

                        const newImproveBtn =
                            document.getElementById("improveBtn");

                        if (newImproveBtn) {
                            newImproveBtn.textContent =
                                "🚀 Prompt Improved!";
                        }

                        setTimeout(function () {

                            const resetBtn =
                                document.getElementById("improveBtn");

                            if (resetBtn) {
                                resetBtn.textContent =
                                    "💡 Improve Prompt ✨";
                            }

                        }, 1800);

                    });
                }

                resultBox.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });
    }

    // =========================
    // COPY PROMPT
    // =========================

    if (copyBtn) {

        copyBtn.addEventListener("click", async function () {

            const promptResult =
                document.getElementById("promptResult");

            if (!promptResult) return;

            try {

                await navigator.clipboard.writeText(
                    promptResult.textContent
                );

                copyBtn.textContent = "✅ Copied!";

                setTimeout(function () {
                    copyBtn.textContent = "📋 Copy";
                }, 1500);

            } catch (error) {

                alert(
                    "Unable to copy the prompt. Please copy it manually."
                );

            }

        });
    }

});
/* =========================
   PROMPT HISTORY
========================= */

function savePromptToHistory(prompt, aiType, style) {

    const history =
        JSON.parse(localStorage.getItem("aivivoHistory")) || [];

    const newPrompt = {
        id: Date.now(),
        prompt: prompt,
        aiType: aiType,
        style: style,
        date: new Date().toLocaleString()
    };

    history.unshift(newPrompt);

    // Keep only the latest 20 prompts
    const limitedHistory = history.slice(0, 20);

    localStorage.setItem(
        "aivivoHistory",
        JSON.stringify(limitedHistory)
    );

    displayPromptHistory();
}


function displayPromptHistory() {

    const historyList =
        document.getElementById("historyList");

    if (!historyList) return;

    const history =
        JSON.parse(localStorage.getItem("aivivoHistory")) || [];

    if (history.length === 0) {

        historyList.innerHTML = `
            <div class="empty-history">
                <div>📚</div>
                <h3>No prompts yet</h3>
                <p>
                    Your generated prompts will appear here.
                </p>
            </div>
        `;

        return;
    }

    historyList.innerHTML = history.map(item => `

        <div class="history-item">

            <div class="history-item-header">

                <span class="history-type">
                    ${getHistoryIcon(item.aiType)}
                    ${item.aiType.toUpperCase()}
                </span>

                <span class="history-date">
                    ${item.date}
                </span>

            </div>

            <div class="history-prompt">
                ${escapeHistoryHTML(item.prompt)}
            </div>

            <div class="history-actions">

                <button onclick="copyHistoryPrompt(${item.id})">
                    📋 Copy
                </button>

                <button onclick="reuseHistoryPrompt(${item.id})">
                    🔄 Reuse
                </button>

                <button onclick="deleteHistoryPrompt(${item.id})">
                    🗑️ Delete
                </button>

            </div>

        </div>

    `).join("");
}


function getHistoryIcon(type) {

    const icons = {
        image: "🖼️",
        video: "🎬",
        text: "✍️",
        code: "💻",
        study: "📚"
    };

    return icons[type] || "✨";
}


function escapeHistoryHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function copyHistoryPrompt(id) {

    const history =
        JSON.parse(localStorage.getItem("aivivoHistory")) || [];

    const item =
        history.find(prompt => prompt.id === id);

    if (!item) return;

    navigator.clipboard.writeText(item.prompt);

    alert("✅ Prompt copied!");
}


function reuseHistoryPrompt(id) {

    const history =
        JSON.parse(localStorage.getItem("aivivoHistory")) || [];

    const item =
        history.find(prompt => prompt.id === id);

    if (!item) return;

    const ideaInput =
        document.getElementById("idea");

    const aiTypeInput =
        document.getElementById("aiType");

    const styleInput =
        document.getElementById("style");

    if (ideaInput) {
        ideaInput.value = item.prompt;
    }

    if (aiTypeInput) {
        aiTypeInput.value = item.aiType;
    }

    if (styleInput) {
        styleInput.value = item.style;
    }

    document
        .getElementById("generator")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function deleteHistoryPrompt(id) {

    let history =
        JSON.parse(localStorage.getItem("aivivoHistory")) || [];

    history =
        history.filter(prompt => prompt.id !== id);

    localStorage.setItem(
        "aivivoHistory",
        JSON.stringify(history)
    );

    displayPromptHistory();
}


function clearPromptHistory() {

    localStorage.removeItem("aivivoHistory");

    displayPromptHistory();
}


/* Clear All button */

document.addEventListener("DOMContentLoaded", function () {

    displayPromptHistory();

    const clearBtn =
        document.getElementById("clearHistoryBtn");

    if (clearBtn) {

        clearBtn.addEventListener(
            "click",
            function () {

                if (
                    confirm(
                        "Are you sure you want to delete all saved prompts?"
                    )
                ) {

                    clearPromptHistory();

                }

            }
        );

    }

});
