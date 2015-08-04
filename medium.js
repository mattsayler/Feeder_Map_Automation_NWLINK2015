(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('get', './body.md');
    xhr.onload = function () {
        onLoad(xhr.responseText);
    };
    xhr.send();
    function onLoad(pres) {
        marked.setOptions({color: true})
        var md = document.getElementById("md");
        var html = marked(pres);
        console.log(html);
        var startTag = new RegExp("\<(p|h\d?|pre|ul)((?:\s*)?(?:id|class)\=[\'\"]\w+?[\'\"](?:\s*)?)?\>", "g");
        var endTag = new RegExp("\<\/(p|h\d?|pre|ul)\>", "g");
        md.innerHTML = html.replace(startTag, function(match) {console.log(match); var txt = '<div>' + match; console.log(txt); return txt;});
        md.innerHTML = html.replace(endTag, function(match) {console.log(match); var txt = match + '</div>'; console.log(txt); return txt;});
        var s = document.getElementsByTagName('div'), cur = 0;
        if (!s) return;
        function go(n) {
            cur = n||0;
            var i = 1e3, e = s[n];
            for (var k = 0; k < s.length; k++) s[k].style.display = 'none';
            e.style.display = 'inline';
            e.style.fontSize = i + 'px';
            if (e.firstChild.nodeName === 'IMG') {
                document.body.style.backgroundImage = 'url(' + e.firstChild.src + ')';
                e.firstChild.style.display = 'none';
            } else {
                document.body.style.backgroundImage = '';
                if(n%2){
                    e.className = ' even';
                }else{
                    e.className = ' odd';
                  
                }
                document.body.className = e.className;
            }
            while (
                e.offsetWidth > window.innerWidth ||
                e.offsetHeight > window.innerHeight) {
                e.style.fontSize = (i -= 10) + 'px';
                if (i < 0) break;
            }
            e.style.marginTop = ((window.innerHeight - e.offsetHeight) / 2) + 'px';
            if (window.location.hash !== n) window.location.hash = n;
            document.title = e.textContent || e.innerText;
        }
        document.onclick = fwd;
        function fwd() { go(++cur % (s.length)); }
        function rev() {
            --cur < 0 ? go(s.length + cur) : go(cur % (s.length));
        }
        document.onkeydown = function(e) {
            if (e.which === 39) fwd();
            if (e.which === 37) rev();
        };
        document.ontouchstart = function(e) {
            var x0 = e.changedTouches[0].pageX;
            document.ontouchend = function(e) {
                var x1 = e.changedTouches[0].pageX;
                if (x1 - x0 < 0) fwd();
                if (x1 - x0 > 0) rev();
            };
        };
        function parse_hash() {
            return Math.max(Math.min(
                s.length - 1,
                parseInt(window.location.hash.substring(1), 10)), 0);
        }
        if (window.location.hash) cur = parse_hash() || cur;
        window.onhashchange = function() {
            var c = parse_hash();
            if (c !== cur) go(c);
        };

        go(cur);
    }
}());
