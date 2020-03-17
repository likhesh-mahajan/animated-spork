import React, { useState, useEffect } from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCockTails = drinks.map(item => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });
          setCocktails(newCockTails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getDrinks();
  }, [search]);

  return (
    <main>
      <SearchForm setSearch={setSearch} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}
