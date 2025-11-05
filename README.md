# coolAlerts - introduction

**By the way, you can use coolAlerts under the MIT licence**.

What exactly is cool alerts?
CoolAlerts is a small extension that currently only has one modal. You can use the modal by integrating it into your project, including this:
```html
<div class="modalIntegration closed" role="dialog" aria-modal="true">
    <h2 id="modalTitle" class="hoverContent"></h2>
    <div id="dialogContent" class="hoverContent"></div>
    <button id="closeBtn" onclick="closeModal()"></button>
</div>
```
To open the modal, you can simply use this function (it must contain the title, description and button name to open the modal):
```js
openModal('title', 'description', 'button')
```
and to close the modal again, simply:
```js
closeModal()
```
I hope you find it useful. If you encounter any bugs or have feature suggestions, please open an Issue on GitHub. For any other ideas or direct inquiries, you can also send me an e-mail. Thank you.
