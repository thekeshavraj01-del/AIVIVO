document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // AIVIVO — SMART AI PROMPT GENERATOR
    // Version: Smart Intelligence 3.0
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
    // CONSTANTS
    // =========================================================

    const HISTORY_KEY = "aivivoHistory";
    const THEME_KEY = "aivivoTheme";
    const MAX_HISTORY = 20;


    // =========================================================
    // HELPER FUNCTIONS
    // =========================================================

    function hasAny(text, words) {
        return words.some(function (word) {
            return text.includes(word);
        });
    }


    function escapeHTML(text) {

        return String(text || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
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


    function getHistory() {

        try {

            return JSON.parse(
                localStorage.getItem(HISTORY_KEY)
            ) || [];

        } catch (error) {

            return [];
        }
    }


    function saveHistory(history) {

        localStorage.setItem(
            HISTORY_KEY,
            JSON.stringify(history)
        );
    }


    // =========================================================
    // DARK MODE
    // =========================================================

    function initializeTheme() {

        if (!themeToggle) return;

        const savedTheme =
            localStorage.getItem(THEME_KEY);

        if (savedTheme === "dark") {

            document.body.classList.add("dark");
            themeToggle.textContent = "☀️";

        } else {

            document.body.classList.remove("dark");
            themeToggle.textContent = "🌙";
        }


        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            const isDark =
                document.body.classList.contains("dark");

            themeToggle.textContent =
                isDark ? "☀️" : "🌙";

            localStorage.setItem(
                THEME_KEY,
                isDark ? "dark" : "light"
            );

        });

    }


    initializeTheme();


    // =========================================================
    // IDEA CHARACTER COUNTER
    // =========================================================

    function updateIdeaCounter() {

        if (!ideaInput || !ideaCounter) return;

        const count =
            ideaInput.value.length;

        ideaCounter.textContent =
            `${count.toLocaleString()} characters`;
    }


    if (ideaInput) {

        ideaInput.addEventListener(
            "input",
            updateIdeaCounter
        );

        updateIdeaCounter();
    }


    // =========================================================
    // STYLE INTELLIGENCE
    // =========================================================

    function getStyleDirection(style) {

        if (style === "cinematic") {

            return `
Premium cinematic visual language, dramatic composition, film-quality production design, sophisticated color grading, realistic lighting, atmospheric depth, strong visual hierarchy, and immersive storytelling.
`;
        }


        if (style === "creative") {

            return `
Highly creative visual interpretation, distinctive composition, imaginative but coherent design choices, expressive details, artistic atmosphere, and strong visual identity.
`;
        }


        if (style === "professional") {

            return `
Clean professional visual direction, precise composition, realistic details, controlled lighting, polished presentation, consistent visual language, and commercial-quality execution.
`;
        }


        return `
Clean, simple, focused visual direction with balanced composition, natural details, clear subject hierarchy, and only relevant supporting elements.
`;
    }


    // =========================================================
    // IMAGE INTELLIGENCE
    // =========================================================

    function generateImagePrompt(idea, style) {

        const ideaLower =
            idea.toLowerCase();

        let subject = "";
        let environment = "";
        let technology = "";
        let atmosphere = "";
        let camera = "";
        let lighting = "";
        let colors = "";
        let materials = "";
        let extraDetails = "";
        let concept = "";
        let indianContext = "";
        let negative = "";


        // =====================================================
        // SMART CONTEXT DETECTION
        // =====================================================

        const isFuturistic =
            hasAny(ideaLower, [
                "futuristic",
                "future",
                "2050",
                "2070",
                "2100",
                "sci-fi",
                "science fiction",
                "advanced"
            ]);


        const isCity =
            hasAny(ideaLower, [
                "city",
                "megacity",
                "urban",
                "downtown",
                "skyscraper",
                "metropolis",
                "metro city"
            ]);


        const isIndia =
            hasAny(ideaLower, [
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
                "jaipur",
                "ahmedabad",
                "pune"
            ]);


        const isNight =
            hasAny(ideaLower, [
                "night",
                "nighttime",
                "at night",
                "midnight",
                "evening",
                "after dark"
            ]);


        const isRain =
            hasAny(ideaLower, [
                "rain",
                "rainy",
                "raining",
                "monsoon",
                "wet"
            ]);


        const hasCyberpunk =
            hasAny(ideaLower, [
                "cyberpunk",
                "neon cyberpunk",
                "cyberpunk city",
                "cyberpunk future"
            ]);


        // =====================================================
        // 1. FUTURISTIC INDIAN CITY
        // =====================================================

        if (isFuturistic && isCity && isIndia) {

            concept =
                "Interpret the idea as a believable futuristic Indian metropolis while preserving the original concept, location, time period, and requested atmosphere.";


            subject =
                "A vast futuristic Indian megacity in the requested future era, dominated by sophisticated glass-and-metal skyscrapers, advanced Indian urban architecture, dense metropolitan districts, elevated transportation systems, autonomous vehicles, intelligent infrastructure, and a large population living naturally within the city.";


            environment =
                isNight

                    ? "A highly developed Indian metropolitan district at night with interconnected skyscrapers, elevated transit corridors, pedestrian zones, landscaped public spaces, advanced roads, glowing storefronts, distant towers, atmospheric haze, and realistic urban density."

                    : "A highly developed Indian metropolitan district during the day with interconnected skyscrapers, elevated transit corridors, pedestrian zones, landscaped public spaces, advanced roads, public infrastructure, distant towers, and realistic urban density.";


            technology =
                "Autonomous electric vehicles, high-speed elevated transit, intelligent traffic systems, delivery drones, digital public infrastructure, smart roads, AI-assisted services, transparent interfaces, renewable-energy systems, advanced communication networks, and futuristic transportation technology.";


            atmosphere =
                isNight

                    ? "Cinematic nighttime atmosphere with atmospheric haze, realistic city humidity, subtle fog, illuminated windows, glowing transit systems, reflections, practical street lighting, and a vibrant sense of everyday urban life."

                    : "Cinematic daytime atmosphere with realistic urban haze, sunlight interacting with glass and metal surfaces, environmental depth, moving traffic, active public spaces, and a vibrant sense of everyday urban life.";


            camera =
                "Wide cinematic establishing shot from street level using a 28mm lens, strong foreground-to-background depth, dramatic vertical architecture, realistic scale, controlled perspective, clear visual hierarchy, and immersive environmental storytelling.";


            lighting =
                isNight

                    ? "Sophisticated cyan and violet futuristic lighting balanced with warm amber building interiors, realistic street lights, illuminated transportation systems, volumetric light, and reflections across wet or polished surfaces."

                    : "Natural cinematic daylight combined with controlled architectural illumination, realistic shadows, reflections on glass and metal, subtle atmospheric light, and balanced highlights.";


            colors =
                "Deep blue, metallic silver, charcoal, electric cyan, subtle violet, warm amber, white, and restrained saffron and green accents inspired by India's visual identity.";


            materials =
                "Reflective architectural glass, brushed steel, polished concrete, dark stone, illuminated panels, advanced road surfaces, transparent displays, realistic vehicle materials, detailed building facades, and subtle surface imperfections.";


            extraDetails =
                "Include diverse Indian pedestrians, modern futuristic clothing, subtle Indian architectural influences, multilingual digital signage, green rooftop gardens, elevated metro systems, autonomous vehicles, drones, smart public infrastructure, futuristic street commerce, realistic businesses, and natural signs of everyday life.";


            indianContext =
                "Use subtle and believable Indian cultural and architectural influences, modern Indian urban planning, multilingual signage, public spaces, greenery, local transportation patterns, and technology adapted to the Indian environment. Avoid stereotypes or exaggerated cultural decoration.";


            negative =
                "Avoid generic futuristic cities, random architecture, excessive neon, stereotypical cultural elements, unrealistic vehicles, distorted people, inconsistent perspective, impossible structures, flat lighting, excessive clutter, low-detail buildings, blurry textures, and unrelated objects.";
        }


        // =====================================================
        // 2. CYBERPUNK
        // =====================================================

        else if (hasCyberpunk) {

            concept =
                "Interpret the idea through a dense cyberpunk visual language while preserving the original subject and setting.";


            subject =
                "A highly detailed cyberpunk environment with a clearly defined focal subject, futuristic architecture, advanced transportation, dense urban infrastructure, and believable technological systems.";


            environment =
                "A rain-soaked futuristic downtown district with reflective streets, layered walkways, towering buildings, glowing storefronts, dense infrastructure, atmospheric fog, and distant structures disappearing into haze.";


            technology =
                "Holographic advertisements, autonomous vehicles, drones, robotic systems, transparent digital interfaces, intelligent traffic networks, futuristic public transportation, and advanced urban technology.";


            atmosphere =
                "Heavy cinematic rain, drifting steam, volumetric fog, glowing reflections, humid night air, atmospheric haze, and an immersive high-tech urban mood.";


            camera =
                "Low-angle cinematic establishing shot using a wide 28mm lens, deep perspective, strong foreground reflections, towering architecture, controlled depth of field, and balanced framing.";


            lighting =
                "Intense cyan, magenta, and violet neon lighting balanced with warm architectural lights, volumetric beams, reflections, deep shadows, and realistic illumination.";


            colors =
                "Electric cyan, neon magenta, violet, deep blue, charcoal black, metallic gray, and restrained warm amber.";


            materials =
                "Rain-covered asphalt, reflective glass, brushed metal, dark concrete, illuminated plastic, holographic surfaces, cables, futuristic vehicle panels, and detailed architectural textures.";


            extraDetails =
                "Include pedestrians, robotic devices, multilingual signs, cables, ventilation systems, rooftop structures, distant aircraft, illuminated windows, and subtle signs of everyday life.";


            indianContext = "";


            negative =
                "Avoid generic sci-fi clichés, excessive neon, random objects, distorted anatomy, impossible architecture, flat lighting, visual clutter, low-detail textures, and unrelated technology.";
        }


        // =====================================================
        // 3. PORTRAIT
        // =====================================================

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

            concept =
                "Interpret the idea as a visually coherent character-focused scene while preserving the identity and intention of the original concept.";


            subject =
                `A clearly defined human character based on "${idea}", with realistic facial proportions, expressive eyes, natural skin texture, detailed hair, carefully designed clothing, believable anatomy, and a distinct visual identity.`;


            environment =
                "A visually appropriate environment that supports the character, with controlled background detail, realistic depth, subtle environmental storytelling, and natural subject separation.";


            technology =
                "Use relevant accessories, objects, clothing details, or technology only when naturally supported by the original concept.";


            atmosphere =
                "A carefully controlled atmosphere with realistic air depth, subtle particles, gentle background separation, and a mood matching the original idea.";


            camera =
                "Professional portrait photography using realistic 50mm or 85mm lens characteristics, controlled framing, sharp eyes, natural perspective, realistic depth of field, and strong subject separation.";


            lighting =
                "Soft directional key light, subtle fill light, natural rim lighting, realistic facial shadows, controlled highlights, and cinematic skin illumination.";


            colors =
                "A sophisticated cinematic palette selected to complement the character, clothing, environment, and requested style.";


            materials =
                "Detailed skin texture, individual hair strands, realistic fabric, leather, metal accessories, natural surface imperfections, and physically believable materials.";


            extraDetails =
                "Add subtle facial expression, natural posture, realistic clothing folds, small environmental details, and believable interaction with the surroundings.";


            indianContext = "";


            negative =
                "Avoid plastic-looking skin, distorted anatomy, extra fingers, unnatural eyes, unrealistic hair, excessive retouching, bad proportions, blurry facial details, and artificial-looking expressions.";
        }


        // =====================================================
        // 4. LANDSCAPE / NATURE
        // =====================================================

        else if (hasAny(ideaLower, [
            "landscape",
            "mountain",
            "forest",
            "nature",
            "valley",
            "lake",
            "ocean",
            "beach",
            "waterfall",
            "river",
            "desert"
        ])) {

            concept =
                "Interpret the idea as a believable natural environment with strong depth, scale, atmosphere, and environmental storytelling.";


            subject =
                `A dramatic natural landscape based on "${idea}", with a clearly defined focal environment, detailed terrain, vegetation, geological formations, and strong visual depth.`;


            environment =
                "An expansive natural environment with layered foreground, midground, and background elements, atmospheric perspective, natural terrain variation, distant scenery, and believable environmental conditions.";


            technology =
                "Avoid unnecessary technology unless it naturally belongs to the original concept.";


            atmosphere =
                "Natural atmospheric haze, clouds, mist, wind movement, airborne particles, realistic humidity, environmental depth, and weather conditions appropriate to the scene.";


            camera =
                "Wide cinematic landscape composition using a 24mm wide-angle lens, strong leading lines, balanced foreground, dramatic horizon placement, and deep focus.";


            lighting =
                "Natural directional sunlight or dramatic golden-hour lighting with realistic shadows, highlights, atmospheric rays, and subtle environmental reflections.";


            colors =
                "Rich natural greens, earthy browns, atmospheric blues, soft highlights, and cinematic tones appropriate to the environment.";


            materials =
                "Detailed rocks, soil, vegetation, water surfaces, tree bark, clouds, terrain textures, and realistic natural materials.";


            extraDetails =
                "Add small environmental storytelling elements such as wildlife, trails, plants, weather effects, reflections, distant structures, or subtle human presence when appropriate.";


            indianContext = "";


            negative =
                "Avoid artificial landscapes, repetitive vegetation, unrealistic mountains, flat depth, oversaturated colors, distorted terrain, and unrelated objects.";
        }


        // =====================================================
        // 5. ARCHITECTURE / CITY
        // =====================================================

        else if (hasAny(ideaLower, [
            "building",
            "architecture",
            "house",
            "city",
            "skyscraper",
            "tower",
            "street",
            "road",
            "bridge"
        ])) {

            concept =
                "Interpret the idea as a coherent architectural or urban scene with realistic scale, spatial relationships, and visual structure.";


            subject =
                `A visually striking architectural or urban subject based on "${idea}", with clearly defined geometry, scale, facade design, windows, entrances, structural elements, and surrounding context.`;


            environment =
                "A believable city or architectural environment with streets, surrounding buildings, pedestrians, vehicles, landscaping, infrastructure, and realistic spatial relationships.";


            technology =
                "Add transportation systems, digital displays, smart infrastructure, lighting systems, or futuristic technology only when relevant to the concept.";


            atmosphere =
                "Detailed environmental atmosphere including weather, haze, reflections, shadows, airborne particles, and realistic urban activity.";


            camera =
                "Cinematic architectural photography using a wide-angle lens, strong geometric perspective, controlled vertical lines, dramatic framing, and realistic depth.";


            lighting =
                "Directional natural or artificial lighting interacting realistically with glass, metal, concrete, windows, streets, and surrounding structures.";


            colors =
                "A professional architectural color palette with balanced tones, controlled contrast, and colors supporting the selected style.";


            materials =
                "Glass, steel, concrete, stone, wood, brushed metal, illuminated surfaces, realistic windows, structural joints, and detailed facade textures.";


            extraDetails =
                "Include realistic signs, doors, windows, street furniture, vehicles, pedestrians, vegetation, utility systems, and small architectural details.";


            indianContext = "";


            negative =
                "Avoid impossible architecture, warped buildings, inconsistent perspective, floating objects, excessive clutter, unrealistic scale, and low-detail facades.";
        }


        // =====================================================
        // 6. PRODUCT / CAR / TECH
        // =====================================================

        else if (hasAny(ideaLower, [
            "product",
            "car",
            "phone",
            "laptop",
            "watch",
            "shoes",
            "bottle",
            "robot",
            "vehicle",
            "motorcycle"
        ])) {

            concept =
                "Interpret the idea as a premium product or technology-focused visual while preserving its exact identity.";


            subject =
                `A premium, clearly defined product based on "${idea}", with precise proportions, sophisticated design language, realistic surface details, functional components, and polished presentation.`;


            environment =
                "A carefully designed studio or contextual environment that supports the product without distracting from it.";


            technology =
                "Highlight relevant functional components, interfaces, mechanisms, materials, and technological features that naturally belong to the product.";


            atmosphere =
                "Clean controlled atmosphere with subtle depth, realistic reflections, carefully placed environmental elements, and a premium commercial mood.";


            camera =
                "Professional product photography using realistic 50mm or 85mm lens characteristics, precise framing, controlled perspective, and strong product separation.";


            lighting =
                "Professional studio lighting with large soft sources, controlled highlights, subtle rim lighting, realistic reflections, and carefully shaped shadows.";


            colors =
                "Premium commercial color grading with a cohesive palette that complements the product design.";


            materials =
                "Realistic metal, glass, plastic, leather, rubber, fabric, polished surfaces, micro-textures, seams, buttons, and material transitions.";


            extraDetails =
                "Add realistic product imperfections, precise edges, contact shadows, reflections, packaging elements, and premium commercial presentation.";


            indianContext = "";


            negative =
                "Avoid warped products, incorrect proportions, unreadable interfaces, floating objects, unrealistic reflections, excessive clutter, and inconsistent materials.";
        }


        // =====================================================
        // 7. SPACE / SCI-FI
        // =====================================================

        else if (hasAny(ideaLower, [
            "space",
            "galaxy",
            "planet",
            "astronaut",
            "spaceship",
            "science fiction"
        ])) {

            concept =
                "Interpret the idea as a cinematic science-fiction environment with believable scale, engineering, and cosmic atmosphere.";


            subject =
                `A highly detailed futuristic space subject based on "${idea}", with believable engineering, clearly defined structures, advanced equipment, and a strong visual focal point.`;


            environment =
                "A vast cosmic environment containing planets, stars, nebulae, orbital structures, distant spacecraft, or futuristic stations appropriate to the concept.";


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


            indianContext = "";


            negative =
                "Avoid physically impossible spacecraft, random cosmic objects, excessive glow, flat depth, inconsistent scale, and meaningless technology.";
        }


        // =====================================================
        // 8. FANTASY
        // =====================================================

        else if (hasAny(ideaLower, [
            "fantasy",
            "magic",
            "wizard",
            "dragon",
            "castle",
            "mythical"
        ])) {

            concept =
                "Interpret the idea as a coherent fantasy world while preserving the original subject and narrative intention.";


            subject =
                `A richly designed fantasy subject based on "${idea}", with distinctive visual characteristics, detailed clothing or armor, expressive features, and believable interaction with the magical environment.`;


            environment =
                "An expansive fantasy environment with ancient architecture, mystical landscapes, atmospheric depth, natural elements, and carefully designed environmental storytelling.";


            technology =
                "Use believable magical objects, artifacts, glowing symbols, enchanted structures, or mystical mechanisms when appropriate.";


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


            indianContext = "";


            negative =
                "Avoid random fantasy objects, inconsistent magic systems, distorted anatomy, excessive glow, flat environments, and unrelated details.";
        }


        // =====================================================
        // 9. HORROR
        // =====================================================

        else if (hasAny(ideaLower, [
            "horror",
            "haunted",
            "ghost",
            "scary",
            "abandoned"
        ])) {

            concept =
                "Interpret the idea as a psychologically atmospheric horror scene while preserving the original concept.";


            subject =
                `A clearly defined horror subject based on "${idea}", with unsettling visual characteristics, realistic textures, and strong psychological presence.`;


            environment =
                "An abandoned or isolated environment with decaying architecture, empty corridors, damaged structures, overgrown vegetation, and signs of neglect.";


            technology =
                "Use broken lights, old monitors, abandoned equipment, flickering electronics, or environmental technology only when appropriate.";


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


            indianContext = "";


            negative =
                "Avoid excessive gore, cartoonish horror, unrealistic anatomy, random scary objects, flat lighting, and meaningless visual clutter.";
        }


        // =====================================================
        // 10. DEFAULT SMART IMAGE
        // =====================================================

        else {

            concept =
                `Interpret the original idea intelligently while preserving its exact core meaning: "${idea}".`;


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
                `A professional color palette supporting the ${style} visual style and overall atmosphere.`;


            materials =
                "Realistic surfaces, materials, textures, environmental details, and subtle imperfections appropriate to the scene.";


            extraDetails =
                "Add meaningful visual details that make the environment feel alive while keeping every element relevant to the original idea.";


            indianContext = "";


            negative =
                "Avoid generic visuals, unnecessary objects, inconsistent perspective, distorted anatomy, unrealistic materials, flat lighting, excessive clutter, poor composition, blurry textures, and unrelated elements.";
        }


        // =====================================================
        // FINAL IMAGE PROMPT
        // =====================================================

        return `Create a ${style}, highly detailed AI image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

CONCEPT:
${concept}

SUBJECT:
${subject}

SETTING & ENVIRONMENT:
${environment}

TECHNOLOGY & OBJECTS:
${technology}

VISUAL STORY:
Create natural interactions between the subject, environment, people, objects, transportation, architecture, and surrounding elements when relevant. Make the scene feel alive, purposeful, and believable rather than artificially assembled.

ATMOSPHERE:
${atmosphere}

COMPOSITION:
Use strong foreground, midground, and background separation. Establish a clear visual hierarchy, leading lines, balanced framing, realistic scale, layered depth, and intentional placement of major elements.

CAMERA:
${camera}

LIGHTING:
${lighting}

COLOR PALETTE:
${colors}

MATERIALS & TEXTURES:
${materials}

${indianContext ? `INDIAN CONTEXT:\n${indianContext}\n` : ""}

ADDITIONAL VISUAL DETAILS:
${extraDetails}

STYLE DIRECTION:
${getStyleDirection(style)}

CORE IDEA PROTECTION:
Preserve the original idea exactly at its core. Added details must support the original concept rather than changing its meaning.

COHERENCE:
Ensure that architecture, people, objects, technology, lighting, perspective, environment, materials, and atmosphere logically belong together.

QUALITY:
Ultra-detailed, coherent, professionally composed, realistic proportions, physically believable lighting, detailed textures, strong atmospheric depth, polished visual storytelling, and optimized for modern AI image generation.

NEGATIVE:
${negative}

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.`;
    }


    // =========================================================
    // VIDEO INTELLIGENCE
    // =========================================================

    function generateVideoPrompt(idea, style) {

        return `Create a ${style}, highly detailed AI video based on this original idea:

"${idea}"

VIDEO INTELLIGENCE:

CORE OBJECTIVE:
Preserve the exact meaning and intention of the original idea while expanding it into a visually coherent moving scene.

SCENE:
Define the environment, location, time of day, weather, scale, background elements, and visual context.

SUBJECT & ACTION:
Clearly define the main subject and exactly what it is doing. Movement must feel natural, purposeful, and physically believable.

CAMERA:
Specify camera angle, framing, lens characteristics, camera movement, tracking, pans, tilts, zooms, transitions, and cinematic perspective.

MOTION:
Describe realistic movement of characters, vehicles, objects, clothing, hair, particles, weather, lighting, and environmental elements.

TEMPORAL CONSISTENCY:
Keep characters, objects, architecture, clothing, lighting, and environment visually consistent throughout the sequence.

LIGHTING:
Define directional lighting, shadows, highlights, reflections, practical lights, and atmospheric illumination.

ATMOSPHERE:
Add appropriate weather, fog, particles, smoke, dust, rain, reflections, and environmental movement.

PACING:
Create a clear visual beginning, development, and satisfying ending with natural cinematic pacing.

VISUAL STYLE:
Use ${style} visual language with professional composition, strong storytelling, realistic materials, and consistent visual identity.

QUALITY:
Smooth motion, realistic physics, stable subjects, coherent environments, cinematic lighting, high detail, professional production quality, and temporal consistency.

NEGATIVE:
Avoid jitter, flickering, warped objects, inconsistent faces, sudden environment changes, unnatural movement, broken physics, and random visual elements.

OUTPUT:
Return one complete, ready-to-use AI video generation prompt.`;
    }


    // =========================================================
    // TEXT INTELLIGENCE
    // =========================================================

    function generateTextPrompt(idea, style) {

        return `Create a ${style}, high-quality AI text response based on this original idea:

"${idea}"

TEXT INTELLIGENCE:

OBJECTIVE:
Clearly identify the purpose of the content and the result that should be achieved.

AUDIENCE:
Determine the most appropriate target audience and adapt vocabulary, complexity, explanation depth, and examples accordingly.

CONTEXT:
Use relevant context from the original idea without inventing unrelated information.

STRUCTURE:
Organize the response with a logical introduction, clear sections, useful details, examples where appropriate, and a concise conclusion when useful.

TONE:
Use a ${style} communication style that feels natural, confident, clear, and engaging.

CONTENT:
Expand the original idea with relevant information, practical details, examples, explanations, and useful context.

CLARITY:
Use precise language, logical flow, readable formatting, and clear explanations.

ACCURACY:
Do not invent facts. Clearly distinguish facts, assumptions, examples, and uncertainty when necessary.

QUALITY:
Make the final response useful, polished, coherent, engaging, accurate, and professionally written.

OUTPUT:
Return one complete, ready-to-use AI writing prompt.`;
    }


    // =========================================================
    // CODE INTELLIGENCE
    // =========================================================

    function generateCodePrompt(idea, style) {

        return `Create a professional AI coding prompt based on this original idea:

"${idea}"

CODE INTELLIGENCE:

OBJECTIVE:
Clearly understand the requested software outcome and preserve the original requirements.

REQUIREMENTS:
Define functionality, user requirements, inputs, outputs, expected behavior, constraints, and acceptance criteria.

ARCHITECTURE:
Recommend a suitable technical architecture, file structure, components, modules, APIs, dependencies, and data flow where relevant.

IMPLEMENTATION:
Generate clean, maintainable, readable, modular code following appropriate best practices.

ERROR HANDLING:
Consider invalid inputs, edge cases, failures, unexpected behavior, and graceful error handling.

SECURITY:
Identify relevant security considerations and avoid unsafe implementation patterns.

PERFORMANCE:
Optimize the solution where appropriate without sacrificing readability or maintainability.

ACCESSIBILITY:
Consider accessibility and usability requirements when relevant.

TESTING:
Include appropriate test cases, validation steps, debugging guidance, and expected results.

EXPLANATION:
Explain important implementation decisions clearly when necessary.

QUALITY:
The final solution should be reliable, maintainable, efficient, scalable, and production-ready where appropriate.

OUTPUT:
Return one complete, ready-to-use AI coding prompt.`;
    }


    // =========================================================
    // STUDY INTELLIGENCE
    // =========================================================

    function generateStudyPrompt(idea, style) {

        return `Create a professional AI study prompt based on this original idea:

"${idea}"

STUDY INTELLIGENCE:

OBJECTIVE:
Understand exactly what the student wants to learn, revise, practice, or achieve.

LEVEL:
Adapt the explanation to the learner's level and existing understanding.

CONCEPTS:
Break the topic into clear concepts and explain difficult ideas step by step.

EXPLANATION:
Use simple explanations, analogies, examples, diagrams-in-words, and practical applications where useful.

EXAM FOCUS:
Highlight important concepts, formulas, definitions, patterns, and commonly tested areas.

COMMON MISTAKES:
Identify mistakes students commonly make and explain how to avoid them.

PRACTICE:
Provide practice questions progressing from basic understanding to challenging application.

REVISION:
Include concise revision strategies, key takeaways, memory techniques, and quick-review points where appropriate.

ADAPTIVE LEARNING:
If the student appears to struggle, simplify the explanation. If the student understands the basics, increase the difficulty gradually.

QUALITY:
Make the learning experience clear, structured, engaging, accurate, practical, and optimized for effective exam preparation.

OUTPUT:
Return one complete, ready-to-use AI study prompt.`;
    }


    // =========================================================
    // MASTER PROMPT GENERATOR
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
                idea,
                style
            );
        }


        if (aiType === "study") {

            return generateStudyPrompt(
                idea,
                style
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

        let score = 48;


        // Idea quality

        if (idea.length >= 15) {
            score += 5;
        }

        if (idea.length >= 40) {
            score += 5;
        }

        if (idea.length >= 80) {
            score += 3;
        }


        // Prompt structure

        const sections = [
            "OBJECTIVE:",
            "CONCEPT:",
            "SUBJECT:",
            "SETTING",
            "CAMERA:",
            "LIGHTING:",
            "QUALITY:",
            "OUTPUT:"
        ];


        sections.forEach(function (section) {

            if (prompt.includes(section)) {
                score += 2;
            }

        });


        // AI-specific quality

        if (aiType === "image") {

            if (prompt.includes("COMPOSITION:")) {
                score += 3;
            }

            if (prompt.includes("COLOR PALETTE:")) {
                score += 2;
            }

            if (prompt.includes("MATERIALS & TEXTURES:")) {
                score += 2;
            }

            if (prompt.includes("NEGATIVE:")) {
                score += 2;
            }
        }


        if (aiType === "video") {

            if (prompt.includes("MOTION:")) {
                score += 3;
            }

            if (prompt.includes("TEMPORAL CONSISTENCY:")) {
                score += 3;
            }

            if (prompt.includes("PACING:")) {
                score += 2;
            }
        }


        if (aiType === "text") {

            if (prompt.includes("AUDIENCE:")) {
                score += 3;
            }

            if (prompt.includes("ACCURACY:")) {
                score += 2;
            }
        }


        if (aiType === "code") {

            if (prompt.includes("ERROR HANDLING:")) {
                score += 3;
            }

            if (prompt.includes("TESTING:")) {
                score += 3;
            }

            if (prompt.includes("SECURITY:")) {
                score += 2;
            }
        }


        if (aiType === "study") {

            if (prompt.includes("EXAM FOCUS:")) {
                score += 3;
            }

            if (prompt.includes("PRACTICE:")) {
                score += 3;
            }

            if (prompt.includes("ADAPTIVE LEARNING:")) {
                score += 2;
            }
        }


        return Math.min(
            Math.round(score),
            98
        );
    }


    // =========================================================
    // QUALITY BREAKDOWN
    // =========================================================

    function createQualityBox(score) {

        const clarity =
            Math.min(
                100,
                Math.max(0, score - 2)
            );


        const detail =
            Math.min(
                100,
                Math.max(0, score + 1)
            );


        const structure =
            Math.min(
                100,
                Math.max(0, score - 1)
            );


        const aiReady =
            Math.min(
                100,
                Math.max(0, score)
            );


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
    // PROMPT IMPROVEMENT
    // =========================================================

    function improvePrompt(
        originalPrompt,
        idea,
        aiType,
        style
    ) {

        const optimizationRules = {

            image: `
Improve visual specificity, composition, subject hierarchy, environmental coherence, camera direction, lighting, materials, atmosphere, and negative constraints.
`,

            video: `
Improve motion clarity, camera movement, temporal consistency, physics, pacing, transitions, and environmental motion.
`,

            text: `
Improve objective clarity, audience targeting, structure, tone, accuracy, examples, and useful context.
`,

            code: `
Improve requirements, architecture, implementation constraints, security, error handling, performance, testing, and maintainability.
`,

            study: `
Improve learning objectives, explanation depth, exam relevance, examples, practice progression, common mistakes, and revision strategy.
`
        };


        const specificRules =
            optimizationRules[aiType] ||
            optimizationRules.text;


        return `${originalPrompt}

PROMPT REFINEMENT PASS:

The original idea is:
"${idea}"

STYLE:
${style}

REFINEMENT OBJECTIVE:
Improve the prompt without changing the original idea, subject, purpose, or intended output.

SMART OPTIMIZATION:
${specificRules}

CONSISTENCY:
Remove contradictions, unnecessary repetition, vague wording, unrelated details, and conflicting instructions.

PRECISION:
Use concrete, meaningful instructions instead of generic filler.

RELEVANCE:
Every added detail must directly support the original idea.

CORE IDEA PROTECTION:
Do not replace, distort, or unnecessarily reinterpret the original concept.

FINAL QUALITY:
Make the final prompt clearer, more specific, coherent, structured, practical, and easier for modern AI systems to follow.

OUTPUT:
Return one refined, professional, ready-to-use version of the prompt.`;
    }


    // =========================================================
    // SHOW QUALITY
    // =========================================================

    function showQuality(prompt, idea, aiType) {

        if (!resultBox) return;


        const oldQuality =
            document.getElementById("qualityBox");


        if (oldQuality) {
            oldQuality.remove();
        }


        const score =
            calculateQualityScore(
                prompt,
                idea,
                aiType
            );


        const qualityContainer =
            document.createElement("div");


        qualityContainer.id =
            "qualityBox";


        qualityContainer.innerHTML =
            createQualityBox(score);


        resultBox.appendChild(
            qualityContainer
        );


        attachImproveButton(
            idea,
            aiType,
            styleInput
                ? styleInput.value
                : "professional"
        );
    }


    // =========================================================
    // IMPROVE BUTTON
    // =========================================================

    function attachImproveButton(
        idea,
        aiType,
        style
    ) {

        const improveBtn =
            document.getElementById("improveBtn");


        if (!improveBtn) return;


        improveBtn.addEventListener(
            "click",
            function () {

                if (!promptResult) return;


                const currentPrompt =
                    promptResult.textContent;


                const improved =
                    improvePrompt(
                        currentPrompt,
                        idea,
                        aiType,
                        style
                    );


                promptResult.textContent =
                    improved;


                const newScore =
                    Math.min(
                        99,
                        calculateQualityScore(
                            improved,
                            idea,
                            aiType
                        ) + 2
                    );


                const qualityBox =
                    document.getElementById(
                        "qualityBox"
                    );


                if (qualityBox) {

                    qualityBox.innerHTML =
                        createQualityBox(
                            newScore
                        );
                }


                improveBtn.textContent =
                    "🚀 Prompt Improved!";


                setTimeout(function () {

                    const button =
                        document.getElementById(
                            "improveBtn"
                        );


                    if (button) {

                        button.textContent =
                            "💡 Improve Prompt ✨";
                    }

                }, 1800);

            }
        );
    }


    // =========================================================
    // GENERATE PROMPT
    // =========================================================

    if (generateBtn) {

        generateBtn.addEventListener(
            "click",
            function () {

                const idea =
                    ideaInput
                        ? ideaInput.value.trim()
                        : "";


                const aiType =
                    aiTypeInput
                        ? aiTypeInput.value
                        : "image";


                const style =
                    styleInput
                        ? styleInput.value
                        : "professional";


                if (!idea) {

                    alert(
                        "Please enter your idea first."
                    );

                    if (ideaInput) {
                        ideaInput.focus();
                    }

                    return;
                }


                // Generate

                const generatedPrompt =
                    generatePrompt(
                        idea,
                        aiType,
                        style
                    );


                // Display

                if (promptResult) {

                    promptResult.textContent =
                        generatedPrompt;
                }


                if (resultBox) {

                    resultBox.style.display =
                        "block";
                }


                // Save history

                savePromptToHistory(
                    generatedPrompt,
                    aiType,
                    style,
                    idea
                );


                // Quality

                showQuality(
                    generatedPrompt,
                    idea,
                    aiType
                );


                // Scroll

                if (resultBox) {

                    setTimeout(function () {

                        resultBox.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 100);
                }

            }
        );
    }


    // =========================================================
    // COPY MAIN PROMPT
    // =========================================================

    if (copyBtn) {

        copyBtn.addEventListener(
            "click",
            async function () {

                if (!promptResult) return;


                const text =
                    promptResult.textContent;


                try {

                    await navigator.clipboard.writeText(
                        text
                    );


                    copyBtn.textContent =
                        "✅ Copied!";


                    setTimeout(function () {

                        copyBtn.textContent =
                            "📋 Copy";

                    }, 1500);


                } catch (error) {

                    alert(
                        "Unable to copy the prompt. Please copy it manually."
                    );

                }

            }
        );
    }


    // =========================================================
    // HISTORY
    // =========================================================

    function savePromptToHistory(
        prompt,
        aiType,
        style,
        originalIdea
    ) {

        const history =
            getHistory();


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
            history.slice(
                0,
                MAX_HISTORY
            );


        saveHistory(
            limitedHistory
        );


        displayPromptHistory();
    }


    // =========================================================
    // DISPLAY HISTORY
    // =========================================================

    function displayPromptHistory() {

        const historyList =
            document.getElementById(
                "historyList"
            );


        if (!historyList) return;


        const history =
            getHistory();


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
            history.filter(function (item) {

                const searchableText =
                    `${item.originalIdea || ""}
                    ${item.prompt || ""}`
                        .toLowerCase();


                const matchesSearch =
                    searchableText.includes(
                        searchTerm
                    );


                const matchesFilter =
                    filterType === "all" ||
                    item.aiType === filterType;


                return (
                    matchesSearch &&
                    matchesFilter
                );

            });


        if (filteredHistory.length === 0) {

            historyList.innerHTML = `

                <div class="empty-history">

                    <div>📚</div>

                    <h3>No prompts found</h3>

                    <p>
                        Generate a prompt and it will appear here.
                    </p>

                </div>

            `;

            return;
        }


        historyList.innerHTML =
            filteredHistory.map(
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

                                    ${escapeHTML(
                                        item.date
                                    )}

                                </span>

                            </div>


                            <div class="history-prompt">

                                <strong>
                                    ${escapeHTML(
                                        item.originalIdea ||
                                        "Generated Prompt"
                                    )}
                                </strong>

                                <div style="margin-top:8px;">
                                    ${escapeHTML(
                                        item.prompt
                                    )}
                                </div>

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
            ).join("");
    }


    // =========================================================
    // HISTORY — COPY
    // =========================================================

    window.copyHistoryPrompt =
        async function (id) {

            const history =
                getHistory();


            const item =
                history.find(function (prompt) {

                    return prompt.id === id;

                });


            if (!item) return;


            try {

                await navigator.clipboard.writeText(
                    item.prompt
                );


                alert(
                    "✅ Prompt copied!"
                );


            } catch (error) {

                alert(
                    "Unable to copy the prompt."
                );

            }

        };


    // =========================================================
    // HISTORY — REUSE
    // =========================================================

    window.reuseHistoryPrompt =
        function (id) {

            const history =
                getHistory();


            const item =
                history.find(function (prompt) {

                    return prompt.id === id;

                });


            if (!item) return;


            if (ideaInput) {

                ideaInput.value =
                    item.originalIdea ||
                    item.prompt;


                updateIdeaCounter();
            }


            if (aiTypeInput) {

                aiTypeInput.value =
                    item.aiType ||
                    "image";
            }


            if (styleInput) {

                styleInput.value =
                    item.style ||
                    "professional";
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

        };


    // =========================================================
    // HISTORY — DELETE
    // =========================================================

    window.deleteHistoryPrompt =
        function (id) {

            let history =
                getHistory();


            history =
                history.filter(
                    function (item) {

                        return item.id !== id;

                    }
                );


            saveHistory(
                history
            );


            displayPromptHistory();
        };


    // =========================================================
    // HISTORY — FAVORITE
    // =========================================================

    window.toggleFavoritePrompt =
        function (id) {

            const history =
                getHistory();


            const item =
                history.find(
                    function (prompt) {

                        return prompt.id === id;

                    }
                );


            if (!item) return;


            item.favorite =
                !item.favorite;


            saveHistory(
                history
            );


            displayPromptHistory();
        };


    // =========================================================
    // HISTORY — CLEAR ALL
    // =========================================================

    function clearPromptHistory() {

        localStorage.removeItem(
            HISTORY_KEY
        );


        displayPromptHistory();
    }


    const clearBtn =
        document.getElementById(
            "clearHistoryBtn"
        );


    if (clearBtn) {

        clearBtn.addEventListener(
            "click",
            function () {

                const confirmed =
                    confirm(
                        "Are you sure you want to delete all saved prompts?"
                    );


                if (confirmed) {

                    clearPromptHistory();

                }

            }
        );
    }


    // =========================================================
    // HISTORY SEARCH
    // =========================================================

    const searchInput =
        document.getElementById(
            "historySearch"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            displayPromptHistory
        );
    }


    // =========================================================
    // HISTORY FILTER
    // =========================================================

    const filterInput =
        document.getElementById(
            "historyFilter"
        );


    if (filterInput) {

        filterInput.addEventListener(
            "change",
            displayPromptHistory
        );
    }


    // =========================================================
    // INITIAL HISTORY LOAD
    // =========================================================

    displayPromptHistory();


    // =========================================================
    // ENTER KEY SUPPORT
    // =========================================================

    if (ideaInput) {

        ideaInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" &&
                    event.metaKey
                ) {

                    event.preventDefault();

                    if (generateBtn) {
                        generateBtn.click();
                    }

                }

            }
        );
    }

});
