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

    // Generate professional prompt
    generateBtn.addEventListener("click", function () {

        const idea = document.getElementById("idea").value.trim();
        const aiType = document.getElementById("aiType").value;
        const style = document.getElementById("style").value;

        if (!idea) {
            alert("Please enter your idea first.");
            return;
        }

        let prompt = "";

        if (aiType === "image") {
            prompt = `Create a ${style} AI image based on this idea:

"${idea}"

Generate a visually stunning, highly detailed image. Focus on composition, subject, lighting, colors, environment, atmosphere, camera perspective, depth, textures, and realistic details. Make the final result polished, professional, and visually engaging.`;

        } else if (aiType === "video") {
            prompt = `Create a ${style} AI video based on this idea:

"${idea}"

Design a detailed video concept including scene composition, camera movements, transitions, lighting, environment, subject actions, atmosphere, pacing, and visual effects. Make it cinematic, engaging, and professionally directed.`;

        } else if (aiType === "text") {
            prompt = `Write ${style} content based on this idea:

"${idea}"

Create clear, engaging, well-structured, high-quality content. Use an appropriate tone, strong structure, useful details, and natural language. Make the final result professional and easy to understand.`;

        } else if (aiType === "code") {
            prompt = `Develop ${style} code based on this idea:

"${idea}"

Provide clean, efficient, well-structured, and maintainable code. Explain the important parts, handle possible errors, follow best practices, and make the solution practical and reliable.`;

        } else if (aiType === "study") {
            prompt = `Create a ${style} study solution based on this idea:

"${idea}"

Explain the topic clearly and step-by-step. Include important concepts, examples, key points, common mistakes, and useful techniques for better understanding and revision.`;

        } else {
            prompt = `Create a ${style} result based on this idea:

"${idea}"

Make the result detailed, high-quality, clear, useful, and professional.`;
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

        const prompt = promptResult.textContent;

        try {
            await navigator.clipboard.writeText(prompt);

            copyBtn.textContent = "✅ Copied!";

            setTimeout(function () {
                copyBtn.textContent = "📋 Copy";
            }, 2000);

        } catch (error) {
            alert("Unable to copy. Please copy the prompt manually.");
        }
    });

});
