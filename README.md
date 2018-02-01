# STRPG-world-atlas
## A really nerdy dataset that I'm using to learn frameworks.
This started as an AngularJS experiment, and I found myself tossing a bunch of other stuff into the mix so I could learn those things too. I mainly just wanted to tinker and I had no overall plan for the app. The result is a terrible user interface with nicely working internal parts.

I wound up ditching AngularJS because the next version was going to be totally different, but I wanted to revisit this thing and maybe make it a bit more user-friendly. By then I was tinkering with ReactJS, so I started again with the same data. I'm also learning VueJS right now, so this thing sort of became my personal Rosetta Stone. I'm going to make this app over and over again with different frameworks.

So in the end, I'll have the <em>(user-hostile but functional)</em> AngularJS version, a React version, an Vue version and then maybe a modern Angular version. The data will remain the same, and the map will probably remain in it's current SVG form from now on.

## What's this data all about, anyway?
That's... very nerdy. There was a <a target="_blank" href="https://en.wikipedia.org/wiki/Star_Trek:_The_Role_Playing_Game">Star Trek role-playing game</a> in the 80's, and the people who wrote the sourcebooks were also writing Star Trek novels at the time. So the background information and the setting are written pretty well, and it's a major source of nostalgia for me.

One of the sourcebooks was about a place called the Triangle, and it had info on 120 planets. Lots of info. Coordinates, history, climate, a trade profile to determine what goods would be bought and sold there, etc.

I have digital copies of the books, so I OCR scanned them and fixed the typos. <em>(Yeah, I really did that.)</em> Then I tossed everything into some Google spreadsheets, which I use as a data source. Since this stuff isn't going to change very often and I don't want to hit my Google account on every page load, I copied the JSON results to some files. I just pull them locally in the app.