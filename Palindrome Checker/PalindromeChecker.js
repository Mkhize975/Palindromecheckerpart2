// Create and style the entire app using JavaScript

// Create main container
const body = document.body;
body.style.fontFamily = 'Arial, sans-serif';
body.style.padding = '2rem';
body.style.backgroundColor = '#f2f2f2';
body.style.textAlign = 'center';

// Create checker container
const container = document.createElement('div');
container.id = 'checker-container';
container.style.backgroundColor = 'white';
container.style.padding = '2rem';
container.style.borderRadius = '10px';
container.style.maxWidth = '400px';
container.style.margin = 'auto';
container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
body.appendChild(container);

// Title
const title = document.createElement('h2');
title.textContent = 'Palindrome Checker';
container.appendChild(title);

// Input field
const input = document.createElement('input');
input.type = 'text';
input.id = 'text-input';
input.placeholder = 'Enter text...';
input.style.width = '80%';
input.style.padding = '0.5rem';
input.style.marginBottom = '1rem';
container.appendChild(input);

// Line break
container.appendChild(document.createElement('br'));

// Button
const button = document.createElement('button');
button.id = 'check-btn';
button.textContent = 'Check';
button.style.padding = '0.5rem 1rem';
button.style.fontWeight = 'bold';
container.appendChild(button);

// Result paragraph
const result = document.createElement('p');
result.id = 'result';
result.style.marginTop = '1rem';
result.style.fontSize = '1.2rem';
container.appendChild(result);

// Logic for palindrome checking
button.addEventListener('click', () => {
  const originalText = input.value;
  if (!originalText) {
    alert('Please input a value');
    return;
  }

  const cleaned = originalText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');

  if (cleaned === reversed) {
    result.textContent = `${originalText} is a palindrome.`;
  } else {
    result.textContent = `${originalText} is not a palindrome.`;
  }
});
