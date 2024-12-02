document.addEventListener("DOMContentLoaded", () => {
    const text = `Hello! Contact john wick . 
Hi, I am a software engineer graduated from vanier college I specialize in front-end programming with HTML, CSS, and JavaScript. 
[Contact me to see more of my works.]
My journey started with [learning basic programming concepts and HTML]. 
Over the years, I've worked on numerous projects and gained expertise in HTML and CSS, including [My Converse Project and Tindog Project]. 
I believe in continuous learning and love collaborating on exciting projects. Let's connect!`;

    const speed = 50; // Typing speed in milliseconds
    let index = 0;

    function typeWriter() {
        const typewriterElement = document.getElementById("typewriter");
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index) === '\n' ? '<br>' : text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
