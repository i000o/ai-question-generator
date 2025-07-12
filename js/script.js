// Variables declarations
let form;

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar variables después de que el DOM esté listo
    form = document.getElementById('form');
    
    // Configurar event listeners
    setupEventListeners();
});

// Configurar todos los event listeners
function setupEventListeners() {
    // Event listener para detectar cambios en los radio buttons
    document.querySelectorAll('input[name="topic"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const selectedValue = this.value;
            console.log('Topic seleccionado:', selectedValue);
            
            // Actualizar el resumen del topic
            updateTopicSummary(selectedValue);
        });
    });

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
            
            // Generar la pregunta para la AI
            generateAIQuestion(selectedTopic, selectedProject, selectedTool);
        });
    }
}

// Función para obtener el valor seleccionado del grupo de radio buttons
function getSelectedTopic() {
    const selectedTopic = document.querySelector('input[name="topic"]:checked');
    return selectedTopic ? selectedTopic.value : null;
}

// Función para obtener el valor seleccionado del proyecto
function getSelectedProject() {
    const projectSelect = document.getElementById('project');
    return projectSelect.value;
}

// Función para obtener el valor seleccionado de la herramienta
function getSelectedTool() {
    const toolSelect = document.getElementById('tool');
    return toolSelect.value;
}

// Función para actualizar el resumen del topic seleccionado
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
            console.log('Resumen actualizado:', summaryMap[topic]);
        } else {
            console.log('No se encontró el elemento:', `.${topic}-summary`);
        }
    }
}

// Función para generar la pregunta para la AI
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
    
    // Mostrar la pregunta en el span de output
    const outputSpan = document.getElementById('outputSpan');
    if (outputSpan) {
        outputSpan.textContent = question;
    }
    
    console.log('Pregunta generada:', question);
}