var checkPageLoadedYet = setInterval(
    function() {
        // when a slack channel is open
        if ( typeof document.getElementsByClassName( 'js-whitelist-notice' )[0] !== 'undefined' ) {

            document.getElementsByClassName( 'js-whitelist-notice' )[0].style.display = 'none';

            clearInterval( checkPageLoadedYet );
        }
    },
    100 // check every 100 ms to see if the page is loaded yet
);
