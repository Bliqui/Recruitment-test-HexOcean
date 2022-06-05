import axios from "axios";
import {error, ok} from "./customAlert";

export const menuReq = (dishType, data) => {
    switch (dishType) {
        case 'pizza': {
            return axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', {
                ...data,
                preparation_time: data.preparation_time.format('HH:mm:ss'),
                type: dishType,
                diameter: parseInt(data.diameter),
                no_of_slices: parseInt(data.no_of_slices),
            })
                .then(() => {
                    ok('Success!')
                })
                .catch(() => {
                    error('Something went wrong.')
                })
        }
        case 'sandwich': {
            return axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', {
                ...data,
                preparation_time: data.preparation_time.format('HH:mm:ss'),
                type: dishType,
                slices_of_bread: parseInt(data.slices_of_bread),
            })
                .then(() => {
                    ok('Success!')
                })
                .catch(() => {
                    error('Something went wrong.')
                })
        }
        case 'soup': {
            return axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', {
                ...data,
                preparation_time: data.preparation_time.format('HH:mm:ss'),
                type: dishType,
            })
                .then(() => {
                    ok('Success!')
                })
                .catch(() => {
                    error('Something went wrong.')
                })
        }
        default:
            return error('Something went wrong.')
    }
}