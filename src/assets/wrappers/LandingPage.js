import styled from 'styled-components'

const Wrapper = styled.main`

.wrapper {
  height: 40vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

.container-wrapper {
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(62, 204, 0, .8) 0%, rgba(55, 207, 59, 1) 100%), url('https://album.mediaset.es/eimg/2020/04/01/Fagw0vREqPnTbfcRoKSHm6.jpg?w=1200');
  background-size: 100% auto;
  background-repeat: no-repeat;
  border: var(--border);
  animation: animates 20s infinite;
}

@keyframes animates {
  0% {
      background-position: center right;
  }
  50% {
      background-position: bottom left;
  }
  100% {
      background-position: center right;
  }
}

.brand-center {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  padding: 0 15px;
  width: 80%;
  color: #fff;
  text-align: center;
}

.brand-center h1 {
  letter-spacing: 1mm;
  font-weight: 300;
  color: rgb(0, 66, 13);
}

.brand-center p {
  position: relative;
  font-size: 3rem;
  font-weight: 600;
  width: max-content;
  margin: auto;
  letter-spacing: 1mm;
  color: var(--secondary-color);
}
.container-content {
  width: 90%;
  margin: 20px auto;
  padding: 20px;
}

.btn_prev {
  position: fixed;
  left: 0px;
  top: 5%;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px !important;
  outline: none !important;
  padding: 5px 50px !important;
  color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity)) !important;
  font-size: 14px;
  border: none;
}
.btn_prev:hover {
  background-color: rgba(55, 207, 59, 1);
  color: rgba(255, 255, 255, 1) !important;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 1rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card_ {
  position: relative;
  display: block;
  width: 100%;
  height: 22.5rem;
  border-radius: 40px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 2px 2px 3px rgba(0,0,0,.3);
  border: 1px solid #e1e1e1;
  margin: auto;
}

.card__code {
  position: absolute;
  top: 30px;
  right: 0;
  background: rgba(55, 207, 59, 1);
  color: #fff;
  padding: 10px;
  border-radius: 50px 0px 0px 50px;
  box-shadow: 2px 2px 3px rgba(0,0,0,.3);
}

.card__image {
  width: 100%;
  height: 100%;
}

.card_:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: 40px 0 0 0;
  background-color: #fff;
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card__title {
  font-size: 1em;
  margin: 0 0 .3em;
  color: #6A515E;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";
  font-size: .8em;
  color: #D7BDCA;
}

.card__status {
  font-size: .8em;
  color: #b399a6;
}

.card__header-text {
  margin: auto;
  width: 90%;
}
`
export default Wrapper
