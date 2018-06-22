(function(win) {
        var docEl = win.document.documentElement;
        var time=null;
        function refreshRem() {
                var width = docEl.getBoundingClientRect().width;
                if (width > 768) { // 最大宽度
                        width = 768;
                }
                // 将屏幕宽度分成7.5份， 1份为1rem,1rem=100px
                var rem =width/7.5;
                if (rem > 100) {
                        rem = 100
                }
                docEl.style.fontSize = rem + 'px';
        }
        win.addEventListener('resize', function() {
                clearTimeout(time);
                time = setTimeout(refreshRem, 1);
        }, false);
        win.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                        clearTimeout(time);
                        time = setTimeout(refreshRem, 1);
                }
        }, false);
        refreshRem();
})(window);