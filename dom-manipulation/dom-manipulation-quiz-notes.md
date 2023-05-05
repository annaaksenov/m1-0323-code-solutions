# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
Sets or returns an element's class attribute.
- How do you update the CSS class attribute of an element using JavaScript?
Write classname of the element objects and assign it to a new className. (ele.className = 'newClassName).
- What is the `textContent` property of element objects?
Sets or returns the text content of the specified node, and all it's descendants.
- How do you update the text within an element using JavaScript?
`document.getElementById('prop').innerHTML = 'new text!'`
- Is the `event` parameter of an event listener callback always useful?
Yes, if you're using a callback for an event you want to be listened for, a parameter of the specific event is needed.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
Complicated because it is easier to update an already existing variable.
- Why is storing information about a program in variables better than only storing it in the DOM?
Because it's simpler to call the variable then rewrite the DOM.

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
