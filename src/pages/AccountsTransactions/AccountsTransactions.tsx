import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyDropdown from '../../components/shared/Dropdown/Dropdown';
import Header from '../../components/shared/Header';
import icons from '../../components/shared/icons';
import { accountInfos, transactionsInfos } from '../../DummyData/DummyData';

const AccountsTransactions = () => {

    return (
        <section className='px-8  pt-12 lg:pt-0'>
            <Header name='Accounts/Transection' />
            <div className='flex flex-wrap 2xl:flex-nowrap  gap-5 mb-5'>
                {accountInfos.map(item => (
                    <AccountInfos item={item} key={item.id} />
                ))}
            </div>
            <div >
                <TransactionsAll transactionsInfos={transactionsInfos} />
            </div>
        </section >
    );
};

export default AccountsTransactions;

const TransactionsAll = ({ transactionsInfos }) => {
    const [status, setStatus] = useState('all')
    const [filterTransactionsInfos, setFilterTransactionsInfos] = useState([])

    useEffect(() => {
        if (status === 'all') {
            setFilterTransactionsInfos(transactionsInfos);
        } else {
            let filter = transactionsInfos.filter(transaction => transaction.status.toLowerCase().includes(status.toLowerCase()))
            setFilterTransactionsInfos(filter)
        }

        // eslint-disable-next-line
    }, [status])

    const handleChange = (info) => {
        setStatus(info.name)
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-xl my-5'>Transactions</h1>
                <div className='flex items-center gap-2 border py-2 px-3 rounded-md bg-white cursor-pointer'>
                    <span className='text-gray-400 text-sm'>Sort by:</span>
                    <MyDropdown
                        btnText={
                            <span className='flex items-center gap-2 font-medium capitalize'> {status} {icons.arrowDown}</span>
                        }
                        items={[
                            {
                                id: 1,
                                name: 'all',
                                handleChange: handleChange
                            },
                            {
                                id: 2,
                                name: 'credited',
                                handleChange: handleChange
                            },
                            {
                                id: 3,
                                name: 'withdraw',
                                handleChange: handleChange
                            }
                        ]}
                    />

                </div >
            </div>

            <div className='pb-10'>
                <ul className='flex flex-col gap-4'>
                    {
                        filterTransactionsInfos.map(transaction => (
                            <TransactionLi key={transaction.id} transaction={transaction} />
                        ))
                    }
                </ul>
            </div>
        </>
    )


}

const AccountInfos = ({ item }) => {
    function format_number(number, num_decimals, include_comma) {
        return number.toLocaleString('en-US', { useGrouping: include_comma, minimumFractionDigits: num_decimals, maximumFractionDigits: num_decimals });
    }
    return (
        <div className='w-full md:w-[346px] 2xl:w-1/3 bg-white py-6 px-5 rounded-lg  shadow-sm '>
            <p className='text-xl mb-1'>{item.title}</p>
            <p className='text-[28px] font-bold flex items-center justify-between gap-10'>
                <span>{format_number(item.amount, null, true)} {item.currency}</span>
                {
                    item.withdraw &&
                    <span className='uppercase text-[13px] text-white bg-[#FF5701] px-3 py-1 rounded-md'>
                        WITHDRAW
                    </span>
                }
            </p>
        </div>
    )
}



const TransactionLi = ({ transaction }) => {
    return (
        <li className='flex flex-col md:flex-row items-start  md:items-center gap-3  justify-between p-5  rounded-lg bg-white shadow-sm'>
            <div className='md:hidden mb-5'>
                <span className={`${transaction.status === 'credited' ? 'text-green-800 bg-green-200/50' : 'text-red-800 bg-red-200/50'} px-5 py-2  rounded-3xl font-semibold text-[15px] capitalize`}>{transaction.status}</span>
            </div>
            <div>
                <p className='uppercase text-gray-500 mb-1 text-sm'>Transaction id</p>
                <p className='font-medium'>{transaction.transaction_id}</p>
            </div>
            <div className='flex md:justify-evenly w-full gap-16'>
                <div>
                    <p className='text-gray-500 mb-1 text-sm'>Date</p>
                    <p className='font-medium'>{transaction.date}</p>
                </div>
                <div>
                    <p className='text-gray-500 mb-1 text-sm'>Amount</p>
                    <p className={`${transaction.status === 'credited' ? 'text-green-800' : 'text-red-800'} font-medium`}>{transaction.status === 'credited' ? '+' : '-'}{transaction.amount} {transaction.currency}</p>
                </div>
            </div>
            <div className='hidden md:block'>
                <span className={`${transaction.status === 'credited' ? 'text-green-800 bg-green-200/50' : 'text-red-800 bg-red-200/50'} py-2 px-5 rounded-3xl font-semibold text-[15px] capitalize`}>{transaction.status}</span>
            </div>
        </li>
    )
}
