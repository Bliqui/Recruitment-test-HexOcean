import './App.scss'
import {useState} from "react";
import {Soup} from "./components/Soup/Soup";
import {Sandwich} from "./components/Sandwich/Sandwich";
import {Pizza} from "./components/Pizza/Pizza";
import './assets/styles/index.scss';
import {TimePicker} from 'antd';
import 'antd/dist/antd.css';
import {useForm, Controller} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {menuReq} from "./helpers/menuRequest";

function App() {
    const [dishType, setDishType] = useState('-');
    const {register, handleSubmit, formState: {errors}, control, transform} = useForm({});

    const onSubmit = data => {
        menuReq(dishType, data)
    }

    const onDishChange = (e) => {
        setDishType(e.target.value)
    }

    return (
        <div className={'hexoceanMenu'}>
            <div className={'hexoceanWrapper'}>
                <form className={'hexoceanForm'} onSubmit={handleSubmit(onSubmit)}>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Dish name:</p>
                        <input className={'normalInput'} type="text" {...register('name', {required: true})}/>
                        <div className={'errorField'}>
                            {errors.name?.type === 'required' && "Dish name is required!"}
                        </div>
                    </label>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Preparation time:</p>
                        <Controller
                            control={control}
                            rules={{required: true}}
                            name="preparation_time"
                            render={({field: {onChange, value}}) =>
                                <TimePicker className={'timeInput'} selected={value}
                                            showNow={false} inputReadOnly={true}
                                            onChange={onChange}/>}
                        />
                        <div className={'errorField'}>
                            {errors.preparation_time?.type === 'required' && "Time is required!"}
                        </div>
                    </label>
                    <label className={'formLabel'}>
                        <p className={'labelTitle'}>Dish type:</p>
                        <select className={'dishTypeSelector'}
                                onChange={(e) => onDishChange(e)}>
                            <option value="-">--Select Dish Type--</option>
                            <option value="pizza">Pizza 🍕</option>
                            <option value="soup">Soup 🍲</option>
                            <option value="sandwich">Sandwich 🥪</option>
                        </select>
                    </label>
                    {dishType === 'pizza' ? <Pizza register={register} errors={errors}/> : null}
                    {dishType === 'soup' ? <Soup register={register} errors={errors} control={control}/> : null}
                    {dishType === 'sandwich' ? <Sandwich register={register} control={control} transform={transform}
                                                         errors={errors}/> : null}
                    <div className={'buttonWrapper'}>
                        <button disabled={dishType === '-'} className={'submitBtn'}>Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default App;
