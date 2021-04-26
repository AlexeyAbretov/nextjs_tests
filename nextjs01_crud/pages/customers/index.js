import useSWR, { mutate, SWRConfig  } from 'swr';
import Link from 'next/link';
import Router from 'next/router';

import {
    fetcher
} from '../../utils/fetcher';

const CustomerListPage = () => {
    const { data, error } = useSWR('/api/customers', fetcher);

    const onDelete = async (id) => {
        try {
            await mutate('/api/customers', data.filter((x) => x.ref['@ref'].id !== id), false);

            const res = await fetch(`/api/customers/${id}/delete`, {
                method: 'DELETE',
            });
            if (res.status !== 200) {
                throw new Error(await res.text());
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (error) return <div>failed to load - {String(error)}</div>;

    return <div>
        <p>
            Customers
        </p>
        <p>
            <Link href="/customers/create">
                <a className="createNew">Create New Customer</a>
            </Link>
        </p>
        {data ? (
            data.map((d) => (
                <div
                    key={d.ref['@ref'].id}
                    id={d.ref['@ref'].id}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Link href="/customers/[id]" as={`/customers/${d.ref['@ref'].id}`}>
                        <a>
                            {d.data.lastName}
                        </a>
                    </Link>
                    <span style={{ textAlign: 'left' }}>{d.data.lastName}</span>
                    <div>{d.data.telephone}</div>
                    <div>{d.data.creditCard.number}</div>
                    <button onClick={() => onDelete(d.ref['@ref'].id)} className="deleteButton">
                        Delete
                </button>
                </div>
            ))
        ) : (
            <>
                loading...
          </>
        )}
    </div>;
}

export default CustomerListPage;
