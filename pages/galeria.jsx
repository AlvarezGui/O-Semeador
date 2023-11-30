import Header from "../components/Header";
import Image from 'next/image'

export default function Galeria(){
    return(
        <>
            <Header></Header>

            <h1 className="titulo"> Galeria </h1>

            <Image className="imgEsquerda" src="/matriculas.jpg" width={850} height={600}></Image>
            <Image className="imgDireita" src="/balao.png" width={850} height={600}></Image>
            <Image className="imgEsquerda" src="/legos.jpg" width={850} height={600}></Image>
            <Image className="imgDireita" src="/escola.png" width={850} height={600}></Image>
            <Image className="imgEsquerda" src="/historia.jpg" width={850} height={600}></Image>
            <Image className="imgDireita" src="/fila.jpg" width={850} height={600}></Image>
            
        </>
    );
}