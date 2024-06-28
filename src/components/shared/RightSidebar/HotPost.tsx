import Image from 'next/image';
import React from 'react';

const hotPost = [
  'Would it be appropriate to point out an error in another paper during a referee report?',
  'How can an airconditioning machine exist?',
  'Interrogated every time crossing UK Border as citizen',
  'Low digit addition generator',
  'What is an example of 3 numbers that do not make up a vector?',
];

const HotPost = () => {
  return (
    <div>
      <h3 className="h3-bold pb-8 text-dark200_light900">Hot Questions</h3>
      <div className="flex flex-col gap-6">
        {hotPost.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-start justify-between body-medium text-dark500_light700"
            >
              <p>{item}</p>
              <Image
                src="assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="chevron right"
                className="invert-colors"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotPost;
