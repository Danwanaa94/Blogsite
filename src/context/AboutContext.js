import { createContext } from "react";

 export const AboutContext = createContext();

function AboutContextProvider({children}){
    const about={
        name: "Danwanaa Rauf",
        hobbies:["Story tellin", "Football","Boxing"],
        bio: "I am a professional young man who desires community growth"
    }
    return(
        <AboutContext.Provider value={{about}}>
            {children}
        </AboutContext.Provider>
    )
}

export default AboutContextProvider