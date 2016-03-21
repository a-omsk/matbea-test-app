import { find } from 'lodash';

const BankService = {
    getAllBanks() {
        return new Promise((res, rej) => {
            fetch('/data/banks.json')
                .then(response => response.json())
                .then(banks => res(banks));
        });
    },

    getName(banks, id) {
        if (banks.length) {
            return find(banks, ({ bankId }) => bankId === id).name;
        } else {
            return id;
        }
    }
}

export default BankService;
