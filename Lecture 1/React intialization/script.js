const heading = React.createElement(
  "div",
  { id: "parent" },
 React.createElement('div',{id:'child'},
  [React.createElement('h1',{id:'heading'},
    'this is my first heading'
  ),React.createElement('h2',{id:'heading2'},'this is subheading')]
 )
);


console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  heading
);
