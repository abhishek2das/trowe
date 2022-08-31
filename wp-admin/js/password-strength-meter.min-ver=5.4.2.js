/*! This file is auto-generated */
(window.wp = window.wp || {}),
  (function (l) {
    (wp.passwordStrength = {
      meter: function (n, e, t) {
        return (
          l.isArray(e) || (e = [e.toString()]),
          n != t && t && 0 < t.length
            ? 5
            : void 0 === window.zxcvbn
            ? -1
            : zxcvbn(n, e).score
        );
      },
      userInputBlacklist: function () {
        var n,
          e,
          t,
          r,
          i = [],
          o = [],
          a = [
            "user_login",
            "first_name",
            "last_name",
            "nickname",
            "display_name",
            "email",
            "url",
            "description",
            "weblog_title",
            "admin_email",
          ];
        for (
          i.push(document.title), i.push(document.URL), e = a.length, n = 0;
          n < e;
          n++
        )
          0 !== (r = l("#" + a[n])).length &&
            (i.push(r[0].defaultValue), i.push(r.val()));
        for (t = i.length, n = 0; n < t; n++)
          i[n] && (o = o.concat(i[n].replace(/\W/g, " ").split(" ")));
        return (o = l.grep(o, function (n, e) {
          return !("" === n || n.length < 4) && l.inArray(n, o) === e;
        }));
      },
    }),
      (window.passwordStrength = wp.passwordStrength.meter);
  })(jQuery);
