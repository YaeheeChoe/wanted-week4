# 실행

다음 저장소를 clone후 아래 명령어를 실행해주세요.   
https://github.com/walking-sunset/assignment-api
```
npm install
npm start
```
이 저장소를 clone후 아래 명령어를 실행해주세요.
```
npm install
npm start
```

# 로컬 캐싱 & Expire time 구현
useGetSick.js

```
  const useGetSick = (searchTerm, expireTime = 300000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const cacheRef = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/sick?q=${searchTerm}`
        );
        const newData = response.data;
        setData(newData);
        cacheRef.current[searchTerm] = {
          data: newData, 
          timestamp: Date.now(),
        };//캐시에 받아온 데이터 저장
      } catch (error) {
        setError(error);
      }
    };

    const cachedData = cacheRef.current[searchTerm];
    if (cachedData && Date.now() - cachedData.timestamp < expireTime) { // 캐시 사용
      setData(cachedData.data);
    } else {
      fetchData();
    }
  }, [searchTerm, expireTime]);

  return { data, error };
};

```

