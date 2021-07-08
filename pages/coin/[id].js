import styles from './DetailCoin.module.css'
import Layout from './../../components/Layout';


function CoinDetail({ data }) {
    return (
        <Layout>
            <div className={styles.coin_page}>
                <div className={styles.coin_container}>
                    <img
                        src={data.image.large}
                        alt={data.name}
                        className={styles.coin_image} />
                    <h1 className={styles.coin_name}>{data.name}</h1>
                    <p className={styles.coin_ticker}>{data.symbol}</p>
                    <p className={styles.coin_current}>
                        {data.market_data.current_price.usd}
                    </p>
                </div>
            </div>
        </Layout >
    )
}

export default CoinDetail



export async function getServerSideProps(context) {
    const id = context.params.id

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}
