import React from 'react';
import Button from 'tdesign-react/button';
import { Link } from 'react-router-dom';

export const demoFiles = import.meta.globEager('../../../src/**/_example/*.jsx');

const demoObject = {};
Object.keys(demoFiles).forEach((key) => {
  const match = key.match(/([\w-]+)._example.([\w-]+).jsx/);
  const [, componentName, demoName] = match;

  demoObject[`${componentName}/${demoName}`] = demoFiles[key].default;
  if (demoObject[componentName]) {
    demoObject[componentName].push(demoName)
  } else {
    demoObject[componentName] = [demoName];
  }
});

export default function Demo(props) {
  const { location } = props;
  const match = location.pathname.match(/\/react\/demos\/([\w-]+)\/?([\w-]+)?/);
  const [, componentName, demoName] = match;
  const demoList = demoObject[componentName];
  const demoFunc = demoObject[`${componentName}/${demoName}`];
  console.log('%c 所有 demo 路径参考: \n', 'color: #0052d9;', demoObject);

  return demoFunc ? demoFunc() : (
    <ul style={{ margin: '48px 200px' }}>
      {
        demoList.map(demoName => (
          <li key={demoName}>
            <Link to={`/react/demos/${componentName}/${demoName}`}>
              <Button style={{ fontSize: 18 }} variant="text">{demoName}</Button>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}
