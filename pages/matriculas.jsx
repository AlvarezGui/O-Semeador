import Header from "../components/Header";
import Image from 'next/image'

export default function Matriculas(){
    return(
        <>
            <Header></Header>

            <h1 className="titulo"> Matrículas </h1>

            <p className="paragrafo">A escola é uma organização da sociedade civil e atende a população por meio de contratoparticular de prestação de serviço, podendo conceder descontos financeiros mediante levantamento socioassistencial.</p>
            <p className="paragrafo">Possui ainda Termos de Colaboração com a Prefeitura Municipal de são Caetano do Sul e com a Secretaria de Educação do Estado de São Paulo.</p>
            <p className="paragrafo">As matrículas são realizadas presencialmente mediante documentação apresentada.</p>

            <Image className="imagemFinal" src="/matriculas.jpg" width={1920} height={1080} alt='foto1'></Image>
        </>
    );
}