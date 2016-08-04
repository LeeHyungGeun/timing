var timing = (function timing () {
    'use strict';
    var _window = window || this,
        perfData = {
            "connectEnd": null,
            "connectStart": null,
            "domainLookupStart": null,
            "domainLookupEnd": null,
            "domComplete": null,
            "domContentLoadedEventEnd": null,
            "domContentLoadedEventStart": null,
            "domInteractive": null,
            "domLoading": null,
            "fetchStart": null,
            "loadEventEnd": null,
            "loadEventStart": null,
            "navigationStart": null,
            "redirectEnd": null,
            "redirectStart": null,
            "requestStart": null,
            "responseEnd": null,
            "responseStart": null,
            "secureConnectionStart": null,
            "unloadEventEnd": null,
            "unloadEventStart": null
        },
        perfRange = {
            "promptForUnload": null,
            "redirect": null,
            "appCache": null,
            "dns": null,
            "tcp": null,
            "request": null,
            "unload": null,
            "response": null,
            "domContentLoaded": null,
            "processing": null,
            "load": null,
            "pageLoadTime": null,
            "connectTime": null
        };

    function _getPerfData () {
        perfData = _window.performance.timing;
        perfRange.promptForUnload = perfData.navigationStart;
        perfRange.redirect = perfData.redirectEnd - perfData.redirectStart;
        perfRange.appCache = perfData.domainLookupStart - perfData.fetchStart;
        perfRange.dns = perfData.domainLookupEnd - perfData.domainLookupStart;
        perfRange.request = perfData.responseStart - perfData.requestStart;
        perfRange.unload = perfData.unloadEventEnd - perfData.unloadEventStart;
        perfRange.response = perfData.responseEnd - perfData.responseStart;
        perfRange.domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
        perfRange.processing = perfData.domComplete - perfData.domLoading;
        perfRange.load = perfData.loadEventEnd - perfData.loadEventStart;
        perfRange.pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        perfRange.connectTime = perfData.responseEnd - perfData.requestStart;

        for (var key in perfRange) {
            console.log(key + ':' + perfRange[key]);
        }
    }

    return {
        getPerfData: _getPerfData
    };


}());



// function getPerformanceData () {
//     perfData = window.performance.timing;
// }

// function getPerformanceFeedback () {
//     perfRange.promptForUnload = perfData.navigationStart;
//     perfRange.redirect = perfData.redirectEnd - perfData.redirectStart;
//     perfRange.appCache = perfData.domainLookupStart - perfData.fetchStart;
//     perfRange.dns = perfData.domainLookupEnd - perfData.domainLookupStart;
//     perfRange.request = perfData.responseStart - perfData.requestStart;
//     perfRange.unload = perfData.unloadEventEnd - perfData.unloadEventStart;
//     perfRange.response = perfData.responseEnd - perfData.responseStart;
//     perfRange.domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
//     perfRange.processing = perfData.domComplete - perfData.domLoading;
//     perfRange.load = perfData.loadEventEnd - perfData.loadEventStart;
//     perfRange.pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
//     perfRange.connectTime = perfData.responseEnd - perfData.requestStart;
// }
// function showFeedback() {
//     console.log('pageLoadTime: ', perfRange.pageLoadTime);
//     console.log('connectTime: ', perfRange.connectTime);
// }


// function _default () {
//     var perfData = window.performance.timing; 
//     var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
//     var connectTime = perfData.responseEnd - perfData.requestStart;
//     console.group('DEBUG FOR NAVIGATION TIMING');

//     console.log('pageLoadTime: ', pageLoadTime);
//     console.log('connectTime: ', connectTime);
//     console.groupEnd();
// }
