import PostTemplate from "Components/PostTemplate";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <PostTemplate fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Pietro</h3>
      <img
        src="https://github.com/pdienstmann.png"
        alt="Foto do Pietro sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        venenatis turpis orci, id lacinia risus mollis et. Pellentesque
        vulputate elit non rhoncus iaculis. Nunc ut dictum metus, sit amet
        lacinia ligula. Phasellus mollis nibh at eleifend ullamcorper. Ut rutrum
        imperdiet dolor in vestibulum. Donec eu mauris mauris. Phasellus
        consectetur facilisis urna, vel congue nibh lobortis id. Quisque a
        tincidunt sem. Donec quis pellentesque odio, id tempor augue. Curabitur
        diam tortor, porttitor ut arcu sed, facilisis porta mi. Sed sodales orci
        mollis orci consequat consequat. Quisque id felis tempor augue malesuada
        dictum in sed diam. Vivamus efficitur sit amet ipsum non euismod. Donec
        iaculis mi et enim blandit, sed rhoncus odio convallis. Aliquam in dui
        finibus urna iaculis luctus sit amet eget enim. Integer lobortis
        faucibus arcu vel cursus. Fusce sit amet scelerisque tellus. Sed
        ullamcorper felis rutrum turpis sodales gravida.
      </p>
      <p className={styles.paragrafo}>
        Fusce at lectus in erat efficitur condimentum at nec nisl. Vivamus
        volutpat lacus tortor, in accumsan ipsum pellentesque a. Maecenas ac
        neque sapien. In tellus elit, feugiat quis velit sed, sodales lacinia
        tortor. Aliquam lorem sem, cursus nec ante vitae, egestas tincidunt
        nisi. Nam risus erat, finibus nec velit nec, vehicula iaculis sem.
        Maecenas ante eros, pretium et dapibus non, tristique non urna.
        Suspendisse orci lectus, dapibus eu sem ac, porttitor ornare velit.
        Praesent tristique quis diam quis feugiat. Phasellus rutrum purus
        tempus, aliquet dolor in, imperdiet quam. Praesent mauris libero,
        volutpat quis tortor at, porttitor accumsan neque. Morbi gravida rhoncus
        turpis, at sagittis felis tristique quis. Fusce rutrum eros neque, vel
        vestibulum libero molestie et.
      </p>
      <p className={styles.paragrafo}>
        Phasellus augue augue, facilisis sed facilisis eu, viverra finibus sem.
        Pellentesque id felis scelerisque, eleifend nisi ut, egestas justo.
        Proin tincidunt convallis efficitur. Etiam egestas ligula sapien, ac
        dapibus dui molestie eget. Praesent placerat elementum libero. Nullam
        faucibus nulla eros, a tincidunt orci hendrerit eget. Nulla facilisi.
        Nulla vitae nunc at lorem pulvinar vulputate. Aliquam porta sapien
        tellus, vel dignissim quam dictum sed. Integer tincidunt, purus eget
        tempus placerat, libero mauris fermentum nulla, a rutrum mi nisl eget
        erat. Praesent quis gravida turpis.
      </p>
    </PostTemplate>
  );
}

export default AboutMe;
