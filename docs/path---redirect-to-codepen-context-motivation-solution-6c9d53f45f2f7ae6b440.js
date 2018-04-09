webpackJsonp([31004571223686],{885:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// Create a theme context, defaulting to light theme\\n// highlight-next-line\\nconst ThemeContext = React.createContext(\'light\');\\n\\nfunction ThemedButton(props) {\\n  // highlight-range{1,3-5}\\n  // The ThemedButton receives the theme from context\\n  return (\\n    <ThemeContext.Consumer>\\n      {theme => <Button {...props} theme={theme} />}\\n    </ThemeContext.Consumer>\\n  );\\n}\\n\\n// An intermediate component\\nfunction Toolbar(props) {\\n  return (\\n    <div>\\n      <ThemedButton />\\n    </div>\\n  );\\n}\\n\\nclass App extends React.Component {\\n  render() {\\n    // highlight-range{2,4}\\n    return (\\n      <ThemeContext.Provider value=\\"dark\\">\\n        <Toolbar />\\n      </ThemeContext.Provider>\\n    );\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-motivation-solution-6c9d53f45f2f7ae6b440.js.map