# A ReadMe for a Portfolio? 

Well, yeah. I did a ton of work to make this thing happen - there are two totally separate deprecated versions running around. 

Also, there's a game integrated into the portfolio, straight into the React Components.

It was unhappy about this.

## Tell Me More About The Whole Two Deprecated Versions Thing

My philosophy towards coding and my philosophy towards games are totally inverse: minimal vs. maximum starting firepower. 
When I'm playing games, I'm what's known as a compulsive overleveller - I'll reach Level 3 quests at Level 6, and never use a healing potion, thank-you.
The scorched-earth approach is fun in a fantasy setting, but in the real world, obliterating the issue tends to cause more problems than it solves.

For example, the second deprecation of this project - I started working in [Semantic](https://semantic-ui.com/), but it was like trying to land a Boeing on a biplane runway. [Prop-Types](https://www.npmjs.com/package/prop-types) is a library I plan on learning how to use eventually, but at present, it seems to me that is too much of a preset system to work for light, quick customization. So I moved to [Reactstrap](https://reactstrap.github.io/) for the final version.

### _(Wait, wasn't there a first deprecation?)_

_Caught me out! I started this project using regular html, JavaScript, etc - and then we learned about [React](https://reactjs.org/blog/2020/10/20/react-v17.html), and I thought - hey, create-react-app will stop me from forgetting critical files and help me route my project more easily. And it did!_

## Fine, Was There Anything Else Cool About Just The Portfolio?

[React-Router](https://reactrouter.com/) is how I get most of the pages from here to there. Turns out Netlify doesn't love you adding external links to their already external service, so this requires a _redirects file. This isn't the most technical addendum, but it's one I find neat.

# The Game ReadMe (Finally!)

We all know what you're here for. The game is - not exactly my code! Surprise, this was **also** a highly deprecated project, with a few versions that are more spaghetti than code. Why's that? 

**If you read any part of this ReadMe intending to foray into the wonderful world of React games, let me warn you: React is not meant for this.**

I knew React wasn't meant for this, but with all the confidence of someone who's never failed a major deadline before, I headed out.

## The Danger Zone: React-Game-Kit and React Game Engine

Let's get this statement out of the way: **I have nothing but respect for @bbrak and Formidable Labs**. Their projects - [React Game Engine](https://github.com/bberak/react-game-engine) and [React-Game-Kit](https://github.com/FormidableLabs/react-game-kit) respectively - are incredibly cool, and must have taken hundreds of hours of work.

**That being said**, I would not recommend these libraries for the new developer. React-Game-Kit is deprecated, and the documentation is sparse. While React Game Engine is still being updated, one of its main features is sifting through controller types - which I simply don't need on my project. Also, it offloads its physics to [Matter.js](https://brm.io/matter-js/). I tried tapping around in that for a bit, but I was an English major in college, and unless we're talking Gravity's Rainbow, physics fell slightly outside of my sphere.

## Out Of The Frying Pan, Into The Refactor

Deadline was encroaching, blood tainting the waters. I'd bugged the DigitalCrafts professor, [Lachlan Heywood](https://github.com/lachieh) about trying to learn physics in 2.5 days too many times. It was decided that instead, I could refactor the code of a game that already existed. 

And so we found [Tiles-of-Gnome](https://codepen.io/Megabyteceer/pen/qbXJMQ) by [Vasily Kostin](https://github.com/Megabyteceer). It was decided - I would string apart the code into different components, smooth some things out, add my own sprites.



