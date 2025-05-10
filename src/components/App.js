import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayour";
const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={
        <h3>© {new Date().getFullYear()} My Website. All rights reserved</h3>
      }
    >
      <h3>This is the content of the page.</h3>
    </PageLayout>
  );
};

export default App;
