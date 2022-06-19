import React from 'react';
import Header from './layout_components/header';
import Head from "react-helmet";


function App() {
  return (
    <div className="app">
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Surveys Builder - Sign-in</title>
      </Head>
      <Header />

    </div>
  );
}

export default App;
