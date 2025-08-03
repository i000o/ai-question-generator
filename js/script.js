document.addEventListener("DOMContentLoaded", () => { //radioButtons weren't found before / I dont know why they were not found, but in this momement is worinkg

    console.log('Script is running!');

    // Variable declaration
    const feedbackSection = document.getElementById('feedback');
    const radioButtons = document.querySelectorAll('input[name="topic"]');
    let topicSelected = null; // Initialize topicSelected variable
    const projectSelect = document.getElementById('project');
    const toolSelect = document.getElementById('tool');
    const outputP = document.getElementById('outputP');

    // radio buttons event setup 
    radioButtons.forEach((radio) => {
        radio.onchange = function () {
            console.log('Radio selected:', this.value); // you can remove this if you want
        };

        // select the radio button when details are opened/closed
        const details = document.getElementById(radio.id + '-details');
        if (details) {
            const summary = details.querySelector('summary');
            if (summary) {
                summary.addEventListener('click', function () {
                    radio.checked = true;
                    // https://developer.mozilla.org/es/docs/Web/API/EventTarget/dispatchEvent
                    radio.dispatchEvent(new Event('change', { bubbles: true }));
                    // define topic → step-1
                    topicSelected = radio.value; // Update the topicSelected variable
                });
            }
        }
    });

    // project select event setup → step-2.1
    projectSelect.addEventListener('click', function () {
        projectSelect.dispatchEvent(new Event('change', { bubbles: true }));
        console.log('Project selected:', this.value);
    });

    // tool event setup → step-2.2
    toolSelect.addEventListener('click', function () {
        toolSelect.dispatchEvent(new Event('change', { bubbles: true }));
        console.log('Tool selected:', this.value);
        generateAIQuestion(topicSelected, projectSelect.value, toolSelect.value);
    });

    // function to generate the AI question based on the selected topic, project, and tool
    async function generateAIQuestion(topicSelected, projectSelect, toolSelect) {
        // this if statement checks avoid the function execution if any of the required fields are not really selected
        if (!topicSelected || projectSelect === 'none' || toolSelect === 'none') {
            return;
        }
        const questionTemplates = {
            'concept': `What is the core concept behind building a ${projectSelect} with ${toolSelect}?`,
            'structure': `How should I structure and organize a ${projectSelect} built with ${toolSelect}?`,
            'details': `Why do certain implementation details matter when building a ${projectSelect} with ${toolSelect}?`,
            'technique': `What are the step-by-step techniques for implementing a ${projectSelect} with ${toolSelect}?`
        };
        const question = questionTemplates[topicSelected];
        if (outputP) {
            outputP.textContent = question;
            if (outputP.textContent) {
                feedbackSection.style.display = 'block'; // Show feedback section
            }
        }
        console.log('Generated question:', question);
        return true; // Return true to indicate the question was generated successfully
    };

});
