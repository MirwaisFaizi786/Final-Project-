import Search from "../../components/search/search";

export async function getStaticProps() {
  // Replace with your actual function to fetch tours data
  const tours = await fetchToursData();

  return {
    props: {
      tours,
    },
  };
}

export default function SearchPage({ tours }) {
  return (
    <div>
      <h1>Search Results</h1>
      <Search tours={tours} />
    </div>
  );
}
