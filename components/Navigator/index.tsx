import { useLoadedJSON } from 'context/loadedJSON';

const Navigator = () => {
  const { loadedJSON } = useLoadedJSON();

  return <div>{JSON.stringify(loadedJSON, null, 4)}</div>;
};

export default Navigator;
