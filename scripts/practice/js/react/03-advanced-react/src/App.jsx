import S0101 from './tutorial/01-useState/starter/01-error-example';
import S0102 from './tutorial/01-useState/starter/02-useState-basics';
import S0103 from './tutorial/01-useState/starter/03-useState-array';
import S0104 from './tutorial/01-useState/starter/04-useState-object';
import S0105 from './tutorial/01-useState/starter/05-useState-gotcha';
import S0201 from './tutorial/02-useEffect/starter/01-code-example';
import S0202 from './tutorial/02-useEffect/starter/02-useEffect-basics';
import S0203 from './tutorial/02-useEffect/starter/03-multiple-effects';
import S0204 from './tutorial/02-useEffect/starter/04-fetch-data';
import S0205 from './tutorial/02-useEffect/starter/05-cleanup-function';
import S0301 from './tutorial/03-conditional-rendering/starter/01-multiple-returns-basics';
import S0302 from './tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data';
import S0303 from './tutorial/03-conditional-rendering/starter/03-hooks-rule';
import S0304 from './tutorial/03-conditional-rendering/starter/04-short-circuit-overview';
import S0305 from './tutorial/03-conditional-rendering/starter/05-short-circuit-examples';
import S0306 from './tutorial/03-conditional-rendering/starter/06-toggle-challenge';
import S0307 from './tutorial/03-conditional-rendering/starter/07-user-challenge';
import S0401 from './tutorial/04-project-structure/starter/Navbar';
import { Home as S0402, About as S0403 } from './tutorial/04-project-structure/starter/Pages';
import S0404 from './tutorial/04-project-structure/starter/Example';
import S0601 from './tutorial/06-forms/starter/01-controlled-inputs';
import S0602 from './tutorial/06-forms/starter/02-user-challenge';
import S0603 from './tutorial/06-forms/starter/03-multiple-inputs';
import S0604 from './tutorial/06-forms/starter/04-other-inputs';
import S0605 from './tutorial/06-forms/starter/05-form-data';
import S0701 from './tutorial/07-useRef/starter/01-useRef-basics';
import S0801 from './tutorial/08-custom-hooks/starter/01-toggle';
import S0802 from './tutorial/08-custom-hooks/starter/02-fetch-data';
import S1001 from './tutorial/10-useReducer/starter/01-useReducer';

import React, { useState } from 'react';

function App() {
  let [activeComponent, setActiveComponent] = useState(null);
  const isActive = (componentName) => componentName === activeComponent;
  const availableComponents = [
    ['S0101', 'S0102', 'S0103', 'S0104', 'S0105'],
    ['S0201', 'S0202', 'S0203', 'S0204', 'S0205'],
    ['S0301', 'S0302', 'S0303', 'S0304', 'S0305', 'S0306', 'S0307'],
    ['S0401', 'S0402', 'S0403', 'S0404'],
    ['S0601', 'S0602', 'S0603', 'S0604', 'S0605'],
    ['S0701'],
    ['S0801','S0802'],
    ['S1001'],
  ];

  return (
    <div className='container'>
      {activeComponent 
        ? (
          <div>
              <span>Current component: {activeComponent}</span>
            <button className="btn ml-4 mb-8" type="button" onClick={() => setActiveComponent(null)}>Reset</button>
          </div>
        )
        : availableComponents.map((componentGroup, index) => (
          <div className="btn-group" key={index}>
            {componentGroup.map((component) => (
              <button className="btn" type="button" key={component} onClick={() => setActiveComponent(component)}>{component}</button>
            ))}
          </div>
        ))
      }

      {isActive('S0101') && ( 
        <>
          <S0101 />
        </>
      )}
      {isActive('S0102') && ( 
        <>
          <S0102 startingCount={15} />
          <S0102 />
        </>
      )}
      {isActive('S0103') && (
        <>
          <S0103 />
        </>
      )}
      {isActive('S0104') && (
        <>
          <S0104 />
        </>
      )}
      {isActive('S0105') && (
        <>
          <S0105 />
        </>
      )}
      {isActive('S0201') && (
        <>
          <S0201 />
        </>
      )}
      {isActive('S0202') && (
        <>
          <S0202 />
        </>
      )}
      {isActive('S0203') && (
        <>
          <S0203 />
        </>
      )}
      {isActive('S0204') && (
        <>
          <S0204 />
        </>
      )}
      {isActive('S0205') && (
        <>
          <S0205 />
        </>
      )}
      {isActive('S0301') && (
        <>
          <S0301 />
        </>
      )}
      {isActive('S0302') && (
        <>
          <S0302 />
        </>
      )}
      {isActive('S0303') && (
        <>
          <S0303 />
        </>
      )}
      {isActive('S0304') && (
        <>
          <S0304 />
        </>
      )}
      {isActive('S0305') && (
        <>
          <S0305 />
        </>
      )}
      {isActive('S0306') && (
        <>
          <S0306 />
        </>
      )}
      {isActive('S0307') && (
        <>
          <S0307 />
        </>
      )}
      {isActive('S0401') && (
        <>
          <S0401 />
        </>
      )}
      {isActive('S0402') && (
        <>
          <S0402 />
        </>
      )}
      {isActive('S0403') && (
        <>
          <S0403 />
        </>
      )}
      {isActive('S0404') && (
        <>
          <S0404 />
        </>
      )}
      {isActive('S0601') && (
        <>
          <S0601 />
        </>
      )}
      {isActive('S0602') && (
        <>
          <S0602 />
        </>
      )}
      {isActive('S0603') && (
        <>
          <S0603 />
        </>
      )}
      {isActive('S0604') && (
        <>
          <S0604 />
        </>
      )}
      {isActive('S0605') && (
        <>
          <S0605 />
        </>
      )}
      {isActive('S0701') && (
        <>
          <S0701 />
        </>
      )}
      {isActive('S0801') && (
        <>
          <S0801 />
        </>
      )}
      {isActive('S0802') && (
        <>
          <S0802 />
        </>
      )}
      {isActive('S1001') && (
        <>
          <S1001 />
        </>
      )}
    </div>
  );
}

export default App;
