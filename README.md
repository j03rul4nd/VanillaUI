# VanillaUI

VanillaUI is a lightweight JavaScript library for creating simple and customizable user interface components using vanilla JavaScript (no external libraries or frameworks required).

## Features

- Create custom buttons, modals, and other UI components with ease.
- Customize the appearance and behavior of components to fit your project's needs.
- No dependencies, just pure JavaScript.

## Getting Started

To get started with VanillaUI, follow these simple steps:

1. Include the VanillaUI script and css in your HTML:
```html
   <link rel="stylesheet" href="https://unpkg.com/vanillaui@1.0.0/dist/vanillaui.css"/>
   <script src="https://unpkg.com/vanillaui@1.0.0/dist/vanillaui.js"><script>
```
2. Create an HTML container element where you want to render your components:  
```html 
    <div id="vanillaui-container"></div>
```
3. Initialize and use the components:

```javascript
// Create a custom button
const container = document.getElementById('vanillaui-container');
const myButton = VanillaUI(container).createButton('Click Me');

// Customize the appearance and behavior of components
const customModal = VanillaUI(container).createModal({
  title: 'My Custom Modal',
  content: 'This is a custom modal.',
  onClose: () => alert('Modal closed'),
});
```

## Documentation
For detailed documentation and usage examples, visit our Wiki.

## Contributing
We welcome contributions from the open-source community. Feel free to open issues, h3mit pull requests, or provide feedback to help us improve VanillaUI.

## License
This project is licensed under the MIT License - see the LICENSE file for details.