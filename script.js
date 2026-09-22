document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // AIVIVO — SMART VISUAL INTELLIGENCE 4.0
    // Dynamic Context + Combination Intelligence
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
    // CHARACTER COUNTER
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
    // HELPERS
    // =========================================================

    function hasAny(text, words) {

        return words.some(function (word) {

            return text.includes(word);

        });
    }


    function cleanText(text) {

        return text
            .toLowerCase()
            .replace(/[“”"]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    }


    function extractYear(text) {

        const match =
            text.match(/\b(18|19|20|21)\d{2}\b/);

        return match
            ? match[0]
            : "";
    }


    // =========================================================
    // LOCATION INTELLIGENCE
    // =========================================================

    function detectLocation(text) {

        const locations = [

            {
                words: ["new york", "nyc"],
                label: "New York City, USA"
            },

            {
                words: ["san francisco"],
                label: "San Francisco, USA"
            },

            {
                words: ["los angeles", "la"],
                label: "Los Angeles, USA"
            },

            {
                words: ["london"],
                label: "London, United Kingdom"
            },

            {
                words: ["paris"],
                label: "Paris, France"
            },

            {
                words: ["tokyo"],
                label: "Tokyo, Japan"
            },

            {
                words: ["osaka"],
                label: "Osaka, Japan"
            },

            {
                words: ["japan"],
                label: "Japan"
            },

            {
                words: ["dubai"],
                label: "Dubai, UAE"
            },

            {
                words: ["abu dhabi"],
                label: "Abu Dhabi, UAE"
            },

            {
                words: ["singapore"],
                label: "Singapore"
            },

            {
                words: ["seoul"],
                label: "Seoul, South Korea"
            },

            {
                words: ["china"],
                label: "China"
            },

            {
                words: ["india", "indian"],
                label: "India"
            },

            {
                words: ["mumbai", "bombay"],
                label: "Mumbai, India"
            },

            {
                words: ["delhi", "new delhi"],
                label: "Delhi, India"
            },

            {
                words: ["bengaluru", "bangalore"],
                label: "Bengaluru, India"
            },

            {
                words: ["kolkata", "calcutta"],
                label: "Kolkata, India"
            },

            {
                words: ["hyderabad"],
                label: "Hyderabad, India"
            },

            {
                words: ["chennai", "madras"],
                label: "Chennai, India"
            },

            {
                words: ["pune"],
                label: "Pune, India"
            },

            {
                words: ["patna"],
                label: "Patna, India"
            },

            {
                words: ["gaya"],
                label: "Gaya, India"
            },

            {
                words: ["jaipur"],
                label: "Jaipur, India"
            },

            {
                words: ["varanasi"],
                label: "Varanasi, India"
            },

            {
                words: ["america", "usa", "united states"],
                label: "United States"
            },

            {
                words: ["australia"],
                label: "Australia"
            },

            {
                words: ["canada"],
                label: "Canada"
            }

        ];


        for (const item of locations) {

            if (
                item.words.some(function (word) {
                    return text.includes(word);
                })
            ) {

                return item.label;
            }
        }

        return "";
    }


    // =========================================================
    // TIME INTELLIGENCE
    // =========================================================

    function detectTime(text) {

        if (
            hasAny(text, [
                "sunrise",
                "dawn",
                "first light"
            ])
        ) {
            return "sunrise";
        }


        if (
            hasAny(text, [
                "sunset",
                "golden hour",
                "dusk"
            ])
        ) {
            return "sunset";
        }


        if (
            hasAny(text, [
                "midnight",
                "late night",
                "nighttime",
                "at night",
                "night"
            ])
        ) {
            return "night";
        }


        if (
            hasAny(text, [
                "early morning",
                "morning"
            ])
        ) {
            return "morning";
        }


        if (
            hasAny(text, [
                "afternoon",
                "midday",
                "noon"
            ])
        ) {
            return "afternoon";
        }


        if (
            hasAny(text, [
                "evening"
            ])
        ) {
            return "evening";
        }


        return "";
    }


    // =========================================================
    // WEATHER INTELLIGENCE
    // =========================================================

    function detectWeather(text) {

        if (
            hasAny(text, [
                "monsoon"
            ])
        ) {
            return "monsoon";
        }


        if (
            hasAny(text, [
                "thunderstorm",
                "storm",
                "lightning"
            ])
        ) {
            return "storm";
        }


        if (
            hasAny(text, [
                "rain",
                "rainy",
                "raining",
                "drizzle",
                "downpour"
            ])
        ) {
            return "rain";
        }


        if (
            hasAny(text, [
                "fog",
                "foggy",
                "mist",
                "misty"
            ])
        ) {
            return "fog";
        }


        if (
            hasAny(text, [
                "snow",
                "snowy",
                "blizzard"
            ])
        ) {
            return "snow";
        }


        if (
            hasAny(text, [
                "summer",
                "heatwave"
            ])
        ) {
            return "summer";
        }


        if (
            hasAny(text, [
                "sunny",
                "clear sky"
            ])
        ) {
            return "sunny";
        }


        return "";
    }


    // =========================================================
    // STYLE / GENRE INTELLIGENCE
    // =========================================================

    function detectStyleKeywords(text) {

        return {

            cyberpunk:
                hasAny(text, [
                    "cyberpunk",
                    "cyber punk"
                ]),

            anime:
                hasAny(text, [
                    "anime",
                    "manga",
                    "2d animation"
                ]),

            photorealistic:
                hasAny(text, [
                    "photorealistic",
                    "photo realistic",
                    "realistic"
                ]),

            watercolor:
                hasAny(text, [
                    "watercolor",
                    "watercolour"
                ]),

            oil:
                hasAny(text, [
                    "oil painting",
                    "oil paint"
                ]),

            illustration:
                hasAny(text, [
                    "illustration",
                    "illustrated"
                ]),

            vintage:
                hasAny(text, [
                    "vintage",
                    "retro"
                ])

        };
    }


    // =========================================================
    // SCENE INTELLIGENCE
    // =========================================================

    function detectScene(text) {

        const styles =
            detectStyleKeywords(text);


        if (styles.cyberpunk) {
            return "cyberpunk";
        }


        if (
            hasAny(text, [
                "sports car",
                "supercar",
                "hypercar",
                "race car",
                "car",
                "automobile",
                "vehicle",
                "motorcycle",
                "bike"
            ])
        ) {
            return "automotive";
        }


        if (
            hasAny(text, [
                "portrait",
                "headshot",
                "close-up face",
                "closeup face",
                "girl",
                "boy",
                "woman",
                "man",
                "character"
            ])
        ) {
            return "portrait";
        }


        if (
            hasAny(text, [
                "mountain",
                "forest",
                "valley",
                "lake",
                "ocean",
                "beach",
                "waterfall",
                "desert",
                "landscape",
                "nature"
            ])
        ) {
            return "landscape";
        }


        if (
            hasAny(text, [
                "temple",
                "palace",
                "mosque",
                "church",
                "building",
                "architecture",
                "tower",
                "bridge"
            ])
        ) {
            return "architecture";
        }


        if (
            hasAny(text, [
                "space",
                "galaxy",
                "planet",
                "astronaut",
                "spaceship",
                "mars",
                "cosmos"
            ])
        ) {
            return "space";
        }


        if (
            hasAny(text, [
                "fantasy",
                "dragon",
                "wizard",
                "magic",
                "castle",
                "mythical"
            ])
        ) {
            return "fantasy";
        }


        if (
            hasAny(text, [
                "horror",
                "haunted",
                "ghost",
                "creepy",
                "scary"
            ])
        ) {
            return "horror";
        }


        if (
            hasAny(text, [
                "village",
                "rural",
                "countryside",
                "farmland",
                "farm",
                "small town"
            ])
        ) {
            return "village";
        }


        if (
            hasAny(text, [
                "city",
                "megacity",
                "metropolis",
                "downtown",
                "skyline",
                "cityscape"
            ])
        ) {
            return "city";
        }


        return "general";
    }


    // =========================================================
    // MASTER CONTEXT
    // =========================================================

    function detectContext(idea) {

        const text =
            cleanText(idea);

        const location =
            detectLocation(text);

        const year =
            extractYear(text);

        const time =
            detectTime(text);

        const weather =
            detectWeather(text);

        const scene =
            detectScene(text);

        const styles =
            detectStyleKeywords(text);


        return {

            originalIdea: idea,

            text: text,

            location: location,

            india:
                location.includes("India"),

            year: year,

            time: time,

            weather: weather,

            scene: scene,

            futuristic:
                hasAny(text, [
                    "futuristic",
                    "future",
                    "sci-fi",
                    "science fiction",
                    "advanced",
                    "next generation",
                    "2050",
                    "2070",
                    "2100"
                ]),

            historical:
                hasAny(text, [
                    "ancient",
                    "historical",
                    "medieval",
                    "old",
                    "traditional",
                    "1980",
                    "1990"
                ]),

            village:
                hasAny(text, [
                    "village",
                    "rural",
                    "countryside",
                    "farmland",
                    "farm",
                    "small town"
                ]),

            city:
                hasAny(text, [
                    "city",
                    "megacity",
                    "metropolis",
                    "urban",
                    "downtown",
                    "skyline",
                    "cityscape"
                ]),

            cyberpunk:
                styles.cyberpunk,

            anime:
                styles.anime,

            photorealistic:
                styles.photorealistic,

            watercolor:
                styles.watercolor,

            oil:
                styles.oil,

            illustration:
                styles.illustration,

            vintage:
                styles.vintage
        };
    }


    // =========================================================
    // TIME VISUALS
    // =========================================================

    function getTimeVisuals(time) {

        if (time === "sunrise") {

            return {

                atmosphere:
                    "Fresh sunrise atmosphere with soft haze, gentle humidity, distant atmospheric perspective, and the environment beginning its daily activity.",

                lighting:
                    "Natural sunrise illumination with warm golden highlights, a softly glowing horizon, cool remaining shadows, realistic reflections, and gentle atmospheric rays.",

                colors:
                    "Warm gold, soft orange, pale blue, subtle pink, cool shadows, and restrained cinematic tones."
            };
        }


        if (time === "sunset") {

            return {

                atmosphere:
                    "Cinematic sunset atmosphere with warm sky gradients, atmospheric haze, long shadows, glowing surfaces, and a natural transition toward evening.",

                lighting:
                    "Warm golden-hour sunlight with soft directional shadows, glowing highlights, realistic reflections, and subtle artificial illumination beginning to appear.",

                colors:
                    "Golden amber, warm orange, soft pink, deep blue shadows, metallic neutrals, and cinematic contrast."
            };
        }


        if (time === "night") {

            return {

                atmosphere:
                    "Believable nighttime atmosphere with deep environmental contrast, realistic artificial illumination, subtle haze, and natural nighttime activity.",

                lighting:
                    "Controlled artificial lighting, practical lights, architectural illumination, realistic reflections, subtle rim lighting, and physically believable shadows.",

                colors:
                    "Deep blue, charcoal, cool tones, warm practical lights, metallic neutrals, and restrained highlights."
            };
        }


        if (time === "morning") {

            return {

                atmosphere:
                    "Fresh natural morning atmosphere with subtle haze, soft shadows, realistic environmental depth, and early-day activity.",

                lighting:
                    "Soft natural morning illumination with gentle highlights, controlled shadows, realistic reflections, and subtle atmospheric rays.",

                colors:
                    "Soft blue, warm white, gentle gold, natural greens, and balanced cinematic tones."
            };
        }


        if (time === "afternoon") {

            return {

                atmosphere:
                    "Clear daytime atmosphere with strong environmental visibility, realistic depth, natural activity, and physically coherent surroundings.",

                lighting:
                    "Natural daylight with controlled highlights, defined but realistic shadows, environmental reflections, and physically believable illumination.",

                colors:
                    "Natural daylight tones, balanced blues, greens, earth tones, and realistic cinematic contrast."
            };
        }


        if (time === "evening") {

            return {

                atmosphere:
                    "Natural evening atmosphere with fading daylight, increasing ambient illumination, subtle haze, and realistic transition toward night.",

                lighting:
                    "Soft late-day illumination with warm highlights, controlled shadows, realistic reflections, and emerging practical lights.",

                colors:
                    "Warm amber, muted orange, soft blue, charcoal shadows, and balanced cinematic tones."
            };
        }


        return {

            atmosphere:
                "Natural environmental atmosphere appropriate to the original concept, with realistic depth and believable surroundings.",

            lighting:
                "Physically believable illumination appropriate to the environment and requested visual context.",

            colors:
                "A balanced cinematic palette selected according to the subject, location, environment, and visual style."
        };
    }


    // =========================================================
    // WEATHER VISUALS
    // =========================================================

    function getWeatherVisuals(weather) {

        if (weather === "monsoon") {

            return {

                atmosphere:
                    "Active Indian monsoon conditions with sustained rainfall, humid air, fine rain mist, wet surfaces, puddles, water runoff, and atmospheric moisture.",

                lighting:
                    "Soft diffused illumination through dense monsoon clouds, realistic wet-surface reflections, subdued highlights, and physically believable light scattering.",

                colors:
                    "Deep blue-gray skies, wet charcoal, lush green vegetation, silver reflections, muted earth tones, and restrained warm accents."
            };
        }


        if (weather === "rain") {

            return {

                atmosphere:
                    "Realistic rainfall with wet surfaces, water droplets, subtle rain mist, puddles, reflections, and believable atmospheric moisture.",

                lighting:
                    "Diffused illumination through rain clouds with soft reflections across wet surfaces and realistic atmospheric scattering.",

                colors:
                    "Blue-gray, wet charcoal, silver reflections, muted greens, and controlled warm highlights."
            };
        }


        if (weather === "storm") {

            return {

                atmosphere:
                    "Dramatic storm conditions with heavy clouds, wind-driven rain, atmospheric turbulence, wet surfaces, and distant lightning where appropriate.",

                lighting:
                    "Diffused storm illumination with occasional lightning highlights, realistic reflections, and strong but physically believable contrast.",

                colors:
                    "Deep blue-gray, charcoal, silver, muted greens, and restrained warm practical lighting."
            };
        }


        if (weather === "fog") {

            return {

                atmosphere:
                    "Atmospheric fog and mist creating layered depth, softened distant forms, moisture in the air, and reduced visibility.",

                lighting:
                    "Soft diffused illumination with visible light scattering through the fog and subtle atmospheric glow.",

                colors:
                    "Muted blue-gray, silver, soft white, charcoal, and restrained natural tones."
            };
        }


        if (weather === "snow") {

            return {

                atmosphere:
                    "Cold winter environment with falling snow, frozen moisture, snow accumulation, and clear atmospheric depth.",

                lighting:
                    "Soft diffused winter illumination with cool reflections and realistic snow highlights.",

                colors:
                    "Cool white, pale blue, silver, soft gray, and restrained warm accents."
            };
        }


        if (weather === "summer") {

            return {

                atmosphere:
                    "Warm clear-weather atmosphere with visible sunlight, subtle atmospheric shimmer, realistic environmental activity, and strong visibility.",

                lighting:
                    "Bright natural sunlight with defined highlights, realistic shadows, and physically believable illumination.",

                colors:
                    "Warm natural tones, clear blue, green, earth tones, and balanced cinematic contrast."
            };
        }


        return {

            atmosphere: "",

            lighting: "",

            colors: ""
        };
    }


    // =========================================================
    // LOCATION DETAILS
    // =========================================================

    function getLocationDetails(context) {

        if (context.location === "Dubai, UAE") {

            return `
Location-specific details:
Modern Dubai architecture, premium roads, sophisticated urban planning, luxury surroundings, clean infrastructure, distinctive skyline forms, and subtle desert-edge atmosphere where appropriate.`;
        }


        if (context.location === "Tokyo, Japan") {

            return `
Location-specific details:
Dense Japanese urban planning, layered streets, compact architecture, precise infrastructure, transit-oriented spaces, detailed signage, and authentic Tokyo-scale density.`;
        }


        if (context.location === "Mumbai, India") {

            return `
Location-specific details:
Dense Mumbai urban character, sophisticated high-rise development, realistic Indian transportation, tropical vegetation, layered streets, and believable metropolitan density.`;
        }


        if (context.location === "Delhi, India") {

            return `
Location-specific details:
Modern Delhi urban infrastructure, broad transportation corridors, contemporary architecture, realistic Indian streets, greenery, and layered metropolitan development.`;
        }


        if (context.india) {

            return `
Location-specific details:
Believable Indian environmental details appropriate to the requested setting, including architecture, infrastructure, transportation, vegetation, businesses, people, and everyday activity. Avoid stereotypical decoration or unnecessary cultural objects.`;
        }


        return "";
    }


    // =========================================================
    // STYLE DIRECTION
    // =========================================================

    function getStyleDirection(style, context) {

        let direction = "";


        if (style === "cinematic") {

            direction =
                "Premium cinematic visual language, film-quality production design, strong visual hierarchy, sophisticated color grading, realistic lighting, atmospheric depth, immersive environmental storytelling, and professional composition.";
        }

        else if (style === "creative") {

            direction =
                "Distinctive creative visual interpretation, original composition, imaginative but coherent details, strong artistic identity, expressive atmosphere, and memorable storytelling.";
        }

        else if (style === "professional") {

            direction =
                "Clean professional visual direction, precise composition, controlled lighting, realistic details, polished presentation, commercial-quality execution, and consistent visual language.";
        }

        else {

            direction =
                "Balanced visual direction with clear subject focus, natural composition, relevant details, realistic lighting, and controlled atmosphere.";
        }


        if (context.anime) {

            direction +=
                " Anime-inspired visual treatment with expressive character design, clean stylization, controlled line quality, and coherent animated-world aesthetics.";
        }


        if (context.photorealistic) {

            direction +=
                " Photorealistic rendering with physically accurate materials, natural skin or surface detail, realistic optics, and believable lighting.";
        }


        if (context.watercolor) {

            direction +=
                " Refined watercolor aesthetic with controlled pigment variation, paper texture, soft transitions, and artistic brushwork.";
        }


        if (context.oil) {

            direction +=
                " Rich oil-paint aesthetic with visible brush texture, layered pigments, dimensional color, and painterly depth.";
        }


        if (context.vintage) {

            direction +=
                " Tasteful vintage visual character with period-appropriate materials, restrained grain, and historically coherent design.";
        }


        return direction;
    }


    // =========================================================
    // IMAGE ENGINE 4.0
    // =========================================================

    function buildImagePrompt(idea, style) {

        const context =
            detectContext(idea);

        const time =
            getTimeVisuals(context.time);

        const weather =
            getWeatherVisuals(context.weather);

        const locationDetails =
            getLocationDetails(context);


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

        if (context.scene === "cyberpunk") {

            subject =
                `A distinctive cyberpunk scene based directly on "${idea}", with believable advanced technology, strong visual identity, and a clearly defined focal subject.`;

            environment =
                `A dense futuristic environment${context.location ? ` in ${context.location}` : ""}, with layered architecture, transportation, storefronts, digital infrastructure, atmospheric depth, and realistic spatial relationships.`;

            technology =
                "Advanced digital interfaces, intelligent transportation, autonomous systems, holographic displays, communication technology, and believable futuristic infrastructure.";

            if (context.weather === "rain" || context.weather === "monsoon") {

                technology +=
                    " Wet reflective surfaces and illuminated rain interacting naturally with the technology.";
            }

            visualStory =
                "Show the environment functioning as a believable society, with people, transportation, businesses, architecture, and technology interacting naturally.";

            people =
                "Believable pedestrians, commuters, workers, vendors, and other human activity appropriate to the location, with natural movement and realistic proportions.";

            composition =
                "Strong foreground, midground, and background separation, controlled visual density, clear focal hierarchy, leading lines, and immersive environmental depth.";

            camera =
                "Wide cinematic camera using approximately 28mm lens characteristics, realistic perspective, controlled distortion, and strong environmental storytelling.";

            materials =
                "Glass, brushed metal, concrete, illuminated panels, realistic vehicle materials, digital surfaces, cables, and subtle physical imperfections.";

            negative =
                "Avoid random neon, excessive holograms, generic sci-fi objects, impossible architecture, distorted anatomy, inconsistent perspective, and unrelated futuristic elements.";
        }


        // =====================================================
        // FUTURISTIC VILLAGE
        // =====================================================

        else if (
            context.futuristic &&
            context.scene === "village"
        ) {

            subject =
                `A believable futuristic village in ${context.location || "India"},${context.year ? ` set in ${context.year}` : ""} combining advanced technology with the original rural identity.`;

            environment =
                `A future countryside environment with homes, farmland, local roads, vegetation, water systems, community spaces, renewable infrastructure, and rural architecture adapted to advanced technology.`;

            technology =
                "Practical autonomous agricultural equipment, smart irrigation, renewable energy, agricultural drones, intelligent transportation, solar infrastructure, advanced communication systems, and useful rural technology.";

            visualStory =
                "Show technology improving everyday rural life without replacing the village's natural character. Farmers, families, workers, animals, homes, farms, roads, and technology should interact naturally.";

            people =
                "Local residents, farmers, workers, families, and children engaged in believable everyday activities with natural body language and contextually appropriate clothing.";

            composition =
                "Layered rural composition with strong foreground vegetation, clear subject placement, expansive midground activity, distant landscape depth, realistic scale, and natural leading lines.";

            camera =
                "Wide cinematic environmental shot using 28mm to 35mm lens characteristics, realistic perspective, natural depth, and immersive environmental storytelling.";

            materials =
                "Natural soil, vegetation, wood, stone, concrete, metal, solar panels, agricultural equipment, realistic roads, water surfaces, and subtle technological materials.";

            negative =
                "Avoid turning the village into a futuristic megacity, excessive skyscrapers, random neon, impossible technology, cultural stereotypes, and unrelated urban elements.";
        }


        // =====================================================
        // FUTURISTIC CITY
        // =====================================================

        else if (
            context.futuristic &&
            context.scene === "city"
        ) {

            subject =
                `A believable futuristic city${context.location ? ` in ${context.location}` : ""}${context.year ? ` in ${context.year}` : ""}, with advanced architecture, intelligent infrastructure, sophisticated transportation, autonomous mobility, and people naturally living within the environment.`;

            environment =
                `A developed metropolitan environment with interconnected buildings, realistic streets, transportation corridors, public spaces, commercial areas, greenery, distant structures, atmospheric depth, and believable urban density.`;

            technology =
                "Autonomous electric vehicles, intelligent transportation systems, smart roads, advanced public transit, renewable energy systems, advanced communication networks, and practical digital infrastructure.";

            visualStory =
                "Show the city functioning as a real place, with people naturally interacting with transportation, buildings, businesses, public spaces, technology, and infrastructure.";

            people =
                context.india
                    ? "Diverse Indian pedestrians, commuters, workers, families, businesses, and public transportation users with natural everyday activity."
                    : "Diverse pedestrians, commuters, workers, businesses, and public transportation users appropriate to the location.";

            composition =
                "Strong foreground, midground, and background separation with clear visual hierarchy, leading lines, realistic architectural scale, layered depth, balanced framing, and believable transportation flow.";

            camera =
                "Wide cinematic establishing shot using approximately 28mm lens characteristics, realistic perspective, controlled vertical architecture, and immersive environmental storytelling.";

            materials =
                "Reflective architectural glass, brushed steel, polished concrete, advanced road surfaces, realistic vehicles, detailed building facades, vegetation, and subtle surface imperfections.";

            negative =
                "Avoid generic futuristic cities, random architecture, impossible structures, excessive neon, cultural stereotypes, unrealistic vehicles, distorted people, and unrelated details.";
        }


        // =====================================================
        // AUTOMOTIVE
        // =====================================================

        else if (
            context.scene === "automotive"
        ) {

            subject =
                `A premium futuristic sports car based directly on "${idea}", with precise aerodynamic proportions, distinctive bodywork, functional performance components, advanced lighting, sophisticated materials, and a coherent design identity.`;

            environment =
                `A believable automotive environment${context.location ? ` in ${context.location}` : ""}, designed to complement the vehicle without distracting from it.`;

            technology =
                "Advanced electric or hybrid powertrain cues, aerodynamic surfaces, intelligent lighting, sensor systems, advanced wheels, realistic performance components, and functional futuristic design details.";

            visualStory =
                "Present the vehicle as a real engineered object interacting naturally with the road, environment, reflections, shadows, and surrounding architecture.";

            people =
                "Include people only if naturally relevant to the concept, keeping them secondary to the vehicle.";

            composition =
                "Strong vehicle hierarchy, low dynamic angle, controlled negative space, clear silhouette, realistic proportions, leading road lines, and balanced automotive framing.";

            camera =
                "Professional automotive photography using approximately 50mm to 85mm lens characteristics, controlled perspective, realistic depth of field, sharp vehicle detail, and cinematic framing.";

            materials =
                "Carbon fiber, polished metal, automotive glass, premium rubber, aerodynamic composites, precision-machined components, leather, and subtle surface imperfections.";

            negative =
                "Avoid incorrect vehicle proportions, impossible wheels, floating cars, distorted body panels, excessive reflections, fake branding, unrealistic roads, and unnecessary objects.";
        }


        // =====================================================
        // PORTRAIT
        // =====================================================

        else if (
            context.scene === "portrait"
        ) {

            subject =
                `A clearly defined human character based directly on "${idea}", with realistic proportions, expressive features, natural skin or stylized character detail, detailed hair, authentic clothing, and a distinctive visual identity.`;

            environment =
                `A visually appropriate environment${context.location ? ` in ${context.location}` : ""} that supports the subject without distracting from it.`;

            technology =
                "Include accessories, objects, or technology only when they naturally support the original idea.";

            visualStory =
                "Create believable interaction between the character and environment through posture, facial expression, body language, clothing, and contextual details.";

            people =
                "Natural expression, realistic anatomy, believable posture, authentic clothing folds, and consistent human proportions.";

            composition =
                "Strong subject hierarchy, balanced negative space, natural framing, realistic proportions, and clear separation from the background.";

            camera =
                "Professional portrait photography using 50mm or 85mm lens characteristics, realistic perspective, controlled depth of field, and natural subject separation.";

            materials =
                "Detailed skin or character texture, individual hair strands, realistic fabric, leather, metal accessories, and natural surface imperfections.";

            negative =
                "Avoid distorted anatomy, plastic-looking faces, extra fingers, duplicated people, unnatural eyes, excessive smoothing, and distracting backgrounds.";
        }


        // =====================================================
        // LANDSCAPE
        // =====================================================

        else if (
            context.scene === "landscape"
        ) {

            subject =
                `A dramatic natural landscape based directly on "${idea}", with clearly defined terrain, vegetation, geological formations, water, environmental features, and a strong visual focal point.`;

            environment =
                `An expansive natural environment${context.location ? ` in ${context.location}` : ""}, with layered foreground, midground, and background elements, realistic terrain variation, and atmospheric perspective.`;

            technology =
                "Avoid unnecessary technology unless explicitly supported by the original concept.";

            visualStory =
                "Create natural relationships between terrain, vegetation, water, weather, wildlife, and any human presence.";

            people =
                "Include people or wildlife only when relevant to the original concept.";

            composition =
                "Wide cinematic landscape composition with strong leading lines, balanced foreground, dramatic horizon placement, layered depth, and clear visual hierarchy.";

            camera =
                "24mm wide-angle cinematic landscape photography with realistic perspective, deep focus, balanced framing, and immersive scale.";

            materials =
                "Detailed rocks, soil, vegetation, water surfaces, tree bark, clouds, terrain textures, and realistic natural materials.";

            negative =
                "Avoid artificial landscapes, impossible terrain, repeated vegetation, unrealistic water, flat composition, excessive saturation, and unrelated objects.";
        }


        // =====================================================
        // ARCHITECTURE
        // =====================================================

        else if (
            context.scene === "architecture"
        ) {

            subject =
                `A visually striking architectural subject based directly on "${idea}", with clearly defined geometry, structure, facade details, entrances, windows, materials, and realistic scale.`;

            environment =
                `A believable architectural environment${context.location ? ` in ${context.location}` : ""}, with surrounding structures, streets, landscaping, pedestrians, infrastructure, and realistic spatial relationships.`;

            technology =
                "Use smart infrastructure, transportation systems, digital displays, advanced materials, or architectural technology only when relevant.";

            visualStory =
                "Show the architecture functioning within its environment through realistic pedestrian movement, public spaces, transportation, and environmental interaction.";

            people =
                "Natural pedestrians, workers, vehicles, and public-space interactions that make the architecture feel inhabited.";

            composition =
                "Strong geometric composition with architectural hierarchy, leading lines, controlled perspective, balanced framing, and realistic scale.";

            camera =
                "Cinematic architectural photography with wide-angle lens characteristics, controlled vertical lines, realistic perspective, and strong depth.";

            materials =
                "Glass, steel, concrete, stone, wood, brushed metal, realistic windows, structural joints, and detailed facade textures.";

            negative =
                "Avoid impossible architecture, distorted perspective, floating buildings, repetitive windows, unrealistic scale, and excessive clutter.";
        }


        // =====================================================
        // SPACE
        // =====================================================

        else if (
            context.scene === "space"
        ) {

            subject =
                `A highly detailed space scene based directly on "${idea}", with believable engineering, advanced equipment, clearly defined structures, and a strong visual focal point.`;

            environment =
                "A vast cosmic environment containing only the celestial and engineered elements relevant to the original concept.";

            technology =
                "Believable spacecraft systems, robotic equipment, communication arrays, energy systems, navigation interfaces, and advanced engineering appropriate to the concept.";

            visualStory =
                "Create clear scale relationships between spacecraft, planets, structures, astronauts, and surrounding cosmic elements.";

            people =
                "Astronauts or human subjects only when relevant, with realistic proportions and equipment.";

            composition =
                "Epic cinematic composition with dramatic perspective, strong scale relationships, layered cosmic depth, and clear focal hierarchy.";

            camera =
                "Epic wide-angle cinematic camera with realistic scale, deep focus, controlled framing, and immersive perspective.";

            materials =
                "Advanced metal alloys, reflective glass, carbon composites, illuminated panels, mechanical components, and realistic spacecraft surfaces.";

            negative =
                "Avoid impossible spacecraft, random planets, unrealistic scale, distorted astronauts, excessive glowing effects, and incoherent structures.";
        }


        // =====================================================
        // FANTASY
        // =====================================================

        else if (
            context.scene === "fantasy"
        ) {

            subject =
                `A richly designed fantasy scene based directly on "${idea}", with distinctive characters, detailed clothing or armor, expressive features, creatures, and believable interaction with the environment.`;

            environment =
                "A coherent fantasy environment with architecture, landscapes, atmospheric depth, natural elements, and purposeful environmental storytelling.";

            technology =
                "Use magical objects, artifacts, enchanted structures, mystical symbols, or magical mechanisms only when appropriate.";

            visualStory =
                "Create natural interactions between characters, magical elements, architecture, terrain, creatures, and the surrounding environment.";

            people =
                "Believable fantasy characters with natural poses, realistic anatomy, expressive faces, detailed clothing, and contextual interactions.";

            composition =
                "Epic cinematic composition with strong subject placement, dramatic perspective, layered environmental depth, and clear visual hierarchy.";

            camera =
                "Wide cinematic fantasy composition with dramatic perspective, realistic scale, controlled depth, and immersive storytelling.";

            materials =
                "Stone, ancient wood, metal, fabric, leather, crystals, vegetation, and detailed environmental textures.";

            negative =
                "Avoid random magical objects, distorted anatomy, excessive glowing effects, flat environments, and unrelated elements.";
        }


        // =====================================================
        // HORROR
        // =====================================================

        else if (
            context.scene === "horror"
        ) {

            subject =
                `A clearly defined horror scene based directly on "${idea}", with unsettling visual characteristics, realistic textures, and a strong atmospheric presence.`;

            environment =
                "A believable unsettling environment with decay, isolation, damaged structures, overgrown vegetation, and realistic signs of neglect where appropriate.";

            technology =
                "Use broken lights, old monitors, abandoned equipment, or environmental technology only when relevant.";

            visualStory =
                "Create subtle environmental clues that suggest a believable history without overcrowding the scene.";

            people =
                "Human presence only when relevant, with realistic proportions, posture, and environmental interaction.";

            composition =
                "Controlled cinematic framing with deliberate negative space, strong foreground elements, deep shadows, and clear visual hierarchy.";

            camera =
                "Cinematic framing with slightly wide lens characteristics, controlled perspective, deep shadows, and deliberate negative space.";

            materials =
                "Aged concrete, cracked walls, rusted metal, dirty glass, decaying wood, dust, moisture, and damaged fabrics.";

            negative =
                "Avoid excessive gore, cartoonish horror, distorted anatomy, random objects, flat lighting, unrealistic environments, and cheap-looking effects.";
        }


        // =====================================================
        // VILLAGE
        // =====================================================

        else if (
            context.scene === "village"
        ) {

            subject =
                `A believable village environment based directly on "${idea}", preserving the rural identity, natural surroundings, architecture, people, and everyday life of the setting.`;

            environment =
                `A realistic rural environment${context.location ? ` in ${context.location}` : ""}, with homes, roads, farmland, vegetation, water sources, community spaces, distant landscape, and natural environmental depth.`;

            technology =
                "Introduce practical technology only when supported by the original idea, such as modern transportation, communication, agricultural tools, irrigation, or renewable energy.";

            visualStory =
                "Show authentic everyday rural activity through homes, farms, roads, animals, people, businesses, and natural surroundings.";

            people =
                "Local residents, farmers, workers, families, and children with natural body language and contextually appropriate clothing.";

            composition =
                "Layered rural composition with strong foreground detail, clear midground activity, distant landscape depth, natural leading lines, and realistic scale.";

            camera =
                "Wide environmental photography using approximately 28mm to 35mm lens characteristics with realistic perspective and immersive depth.";

            materials =
                "Soil, vegetation, brick, stone, concrete, wood, metal, water, fabric, agricultural materials, and subtle surface imperfections.";

            negative =
                "Avoid turning the village into a city, excessive skyscrapers, random neon, unrealistic architecture, cultural stereotypes, and unrelated urban elements.";
        }


        // =====================================================
        // CITY
        // =====================================================

        else if (
            context.scene === "city"
        ) {

            subject =
                `A visually compelling city environment based directly on "${idea}", with believable architecture, transportation, people, businesses, public spaces, and urban activity.`;

            environment =
                `A realistic urban environment${context.location ? ` in ${context.location}` : ""}, with streets, buildings, transportation, greenery, commercial areas, distant structures, and believable density.`;

            technology =
                "Use transportation, digital infrastructure, communication systems, smart buildings, or advanced technology only when supported by the original concept.";

            visualStory =
                "Show the city functioning naturally through people, vehicles, businesses, public spaces, buildings, and infrastructure.";

            people =
                "Natural pedestrians, commuters, workers, families, and businesses appropriate to the location.";

            composition =
                "Strong foreground, midground, and background layering with leading lines, realistic scale, balanced framing, and clear visual hierarchy.";

            camera =
                "Wide cinematic urban photography using approximately 28mm lens characteristics with realistic perspective and strong environmental depth.";

            materials =
                "Concrete, glass, steel, asphalt, stone, vegetation, vehicles, signage, and realistic surface textures.";

            negative =
                "Avoid generic cityscapes, impossible buildings, random futuristic elements, excessive clutter, distorted people, and unrealistic transportation.";
        }


        // =====================================================
        // GENERAL
        // =====================================================

        else {

            subject =
                `A clearly defined main subject based directly on "${idea}", with relevant characteristics, objects, and visual elements that naturally support the original concept.`;

            environment =
                `A believable environment${context.location ? ` in ${context.location}` : ""} designed specifically around the original idea, with appropriate architecture, background elements, atmosphere, and environmental features.`;

            technology =
                "Introduce technology, objects, transportation, interfaces, or infrastructure only when they naturally fit the original concept.";

            visualStory =
                "Create natural relationships between the subject, environment, objects, people, and surrounding elements so the scene feels purposeful and believable.";

            people =
                "Include people only when relevant, with realistic anatomy, natural body language, believable clothing, and appropriate environmental interaction.";

            composition =
                "Strong foreground, midground, and background separation with clear subject hierarchy, leading lines, balanced framing, realistic scale, and intentional placement.";

            camera =
                "Professional cinematic camera framing with appropriate lens characteristics, realistic perspective, controlled depth of field, and strong visual balance.";

            materials =
                "Realistic surfaces, materials, textures, environmental details, and subtle imperfections appropriate to the scene.";

            negative =
                "Avoid generic visuals, unnecessary objects, inconsistent perspective, distorted anatomy, unrealistic materials, flat lighting, excessive clutter, and unrelated elements.";
        }


        // =====================================================
        // DYNAMIC ATMOSPHERE
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
        // ERA
        // =====================================================

        let eraBlock = "";

        if (context.year) {

            eraBlock =
                `ERA:
The visual world should plausibly belong to ${context.year}. Architecture, technology, transportation, clothing, infrastructure, materials, and everyday life should remain consistent with this period.`;
        }


        // =====================================================
        // FINAL PROMPT
        // =====================================================

        return `Create a cinematic, highly detailed AI image based on this original idea:

"${idea}"

SMART VISUAL INTELLIGENCE 4.0

CORE INTERPRETATION:
The scene must preserve the original subject, location, era, time, weather, genre, and visual intent. Expand the concept only with details that naturally support those elements.

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

${locationDetails}

${eraBlock}

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
${getStyleDirection(style, context)}

COHERENCE:
Every element must belong to the same believable world. Maintain consistent scale, perspective, lighting, materials, architecture, people, technology, weather, and atmosphere.

CONTEXT PROTECTION:
Do not replace or contradict any explicitly requested location, time, weather, era, subject, or genre. Do not add major visual concepts that are unrelated to the original idea.

QUALITY:
Ultra-detailed, coherent, realistic proportions, physically believable lighting, detailed textures, strong atmospheric depth, sophisticated composition, realistic scale, professional production design, immersive storytelling, and optimized for modern AI image generation.

NEGATIVE:
${negative}

OUTPUT:
Return one complete, polished, production-ready AI image generation prompt.`;
    }


    // =========================================================
    // VIDEO ENGINE
    // =========================================================

    function buildVideoPrompt(idea, style) {

        return `Create a ${style}, highly detailed AI video based on this original idea:

"${idea}"

SMART VIDEO INTELLIGENCE 4.0

SCENE:
Understand the original subject, location, era, time, weather, atmosphere, and visual context.

SUBJECT & ACTION:
Clearly define the main subject and its meaningful action.

MOTION:
Describe realistic movement of people, vehicles, objects, clothing, hair, weather, particles, and environmental elements only when relevant.

CAMERA:
Specify cinematic framing, lens characteristics, tracking, pans, tilts, transitions, and purposeful camera movement.

VISUAL STORY:
Create a clear visual progression with purposeful cinematic development.

LIGHTING:
Use realistic directional lighting, shadows, highlights, reflections, practical lights, and atmospheric illumination appropriate to the scene.

PACING:
Maintain smooth cinematic pacing and intentional visual rhythm.

STYLE:
${getStyleDirection(style, detectContext(idea))}

QUALITY:
Smooth motion, consistent subjects, realistic physics, coherent environments, cinematic lighting, high detail, temporal consistency, and professional production quality.

NEGATIVE:
Avoid flickering, distorted faces, inconsistent subjects, unnatural motion, broken physics, random camera movement, visual artifacts, and unrelated objects.

OUTPUT:
Return one complete, ready-to-use AI video generation prompt.`;
    }


    // =========================================================
    // TEXT ENGINE
    // =========================================================

    function buildTextPrompt(idea, style) {

        return `Create a ${style}, high-quality AI text response based on this original idea:

"${idea}"

SMART TEXT INTELLIGENCE 4.0

OBJECTIVE:
Identify the exact purpose and desired result.

AUDIENCE:
Adapt vocabulary, complexity, tone, and explanation to the appropriate audience.

CONTEXT:
Use relevant background information required to understand the request.

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
    // CODE ENGINE
    // =========================================================

    function buildCodePrompt(idea) {

        return `Create a professional AI coding prompt based on this original idea:

"${idea}"

SMART CODE INTELLIGENCE 4.0

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
    // STUDY ENGINE
    // =========================================================

    function buildStudyPrompt(idea) {

        return `Create a professional AI study prompt based on this original idea:

"${idea}"

SMART STUDY INTELLIGENCE 4.0

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

            return buildImagePrompt(
                idea,
                style
            );
        }


        if (aiType === "video") {

            return buildVideoPrompt(
                idea,
                style
            );
        }


        if (aiType === "text") {

            return buildTextPrompt(
                idea,
                style
            );
        }


        if (aiType === "code") {

            return buildCodePrompt(
                idea
            );
        }


        if (aiType === "study") {

            return buildStudyPrompt(
                idea
            );
        }


        return "";
    }


    // =========================================================
    // QUALITY ANALYSIS 4.0
    // =========================================================

    function calculateQualityScore(
        prompt,
        idea,
        aiType
    ) {

        const context =
            detectContext(idea);


        let clarity = 58;
        let detail = 52;
        let structure = 60;
        let aiReady = 58;


        // -----------------------------------------------------
        // Original idea specificity
        // -----------------------------------------------------

        const words =
            cleanText(idea)
                .split(/\s+/)
                .filter(function (word) {

                    return word.length > 2;

                });


        const uniqueWords =
            [...new Set(words)];


        if (uniqueWords.length >= 4) {

            clarity += 5;
            detail += 6;
        }


        if (uniqueWords.length >= 7) {

            clarity += 4;
            detail += 5;
        }


        // -----------------------------------------------------
        // Context coverage
        // -----------------------------------------------------

        if (context.location) {

            detail += 5;
            aiReady += 4;
        }


        if (context.year) {

            detail += 5;
            aiReady += 5;
        }


        if (context.time) {

            detail += 4;
            aiReady += 3;
        }


        if (context.weather) {

            detail += 4;
            aiReady += 3;
        }


        if (
            context.futuristic ||
            context.historical
        ) {

            clarity += 3;
            detail += 4;
        }


        // -----------------------------------------------------
        // Prompt structure
        // -----------------------------------------------------

        const structureSections = [

            "CORE INTERPRETATION:",
            "SUBJECT:",
            "SETTING & ENVIRONMENT:",
            "TECHNOLOGY & OBJECTS:",
            "VISUAL STORY:",
            "COMPOSITION:",
            "CAMERA:",
            "LIGHTING:",
            "QUALITY:",
            "NEGATIVE:",
            "OUTPUT:"
        ];


        let presentSections = 0;


        structureSections.forEach(
            function (section) {

                if (
                    prompt.includes(section)
                ) {

                    presentSections++;
                }
            }
        );


        structure +=
            Math.min(
                presentSections * 2,
                20
            );


        // -----------------------------------------------------
        // AI type intelligence
        // -----------------------------------------------------

        if (aiType === "image") {

            if (
                prompt.includes(
                    "COLOR PALETTE:"
                )
            ) {
                detail += 3;
            }

            if (
                prompt.includes(
                    "MATERIALS & TEXTURES:"
                )
            ) {
                detail += 3;
            }

            if (
                prompt.includes(
                    "CONTEXT PROTECTION:"
                )
            ) {
                aiReady += 4;
            }
        }


        if (aiType === "video") {

            if (
                prompt.includes("MOTION:")
            ) {
                detail += 4;
            }

            if (
                prompt.includes("PACING:")
            ) {
                structure += 4;
            }
        }


        if (aiType === "code") {

            if (
                prompt.includes(
                    "ERROR HANDLING:"
                )
            ) {
                detail += 4;
            }

            if (
                prompt.includes("TESTING:")
            ) {
                aiReady += 4;
            }
        }


        if (aiType === "study") {

            if (
                prompt.includes(
                    "EXAM FOCUS:"
                )
            ) {
                detail += 4;
            }

            if (
                prompt.includes(
                    "PRACTICE:"
                )
            ) {
                aiReady += 4;
            }
        }


        // -----------------------------------------------------
        // Repetition control
        // -----------------------------------------------------

        const paragraphCount =
            prompt
                .split("\n")
                .filter(function (line) {

                    return line.trim().length > 20;

                });


        const averageLength =
            prompt.length /
            Math.max(
                paragraphCount.length,
                1
            );


        if (averageLength > 650) {

            clarity -= 4;
        }


        // -----------------------------------------------------
        // Final limits
        // -----------------------------------------------------

        clarity =
            Math.max(
                0,
                Math.min(100, Math.round(clarity))
            );


        detail =
            Math.max(
                0,
                Math.min(100, Math.round(detail))
            );


        structure =
            Math.max(
                0,
                Math.min(100, Math.round(structure))
            );


        aiReady =
            Math.max(
                0,
                Math.min(100, Math.round(aiReady))
            );


        const overall =
            Math.round(
                (
                    clarity * 0.25 +
                    detail * 0.30 +
                    structure * 0.20 +
                    aiReady * 0.25
                )
            );


        return {

            overall: Math.min(
                100,
                overall
            ),

            clarity,

            detail,

            structure,

            aiReady
        };
    }


    // =========================================================
    // QUALITY BOX
    // =========================================================

    function createQualityBox(
        quality
    ) {

        return `
            <div class="quality-box">

                <div class="quality-title">

                    <div>

                        <span>✨ Prompt Quality</span>

                        <strong>
                            ${quality.overall}/100
                        </strong>

                    </div>

                </div>

                <div class="quality-bars">

                    <div class="quality-item">

                        <div>
                            <span>🎯 Clarity</span>
                            <b>${quality.clarity}%</b>
                        </div>

                        <div class="quality-bar">
                            <span
                                style="width:${quality.clarity}%"
                            ></span>
                        </div>

                    </div>


                    <div class="quality-item">

                        <div>
                            <span>🧠 Detail</span>
                            <b>${quality.detail}%</b>
                        </div>

                        <div class="quality-bar">
                            <span
                                style="width:${quality.detail}%"
                            ></span>
                        </div>

                    </div>


                    <div class="quality-item">

                        <div>
                            <span>🏗️ Structure</span>
                            <b>${quality.structure}%</b>
                        </div>

                        <div class="quality-bar">
                            <span
                                style="width:${quality.structure}%"
                            ></span>
                        </div>

                    </div>


                    <div class="quality-item">

                        <div>
                            <span>🤖 AI Readiness</span>
                            <b>${quality.aiReady}%</b>
                        </div>

                        <div class="quality-bar">
                            <span
                                style="width:${quality.aiReady}%"
                            ></span>
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
    // IMPROVE ENGINE 4.0
    // =========================================================

    function optimizePrompt(
        prompt,
        idea,
        aiType
    ) {

        let optimized =
            prompt;


        // Remove excessive blank lines
        optimized =
            optimized.replace(
                /\n{3,}/g,
                "\n\n"
            );


        // Remove repeated spaces
        optimized =
            optimized.replace(
                /[ \t]{2,}/g,
                " "
            );


        // Remove old optimization appendages
        optimized =
            optimized.replace(
                /FINAL OPTIMIZATION PASS:[\s\S]*$/i,
                ""
            )
            .trim();


        // Add a concise final instruction
        optimized += `

FINAL INSTRUCTION:
Preserve the original idea exactly. Prioritize relevant, concrete visual information over generic filler. Maintain consistency across subject, environment, context, lighting, materials, perspective, and atmosphere.`;


        return optimized;
    }


    function improvePrompt(
        idea,
        aiType,
        style
    ) {

        const regenerated =
            generatePrompt(
                idea,
                aiType,
                style
            );


        return optimizePrompt(
            regenerated,
            idea,
            aiType
        );
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

            date:
                new Date().toLocaleString(),

            favorite: false
        };


        history.unshift(
            newPrompt
        );


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
                    document.getElementById(
                        "idea"
                    );

                const aiTypeElement =
                    document.getElementById(
                        "aiType"
                    );

                const styleElement =
                    document.getElementById(
                        "style"
                    );


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


                const generatedPrompt =
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
                        generatedPrompt;
                }


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


                    const quality =
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
                        createQualityBox(
                            quality
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


        improveBtn.onclick =
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


                const newQuality =
                    calculateQualityScore(
                        improved,
                        idea,
                        aiType
                    );


                qualityContainer.innerHTML =
                    createQualityBox(
                        newQuality
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
            };
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
