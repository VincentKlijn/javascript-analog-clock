# javascript-analog-clock
This was just a fun little exercise to turn hours, minutes and seconds into an accurate moving analog clock.

### The HTML
The HTML is simple in itself. There might be some interesting bits for those who like to see how the SVG is build within the page itself.

### The CSS
The CSS is quite straightforward.

One note: I have chosen to animate the seconds hand, which does have some implications for both the JavaScript and the workings of the clock. With animation, the drawback is that the clock will stop running when out of focus; this results in a snap back to the correct time when focus returns.

When we remove the animation, we could alter the JavaScript so to fetch the current time at all time. Then the secondshand would snap from second to second, but the clock will always remain accurate, focus or not.

### The JavaScript
The JavaScript library is not that difficult to understand. Const and let are used, so I am working woth ES6. Also, I do prefer the .querySelector() method over .getElementById().

In fact I think the calculations are the best part of it; these are a reference for every time you need to turn hours, minutes and second into degrees on a circle.

## [Take a look at the live working version of this demo.](https://vincentklijn.github.io/javascript-analog-clock/)
