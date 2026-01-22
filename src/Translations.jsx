import './Translations.css'

export default function Translations() {
    return (
        <>
        <h1>Gherkin termini</h1>
            <table>
                <thead>
                    <tr>
                        <th>Angliski</th>
                        <th>Latviski</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Feature</td>
                        <td>Funkcionalitāte / Fīča</td>
                    </tr>
                    <tr>
                        <td>Background</td>
                        <td>Konteksts / Situācija</td>
                    </tr>
                    <tr>
                        <td>Rule</td>
                        <td>Noteikums</td>
                    </tr>
                    <tr>
                        <td>Scenario</td>
                        <td>Piemērs / Scenārijs</td>
                    </tr>
                    <tr>
                        <td>Scenario Outline</td>
                        <td>Scenārijs pēc parauga</td>
                    </tr>
                    <tr>
                        <td>Example</td>
                        <td>Piemērs</td>
                    </tr>
                    <tr>
                        <td>Given</td>
                        <td>* / Kad</td>
                    </tr>
                    <tr>
                        <td>When</td>
                        <td>* / Ja</td>
                    </tr>
                    <tr>
                        <td>Then</td>
                        <td>* / Tad</td>
                    </tr>
                    <tr>
                        <td>And</td>
                        <td>* / Un</td>
                    </tr>
                    <tr>
                        <td>But</td>
                        <td>* / Bet</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}