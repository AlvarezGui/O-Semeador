import Header from "../components/Header";
import Image from 'next/image'

export default function Parcerias(){
    return(
        <>
            <Header></Header>

            <h1 className="titulo">parcerias</h1>

            <Image className="imgEsquerda" src="/scs.jpg" width={850} height={600}></Image>
            <Image className="imgDireita" src="/sp.jpeg" width={850} height={600}></Image>
            <Image className="imgEsquerda" src="/maua.png" width={850} height={500}></Image>
            <Image className="imgDireita" src="/farmacia.png" width={850} height={500}></Image>
            <Image className="imgEsquerda" src="/escoteiros.png" width={850} height={600}></Image>
            <Image className="imgDireita" src="/augusta.png" width={850} height={600}></Image>
        </>
    );
}