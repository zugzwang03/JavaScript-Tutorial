const courses = [
    {
        name: "Complete ReactJs course",
        price: 2.3
    },
    {
        name: "Complete AngularJS course",
        price: 2.7
    },
    {
        name: "Complete MERN course",
        price: 2.5
    },
    {
        name: "Complete PHP course",
        price: 2.9
    },
]

function generateList() {
    const ul = document.querySelector('.list-group')
    ul.innerHTML = "";
    console.log(ul);
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add('list-group-item');

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("\n$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
};

// generateList();

window.addEventListener('load', generateList);


const button = document.querySelector('.sort-btn');

button.addEventListener('click', () => {
    courses.sort((a, b) => a.price - b.price);
    generateList()
})