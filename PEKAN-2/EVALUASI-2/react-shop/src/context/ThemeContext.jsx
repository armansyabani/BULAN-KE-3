import { createContext, useReducer } from "react";
import { themeReducer } from "../reducers/themeReducer";


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
const [theme, dispatch] = useReducer(themeReducer, "light");


return (
<ThemeContext.Provider value={{ theme, dispatch }}>
{children}
</ThemeContext.Provider>
);
};