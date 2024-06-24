import React from 'react';
import RenderTag from '../RenderTag';
const popularTag = [
  { _id: 1, tag: 'Javascript', totalQuestions: 20152 },
  { _id: 11, tag: 'Next.js', totalQuestions: 20152 },
  { _id: 12, tag: 'React.js', totalQuestions: 20152 },
  { _id: 13, tag: 'Node.js', totalQuestions: 20152 },
  { _id: 14, tag: 'Python', totalQuestions: 20152 },
  { _id: 15, tag: 'Microsoft Azure', totalQuestions: 20152 },
  { _id: 16, tag: 'PostgreSql', totalQuestions: 20152 },
  { _id: 17, tag: 'Machine Learning', totalQuestions: 20152 },
];

const PopularTag = () => {
  return (
    <div>
      <h3 className="h3-bold pb-8 text-dark200_light900">Popular Tag</h3>
      <div className="flex flex-col gap-6">
        {popularTag.map((item) => {
          return (
            <RenderTag
              _id={item._id}
              name={item.tag}
              totalQuestions={item.totalQuestions}
              showCount
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularTag;
