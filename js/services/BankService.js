import BankStore from '../stores/BankStore';
import { find } from 'lodash';

const BankService = {
    getAllBanks() {
        return new Promise((res, rej) => {
            fetch('/data/banks.json')
                .then(response => response.json())
                .then(banks => res(banks));
        });
    },

    getName(id) {
        const { banks } = BankStore.getState();

        if (banks.length) {
            return find(banks, ({ bankId }) => bankId === id).name;
        } else {
            return id;
        }
    }
}

export default BankService;
