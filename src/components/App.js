import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayour";
const App = () => {
  return (
    <>
      <PageLayout
      header={<h1>Welcome to My Page</h1>}
      footer={<h3>© {new Date().getFullYear()} MyWebsite</h3>}
    >
      <h3>This is the main content of the page.</h3>
    </PageLayout>
    </>
  );
};

export default App;
