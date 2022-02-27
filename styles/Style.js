import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/*=============== VARIABLES CSS ===============*/
:root {
  --header-height: 3.5rem;

  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  /*
        Purple: hsl(250, 66%, 75%)
        Blue: hsl(207, 90%, 72%)
        Pink: hsl(356, 66%, 75%)
        Teal: hsl(174, 63%, 62%)
  */
  
  /* --first-hue: 250; */
  --first-hue: 219;
  --sat: 66%;
  --lig: 75%;
  --second-hue: 219;
  --first-color: hsl(var(--first-hue), var(--sat), var(--lig));
  --first-color-alt: hsl(var(--first-hue), var(--sat), 71%); /* -4% */
  --title-color: hsl(var(--second-hue), 15%, 95%);
  --text-color: hsl(var(--second-hue), 8%, 75%);
  --text-color-light: hsl(var(--second-hue), 4%, 55%);
  --body-color: hsl(var(--second-hue), 48%, 8%);
  --container-color: hsl(var(--second-hue), 32%, 12%);

  /*========== Font and typography ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/

  --body-font: "Poppins", sans-serif;
  --biggest-font-size: 1.75rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.813rem;
  --smaller-font-size: 0.75rem;
  --tiny-font-size: 0.625rem;

  /*========== Font weight ==========*/

  --font-medium: 500;
  --font-semibold: 600;

  /*========== z index ==========*/

  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}

/* Responsive typography */

@media screen and (min-width: 968px) {
  :root {
    --biggest-font-size: 2.5rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }
}

/*=============== BASE ===============*/

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body,
button,
input,
textarea {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}

body {
  background-color: var(--body-color);
  color: var(--text-color);
  transition: 0.4s; /* for light mode animation */
}

h1,
h2,
h3 {
  color: var(--title-color);
  font-weight: var(--font-semibold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
}

/*=============== THEME ===============*/

.change-theme {
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.3s;
}

.change-theme:hover {
  color: var(--first-color);
}

/*========== Variables Light theme ==========*/

body.light-theme {
  --title-color: hsl(var(--second-hue), 15%, 15%);
  --text-color: hsl(var(--second-hue), 8%, 35%);
  --body-color: hsl(var(--second-hue), 100%, 99%);
  --container-color: #fff;
}

/*========== 
    Color changes in some parts of 
    the website, in light theme
==========*/

.light-theme .scroll-header {
  box-shadow: 0 2px 4px hsla(0, 0%, 1%, 0.1);
}

.light-theme .home__social::after,
.light-theme .footer__social-link {
  background-color: var(--title-color);
}

.light-theme .home__social-link,
.light-theme .home__scroll,
.light-theme .button,
.light-theme .button:hover,
.light-theme .active-work,
.light-theme .footer__title,
.light-theme .footer__link,
.light-theme .footer__copy {
  color: var(--title-color);
}


.light-theme .skills__content,
.light-theme .services__card,
.light-theme .work__card,
.light-theme .testimonial__card,
.light-theme .contact__card {
  box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
}

.light-theme::-webkit-scrollbar {
  background-color: hsl(var(--second-hue), 8%, 66%);
}

.light-theme::-webkit-scrollbar-thumb {
  background-color: hsl(var(--second-hue), 8%, 54%);
}

.light-theme::-webkit-scrollbar-thumb:hover {
  background-color: hsl(var(--second-hue), 8%, 44%);
}

/*=============== REUSABLE CSS CLASSES ===============*/

.container {
  max-width: 968px;
  margin-left: 1rem;
  margin-right: 1rem;
}

.grid {
  display: grid;
  gap: 1.25rem;
}

.main {
  overflow: hidden;
}

.section {
  padding: 4.5rem 0 1rem;
}

/*=============== HEADER & NAV===============*/
/* Active link */

.active-link {
  background: linear-gradient(
    180deg,
    hsla(var(--first-hue), var(--sat), var(--lig), 1),
    hsla(var(--first-hue), var(--sat), var(--lig), 0.2)
  );
  box-shadow: 0 0 16px hsla(var(--first-hue), var(--sat), var(--lig), 0.2);
  color: var(--title-color);
}

/* Change background header */

.scroll-header {
  box-shadow: 0 4px 4px hsla(0, 0%, 4%, 0.3);
}

/*=============== HOME ===============*/

/*=============== BUTTONS ===============*/

.button {
  display: inline-block;
  background-color: var(--first-color);
  color: var(--body-color);
  padding: 0.75em 1em;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  transition: 0.4s;
}

.button:hover {
  background-color: var(--first-color-alt);
  color: var(--body-color);
}

.button--ghost {
  background-color: transparent;
  border: 2px solid var(--first-color);
  color: var(--first-color);
}

/*=============== ABOUT ===============*/

/*=============== SKILLS ===============*/

.skills .bxs-badge-check {
  font-size: 1rem;
  color: var(--first-color);
}

/*=============== SERVICES ===============*/


/* Services modal */

/*Active modal*/

/*=============== WORK ===============*/
.work__container {
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
}

.work__filters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 0.75rem;
  margin-bottom: 2rem;
}

.work__item {
  cursor: pointer;
  color: var(--title-color);
  padding: 0.25rem 0.75rem;
  font-weight: var(--font-medium);
  border-radius: 1rem;
}
.work__card {
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: 1rem;
  width: 18rem;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s box-shadow;

  :hover  {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 0.3s;
  }
}

/* Active item work*/
.active-work {
  background-color: var(--first-color);
  color: var(--body-color);
}
/*=============== TESTIMONIAL ===============*/
.testimonial__card {
  background-color: var(--container-color);
  padding: 1.25rem 1.5rem;
  border-radius: 1.5rem;
  margin-bottom: 3rem;
}

.testimonial__img {
  width: 60px;
  border-radius: 3rem;
  margin-bottom: 1rem;
}

.testimonial__name {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  margin-bottom: 0.25rem;
}

.testimonial__description {
  font-size: var(--normal-font-size);
}
/* Swiper class */
.swiper-pagination-bullet {
  background-color: var(--text-color-light);
  transition: 0.5s;
}

.swiper-pagination-bullet-active {
  background-color: var(--first-color);
}

/*=============== CONTACT ===============*/

/*=============== FOOTER ===============*/

/*=============== SCROLL BAR ===============*/

::-webkit-scrollbar {
  width: 0.6rem;
  border-radius: 0.5rem;
  background-color: hsl(var(--second-hue), 8%, 38%);
}

::-webkit-scrollbar-thumb {
  background-color: hsl(var(--second-hue), 8%, 26%);
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: hsl(var(--second-hue), 8%, 20%);
}

/*=============== BREAKPOINTS ===============*/
/* For small devices */

@media screen and (max-width: 320px) {


  .work__item {
    font-size: var(--small-font-size);
  }

  .work__filters {
    column-gap: 0.25rem;
  }
}
/* For medium devices */
@media screen and (min-width: 576px) {}

/* For large devices */
@media screen and (min-width: 992) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }

  .section {
    padding: 6.5rem 0 1rem;
  }

  .work__card{
    padding: 1.25rem;
  }


  .testimonial__container{
    width: 750px;
  }

  .testimonial__card{
    padding: 1.5rem 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .container{
    margin-left: auto;
    margin-right: auto;
  }

  .work__card{
    padding: 1.25rem;
  }

  .work__img{
    margin-bottom: 1rem;
  }

  .testimonial__container{
    width: 750px;
  }

  .testimonial__card{
    padding: 1.5rem 2rem;
  }
}

@media screen and (min-width: 1440px) {
  .container{
    margin-left: auto;
    margin-right: auto;
  }

  .work__card{
    padding: 1.25rem;
  }

  .testimonial__container{
    width: 750px;
  }

  .testimonial__card{
    padding: 1.5rem 2rem;
  }
}
`

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: var(--h2-font-size);
  color: var(--first-color);
  margin-bottom: 2rem;

  @media screen and (min-width: 992) {
    margin-bottom: 3.5rem;
  }
`

export const SectionSubtitle = styled.span`
  text-align: center;
  display: block;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);

  .light-theme && {
    color: var(--text-color);
  }
`
