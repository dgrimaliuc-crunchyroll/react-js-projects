import './Concepts.css';

import Concept from '../Concept/Concept';

export default function Concepts({ concepts }) {
  return (
    <ul id='concepts'>
      {concepts.map((element) => {
        return <Concept key={Math.random()} concept={element} />;
      })}
    </ul>
  );
}
