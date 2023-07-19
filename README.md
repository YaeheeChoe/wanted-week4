# 실행

다음의 순서대로 실행해주세요.

```bash
# 1. 과제 API 코드 클론
$ git clone https://github.com/walking-sunset/assignment-api

# 2. 과제 API 코드 실행
$ cd assignment-api && npm install && npm start

# 3. 과제 코드 클론
$ git clone https://github.com/YaeheeChoe/wanted-week4

# 4. 과제 코드 실행
$ cd wanted-week4 && npm install && npm start
```

<br/>   <!-- 이건 줄바꿈이에용 -->

# 로컬 캐싱 & Expire time 구현

<!-- 이렇게 하면 js가 먹어용 -->
```js
// useGetSick.js

const useGetSick = (searchTerm, expireTime = 300000)  => {
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
