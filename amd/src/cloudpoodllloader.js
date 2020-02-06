define(['jquery', 'core/log',
        'https://cdn.jsdelivr.net/gh/justinhunt/cloudpoodll@latest/amd/build/cloudpoodll.min.js',
        'core/str'],
    function($, log, CloudPoodll, str) {
        return {
            init: function(recorderclass, thecallback) {
                CloudPoodll.autoCreateRecorders(recorderclass);
                CloudPoodll.theCallback = thecallback;
                CloudPoodll.initEvents();
                $("iframe").on("load", function() {
                    $(".assignsubmission_cloudpoodll_recording_cont").css('background-image', 'none');
                });

                // Load the history template for the history tab; this will call the history mustache template.
                $('.atto_cloudpoodll_form li[data-content="history"]')
                    .on("click", function() {
                        const loadingStr = str.get_string('loading', 'atto_cloudpoodll');
                        const loadingHtml = "<br /><div class=\"d-flex justify-content-center\">\n" +
                            "  <div class=\"spinner-border\" role=\"status\">\n" +
                            "    <span class=\"sr-only\">" + loadingStr + "</span>\n" +
                            "  </div>\n" +
                            "</div><br />";

                        $('#id_introeditor_atto_cloudpoodll_history').html(loadingHtml);

                        Y.namespace('M.atto_cloudpoodll').Button.prototype.loadHistory();
                    });
            }
        };
    });