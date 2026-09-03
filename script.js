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

    // Generate AI-specific smart prompt
    generateBtn.addEventListener("click", function () {

        const idea = document.getElementById("idea").value.trim();
        const aiType = document.getElementById("aiType").value;
        const style = document.getElementById("style").value;

        if (!idea) {
            alert("Please enter your idea first.");
            return;
        }

        let prompt = "";

        // IMAGE
        if (aiType === "image") {

            prompt = `You are an expert AI image prompt engineer.

TASK:
Create a ${style} AI image based on this idea:

"${idea}"

SUBJECT:
Clearly define the main subject, appearance, characteristics, clothing, objects, and important visual elements.

COMPOSITION:
Create a strong composition with foreground, subject placement, background, depth, perspective, and visual balance.

CAMERA:
Specify camera angle, perspective, lens style, depth of field, and framing where appropriate.

LIGHTING:
Describe the lighting direction, intensity, shadows, highlights, and overall mood.

ENVIRONMENT:
Build a detailed environment that supports the idea and makes the scene believable.

COLORS:
Use a carefully selected color palette that matches the requested style and atmosphere.

DETAILS:
Include realistic textures, materials, small environmental details, atmosphere, and visual depth.

QUALITY:
Make the image highly detailed, polished, professional, visually consistent, and suitable for high-quality AI image generation.

NEGATIVE:
Avoid blurry details, distorted anatomy, bad composition, unwanted objects, low resolution, artifacts, and unnatural results.

OUTPUT:
Return one complete, ready-to-use AI image generation prompt.`;
        }

        // VIDEO
        else if (aiType === "video") {

            prompt = `You are an expert AI video director and cinematic prompt engineer.

TASK:
Create a ${style} AI video based on this idea:

"${idea}"

SCENE:
Describe the environment, characters, objects, atmosphere, and visual setting.

ACTION:
Clearly describe what happens in the scene and how the subjects move.

CAMERA:
Specify camera movement, camera angle, framing, perspective, and cinematic shots.

MOTION:
Describe realistic subject movement, environmental movement, and physics.

LIGHTING:
Define the lighting, shadows, highlights, time of day, and mood.

TRANSITIONS:
Include suitable transitions and scene changes where necessary.

PACING:
Define the rhythm, timing, intensity, and progression of the video.

VISUAL STYLE:
Create a visually consistent ${style} cinematic style.

QUALITY:
Make the video realistic, detailed, smooth, engaging, and professionally directed.

OUTPUT:
Return one complete, ready-to-use AI video generation prompt.`;
        }

        // TEXT
        else if (aiType === "text") {

            prompt = `You are an expert content strategist and professional writer.

TASK:
Create ${style} content based on this idea:

"${idea}"

AUDIENCE:
Identify the most appropriate target audience and write for their level of understanding.

STRUCTURE:
Organize the content with a strong introduction, logical sections, useful details, and a clear conclusion.

TONE:
Use a ${style} tone that fits the purpose and audience.

CONTENT:
Expand the idea with relevant information, examples, explanations, and practical value.

CLARITY:
Use natural, clear, engaging language and avoid unnecessary complexity.

QUALITY:
Make the final content original, useful, polished, professional, and easy to understand.

OUTPUT:
Return the final content in a clean and well-structured format.`;
        }

        // CODE
        else if (aiType === "code") {

            prompt = `You are a senior software engineer and expert AI coding assistant.

TASK:
Develop a ${style} coding solution based on this idea:

"${idea}"

REQUIREMENTS:
Understand the idea and convert it into clear technical requirements.

ARCHITECTURE:
Choose an appropriate structure, technologies, components, and logic.

IMPLEMENTATION:
Write clean, efficient, readable, maintainable code.

ERROR HANDLING:
Handle likely errors, edge cases, invalid inputs, and unexpected situations.

SECURITY:
Follow appropriate security and privacy best practices.

TESTING:
Include useful test cases or explain how the solution should be tested.

EXPLANATION:
Briefly explain the important parts of the solution.

QUALITY:
Follow modern development best practices and make the solution practical and production-ready where appropriate.

OUTPUT:
Return the complete solution with code and a concise explanation.`;
        }

        // STUDY
        else if (aiType === "study") {

            prompt = `You are an expert teacher, study mentor, and exam-preparation strategist.

TASK:
Teach this topic in a ${style} way:

"${idea}"

LEVEL:
Adapt the explanation to the student's likely level and build understanding from the basics.

CONCEPTS:
Explain the important concepts clearly and step-by-step.

EXAMPLES:
Provide simple examples and practical applications where useful.

EXAM FOCUS:
Highlight important concepts, formulas, facts, patterns, and commonly tested areas.

COMMON MISTAKES:
Explain mistakes students commonly make and how to avoid them.

PRACTICE:
Provide useful practice questions or exercises to reinforce understanding.

REVISION:
Give concise revision points and memory techniques where appropriate.

QUALITY:
Make the explanation accurate, clear, engaging, and easy to learn.

OUTPUT:
Return a complete study solution in a well-structured format.`;
        }

        // DEFAULT
        else {

            prompt = `You are an expert AI prompt engineer.

TASK:
Create a ${style} result based on this idea:

"${idea}"

CONTEXT:
Understand the user's idea and expand it into a complete solution.

REQUIREMENTS:
Make the result detailed, useful, clear, and specific.

QUALITY:
Make the final result professional, accurate, polished, and high-quality.

OUTPUT:
Return the final result in a clear and well-structured format.`;
        }

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
