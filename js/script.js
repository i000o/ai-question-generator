document.addEventListener("DOMContentLoaded", init); 
    
    // declare variables 
    function init() { 
        const form = document.querySelector(".form"); 
        const controls = form.querySelectorAll('input', 'select');

        controls.forEach(el => el.addEventListener('change', tryGenerate)); //
    }

    function tryGenerate() { 
        const form = document.querySelector(".form"); 

        if (!form.checkValidity()) { //What's .checkValidity doing here? 
            hideOutput(); // What's this? 
            return; // Why is 'return' blank? 
        }

        generateQuestion(); // Why can we use this function before we've declared/assigned it? 
    }

    // Why do we come out now? 

    function generateQuestion() { 
        const formData = new formData(document.querySelector{".form"}); // What's "new" doing here? 
        const topic = formData.get('.topic'); // What's .get() method? 
        const project = formData.get('.project');
        const tool = formData.get('.tool'); 
        const TEMPLATES = { // Why caps? 
            Concept: `
            Please explain the key concepts and principles to consider to approach building a <span class="highlight">_project_<span> with <span class="highlight">_tool_</span>. 
            Do not show any code yet. I only want to understand the most crucial things to consider when approaching a task like this.
            `, // What is <span class="highlight">_project_</span>?
            Structure: `
            Structurally, how would I approach planning my code for a project like this? Break it down step by step in chronological order,according to best practice. I want to understand what steps I need to include in my <span class="highlight">_tool_</span>, in which order should they come so that I can break the task down piece by piece.
            ` // We can edit the wording of these questions to improve 
            Details: `
            Are there any key details that I need to consider in a project like this? Ensure I am not overlooking any best practices in relation to accessibility or otherwise. Consider what kind of specifications might make my tip calculator unique or future-oriented? What are some common features a strong, scalable calculator might have?
            ` 
            Technique: `
            Considering all of the above, walk me through, step by step, the pragmatic things I would need to implement from start to finish to write this tip calculator. Talk me through the programming logic it would require to work. Consider how to keep my code clean. What do I need to make sure I complete to have a well-functioning <span class="highlight">_project_</span> by the end?
            `
        }

            const html = template 
                .replace(/--project--/g, escapeHTML(project)) 
                .replace(/--tool--/g, escapeHTML(tool))
                .trim(); 

                showOutput(html, stripTags(html)); 
    }

    function hideOutput() { 
        document.getElementById("generatedQuestion").innerHTML = html; 
        document.getElementById("copyArea").value = Text; 
        document.getElementById("output").classList.remove('hidden');
    }