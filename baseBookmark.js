javascript: 
const consumerKey = 'ck_bfbc8b6cdbc1ccf62eb49def197ee64cb6e92e2a';
const consumerSecret = 'cs_c9fe397f7fba7d90684697b2cfcfda51918f5700';
const urlpost = 'https://electronilab.co/wp-json/wc/v3/orders?consumer_key='+consumerKey+'&consumer_secret='+consumerSecret;

(function() {


    function getScript(url, success) {
        var script = document.createElement("script");
        script.src = url;
        var head = document.getElementsByTagName("head")[0],
            done = !1;
        script.onload = script.onreadystatechange = function() {
            !done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (done = !0, success(), script.onload = script.onreadystatechange = null, head.removeChild(script))
        }, head.appendChild(script)
    }
    getScript("//code.jquery.com/jquery.min.js", function() { console.log("jq loaded"); getScript2("https://afcruzb.github.io/ml_bookmark/fuente.js", function() { console.log("fuente loaded") }); });
    
    function getScript2(url, success) {
        var script = document.createElement("script");
        script.src = url;
        var head = document.getElementsByTagName("head")[0],
            done = !1;
        script.onload = script.onreadystatechange = function() {
            !done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (done = !0, success(), script.onload = script.onreadystatechange = null, head.removeChild(script))
        }, head.appendChild(script)
    }

})();