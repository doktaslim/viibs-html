console.log('Hello World');

const template = document.createElement('template');

template.innerHTML = `
  <p>And all who inhabit it</p>
`;

document.body.appendChild(template.content);