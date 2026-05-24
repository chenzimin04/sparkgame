pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        var image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYMAAAILCAMAAAA9sQAIAAABI1BMVEUalMb////////////////wfQDwfQDwfQDwfQD////wfQAalMYalMb////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wfQH////////////wfQD////////////////////////////////wfQD////////////wfQD////wfQDwfQD////wfQD////wfQD////wfQDwfQDwfQD////wfQDwfQHwfQDwfQDwfQDwfQDwfQDwfQDwfQDwfQAalMYalMYalMb////wfQC5hfRWAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBAsPGQpewXTFAAAA3ElEQVR42u3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgwwAY2QABF7FjeAAAAABJRU5ErkJggg==';
        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        document.body.appendChild(splash);

        var logo = document.createElement('img');
        // replace with your logo
        logo.src = image;
        splash.appendChild(logo);

        var percentage = document.createElement('div');
        percentage.id = 'progress-percentage';
        percentage.innerHTML = "<span style='color: white; font-size: 150%; text-align: center;'>" + 0 + "%" + "</span>";
        splash.appendChild(percentage);

        // progress bar
        var container = document.createElement('div');
        container.id = 'progress-container';
        splash.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);
    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash');
        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        var percentage = document.getElementById('progress-percentage');
        if (bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';

            try {
                window.famobi.setPreloadProgress(value * 100);
            } catch (e) {

            }
            if (percentage) {
                percentage.innerHTML = "<span style='color: white; font-size: 150%;'>" + Math.floor(value * 100) + "%" + "</span>";
            }
        }
    };

    var createCss = function () {
        var css = [
            '#application-splash {',
            '    position: absolute;',
            '    top: 42%;',
            '    width: 10%;',
            '    left: 45%;',
            '    text-align: center;',
            '}',

            '#application-splash img {',
            '    width: 100%;',
            '}',

            '#progress-container {',
            '    width: 100%;',
            '    height: 2px;',
            '    position: absolute;',
            '    background-color: #444;',
            '}',

            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color: white;',
            '}'
        ].join('\n');

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };


    createCss();

    showSplash();
    // app.on('start', hideSplash);

    app.once('GameManager:ready', hideSplash);
    
    app.on("preload:end", function () {
        app.off("preload:progress");
    });
    app.on("preload:progress", setProgress);
});
