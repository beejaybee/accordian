import React from 'react';
import data from './data';
import Question from './Question';


const App = () => (

  <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {data.map(question => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </div>
  </main>
)

export default App;
