# Hola 2

## For this first contribution, I did the following:

- Updated my fork to keep up with your repository
- Responded to your comments in the HTML and JS
- Removed unnecessary things I had added to the HTML for more efficient code
- Worked on JS to address inline validation
- Changed classes to IDs so I could work with them later if needed, but IDs that aren't currently being used can be removed from the JS
- Worked in the progressive disclosure feature
- Add unit test with Vitest. To run the tests just ```npm run test``` in the terminal

## Important Changes

- Changed spans to details in the radio inputs [Concept, Structure, Details, Technique] in the HTML, reducing the use of JS and making everything more accessible and semantic. This means having to arrange the input list in a different order or work on its styling to avoid issues.
- In the JS, I had to add several synthetic event triggers. First, to be able to obtain inline validation/output, and second, so that a value is entered every time a details page is opened/closed. The current style eliminates the selection circle that each radio input has natively, making it impossible for the user to select a value, rendering the JS inoperable. The fact that radio inputs don't have a clear way to select them is bad practice. They should be easy and clear to select.
- In the HTML, I added an additional 'empty' option to the select fields so that the user has to really select an option and can enter a value for inline validation/output.
- I reduced the scope of the form that defines the output. Forms are for collecting information, not displaying it. The question/section of whether the output was useful should be another form, which I also added.
