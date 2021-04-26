import { useRouter } from 'next/';
import useSWR from 'swr';

import {
    fetcher
} from '../../../utils/fetcher';

const Customer = () => {
    const router = useRouter();
    const { id } = router.query;
  
    const { data, error } = useSWR(`/api/customers/${id}`, fetcher);
  
    if (error) return <div>failed to load</div>;
  
    return <div>
        {data ? (
            <div>
            <p className="name">
                {data.firstName} {data.lastName}
            </p>
            <p className="num">{data.telephone}</p>
            <p className="num">{data.creditCard.number}</p>
            </div>
        ) : (
            <div>loading...</div>
        )}
    </div>
}

export default Customer;
