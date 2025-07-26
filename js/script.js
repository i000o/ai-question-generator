// Variable declaration
const form = document.querySelector('.form');
const radioButtons = document.querySelectorAll('input[name="topic"]');

// radio buttons event setup
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
radioButtons.forEach((radio) => {
    radio.onchange = function () {
        console.log('Radio seleccionado:', this.value);
        updateTopicSummary(this.value);
    };
});


// this function updates the summary based on the selected topic
function updateTopicSummary(topic) {

    // clean all summaries
    document.querySelectorAll('.concept-summary, .structure-summary, .details-summary, .technique-summary').forEach(span => {
        span.textContent = '';
    });

    // show the corresponding summary
    const summaryMap = {
        'concept': 'What is this? Understanding the fundamental idea or principle.',
        'structure': 'How is this organized? Understanding the architecture and components.',
        'details': 'Why does this work? Understanding the specific implementation.',
        'technique': 'How do I implement this? Step-by-step practical approach.'
    };

    // Check if the topic exists in the summaryMap
    // and update the corresponding summary element
    if (summaryMap[topic]) {
        const summaryElement = document.querySelector(`.${topic}-summary`);

        // If the element exists
        if (summaryElement) {
            // update its text content
            summaryElement.textContent = summaryMap[topic];
            console.log('Resumen actualizado correctamente');
        } else {
            // If the element does not exist, log an error
            console.error('No se encontró elemento:', topic + '-summary');
        }
    }
}

// function to get the selected topic from radio buttons
function getSelectedTopic() {
    const selectedTopic = document.querySelector('input[name="topic"]:checked');
    // If a topic is selected, return its value, otherwise, return null
    // you can also use an if statement to check if selectedTopic is null
    // and return null if it is, but this is a more concise way
    return selectedTopic ? selectedTopic.value : null;
}

// function to get the selected project from the dropdown
function getSelectedProject() {
    const projectSelect = document.getElementById('project');
    // If a project is selected, return its value, otherwise, return an empty string
    // you can also use an if statement to check if projectSelect is null
    return projectSelect ? projectSelect.value : '';
}

// function to get the selected tool from the dropdown
function getSelectedTool() {
    const toolSelect = document.getElementById('tool');
    // If a tool is selected, return its value, otherwise, return an empty string
    // you can also use an if statement to check if toolSelect is null
    return toolSelect ? toolSelect.value : '';
}

// event listener for form submission
if (form) {
    form.addEventListener('submit', function (e) {
        // this will prevent the default form submission
        e.preventDefault();

        // get the selected values from the form using the helper functions from above
        const selectedTopic = getSelectedTopic();
        const selectedProject = getSelectedProject();
        const selectedTool = getSelectedTool();

        // Log the selected values to the console - you can remove this
        console.log('Datos del formulario:', {
            topic: selectedTopic,
            project: selectedProject,
            tool: selectedTool
        });

        // Call the function to generate the question
        // and pass the selected values
        // because the functions have global scope we can use it here 
        generateAIQuestion(selectedTopic, selectedProject, selectedTool);
    });
}

// function to generate the AI question based on the selected topic, project, and tool
function generateAIQuestion(topic, project, tool) {
    if (!topic || !project || !tool) {
        // If any of the fields are empty, show an alert
        alert('Por favor completa todos los campos'); // English translation? 
        return;
    }

    const questionTemplates = {
        'concept': `What is the core concept behind building a ${project} with ${tool}?`,
        'structure': `How should I structure and organize a ${project} built with ${tool}?`,
        'details': `Why do certain implementation details matter when building a ${project} with ${tool}?`,
        'technique': `What are the step-by-step techniques for implementing a ${project} with ${tool}?`
    };

    // Get the question template based on the selected topic
    const question = questionTemplates[topic];

    const outputSpan = document.getElementById('outputSpan');
    // If the outputSpan element exists
    if (outputSpan) {
        // update its text content
        outputSpan.textContent = question;
    }

    // Log the generated question to the console - you can remove this
    console.log('Pregunta generada:', question);
}
