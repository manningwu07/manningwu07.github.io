const projects = document.querySelectorAll('.project');
let projectsShown = false;

const portfolios = document.querySelectorAll('.portfolio');
let portfoliosShown = false;
 

// Add click event listener to each project
portfolios.forEach(portfolio => {
    portfolio.addEventListener('click', () => {
        // Get the project content element by ID
        const portfolioID = portfolio.children[0].id + "-container";
        const portfolioContent = document.getElementById(portfolioID);
        if (portfolioContent) {
            // Hide all elements except scripts
            const allElements = document.querySelectorAll('body *:not(script)');
            allElements.forEach(element => {
                element.classList.add('JShidden');
            });

            // Show the necessary parent elements and the project content itself
            let currentElement = portfolioContent;
            while (currentElement !== document.body) {
                currentElement.classList.remove('JShidden');
                currentElement = currentElement.parentElement;
            }

            // Show all descendants of portfolioContent
            const descendants = portfolioContent.getElementsByTagName('*');
            for (let i = 0; i < descendants.length; i++) {
                descendants[i].classList.remove('JShidden');
            }

            // Ensure the project content itself is visible
            portfolioContent.classList.remove('JShidden');
            portfolioContent.className = "block";
            portfolioContent.parentElement.className = "block";
            portfolioContent.classList.add('fade-in');
            portfolioContent.scrollIntoView({ behavior: 'auto', block: 'start' });
            portfoliosShown = true;
            setTimeout(()=>{
                portfolioContent.classList.remove('fade-in');
            }, 3000);
        }
    });
});

// Add click event listener to each project
projects.forEach(project => {
    project.addEventListener('click', () => {
        // Get the project content element by ID
        const projectContentId = project.children[0].id + "-container";
        const projectContent = document.getElementById(projectContentId);
        if (projectContent) {
            // Hide all elements except scripts
            const allElements = document.querySelectorAll('body *:not(script)');
            allElements.forEach(element => {
                element.classList.add('JShidden');
            });

            // Show the necessary parent elements and the project content itself
            let currentElement = projectContent;
            while (currentElement !== document.body) {
                currentElement.classList.remove('JShidden');
                currentElement = currentElement.parentElement;
            }

            // Show all descendants of projectContent
            const descendants = projectContent.getElementsByTagName('*');
            for (let i = 0; i < descendants.length; i++) {
                descendants[i].classList.remove('JShidden');
            }

            // Ensure the project content itself is visible
            projectContent.classList.remove('JShidden');
            projectContent.className = "block";
            projectContent.parentElement.className = "block";
            projectContent.classList.add('fade-in');
            projectContent.scrollIntoView({ behavior: 'auto', block: 'start' });
            projectsShown = true;
            setTimeout(()=>{
                projectContent.classList.remove('fade-in');
            }, 3000);
        }
    });
});

const returnButtons = document.querySelectorAll('.return-home');

returnButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.classList.add('fade-out'); // Add fade-out animation
        setTimeout(() => {
            // Show all elements except scripts
            const allElements = document.querySelectorAll('body *:not(script)');
            allElements.forEach(element => {
                if (element.classList.contains('JShidden')) {
                    element.classList.remove('JShidden');
                }
            });

            button.parentElement.classList.add('hidden');
            button.parentElement.classList.remove('fade-out');
            button.parentElement.className = "hidden";
            button.parentElement.parentElement.className = "hidden";
            projectsShown = false;
            portfoliosShown = false;

            document.body.classList.add('fade-in');
            setTimeout(()=>{
                document.body.classList.remove('fade-in');
            }, 3000);

        }, 900); // Duration of the fade-out animation (subtract 100)
    });
}
)

document.addEventListener('keydown', (event) => {
    if (event.key === "Backspace" && (projectsShown || portfoliosShown)) {
        const projectDisplay = document.getElementById("project-display");
        const personalGrowthDisplay = document.getElementById("personal-growth-display");
        if (projectsShown) {
            projectDisplay.classList.add('fade-out');
        }

        if (portfoliosShown) {
            personalGrowthDisplay.classList.add('fade-out');
        }

        setTimeout(() => {
            if (projectsShown) {
                projectDisplay.classList.add('hidden');
                projectDisplay.classList.remove('fade-out');
            }

            if (portfoliosShown) {
                personalGrowthDisplay.classList.add('hidden');
                personalGrowthDisplay.classList.remove('fade-out');
            }

            // Show all elements except scripts
            const allElements = document.querySelectorAll('body *:not(script)');
            allElements.forEach(element => {
                if (element.classList.contains('JShidden')) {
                    element.classList.remove('JShidden');
                }
            });

            projectsShown = false;
            portfoliosShown = false;
            document.body.classList.add('fade-in');
            setTimeout(()=>{
                document.body.classList.remove('fade-in');
            }, 3000);
        }, 900); // Duration of the fade-out animation
    }
});