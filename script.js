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
    // HELPERS
    // =========================

    function hasAny(text, words) {
        return words.some(word => text.includes(word));
    }


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

        const ideaLower = idea.toLowerCase();

        let expandedIdea = "";
        let subject = "";
        let environment = "";
        let technology = "";
        let atmosphere = "";
        let camera = "";
        let lighting = "";
        let colors = "";
        let materials = "";
        let extraDetails = "";


        // =====================================================
        // IMAGE INTELLIGENCE
        // =====================================================

        if (aiType === "image") {

            // -------------------------------------------------
            // CYBERPUNK
            // -------------------------------------------------

            if (hasAny(ideaLower, [
                "cyberpunk",
                "cyber",
                "neon city"
            ])) {

                subject =
                "A vast futuristic megacity in 2050, dominated by towering glass-and-metal skyscrapers, illuminated holographic billboards, elevated transportation systems, autonomous flying vehicles, and dense pedestrian districts.";

                environment =
                "A rain-soaked downtown at night with narrow streets, reflective wet asphalt, steam rising from underground vents, elevated walkways, distant skyscrapers disappearing into atmospheric fog, glowing storefronts, and layered urban infrastructure.";

                technology =
                "Autonomous flying taxis, delivery drones, robotic street systems, holographic advertisements, transparent digital interfaces, intelligent traffic systems, illuminated transit rails, and futuristic vehicles.";

                atmosphere =
                "Heavy cinematic rain, volumetric fog, drifting steam, rain particles, glowing reflections, humid night air, subtle atmospheric haze, and a dense futuristic urban mood.";

                camera =
                "Low-angle cinematic establishing shot from street level, wide 28mm lens, deep perspective, strong foreground reflections, towering vertical composition, realistic depth of field, and carefully balanced framing.";

                lighting =
                "Intense cyan and magenta neon lighting mixed with warm window lights, glowing advertisements, wet-surface reflections, soft rim lighting, deep shadows, and volumetric light passing through fog.";

                colors =
                "Electric cyan, neon magenta, violet, deep blue, charcoal black, and subtle warm amber highlights.";

                materials =
                "Rain-covered asphalt, reflective glass, brushed metal, dark concrete, illuminated plastic, holographic surfaces, wet cables, futuristic vehicle panels, and realistic architectural textures.";

                extraDetails =
                "Include pedestrians wearing sleek futuristic clothing, small robotic devices, glowing signs in multiple languages, cables between buildings, ventilation systems, rooftop structures, distant aircraft, and subtle signs of everyday life.";

            }


            // -------------------------------------------------
            // PORTRAIT
            // -------------------------------------------------

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
                "A clearly defined human subject with realistic facial proportions, expressive eyes, natural skin texture, detailed hairstyle, believable clothing, and a subtle authentic expression.";

                environment =
                "A carefully controlled environment that complements the subject, with a softly detailed background, natural depth separation, subtle environmental elements, and visual context appropriate to the original idea.";

                technology =
                "Use modern photographic rendering principles with realistic lens behavior, accurate skin rendering, natural focus falloff, and professional portrait composition.";

                atmosphere =
                "A calm cinematic atmosphere with subtle environmental depth, natural air, gentle background blur, and a mood that matches the original concept.";

                camera =
                "Professional portrait photography, 85mm lens, medium close-up framing, eye-level camera angle, shallow depth of field, precise focus on the eyes, and soft background separation.";

                lighting =
                "Soft directional key light, subtle fill light, gentle rim lighting, realistic facial shadows, controlled highlights in the eyes, and natural skin illumination.";

                colors =
                "A refined color palette based on the subject's clothing and environment, with natural skin tones and cinematic contrast.";

                materials =
                "Realistic skin pores, individual hair strands, fabric fibers, subtle clothing folds, natural eye reflections, and believable surface textures.";

                extraDetails =
                "Add natural posture, subtle facial expression, realistic imperfections, detailed eyelashes, individual hair strands, clothing accessories, and believable interaction between the subject and the environment.";

            }


            // -------------------------------------------------
            // LANDSCAPE
            // -------------------------------------------------

            else if (hasAny(ideaLower, [
                "landscape",
                "mountain",
                "forest",
                "nature",
                "river",
                "waterfall",
                "lake",
                "valley",
                "beach"
            ])) {

                subject =
                "A breathtaking natural landscape with a clearly defined environmental focal point, layered terrain, distinctive geological or natural features, and strong visual depth.";

                environment =
                "An expansive environment containing foreground vegetation or rocks, a detailed middle ground, distant terrain, atmospheric mountains, natural water features where appropriate, and a believable sky.";

                technology =
                "Use realistic environmental rendering with physically believable scale, atmospheric perspective, natural terrain formation, and detailed ecological elements.";

                atmosphere =
                "Fresh atmospheric air, soft mist, drifting clouds, subtle environmental particles, natural haze, and weather conditions that enhance the landscape.";

                camera =
                "Wide cinematic landscape composition using a 24mm wide-angle perspective, strong foreground interest, layered depth, balanced horizon placement, and expansive environmental framing.";

                lighting =
                "Natural directional sunlight with realistic shadows, soft atmospheric highlights, subtle cloud shadows, volumetric sun rays, and detailed illumination across the terrain.";

                colors =
                "Natural greens, earthy browns, cool blues, atmospheric whites, and subtle golden highlights.";

                materials =
                "Detailed rocks, soil, vegetation, tree bark, water surfaces, clouds, grass, sand, and naturally varied terrain textures.";

                extraDetails =
                "Add birds in the distance, small vegetation, distant structures only when relevant, natural erosion patterns, water reflections, clouds moving across the landscape, and subtle environmental storytelling.";

            }


            // -------------------------------------------------
            // ARCHITECTURE / CITY
            // -------------------------------------------------

            else if (hasAny(ideaLower, [
                "building",
                "architecture",
                "house",
                "city",
                "skyscraper",
                "street",
                "office"
            ])) {

                subject =
                "A visually distinctive architectural structure with clearly defined geometry, scale, entrances, windows, structural elements, and a coherent design language.";

                environment =
                "A believable surrounding environment containing streets, sidewalks, neighboring structures, vegetation or urban infrastructure, pedestrians, vehicles, and realistic spatial relationships.";

                technology =
                "Use believable architectural engineering, functional infrastructure, lighting systems, transportation networks, elevators, signage, and environmental systems appropriate to the concept.";

                atmosphere =
                "A realistic environmental atmosphere with appropriate weather, air quality, shadows, reflections, distant activity, and subtle signs of human use.";

                camera =
                "Professional architectural photography using a wide-angle lens, carefully controlled perspective, strong vertical lines, balanced framing, and realistic spatial depth.";

                lighting =
                "Natural or architectural lighting with controlled highlights, realistic window illumination, structural shadows, reflections, and carefully balanced exposure.";

                colors =
                "A sophisticated architectural palette using concrete neutrals, glass blues, metallic tones, natural materials, and accent colors appropriate to the concept.";

                materials =
                "Glass, concrete, steel, stone, wood, brushed metal, polished surfaces, brick, pavement, and realistic architectural textures.";

                extraDetails =
                "Add balconies, entrances, signage, street furniture, windows with interior activity, transportation infrastructure, pedestrians, plants, drainage systems, and small structural details.";

            }


            // -------------------------------------------------
            // PRODUCT / CAR / PHONE / WATCH
            // -------------------------------------------------

            else if (hasAny(ideaLower, [
                "product",
                "phone",
                "smartphone",
                "car",
                "watch",
                "laptop",
                "headphone",
                "shoes",
                "bottle"
            ])) {

                subject =
                "The product is the unmistakable hero subject, presented with clearly defined proportions, premium materials, refined industrial design, precise edges, and carefully controlled visual details.";

                environment =
                "A premium commercial presentation environment with a clean background, subtle supporting surfaces, controlled spatial depth, and no distracting objects.";

                technology =
                "Highlight the product's functional design, modern engineering, interfaces, buttons, ports, displays, mechanical components, and technology where relevant.";

                atmosphere =
                "Clean, premium, controlled, sophisticated, and visually polished commercial atmosphere.";

                camera =
                "High-end commercial product photography using a 50mm or 85mm lens, precise framing, controlled perspective, sharp product focus, and subtle depth of field.";

                lighting =
                "Large softbox key lighting, controlled rim lighting, precise specular highlights, soft shadows, and carefully positioned reflections that reveal the product's shape.";

                colors =
                "A premium restrained color palette that complements the product while maintaining strong subject separation.";

                materials =
                "Brushed aluminum, polished glass, premium plastic, leather, rubber, metal edges, realistic reflections, micro-scratches, and fine surface details where appropriate.";

                extraDetails =
                "Add realistic buttons, seams, ports, reflections, display details, subtle branding placement, realistic shadows, and carefully controlled contact with the presentation surface.";

            }


            // -------------------------------------------------
            // SPACE / SCI-FI
            // -------------------------------------------------

            else if (hasAny(ideaLower, [
                "space",
                "galaxy",
                "planet",
                "spaceship",
                "sci-fi",
                "astronaut",
                "mars"
            ])) {

                subject =
                "A highly detailed futuristic space subject with advanced engineering, clearly defined surfaces, mechanical components, and believable scale.";

                environment =
                "A vast cosmic environment containing stars, distant planets, nebulae, orbital structures, planetary surfaces, or spacecraft surroundings appropriate to the concept.";

                technology =
                "Advanced propulsion systems, illuminated control interfaces, docking systems, robotic mechanisms, communication arrays, energy systems, and realistic spacecraft engineering.";

                atmosphere =
                "Deep cosmic darkness, subtle atmospheric glow, floating particles, distant celestial light, volumetric illumination, and immense environmental scale.";

                camera =
                "Cinematic wide-angle space composition with strong subject framing, realistic perspective, deep environmental scale, and carefully controlled depth.";

                lighting =
                "Cool celestial lighting mixed with controlled artificial spacecraft lights, rim lighting, reflective metallic highlights, and subtle volumetric illumination.";

                colors =
                "Deep black, midnight blue, violet, cool white, metallic silver, and subtle cyan highlights.";

                materials =
                "Titanium, carbon fiber, reinforced glass, metallic panels, heat shields, cables, mechanical joints, illuminated interfaces, and realistic spacecraft surfaces.";

                extraDetails =
                "Add distant stars, planetary bodies, orbital debris, small spacecraft components, illuminated windows, navigation lights, and believable engineering details.";

            }


            // -------------------------------------------------
            // FANTASY
            // -------------------------------------------------

            else if (hasAny(ideaLower, [
                "fantasy",
                "magic",
                "castle",
                "dragon",
                "wizard",
                "magical",
                "fairy"
            ])) {

                subject =
                "A distinctive fantasy subject with detailed clothing, recognizable visual characteristics, believable proportions, and carefully designed magical or mythical elements.";

                environment =
                "An immersive fantasy world containing ancient architecture, dramatic landscapes, mysterious structures, magical locations, forests, mountains, or castles appropriate to the concept.";

                technology =
                "Replace modern technology with believable fantasy mechanisms, magical artifacts, ancient mechanisms, enchanted objects, or mystical energy systems where appropriate.";

                atmosphere =
                "Mystical fog, floating particles, magical energy, soft atmospheric haze, dramatic clouds, and an immersive sense of wonder.";

                camera =
                "Cinematic fantasy composition with a wide environmental perspective, strong subject placement, layered depth, and dramatic visual storytelling.";

                lighting =
                "Dramatic moonlight, magical glowing sources, warm firelight, volumetric rays, soft atmospheric highlights, and deep cinematic shadows.";

                colors =
                "Deep emerald, royal blue, violet, gold, warm amber, and muted earthy tones.";

                materials =
                "Ancient stone, weathered wood, metal armor, leather, magical crystals, flowing fabrics, moss, vegetation, and atmospheric environmental textures.";

                extraDetails =
                "Add magical particles, ancient symbols, distant creatures, glowing artifacts, detailed costumes, environmental ruins, and subtle signs of an ancient civilization.";

            }


            // -------------------------------------------------
            // HORROR
            // -------------------------------------------------

            else if (hasAny(ideaLower, [
                "horror",
                "scary",
                "haunted",
                "dark",
                "ghost",
                "abandoned"
            ])) {

                subject =
                "A visually unsettling central subject designed around the original idea, with realistic physical details, subtle imperfections, and an eerie visual presence.";

                environment =
                "An isolated abandoned environment containing damaged structures, aged surfaces, empty corridors, broken objects, overgrown areas, and believable signs of decay.";

                technology =
                "Use old or malfunctioning technology, flickering lights, damaged electrical systems, abandoned devices, or surveillance equipment when relevant.";

                atmosphere =
                "Dense fog, cold humid air, floating dust, subtle particles, deep darkness, silence, and an intense feeling of isolation.";

                camera =
                "Low or slightly off-center cinematic framing, realistic wide-angle perspective, controlled depth of field, and composition designed to create visual tension.";

                lighting =
                "Very limited practical lighting, flickering fluorescent sources, narrow beams, deep shadows, subtle rim lighting, and strong contrast.";

                colors =
                "Desaturated gray, dark blue, black, muted green, and small areas of dirty warm light.";

                materials =
                "Cracked concrete, rusted metal, peeling paint, dirty glass, aged wood, dust, moisture, and decaying surfaces.";

                extraDetails =
                "Add abandoned furniture, damaged signage, hanging wires, footprints, distant silhouettes only when appropriate, broken windows, moisture, and subtle environmental clues.";

            }


            // -------------------------------------------------
            // ANIME
            // -------------------------------------------------

            else if (ideaLower.includes("anime")) {

                subject =
                "A polished anime-inspired main character or subject with expressive eyes, carefully designed hair, stylized proportions, distinctive clothing, and a strong visual identity.";

                environment =
                "A detailed anime-inspired environment with expressive skies, carefully designed architecture or nature, atmospheric depth, and visual elements that support the story.";

                technology =
                "Use stylized technology, futuristic interfaces, fantasy objects, vehicles, or environmental elements appropriate to the original concept.";

                atmosphere =
                "Expressive atmospheric effects, drifting particles, soft clouds, wind movement, glowing accents, and cinematic environmental depth.";

                camera =
                "Dynamic anime-style cinematic framing with strong perspective, expressive composition, dramatic subject placement, and controlled depth.";

                lighting =
                "Stylized directional lighting, glowing highlights, soft shadows, atmospheric rim light, and dramatic environmental illumination.";

                colors =
                "Vibrant saturated colors balanced with cinematic shadows and carefully controlled highlights.";

                materials =
                "Detailed clothing fabrics, stylized hair, polished surfaces, environmental textures, reflective objects, and clean visual rendering.";

                extraDetails =
                "Add expressive facial details, flowing hair, dynamic clothing movement, environmental particles, background storytelling, and visual effects appropriate to the scene.";

            }


            // -------------------------------------------------
            // DEFAULT IMAGE INTELLIGENCE
            // -------------------------------------------------

            else {

                subject =
                `A clearly defined main subject based directly on "${idea}", with appropriate appearance, proportions, characteristics, objects, clothing, and visual identity.`;

                environment =
                `A believable environment specifically designed around "${idea}", including an appropriate location, background elements, time of day, weather, and surrounding objects.`;

                technology =
                "Introduce technology, tools, architecture, transportation, or interfaces only when they naturally support the original concept.";

                atmosphere =
                "A coherent atmosphere with appropriate weather, air quality, environmental particles, reflections, and mood.";

                camera =
                "A professional cinematic composition with an appropriate camera angle, framing, perspective, lens characteristics, and depth of field.";

                lighting =
                `Lighting designed to match the ${style} visual style, with believable direction, shadows, highlights, reflections, and atmospheric depth.`;

                colors =
                "A carefully selected color palette that naturally supports the subject, environment, mood, and requested visual style.";

                materials =
                "Realistic materials, surfaces, textures, reflections, and small environmental details appropriate to the concept.";

                extraDetails =
                "Add only relevant visual elements that strengthen the original idea without changing its core meaning.";

            }


            // -------------------------------------------------
            // STYLE INTELLIGENCE
            // -------------------------------------------------

            let styleDetails = "";

            if (style === "cinematic") {
                styleDetails =
                "Use dramatic cinematic framing, strong visual hierarchy, filmic contrast, atmospheric depth, realistic lens behavior, and sophisticated lighting.";
            }

            else if (style === "creative") {
                styleDetails =
                "Use imaginative visual storytelling, distinctive composition, expressive details, creative perspective, and visually memorable elements.";
            }

            else if (style === "professional") {
                styleDetails =
                "Use clean composition, precise visual hierarchy, controlled lighting, realistic proportions, polished presentation, and professional visual consistency.";
            }

            else {
                styleDetails =
                "Keep the composition clean, understandable, balanced, visually appealing, and free from unnecessary complexity.";
            }


            // -------------------------------------------------
            // FINAL IMAGE PROMPT
            // -------------------------------------------------

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

ATMOSPHERE:
${atmosphere}

COMPOSITION:
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
${styleDetails}

CORE IDEA PROTECTION:
All added details must naturally support the original idea. Do not replace the main concept with unrelated elements.

QUALITY:
Create a coherent, immersive, highly detailed, polished, professional image with realistic spatial relationships, consistent lighting, believable materials, strong composition, and excellent visual storytelling.

NEGATIVE:
Avoid blurry details, distorted anatomy, duplicate objects, malformed structures, random text, incorrect perspective, inconsistent lighting, low resolution, visual artifacts, and unnecessary elements.

OUTPUT:
Return one complete, ready-to-use AI image generation prompt.`;

        }


        // =====================================================
        // VIDEO
        // =====================================================

        else if (aiType === "video") {

            expandedIdea =
`Create a ${style} AI video based on this idea:

"${idea}"

SCENE:
Build a complete environment around the concept with a clear location, time of day, weather, atmosphere, background elements, and visual context.

SUBJECT:
Clearly define the main subjects, their appearance, position, and relationship with the environment.

ACTION:
Describe specific physical actions and meaningful movement rather than static subjects.

CAMERA:
Use cinematic establishing shots, medium shots, close-ups, tracking shots, dolly movement, crane movement, or handheld motion where appropriate.

MOTION:
Include realistic movement of people, vehicles, objects, clothing, vegetation, weather, particles, and environmental elements.

LIGHTING:
Define the direction, intensity, color, shadows, highlights, reflections, and changes in lighting throughout the sequence.

PACING:
Create a clear visual progression with an engaging beginning, development, and ending.

STYLE:
${style} visual language with strong cinematic storytelling and consistent visual design.

QUALITY:
Maintain realistic motion, temporal consistency, detailed environments, coherent subjects, stable camera movement, and professional cinematic quality.

OUTPUT:
Return one complete ready-to-use AI video generation prompt.`;

        }


        // =====================================================
        // TEXT
        // =====================================================

        else if (aiType === "text") {

            expandedIdea =
`Create ${style} content based on this idea:

"${idea}"

AUDIENCE:
Identify the most relevant audience and adapt the complexity accordingly.

PURPOSE:
Determine the main purpose of the content and keep every section focused on that goal.

STRUCTURE:
Create a strong introduction, logical sections, supporting points, useful examples, and a clear conclusion.

CONTENT:
Expand the idea with relevant context, practical information, examples, explanations, and useful insights.

TONE:
Use a ${style} tone while remaining natural and engaging.

QUALITY:
Make the content clear, accurate, useful, original, well-organized, and professional.

OUTPUT:
Return polished, ready-to-use content.`;

        }


        // =====================================================
        // CODE
        // =====================================================

        else if (aiType === "code") {

            expandedIdea =
`Develop a ${style} software solution based on this idea:

"${idea}"

FUNCTIONAL REQUIREMENTS:
Define exactly what the application, feature, or system should do.

USER EXPERIENCE:
Describe the expected user flow, inputs, interactions, outputs, and important states.

ARCHITECTURE:
Choose an appropriate structure, components, data flow, APIs, storage, and dependencies.

IMPLEMENTATION:
Use clean, maintainable, efficient, and readable code.

EDGE CASES:
Handle invalid inputs, unexpected states, failures, empty states, and boundary conditions.

SECURITY:
Consider validation, privacy, permissions, authentication, authorization, and common security risks where relevant.

TESTING:
Include important test cases and expected behavior.

QUALITY:
Make the solution scalable, maintainable, secure, efficient, and production-ready.

OUTPUT:
Return a complete professional coding solution with explanations where useful.`;

        }


        // =====================================================
        // STUDY
        // =====================================================

        else if (aiType === "study") {

            expandedIdea =
`Teach this topic using a ${style} learning approach:

"${idea}"

FOUNDATION:
Explain the prerequisites and fundamental concepts first.

STEP-BY-STEP EXPLANATION:
Break the topic into simple logical sections and explain each concept clearly.

EXAMPLES:
Use practical examples and progressively harder applications.

EXAM INTELLIGENCE:
Highlight important formulas, concepts, shortcuts, common mistakes, traps, and frequently tested areas.

PRACTICE:
Create questions from basic to advanced difficulty with answers or explanations.

REVISION:
Finish with concise notes, key formulas, important facts, and a quick revision checklist.

QUALITY:
Make the lesson understandable, structured, engaging, accurate, and exam-focused.

OUTPUT:
Return a complete learning experience.`;

        }


        // =====================================================
        // DISPLAY
        // =====================================================

        promptResult.textContent = expandedIdea;

        resultBox.style.display = "block";

        resultBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });


    // =========================
    // COPY
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
