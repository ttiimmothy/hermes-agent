(function () {
  "use strict";

  const SDK = window.__HERMES_PLUGIN_SDK__;
  const { React } = SDK;
  const { Card, CardHeader, CardTitle, CardContent } = SDK.components;

  function MyPage() {
    return React.createElement(Card, null,
      React.createElement(CardHeader, null,
        React.createElement(CardTitle, null, "My Dashboard"),
      ),
      React.createElement(CardContent, null,
        React.createElement("p", { className: "text-sm text-muted-foreground" },
          "This is my dashboard tab.",
        ),
      ),
    );
  }

  window.__HERMES_PLUGINS__.register("my-dashboard", MyPage);
})();