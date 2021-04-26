import { SWRConfig  } from 'swr';

const HomePage = () => <div>
    <SWRConfig
    value={{
        revalidateOnFocus: false
    }}
>
    <p>
        <a href="customers">Customers</a>
    </p>
    </SWRConfig>
</div>

export default HomePage;