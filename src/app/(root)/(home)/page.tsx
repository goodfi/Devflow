import QuestionCard from '@/components/cards/QuestionCard';
import { Filters } from '@/components/shared/Filters/Filters';
import HomeFilters from '@/components/shared/Filters/HomeFilters';
import NoResult from '@/components/shared/NoResult';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filtr';
import Link from 'next/link';

const question = [
  {
    _id: 1,
    title: 'Cascading Deletes in SQLAlchemy',
    tags: [
      { _id: 1, name: 'python' },
      { _id: 2, name: 'sql' },
    ],
    author: 'Bartosz',
    upvotes: 10,
    views: 100,
    answer: 2,
    createdAt: '2021-09-01T12:00:00.000Z',
  },
  {
    _id: 2,
    title: 'Tego typu',
    tags: [
      { _id: 1, name: 'css' },
      { _id: 2, name: 'kobra' },
    ],
    author: 'Bartosz',
    upvotes: 10,
    views: 100,
    answer: 2,
    createdAt: '2021-09-01T12:00:00.000Z',
  },
];

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between items-center sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 md:flex-col">
        <LocalSearchbar
          placeholder="Search Questions..."
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          otherClasses="w-full"
        />
        <div className="md:hidden flex">
          <Filters
            filters={HomePageFilters}
            otherClasses="min-h-[56px] sm:min-w-[170px]"
            containerClasses="hidden max-md:flex"
          />
        </div>
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {question.length > 0 ? (
          question.map((item, index) => {
            return <QuestionCard key={item._id} />;
          })
        ) : (
          <NoResult
            title="There's no question to show"
            LinkText=" Ask a Question"
            link="/ask-question"
            desc="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
          />
        )}
      </div>
    </>
  );
};

export default page;
