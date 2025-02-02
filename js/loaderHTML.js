const loaderHTML = {

    // HEADER
    loaderHeader: function() {
        return `
        <!-- HEADER, NAV -->
  <header id="header">
    <a href="index.html" class="header-logo">
      <img src="imagenes/logo-maker-planet.svg" alt="MakerPlanet Logo">
    </a>

    <nav class="header-nav">
      <a class="cont-busqueda lupa">
        <img src="imagenes/header/search-icon.png" alt="Buscar productos" class="buscar cr-lupa">
        <img src="imagenes/header/x.png" alt="Cerrar búsqueda" class="cerrar cr-lupa">
        <input type="checkbox" class="search cr-lupa">
      </a>
      <a href="#">
        <img src="imagenes/header/user-icon.png" alt="Cuenta de usuario">
      </a>
      <a href="carrito.html">
        <img src="imagenes/header/cart-icon.png" alt="Carrito de compras">
      </a>
      <a class="cont-busqueda menu">
        <img src="imagenes/header/menu-icon.png" alt="Menú desplegable" class="buscar cr-menu">
        <img src="imagenes/header/x.png" alt="Cerrar búsqueda" class="cerrar cr-menu">
        <input type="checkbox" class="search cr-menu">
      </a>
    </nav>
  </header>
  <!-- HEADER, NAV AUXILIAR -->
  <aside id="nav-extra">
    <div class="container-busqueda">
      <search class="c-busq">
        <img src="imagenes/header/search-icon.png" alt="Buscar productos">
        <input type="text" name="" id="" placeholder="Buscar...">
      </search>
      <ul>
        <li><a>¿Y qué te parece...?</a></li>
        <li><a href="prod-lego.html">Productos de LEGO</a></li>
        <li><a href="prod-megabloks.html">Productos de MEGA BLOKS</a></li>
        <li><a href="prod-magnatiles.html">Productos de MAGNA-TILES</a></li>
        <li><a href="prod-meccano.html">Productos de MECCANO</a></li>
      </ul>
    </div>
    <nav class="container-menu">
      <ul>
        <li><a href="prod-lego.html">LEGO</a>
          <ul>
            <li><a href="prod-lego.html#primer-prod">LEGO STAR WARS</a></li>
            <li><a href="prod-lego.html#productos-hp">LEGO HARRY POTTER</a></li>
            <li><a href="prod-lego.html#productos-d">LEGO DISNEY</a></li>
          </ul>
        </li>
        <li><a href="prod-megabloks.html">MEGA BLOKS</a>
          <ul>
            <li><a href="prod-megabloks.html#primer-prod">MEGA BLOKS KIDS</a></li>
            <li><a href="prod-megabloks.html#productos-hp">MEGA BLOKS HALLO</a></li>
            <li><a href="prod-megabloks.html#productos-d">MEGA BLOKS DRAGONS</a></li>
          </ul>
        </li>
        <li><a href="prod-magnatiles.html">MAGNA-TILES</a>
          <ul>
            <li><a href="prod-magnatiles.html#primer-prod">MAGNA-TILES NIÑOS</a></li>
            <li><a href="prod-magnatiles.html#productos-hp">MAGNA-TILES DESIERTO</a></li>
            <li><a href="prod-magnatiles.html#productos-d">MAGNA-TILES MAR</a></li>
          </ul>
        </li>
        <li><a href="prod-meccano.html">MECCANO</a>
          <ul>
            <li><a href="prod-meccano.html#primer-prod">MECCANO RACE</a></li>
            <li><a href="prod-meccano.html#productos-hp">MECCANO SKY</a></li>
            <li><a href="prod-meccano.html#productos-d">MECCANO WHEELS</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    
  </aside>
        `;
    },

    // FOOTER
    loaderFooter: function() {
        return `
        <!-- FOOTER -->
  <footer id="footer">
    <div class="footer-arriba">
      <div>
        <img class="f-icon" src="imagenes/footer/world.png" alt="icono idoma">
        <h4>Español</h4>
      </div>
      <div>
        <img class="f-icon" src="imagenes/footer/mapa.png" alt="icono ubicacion">
        <h4>España</h4>
      </div>
      <div>
        <img class="f-icon" src="imagenes/footer/star.png" alt="icono valoraciones">
        <h4>Valoración</h4>
      </div>
    </div>

    <hr>

    <div class="footer-medio">
      <ul>
        <li class="f-m-title"><a href="prod-lego.html">LEGO</a>
          <ul>
            <li><a href="prod-lego.html#primer-prod">LEGO STAR WARS</a></li>
            <li><a href="prod-lego.html#productos-hp">LEGO HARRY POTTER</a></li>
            <li><a href="prod-lego.html#productos-d">LEGO DISNEY</a></li>
          </ul>
        </li>
        <li class="f-m-title"><a href="prod-megabloks.html">MEGA BLOKS</a>
          <ul>
            <li><a href="prod-megabloks.html#primer-prod">MEGA BLOKS KIDS</a></li>
            <li><a href="prod-megabloks.html#productos-hp">MEGA BLOKS HALLO</a></li>
            <li><a href="prod-megabloks.html#productos-d">MEGA BLOKS DRAGONS</a></li>
          </ul>
        </li>
        <li class="f-m-title"><a href="prod-magnatiles.html">MAGNA-TILES</a>
          <ul>
            <li><a href="prod-magnatiles.html#primer-prod">MAGNA-TILES NIÑOS</a></li>
            <li><a href="prod-magnatiles.html#productos-hp">MAGNA-TILES DESIERTO</a></li>
            <li><a href="prod-magnatiles.html#productos-d">MAGNA-TILES MAR</a></li>
          </ul>
        </li>
        <li class="f-m-title"><a href="prod-meccano.html">MECCANO</a>
          <ul>
            <li><a href="prod-meccano.html#primer-prod">MECCANO RACE</a></li>
            <li><a href="prod-meccano.html#productos-hp">MECCANO SKY</a></li>
            <li><a href="prod-meccano.html#productos-d">MECCANO WHEELS</a></li>
          </ul>
        </li>
      </ul>
    </div>

    <hr>

    <div class="footer-abajo">
      <div class="footer-logo">
        <a href="index.html">
          <img src="imagenes/logo-maker-planet.svg" alt="MakerPlanet Logo">
        </a>
      </div>
      <a href="politicas-privacidad.html">Política de privacidad</a>
      <a href="contactanos.html">Contáctanos</a>
      <h5>© <time datetime="2025-01-01">2025</time> Sergio Delgado López</h5>
      <div class="footer-redes">
        <a href="#"><img class="f-icon" src="imagenes/footer/facebook.png" alt="icono facebook"></a>
        <a href="#"><img class="f-icon" src="imagenes/footer/twitter.png" alt="icono twitter"></a>
        <a href="#"><img class="f-icon" src="imagenes/footer/instagram.png" alt="icono instagram"></a>
        <a href="#"><img class="f-icon" src="imagenes/footer/youtube.png" alt="icono youtube"></a>
      </div>
    </div>

  </footer> 
        `;
    }
};

export default loaderHTML;