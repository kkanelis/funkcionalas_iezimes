export default function WritingFeatures() {
    return (
        <>
            <section className="section-container">
                <h2>Kādā formātā veidot lietotājstāstus</h2>
                <div className="content-box">
                    <h3>Formāts</h3>
                    <div className="formula-box">
                        <p><b>Kā</b> [aktors] → <b>Es vēlos</b> [darbība] → <b>Lai</b> [mērķis]</p>
                    </div>

                    <h3>Piemērs</h3>
                    <div className="example-box">
                        <p>Bankas klients | Izņemt naudu | Piekļūt naudai 24/7</p>
                    </div>
                </div>
            </section>

            <section className="section-container">
                <h2>Kā veidot scenārijus?</h2>
                <div className="content-box">
                    <h3>Gherkin formāts</h3>
                    <div className="formula-box">
                        <p><b>Given</b> [sākuma stāvoklis] | <b>When</b> [darbība] | <b>Then</b> [rezultāts]</p>
                    </div>

                    <h3>Piemērs</h3>
                    <div className="example-box">
                        <p>Klients pie bankomāta | Ievada PIN kodu | Izsniedz naudu</p>
                    </div>

                    <h3>Cik daudz scenāriju ir vienai funkcionālajai iezīmei?</h3>
                    <div className="info-box">
                            Min: 1 scenārijs per iezīme<br></br>
                            Optimums: 3-5 scenāriji<br></br>
                            Vienmēr: Happy Path + alternatīvie ceļi<br></br>
                    </div>
                </div>
            </section>
        </>
    );
}
