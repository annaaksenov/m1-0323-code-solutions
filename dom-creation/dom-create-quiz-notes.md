# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
It does not insert but does create an element.
- How do you add an element as a child to another element?
Using `appendChild()` to the parent and insert the child in the ().
- What do you pass as the arguments to the `element.setAttribute()` method?
Name of attribute and its value.
- What steps do you need to take in order to insert a new element into the page?
1st create an element within the document and assign it to a variable for best practice. Then append it to an already existing element if any.
- What is the `textContent` property of an element object for?
To represent text content of the node.
- Name two ways to set the `class` attribute of a DOM element.
With className or `setAttribute('class', 'nameOfClass')`
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
Updatable with user interaction and efficent with less code needed to write.

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
