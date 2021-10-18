import { useState, useEffect} from 'react';


type StatusType = 'idle'|'pending'|'success'|'error';

const useAsync =<T> (asyncFunction: ()=> Promise<T>) => {
  const [data, setData] = useState<T | []>([]);
  const [status, setStatus] = useState<StatusType>('idle');
  const [error, setError] = useState<T | null>(null);
  useEffect(()=>{
    setStatus('pending')
    setData([])
    asyncFunction()
    .then((res)=> {
      setStatus('success')
      setData(res)
      setError(null)
    })
    .catch((err)=> {
      setStatus('error')
      setError(err)
      setData([])
    })
  },[])
  return {
    data, 
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
    error
  };
};

export default useAsync;