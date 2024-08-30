# Create a responsive FAQ (Frequently Asked Questions)

## Objective

Create a responsive FAQ (Frequently Asked Questions) page in Next.js that displays a list of questions and answers. The page should allow users to search through the questions, and each question should be able to expand or collapse to show or hide its answer. The entire solution must be implemented in a single file using Tailwind CSS for styling.

## Requirements

#### Static Route:

- Create a page at /faq that displays a list of FAQ items.
- Each FAQ item should consist of a question and an answer.

#### Simulated FAQ Data:

- Use a local array of objects to simulate the FAQ data.
- Each FAQ object should have a question and an answer.

#### Search Functionality:

- Implement a search bar at the top of the page that filters the FAQ items based on the text input.
- The search should be case-insensitive and should match the search term against the questions.

#### Accordion Functionality:

- Each FAQ question should be clickable to toggle the visibility of the answer.
- When a question is clicked, the corresponding answer should expand below it.
- If the question is clicked again, the answer should collapse.

#### Responsive Design:

- The page should be fully responsive and look good on both desktop and mobile devices.
- Use Tailwind CSS for all styling.

## Additional Features

- Expand/Collapse All: Add buttons to expand or collapse all FAQ items at once.
- Persist Search State: Save the user's search query in the URL so that it persists across page reloads.

## Code should be a single .js file containing:

- A functional Next.js page at /faq.
- All necessary code to implement the FAQ accordion with search functionality.
- Styling implemented with Tailwind CSS directly in the file.

## Example FAQ Data

```javascript
const faqs = [
  { question: 'What is Next.js?', answer: 'Next.js is a React framework for building web applications.' },
  { question: 'How does Tailwind CSS work?', answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.' },
  { question: 'What is the purpose of getStaticProps?', answer: 'getStaticProps is used to fetch data at build time in Next.js.' },
];
```

## Implementation:
See the source code at /app/faqs/page.js

Run the app: npm run dev

Expected output:

[![FAQS page](/assets/images/faqs.png)]