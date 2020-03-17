import React, { useRef, useEffect } from 'react';

export default function SearchForm({ setSearch }) {
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchCocktail = () => {
    searchValue.current.value();
  };
  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form action="" className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
}
