## RadioPlayer

RadioPlayer es un reproductor de audio, creado para embeber un flujo de audio
(audio streaming) para una radio.

El proyecto se ha hecho, con la necesidad y la intencion
de poder cubrir todos los navegadores web posibles, con todos los formatos posibles.

Para ellos se usa el reproductor de audio nativo de html5 en los casos que sea
posible, y en caso de no tener tal funcionalidad, se usa un flashplayer para
poder hacerlo. Con el fin de poder tambien cubrir soporte en todos los
formatos, el flashplayer tiene la capaicidad de reproducir flujos de audio en
formato ogg.

Se han tomado partes e ideas de otros proyectos; jplayer
(http://www.jplayer.org/) y ffmp3
(https://github.com/fbricker/ffmp3)

Por el momento se ha probado que funciona con:

#### Formatos de audio:

    . mp3
    . ogg

#### Navegadores

    . html5/audio
    . no html5/audo a traves de un fallback flashplayer (ffmp3)


