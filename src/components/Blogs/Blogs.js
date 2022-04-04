import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row my-5">
                    <div className="col-md-10 mx-auto p-2" >
                        <div className="question-div">
                            <h5>1. What is Context API?</h5>
                            <p>
                                Context provides a means for passing data through the component tree without the need to manually pass props down at each level of the component tree as previously required. It allows you to make particular data visible to all components throughout the component tree, regardless of how deeply a component may be within the tree.
                                React.createContext is used to create a context, which produces an object that represents the current state of the application. Almost any argument you want to send it as a parameter is accepted by React. createContext.
                                In order for our React components to function properly, we must use a Provider to make this context available to all of our React components at once. According to the React documentation, every context object contains a Provider React component, which enables consuming components to subscribe to changes in the context object when the context object changes. It is the provider who enables other components to consume context information by making it possible for them to do so.
                            </p>
                        </div>

                    </div>

                    <div className="col-md-10 mx-auto p-2" >
                        <div className="question-div">
                            <h5>2. What is Semantic Tag?</h5>
                            <p>
                                The most important attribute of a semantic element is that it communicates its meaning to both the developer and the browser in a straightforward manner. These elements clearly define the content of the document. It also specifies the sort of content that should be contained within the element.
                                For example, the semantic elements  {'<header/>,< footer/>, and <article/>'} are recognized because they clearly indicate their purpose as well as the type of information that should be contained within them.  There is a question to be answered. What is the purpose of semantic tags?
                                For the simple reason that it is much easier to read.  It has a higher level of accessibility. In general, semantic elements result in more consistent code in the long run.
                               <br /> Some examples of new semantic elements: <br />
                                {`<article>,<figure>,<footer>,<header>,<main>,<mark>,<nav>,<section>`}
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;