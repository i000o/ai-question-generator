// Script para AI Question Generator
console.log('Script iniciando...');

// Variables
const form = document.getElementById('form');
const radioButtons = document.querySelectorAll('input[name="topic"]');

console.log('Encontrados ' + radioButtons.length + ' radio buttons');

// Configurar eventos de radio buttons
radioButtons.forEach((radio, index) => {
    radio.onchange = function() {
        console.log('Radio seleccionado:', this.value);
        updateTopicSummary(this.value);
    };
});

// Función para actualizar resumen
function updateTopicSummary(topic) {
    console.log('Actualizando resumen para:', topic);
    
    // Limpiar todos los resúmenes
    document.querySelectorAll('.concept-summary, .structure-summary, .details-summary, .technique-summary').forEach(span => {
        span.textContent = '';
    });
    
    // Mostrar el resumen correspondiente
    const summaryMap = {
        'concept': 'What is this? Understanding the fundamental idea or principle.',
        'structure': 'How is this organized? Understanding the architecture and components.',  
        'details': 'Why does this work? Understanding the specific implementation.',
        'technique': 'How do I implement this? Step-by-step practical approach.'
    };
    
    if (summaryMap[topic]) {
        const summaryElement = document.querySelector(`.${topic}-summary`);
        if (summaryElement) {
            summaryElement.textContent = summaryMap[topic];
            console.log('Resumen actualizado correctamente');
        } else {
            console.log('No se encontró elemento:', topic + '-summary');
        }
    }
}

// Función para obtener el valor seleccionado
function getSelectedTopic() {
    const selectedTopic = document.querySelector('input[name="topic"]:checked');
    return selectedTopic ? selectedTopic.value : null;
}

// Función para obtener proyecto
function getSelectedProject() {
    const projectSelect = document.getElementById('project');
    return projectSelect ? projectSelect.value : '';
}

// Función para obtener herramienta
function getSelectedTool() {
    const toolSelect = document.getElementById('tool');
    return toolSelect ? toolSelect.value : '';
}

// Event listener para el formulario
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const selectedTopic = getSelectedTopic();
        const selectedProject = getSelectedProject();
        const selectedTool = getSelectedTool();
        
        console.log('Datos del formulario:', {
            topic: selectedTopic,
            project: selectedProject, 
            tool: selectedTool
        });
        
        generateAIQuestion(selectedTopic, selectedProject, selectedTool);
    });
}

// Función para generar pregunta
function generateAIQuestion(topic, project, tool) {
    if (!topic || !project || !tool) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    const questionTemplates = {
        'concept': `What is the core concept behind building a ${project} with ${tool}?`,
        'structure': `How should I structure and organize a ${project} built with ${tool}?`,
        'details': `Why do certain implementation details matter when building a ${project} with ${tool}?`,
        'technique': `What are the step-by-step techniques for implementing a ${project} with ${tool}?`
    };
    
    const question = questionTemplates[topic];
    
    // Mostrar la pregunta
    const outputSpan = document.getElementById('outputSpan');
    if (outputSpan) {
        outputSpan.textContent = question;
    }
    
    console.log('Pregunta generada:', question);
}