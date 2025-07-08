**AI Question Generator**

Designed for learning software developers in a time when using AI in your workflow is highly encouraged; I've found that the most helpful exchanges I've had with an AI tool during a project, occur when I can ask meaningful questions that get to the heart of the problem and move methodically through the problem-solving process.
This may not come so naturally to all. I believe that if one can understand how _they_ learn best, they can do anything they commit to. But this is not necessarily a skill we are taught. It takes time and is dependant on us spending a lot of time trying to understand something amidst the frustration and natural ups and downs of learning.
To try to ease this aspect of research for junior devs, I've created this tool to help guide the conversation you're having with your chosen AI agent so that you may gain more from these interactions and move more promptly through your problem-solving process.

<!-- Ever get stuck in a scroll of verbal conversation with an AI, when you want it lead it in assisting your problem solving approach? Let’s say you want to break down a problem to its parts, and you want the AI to consider this one at a time, with current agents, you can’t do that, it will always overcompensate and try to solve the entirety of the problem first, leaving you to unpick and repeatedly go over overlooked areas multiple times before reaching a finite conclusion/solution. Want a more methodical AI assist agent, where you lead its thought process? Try the AI Question Generator for Junior Devs. -->

**Terminology** -- Refine

1. "Concept" - The concepts/principles surrounding your problem. For instance, when building a tip calculator what are they key concepts I need to be aware of? Answer: parsing etc.

2. "Structure" - ...

3. "Details" - The micro...

4. "Application/Technique" - Pragmatically, _how_ will this get built? For e.g. tip calculator requires a `calculateTip()` function that does the math for you.

<!-- The Problem:

I get stuck in a conversation where the AI is providing entire solutions to one facet of a problem.

This Solution:

What I want: The AI to focus on the element that I am asking for. This is in the interest of breaking down a problem and solving it in a systematic way.
How to do that: Get the AI to focus on branched problem solving - Let me dictate the structure of the approach. Only answer what I ask it to, allow me to bring in additional elements when I see fit, otherwise, suggest to me things that I may have overlook, which I can then respond to and we can decide to circle back to it or not.
Conversation branching. -->

**Features:**

- The feature to repeat the cycle based on Y/N answer in final Q could be an extension feature. in future...
- To develop further, animate the keywords at step 1 to go to the middle and highlight themselves on hover, showing the summary
- Use CSS to animate keywords in step 1 floating around
- Build "I want to build" X "with" Y "with the following constraints", "considering the following:".
- Once the user has entered "the nature of that project" can that stay fixed at the top for them to then circle the three other options for question formulation?

**Question formulation:** -- Refine

Concept: What?
Structure: How?
Details: Why?
Application/Technique:

Prompt: I want to build a tip calculator with Javascript.
Concept selection.

Answer: Please explain to me the key concepts and principles that I would need to consider if I were to approach building a tip calculator with Javascript. Do not show me or write any code yet. I only want to understand the key considerations I must make when approaching a task like this. (Test this question on an AI)

Same prompt.
Structure selection.

Answer: Structurally, how would I approach planning my code for a project like this? Break it down step by step in chronological order according to best practice. I want to understand what steps I need to include in my Javascript, in which order should they come so that I can break the task down piece by piece.

Same prompt.
Details selection.

Answer: Are there any key details that I need to consider in a project like this? Ensure I am not overlooking any best practices in relation to accessibility or otherwise. Consider what kind of specifications might make my tip calculator unique or future-oriented? What are some common features a strong, scalable calculator might have?

Same prompt.
Application/Technique selection.
Execution.
Answer: Considering all of the above, walk me through, step by step, the pragmatic things I would need to implement from start to finish to write this tip calculator. Talk me through the programming logic it would require to work. Consider how to keep my code clean. What do I need to make sure I complete to have a well-functioning tip calculator by the end?

Changes/Transformations:

1. "Application/Technique" into Technique for simplicity.
2. "Give us some context." into "What is the nature of your project?" for specificity.
3. User entered text field into dropdown select menu. "I want to build a X with Y." formula to extract keywords.

**Development:**

- To have one Q appear at a time onscreen.
- What about a "You've completed the sequence of questions we have available! Hopefully now you can get into the nitty-gritty with your AI assist with more confidence about how to interact with it to yield the best results."

**To do:**
Debug `<fieldset>` transforms to stop the whole form jolting.
Change `h1` to `legend` without disrupting the structure of the styles
Responsive: keywords cluster on viewport shrink

**Learnings:**
`forEach()` JS method -
Convention: Many developers shorten “element” to el or “item” to it.
`change` events in JS.

# ai-question-generator
