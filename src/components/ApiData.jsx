import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const PAGE_SIZE = 6;

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filtered and paginated data
  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">API Data (Posts)</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search posts..."
        className="mb-4 px-4 py-2 border rounded-lg w-full max-w-md dark:bg-gray-700 dark:border-gray-600"
      />
      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {paginated.map((item) => (
          <Card key={item.id} className="h-full flex flex-col">
            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">{item.body}</p>
          </Card>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 items-center">
        <Button onClick={handlePrev} disabled={page === 1} variant="secondary">Prev</Button>
        <span className="self-center">Page {page} of {totalPages}</span>
        <Button onClick={handleNext} disabled={page === totalPages} variant="secondary">Next</Button>
      </div>
    </div>
  );
};

export default ApiData; 