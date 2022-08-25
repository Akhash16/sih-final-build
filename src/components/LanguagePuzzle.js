import React from "react";
import ReactLanguageSelect from 'react-languages-select';
import { useState } from "react";
import 'react-languages-select/css/react-languages-select.css';
import { Button } from '@mui/material';



const LanguageSelect = () => {

    var characters = "abcdefg".split("")
    console.log("the aray is " + characters);

    var en = "qwertyuiopasdfghjklzxcvbnm".split("")
    // var en_C = "QWERTYUIOPASDFGHJKLZXCVBNM".split("")
    en = shuffle(en)

    const ta = "கஙசஞடணதநனபமயரறலளழவஅஆஇஈஉஊா".split("")

    const hi = "कखगघङचछजझञटठडढणतथदधनपफबभम".split("")

    const ko = "아악안알암압앙앞애액앵야얀약양얘어억언얼엄업엉에여".split('')


    const [letters, setLetters] = useState(en);
    const [solution, setSolution] = useState([]);

    function onSelectLanguage(languageCode) {
        setSolution([])

        console.log(languageCode);
        if (languageCode === "en") {
            setLetters(shuffle(en));
            console.log(letters);
        }
        if (languageCode === "ta") {
            setLetters(shuffle(ta));
            console.log(letters);
        }
        if (languageCode === "hi") {
            setLetters(shuffle(hi));
            console.log(letters);
        }

        if (languageCode === "ko") {
            setLetters(shuffle(ko));
            console.log(letters);
        }

    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    return (
        <>
        <div class="container1">
                <div class="content">
           
                <div className="container puzzle-box">
                    {/* <h1>Language Puzzle</h1> */}
                    <h4>Chose a combination of letters in your preferred language</h4>
                    <ReactLanguageSelect
                        defaultLanguage="en"
                        names={"international"}
                        searchable={false}
                        // searchPlaceholder="Search for a language"
                        onSelect={onSelectLanguage}
                        languages={["en", "ta", "hi", "ko"]}
                    />

                    {/* <h6>The selected language is <h4> {selectedLang} </h4> </h6> */}
                    <div className="container"><div className="grid">

                        {letters.map(a => (<Button variant="outlined" onClick={() => setSolution([...solution, a])} >{a}</Button>))}
                    </div></div>

                    <div className="container">
                        <h3>{solution.join("")}</h3>
                    </div>

                    <Button variant="contained" onClick={console.log("The data is : " + solution.join(""))}>Confirm</Button>

                </div></div></div>


        </>

    );
}

export default LanguageSelect;