# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
To see what the code does and debug as you work.
- What is the purpose of events and event handling?
Mechanisms to listens for user feedback and then creates a event to occur when it is triggered.
- Are all possible parameters required to use a JavaScript method or function?
The event ("click", "mouseover"), and a function to call when the event happens.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
An `addEventListener()` method.
- What is a callback function?
A func that is passed into another func as an argument, to be invoked inside the outer func t complete som ekind of routine or action.
- What object is passed into an event listener callback when the event fires?
The variable that selects the class of the button.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
A reference to the object onto which the event was dispactched. MDN would be the place to start if unsure of the concept.
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
The second one would not work since it is expecting a parameter.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
