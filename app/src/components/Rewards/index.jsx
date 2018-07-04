import React, {Component} from 'react';
import axios from "axios";
import TokenManager from '../../utils/token-manager';
import Account from '../Account';
import './style.scss';

class Rewards extends Component {

    constructor(props) {
        super(props);

        this.state = {
            account: [{
                id: '',
                description: '',
                created: '',
                type: ''
            }]
        }
    }

    /* componentDidMount() {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + TokenManager.getToken()
            }
        };
        console.log(config);

        axios.get('http://127.0.0.1:3000/account', config).then((response) => {
            this.setState({'account': response.data.accounts});
        });
    }*/

    render() {
        return (
            <div className="App">
              <Account />
            </div>
        );
    }
}

export default Rewards;
