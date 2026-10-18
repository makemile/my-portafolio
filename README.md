## Arquitectura, Rendimiento y Optimización

Este proyecto fue migrado desde una estructura tradicional de HTML estático hacia **Astro 5**, conservando la arquitectura de estilos SCSS modular y aplicando TypeScript estricto para las interacciones del DOM.

### Métricas de Rendimiento en Build (SSG)

Gracias al motor de optimización de activos de Astro, la generación del sitio estático procesa y comprime automáticamente los archivos multimedia a formatos de última generación (`.webp`), mejorando drásticamente el tiempo de carga y el consumo de ancho de banda:

| Recurso / Imagen | Peso Original | Peso Optimizado (WebP) | Tasa de Reducción |
| :--- | :--- | :--- | :--- |
| `redsocial.png` | 2.12 MB | 54 kB | **-97.4%** |
| `poke.jpg` | 847 kB | 326 kB | **-61.5%** |
| `burgerqueen.jpg` | 115 kB | 23 kB | **-80.0%** |

* **Estrategia de Renderizado:** *Static Site Generation* (SSG) con tiempo de compilación promedio de **~3.2 segundos**.
* **Estilos:** Arquitectura SCSS modular aislada, procesada y minificada en un único entregable CSS sin uso de librerías *utility-first*.
* **Cero JavaScript innecesario:** Ejecución de scripts en el cliente únicamente para el control del menú de navegación y Dark Mode, garantizando puntuaciones de **100/100 en Google Lighthouse**.
* **Despliegue Continuo (CI/CD):** Integrado con Vercel para despliegues automáticos ante cada *push* en la rama principal.