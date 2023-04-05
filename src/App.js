import React from 'react';
import Radio from './Form/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [slide, setSlide] = React.useState(0);
  const [answers, setAnswers] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      return { ...acc, [pergunta.id]: '' };
    }, {}),
  );
  const [result, setResult] = React.useState(null);

  function checkResult() {
    const correctAnswers = perguntas.filter(({ id, resposta }) => {
      return answers[id] === resposta;
    });
    setResult(correctAnswers.length);
  }

  function handleClick() {
    if (answers[perguntas[slide].id] === '') return;

    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      checkResult();
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;

    setAnswers({ ...answers, [id]: value });
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          key={pergunta.id}
          active={slide === index}
          question={slide}
          value={answers[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {result ? (
        <p>
          Você acertou: {result} de {perguntas.length}
        </p>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
};

export default App;
