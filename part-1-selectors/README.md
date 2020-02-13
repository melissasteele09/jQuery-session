# Selectors and the jQuery Object

The jQuery function takes in an element selector string, and outputs a jQuery object.

```JavaScript
$(selector) // => jQuery Object

```

The selection process is similar to using `document.querySelector()`, but has some important differences. Let's take a look at how we can select things with jQuery.

Use the [jQuery Documentation](https://api.jquery.com/) to answer the following questions:

## Questions:
1. How do you select a single element in jQuery? How does this differ from vanilla JS?
  - to select a single element in jquery you would use $(#idName)
  - vanilla js requires a querySelector and ("#//idName")

2. What does the jQuery function return? How is it similar or different from a DOM Element object?
  - jquery returns a wrapper object with methods that you can use.  DOM objects are the objects that the web browser is using to render elements on the web page.

3. How can you select multiple elements with jQuery?
  - $("selector1, selector2, selector3")

4. How can you select multiple elements with different IDs and classes in one selector expression?
  - $("#id1, #id2, #id3")

5. What are the different ways of chaining selectors?
  - by class, id, or element name

6. How do you select elements based on different attributes?
  - .attr( "whateverYouWantToSelectBy" )

7. How do you select a checkbox based on its state?
  - :checked


## Exercises:
Open up the `selectors.html` file in your browser.
In the `selectors.js` file, use jQuery to:
1. Select all the labels and give them a class of "green"
2. Select all of the `phone` inputs and give them a class of "yellow"
3. Select the label for the email input and give it a class of "blue"
4. On page load, log the id of the checked check box (hint: look into the `.attr()` jQuery method)
5. Give all labels inside of a p tag a class of "purple"
6. Give the Clear button a class of red
7. Commit your changes!

Once you're done, head on to [part-2-content](../part-2-content/README.md)
