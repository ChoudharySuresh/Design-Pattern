import { useEffect, useState } from "react";

function useNetwork(URL) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          console.log(data);
          setData(data?.name);
          setIsLoading(false);
        }, 2000);
      });
  }, []);

  return { isLoading, data };
}

export default useNetwork;
