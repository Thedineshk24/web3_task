import React from 'react';
import { ethers } from 'ethers';
import '../styles/signup.css';
import { setIdFunction } from '../store/reducers/WEB3';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

declare global {
    interface Window {
        ethereum?: undefined;
    }
}

const SignUp: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = useSelector((state: any) => state.WEB3.id);

    const handleMetaMask = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        try {
            const provider = new ethers.providers.Web3Provider(
                window.ethereum,
                'any'
            );
            await provider.send('eth_requestAccounts', []);
            const signer = provider.getSigner();
            console.log('Account:', await signer.getAddress());
            dispatch(setIdFunction(await signer.getAddress()));
            navigate('/stats');
        } catch (error) {
            alert('please install MetaMask');
        }
    };

    React.useEffect(() => {
        fetch('dev-gcn.samudai.xyz/api/member/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                walletAddress: id,
                chainId: 10,
                member: {
                    did: '',
                },
            }),
        });
    }, [id]);

    return (
        <div className="signup__form">
            <form action="">
                <button type="submit" onClick={handleMetaMask}>
                    SignUp through Ethereum
                </button>
            </form>
            <div className="hero">
                <img
                    src="https://images.pexels.com/photos/6592659/pexels-photo-6592659.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="hero"
                />
            </div>
        </div>
    );
};

export default SignUp;
