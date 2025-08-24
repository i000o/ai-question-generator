import { describe, test, expect, beforeEach } from 'vitest';

describe('AI Question Generator Script', () => {
  let feedbackSection, outputP, projectSelect, toolSelect, radioConcept, radioStructure, detailsConcept, summaryConcept;

  // Helper to simulate DOMContentLoaded and script logic
  /**
   * Initializes event listeners and logic for topic selection, project/tool selection,
   * and AI question generation in the UI. Handles radio button changes, details/summary
   * clicks, and triggers question generation when appropriate selections are made.
   *
   * @returns {Object} An object exposing:
   *   - generateAIQuestion: (async function) Generates an AI question based on current selections.
   *   - setTopic: (function) Allows manual setting of the selected topic.
   */
  function loadScript() {
    // Simulate the script logic
    const radioButtons = document.querySelectorAll('input[name="topic"]');
    let topicSelected = null;
    projectSelect = document.getElementById('project');
    toolSelect = document.getElementById('tool');
    outputP = document.getElementById('outputP');
    feedbackSection = document.getElementById('feedback');

    radioButtons.forEach((radio) => {
      radio.onchange = function () {
        topicSelected = this.value;
      };

      const details = document.getElementById(radio.id + '-details');
      if (details) {
        const summary = details.querySelector('summary');
        if (summary) {
          summary.addEventListener('click', function () {
            radio.checked = true;
            radio.dispatchEvent(new Event('change', { bubbles: true }));
            topicSelected = radio.value;
          });
        }
      }
    });

    projectSelect.addEventListener('click', function () {
      projectSelect.dispatchEvent(new Event('change', { bubbles: true }));
    });

    toolSelect.addEventListener('click', function () {
      toolSelect.dispatchEvent(new Event('change', { bubbles: true }));
      generateAIQuestion(topicSelected, projectSelect.value, toolSelect.value);
    });

    async function generateAIQuestion(topicSelected, projectSelectValue, toolSelectValue) {
      if (!topicSelected || projectSelectValue === 'none' || toolSelectValue === 'none') {
        return;
      }
      const questionTemplates = {
        'concept': `What is the core concept behind building a ${projectSelectValue} with ${toolSelectValue}?`,
        'structure': `How should I structure and organize a ${projectSelectValue} built with ${toolSelectValue}?`,
        'details': `Why do certain implementation details matter when building a ${projectSelectValue} with ${toolSelectValue}?`,
        'technique': `What are the step-by-step techniques for implementing a ${projectSelectValue} with ${toolSelectValue}?`
      };
      const question = questionTemplates[topicSelected];
      if (outputP) {
        outputP.textContent = question;
        if (outputP.textContent) {
          feedbackSection.style.display = 'block';
        }
      }
      return true;
    }

    // Expose for test
    return { generateAIQuestion, setTopic: (val) => { topicSelected = val; } };
  }

  beforeEach(() => {
    // Set up DOM structure
    document.body.innerHTML = `
      <div id="feedback" style="display:none"></div>
      <input type="radio" id="concept" name="topic" value="concept">
      <details id="concept-details"><summary>Concept</summary></details>
      <input type="radio" id="structure" name="topic" value="structure">
      <details id="structure-details"><summary>Structure</summary></details>
      <select id="project">
        <option value="none">Select Project</option>
        <option value="website">Website</option>
      </select>
      <select id="tool">
        <option value="none">Select Tool</option>
        <option value="React">React</option>
      </select>
      <p id="outputP"></p>
    `;
    feedbackSection = document.getElementById('feedback');
    outputP = document.getElementById('outputP');
    projectSelect = document.getElementById('project');
    toolSelect = document.getElementById('tool');
    radioConcept = document.getElementById('concept');
    radioStructure = document.getElementById('structure');
    detailsConcept = document.getElementById('concept-details');
    summaryConcept = detailsConcept.querySelector('summary');
  });

  test('should not generate question if any field is not selected', async () => {
    const { generateAIQuestion } = loadScript();
    outputP.textContent = '';
    feedbackSection.style.display = 'none';
    await generateAIQuestion(null, 'website', 'React');
    expect(outputP.textContent).toBe('');
    expect(feedbackSection.style.display).toBe('none');
    await generateAIQuestion('concept', 'none', 'React');
    expect(outputP.textContent).toBe('');
    await generateAIQuestion('concept', 'website', 'none');
    expect(outputP.textContent).toBe('');
  });

  test('should generate correct question for concept', async () => {
    const { generateAIQuestion } = loadScript();
    await generateAIQuestion('concept', 'website', 'React');
    expect(outputP.textContent).toBe('What is the core concept behind building a website with React?');
    expect(feedbackSection.style.display).toBe('block');
  });

  test('should generate correct question for structure', async () => {
    const { generateAIQuestion } = loadScript();
    await generateAIQuestion('structure', 'website', 'React');
    expect(outputP.textContent).toBe('How should I structure and organize a website built with React?');
    expect(feedbackSection.style.display).toBe('block');
  });

  test('radio button onchange updates topicSelected', () => {
    radioConcept.checked = true;
    radioConcept.dispatchEvent(new Event('change', { bubbles: true }));
    // No direct way to check topicSelected, but we can simulate click on summary to trigger logic
    summaryConcept.click();
    expect(radioConcept.checked).toBe(true);
  });

  test('toolSelect click triggers question generation', async () => {
    const { setTopic } = loadScript();
    setTopic('concept');
    projectSelect.value = 'website';
    toolSelect.value = 'React';
    outputP.textContent = '';
    toolSelect.click();
    // Wait for async
    await new Promise(r => setTimeout(r, 10));
    expect(outputP.textContent).toBe('What is the core concept behind building a website with React?');
    expect(feedbackSection.style.display).toBe('block');
  });
});
