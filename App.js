
import React from 'react';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="Home">
        <h1>REDDY KARTHKEYA SAHITH REDDY</h1>
        <p>Student at KL University</p>
      </section>
      <section id="About">
        <h1>About </h1>
        <p>Aspring and working to be a good asset with growing skills</p>
        <p>Working as a intern in PRODIGY as a Web Developer</p>
      </section>
      <section id="Services">
        <h1>My Services</h1>
        <p>Software Development, Cloud Services, Prompt Engineering, Power BI, MS tools, Database Development, Ghost Writing, Machine Learning </p>
<ul>
  <li><strong>Software Development:</strong> Custom software solutions tailored to your business needs.</li>
  <li><strong>Cloud Services:</strong> Scalable and secure cloud computing solutions.</li>
  <li><strong>Prompt Engineering:</strong> Creating effective and efficient prompts for AI models.</li>
  <li><strong>Power BI:</strong> Business intelligence and data visualization solutions.</li>
  <li><strong>MS Tools:</strong> Expertise in Microsoft Office Suite and other Microsoft tools.</li>
  <li><strong>Database Development:</strong> Design, implementation, and maintenance of databases.</li>
  <li><strong>Ghost Writing:</strong> Professional writing services for books, articles, and other content.</li>
  <li><strong>Machine Learning:</strong> Developing algorithms and models to enable intelligent systems.</li>
</ul>



        
      </section>
      <section id="Contact">
        <h1>Contact </h1>
        <p>I would love to hear from you! Whether you have a question about my services or need support from myside, I am here to help you.</p>
        <p><strong>Email:</strong> 2200030561@kluniversity.in</p>
        <p><strong>Address:</strong> KL University, Guntur</p>
      </section>
    </div>
  );
};

export default App;
