document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // AIVIVO — SMART PROMPT ENGINE 3.0
    // =========================================================

    const themeToggle = document.getElementById("themeToggle");
    const generateBtn = document.getElementById("generateBtn");
    const copyBtn = document.getElementById("copyBtn");
    const ideaInput = document.getElementById("idea");
    const ideaCounter = document.getElementById("ideaCounter");


    // =========================================================
    // THEME
    // =========================================================

    function loadTheme() {

        const savedTheme =
            localStorage.getItem("aivivoTheme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark");

            if (themeToggle) {
                themeToggle.textContent = "☀️";
            }

        } else {

            if (themeToggle) {
                themeToggle.textContent = "🌙";
            }
        }
    }

    loadTheme();


    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            const isDark =
                document.body.classList.contains("dark");

            themeToggle.textContent =
                isDark ? "☀️" : "🌙";

            localStorage.setItem(
                "aivivoTheme",
                isDark ? "dark" : "light"
            );

        });
    }


    // =========================================================
    // CHARACTER COUNTER
    // =========================================================

    function updateIdeaCounter() {

        if (!ideaInput || !ideaCounter) return;

        const count = ideaInput.value.length;

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
    // HELPER
    // =========================================================

    function hasAny(text, words) {

        return words.some(function (word) {
            return text.includes(word);
        });
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
                "next generation",
                "tomorrow"
            ]),

            city: hasAny(text, [
                "city",
                "megacity",
                "metropolis",
                "urban",
                "downtown",
                "skyscraper",
                "skyline",
                "street",
                "town"
            ]),

            india: hasAny(text, [
                "india",
                "indian",
                "delhi",
                "mumbai",
                "bombay",
                "bangalore",
                "bengaluru",
                "kolkata",
                "hyderabad",
                "chennai",
                "pune",
                "patna",
                "gaya",
                "jaipur",
                "varanasi"
            ]),

            night: hasAny(text, [
                "night",
                "nighttime",
                "at night",
                "midnight",
                "evening",
                "after dark"
            ]),

            sunrise: hasAny(text, [
                "sunrise",
                "dawn",
                "early morning",
                "morning"
            ]),

            sunset: hasAny(text, [
                "sunset",
                "golden hour",
                "dusk",
                "evening"
            ]),

            rain: hasAny(text, [
                "rain",
                "rainy",
                "monsoon",
                "drizzle",
                "storm"
            ]),

            winter: hasAny(text, [
                "winter",
                "snow",
                "cold",
                "frost"
            ]),

            summer: hasAny(text, [
                "summer",
                "hot",
                "heat",
                "sunny"
            ]),

            cyberpunk: hasAny(text, [
                "cyberpunk",
                "neon cyberpunk"
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
                "tower",
                "skyscraper",
                "bridge"
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
                "cosmos",
                "universe"
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
            ])
        };
    }


    // =========================================================
    // STYLE INTELLIGENCE
    // =========================================================

    function getStyleDirection(style) {

        if (style === "cinematic") {

            return `
Premium cinematic visual language, dramatic composition,
film-quality production design, sophisticated color grading,
realistic lighting, atmospheric depth, strong visual hierarchy,
immersive storytelling, and polished professional presentation.`;

        }

        if (style === "creative") {

            return `
Highly creative visual interpretation, distinctive composition,
imaginative details, expressive atmosphere, unique visual identity,
strong artistic direction, and memorable storytelling.`;

        }

        if (style === "professional") {

            return `
Clean professional visual direction, precise composition,
controlled lighting, realistic details, polished presentation,
strong consistency, and commercial-quality execution.`;

        }

        return `
Clean and balanced visual direction, clear subject focus,
natural composition, realistic details, controlled lighting,
and only relevant supporting elements.`;
    }


    // =========================================================
    // IMAGE PROMPT ENGINE
    // =========================================================

    function buildImagePrompt(idea, style) {

        const context = detectContext(idea);

        let subject = "";
        let environment = "";
        let technology = "";
        let visualStory = "";
        let atmosphere = "";
        let composition = "";
        let camera = "";
        let lighting = "";
        let colors = "";
        let materials = "";
        let people = "";
        let negative = "";


        // =====================================================
        // FUTURISTIC INDIAN CITY
        // =====================================================

        if (
            context.futuristic &&
            context.city &&
            context.india
        ) {

            subject =
                "A massive futuristic Indian megacity shaped by advanced urban development, sophisticated glass-and-metal architecture, dense metropolitan districts, elevated transportation systems, autonomous mobility, intelligent infrastructure, and a large population living naturally within the environment.";

            environment =
                "A highly developed Indian metropolitan environment with interconnected skyscrapers, elevated transit corridors, pedestrian areas, landscaped public spaces, advanced roads, commercial districts, distant towers, atmospheric depth, and realistic urban density.";

            technology =
                "Autonomous electric vehicles, intelligent traffic systems, elevated metro systems, delivery drones, smart roads, AI-assisted public services, advanced communication networks, renewable-energy infrastructure, transparent digital displays, and futuristic transportation.";

            visualStory =
                "Show the city functioning as a real place. People naturally interact with streets, transportation, shops, buildings, public spaces, businesses, and technology rather than appearing randomly placed.";

            people =
                "Include diverse Indian pedestrians, commuters, workers, families, street activity, realistic body language, modern clothing, businesses, transportation users, and subtle signs of everyday urban life.";

            if (context.night) {

                atmosphere =
                    "Cinematic nighttime atmosphere with humid air, subtle haze, realistic fog, illuminated windows, practical street lighting, glowing transportation systems, reflections on wet surfaces, and vibrant everyday urban activity.";

                lighting =
                    "Sophisticated cyan and restrained violet futuristic lighting balanced with warm amber building interiors, realistic street lights, commercial lighting, illuminated transportation systems, volumetric light, and reflections.";

            } else if (context.sunrise) {

                atmosphere =
                    "Fresh early-morning atmosphere with soft humidity, gentle haze, distant city mist, awakening streets, subtle atmospheric perspective, and the first signs of daily urban activity.";

                lighting =
                    "Soft sunrise illumination with warm golden highlights, cool remaining shadows, realistic glass reflections, gentle atmospheric rays, and natural urban lighting.";

            } else if (context.sunset) {

                atmosphere =
                    "Cinematic sunset atmosphere with warm sky gradients, atmospheric haze, long shadows, glowing windows, active streets, and a transition from daylight into the city's evening energy.";

                lighting =
                    "Warm golden-hour sunlight mixed with emerging artificial city lights, realistic reflections, soft shadows, and atmospheric illumination.";

            } else {

                atmosphere =
                    "Believable futuristic daytime atmosphere with clear urban visibility, subtle haze, realistic humidity, natural environmental depth, and active metropolitan life.";

                lighting =
                    "Natural daylight combined with realistic architectural reflections, soft shadows, controlled highlights, and subtle artificial lighting where appropriate.";
            }

            if (context.rain) {

                atmosphere +=
                    " Active monsoon rainfall, wet roads, water reflections, subtle rain mist, umbrellas, drainage systems, and realistic rainfall interaction with the city.";

                lighting +=
                    " Rain reflections and diffused highlights across wet surfaces.";
            }

            colors =
                "Deep blue, metallic silver, charcoal, controlled cyan, subtle violet, warm amber, white, and restrained Indian-inspired accents.";

            materials =
                "Reflective architectural glass, brushed steel, polished concrete, dark stone, advanced road surfaces, transparent displays, realistic vehicle materials, detailed building facades, vegetation, and subtle surface imperfections.";

            composition =
                "Strong foreground, midground, and background separation with clear visual hierarchy, leading lines, realistic architectural scale, layered depth, balanced framing, natural pedestrian placement, and believable transportation flow.";

            camera =
                "Wide cinematic establishing shot using a 28mm lens, realistic perspective, strong foreground-to-background depth, controlled vertical architecture, immersive environmental storytelling, and professional cinematic framing.";

            negative =
                "Avoid generic futuristic cities, excessive neon, random architecture, impossible structures, cultural stereotypes, unrealistic vehicles, distorted people, inconsistent perspective, floating objects without purpose, excessive clutter, blurry textures, duplicated elements, and unrelated details.";

        }


        // =====================================================
        // CYBERPUNK
        // =====================================================

        else if (context.cyberpunk) {

            subject =
                "A dense futuristic cyberpunk environment filled with towering architecture, advanced transportation, illuminated advertisements, digital interfaces, pedestrians, and layered urban infrastructure.";

            environment =
                "A rain-soaked metropolitan district at night with reflective streets, elevated walkways, dense buildings, glowing storefronts, steam vents, cables, and distant towers disappearing into atmospheric haze.";

            technology =
                "Autonomous vehicles, drones, holographic advertisements, robotic systems, transparent interfaces, intelligent traffic networks, advanced electric transportation, and high-tech urban infrastructure.";

            visualStory =
                "Show pedestrians, vehicles, businesses, technology, and architecture interacting naturally to create a believable functioning city.";

            atmosphere =
                "Heavy cinematic rain, volumetric fog, drifting steam, floating rain particles, glowing reflections, humid night air, and atmospheric haze.";

            composition =
                "Low-angle cinematic composition with strong foreground reflections, layered architecture, leading lines, deep perspective, and clear visual hierarchy.";

            camera =
                "28mm wide-angle cinematic street-level camera with dramatic perspective, strong depth, realistic scale, and controlled framing.";

            lighting =
                "Controlled cyan, magenta, violet, and warm amber lighting with realistic reflections, deep shadows, and volumetric beams.";

            colors =
                "Electric cyan, neon magenta, violet, deep blue, charcoal black, metallic gray, and restrained warm amber.";

            materials =
                "Rain-covered asphalt, reflective glass, brushed metal, dark concrete, illuminated plastic, holographic surfaces, wet cables, and detailed futuristic vehicle panels.";

            people =
                "Pedestrians wearing believable futuristic clothing with natural movement and realistic interactions with shops, transportation, and technology.";

            negative =
                "Avoid excessive neon, random holograms, impossible architecture, empty streets, distorted people, unrealistic vehicles, excessive clutter, flat lighting, and generic sci-fi imagery.";
        }


        // =====================================================
        // PORTRAIT
        // =====================================================

        else if (context.portrait) {

            subject =
                `A clearly defined human character based on "${idea}", with realistic facial proportions, expressive eyes, natural skin texture, detailed hair, carefully designed clothing, and a distinct visual identity.`;

            environment =
                "A visually appropriate environment that supports the character with subtle depth, environmental storytelling, and a background that complements rather than distracts from the subject.";

            technology =
                "Include objects, accessories, clothing details, or technology only when they naturally support the original concept.";

            visualStory =
                "Create a believable interaction between the character and the surrounding environment with natural posture, expression, body language, and contextual details.";

            atmosphere =
                "Controlled atmospheric depth, subtle environmental particles, realistic air, gentle background separation, and a mood appropriate to the original concept.";

            composition =
                "Strong subject hierarchy, natural framing, balanced negative space, realistic proportions, and clear separation between foreground, subject, and background.";

            camera =
                "Professional portrait photography using 50mm or 85mm lens characteristics, realistic perspective, controlled depth of field, sharp eyes, and natural subject separation.";

            lighting =
                "Soft directional key light, subtle fill light, realistic rim lighting, natural facial shadows, controlled highlights, and cinematic skin illumination.";

            colors =
                "A sophisticated cinematic color palette chosen to complement the subject, clothing, environment, and requested style.";

            materials =
                "Detailed skin texture, individual hair strands, realistic fabric, leather, metal accessories, natural surface imperfections, and physically believable materials.";

            people =
                "Natural facial expression, believable posture, realistic body proportions, authentic clothing folds, and subtle interaction with the surrounding environment.";

            negative =
                "Avoid distorted anatomy, unnatural skin, plastic-looking faces, extra fingers, duplicated people, unrealistic eyes, excessive smoothing, flat lighting, and distracting backgrounds.";
        }


        // =====================================================
        // LANDSCAPE
        // =====================================================

        else if (context.landscape) {

            subject =
                `A dramatic natural landscape based on "${idea}", with clearly defined terrain, vegetation, geological formations, environmental features, and a strong visual focal point.`;

            environment =
                "An expansive natural environment with layered foreground, midground, and background elements, atmospheric perspective, realistic terrain variation, distant scenery, and believable environmental conditions.";

            technology =
                "Avoid unnecessary technology unless it naturally belongs to the original concept.";

            visualStory =
                "Create a natural relationship between terrain, weather, vegetation, water, wildlife, and any human presence.";

            atmosphere =
                "Natural atmospheric haze, clouds, mist, wind movement, airborne particles, realistic humidity, and environmental depth.";

            composition =
                "Wide cinematic landscape composition with strong leading lines, balanced foreground, dramatic horizon placement, layered depth, and clear visual hierarchy.";

            camera =
                "24mm wide-angle cinematic landscape photography with deep focus, realistic perspective, balanced framing, and immersive scale.";

            lighting =
                "Natural directional sunlight or dramatic golden-hour lighting with realistic shadows, highlights, atmospheric rays, and environmental reflections.";

            colors =
                "Rich natural greens, earthy browns, atmospheric blues, soft highlights, and a cinematic color grade.";

            materials =
                "Detailed rocks, soil, vegetation, water surfaces, tree bark, clouds, terrain textures, and realistic natural materials.";

            people =
                "Include people or wildlife only when relevant to the original concept and place them naturally within the environment.";

            negative =
                "Avoid artificial landscapes, impossible terrain, repeated trees, unrealistic water, flat composition, excessive saturation, distorted animals, and unrelated objects.";
        }


        // =====================================================
        // ARCHITECTURE / CITY
        // =====================================================

        else if (
            context.architecture ||
            context.city
        ) {

            subject =
                `A visually striking architectural environment based on "${idea}", with clearly defined geometry, scale, facade design, structural elements, entrances, windows, and surrounding urban context.`;

            environment =
                "A believable architectural or urban environment with streets, surrounding buildings, pedestrians, vehicles, landscaping, infrastructure, and realistic spatial relationships.";

            technology =
                "Add transportation systems, digital displays, smart infrastructure, lighting systems, or advanced architectural technology only when relevant.";

            visualStory =
                "Show architecture functioning within its environment through realistic pedestrian movement, transportation, businesses, public spaces, and environmental interaction.";

            atmosphere =
                "Detailed environmental atmosphere including weather, haze, reflections, shadows, airborne particles, and realistic urban activity.";

            composition =
                "Strong geometric composition with clear architectural hierarchy, controlled perspective, leading lines, balanced framing, and realistic scale.";

            camera =
                "Cinematic architectural photography using a wide-angle lens, controlled vertical lines, dramatic framing, realistic perspective, and strong depth.";

            lighting =
                "Directional natural or artificial lighting interacting realistically with glass, metal, concrete, windows, streets, and surrounding structures.";

            colors =
                "Professional architectural color palette with balanced tones, controlled contrast, and colors supporting the selected visual style.";

            materials =
                "Glass, steel, concrete, stone, wood, brushed metal, illuminated surfaces, realistic windows, structural joints, and detailed facade textures.";

            people =
                "Natural pedestrians, workers, vehicles, street activity, vegetation, and public-space interactions that make the environment feel inhabited.";

            negative =
                "Avoid impossible architecture, distorted perspective, floating buildings, repetitive windows, empty environments, flat lighting, unrealistic scale, excessive clutter, and unrelated objects.";
        }


        // =====================================================
        // PRODUCT / CAR / TECH
        // =====================================================

        else if (context.product) {

            subject =
                `A premium, clearly defined product or technological subject based on "${idea}", with precise proportions, sophisticated design language, realistic surface details, functional components, and polished presentation.`;

            environment =
                "A carefully designed studio or contextual environment that supports the product without distracting from it.";

            technology =
                "Highlight relevant functional components, interfaces, mechanisms, materials, and technological features that naturally belong to the subject.";

            visualStory =
                "Present the product in a believable environment with realistic interaction between the object, surface, lighting, and supporting elements.";

            atmosphere =
                "Clean controlled atmosphere with subtle depth, realistic reflections, carefully placed environmental elements, and premium commercial mood.";

            composition =
                "Strong product hierarchy, precise framing, clean negative space, realistic proportions, and controlled visual balance.";

            camera =
                "Professional product photography using 50mm or 85mm lens characteristics, precise framing, controlled perspective, and realistic depth of field.";

            lighting =
                "Professional studio lighting with large soft sources, controlled highlights, subtle rim lighting, realistic reflections, and carefully shaped shadows.";

            colors =
                "Premium commercial color grading with a cohesive palette that complements the product design.";

            materials =
                "Realistic metal, glass, plastic, leather, rubber, fabric, polished surfaces, micro-textures, seams, buttons, and material transitions.";

            people =
                "Include human interaction only when relevant to the original concept.";

            negative =
                "Avoid incorrect proportions, floating products, unrealistic materials, distorted logos, excessive reflections, messy backgrounds, and unnecessary objects.";
        }


        // =====================================================
        // SPACE
        // =====================================================

        else if (context.space) {

            subject =
                `A highly detailed futuristic space scene based on "${idea}", with believable engineering, clearly defined structures, advanced equipment, and a strong visual focal point.`;

            environment =
                "A vast cosmic environment containing planets, stars, nebulae, orbital structures, distant spacecraft, or futuristic stations appropriate to the concept.";

            technology =
                "Advanced spacecraft systems, robotic equipment, communication arrays, energy systems, navigation interfaces, and believable futuristic engineering.";

            visualStory =
                "Create clear scale relationships between spacecraft, planets, structures, and surrounding cosmic elements.";

            atmosphere =
                "Deep cosmic darkness, glowing particles, subtle planetary haze, distant stars, and dramatic spatial depth.";

            composition =
                "Epic cinematic composition with dramatic perspective, strong scale relationships, layered cosmic depth, and clear focal hierarchy.";

            camera =
                "Epic wide-angle cinematic camera with realistic scale, deep focus, controlled framing, and immersive perspective.";

            lighting =
                "Strong directional cosmic lighting, intense highlights, deep shadows, glowing planetary light, and realistic illumination across surfaces.";

            colors =
                "Deep black, electric blue, violet, cyan, white highlights, and subtle planetary colors.";

            materials =
                "Advanced metal alloys, reflective glass, carbon composites, illuminated panels, mechanical components, and realistic spacecraft surfaces.";

            people =
                "Astronauts or human subjects only when relevant, with realistic proportions and believable equipment.";

            negative =
                "Avoid impossible spacecraft, random planets, unrealistic scale, distorted astronauts, excessive glowing effects, and scientifically incoherent structures.";
        }


        // =====================================================
        // FANTASY
        // =====================================================

        else if (context.fantasy) {

            subject =
                `A richly designed fantasy scene based on "${idea}", with distinctive characters, detailed clothing or armor, expressive features, and believable interaction with the magical environment.`;

            environment =
                "An expansive fantasy environment with ancient architecture, mystical landscapes, atmospheric depth, natural elements, and carefully designed environmental storytelling.";

            technology =
                "Use magical objects, artifacts, glowing symbols, enchanted structures, or mystical mechanisms where appropriate instead of unrelated modern technology.";

            visualStory =
                "Create natural interactions between characters, magical elements, architecture, terrain, creatures, and the surrounding environment.";

            atmosphere =
                "Magical mist, floating particles, glowing energy, atmospheric haze, dramatic clouds, and an immersive mysterious mood.";

            composition =
                "Epic cinematic composition with strong subject placement, dramatic perspective, layered environmental depth, and clear visual hierarchy.";

            camera =
                "Wide cinematic fantasy composition with dramatic perspective, realistic scale, controlled depth, and immersive storytelling.";

            lighting =
                "Magical volumetric lighting, glowing highlights, directional moonlight or sunlight, atmospheric shadows, and realistic illumination.";

            colors =
                "Deep blues, violet, emerald, gold, warm amber, and restrained magical highlights.";

            materials =
                "Stone, ancient wood, metal armor, fabric, leather, crystals, magical surfaces, vegetation, and detailed environmental textures.";

            people =
                "Believable characters with natural poses, realistic anatomy, expressive faces, detailed clothing, and contextual interactions.";

            negative =
                "Avoid generic fantasy clichés, distorted anatomy, random magical objects, excessive glowing effects, flat environments, and unrelated elements.";
        }


        // =====================================================
        // HORROR
        // =====================================================

        else if (context.horror) {

            subject =
                `A clearly defined horror scene based on "${idea}", with unsettling visual characteristics, realistic textures, and a strong psychological presence.`;

            environment =
                "An abandoned or isolated environment with decaying architecture, damaged structures, overgrown vegetation, empty corridors, and signs of neglect.";

            technology =
                "Use broken lights, old monitors, abandoned equipment, flickering electronics, or environmental technology only when appropriate.";

            visualStory =
                "Create subtle environmental clues that suggest a believable history without overcrowding the scene.";

            atmosphere =
                "Dense fog, dust particles, cold humid air, drifting mist, darkness, subtle movement, and an oppressive atmosphere.";

            composition =
                "Controlled cinematic framing with deliberate negative space, strong foreground elements, deep shadows, and clear visual hierarchy.";

            camera =
                "Low-angle cinematic framing with a slightly wide lens, deep shadows, controlled perspective, and deliberate negative space.";

            lighting =
                "Minimal directional lighting, flickering practical lights, harsh shadows, subtle rim lighting, and dramatic darkness.";

            colors =
                "Desaturated blue-gray tones, black, muted green, dark red accents, and limited warm highlights.";

            materials =
                "Aged concrete, cracked walls, rusted metal, dirty glass, decaying wood, wet surfaces, dust, and damaged fabrics.";

            people =
                "Human presence only when relevant, with realistic silhouettes, proportions, posture, and environmental interaction.";

            negative =
                "Avoid excessive gore, cartoonish horror, distorted anatomy, random objects, flat lighting, unrealistic environments, and cheap-looking effects.";
        }


        // =====================================================
        // DEFAULT INTELLIGENCE
        // =====================================================

        else {

            subject =
                `A clearly defined main subject based on "${idea}", with relevant appearance, characteristics, objects, and visual elements that naturally support the original concept.`;

            environment =
                "A believable environment built specifically around the subject, including appropriate location, architecture, weather, time of day, background elements, and environmental features.";

            technology =
                "Introduce technology, objects, transportation, interfaces, or infrastructure only when they naturally fit the original concept.";

            visualStory =
                "Create natural relationships between the subject, environment, objects, people, and surrounding elements so the scene feels purposeful and believable.";

            atmosphere =
                "A carefully designed atmosphere with appropriate weather, air quality, fog, particles, reflections, environmental depth, and mood.";

            composition =
                "Strong foreground, midground, and background separation with clear subject hierarchy, leading lines, balanced framing, realistic scale, and intentional placement.";

            camera =
                "Professional cinematic camera angle and framing with an appropriate lens, realistic perspective, controlled depth of field, and strong visual balance.";

            lighting =
                "Detailed directional lighting with realistic shadows, highlights, reflections, ambient illumination, and mood appropriate to the concept.";

            colors =
                `A professional color palette supporting the ${style} visual style and overall atmosphere.`;

            materials =
                "Realistic surfaces, materials, textures, environmental details, and subtle imperfections appropriate to the scene.";

            people =
                "Include people only when relevant, with realistic anatomy, natural body language, believable clothing, and appropriate interaction with the environment.";

            negative =
                "Avoid generic visuals, unnecessary objects, inconsistent perspective, distorted anatomy, unrealistic materials, flat lighting, excessive clutter, low-detail environments, blurry textures, and unrelated elements.";
        }


        // =====================================================
        // FINAL IMAGE PROMPT
        // =====================================================

        return `Create a ${style}, highly detailed AI image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE:

CONCEPT:
Interpret the original idea intelligently while preserving its exact meaning, subject, location, time period, atmosphere, and intent.

SUBJECT:
${subject}

SETTING & ENVIRONMENT:
${environment}

TECHNOLOGY & OBJECTS:
${technology}

VISUAL STORY:
${visualStory}

PEOPLE & EVERYDAY LIFE:
${people}

ATMOSPHERE:
${atmosphere}

COMPOSITION:
${composition}

CAMERA:
${camera}

LIGHTING:
${lighting}

COLOR PALETTE:
${colors}

MATERIALS & TEXTURES:
${materials}

STYLE DIRECTION:
${getStyleDirection(style)}

COHERENCE:
Architecture, people, objects, technology, lighting, perspective, materials, environment, and atmosphere must logically belong to the same believable world.

CORE IDEA PROTECTION:
Preserve the original idea exactly at its core. Every added detail must naturally support the original concept rather than changing its meaning.

QUALITY:
Ultra-detailed, coherent, professionally composed, realistic proportions, physically believable lighting, detailed textures, strong atmospheric depth, sophisticated composition, realistic scale, polished visual storytelling, and optimized for modern AI image generation.

NEGATIVE:
${negative}

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.`;
    }


    // =========================================================
    // VIDEO PROMPT
    // =========================================================

    function buildVideoPrompt(idea, style) {

        return `Create a ${style}, highly detailed AI video based on this original idea:

"${idea}"

SMART VIDEO INTELLIGENCE:

SCENE:
Define the environment, location, time of day, weather, atmosphere, architecture, and visual context.

SUBJECT & ACTION:
Clearly define the main subject and exactly what it is doing. Movement must be natural, purposeful, and visually understandable.

CAMERA:
Specify camera angle, framing, lens characteristics, camera movement, tracking, pans, tilts, zooms, and transitions.

MOTION:
Describe realistic movement of people, objects, vehicles, clothing, hair, particles, weather, and environmental elements.

VISUAL STORY:
Create a clear beginning, visual development, and satisfying cinematic progression.

LIGHTING:
Use realistic directional lighting, shadows, highlights, reflections, practical lights, and atmospheric illumination.

ATMOSPHERE:
Add appropriate fog, particles, smoke, dust, rain, reflections, weather, and environmental movement.

PACING:
Maintain smooth cinematic pacing with intentional visual rhythm.

STYLE:
${getStyleDirection(style)}

QUALITY:
Smooth motion, consistent subjects, realistic physics, coherent environments, cinematic lighting, high detail, professional production quality, and temporal consistency.

NEGATIVE:
Avoid flickering, distorted faces, inconsistent subjects, unnatural motion, broken physics, random camera movement, visual artifacts, and unnecessary objects.

OUTPUT:
Return one complete, ready-to-use AI video generation prompt.`;
    }


    // =========================================================
    // TEXT PROMPT
    // =========================================================

    function buildTextPrompt(idea, style) {

        return `Create a ${style}, high-quality AI text response based on this original idea:

"${idea}"

SMART TEXT INTELLIGENCE:

OBJECTIVE:
Clearly identify the purpose and desired result.

AUDIENCE:
Adapt vocabulary, complexity, tone, and explanation to the appropriate audience.

CONTEXT:
Use relevant background information required to understand the request.

STRUCTURE:
Organize the response into clear logical sections with readable formatting.

TONE:
Use a ${style} communication style that feels natural, confident, clear, and engaging.

CONTENT:
Expand the original idea with relevant information, examples, explanations, context, and practical details without unnecessary filler.

CLARITY:
Use precise language, logical flow, concise explanations, and useful formatting.

QUALITY:
Make the response accurate, useful, polished, coherent, engaging, and professionally written.

OUTPUT:
Return one complete, ready-to-use AI writing prompt.`;
    }


    // =========================================================
    // CODE PROMPT
    // =========================================================

    function buildCodePrompt(idea) {

        return `Create a professional AI coding prompt based on this original idea:

"${idea}"

SMART CODE INTELLIGENCE:

REQUIREMENTS:
Clearly define functionality, user requirements, inputs, outputs, and expected behavior.

ARCHITECTURE:
Recommend suitable architecture, file structure, components, modules, APIs, and dependencies where relevant.

IMPLEMENTATION:
Generate clean, readable, modular, maintainable code following appropriate best practices.

ERROR HANDLING:
Consider invalid inputs, edge cases, failures, unexpected behavior, and graceful error handling.

SECURITY:
Identify relevant security considerations and avoid unsafe implementation patterns.

PERFORMANCE:
Optimize the solution where appropriate without sacrificing maintainability.

TESTING:
Include useful test cases, validation steps, and debugging guidance.

EXPLANATION:
Explain important implementation decisions clearly when useful.

QUALITY:
The solution should be reliable, maintainable, efficient, scalable, and production-ready where appropriate.

OUTPUT:
Return one complete, ready-to-use AI coding prompt.`;
    }


    // =========================================================
    // STUDY PROMPT
    // =========================================================

    function buildStudyPrompt(idea) {

        return `Create a professional AI study prompt based on this original idea:

"${idea}"

SMART STUDY INTELLIGENCE:

LEVEL:
Adapt the explanation to the learner's level and existing understanding.

CONCEPTS:
Break difficult concepts into clear step-by-step explanations.

EXAMPLES:
Use simple examples, analogies, practical applications, and diagrams-in-words where useful.

EXAM FOCUS:
Highlight important concepts, formulas, definitions, patterns, and commonly tested areas.

COMMON MISTAKES:
Identify mistakes students commonly make and explain how to avoid them.

PRACTICE:
Provide practice questions progressing from basic understanding to challenging application.

REVISION:
Include key takeaways, revision strategy, and memory techniques where appropriate.

QUALITY:
Make the learning experience clear, structured, engaging, accurate, and useful.

OUTPUT:
Return one complete, ready-to-use AI study prompt.`;
    }


    // =========================================================
    // MASTER GENERATOR
    // =========================================================

    function generatePrompt(idea, aiType, style) {

        if (aiType === "image") {
            return buildImagePrompt(idea, style);
        }

        if (aiType === "video") {
            return buildVideoPrompt(idea, style);
        }

        if (aiType === "text") {
            return buildTextPrompt(idea, style);
        }

        if (aiType === "code") {
            return buildCodePrompt(idea);
        }

        if (aiType === "study") {
            return buildStudyPrompt(idea);
        }

        return "";
    }


    // =========================================================
    // QUALITY SCORE 2.0
    // =========================================================

    function calculateQualityScore(prompt, idea, aiType) {

        let score = 35;

        const length = prompt.length;

        if (length > 500) score += 5;
        if (length > 900) score += 5;
        if (length > 1500) score += 5;

        const importantSections = [
            "CONCEPT:",
            "SUBJECT:",
            "SETTING & ENVIRONMENT:",
            "VISUAL STORY:",
            "COMPOSITION:",
            "CAMERA:",
            "LIGHTING:",
            "QUALITY:",
            "NEGATIVE:",
            "OUTPUT:"
        ];

        importantSections.forEach(function (section) {

            if (prompt.includes(section)) {
                score += 2;
            }

        });

        if (idea.length >= 15) score += 3;
        if (idea.length >= 30) score += 3;

        if (aiType === "image") {

            if (prompt.includes("COLOR PALETTE:")) score += 2;
            if (prompt.includes("MATERIALS & TEXTURES:")) score += 2;
            if (prompt.includes("PEOPLE & EVERYDAY LIFE:")) score += 2;

        }

        if (aiType === "video") {

            if (prompt.includes("MOTION:")) score += 3;
            if (prompt.includes("PACING:")) score += 2;

        }

        if (aiType === "code") {

            if (prompt.includes("ERROR HANDLING:")) score += 3;
            if (prompt.includes("TESTING:")) score += 3;
            if (prompt.includes("SECURITY:")) score += 2;

        }

        if (aiType === "study") {

            if (prompt.includes("EXAM FOCUS:")) score += 3;
            if (prompt.includes("PRACTICE:")) score += 3;
            if (prompt.includes("REVISION:")) score += 2;

        }

        return Math.min(Math.round(score), 100);
    }


    // =========================================================
    // QUALITY BREAKDOWN
    // =========================================================

    function createQualityBox(score) {

        const clarity =
            Math.min(100, score - 2);

        const detail =
            Math.min(100, score + 1);

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

                <button id="improveBtn" class="improve-btn">
                    💡 Improve Prompt ✨
                </button>

            </div>
        `;
    }


    // =========================================================
    // IMPROVE PROMPT
    // =========================================================

    function improvePrompt(idea, aiType, style) {

        const optimized =
            generatePrompt(
                idea,
                aiType,
                style
            );

        return optimized + `

FINAL OPTIMIZATION PASS:

- Remove unnecessary repetition.
- Keep every detail relevant to the original idea.
- Maintain logical consistency between all sections.
- Prioritize concrete visual or functional information.
- Preserve the original intent.
- Avoid generic filler.
- Ensure the final instructions are clear to modern AI systems.
- Return a polished production-ready prompt.`;

    }


    // =========================================================
    // SAVE HISTORY
    // =========================================================

    function savePromptToHistory(
        prompt,
        aiType,
        style,
        originalIdea
    ) {

        let history =
            JSON.parse(
                localStorage.getItem("aivivoHistory")
            ) || [];

        const newPrompt = {

            id: Date.now(),

            prompt: prompt,

            originalIdea:
                originalIdea,

            aiType:
                aiType,

            style:
                style,

            date:
                new Date().toLocaleString(),

            favorite:
                false
        };

        history.unshift(newPrompt);

        history =
            history.slice(0, 20);

        localStorage.setItem(
            "aivivoHistory",
            JSON.stringify(history)
        );

        displayPromptHistory();
    }


    // =========================================================
    // GENERATE BUTTON
    // =========================================================

    if (generateBtn) {

        generateBtn.addEventListener(
            "click",
            function () {

                const ideaElement =
                    document.getElementById("idea");

                const aiTypeElement =
                    document.getElementById("aiType");

                const styleElement =
                    document.getElementById("style");

                const idea =
                    ideaElement
                        ? ideaElement.value.trim()
                        : "";

                const aiType =
                    aiTypeElement
                        ? aiTypeElement.value
                        : "image";

                const style =
                    styleElement
                        ? styleElement.value
                        : "cinematic";


                if (!idea) {

                    alert(
                        "Please enter your idea first."
                    );

                    return;
                }


                const expandedIdea =
                    generatePrompt(
                        idea,
                        aiType,
                        style
                    );


                const resultBox =
                    document.getElementById(
                        "resultBox"
                    );

                const promptResult =
                    document.getElementById(
                        "promptResult"
                    );


                if (promptResult) {

                    promptResult.textContent =
                        expandedIdea;
                }


                savePromptToHistory(
                    expandedIdea,
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
                            expandedIdea,
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
                        idea,
                        aiType,
                        style,
                        promptResult,
                        qualityContainer
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
        idea,
        aiType,
        style,
        promptResult,
        qualityContainer
    ) {

        const improveBtn =
            document.getElementById(
                "improveBtn"
            );

        if (!improveBtn) return;


        improveBtn.addEventListener(
            "click",
            function () {

                const improved =
                    improvePrompt(
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
                        ) + 3
                    );


                qualityContainer.innerHTML =
                    createQualityBox(
                        newScore
                    );


                attachImproveButton(
                    idea,
                    aiType,
                    style,
                    promptResult,
                    qualityContainer
                );


                const button =
                    document.getElementById(
                        "improveBtn"
                    );

                if (button) {

                    button.textContent =
                        "🚀 Prompt Improved!";

                    setTimeout(
                        function () {

                            const reset =
                                document.getElementById(
                                    "improveBtn"
                                );

                            if (reset) {

                                reset.textContent =
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

                const promptResult =
                    document.getElementById(
                        "promptResult"
                    );

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


    // =========================================================
    // HISTORY SEARCH
    // =========================================================

    const searchInput =
        document.getElementById(
            "historySearch"
        );

    const filterInput =
        document.getElementById(
            "historyFilter"
        );


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


    // =========================================================
    // CLEAR HISTORY
    // =========================================================

    const clearBtn =
        document.getElementById(
            "clearHistoryBtn"
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

                    localStorage.removeItem(
                        "aivivoHistory"
                    );

                    displayPromptHistory();
                }

            }
        );
    }

});


// =============================================================
// HISTORY DISPLAY
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

                const searchableText =
                    (
                        item.originalIdea ||
                        item.prompt ||
                        ""
                    ).toLowerCase();


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
            }
        );


    if (
        filteredHistory.length === 0
    ) {

        historyList.innerHTML = `
            <div class="empty-history">

                <div>🔎</div>

                <h3>
                    ${
                        history.length === 0
                        ? "No prompts yet"
                        : "No matching prompts"
                    }
                </h3>

                <p>
                    ${
                        history.length === 0
                        ? "Your generated prompts will appear here."
                        : "Try another search or AI type."
                    }
                </p>

            </div>
        `;

        return;
    }


    historyList.innerHTML =
        filteredHistory
            .map(function (item) {

                return `

                    <div class="history-item">

                        <div class="history-item-header">

                            <span class="history-type">

                                ${getHistoryIcon(
                                    item.aiType
                                )}

                                ${(
                                    item.aiType ||
                                    "image"
                                ).toUpperCase()}

                            </span>


                            <span class="history-date">

                                ${
                                    item.date ||
                                    ""
                                }

                            </span>

                        </div>


                        <div class="history-original">

                            ${
                                escapeHistoryHTML(
                                    item.originalIdea ||
                                    "Generated prompt"
                                )
                            }

                        </div>


                        <div class="history-prompt">

                            ${
                                escapeHistoryHTML(
                                    item.prompt ||
                                    ""
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

            })
            .join("");
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

    return String(text)

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
            function (prompt) {
                return prompt.id === id;
            }
        );


    if (!item) return;


    navigator.clipboard.writeText(
        item.prompt
    );


    alert(
        "✅ Prompt copied!"
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
            function (prompt) {
                return prompt.id === id;
            }
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
            item.aiType || "image";
    }


    if (styleInput) {

        styleInput.value =
            item.style || "cinematic";
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
            function (prompt) {
                return prompt.id !== id;
            }
        );


    localStorage.setItem(
        "aivivoHistory",
        JSON.stringify(history)
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
            function (prompt) {
                return prompt.id === id;
            }
        );


    if (!item) return;


    item.favorite =
        !item.favorite;


    localStorage.setItem(
        "aivivoHistory",
        JSON.stringify(history)
    );


    displayPromptHistory();
}
