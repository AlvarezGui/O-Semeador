import Header from "../components/Header";
import Image from 'next/image'


export default function Historia(){
    return(
        <>
            <Header></Header>

            <h1 className="titulo">História</h1>

            <p className="paragrafo">Era uma vez, uma senhora que tinha quatro filhos. Dois desses filhos tinham deficiência intelectual. Desde pequenos ela sempre encontrava dificuldade em mantê-los nas escolas regulares e, conforme cresciam, a situação ficava ainda mais dificultosa. Essa mãe era membro da Igreja Metodista em São Caetano. Mulher de fé, trabalhadora, mãe dedicada e querida por todos.</p>
            <p className="paragrafo"> Suas irmãs e irmãos de fé decidiram apoia-la e envidar todos os esforços para contribuir para melhor qualidade de vida e bem estar dos seus filhos e de todas as pessoas com deficiência que pudessem alcançar. </p>
            <p className="paragrafo"> A AMAS - Associação Metodista de Ação Social, instituição beneficente, sem fins lucrativos, fundada em 1974 pela Igreja Metodista em São Caetano do Sul decidiu abraçar e ser a mantenedora desse projeto. <br/> Assim nasceu “O Semeador”. </p>

            <Image className='imagemFinal' src="/historia.jpg" width={1920} height={1080} alt='foto1'></Image>
        </>
    );
}