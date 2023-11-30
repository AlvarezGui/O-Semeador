import Header from "../components/Header";
import Image from 'next/image'

export default function Escola(){
    return(
        <>
            <Header></Header>

            <h1 className="titulo"> Escola </h1>

            <p className="paragrafo">A escola funciona em local privilegiado de São Caetano do Sul ocupando uma área de 2.066m2 distribuídos entre salas de aula, de espelhos, de informática, de AVD (Atividades de Vida Diária), administrativas, ateliê de artes, biblioteca, brinquedoteca, cozinha pedagógica, salão social, cozinha industrial, refeitório, quadra poliesportiva coberta, academia ao ar livre, estacionamento.</p>
            <p className="paragrafo">Atualmente, a escola oferece o Ensino Fundamental do 1º ao 5º ano na modalidade AEE - Atendimento Educacional Especializado para pessoas com deficiência intelectual, múltiplas deficiências e transtorno do espectro autista com idade entre 6 e 30 anos, e Projeto de Convivência e Fortalecimento de Vínculos para o mesmo público, só que a partir de 30 anos. O processo educativo é fundamentado em uma educação humanista e relacional, considerando as propostas educativas vigentes e a legislação atual, ou seja, a Lei de Diretrizes e Bases da Educação Nacional, as normas específicas dos Conselhos Nacional, Estadual e Municipal de Educação e a Lei 12.764 de 27/12/2012, sempre atentos à expansão da compreensão da realidade e do desenvolvimento do ser humano nos aspectos intelectual, afetivo, emocional e espiritual.</p>
            <p className="paragrafo">O currículo e a metodologia utilizados têm como propósito oferecer uma gama de informações que possibilitem ao aluno, saber, saber fazer e saber intervir. Neste sentido toda sistematização teórica estará articulada ao fazer e todo fazer articulado à reflexão</p>
            <p className="paragrafo">Este processo de aprender fazendo, possibilitará ao aluno aprimorar-se, reelaborar os conhecimentos e ampliar sua compreensão sobre o mundo e sobre a sua realidade.</p>

            <Image className="imagemFinal" src="/escola.png" width={1920} height={1080} alt='foto1'></Image>
        </>
    );
}