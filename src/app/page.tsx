'use client';
export const dynamic = "force-dynamic";
import { useState, useEffect } from 'react';
import CveCard from './components/CveCard';
import LoadingSpinner from './components/LoadingSpinner';

export default function Page() {
  const [query, setQuery] = useState('');
  const [severity, setSeverity] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(0);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const fetchResults = async (reset = false, sort = sortOrder) => {
    if (loading) return;
    setLoading(true);
    setError('');
    setHasSearched(true);
    const currentPage = reset ? 0 : page;

    try {
      const res = await fetch(
        `/api/cves?query=${encodeURIComponent(query)}&severity=${severity}&sort=${sort}&startIndex=${currentPage * 100}`
      );
      if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`);
      const data = await res.json();
      const newResults = data.results || [];
      setResults(reset ? newResults : (prev: any[]) => [...prev, ...newResults]);
      setPage(currentPage + 1);
      setHasMore(newResults.length === 100);
    } catch (err: any) {
      console.error('❌ Fetch error:', err);
      setError('Something went wrong while fetching CVEs. Please try again.');
    } finally {
      await new Promise((r) => setTimeout(r, 500)); // Spinner visibility fix
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasSearched) {
      setPage(0);
      setResults([]);
      fetchResults(true, sortOrder);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder]);

  return (
    <main className="min-h-screen bg-[#282a36] text-[#f8f8f2] flex flex-col items-center justify-center p-6 space-y-2">
      <nav className="w-full bg-[#44475a] text-[#f8f8f2] py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#50fa7b]">GlobalCVE</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="/" className="hover:underline text-[#8be9fd]">Home</a></li>
          <li><a href="#search" className="hover:underline text-[#ff79c6]">Search</a></li>
          <li><a href="/docs" className="hover:underline text-[#bd93f9]">API Docs</a></li>
          <li><a href="https://github.com/jegly" className="hover:underline text-[#f1fa8c]">GitHub</a></li>
        </ul>
      </nav>

      <img src="/globalcve-logo.png" alt="GlobalCVE Logo" className="w-64 h-64" />
      <h1 className="text-5xl font-bold text-[#50fa7b]">GlobalCVE</h1>
      <p className="text-lg max-w-xl text-center text-[#8be9fd]">
        A unified, open-source hub for global vulnerability intelligence. Built for clarity, collaboration, and security.
      </p>

      <section className="mt-12 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-[#f8f8f2]">
        <div className="bg-[#44475a] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#50fa7b] mb-2">Unified CVE Aggregation</h2>
          <p>Pulls from multiple sources to provide a complete, up-to-date view of global vulnerabilities.</p>
        </div>
        <div className="bg-[#44475a] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#8be9fd] mb-2">Open-Source Intelligence</h2>
          <p>Built by JEGLY for the community — transparent, collaborative, and always improving,Check out the testing repo for new features.</p>
        </div>
        <div className="bg-[#44475a] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#ff79c6] mb-2">Security-Centric Design</h2>
          <p>Minimal, clean, and built with best practices for secure environments and responsible data use.</p>
        </div>
        <div className="bg-[#44475a] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#bd93f9] mb-2">API-Ready Architecture</h2>
          <p>Designed for future integration — automate, query, and connect with ease.</p>
        </div>
      </section>

      <section className="mt-16 max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold text-[#ff79c6] mb-6">Built by the community</h2>
        <div className="bg-[#44475a] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#50fa7b] mb-2">JESSE-EG-LY @ JEGLY</h3>
          <p>Founder and lead architect of GlobalCVE. Building a unified, open-source hub for vulnerability intelligence.</p>
        </div>
        <p className="mt-6">
          Want to contribute? <a href="https://github.com/jegly" className="text-[#ff79c6] underline">Join us on GitHub</a>
        </p>
      </section>

      <section className="mt-16 max-w-4xl w-full text-center" id="search">
        <h2 className="text-3xl font-bold text-[#50fa7b] mb-4">Search CVEs</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by CVE ID, keyword, or vendor..."
            className="w-full md:w-2/3 px-4 py-2 rounded-md bg-[#44475a] text-[#f8f8f2] placeholder-[#6272a4] border border-[#6272a4] focus:outline-none focus:ring-2 focus:ring-[#50fa7b]"
          />
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="px-4 py-2 rounded-md bg-[#44475a] text-[#f8f8f2] border border-[#6272a4] focus:outline-none focus:ring-2 focus:ring-[#ff79c6]"
          >
            <option value="">All Severities</option>
            <option value="CRITICAL">Critical</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
            className="px-4 py-2 rounded-md bg-[#44475a] text-[#f8f8f2] border border-[#6272a4] focus:outline-none focus:ring-2 focus:ring-[#8be9fd]"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
          <button
            onClick={() => {
              setPage(0);
              setResults([]);
              fetchResults(true, sortOrder);
            }}
            disabled={loading}
            className={`px-4 py-2 rounded-md font-semibold ${
              loading ? 'bg-[#6272a4] cursor-not-allowed' : 'bg-[#50fa7b] hover:bg-[#8be9fd]'
            } text-[#282a36]`}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {error && (
          <div className="mt-4 text-sm text-red-400">
            {error}
            <button
              onClick={() => fetchResults(false, sortOrder)}
              className="ml-4 px-3 py-1 bg-[#ff5555] text-[#f8f8f2] rounded hover:bg-[#ff6e6e]"
            >
              Retry
            </button>
          </div>
        )}

        {loading && (
          <div className="mt-8 flex justify-center">
            <LoadingSpinner />
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {results.length > 0 && (
            <>
              {(results as any[]).map((cve) => (
                <CveCard key={cve.id} {...cve} />
              ))}
            </>
          )}

          {!loading && results.length === 0 && hasSearched && !error && (
            <p className="text-sm text-[#6272a4] mt-4 col-span-2">
              No CVEs found for that query. Try a different keyword or check back later.
            </p>
          )}
        </div>

        {!loading && results.length > 0 && (
          <div className="col-span-2 text-center mt-4">
            <button
              onClick={() => fetchResults(false, sortOrder)}
              disabled={loading}
              className={`px-4 py-2 rounded-md font-semibold ${
                loading ? 'bg-[#6272a4] cursor-not-allowed' : 'bg-[#ff79c6] hover:bg-[#bd93f9]'
              } text-[#282a36]`}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
            <p className="mt-2 text-sm text-[#6272a4]">Page {page}</p>
          </div>
        )}
      </section>

      <footer className="mt-16 w-full border-t border-[#44475a] pt-6 text-center text-sm text-[#6272a4]">
        <p>© {new Date().getFullYear()} JEGLY. All rights reserved.</p>
  <p className="mt-1">
    Built with ❤️ by <span className="text-[#50fa7b] font-semibold">JESSE-EG-LY</span> —
    <a href="https://github.com/jegly" className="text-[#ff79c6] underline ml-1">GitHub</a>
    <span className="mx-1">|</span>
    <a href="https://jegly.xyz/" className="text-[#ff79c6] underline">jegly.xyz</a>
  </p>
</footer>

    </main>
  );
}
