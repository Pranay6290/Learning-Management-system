document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { id: 1, name: "Web Development", instructor: "John Doe" },
        { id: 2, name: "Data Structures", instructor: "Jane Smith" },
        { id: 3, name: "Machine Learning", instructor: "Alan Turing" }
    ];

    const courseContainer = document.getElementById("courses");

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");
        courseDiv.innerHTML = `<h3>${course.name}</h3><p>Instructor: ${course.instructor}</p>`;
        courseContainer.appendChild(courseDiv);
    });
});
