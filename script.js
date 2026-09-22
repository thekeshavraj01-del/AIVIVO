document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // AIVIVO — SMART PROMPT ENGINE
    // Version 2.0
    // =========================================================


    // =========================================================
    // ELEMENTS
    // =========================================================

    const themeToggle = document.getElementById("themeToggle");
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");

    const ideaInput = document.getElementById("idea");
    const ideaCounter = document.getElementById("ideaCounter");

    const aiTypeInput = document.getElementById("aiType");
    const styleInput = document.getElementById("style");

    const resultBox = document.getElementById("resultBox");
    const promptResult = document.getElementById("promptResult");


    // =========================================================
    // HELPER
    // =========================================================

    function hasAny(text, words) {
        return words.some(word => text.includes(word));
    }


    function cleanText(text) {
        return text
            .replace(/\s+/g, " ")
            .trim();
    }


    // =========================================================
    // CHARACTER COUNTER
    // =========================================================

    if (ideaInput && ideaCounter) {

        function updateIdeaCounter() {

            const count = ideaInput.value.length;

            ideaCounter.textContent =
                `${count.toLocaleString()} characters`;
        }

        ideaInput.addEventListener(
            "input",
            updateIdeaCounter
        );

        updateIdeaCounter();
    }


    // =========================================================
    // DARK MODE
    // =========================================================

    if (themeToggle) {

        const savedTheme =
            localStorage.getItem("aivivoTheme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark");

            themeToggle.textContent = "☀️";

        } else {

            themeToggle.textContent = "🌙";
        }


        themeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle("dark");

                const isDark =
                    document.body.classList.contains("dark");

                themeToggle.textContent =
                    isDark ? "☀️" : "🌙";

                localStorage.setItem(
                    "aivivoTheme",
                    isDark ? "dark" : "light"
                );

            }
        );
    }


    // =========================================================
    // SMART CONTEXT DETECTION
    // =========================================================

    function detectContext(idea) {

        const text = idea.toLowerCase();

        return {

            futuristic: hasAny(text, [
                "futuristic",
                "future",
                "2050",
                "2070",
                "2100",
                "sci-fi",
                "advanced",
                "tomorrow"
            ]),

            india: hasAny(text, [
                "india",
                "indian",
                "delhi",
                "mumbai",
                "bangalore",
                "bengaluru",
                "kolkata",
                "hyderabad",
                "chennai",
                "patna",
                "varanasi",
                "jaipur",
                "goa"
            ]),

            city: hasAny(text, [
                "city",
                "megacity",
                "urban",
                "downtown",
                "skyscraper",
                "metropolis",
                "street",
                "town"
            ]),

            night: hasAny(text, [
                "night",
                "nighttime",
                "at night",
                "midnight",
                "evening"
            ]),

            cyberpunk: hasAny(text, [
                "cyberpunk",
                "neon cyberpunk",
                "cyberpunk city"
            ]),

            portrait: hasAny(text, [
                "portrait",
                "person",
                "girl",
                "boy",
                "man",
                "woman",
                "face",
                "character"
            ]),

            landscape: hasAny(text, [
                "landscape",
                "mountain",
                "forest",
                "nature",
                "valley",
                "lake",
                "ocean",
                "beach"
            ]),

            architecture: hasAny(text, [
                "building",
                "architecture",
                "house",
                "skyscraper",
                "tower"
            ]),

            product: hasAny(text, [
                "product",
                "car",
                "phone",
                "laptop",
                "watch",
                "shoes",
                "bottle",
                "robot",
                "vehicle"
            ]),

            space: hasAny(text, [
                "space",
                "galaxy",
                "planet",
                "astronaut",
                "spaceship",
                "science fiction"
            ]),

            fantasy: hasAny(text, [
                "fantasy",
                "magic",
                "wizard",
                "dragon",
                "castle",
                "mythical"
            ]),

            horror: hasAny(text, [
                "horror",
                "haunted",
                "ghost",
                "scary",
                "abandoned"
            ]),

            village: hasAny(text, [
                "village",
                "rural",
                "countryside",
                "farm",
                "farmer",
                "gaon"
            ])
        };
    }


    // =========================================================
    // STYLE INTELLIGENCE
    // =========================================================

    function getStyleDirection(style) {

        if (style === "cinematic") {

            return `
Premium cinematic visual language.
Film-quality production design.
Strong composition and visual hierarchy.
Atmospheric depth.
Sophisticated color grading.
Realistic lighting.
Immersive storytelling.
`;

        }

        if (style === "creative") {

            return `
Distinctive creative visual interpretation.
Original composition.
Strong artistic identity.
Imaginative but coherent details.
Expressive atmosphere.
Visually memorable design.
`;

        }

        if (style === "professional") {

            return `
Clean professional visual direction.
Precise composition.
Controlled lighting.
Realistic materials.
Polished presentation.
Strong visual consistency.
Commercial-quality execution.
`;

        }

        return `
Clean visual direction.
Clear subject focus.
Balanced composition.
Natural supporting details.
Controlled lighting.
No unnecessary elements.
`;
    }


    // =========================================================
    // IMAGE PROMPT ENGINE
    // =========================================================

    function generateImagePrompt(idea, style) {

        const context = detectContext(idea);

        const styleDirection =
            getStyleDirection(style);


        // =====================================================
        // FUTURISTIC INDIA CITY
        // =====================================================

        if (
            context.futuristic &&
            context.city &&
            context.india
        ) {

            const timeDescription =
                context.night
                    ? "during a cinematic nighttime"
                    : "during a believable futuristic";

            return `
Create a ${style}, highly detailed AI image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

CONCEPT:
Interpret the original idea as a believable futuristic Indian metropolis while preserving the exact location, subject, time period, and atmosphere requested by the user.

SUBJECT:
A massive futuristic Indian megacity shaped by advanced urban development, sophisticated glass-and-metal architecture, dense metropolitan districts, elevated transportation, autonomous mobility, intelligent infrastructure, and a large population living naturally within the environment.

SETTING & ENVIRONMENT:
A highly developed Indian metropolitan environment ${timeDescription}, with interconnected skyscrapers, elevated transit corridors, pedestrian areas, landscaped public spaces, advanced roads, commercial districts, distant towers, atmospheric depth, and realistic urban density.

TECHNOLOGY:
Use advanced technology that logically belongs in this future environment, including autonomous electric vehicles, intelligent traffic systems, elevated metro systems, delivery drones, smart roads, AI-assisted public services, advanced communication networks, renewable-energy infrastructure, and futuristic transportation.

VISUAL STORY:
Show the city functioning as a real place rather than a collection of futuristic objects. People should naturally interact with streets, transportation, shops, buildings, public spaces, and technology.

INDIAN CONTEXT:
Use believable modern Indian architectural influences, multilingual signage, Indian urban planning patterns, greenery, public transportation, local businesses, diverse Indian pedestrians, and technology adapted to the Indian environment.

Do not rely on stereotypical cultural decoration.

ATMOSPHERE:
${context.night
    ? "Cinematic nighttime atmosphere with humid air, subtle haze, realistic fog, illuminated windows, practical street lighting, reflections, glowing transportation systems, and a vibrant sense of everyday urban life."
    : "Advanced metropolitan atmosphere with realistic weather, atmospheric depth, natural urban activity, illuminated architecture, greenery, transportation systems, and believable environmental conditions."
}

COMPOSITION:
Create strong foreground, midground, and background separation.

Use:
- clear visual hierarchy
- strong leading lines
- realistic architectural scale
- layered depth
- balanced framing
- natural pedestrian placement
- believable transportation flow

CAMERA:
Wide cinematic establishing shot using a 28mm lens, realistic perspective, strong foreground-to-background depth, controlled vertical architecture, immersive environmental storytelling, and professional cinematic framing.

LIGHTING:
${context.night
    ? "Sophisticated futuristic lighting combining cool cyan and subtle violet illumination with warm amber building interiors, realistic street lights, practical commercial lighting, volumetric light, and reflections on wet or polished surfaces."
    : "Natural futuristic urban lighting with realistic highlights, controlled shadows, architectural illumination, environmental reflections, and physically believable light interaction."
}

COLOR PALETTE:
Deep blue, metallic silver, charcoal, controlled cyan, subtle violet, warm amber, white, and restrained Indian-inspired accents.

MATERIALS & TEXTURES:
Reflective architectural glass, brushed steel, polished concrete, dark stone, advanced road surfaces, transparent displays, realistic vehicle materials, detailed building facades, vegetation, and subtle surface imperfections.

PEOPLE & EVERYDAY LIFE:
Include diverse Indian pedestrians, realistic clothing, natural body language, businesses, public transportation, workers, commuters, street activity, and small details that make the city feel inhabited.

STYLE DIRECTION:
${styleDirection}

COHERENCE:
Architecture, people, vehicles, technology, lighting, materials, atmosphere, and perspective must belong to the same believable world.

CORE IDEA PROTECTION:
Do not change the original concept.
Do not move the location.
Do not change the requested time period.
Do not remove the requested atmosphere.

QUALITY:
Ultra-detailed, coherent, realistic proportions, physically believable lighting, detailed textures, strong atmospheric depth, sophisticated composition, realistic urban scale, and optimized for modern AI image generation.

NEGATIVE:
Avoid generic futuristic cities, excessive neon, random architecture, impossible structures, cultural stereotypes, unrealistic vehicles, distorted people, inconsistent perspective, floating objects without purpose, excessive clutter, flat lighting, blurry textures, duplicated elements, and details unrelated to the original idea.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // CYBERPUNK
        // =====================================================

        if (context.cyberpunk) {

            return `
Create a ${style}, highly detailed cyberpunk AI image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

SUBJECT:
A visually dominant cyberpunk subject designed directly from the original idea, with advanced technology, distinctive visual identity, and believable physical details.

ENVIRONMENT:
A dense futuristic urban environment with layered architecture, narrow streets, elevated structures, digital signage, rain-slick surfaces, atmospheric haze, and realistic urban depth.

TECHNOLOGY:
Holographic interfaces, autonomous vehicles, drones, robotic systems, advanced displays, cables, smart infrastructure, and believable futuristic technology.

ATMOSPHERE:
Dark cinematic atmosphere, rain, fog, steam, reflections, glowing practical lights, atmospheric particles, and strong environmental depth.

COMPOSITION:
Strong foreground, midground, and background separation with a clear focal point, leading lines, controlled visual clutter, and cinematic framing.

CAMERA:
Wide cinematic lens, realistic perspective, strong depth, controlled distortion, and immersive street-level composition.

LIGHTING:
Controlled neon lighting mixed with realistic practical illumination, reflections, shadows, rim lighting, and volumetric atmosphere.

MATERIALS:
Wet asphalt, reflective glass, brushed metal, concrete, cables, illuminated panels, digital surfaces, and realistic environmental textures.

STYLE:
${styleDirection}

QUALITY:
Highly detailed, coherent, cinematic, realistic proportions, sophisticated lighting, believable materials, and professional visual storytelling.

NEGATIVE:
Avoid random neon, excessive clutter, generic sci-fi objects, distorted anatomy, inconsistent perspective, impossible architecture, and unrelated details.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // PORTRAIT
        // =====================================================

        if (context.portrait) {

            return `
Create a ${style}, highly detailed AI portrait based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

SUBJECT:
A clearly defined human subject with realistic facial proportions, expressive eyes, natural skin texture, detailed hair, believable clothing, and a distinct visual identity.

EXPRESSION & BODY LANGUAGE:
Natural facial expression and body language that support the original idea.

ENVIRONMENT:
A believable environment that supports the subject without distracting from them.

CAMERA:
Professional portrait photography using realistic 50mm or 85mm lens characteristics, controlled framing, natural perspective, sharp facial details, and realistic depth of field.

LIGHTING:
Soft directional key light, subtle fill, realistic facial shadows, natural highlights, and controlled rim lighting.

MATERIALS:
Detailed skin, individual hair strands, fabric, accessories, and realistic surface textures.

COMPOSITION:
Clear subject hierarchy, balanced framing, natural negative space, and professional visual depth.

STYLE:
${styleDirection}

QUALITY:
Highly detailed, natural anatomy, realistic skin, believable materials, cinematic depth, coherent lighting, and professional presentation.

NEGATIVE:
Avoid distorted anatomy, unnatural skin, extra fingers, artificial facial features, unrealistic eyes, excessive smoothing, blurry details, and unrelated objects.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // LANDSCAPE
        // =====================================================

        if (context.landscape) {

            return `
Create a ${style}, highly detailed cinematic landscape image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

SUBJECT:
A clearly defined natural landscape with a strong visual focal point.

ENVIRONMENT:
Layered foreground, midground, and background terrain with realistic vegetation, geological details, weather, distant scenery, and atmospheric perspective.

VISUAL STORY:
Create a believable natural environment rather than simply placing objects into a scene.

COMPOSITION:
Strong leading lines, balanced horizon, foreground depth, atmospheric perspective, and intentional focal placement.

CAMERA:
Wide-angle cinematic landscape photography with realistic perspective and deep environmental focus.

LIGHTING:
Natural directional lighting appropriate to the requested time and atmosphere.

COLORS:
Natural greens, earthy tones, atmospheric blues, realistic highlights, and controlled cinematic grading.

MATERIALS:
Detailed rocks, soil, vegetation, water, clouds, terrain, and natural surface textures.

STYLE:
${styleDirection}

QUALITY:
Highly detailed, realistic environmental depth, believable lighting, coherent scale, natural textures, and professional composition.

NEGATIVE:
Avoid artificial landscapes, random objects, unrealistic terrain, flat lighting, excessive saturation, and unrelated elements.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // VILLAGE
        // =====================================================

        if (context.village) {

            return `
Create a ${style}, highly detailed image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

CONCEPT:
Interpret the idea as a believable rural environment while preserving the original time period, location, culture, and atmosphere.

SETTING:
A naturally developed village environment with realistic homes, roads, vegetation, agricultural areas, people, animals, utilities, and environmental details appropriate to the original concept.

VISUAL STORY:
Show everyday life naturally through people, work, homes, transportation, farming, markets, animals, and surrounding nature where relevant.

ARCHITECTURE:
Use believable local architecture, construction materials, roof styles, walls, doors, windows, courtyards, and infrastructure.

ATMOSPHERE:
Natural weather, dust, humidity, sunlight or nighttime conditions, atmospheric depth, and realistic environmental activity.

CAMERA:
Cinematic documentary-style composition with realistic perspective, natural depth, and strong environmental storytelling.

LIGHTING:
Physically believable natural or practical lighting appropriate to the requested time.

MATERIALS:
Detailed soil, wood, stone, brick, concrete, fabric, vegetation, metal, and weathered surfaces.

STYLE:
${styleDirection}

QUALITY:
Photorealistic where appropriate, highly detailed, historically or contextually believable, natural proportions, coherent lighting, realistic textures, and immersive storytelling.

NEGATIVE:
Avoid generic rural scenery, unrealistic architecture, excessive decoration, stereotypes, artificial-looking people, distorted anatomy, and unrelated objects.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // ARCHITECTURE / CITY
        // =====================================================

        if (context.architecture || context.city) {

            return `
Create a ${style}, highly detailed architectural or urban image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

SUBJECT:
A clearly defined architectural or urban subject with strong geometry, realistic proportions, functional design, detailed facade elements, and a clear visual identity.

SETTING:
A believable surrounding environment containing roads, buildings, pedestrians, transportation, vegetation, infrastructure, and realistic spatial relationships.

VISUAL STORY:
Make the environment feel functional and inhabited rather than artificially assembled.

COMPOSITION:
Use strong geometry, leading lines, foreground-to-background depth, controlled perspective, and clear subject hierarchy.

CAMERA:
Professional architectural photography using a wide-angle lens with realistic perspective and controlled vertical lines.

LIGHTING:
Realistic directional lighting, environmental reflections, window illumination, shadows, and atmospheric depth.

MATERIALS:
Glass, steel, concrete, stone, wood, metal, realistic windows, structural joints, facade details, and surface imperfections.

STYLE:
${styleDirection}

QUALITY:
Highly detailed, realistic scale, coherent architecture, physically believable lighting, professional composition, and polished visual storytelling.

NEGATIVE:
Avoid impossible structures, distorted architecture, random buildings, inconsistent perspective, excessive clutter, flat lighting, and unrelated objects.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // PRODUCT / CAR / TECH
        // =====================================================

        if (context.product) {

            return `
Create a ${style}, highly detailed commercial-quality image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

SUBJECT:
A clearly defined premium product or technological object with precise proportions, distinctive design, functional components, and realistic materials.

ENVIRONMENT:
A controlled studio or contextually appropriate environment that supports the product without distracting from it.

DETAIL:
Show important buttons, surfaces, seams, interfaces, materials, reflections, mechanisms, and functional elements where relevant.

COMPOSITION:
Strong product hierarchy, clean framing, controlled negative space, and professional presentation.

CAMERA:
Professional product photography with realistic 50mm or 85mm lens characteristics and controlled depth of field.

LIGHTING:
Soft studio lighting, controlled highlights, realistic reflections, subtle rim lighting, and contact shadows.

MATERIALS:
Metal, glass, plastic, leather, rubber, fabric, polished surfaces, and realistic micro-textures.

STYLE:
${styleDirection}

QUALITY:
Premium commercial quality, precise geometry, realistic materials, sharp details, coherent lighting, and professional presentation.

NEGATIVE:
Avoid distorted products, incorrect proportions, floating objects, unrealistic reflections, excessive clutter, and unnecessary elements.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // SPACE
        // =====================================================

        if (context.space) {

            return `
Create a ${style}, highly detailed cinematic space image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

SUBJECT:
A clearly defined futuristic space subject with believable engineering, strong visual identity, detailed structures, and realistic scale.

ENVIRONMENT:
A vast cosmic environment with stars, planets, nebulae, orbital structures, spacecraft, or stations appropriate to the original concept.

TECHNOLOGY:
Advanced but physically coherent spacecraft systems, interfaces, communication equipment, robotics, propulsion systems, and engineering.

COMPOSITION:
Epic scale relationships, clear focal point, strong depth, layered cosmic environment, and cinematic framing.

CAMERA:
Wide cinematic perspective with realistic scale and immersive environmental storytelling.

LIGHTING:
Directional cosmic lighting, planetary illumination, realistic reflections, deep shadows, and controlled highlights.

MATERIALS:
Metal alloys, glass, carbon composites, illuminated panels, mechanical components, and realistic spacecraft surfaces.

STYLE:
${styleDirection}

QUALITY:
Highly detailed, scientifically believable where appropriate, cinematic, coherent, realistic materials, and professional visual storytelling.

NEGATIVE:
Avoid impossible engineering, random spacecraft, distorted structures, excessive glowing effects, and unrelated elements.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // FANTASY
        // =====================================================

        if (context.fantasy) {

            return `
Create a ${style}, highly detailed fantasy image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

SUBJECT:
A distinctive fantasy subject with clear visual characteristics, expressive details, believable clothing or armor, and strong visual identity.

ENVIRONMENT:
An immersive fantasy world with appropriate architecture, landscapes, mystical elements, atmosphere, and environmental storytelling.

VISUAL STORY:
Create natural relationships between characters, creatures, architecture, objects, and environment.

COMPOSITION:
Epic cinematic framing, strong depth, clear focal point, leading lines, and balanced visual hierarchy.

LIGHTING:
Dramatic natural or magical illumination with realistic shadows and atmospheric depth.

MATERIALS:
Stone, wood, metal, fabric, leather, crystals, vegetation, and detailed environmental surfaces.

STYLE:
${styleDirection}

QUALITY:
Highly detailed, coherent, immersive, believable proportions, sophisticated lighting, and professional fantasy production design.

NEGATIVE:
Avoid random fantasy objects, excessive glowing effects, distorted anatomy, inconsistent scale, and unrelated details.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // HORROR
        // =====================================================

        if (context.horror) {

            return `
Create a ${style}, highly detailed horror image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

SUBJECT:
A clearly defined unsettling subject with realistic physical characteristics and strong psychological visual presence.

ENVIRONMENT:
An abandoned, isolated, or threatening environment with believable decay, architecture, objects, and environmental clues.

ATMOSPHERE:
Fog, darkness, dust, moisture, environmental particles, silence, negative space, and subtle movement.

COMPOSITION:
Controlled negative space, strong subject placement, deep perspective, and cinematic framing.

CAMERA:
Wide cinematic perspective with realistic depth and deliberate visual tension.

LIGHTING:
Minimal directional lighting, practical light sources, deep shadows, subtle rim lighting, and atmospheric illumination.

MATERIALS:
Aged concrete, cracked walls, rusted metal, dirty glass, decaying wood, wet surfaces, dust, and damaged fabrics.

STYLE:
${styleDirection}

QUALITY:
Highly detailed, atmospheric, coherent, realistic textures, physically believable lighting, and strong visual storytelling.

NEGATIVE:
Avoid cartoonish horror, excessive gore, random monsters, distorted anatomy, flat lighting, and unrelated objects.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
        }


        // =====================================================
        // DEFAULT SMART IMAGE
        // =====================================================

        return `
Create a ${style}, highly detailed AI image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

CONCEPT:
Understand the original idea first. Preserve its core meaning while adding only details that naturally strengthen the concept.

SUBJECT:
Define the main subject clearly, including its appearance, characteristics, important objects, and visual identity.

SETTING & ENVIRONMENT:
Build a believable environment specifically around the subject, including location, architecture, weather, time of day, background elements, and environmental conditions relevant to the idea.

VISUAL STORY:
Create meaningful relationships between the subject, environment, people, objects, and surrounding elements.

COMPOSITION:
Use strong foreground, midground, and background separation, clear visual hierarchy, leading lines, balanced framing, realistic scale, and intentional placement.

CAMERA:
Choose an appropriate professional camera perspective, lens, framing, and depth of field based on the subject.

LIGHTING:
Use physically believable lighting appropriate to the requested atmosphere, time, environment, and style.

COLOR PALETTE:
Create a cohesive color palette that supports the original concept and selected visual style.

MATERIALS & TEXTURES:
Add realistic surface properties, textures, imperfections, reflections, and material characteristics appropriate to the scene.

STYLE DIRECTION:
${styleDirection}

CORE IDEA PROTECTION:
Preserve the original idea exactly at its core.
Every added detail must support the concept rather than change it.

COHERENCE:
All objects, people, architecture, technology, lighting, materials, perspective, and atmosphere must logically belong together.

QUALITY:
Highly detailed, coherent, professionally composed, realistic proportions, physically believable lighting, detailed textures, atmospheric depth, polished visual storytelling, and optimized for modern AI image generation.

NEGATIVE:
Avoid generic visuals, unnecessary objects, inconsistent perspective, distorted anatomy, unrealistic materials, flat lighting, excessive clutter, blurry textures, duplicated elements, and anything unrelated to the original idea.

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.
`;
    }


    // =========================================================
    // VIDEO PROMPT
    // =========================================================

    function generateVideoPrompt(idea, style) {

        return `
Create a ${style}, highly detailed AI video based on this original idea:

"${idea}"

VIDEO INTELLIGENCE:

SCENE:
Define the environment, location, time, weather, atmosphere, and visual context.

SUBJECT & ACTION:
Clearly define the main subject and what it is doing.

MOTION:
Describe natural movement of characters, objects, vehicles, clothing, hair, particles, weather, and environmental elements.

CAMERA:
Specify camera angle, lens, framing, movement, tracking, pans, tilts, zooms, and transitions where appropriate.

LIGHTING:
Define realistic light direction, shadows, highlights, reflections, practical lights, and atmospheric illumination.

PACING:
Create a clear visual progression with a beginning, development, and satisfying ending.

STYLE:
${getStyleDirection(style)}

QUALITY:
Smooth motion, realistic physics, consistent subjects, coherent environments, cinematic lighting, detailed textures, and temporal consistency.

NEGATIVE:
Avoid jitter, flickering objects, inconsistent faces, impossible motion, sudden environmental changes, distorted anatomy, and unnecessary visual clutter.

OUTPUT:
Return one complete, ready-to-use AI video generation prompt.
`;
    }


    // =========================================================
    // TEXT PROMPT
    // =========================================================

    function generateTextPrompt(idea, style) {

        return `
Create a ${style}, high-quality AI text response based on this idea:

"${idea}"

TEXT INTELLIGENCE:

OBJECTIVE:
Clearly define what the final response should accomplish.

AUDIENCE:
Adapt vocabulary, complexity, examples, and explanation depth to the intended audience.

STRUCTURE:
Organize the response logically with useful sections, clear progression, and strong readability.

TONE:
Use a ${style} communication style that feels natural, confident, clear, and engaging.

CONTENT:
Expand the original idea with relevant information, examples, context, explanations, and practical details.

CLARITY:
Use precise language and avoid repetition, filler, vague statements, and unnecessary complexity.

QUALITY:
Make the final response accurate, useful, coherent, engaging, and professionally written.

OUTPUT:
Return one complete, ready-to-use AI writing prompt.
`;
    }


    // =========================================================
    // CODE PROMPT
    // =========================================================

    function generateCodePrompt(idea) {

        return `
Create a professional AI coding prompt based on this idea:

"${idea}"

CODE INTELLIGENCE:

REQUIREMENTS:
Clearly define functionality, inputs, outputs, user requirements, and expected behavior.

ARCHITECTURE:
Choose a suitable architecture, components, modules, APIs, dependencies, and file structure where relevant.

IMPLEMENTATION:
Generate clean, readable, modular, maintainable code using appropriate best practices.

ERROR HANDLING:
Consider invalid inputs, edge cases, failures, and unexpected behavior.

SECURITY:
Consider relevant security risks and avoid unsafe implementation patterns.

PERFORMANCE:
Optimize important operations without unnecessarily reducing readability.

TESTING:
Include appropriate test cases and validation steps.

QUALITY:
The solution should be reliable, maintainable, understandable, and production-ready where appropriate.

OUTPUT:
Return one complete, ready-to-use AI coding prompt.
`;
    }


    // =========================================================
    // STUDY PROMPT
    // =========================================================

    function generateStudyPrompt(idea) {

        return `
Create a professional AI study prompt based on this idea:

"${idea}"

STUDY INTELLIGENCE:

LEVEL:
Adapt the explanation to the learner's current level.

CONCEPTS:
Break difficult concepts into simple step-by-step explanations.

EXAMPLES:
Use examples, analogies, practical applications, and diagrams-in-words when useful.

EXAM FOCUS:
Highlight important concepts, formulas, definitions, patterns, and commonly tested areas.

COMMON MISTAKES:
Explain likely mistakes and how to avoid them.

PRACTICE:
Provide practice questions progressing from basic understanding to challenging application.

REVISION:
Include key takeaways, concise revision points, and useful memory techniques.

QUALITY:
Make the learning experience accurate, structured, engaging, clear, and effective.

OUTPUT:
Return one complete, ready-to-use AI study prompt.
`;
    }


    // =========================================================
    // MASTER GENERATOR
    // =========================================================

    function generatePrompt(idea, aiType, style) {

        if (aiType === "image") {

            return generateImagePrompt(
                idea,
                style
            );

        }

        if (aiType === "video") {

            return generateVideoPrompt(
                idea,
                style
            );

        }

        if (aiType === "text") {

            return generateTextPrompt(
                idea,
                style
            );

        }

        if (aiType === "code") {

            return generateCodePrompt(
                idea
            );

        }

        if (aiType === "study") {

            return generateStudyPrompt(
                idea
            );
        }

        return generateTextPrompt(
            idea,
            style
        );
    }


    // =========================================================
    // QUALITY SCORE
    // =========================================================

    function calculateQualityScore(
        prompt,
        idea,
        aiType
    ) {

        let score = 45;

        const text = prompt.toLowerCase();


        // Idea quality
        if (idea.length >= 15) score += 5;
        if (idea.length >= 30) score += 3;


        // Important intelligence sections
        const sections = [
            "concept:",
            "subject:",
            "setting",
            "composition:",
            "camera:",
            "lighting:",
            "quality:",
            "output:"
        ];

        sections.forEach(section => {

            if (text.includes(section)) {
                score += 2;
            }

        });


        // AI-specific intelligence

        if (aiType === "image") {

            if (text.includes("visual story")) score += 3;
            if (text.includes("materials")) score += 2;
            if (text.includes("negative")) score += 2;
            if (text.includes("core idea protection")) score += 2;
        }


        if (aiType === "video") {

            if (text.includes("motion")) score += 3;
            if (text.includes("pacing")) score += 3;
        }


        if (aiType === "text") {

            if (text.includes("audience")) score += 3;
            if (text.includes("clarity")) score += 2;
        }


        if (aiType === "code") {

            if (text.includes("error handling")) score += 3;
            if (text.includes("testing")) score += 3;
            if (text.includes("security")) score += 2;
        }


        if (aiType === "study") {

            if (text.includes("exam focus")) score += 3;
            if (text.includes("practice")) score += 3;
        }


        return Math.min(
            Math.round(score),
            100
        );
    }


    // =========================================================
    // QUALITY BOX
    // =========================================================

    function createQualityBox(score) {

        const clarity =
            Math.min(100, score + 1);

        const detail =
            Math.min(100, score + 3);

        const structure =
            Math.min(100, score);

        const aiReady =
            Math.min(100, score + 2);


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

                <button
                    id="improveBtn"
                    class="improve-btn"
                >
                    💡 Improve Prompt ✨
                </button>

            </div>
        `;
    }


    // =========================================================
    // IMPROVE PROMPT
    // =========================================================

    function improvePrompt(
        originalPrompt,
        idea,
        aiType,
        style
    ) {

        return `
Create a ${style}, professionally optimized AI prompt based on this original idea:

"${idea}"

PROMPT IMPROVEMENT:

CORE INTENT:
Preserve the exact meaning, purpose, subject, location, time period, and important constraints of the original idea.

CONTEXT:
Add only relevant context that helps the AI understand the situation.

SPECIFICITY:
Replace vague wording with concrete visual, structural, technical, or contextual information.

COHERENCE:
Ensure every element belongs to the same logical world and supports the original concept.

STRUCTURE:
Organize the prompt into clear sections so an AI model can easily understand the objective, requirements, style, constraints, and expected output.

STYLE:
Maintain a consistent ${style} style.

PRECISION:
Use concise, direct, unambiguous language. Remove unnecessary repetition and generic filler.

AI OPTIMIZATION:
Prioritize meaningful information over prompt length. Every added detail should improve the final result.

ORIGINAL IDEA PROTECTION:
Do not change the core idea.

QUALITY:
Maximize relevance, clarity, specificity, coherence, structure, and practical AI usability.

FINAL INSTRUCTION:
Generate one polished, complete, professional, ready-to-use AI prompt for the original idea.

OUTPUT:
Return only the improved prompt.
`;
    }


    // =========================================================
    // GENERATE BUTTON
    // =========================================================

    if (generateBtn) {

        generateBtn.addEventListener(
            "click",
            function () {

                if (!ideaInput) return;

                const idea =
                    cleanText(
                        ideaInput.value
                    );

                const aiType =
                    aiTypeInput
                        ? aiTypeInput.value
                        : "image";

                const style =
                    styleInput
                        ? styleInput.value
                        : "cinematic";


                if (!idea) {

                    alert(
                        "Please enter your idea first."
                    );

                    return;
                }


                const generatedPrompt =
                    generatePrompt(
                        idea,
                        aiType,
                        style
                    );


                if (promptResult) {

                    promptResult.textContent =
                        generatedPrompt;
                }


                // Save history
                savePromptToHistory(
                    generatedPrompt,
                    aiType,
                    style,
                    idea
                );


                if (resultBox) {

                    resultBox.style.display =
                        "block";


                    const oldQuality =
                        document.getElementById(
                            "qualityBox"
                        );

                    if (oldQuality) {
                        oldQuality.remove();
                    }


                    const score =
                        calculateQualityScore(
                            generatedPrompt,
                            idea,
                            aiType
                        );


                    const qualityContainer =
                        document.createElement(
                            "div"
                        );

                    qualityContainer.id =
                        "qualityBox";


                    qualityContainer.innerHTML =
                        createQualityBox(score);


                    resultBox.appendChild(
                        qualityContainer
                    );


                    attachImproveButton(
                        qualityContainer,
                        idea,
                        aiType,
                        style
                    );


                    resultBox.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

            }
        );
    }


    // =========================================================
    // IMPROVE BUTTON
    // =========================================================

    function attachImproveButton(
        qualityContainer,
        idea,
        aiType,
        style
    ) {

        const improveBtn =
            document.getElementById(
                "improveBtn"
            );

        if (!improveBtn) return;


        improveBtn.addEventListener(
            "click",
            function () {

                if (!promptResult) return;


                const improved =
                    improvePrompt(
                        promptResult.textContent,
                        idea,
                        aiType,
                        style
                    );


                promptResult.textContent =
                    improved;


                const newScore =
                    Math.min(
                        100,
                        calculateQualityScore(
                            improved,
                            idea,
                            aiType
                        ) + 4
                    );


                qualityContainer.innerHTML =
                    createQualityBox(
                        newScore
                    );


                const newButton =
                    document.getElementById(
                        "improveBtn"
                    );


                if (newButton) {

                    newButton.textContent =
                        "🚀 Prompt Improved!";

                    setTimeout(
                        function () {

                            const resetButton =
                                document.getElementById(
                                    "improveBtn"
                                );

                            if (resetButton) {

                                resetButton.textContent =
                                    "💡 Improve Prompt ✨";
                            }

                        },
                        1800
                    );
                }

            }
        );
    }


    // =========================================================
    // COPY
    // =========================================================

    if (copyBtn) {

        copyBtn.addEventListener(
            "click",
            async function () {

                if (!promptResult) return;


                try {

                    await navigator.clipboard.writeText(
                        promptResult.textContent
                    );


                    copyBtn.textContent =
                        "✅ Copied!";


                    setTimeout(
                        function () {

                            copyBtn.textContent =
                                "📋 Copy";

                        },
                        1500
                    );


                } catch (error) {

                    alert(
                        "Unable to copy the prompt. Please copy it manually."
                    );
                }

            }
        );
    }


    // =========================================================
    // INITIAL HISTORY
    // =========================================================

    displayPromptHistory();

});


// =============================================================
// PROMPT HISTORY
// =============================================================

function savePromptToHistory(
    prompt,
    aiType,
    style,
    originalIdea
) {

    const history =
        JSON.parse(
            localStorage.getItem(
                "aivivoHistory"
            )
        ) || [];


    const newPrompt = {

        id: Date.now(),

        prompt: prompt,

        originalIdea:
            originalIdea || "",

        aiType: aiType,

        style: style,

        favorite: false,

        date:
            new Date().toLocaleString()

    };


    history.unshift(
        newPrompt
    );


    const limitedHistory =
        history.slice(0, 20);


    localStorage.setItem(
        "aivivoHistory",
        JSON.stringify(
            limitedHistory
        )
    );


    displayPromptHistory();
}


// =============================================================
// HISTORY ICON
// =============================================================

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


// =============================================================
// ESCAPE HTML
// =============================================================

function escapeHistoryHTML(text) {

    return String(text || "")

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}


// =============================================================
// DISPLAY HISTORY
// =============================================================

function displayPromptHistory() {

    const historyList =
        document.getElementById(
            "historyList"
        );


    if (!historyList) return;


    const history =
        JSON.parse(
            localStorage.getItem(
                "aivivoHistory"
            )
        ) || [];


    const searchInput =
        document.getElementById(
            "historySearch"
        );


    const filterInput =
        document.getElementById(
            "historyFilter"
        );


    const searchTerm =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    const filterType =
        filterInput
            ? filterInput.value
            : "all";


    const filteredHistory =
        history.filter(
            function (item) {

                const searchable =
                    (
                        item.prompt +
                        " " +
                        (item.originalIdea || "")
                    )
                    .toLowerCase();


                const matchesSearch =
                    searchable.includes(
                        searchTerm
                    );


                const matchesFilter =
                    filterType === "all" ||
                    item.aiType === filterType;


                return (
                    matchesSearch &&
                    matchesFilter
                );
            }
        );


    if (filteredHistory.length === 0) {

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


    historyList.innerHTML =
        filteredHistory
            .map(
                function (item) {

                    return `

                    <div class="history-item">

                        <div class="history-item-header">

                            <span class="history-type">

                                ${getHistoryIcon(
                                    item.aiType
                                )}

                                ${String(
                                    item.aiType || ""
                                ).toUpperCase()}

                            </span>

                            <span class="history-date">
                                ${escapeHistoryHTML(
                                    item.date
                                )}
                            </span>

                        </div>


                        <div class="history-prompt">

                            ${
                                escapeHistoryHTML(
                                    item.originalIdea ||
                                    item.prompt
                                )
                            }

                        </div>


                        <div class="history-actions">

                            <button
                                onclick="copyHistoryPrompt(${item.id})"
                            >
                                📋 Copy
                            </button>


                            <button
                                onclick="reuseHistoryPrompt(${item.id})"
                            >
                                🔄 Reuse
                            </button>


                            <button
                                onclick="toggleFavoritePrompt(${item.id})"
                            >
                                ${
                                    item.favorite
                                    ? "⭐ Favorited"
                                    : "☆ Favorite"
                                }
                            </button>


                            <button
                                onclick="deleteHistoryPrompt(${item.id})"
                            >
                                🗑️ Delete
                            </button>

                        </div>

                    </div>

                `;
                }
            )
            .join("");
}


// =============================================================
// COPY HISTORY
// =============================================================

function copyHistoryPrompt(id) {

    const history =
        JSON.parse(
            localStorage.getItem(
                "aivivoHistory"
            )
        ) || [];


    const item =
        history.find(
            prompt =>
                prompt.id === id
        );


    if (!item) return;


    navigator.clipboard
        .writeText(
            item.prompt
        )
        .then(
            function () {

                alert(
                    "✅ Prompt copied!"
                );

            }
        );
}


// =============================================================
// REUSE HISTORY
// =============================================================

function reuseHistoryPrompt(id) {

    const history =
        JSON.parse(
            localStorage.getItem(
                "aivivoHistory"
            )
        ) || [];


    const item =
        history.find(
            prompt =>
                prompt.id === id
        );


    if (!item) return;


    const ideaInput =
        document.getElementById(
            "idea"
        );


    const aiTypeInput =
        document.getElementById(
            "aiType"
        );


    const styleInput =
        document.getElementById(
            "style"
        );


    if (ideaInput) {

        ideaInput.value =
            item.originalIdea ||
            item.prompt;


        ideaInput.dispatchEvent(
            new Event("input")
        );
    }


    if (aiTypeInput) {

        aiTypeInput.value =
            item.aiType;
    }


    if (styleInput) {

        styleInput.value =
            item.style;
    }


    const generator =
        document.getElementById(
            "generator"
        );


    if (generator) {

        generator.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// =============================================================
// DELETE HISTORY
// =============================================================

function deleteHistoryPrompt(id) {

    let history =
        JSON.parse(
            localStorage.getItem(
                "aivivoHistory"
            )
        ) || [];


    history =
        history.filter(
            prompt =>
                prompt.id !== id
        );


    localStorage.setItem(
        "aivivoHistory",
        JSON.stringify(
            history
        )
    );


    displayPromptHistory();
}


// =============================================================
// CLEAR HISTORY
// =============================================================

function clearPromptHistory() {

    localStorage.removeItem(
        "aivivoHistory"
    );


    displayPromptHistory();
}


// =============================================================
// FAVORITE
// =============================================================

function toggleFavoritePrompt(id) {

    let history =
        JSON.parse(
            localStorage.getItem(
                "aivivoHistory"
            )
        ) || [];


    const item =
        history.find(
            prompt =>
                prompt.id === id
        );


    if (!item) return;


    item.favorite =
        !item.favorite;


    localStorage.setItem(
        "aivivoHistory",
        JSON.stringify(
            history
        )
    );


    displayPromptHistory();
}


// =============================================================
// HISTORY CONTROLS
// =============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const clearBtn =
            document.getElementById(
                "clearHistoryBtn"
            );


        const searchInput =
            document.getElementById(
                "historySearch"
            );


        const filterInput =
            document.getElementById(
                "historyFilter"
            );


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


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                displayPromptHistory
            );
        }


        if (filterInput) {

            filterInput.addEventListener(
                "change",
                displayPromptHistory
            );
        }

    }
);
