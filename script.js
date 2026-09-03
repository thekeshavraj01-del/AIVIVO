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

    // Generate prompt
    generateBtn.addEventListener("click", function () {

        const idea = document.getElementById("idea").value.trim();
        const aiType = document.getElementById("aiType").value;
        const style = document.getElementById("style").value;

        if (!idea) {
            alert("Please enter your idea first.");
            return;
        }

        const prompt =
`Create a ${style} ${aiType} based on this idea:

"${idea}"

Make the result detailed, high-quality, clear, and professional. Include important details, context, and specific instructions needed to achieve the best possible result.`;

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
