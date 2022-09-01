import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { countryActions, getCountryByName } from '../redux/action/countyAction';
import { ThemeContext } from '../context/themeContext';
import { useFormik } from 'formik';
import Spinner from './Spinner';
const Home = () => {
    const { isMode, setIsMode } = useContext(ThemeContext)
    const dispatch = useDispatch();
    const { countries } = useSelector((state) => state.countryReducer);
    // dispatch(countryActions())
    // console.log(countries);

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: async (values) => {
            const data = await dispatch(getCountryByName(values?.name));
            console.log(values);
            console.log(data);
            // if (data.status === 200) {
            //     isSubmitting(true);
            // }
        },
    })

    const { handleBlur, handleSubmit, handleChange, isSubmitting, values, getFieldProps } = formik;

    useEffect(() => {
        dispatch(countryActions())
        // dispatch(getCountryByName())
    }, [])

    return (
        <>
            <div className="container mx-auto dark:bg-slate-800 dark:text-white">
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex gap-2 justify- py-7 item-center">
                        <div className='flex gap-2 item-center'>
                            {/* <input type="text" placeholder='Search for a country...' className='text-black' name='name' onClick={handleChange} {...getFieldProps("name")} /> */}
                            <select className='text-slate-800'
                                id="name"
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.CountryName}>
                                <option value="-">Search by country name</option>
                                {countries.map((country) => (
                                    <option value={country?.name}>{country?.name}</option>
                                ))}

                            </select>
                        </div>
                        <div className="">
                            <button className='bg-gray-400 rounded px-6 py-4'>{isSubmitting ? <Spinner /> : "Search"}</button>
                        </div>
                    </div>
                </form>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-7 text-black dark:text-white cursor-pointer'>
                    {countries.map(({ name, flag, population, region, capital }, id) => (
                        <div className={isMode ? "max-w-sm light-mode rounded border border-gray-200 shadow-md " : "max-w-sm dark-mode rounded border border-gray-700 shadow-lg"} key={id}>
                            <img className="w-full" src={flag} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 font-bold tracking-tight">{name}</h5>
                                <p className="mb-3 font-normal">Population: {population}</p>
                                <p className="mb-3 font-normal">Region: {region}</p>
                                <p className="mb-3 font-normal">Capital: {capital}</p>

                            </div>
                        </div>

                    ))}
                </div>
            </div>


        </>
    )
}

export default Home