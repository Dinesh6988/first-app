import React from 'react';
import { Collapse } from 'antd';
const text1 = `
'We at Dev2Prod help individuals, startups, and large enterprises with custom-built software applications. Our teams deal with UX/ UI design all the way to Artificial Intelligence software solutions.'
`;
const text2 ='Please find our contact us form on the page. Please fill in everything you dream of, and we would get in touch with you.';
const text3 ='Honestly, the answer varies based on the project. We advise you to be open to options. We will help you with the brainstorming sessions as well. For this, do get in touch.';
const text4 ='The answer is a big, fat NO. Most of our customers come from a non-technical background, and there is absolutely no necessity to know the ins and outs of technology to get started.';
const text5 ='The answer to this varies with the size and the complexity of the project. We would send you a quotation and the expected time frame before initiating any project. This will precisely answer all your needs.';
const items = [
  {
    label: 'How can you help me with ?',
    children: <p>{text1}</p>,
  },
  {
    label: 'How do I create a product with you ?',
    children: <p>{text2}</p>,
  },
  {
    label: 'Should I create a mobile app or web app ?',
    children: <p>{text3}</p>,
  },
  {
    label: 'Do I need to be tech-savvy to work with you ?',
    children: <p>{text4}</p>
  },
  {
    label: 'How long does it take to bulid an application ?',
    children: <p>{text5}</p>
  }
];
const Collapse1 = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return <Collapse items={items}  />;
};
export default Collapse1;