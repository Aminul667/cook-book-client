import React from "react";

const Blog = () => {
  return (
    <div className="mx-9 mt-5">
      <h2 className="text-3xl border-b-2 py-3 mb-8">Blog Post</h2>
      <div className="mb-10">
        <h2 className="text-2xl mb-4">
          Differences between uncontrolled and controlled components
        </h2>
        <p className="mb-3">
          Uncontrolled components are components that manage their own state
          internally. This means that the component manages its own data and
          doesn't need any external help to update or retrieve that data. For
          example, an uncontrolled input field would manage its own value
          internally, without requiring any external state management.
        </p>
        <p>
          Controlled components, on the other hand, rely on external state
          management to manage their state. This means that the state of the
          component is managed by a parent component or another external source,
          and the component receives its data and state through props. For
          example, a controlled input field would receive its value as a prop
          from the parent component, and would also require a function to update
          its value whenever it changes.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl mb-4">
          How to validate React props using PropTypes
        </h2>
        <ol className="list-decimal list-inside">
          <li>
            Import the PropTypes library at the top of your component file.
          </li>
          <li>
            Define the expected type and shape of your props using the propTypes
            property on your component.
          </li>
          <li>
            If a prop with an unexpected type or shape is passed to your
            component, React will log a warning message in the console.
          </li>
        </ol>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl mb-4">
          The difference between Node.js and Express js
        </h2>
        <p className="mb-3">
          Node.js is a runtime environment, while Express.js is a web framework:
          Node.js provides a platform for running JavaScript code on the
          server-side, while Express.js provides a set of features and tools for
          building web applications and APIs on top of Node.js.
        </p>
        <p>
          Express.js is built on top of Node.js: Express.js uses the features
          and capabilities of Node.js to provide an easy-to-use and flexible web
          framework for building web applications and APIs.
        </p>
        <p className="mb-3">
          Express.js provides routing and middleware: Express.js provides a
          routing system that allows developers to define URL paths and HTTP
          methods for handling incoming requests, as well as middleware for
          processing and modifying requests and responses.
        </p>
        <p>
          Node.js provides low-level APIs: Node.js provides low-level APIs for
          file system access, network communication, and other system-level
          tasks, which can be used directly in your application or with a
          framework like Express.js.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl mb-4">
          What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="mb-3">
          A custom hook is a JavaScript function that uses one or more built-in
          React hooks to create a custom behavior or functionality that can be
          reused across multiple components. Custom hooks allow you to extract
          complex or repeated logic from your components and encapsulate it into
          a reusable and composable function.
        </p>
        <p>
          Custom hooks can be used for a variety of purposes, such as managing
          state, fetching data, handling side effects, and encapsulating complex
          behavior. Overall, custom hooks are a powerful tool in your React
          toolkit that can help you write more reusable, maintainable, and
          testable code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
