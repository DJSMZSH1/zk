;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M702.699388 60.945047 321.284238 60.945047c-57.463044 0-104.022314 46.591131-104.022314 104.018052l0 693.454702c0 57.426921 46.560293 104.019075 104.022314 104.019075l381.416174 0c57.463044 0 104.022314-46.592155 104.022314-104.019075L806.722726 164.963099C806.722726 107.537202 760.163456 60.945047 702.699388 60.945047zM477.317197 95.617731l69.349233 0c9.582632 0 17.336541 7.754614 17.336541 17.33583 0 9.582239-7.753909 17.336854-17.336541 17.336854l-69.349233 0c-9.581609 0-17.336541-7.754614-17.336541-17.336854C459.980656 103.372346 467.735588 95.617731 477.317197 95.617731zM511.992325 920.077116c-24.482581 0-44.324277-19.840884-44.324277-44.322461 0-24.480554 19.84272-44.322461 44.324277-44.322461 24.481557 0 44.324277 19.84293 44.324277 44.322461C556.317626 900.237255 536.473882 920.077116 511.992325 920.077116zM737.373493 771.736603c0 9.582239-7.753909 17.33583-17.336541 17.33583L303.946674 789.072433c-9.582632 0-17.337564-7.753591-17.337564-17.33583L286.60911 182.299953c0-9.582239 7.754932-17.33583 17.337564-17.33583l416.090278 0c9.582632 0 17.336541 7.754614 17.336541 17.33583L737.373493 771.736603z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconset0219" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M981.333333 320c0-4.266667-2.133333-8.533333-4.266667-12.8l0 0-2.133333-2.133333c0 0 0-2.133333-2.133333-2.133333L721.066667 51.2l0 0C716.8 46.933333 710.4 42.666667 704 42.666667L320 42.666667c-6.4 0-12.8 4.266667-17.066667 8.533333l0 0L49.066667 305.066667c0 0-2.133333 0-2.133333 2.133333l-2.133333 2.133333 0 0C44.8 311.466667 42.666667 315.733333 42.666667 320c0 4.266667 2.133333 8.533333 4.266667 12.8l0 0 448 640 0 0c4.266667 4.266667 10.666667 8.533333 17.066667 8.533333s12.8-4.266667 17.066667-8.533333l0 0 448-640 0 0C979.2 328.533333 981.333333 324.266667 981.333333 320zM695.466667 85.333333l213.333333 213.333333-192 0-106.666667-213.333333L695.466667 85.333333zM563.2 85.333333l106.666667 213.333333L354.133333 298.666667l106.666667-213.333333L563.2 85.333333zM328.533333 85.333333l85.333333 0-106.666667 213.333333-192 0L328.533333 85.333333zM104.533333 341.333333l198.4 0 149.333333 497.066667L104.533333 341.333333zM512 885.333333 347.733333 341.333333l326.4 0L512 885.333333zM569.6 838.4l149.333333-497.066667 198.4 0L569.6 838.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M235.097 699.133c12.288 36.45 51.285 64.49 89.676 64.49h555.656l5.22-18.165 123.439-429.613c12.3-42.813-15.9-80.631-60.036-80.631H424.585c-13.793 0-24.975 11.265-24.975 25.162 0 13.897 11.182 25.162 24.975 25.162h524.467c10.872 0 15.11 5.682 12.054 16.314L837.668 731.465l23.99-18.166H324.774c-17.03 0-36.983-14.347-42.378-30.35L73.6 63.566c-4.436-13.158-18.62-20.203-31.68-15.734-13.061 4.47-20.054 18.76-15.618 31.918l208.795 619.383zM399.61 902.017c0-55.587-44.728-100.65-99.903-100.65-55.174 0-99.902 45.063-99.902 100.65s44.728 100.65 99.902 100.65c55.175 0 99.903-45.063 99.903-100.65z m-149.854 0c0-27.794 22.364-50.325 49.951-50.325 27.588 0 49.952 22.531 49.952 50.325 0 27.794-22.364 50.325-49.952 50.325-27.587 0-49.95-22.531-49.95-50.325z m674.342 0c0-55.587-44.728-100.65-99.903-100.65-55.174 0-99.902 45.063-99.902 100.65s44.728 100.65 99.902 100.65c55.175 0 99.903-45.063 99.903-100.65z m-149.854 0c0-27.794 22.364-50.325 49.951-50.325s49.951 22.531 49.951 50.325c0 27.794-22.364 50.325-49.95 50.325-27.588 0-49.952-22.531-49.952-50.325z" fill="#272636" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zaixianzixun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M902.4 364.8C844.8 211.2 691.2 96 512 96S179.2 204.8 121.6 364.8c-32 6.4-57.6 32-57.6 70.4v121.6c0 25.6 19.2 51.2 38.4 64 38.4 166.4 185.6 300.8 358.4 320 19.2 12.8 38.4 19.2 64 19.2h64c44.8 0 76.8-32 76.8-76.8s-32-76.8-76.8-76.8h-64c-25.6 0-44.8 12.8-57.6 32C332.8 819.2 224 716.8 192 588.8c6.4-12.8 12.8-19.2 12.8-38.4V435.2 416c38.4-128 160-224 307.2-224s268.8 96 307.2 224V556.8c0 38.4 32 70.4 70.4 70.4h6.4c38.4 0 70.4-32 70.4-70.4V435.2c-6.4-38.4-32-64-64-70.4zM288 473.6a1.1 1.1 0 1 0 140.8 0 1.1 1.1 0 1 0-140.8 0zM620.8 473.6a1.1 1.1 0 1 0 140.8 0 1.1 1.1 0 1 0-140.8 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)