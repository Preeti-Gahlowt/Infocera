const form = document.getElementById("coverForm");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const company = document.getElementById("company").value;
    const skills = document.getElementById("skills").value;

    // Mock AI Function
    const letter = generateMockLetter(name, role, company, skills);

    output.value = letter;
});

function generateMockLetter(name, role, company, skills) {
    return `Dear Hiring Manager at ${company},

I am writing to express my interest in the ${role} position at your esteemed organization. My name is ${name}, and I bring strong expertise in ${skills}.

I am passionate about delivering high-quality results and continuously improving my technical and professional skills. I believe my abilities align well with your company's vision and goals.

I would welcome the opportunity to contribute to ${company} and be a part of your innovative team.

Thank you for considering my application.

Sincerely,
${name}`;
}

// Copy to Clipboard
copyBtn.addEventListener("click", () => {
    output.select();
    document.execCommand("copy");
    alert("Cover letter copied!");
});
