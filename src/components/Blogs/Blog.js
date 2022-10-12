import Accordion from 'react-bootstrap/Accordion';

function Blog() {
    return (
        <section className='container my-5'>
            <h3 className='text-center mb-5 text-primary'>The Question To Answer Section</h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What IS the Purpose Of React Router ?</Accordion.Header>
                    <Accordion.Body>
                        React Router is a standard library for routing in React.     ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How Does Context Api Work ?</Accordion.Header>
                    <Accordion.Body>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Details About "useRef" In React ?</Accordion.Header>
                    <Accordion.Body>
                        The <b>useRef</b> Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. "useRef()" only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0).
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    );
}

export default Blog;