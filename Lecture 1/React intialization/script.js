const heading = React.createElement(
  "h1",
  { id: "home" },
  "this is my heading from the react"
);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  heading
);
