$(function() {
    /* Test suite - This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is my first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

      it('each has url', function() {
        for(let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.constructor).toBe(String);
          expect(feed.url.length).not.toBe(0);
        }
      });
      });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
      it('each has name', function() {
        for(let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.constructor).toBe(String);
          expect(feed.name.length).not.toBe(0);
        }
    });


    /* New test suite named "The menu" */
  describe('the menu', function(){
        /* This test ensures the menu element is
         * hidden by default.
         */
         it('hidden by default', function(){
           let isHidden = document.body.classList.contains('menu-hidden');
           expect(isHidden).toBe(true);
         });

         /* This test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it('toggles view when icon is clicked', function(){
          let menuIcon = document.querySelector('a.menu-icon-link');
          menuIcon.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(false);
          menuIcon.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done){
           loadFeed(1, done);
         });

         it('has entries in feed contianer', function(){
           let feedContainer = document.querySelector('div.feed');
           expect(feedContainer.children.length).toBeGreaterThan(0);
         });
      });
    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         let firstFeed, secondFeed;

         beforeEach(function(done){
           loadFeed(3,function() {
             firstFeed = document.querySelector('div.feed').innerHTML;
             loadFeed(2, function() {
               secondFeed = document.querySelector('div.feed').innerHTML;
               done();
             });
           });
         });

         it('Loads New Feeds', function(){
           expect(firstFeed).not.toBe(secondFeed);
         });
       });

  }());
