import { Container, Navbar, Nav } from "react-bootstrap";
import Image from 'next/image';

export default function Footer(){
    return(
        <>
            <Navbar expand="lg" className="bgNav ">
                   
                   
                    <div className="contIcones">             
                        {/* <h1 className="corLetra">Contato:</h1> */}

                        <div className="divIcones">
                            {/* icone */}
                            <Image className="icone" src="/telefone.png" width={50} height={50}></Image>
                            <p className="textoIcone">(11)4238-3100 <br></br>
                            (11) 4238-9511
                            </p>
                        </div>

                        <div className="divIcones">
                        <Image className="icone" src="/email.png" width={50} height={50}></Image>
                            <p className="textoIcone">osemeador@3remetodista.org.br <br></br>
                            adm.osemeador@3remetodista.org.br
                            </p>
                        </div>

                        <div className="divIcones">
                        <Image className="icone" src="/fb.png" width={50} height={50}></Image>
                            <p className="textoIcone"> escolaosemeador </p>
                        </div>
                    </div> 
                
            </Navbar>
        </>
    );
}