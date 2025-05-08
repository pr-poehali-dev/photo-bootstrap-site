
import React from 'react';

interface ArticleRowProps {
  title: string;
  hits: string;
  date: string;
}

export const ArticleRow: React.FC<ArticleRowProps> = ({ title, hits, date }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        <a href="#" className="text-blue-500 hover:underline">{title}</a>
      </td>
      <td className="px-4 py-3">
        <span className="inline-flex items-center justify-center bg-gray-200 rounded-full h-6 w-6 text-xs">{hits}</span>
      </td>
      <td className="px-4 py-3 text-gray-500">{date}</td>
    </tr>
  );
};

interface ArticleRowWithAuthorProps {
  title: string;
  author: string;
  date: string;
}

export const ArticleRowWithAuthor: React.FC<ArticleRowWithAuthorProps> = ({ title, author, date }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        <a href="#" className="text-blue-500 hover:underline">{title}</a>
      </td>
      <td className="px-4 py-3">{author}</td>
      <td className="px-4 py-3 text-gray-500">{date}</td>
    </tr>
  );
};

const ArticlesTables: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Popular Articles */}
      <div className="bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold p-4 border-b">Popular Articles</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-sm font-medium text-gray-600">Title</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-600">Hits</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              <ArticleRow title="About" hits="0" date="2021-11-14" />
              <ArticleRow title="About your home page" hits="0" date="2021-11-14" />
              <ArticleRow title="Welcome to your blog" hits="0" date="2021-11-14" />
              <ArticleRow title="Typography" hits="0" date="2021-11-14" />
              <ArticleRow title="New feature: Workflows" hits="0" date="2021-11-14" />
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recently Added Articles */}
      <div className="bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold p-4 border-b">Recently Added Articles</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-sm font-medium text-gray-600">Title</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-600">Author</th>
                <th className="px-4 py-3 text-sm font-medium text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              <ArticleRowWithAuthor title="About" author="TestJ4" date="2021-11-14" />
              <ArticleRowWithAuthor title="Your Template" author="TestJ4" date="2021-11-14" />
              <ArticleRowWithAuthor title="Your Modules" author="TestJ4" date="2021-11-14" />
              <ArticleRowWithAuthor title="About your home page" author="TestJ4" date="2021-11-14" />
              <ArticleRowWithAuthor title="Welcome to your blog" author="TestJ4" date="2021-11-14" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArticlesTables;
