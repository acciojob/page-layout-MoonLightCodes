import React from "react";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to My Website</h1>}
      footer={<h3>© {new Date().getFullYear()} My Website. All rights reserved.</h3>}
    >
      <p>This is the content of the page.</p>
    </PageLayout>
  );
};

export default App;
