# Intro to React - Day 3

## Agenda

1. Day 2 Recap
2. HTTP Request Response Cycle
3. Introduction to React.js
4. Exercise: Composing Components
5. Quiz: Core React Concepts
6. Hooks
7. The State Hook
8. The Effect Hook

## Overview

A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties. Classes are also a template for creating objects and are Es6 versions of constructor functions. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics. In React, components come in three types, Class components, function components, and functional components. Hooks are a new feature that allow you to use React features that were once reserved for classes within functional components such as state and lifecyle methods.

### Learning Goals

In this lesson we:

- Learn how to programatically make objects using constructor functions and a newer Es6 syntax of class

- Define the base React API and explore its use cases in a trivial sandbox environment

- Explore and practice a new React concept called hooks which allow you to use React features that used to be reserved for class components such as state and lifecycle methods

### Constructor Functions & Classes in Vanilla JS

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:

```javascript
const myFather = new Person("John", "Doe", 50, "blue");

const myMother = new Person("Sally", "Rally", 48, "green");
```

#### **The `this` Keyword**

In JavaScript, the thing called `this` is the object that "owns" the code.

The value of `this`, when used in an object, is the object itself.

In a constructor function `this` does not have a value. It is a substitute for the new object. The value of `this` will become the new object when a new object is created.

#### **Classes**

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class "Rectangle" below:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

An important difference between function declarations and class declarations is that **function declarations are hoisted and class declarations are not**. You first need to declare your class and then access it.

#### **Strict Mode**

The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

### **`constructor()`**

The constructor method is a special method of a class for creating and initializing an object of that class.

> A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a **base class**, the default constructor is empty:

If your class is a **derived class**, the default constructor calls the parent constructor, passing along any arguments that were provided:

```Javascript
constructor(...args) {
    super(...args)
}
```

- args for us (in react-land) are what we use to pass information between components ... aka props!

There can be only one special method with the name "constructor" in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.

> A constructor can use the super keyword to call the constructor of the super class.

#### **Static Methods & Properties**

The `static` keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

## 1. Day 2 Recap

- [Node.js](https://nodejs.org/en/)

- Git: [[Learning Resources](https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources), [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [Git Cheat Sheet](https://coursework.vschool.io/git-commands-and-workflows-cheat-sheet/)]

- Control Flow & Conditionals

- Javascipt & First Class Functions

- Arrays

- Javascript & The Browser

- The Document Object Model

- Events

## 2. HTTP Request Response Cycle

## 3. Introduction to React.js

### React Dev Tools

Does eveyone have these installed? if not install now. Google react dev tools and install the chrome extension. Restart browser if promt.

### React.js

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code **more predictable** and easier to debug.

#### **Components**

React is component-based, meaning you can build **encapsulated** components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

**Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.**

#### **Props**

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

> Props are immutable! You must treat them as read-only.

Whether you declare a component as a function or a class, it must never modify its own props.

React is pretty flexible but it has a single strict rule:

_**All React components must act like pure functions with respect to their props.**_

Functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

#### **State**

State is similar to props, but it is private and fully controlled by the component.

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

>Internal state alows for true encapsulation and reusability.

#### **Do Not Modify State Directly**

Instead, use `setState()`. The only place where you can assign this.state is the _constructor_.

State updates may be asynchronous.Meaning, react may batch multiple `setState()` calls into a single update for performance. Because of this, `props` and `this.state` may be updated asynchronously, **you should not rely on their values for calculating the next state.**

_Read:_ [📕 Introduction to React](https://academy.engagelms.com/mod/book/view.php?id=127995)

_Read:_ [📕 React Toolchain](https://academy.engagelms.com/mod/book/view.php?id=127996)

_Practice:_ [🛠 Code-Along: Set up a React Toolchain](https://academy.engagelms.com/mod/book/view.php?id=127997)

_Read:_ [📕 Set Up a React App](https://academy.engagelms.com/mod/book/view.php?id=127998)

_Read:_ [📕 React Components](https://academy.engagelms.com/mod/book/view.php?id=127999)

_Practice:_ [🛠 Code-Along: Create a React Component](https://academy.engagelms.com/mod/book/view.php?id=128000)

## 4. Exercise: Composing Components

_Test yourself:_ [🧪 Exercise: Composing Components](https://academy.engagelms.com/mod/page/view.php?id=128001)

## 5. Quiz: Core React Concepts

[Intro to React Quiz](https://academy.engagelms.com/mod/quiz/view.php?id=128003)

## 6. Hooks

[Hooks are a new addition in React 16.8](https://www.youtube.com/watch?v=dpw9EHDh2bM). They let you use state and other React features without writing a class.

**No Breaking Changes!!**

Before we continue, note that Hooks are:

- **Completely opt-in.** You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.

- **100% backwards-compatible.** Hooks don’t contain any breaking changes.

- **Available now.** Hooks are now available with the release of v16.8.0.

- **There are no plans to remove classes from React.** You can read more about the gradual adoption strategy for Hooks in the bottom section of this page.

**Hooks don’t replace your knowledge of React concepts.** Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle — hooks also offer a new powerful way to combine them.

### Motivation

Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.

>It’s hard to reuse stateful logic between components

React doesn’t offer a way to “attach” reusable behavior to a component (for example, connecting it to a store). If you’ve worked with React for a while, you may be familiar with patterns like render props and higher-order components that try to solve this. But these patterns require you to restructure your components when you use them, which can be cumbersome and make code harder to follow. If you look at a typical React application in React DevTools, you will likely find a “wrapper hell” of components surrounded by layers of providers, consumers, higher-order components, render props, and other abstractions. While we could filter them out in DevTools, this points to a deeper underlying problem: React needs a better primitive for sharing stateful logic.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. **Hooks allow you to reuse stateful logic without changing your component hierarchy.** This makes it easy to share Hooks among many components or with the community.

> Complex components become hard to understand

We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in `componentDidMount` and `componentDidUpdate`. However, the same `componentDidMount` method might also contain some unrelated logic that sets up event listeners, with cleanup performed in `componentWillUnmount`. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.

In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. It’s also difficult to test them. This is one of the reasons many people prefer to combine React with a separate state management library. However, that often introduces too much abstraction, requires you to jump between different files, and makes reusing components more difficult.

To solve this, **Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)**, rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.

> Classes confuse both people and machines

In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how `this` works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props, state, and top-down data flow perfectly well but still struggle with classes. The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.

Additionally, React has been out for about five years, and we want to make sure it stays relevant in the next five years. As Svelte, Angular, Glimmer, and others show, ahead-of-time compilation of components has a lot of future potential. Especially if it’s not limited to templates. Recently, we’ve been experimenting with component folding using Prepack, and we’ve seen promising early results. However, we found that class components can encourage unintentional patterns that make these optimizations fall back to a slower path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable. We want to present an API that makes it more likely for code to stay on the optimizable path.

To solve these problems, **Hooks let you use more of React’s features without classes**. Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.

_Read:_ [📕 React Hooks](https://academy.engagelms.com/mod/page/view.php?id=128004)

## 7. The State Hook

`useState` is a way to “preserve” some values between function calls.

_Read:_ [📕 The State Hook](https://academy.engagelms.com/mod/page/view.php?id=128005)

_Practice:_ [🛠 Code-Along: Create an Interactive Search Bar for the Contact List](https://academy.engagelms.com/mod/book/view.php?id=128006)

## 8. The Effect Hook

By using this Hook, `useEffect`, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

_Read:_ [📕 The Effect Hook](https://academy.engagelms.com/mod/page/view.php?id=128007)

_Practice:_ [🛠 Code-Along: Add Side Effects to Search The Contact List](https://academy.engagelms.com/mod/book/view.php?id=128008)

## Summary

Facebook's javascript framework, React, is one of the most powerfull, popular, in-demand programming paradiagms on the planet. React is declarative, making it painless to create interactive UIs. Declarative views make your code more predictable and easier to debug.

> Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the computationally expensive DOM.

React empowers you to create encapsulated components that manage their own state, then compose them to make complex UIs.

> React is component-based

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

### References

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
