import React from 'react';

const PrintChecklist = (props) => {
/*
  const fetchIssueNames = () => {
    return props.data.map(item => {
      return item.name;
    });
  };*/

  const listIssues = () => {
    return props.data.map((item, idx) => {
      return <li key={idx}>{item.name}</li>;
    });
  };

  return (
    <div>
      <ul>
        {listIssues()}
      </ul>
    </div>
  );
};

export default PrintChecklist;