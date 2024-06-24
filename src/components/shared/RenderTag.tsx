import Link from 'next/link';
import React from 'react';
import { Badge } from '../ui/badge';

interface Props {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link
      href={`/tags/${_id}`}
      className="flex items-center justify-between body-medium"
    >
      <Badge className=" uppercase subtle-medium dark:text-light-500 text-light-400 px-4 py-2 background-light800_dark300 rounded-md border-none ">
        {name}
      </Badge>

      {showCount && (
        <p className="small-medium  text-dark500_light700">{totalQuestions}+</p>
      )}
    </Link>
  );
};

export default RenderTag;
