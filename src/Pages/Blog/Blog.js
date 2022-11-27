import React from 'react';

const Blog = () => {
    return (
       <div className=' py-12'>
         <div className=' '>
            <div>
                <p className='text-2xl font-semibold'>What Are The Different Ways To Manage A State In A React Application?</p>
            </div>
            <div>
                <p className='font-semibold px-20 mt-3 text-justify'>
                    <p className=' text-xl font-semibold'>Answer: </p>
                    When it comes to manage the state in a react component there are a few ways to do it. So first we are going to define what is a state and a component
                    <br /><br />
                    React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as “props”
                    <br /><br />
                    The State of a component is a set of methods to manage what is happening inside of it. For example you have the method ComponentWillMount() that executes when the component gets rendered and let you write code to make an API call when the component gets rendered or assign some data to the component.
                </p>
            </div>
            <div>
                <p className='text-2xl font-semibold mt-10'>How Does Prototypical Inheritance Work?</p>
            </div>
            <div>
                <p className='font-semibold px-20 mt-3 text-justify'>
                    <p className='text-xl font-semibold'>Answer: </p>
                    I want to know how JavaScript's Prototypal inheritance works.When we are creating an object with the new keyword the object's __proto__ is set to Constructor_Function.prototype .
                    <br /><br />

                    Maybe have a read about JavaScript Object prototypes? They make it possible to patch code of objects you inherit from. If you just ask yourself "why is this self-referencial 3 times?" stop yourself and understand it in broad strokes. There are three prototype objects because the language doesn't lie to you. It's just how many there are for a function. Why is this a problem in your case? –
                    Peter Krebs
                    Nov 10, 2021 at 14:37
                    It's not a problem,like I said it's just I can't Understand why I am getting this ouptut.Are [[Prototype]]
                </p>
            </div>
            <div>
                <p className='text-2xl font-semibold'>What Is A Unit Test? Why Should We Write Unit Tests?</p>
            </div>
            <div>
                <p className='font-semibold px-20 mt-3 text-justify'>
                    <p className='text-xl font-semibold'>Answer: </p>
                    A unit test, as Agile teams understand the term, is a short program fragment written and maintained by the developers on the product team, which exercises some narrow part of the product’s source code and checks the results. The outcome of a unit test is binary: either “pass” if the program’s behavior is consistent with the recorded expectations, or “fail” otherwise. Developers will typically write a large number of unit tests (corresponding to a large number of program behaviors of interest), called a “test suite”. By common convention dating back at least to the JUnit family of tools, the color red (as in “getting a red bar”) represents the failure of one or more tests. The color green (“a green bar”) denotes successful execution of “all” unit tests associated with a program.
                    <br /><br />

                    I will list the reasons that I consider most relevant without claiming that the list is the best or the most complete. Actually, if you are reading this, please feel free to comment and give me feedback, even by suggesting what you think I should add to the list.Also, this reduces the cost of bug fixes, since finding a bug in a later stage, such as acceptance testing, means that the issue is most likely the result of many changes and it might take some time to figure out which one caused the current issue.
                </p>
            </div>
            <div>
                <p className='text-2xl font-semibold'>React Vs Angular Vs Vue?</p>
            </div>
            <div>
                <p className='font-semibold px-20 mt-3 text-justify'>
                    <p className='text-xl font-semibold'>Answer: </p>
                    <p className='text-xl font-semibold'>React</p>
                    React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                    React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                    Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.
                    <br /><br />
                    <p className='text-xl font-semibold'>Angular</p>
                    In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.

                    AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                    Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                    Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.
                    <br /><br />
                    <p className='text-xl font-semibold'> Vue</p>
                    The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                    Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.

                    Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.
                </p>
            </div>
        </div>
       </div>
    );
};

export default Blog;