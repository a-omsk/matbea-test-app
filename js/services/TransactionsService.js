const TransactionsService = {
    getTransactions() {
        return new Promise((res, rej) => {
            fetch('/data/transactions.json')
                .then(result => result.json())
                .then(transactions => res(transactions));
        });
    },

    addTransaction(transaction) {
        return new Promise((res, rej) => {
            fetch('/data/post.json')
                .then(result => result.json())
                .then(({ status }) => {
                    if (status === 'OK') {
                        res(status);
                    } else {
                        rej(status);
                    }
                });
        });
    }
};

export default TransactionsService;
