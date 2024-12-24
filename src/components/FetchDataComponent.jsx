import useJsonFetch from './UseJsonFetch';

const FetchDataComponent = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Fetched Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchDataComponent;
