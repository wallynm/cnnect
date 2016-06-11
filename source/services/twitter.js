enyo.kind({
  name: "SmartView.twitterService",
  kind: "enyo.LunaService",
  service: "luna://twitter.com.connect.app.service/",
  method: "auth/test",
});