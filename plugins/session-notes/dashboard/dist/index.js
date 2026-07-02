(function () {
  const SDK = window.__HERMES_PLUGIN_SDK__;
  const { React } = SDK;
  const { Card, CardHeader, CardTitle, CardContent } = SDK.components;

  function MyPage() {
    return React.createElement(Card, null,
      React.createElement(CardHeader, null,
        React.createElement(CardTitle, null, "Session Notes"),
      ),
      React.createElement(CardContent, null,
        React.createElement("p", { className: "text-sm text-muted-foreground" },
          "This is session notes tab.",
        ),
      ),
    );
  }

  function Banner() {
    return React.createElement(Card, null,
      React.createElement(CardContent, { className: "py-2 text-xs" },
        "Remember to label important sessions before archiving"),
    );
  }

  // window.__HERMES_PLUGINS__.register("session-notes", function () { return null; });
  window.__HERMES_PLUGINS__.register("session-notes", MyPage);

  window.__HERMES_PLUGINS__.registerSlot("session-notes", "skills:top", Banner);
  window.__HERMES_PLUGINS__.registerSlot("session-notes", "sessions:top", Banner);
})();