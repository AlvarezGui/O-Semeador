import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'

export default function Home() {

  return (
    <>
      <Header></Header>

      {/* Paragrafo 1 */}
      <div>
        <div className='pragrafoDireita'>
          <h1 className='tituloLaranja'> Faça parte dessa história, ajude-nos a mudar vidas, seja um doador! </h1>

          <p>Desde 1974, a Escola Metodista "O Semeador" é uma instituição beneficente, sem fins lucrativos que atende crianças e  adolescentes com deficiência intelectual, múltiplas deficiências e autismo a partir dos 06 anos de idade. Atualmente a escola é referência no atendimento de alunos com TEA (Transtorno do Espectro Autista).</p>
          <p>Nosso trabalho se baseia nas diversas formas de linguagem, usando educação, arte, tecnologia, cultura e o lúdico como estratégias para prover o aprendizado, desenvolvimento e formação dos alunos.</p>
        </div>

        <Image className='imgEsquerda' src="/1.png" width={600} height={600} alt='foto1'></Image>
      </div>

      {/* Paragrafo 2 */}
      <div>
        <div className='pragrafoEsquerda'>
          <h1 className='tituloAzul'> Ajude-nos a transformar vidas, multiplique nossas ações e fortaleça nosso objetivo. </h1>
          <h1 className='tituloLaranja'> Seja um Semeador Voluntário! </h1>

          <p>Nossas ações são financiadas na sua grande maioria por verbas públicas e parcerias que estabelecemos com aqueles que acreditam em nossos trabalhos.</p>
          <p>Atualmente estamos passando por uma situação muito difícil, pois corremos o risco de fecharmos nossas portas, pois recebemos uma de nossas verbas com a redução de 50%. Nossos educandos precisam muito da ajuda de todos, pois a grande maioria é de vulnerabilidade social.</p>
          <p>Para continuarmos a fornecer aos alunos instalações de amparo, educação de qualidade, e inclusão ativa na sociedade civil, precisamos que você junte-se a nós nessa causa, e seja um Semeador Voluntário.</p>
        </div>

        <Image className='imgDireita' src="/1.png" width={600} height={600} alt='foto1'></Image>
      </div>

      {/* Paragrafo 3 */}
      <Container className='espacamento'>

        <h1 className='tituloLaranja'> Sua doação mudará o rumo desta história e os alunos continuarão a: </h1>

        <div className='tamanhoDivNumeros'>
          {/* 1 */}
          <div className='tamanhoItens'>
            <div className='itensAzul'>
              <h1 className='h1Insano'> 1 </h1>
            </div>
            <p className='itensTexto'>Desenvolver a apreciação pela diversidade individual;</p>
          </div>

          {/* 2 */}
          <div className='tamanhoItens'>
            <div className='itensAzul'>
              <h1 className='h1Insano'> 2 </h1>
            </div>
            <p className='itensTexto'>Adquirir experiência direta com a variação natural das capacidades humanas;</p>
          </div>
          
          {/* 3 */}
          <div className='tamanhoItens'>
            <div className='itensAzul'>
              <h1 className='h1Insano'> 3 </h1>
            </div>
            <p className='itensTexto'>Demonstrar crescente responsabilidade e melhora na aprendizagem, através do convívio entre os colegas;</p>
          </div>
        </div>

        <div className='tamanhoDivNumeros'>
          {/* 4 */}
          <div className='tamanhoItens'>
            <div className='itensAzul'>
              <h1 className='h1Insano'> 4 </h1>
            </div>
            <p className='itensTexto'>Serem melhores preparados para a vida adulta em uma sociedade diversificada através da educação em salas de aula e materiais especiais;</p>
          </div>

          {/* 5 */}
          <div className='tamanhoItens'>
            <div className='itensAzul'>
              <h1 className='h1Insano'> 5 </h1>
            </div>
            <p className='itensTexto'>Frequentemente experimentar apoio acadêmico adicional da parte de nossos psicólogos;</p>
          </div>

          {/* 6 */}
          <div className='tamanhoItens'>
            <div className='itensAzul'>
              <h1 className='h1Insano'> 6 </h1>
            </div>
            <p className='itensTexto'>Vivenciar as experiências de interação e trabalho reais, com parcerias de estágio.</p>
          </div>
        </div>

        <Image className='imagemFinal' src="/1.png" width={600} height={600} alt='foto1'></Image>

      </Container>
    </>
  )
}
