jquery-fullscreen-api
=====================

jQuery plugin for fullscreen api

#example

    <div class="fullscreen">
        <div class="fullscreen-support">is fullscreen support: <span></span></div>
        <span class="fullscreen-toggle">toggle fullscreen</span>
        <input type="text" class="fullscreen-status">
    </div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="jquery.fullscreen.api.min.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function($){
            $('.fullscreen-support span').text($._checkfullscreen());
            $('.fullscreen-status').val($._isfullscreen());
            $('.fullscreen-toggle').on('click',function(e){
                e.preventDefault();
                $('.fullscreen').fullscreentoggle();
            })
            $(window).on('fullscreenchange',function(e,fullscreen){
                $('.fullscreen-status').val(fullscreen);                    
            })
        });
    </script>