# Project Overview

I was given a web-based application that reads RSS feeds. The original developer of this application left me with an application with an incomplete test suite. That's where you come in

I wrote tests that:

1. Loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty

2. Loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty

3. Ensures the menu element is hidden by default

4. Ensures the menu changes visibility when the menu icon is clicked.

5. Ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container

6. Ensures when a new feed is loaded by the `loadFeed` function that the content actually changes


I was careful that no test was dependent on the results of another. I mad sure callbacks were used to ensure that feeds are loaded before they are tested. And, of courese... I made sure all my tests pass.
