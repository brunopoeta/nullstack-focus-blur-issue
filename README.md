# Nullstack focus blur issue

## Description of the issue

For some reason, `onfocus` and `onblur` won't work together on `production` mode but run fine on `dev` mode.

It looks like only one of those run (the first one that is set on the input element) on `production` mode.

## To reproduce the issue

Run `npm install` and after that run `npm start`. There's an input there. Click on it and click outside. You'll see two entries on console - `FOCUS` and `BLUR`.

Run `npm run build` and try the same thing. Check the console and there's only one entry there `FOCUS` - `onblur` won't be triggered in this mode for some reason.

You can also change the order of the events on `Home.jsx` and you'll see that the first event is always that one that is triggered and the other is not triggered.