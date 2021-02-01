import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export default function Home() {
  return (
    <>
      <div className='content' id='main-content-home'>
        <h1 className='title' id='home-title'>Assuntos</h1>

        <main id='home'>
          <nav id='home-navigation'>
            <ul>
              <li>
                <Link>
                  <img className='link-img' src="https://www.kyb.com.br/catalogo/administracao/assets_admin/plugins/fullPage.js/examples/imgs/bg2.jpg" alt="uma imagem" />
                  <p className='paragraph-img'>Seleção Natural</p>
                </Link>
              </li>

              <li>
                <Link>
                  <img className='link-img' src="https://www.kyb.com.br/catalogo/administracao/assets_admin/plugins/fullPage.js/examples/imgs/bg2.jpg" alt="uma imagem" />
                  <p className='paragraph-img'>Seleção Artificial</p>
                </Link>
              </li>

              <li>
                <Link>
                  <img className='link-img' src="https://www.kyb.com.br/catalogo/administracao/assets_admin/plugins/fullPage.js/examples/imgs/bg2.jpg" alt="uma imagem" />
                  <p className='paragraph-img'>Derivação Genética</p>
                </Link>
              </li>

              <li>
                <Link>
                  <img className='link-img' src="https://www.kyb.com.br/catalogo/administracao/assets_admin/plugins/fullPage.js/examples/imgs/bg2.jpg" alt="uma imagem" />
                  <p className='paragraph-img'>Darwinismo</p>
                </Link>
              </li>

              <li>
                <Link>
                  <img className='link-img' src="https://www.kyb.com.br/catalogo/administracao/assets_admin/plugins/fullPage.js/examples/imgs/bg2.jpg" alt="uma imagem" />
                  <p className='paragraph-img'>Lamarckismo</p>
                </Link>
              </li>

              <li>
                <Link>
                  <img className='link-img' src="https://www.kyb.com.br/catalogo/administracao/assets_admin/plugins/fullPage.js/examples/imgs/bg2.jpg" alt="uma imagem" />
                  <p className='paragraph-img'>Teoria Endossimbiótica</p>
                </Link>
              </li>

            </ul>
          </nav>
        </main>
      </div>

      <section className='content'>
        <h2 className='subtitle'>Exércicios</h2>

        <nav id='exercise-navigation'>
          <ul>
            <li></li>
          </ul>
        </nav>
      </section>
    </>
  );
}