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

    // Generate Smart Prompt
    generateBtn.addEventListener("click", function () {

        const idea = document.getElementById("idea").value.trim();
        const aiType = document.getElementById("aiType").value;
        const style = document.getElementById("style").value;

        if (!idea) {
            alert("Please enter your idea first.");
            return;
        }

        let role = "";
        let instructions = "";

        if (aiType === "image") {
            role = "You are an expert AI visual prompt engineer.";
            instructions = "Describe the subject, composition, lighting, camera angle, colors, environment, atmosphere, depth, textures, and visual quality.";
        } 
        else if (aiType === "video") {
            role = "You are an expert cinematic AI video director.";
            instructions = "Describe scenes, camera movements, subject actions, transitions, lighting, environment, pacing, and cinematic details.";
        } 
        else if (aiType === "text") {
            role = "You are an expert content writer.";
            instructions = "Create clear, engaging, well-structured content with the appropriate tone, context, examples, and useful details.";
        } 
        else if (aiType === "code") {
            role = "You are an expert software developer.";
            instructions = "Create clean, efficient, maintainable code with proper structure, error handling, comments, and best practices.";
        } 
        else if (aiType === "study") {
            role = "You are an expert teacher and study mentor.";
            instructions = "Explain the topic step-by-step with concepts, examples, important points, common mistakes, and revision tips.";
        }

        const prompt =
`${role}

TASK:
Create a ${style} ${aiType} based on the following idea:

"${idea}"

CONTEXT:
Understand the user's idea and expand it into a complete, useful result.

REQUIREMENTS:
${instructions}

QUALITY:
Make the result detailed, accurate, high-quality, professional, and easy to understand.

OUTPUT:
Return the final result in a clear and well-structured format.`;

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
            await navigator.clipboard.writeText(promptResult.textContent);

            copyBtn.textContent = "✅ Copied!";

            setTimeout(function () {
                copyBtn.textContent = "📋 Copy";
            }, 2000);

        } catch (error) {
            alert("Unable to copy. Please copy the prompt manually.");
        }
    });

});
