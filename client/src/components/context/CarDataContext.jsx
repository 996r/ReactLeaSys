

import { createContext, useState, useCallback } from 'react';




export const CarDataContext = createContext({

    cars: [],
    setCars: () => {},
    addCarLocally: () => {}, 
});

export function CarDataProvider({ children }) {
    
    const [cars, setCars] = useState([]); 

    const addCarLocally = useCallback((newCar) => {
    
        setCars(prevCars => [newCar, ...prevCars]); 
    }, []);

    const [refreshKey, setRefreshKey] = useState(0);

    const contextValue = {
        cars, 
        setCars,
        addCarLocally, 
        refreshKey,
        triggerRefresh: useCallback(() => {
             setRefreshKey(prevKey => prevKey +1);
        }, []),
    };

    return (
        <CarDataContext.Provider value={contextValue}>
            {children}
        </CarDataContext.Provider>
    );
}