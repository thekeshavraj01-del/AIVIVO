alert("AIVIVO JavaScript is working!");
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
const themeToggle = document.getElementById("themeToggle");
const generateBtn = document.getElementById("generateBtn");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});


generateBtn.addEventListener("click", () => {

    const idea = document.getElementById("idea").value.trim();
    const aiType = document.getElementById("aiType").value;
    const style = document.getElementById("style").value;

    if (idea === "") {
        alert("Please enter your idea first.");
        return;
    }

    const prompt = `Create a ${style} ${aiType} based on this idea:

"${idea}"

Make the result detailed, high-quality, clear, and professional. Include important details, context, and specific instructions needed to achieve the best possible result.`;

    alert("✨ Your prompt is ready!\n\n" + prompt);
});
