## CoolAlerts - README

CoolAlerts is an open-source software that takes away the "paperwork" like accessibility and logic for alerts. Below is a small directory with explanations and examples.

### Installation

To load the modal extension into your project, use this command in your HTML:

```html 
    <script src="https://cdn.jsdelivr.net/gh/DedeProgrammer/coolalerts@main/dist/coolalerts.min.js"></script>
```

Here are a few functions of CoolAlerts:

```js
    coolalerts.setTheme('color');
```

Or for example:

```js
    coolalerts.setFont("'Open Sans', cursive");
```

Note: The font must be loaded into the HTML file beforehand.

### Modal

A modal is responsible for delivering text easily – basically a text window.

You can open it with:
```js
    coolalerts.toggleModal('Modal Title', 'Modal Content', 'Button Name');
```

That is the "way to go". Here are a few bonus functions:
```js
    coolalerts.modalGet('title', 'footer' or 'content');
    //let modalTitle = coolalerts.modalGet('title');
    //console.log(coolalerts.modalGet('content'));
    //coolalerts.modalGet('footer');
```

Or:
```js
    (async () => {
        // To confirm the "button was pressed" event with 'true' when clicked:
        console.log(await coolalerts.modalCallback());
    })();
```

(But beware: In this development phase, there is no feedback yet if the modal is cancelled).

### Notes

A more detailed explanation for using the full library (ESM/Modules) will be added during 2026.


More extensions will be added in the near future!
