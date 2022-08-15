import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/stats.css';

type Props = {
    WEB3: {
        id: string | number;
    };
    historyDatas: [];
};

const Stats = () => {
    const id = useSelector((state: Props) => state.WEB3.id);

    const [historyData, setHistory] = React.useState([]);
    const [blockNumber, setBlockNumber] = React.useState([]);

    const historyDatas: number[] = [];

    const getStats = async () => {
        // NOTE  : I've Tried to use Environment Variable to get the API URL but it didn't work. so I've directly used api key here.
        const response = await fetch(
            ` https://api-ropsten.etherscan.io/api?module=account&action=balance&address=${id}&tag=latest&apikey=4GC2MRZNYA35CG8JMHVNZ1D4IDRZJ422UA`
        );
        const data = await response.json();
        setHistory(data.result);
    };

    const getEthereumBlock = async () => {
        // NOTE  : I've Tried to use Environment Variable to get the API URL but it didn't work. so I've directly used api key here.
        const response = await fetch(
            `https://api-kovan.etherscan.io/api?module=account&action=txlist&address=${id}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=4GC2MRZNYA35CG8JMHVNZ1D4IDRZJ422UA`
        );
        const data = await response.json();
        setBlockNumber(data.result?.blockNumber);
    };
    React.useEffect(() => {
        getStats();
        getEthereumBlock();
    }, [id]);

    return (
        <div className="stats">
            <div className="stats__boxe1">
                {historyData?.length > 0 &&
                    Object.values(historyData)?.map((item: any, i: number) => {
                        historyDatas.push(item);
                        return <p key={i}>{historyDatas[i]}</p>;
                    })}
            </div>
            <div className="stats__boxe2">
                {blockNumber?.length > 0 &&
                    blockNumber?.map((item: any, i: number) => {
                        return <p key={i}>{item}</p>;
                    })}
            </div>
        </div>
    );
};

export default Stats;
