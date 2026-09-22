document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // AIVIVO — DYNAMIC CONTEXT ENGINE 3.0
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

        const savedTheme = localStorage.getItem("aivivoTheme");

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
    // EXTRACT YEAR
    // =========================================================

    function extractYear(text) {

        const match =
            text.match(/\b(19|20|21)\d{2}\b/);

        return match ? match[0] : "";
    }


    // =========================================================
    // LOCATION DETECTION
    // =========================================================

    function detectLocation(text) {

        const locations = {

            india: "India",

            mumbai: "Mumbai, India",

            delhi: "Delhi, India",

            bengaluru: "Bengaluru, India",

            bangalore: "Bengaluru, India",

            kolkata: "Kolkata, India",

            hyderabad: "Hyderabad, India",

            chennai: "Chennai, India",

            pune: "Pune, India",

            patna: "Patna, India",

            gaya: "Gaya, India",

            jaipur: "Jaipur, India",

            varanasi: "Varanasi, India",

            tokyo: "Tokyo, Japan",

            japan: "Japan",

            dubai: "Dubai, UAE",

            london: "London, United Kingdom",

            paris: "Paris, France",

            newyork: "New York City, USA",

            "new york": "New York City, USA",

            usa: "United States",

            america: "United States",

            china: "China",

            korea: "South Korea",

            australia: "Australia"

        };


        for (const key in locations) {

            if (text.includes(key)) {
                return locations[key];
            }
        }

        return "";
    }


    // =========================================================
    // DYNAMIC CONTEXT DETECTION 3.0
    // =========================================================

    function detectContext(idea) {

        const text = idea.toLowerCase();

        return {

            originalIdea: idea,

            year: extractYear(text),

            location: detectLocation(text),

            futuristic: hasAny(text, [
                "futuristic",
                "future",
                "sci-fi",
                "advanced",
                "next generation",
                "tomorrow",
                "2050",
                "2070",
                "2100"
            ]),

            city: hasAny(text, [
                "city",
                "megacity",
                "metropolis",
                "urban",
                "downtown",
                "skyscraper",
                "skyline",
                "cityscape"
            ]),

            village: hasAny(text, [
                "village",
                "rural",
                "countryside",
                "farmland",
                "farm",
                "small town"
            ]),

            night: hasAny(text, [
                "night",
                "nighttime",
                "at night",
                "midnight",
                "after dark"
            ]),

            sunrise: hasAny(text, [
                "sunrise",
                "dawn",
                "early morning"
            ]),

            morning: hasAny(text, [
                "morning",
                "morning time"
            ]),

            sunset: hasAny(text, [
                "sunset",
                "golden hour",
                "dusk"
            ]),

            evening: hasAny(text, [
                "evening"
            ]),

            rain: hasAny(text, [
                "rain",
                "rainy",
                "raining",
                "monsoon",
                "drizzle",
                "downpour"
            ]),

            storm: hasAny(text, [
                "storm",
                "thunderstorm",
                "lightning",
                "thunder"
            ]),

            fog: hasAny(text, [
                "fog",
                "foggy",
                "mist",
                "misty"
            ]),

            snow: hasAny(text, [
                "snow",
                "snowy",
                "blizzard",
                "winter"
            ]),

            summer: hasAny(text, [
                "summer",
                "heatwave",
                "hot weather"
            ]),

            sunny: hasAny(text, [
                "sunny",
                "sunlight",
                "bright day"
            ]),

            cyberpunk: hasAny(text, [
                "cyberpunk",
                "cyber punk"
            ]),

            anime: hasAny(text, [
                "anime",
                "manga",
                "japanese animation"
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
                "beach",
                "waterfall",
                "desert"
            ]),

            architecture: hasAny(text, [
                "building",
                "architecture",
                "house",
                "tower",
                "skyscraper",
                "bridge",
                "temple",
                "palace",
                "mosque",
                "church"
            ]),

            car: hasAny(text, [
                "car",
                "sports car",
                "vehicle",
                "automobile",
                "bike",
                "motorcycle"
            ]),

            product: hasAny(text, [
                "product",
                "phone",
                "smartphone",
                "laptop",
                "watch",
                "shoes",
                "bottle",
                "camera",
                "headphones"
            ]),

            space: hasAny(text, [
                "space",
                "galaxy",
                "planet",
                "astronaut",
                "spaceship",
                "cosmos",
                "universe",
                "mars"
            ]),

            fantasy: hasAny(text, [
                "fantasy",
                "magic",
                "wizard",
                "dragon",
                "castle",
                "mythical",
                "fairy"
            ]),

            horror: hasAny(text, [
                "horror",
                "haunted",
                "ghost",
                "scary",
                "abandoned",
                "creepy"
            ]),

            historical: hasAny(text, [
                "ancient",
                "historical",
                "medieval",
                "old",
                "1980",
                "1990",
                "traditional"
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
Strong visual hierarchy.
Sophisticated color grading.
Realistic lighting.
Atmospheric depth.
Immersive environmental storytelling.
Professional composition.`;

        }

        if (style === "creative") {

            return `
Distinctive creative visual interpretation.
Original composition.
Imaginative but coherent details.
Strong artistic identity.
Expressive atmosphere.
Memorable storytelling.`;

        }

        if (style === "professional") {

            return `
Clean professional visual direction.
Precise composition.
Controlled lighting.
Realistic details.
Polished presentation.
Commercial-quality execution.
Consistent visual language.`;

        }

        return `
Balanced visual direction.
Clear subject focus.
Natural composition.
Relevant details.
Realistic lighting.
Controlled atmosphere.`;
    }


    // =========================================================
    // TIME CONTEXT
    // =========================================================

    function getTimeContext(context) {

        if (context.sunrise) {

            return {
                atmosphere:
                    "Fresh early-morning atmosphere with soft haze, gentle humidity, distant atmospheric perspective, awakening streets, and the first signs of daily activity.",

                lighting:
                    "Natural sunrise illumination with warm golden highlights, a soft glowing horizon, cool remaining shadows, realistic reflections, and gentle atmospheric rays.",

                colors:
                    "Warm gold, soft orange, pale blue, subtle pink, cool shadows, metallic neutrals, and restrained cinematic tones."
            };
        }


        if (context.sunset) {

            return {
                atmosphere:
                    "Cinematic sunset atmosphere with warm sky gradients, atmospheric haze, long shadows, glowing surfaces, and a natural transition from daylight into evening.",

                lighting:
                    "Warm golden-hour sunlight mixed with soft directional shadows, glowing highlights, realistic reflections, and gradually emerging artificial illumination.",

                colors:
                    "Golden amber, warm orange, soft pink, deep blue shadows, metallic neutrals, and cinematic contrast."
            };
        }


        if (context.night) {

            return {
                atmosphere:
                    "Cinematic nighttime atmosphere with deep environmental contrast, realistic artificial illumination, subtle haze, atmospheric depth, and believable nighttime activity.",

                lighting:
                    "Controlled artificial lighting, practical lights, architectural illumination, realistic reflections, soft rim lighting, and physically believable shadows.",

                colors:
                    "Deep blue, charcoal, cool cyan, controlled violet, warm amber, metallic gray, and restrained highlights."
            };
        }


        if (context.morning) {

            return {
                atmosphere:
                    "Natural morning atmosphere with fresh air, subtle haze, realistic environmental depth, soft shadows, and active early-day surroundings.",

                lighting:
                    "Soft natural morning light with gentle highlights, controlled shadows, realistic reflections, and subtle atmospheric rays.",

                colors:
                    "Soft blue, warm white, gentle gold, natural greens, metallic neutrals, and restrained cinematic tones."
            };
        }


        return {

            atmosphere:
                "Natural environmental atmosphere with realistic weather conditions, atmospheric depth, subtle haze, believable activity, and physically coherent surroundings.",

            lighting:
                "Natural directional illumination with realistic highlights, controlled shadows, environmental reflections, and physically believable light interaction.",

            colors:
                "A balanced cinematic palette chosen according to the subject, environment, location, weather, and selected visual style."
        };
    }


    // =========================================================
    // WEATHER CONTEXT
    // =========================================================

    function getWeatherContext(context) {

        if (context.rain || context.storm) {

            let atmosphere =
                "Realistic rainfall interacting with the environment, wet surfaces, water droplets, atmospheric moisture, subtle rain mist, puddles, reflections, and believable weather conditions.";

            let lighting =
                "Diffused lighting through rain clouds, soft reflections across wet surfaces, atmospheric highlights, realistic specular reflections, and physically believable light scattering.";

            if (context.storm) {

                atmosphere +=
                    " Dramatic storm clouds, distant lightning, stronger wind, moving rain, and turbulent atmospheric conditions.";

                lighting +=
                    " Occasional lightning illumination balanced with natural storm lighting.";
            }

            return {
                atmosphere,
                lighting,
                colors:
                    "Deep blue-gray, wet charcoal, muted green, silver reflections, controlled highlights, and subtle warm practical lighting."
            };
        }


        if (context.snow) {

            return {

                atmosphere:
                    "Cold winter environment with falling snow, subtle frozen moisture, visible breath where appropriate, snow accumulation, and atmospheric depth.",

                lighting:
                    "Soft diffused winter lighting with cool reflections, subtle highlights, realistic snow illumination, and controlled shadows.",

                colors:
                    "Cool white, pale blue, silver, soft gray, muted natural tones, and restrained warm accents."
            };
        }


        if (context.fog) {

            return {

                atmosphere:
                    "Dense atmospheric fog and mist creating layered depth, softened distant forms, moisture in the air, and reduced visibility.",

                lighting:
                    "Soft diffused illumination with visible light scattering through the fog and subtle atmospheric glow.",

                colors:
                    "Muted blue-gray, silver, charcoal, soft white, and restrained environmental colors."
            };
        }


        if (context.summer || context.sunny) {

            return {

                atmosphere:
                    "Clear warm-weather atmosphere with visible sunlight, natural heat, subtle atmospheric shimmer, realistic environmental activity, and strong visibility.",

                lighting:
                    "Bright natural sunlight with defined highlights, realistic shadows, environmental reflections, and physically believable illumination.",

                colors:
                    "Warm natural tones, clear blue, green, earth tones, bright highlights, and balanced cinematic contrast."
            };
        }


        return {

            atmosphere: "",

            lighting: "",

            colors: ""
        };
    }


    // =========================================================
    // IMAGE ENGINE 3.0
    // =========================================================

    function buildImagePrompt(idea, style) {

        const context = detectContext(idea);

        const time = getTimeContext(context);

        const weather = getWeatherContext(context);

        const location =
            context.location ||
            "the location naturally implied by the original idea";

        const era =
            context.year
                ? `the year ${context.year}`
                : "the appropriate time period implied by the original idea";


        let subject = "";
        let environment = "";
        let technology = "";
        let visualStory = "";
        let people = "";
        let composition = "";
        let camera = "";
        let materials = "";
        let negative = "";


        // =====================================================
        // CYBERPUNK
        // =====================================================

        if (context.cyberpunk) {

            subject =
                `A visually dominant cyberpunk environment based directly on "${idea}", with distinctive architecture, advanced technology, believable urban infrastructure, and a strong visual identity.`;

            environment =
                `A dense futuristic urban environment in ${location}, with layered architecture, narrow streets, elevated structures, digital signage, atmospheric depth, detailed storefronts, transportation systems, and realistic spatial relationships.`;

            technology =
                "Holographic interfaces, autonomous vehicles, drones, robotic systems, advanced displays, smart infrastructure, cables, digital advertisements, and believable futuristic technology.";

            visualStory =
                "Show people, vehicles, businesses, technology, architecture, and infrastructure interacting naturally so the environment feels like a functioning society rather than a collection of random futuristic objects.";

            people =
                "Believable pedestrians with natural movement, realistic clothing, diverse appearances, commuters, workers, vendors, and people naturally interacting with the surrounding city.";

            composition =
                "Strong foreground, midground, and background separation, clear focal hierarchy, leading lines, controlled visual density, reflective foreground elements, and cinematic environmental storytelling.";

            camera =
                "Wide cinematic street-level camera using approximately 28mm lens characteristics, realistic perspective, immersive depth, controlled distortion, and strong environmental framing.";

            materials =
                "Wet asphalt, reflective glass, brushed metal, dark concrete, illuminated panels, cables, digital surfaces, realistic vehicle materials, rain droplets, and subtle surface imperfections.";

            negative =
                "Avoid random neon, excessive holograms, generic sci-fi objects, impossible architecture, distorted anatomy, inconsistent perspective, empty streets, excessive clutter, and unrelated futuristic elements.";
        }


        // =====================================================
        // FUTURISTIC CITY / VILLAGE
        // =====================================================

        else if (context.futuristic && context.city) {

            subject =
                `A believable futuristic city in ${location}, set in ${era}, with advanced architecture, intelligent infrastructure, sophisticated transportation, autonomous mobility, and people naturally living within the environment.`;

            environment =
                `A highly developed ${location} metropolitan environment with interconnected buildings, realistic streets, transportation corridors, public spaces, commercial areas, greenery, distant structures, atmospheric depth, and believable urban density.`;

            technology =
                "Autonomous electric vehicles, intelligent transportation systems, smart roads, advanced public transit, delivery drones, AI-assisted infrastructure, renewable energy systems, advanced communication networks, and digital public services.";

            visualStory =
                "Show the city functioning as a real place. People naturally interact with transportation, buildings, shops, public spaces, technology, businesses, and infrastructure.";

            people =
                context.india
                    ? "Diverse Indian pedestrians, commuters, workers, families, businesses, public transportation users, and natural everyday activity. Use believable Indian urban details without relying on cultural stereotypes."
                    : "Diverse pedestrians, commuters, workers, businesses, public transportation users, and natural everyday activity appropriate to the specified location.";

            composition =
                "Strong foreground, midground, and background separation with clear visual hierarchy, leading lines, realistic architectural scale, layered depth, balanced framing, natural pedestrian placement, and believable transportation flow.";

            camera =
                "Wide cinematic establishing shot using approximately 28mm lens characteristics, realistic perspective, controlled vertical architecture, strong foreground-to-background depth, and immersive environmental storytelling.";

            materials =
                "Reflective architectural glass, brushed steel, polished concrete, advanced road surfaces, realistic vehicle materials, detailed building facades, vegetation, transparent displays, and subtle surface imperfections.";

            negative =
                "Avoid generic futuristic cities, random architecture, impossible structures, excessive neon, cultural stereotypes, unrealistic vehicles, distorted people, inconsistent perspective, floating objects without purpose, excessive clutter, and unrelated details.";
        }


        else if (context.futuristic && context.village) {

            subject =
                `A believable futuristic rural environment based on "${idea}", combining advanced technology with the original village or countryside setting while preserving its natural identity.`;

            environment =
                `A future ${location} countryside with homes, farmland, roads, vegetation, water systems, community spaces, renewable infrastructure, and realistic rural architecture adapted to advanced technology.`;

            technology =
                "Autonomous agricultural equipment, smart irrigation, renewable energy, agricultural drones, intelligent transportation, solar infrastructure, advanced communication systems, and practical rural technology.";

            visualStory =
                "Show technology improving everyday rural life without replacing the village's natural character. People should interact naturally with farms, homes, roads, animals, vehicles, and smart infrastructure.";

            people =
                "Local residents, farmers, workers, families, and children engaged in believable everyday activities with natural body language and appropriate clothing.";

            composition =
                "Layered rural composition with strong foreground vegetation, clear subject placement, expansive midground activity, distant landscape depth, realistic scale, and natural leading lines.";

            camera =
                "Wide cinematic environmental shot using 28mm to 35mm lens characteristics, realistic perspective, natural depth, and immersive environmental storytelling.";

            materials =
                "Natural soil, vegetation, wood, stone, concrete, metal, solar panels, agricultural equipment, realistic roads, water surfaces, and subtle technological materials.";

            negative =
                "Avoid turning the village into a futuristic megacity, excessive skyscrapers, random neon, unrealistic technology, cultural stereotypes, impossible structures, and unrelated urban elements.";
        }


        // =====================================================
        // PORTRAIT
        // =====================================================

        else if (context.portrait) {

            subject =
                `A clearly defined human character based on "${idea}", with realistic facial proportions, expressive eyes, natural skin texture, detailed hair, authentic clothing, and a distinct visual identity.`;

            environment =
                `A visually appropriate environment in ${location} that supports the character without distracting from the subject.`;

            technology =
                "Include objects, accessories, clothing details, or technology only when they naturally support the original concept.";

            visualStory =
                "Create believable interaction between the character and environment through natural posture, facial expression, body language, clothing, and contextual details.";

            people =
                "Natural facial expression, realistic anatomy, believable posture, authentic clothing folds, and realistic human proportions.";

            composition =
                "Strong subject hierarchy, balanced negative space, natural framing, realistic proportions, and clear separation between subject and background.";

            camera =
                "Professional portrait photography using 50mm or 85mm lens characteristics, realistic perspective, controlled depth of field, sharp facial detail, and natural subject separation.";

            materials =
                "Detailed skin texture, individual hair strands, realistic fabric, leather, metal accessories, natural surface imperfections, and physically believable materials.";

            negative =
                "Avoid distorted anatomy, unnatural skin, plastic-looking faces, extra fingers, duplicated people, unrealistic eyes, excessive smoothing, flat lighting, and distracting backgrounds.";
        }


        // =====================================================
        // LANDSCAPE
        // =====================================================

        else if (context.landscape) {

            subject =
                `A dramatic natural landscape based directly on "${idea}", with clearly defined terrain, vegetation, geological formations, water, environmental features, and a strong visual focal point.`;

            environment =
                `An expansive natural environment in ${location}, with layered foreground, midground, and background elements, realistic terrain variation, atmospheric perspective, and believable environmental conditions.`;

            technology =
                "Avoid unnecessary technology unless it naturally belongs to the original concept.";

            visualStory =
                "Create a natural relationship between terrain, vegetation, water, weather, wildlife, and any human presence.";

            people =
                "Include people or wildlife only when relevant to the original concept and place them naturally within the environment.";

            composition =
                "Wide cinematic landscape composition with strong leading lines, balanced foreground, dramatic horizon placement, layered depth, and clear visual hierarchy.";

            camera =
                "24mm wide-angle cinematic landscape photography with deep focus, realistic perspective, balanced framing, and immersive scale.";

            materials =
                "Detailed rocks, soil, vegetation, water surfaces, tree bark, clouds, terrain textures, and realistic natural materials.";

            negative =
                "Avoid artificial landscapes, impossible terrain, repeated trees, unrealistic water, flat composition, excessive saturation, distorted animals, and unrelated objects.";
        }


        // =====================================================
        // ARCHITECTURE
        // =====================================================

        else if (context.architecture) {

            subject =
                `A visually striking architectural subject based on "${idea}", with clearly defined geometry, structure, facade details, entrances, windows, materials, and realistic scale.`;

            environment =
                `A believable architectural environment in ${location}, with surrounding structures, streets, landscaping, pedestrians, infrastructure, and realistic spatial relationships.`;

            technology =
                "Use smart infrastructure, transportation systems, digital displays, advanced materials, or architectural technology only when relevant.";

            visualStory =
                "Show the architecture functioning within its environment through realistic pedestrian movement, transportation, public spaces, businesses, and environmental interaction.";

            people =
                "Natural pedestrians, workers, vehicles, vegetation, and public-space interactions that make the architecture feel inhabited.";

            composition =
                "Strong geometric composition with architectural hierarchy, leading lines, controlled perspective, balanced framing, and realistic scale.";

            camera =
                "Cinematic architectural photography with wide-angle lens characteristics, controlled vertical lines, realistic perspective, and strong depth.";

            materials =
                "Glass, steel, concrete, stone, wood, brushed metal, illuminated surfaces, realistic windows, structural joints, and detailed facade textures.";

            negative =
                "Avoid impossible architecture, distorted perspective, floating buildings, repetitive windows, empty environments, flat lighting, unrealistic scale, and excessive clutter.";
        }


        // =====================================================
        // CAR / PRODUCT
        // =====================================================

        else if (context.car || context.product) {

            subject =
                `A premium, clearly defined subject based directly on "${idea}", with precise proportions, sophisticated design language, realistic surface details, functional components, and distinctive visual identity.`;

            environment =
                "A carefully designed studio or contextual environment that supports the subject without distracting from it.";

            technology =
                "Highlight relevant functional components, interfaces, mechanisms, materials, and technological features that naturally belong to the subject.";

            visualStory =
                "Present the subject in a believable environment with realistic interaction between the object, surface, lighting, and supporting elements.";

            people =
                "Include human interaction only when relevant to the original concept.";

            composition =
                "Strong subject hierarchy, precise framing, controlled negative space, realistic proportions, and balanced visual composition.";

            camera =
                "Professional product or automotive photography using 50mm to 85mm lens characteristics, controlled perspective, precise framing, and realistic depth of field.";

            materials =
                "Realistic metal, glass, plastic, leather, rubber, fabric, polished surfaces, micro-textures, seams, buttons, panels, and material transitions.";

            negative =
                "Avoid incorrect proportions, floating products, unrealistic materials, distorted branding, excessive reflections, messy backgrounds, and unnecessary objects.";
        }


        // =====================================================
        // SPACE
        // =====================================================

        else if (context.space) {

            subject =
                `A highly detailed space scene based directly on "${idea}", with believable engineering, advanced equipment, clearly defined structures, and a strong visual focal point.`;

            environment =
                "A vast cosmic environment containing planets, stars, nebulae, orbital structures, spacecraft, or futuristic stations appropriate to the concept.";

            technology =
                "Advanced spacecraft systems, robotic equipment, communication arrays, energy systems, navigation interfaces, and believable futuristic engineering.";

            visualStory =
                "Create clear scale relationships between spacecraft, planets, structures, astronauts, and surrounding cosmic elements.";

            people =
                "Astronauts or human subjects only when relevant, with realistic proportions, equipment, movement, and believable interaction.";

            composition =
                "Epic cinematic composition with dramatic perspective, strong scale relationships, layered cosmic depth, and clear focal hierarchy.";

            camera =
                "Epic wide-angle cinematic camera with realistic scale, deep focus, controlled framing, and immersive perspective.";

            materials =
                "Advanced metal alloys, reflective glass, carbon composites, illuminated panels, mechanical components, and realistic spacecraft surfaces.";

            negative =
                "Avoid impossible spacecraft, random planets, unrealistic scale, distorted astronauts, excessive glowing effects, and scientifically incoherent structures.";
        }


        // =====================================================
        // FANTASY
        // =====================================================

        else if (context.fantasy) {

            subject =
                `A richly designed fantasy scene based directly on "${idea}", with distinctive characters, detailed clothing or armor, expressive features, creatures, and believable interaction with the magical environment.`;

            environment =
                "An expansive fantasy environment with ancient architecture, mystical landscapes, atmospheric depth, natural elements, and carefully designed environmental storytelling.";

            technology =
                "Use magical objects, artifacts, enchanted structures, glowing symbols, mystical mechanisms, or magical energy where appropriate instead of unrelated modern technology.";

            visualStory =
                "Create natural interactions between characters, magical elements, architecture, terrain, creatures, and surrounding environment.";

            people =
                "Believable fantasy characters with natural poses, realistic anatomy, expressive faces, detailed clothing, and contextual interactions.";

            composition =
                "Epic cinematic composition with strong subject placement, dramatic perspective, layered environmental depth, and clear visual hierarchy.";

            camera =
                "Wide cinematic fantasy composition with dramatic perspective, realistic scale, controlled depth, and immersive storytelling.";

            materials =
                "Stone, ancient wood, metal armor, fabric, leather, crystals, magical surfaces, vegetation, and detailed environmental textures.";

            negative =
                "Avoid generic fantasy clichés, distorted anatomy, random magical objects, excessive glowing effects, flat environments, and unrelated elements.";
        }


        // =====================================================
        // HORROR
        // =====================================================

        else if (context.horror) {

            subject =
                `A clearly defined horror scene based directly on "${idea}", with unsettling visual characteristics, realistic textures, and a strong psychological presence.`;

            environment =
                "An abandoned or isolated environment with decaying architecture, damaged structures, overgrown vegetation, empty corridors, and believable signs of neglect.";

            technology =
                "Use broken lights, old monitors, abandoned equipment, flickering electronics, or environmental technology only when appropriate.";

            visualStory =
                "Create subtle environmental clues that suggest a believable history without overcrowding the scene.";

            people =
                "Human presence only when relevant, with realistic silhouettes, proportions, posture, and environmental interaction.";

            composition =
                "Controlled cinematic framing with deliberate negative space, strong foreground elements, deep shadows, and clear visual hierarchy.";

            camera =
                "Low-angle cinematic framing with slightly wide lens characteristics, deep shadows, controlled perspective, and deliberate negative space.";

            materials =
                "Aged concrete, cracked walls, rusted metal, dirty glass, decaying wood, wet surfaces, dust, and damaged fabrics.";

            negative =
                "Avoid excessive gore, cartoonish horror, distorted anatomy, random objects, flat lighting, unrealistic environments, and cheap-looking effects.";
        }


        // =====================================================
        // DEFAULT
        // =====================================================

        else {

            subject =
                `A clearly defined main subject based directly on "${idea}", with relevant appearance, characteristics, objects, and visual elements that naturally support the original concept.`;

            environment =
                `A believable environment in ${location || "an appropriate setting"}, including relevant architecture, weather, time of day, background elements, and environmental features.`;

            technology =
                "Introduce technology, objects, transportation, interfaces, or infrastructure only when they naturally fit the original concept.";

            visualStory =
                "Create natural relationships between the subject, environment, objects, people, and surrounding elements so the scene feels purposeful and believable.";

            people =
                "Include people only when relevant, with realistic anatomy, natural body language, believable clothing, and appropriate environmental interaction.";

            composition =
                "Strong foreground, midground, and background separation with clear subject hierarchy, leading lines, balanced framing, realistic scale, and intentional placement.";

            camera =
                "Professional cinematic camera angle and framing with appropriate lens characteristics, realistic perspective, controlled depth of field, and strong visual balance.";

            materials =
                "Realistic surfaces, materials, textures, environmental details, and subtle imperfections appropriate to the scene.";

            negative =
                "Avoid generic visuals, unnecessary objects, inconsistent perspective, distorted anatomy, unrealistic materials, flat lighting, excessive clutter, low-detail environments, blurry textures, and unrelated elements.";
        }


        // =====================================================
        // COMBINE TIME + WEATHER
        // =====================================================

        let finalAtmosphere =
            time.atmosphere;

        let finalLighting =
            time.lighting;

        let finalColors =
            time.colors;


        if (weather.atmosphere) {

            finalAtmosphere +=
                " " + weather.atmosphere;
        }


        if (weather.lighting) {

            finalLighting +=
                " " + weather.lighting;
        }


        if (weather.colors) {

            finalColors =
                weather.colors;
        }


        // =====================================================
        // INDIAN CONTEXT
        // =====================================================

        let indianContext = "";

        if (context.india) {

            indianContext = `
INDIAN CONTEXT:
Use believable Indian environmental details appropriate to the requested setting, including architecture, urban planning, public transportation, greenery, businesses, multilingual signage, people, and everyday activity.

Keep the cultural representation natural and contextually appropriate.
Avoid stereotypical decoration or unnecessary cultural objects.`;
        }


        // =====================================================
        // ERA CONTEXT
        // =====================================================

        let eraContext = "";

        if (context.year) {

            eraContext = `
ERA:
The visual world should plausibly belong to ${context.year}. Technology, architecture, transportation, clothing, infrastructure, and everyday life should be consistent with this period.`;
        }


        // =====================================================
        // FINAL PROMPT
        // =====================================================

        return `Create a ${style}, highly detailed AI image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE 3.0:

CONCEPT:
Understand the original idea as a combination of subject, location, era, time, weather, genre, environment, and visual intent.

Preserve the original meaning while intelligently expanding only the details that naturally support it.

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

${indianContext}

${eraContext}

ATMOSPHERE:
${finalAtmosphere}

COMPOSITION:
${composition}

CAMERA:
${camera}

LIGHTING:
${finalLighting}

COLOR PALETTE:
${finalColors}

MATERIALS & TEXTURES:
${materials}

STYLE DIRECTION:
${getStyleDirection(style)}

COHERENCE:
All architecture, people, objects, technology, weather, lighting, materials, perspective, scale, and atmosphere must belong to the same believable world.

DYNAMIC CONTEXT:
Respect every explicitly requested contextual element.

Do not replace the requested location.
Do not replace the requested time of day.
Do not replace the requested weather.
Do not replace the requested era.
Do not introduce unrelated genres or environments.

CORE IDEA PROTECTION:
Preserve the original idea exactly at its core.

Every added detail must support the original concept.

QUALITY:
Ultra-detailed, coherent, realistic proportions, physically believable lighting, detailed textures, strong atmospheric depth, sophisticated composition, realistic scale, professional production design, immersive storytelling, and optimized for modern AI image generation.

NEGATIVE:
${negative}

OUTPUT:
Return one complete, polished, ready-to-use AI image generation prompt.`;
    }


    // =========================================================
    // VIDEO
    // =========================================================

    function buildVideoPrompt(idea, style) {

        return `Create a ${style}, highly detailed AI video based on this original idea:

"${idea}"

SMART VIDEO INTELLIGENCE:

SCENE:
Define the location, environment, time, weather, architecture, atmosphere, and visual context.

SUBJECT & ACTION:
Clearly define the main subject and what it is doing.

MOTION:
Describe realistic movement of people, vehicles, objects, clothing, hair, weather, particles, and environmental elements.

CAMERA:
Specify camera angle, framing, lens characteristics, tracking, pans, tilts, zooms, and cinematic movement.

VISUAL STORY:
Create a clear visual progression with purposeful cinematic development.

LIGHTING:
Use realistic directional lighting, shadows, highlights, reflections, practical lights, and atmospheric illumination.

PACING:
Maintain smooth cinematic pacing and intentional visual rhythm.

STYLE:
${getStyleDirection(style)}

QUALITY:
Smooth motion, consistent subjects, realistic physics, coherent environments, cinematic lighting, high detail, temporal consistency, and professional production quality.

NEGATIVE:
Avoid flickering, distorted faces, inconsistent subjects, unnatural motion, broken physics, random camera movement, visual artifacts, and unnecessary objects.

OUTPUT:
Return one complete, ready-to-use AI video generation prompt.`;
    }


    // =========================================================
    // TEXT
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
Use all relevant background information required to understand the request.

STRUCTURE:
Organize the response into clear logical sections.

TONE:
Use a ${style} communication style that feels natural, clear, confident, and engaging.

CONTENT:
Expand the original idea with relevant information, examples, explanations, and practical details without unnecessary filler.

CLARITY:
Use precise language, logical flow, concise explanations, and useful formatting.

QUALITY:
Make the response accurate, useful, polished, coherent, engaging, and professionally written.

OUTPUT:
Return one complete, ready-to-use AI writing prompt.`;
    }


    // =========================================================
    // CODE
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

QUALITY:
The solution should be reliable, maintainable, efficient, scalable, and production-ready where appropriate.

OUTPUT:
Return one complete, ready-to-use AI coding prompt.`;
    }


    // =========================================================
    // STUDY
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
    // QUALITY SCORE 3.0
    // =========================================================

    function calculateQualityScore(prompt, idea, aiType) {

        let score = 45;

        const sections = [
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


        let sectionCount = 0;

        sections.forEach(function (section) {

            if (prompt.includes(section)) {
                sectionCount++;
            }
        });


        score += sectionCount * 2;


        // Specificity
        if (idea.length >= 20) {
            score += 4;
        }

        if (idea.length >= 50) {
            score += 4;
        }


        // Context awareness
        const context =
            detectContext(idea);


        if (context.location) {
            score += 4;
        }

        if (context.year) {
            score += 4;
        }

        if (
            context.night ||
            context.sunrise ||
            context.sunset ||
            context.morning
        ) {
            score += 3;
        }

        if (
            context.rain ||
            context.snow ||
            context.storm ||
            context.fog ||
            context.summer
        ) {
            score += 3;
        }


        // AI type specific
        if (aiType === "image") {

            if (prompt.includes("COLOR PALETTE:")) {
                score += 2;
            }

            if (prompt.includes("MATERIALS & TEXTURES:")) {
                score += 2;
            }

            if (prompt.includes("PEOPLE & EVERYDAY LIFE:")) {
                score += 2;
            }
        }


        if (aiType === "video") {

            if (prompt.includes("MOTION:")) {
                score += 3;
            }

            if (prompt.includes("PACING:")) {
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

            if (prompt.includes("REVISION:")) {
                score += 2;
            }
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
            Math.max(0, Math.min(100, score - 2));

        const detail =
            Math.max(0, Math.min(100, score + 1));

        const structure =
            Math.max(0, Math.min(100, score));

        const aiReady =
            Math.max(0, Math.min(100, score + 2));


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
    // IMPROVE
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

Remove unnecessary repetition.
Keep every detail relevant to the original idea.
Maintain logical consistency between all sections.
Prioritize concrete information.
Preserve the original intent.
Avoid generic filler.
Ensure contextual details remain consistent.
Make the prompt clear to modern AI systems.
Return a polished production-ready prompt.`;
    }


    // =========================================================
    // HISTORY SAVE
    // =========================================================

    function savePromptToHistory(
        prompt,
        aiType,
        style,
        originalIdea
    ) {

        let history =
            JSON.parse(
                localStorage.getItem(
                    "aivivoHistory"
                )
            ) || [];


        const newPrompt = {

            id: Date.now(),

            prompt: prompt,

            originalIdea: originalIdea,

            aiType: aiType,

            style: style,

            date: new Date().toLocaleString(),

            favorite: false
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
    // GENERATE
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
                        createQualityBox(
                            score
                        );


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


                if (promptResult) {

                    promptResult.textContent =
                        improved;
                }


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

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
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
            item.aiType ||
            "image";
    }


    if (styleInput) {

        styleInput.value =
            item.style ||
            "cinematic";
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
