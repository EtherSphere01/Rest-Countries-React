import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const countriesPromies = fetch("https://restcountries.com/v3.1/all").then(
  (response) => response.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Countries countriesPromies={countriesPromies}></Countries>
      </Suspense>
    </>
  );
}

export default App;
