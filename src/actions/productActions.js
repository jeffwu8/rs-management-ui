import Dispatcher from '../dispatcher/appDispatcher';
import axios from 'axios';
require('dotenv').config();

const backend = "http://localhost:8080"
const ProductActions = {
    // createProduct: function(body){
    //     Dispatcher.dispatch({
    //         actionType: 'create_products_started'
    //     });
    //     axios.post(process.env.BACKEND_URL + '/products', body)
    //     .then(result => {
    //         body.product_id = result.data.insertId;
    //         console.log(body);
    //         Dispatcher.dispatch({
    //             actionType: 'create_products_successful',
    //             data: body
    //         });
    //     })
    //     .catch( (error) => {
    //         console.log(error);
    //         Dispatcher.dispatch({
    //             actionType: 'create_products_failure'
    //         });
    //     });
    // },

    readProducts: function(){
        Dispatcher.dispatch({
            actionType: 'read_products_started'
        });
        console.log(backend + '/products');
        axios.get(backend + '/products')
        .then(result => {
            Dispatcher.dispatch({
                actionType: 'read_products_successful',
                data: result.data
            });
        })
        .catch( (error) => {
            console.log(error);
            Dispatcher.dispatch({
                actionType: 'read_products_failure'
            });
        });
    },

    // updateProduct: function(product){
    //     Dispatcher.dispatch({
    //         actionType: 'update_products_started'
    //     });
    //     const body = {title: product.title, author_name: product.author_name};
    //     axios.put(process.env.BACKEND_URL + '/products' + product.product_id, body)
    //     .then(() => {
    //         Dispatcher.dispatch({
    //             actionType: 'update_products_successful',
    //             data: product
    //         });
    //     })
    //     .catch( (error) => {
    //         console.log(error);
    //         Dispatcher.dispatch({
    //             actionType: 'update_products_failure'
    //         });
    //     });
    // },

    // deleteProduct: function(product_id){
    //     Dispatcher.dispatch({
    //         actionType: 'delete_products_started'
    //     });
    //     axios.delete(process.env.BACKEND_URL + '/products' + product_id)
    //     .then(() => {
    //         Dispatcher.dispatch({
    //             actionType: 'delete_products_successful',
    //             data : product_id
    //         });
    //     })
    //     .catch( (error) => {
    //         console.log(error);
    //         Dispatcher.dispatch({
    //             actionType: 'delete_products_failure'
    //         });
    //     });
    // }
}

module.exports = ProductActions;