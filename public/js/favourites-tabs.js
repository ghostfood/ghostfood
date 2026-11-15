(function () {
    var tabs = document.getElementById('tabs');
    if (!tabs || !window.jQuery || !window.jQuery.fn.tab) return;

    var links = Array.from(tabs.querySelectorAll('a[data-toggle="tab"]'));
    var defaultLink = links.find(function (link) {
        return link.classList.contains('active');
    });
    var restoring = false;

    function showFromHash() {
        var id = window.location.hash.slice(1);
        var target = id && document.getElementById(id);
        var pane = target && target.closest('.tab-pane');
        var link = pane && links.find(function (item) {
            return item.getAttribute('href') === '#' + pane.id;
        });

        if (!id) link = defaultLink;
        if (!link || link.closest('.d-none') || (pane && pane.classList.contains('d-none'))) return;

        restoring = true;
        window.jQuery(link).tab('show');
        restoring = false;

        if (target && target !== pane) {
            requestAnimationFrame(function () {
                target.scrollIntoView();
            });
        }
    }

    window.jQuery(tabs).on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
        var hash = this.getAttribute('href');
        if (!restoring && window.location.hash !== hash) {
            window.history.pushState(null, '', hash);
        }
    });

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            var hash = link.getAttribute('href');
            if (link.classList.contains('active') && window.location.hash !== hash) {
                window.history.pushState(null, '', hash);
            }
        });
    });

    var topLink = document.getElementById('top');
    if (topLink) {
        topLink.addEventListener('click', function (event) {
            event.preventDefault();
        });
    }

    window.addEventListener('hashchange', showFromHash);
    showFromHash();
}());
