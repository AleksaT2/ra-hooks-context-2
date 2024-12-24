import useJsonFetch from './UseJsonFetch';

const FetchLoadingComponent = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Fetched Data (Loading)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchLoadingComponent;
