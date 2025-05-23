<script>
  let slideAtual = 0;

  function mudarSlide(direcao) {
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    slideAtual = (slideAtual + direcao + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
  }
</script>