# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
Reference to the object onto which the event was dispatched.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
Because of propagation. In capturing phase the event goes down the hierarchy to get to the target.
- What DOM element property tells you what type of element it is?
`event.target.tagName`
- What does the `element.closest()` method take as its argument and what does it return?
Pass in the child and returns the parent.
- How can you remove an element from the DOM?
With `remove()`.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
Using a function with if statments to listen for specific targets.

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
