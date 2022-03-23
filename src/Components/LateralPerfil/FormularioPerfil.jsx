/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import Profile from "../../assets/img/profile.jpg";
import './index.css'

export default function FormularioPerfil() {
  return (
    <>

<div class="card col-lg-3 col-12">
  <div className="">
    
  <img  className="img-perfilx" src={"https://media-exp1.licdn.com/dms/image/C5603AQEtrTYiKp9_Vw/profile-displayphoto-shrink_200_200/0/1620304176478?e=1653523200&v=beta&t=M90IL0_CD-VPzuuZsNbeVmHgASiaBl1Ev5avgbsQQz8"} class="card-img-top" alt="..."/>
  <div class="">
  <p id="nome">Anônimo</p>
  <p id="genero">Anônimo</p>
    <button type="button" class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#UpdateModal">
          Edite <i class="fas fa-pencil-alt"></i>
        </button>  </div>
  </div>
</div>


      {/*  Modal  */}
      <div
        class="modal fade"
        id="UpdateModal"
        tabindex="-1"
        aria-labelledby="UpdateModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <p class="modal-title" id="UpdateModalLabel">
                Edite seu perfil
              </p>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <label class="m-auto">Nome de usario:</label>
                <br />

                <input
                  type="text"
                  name="fname"
                  placeholder="o nome que sera exibido"
                  id="name"
                />
                <br />
                <button
                  type="button"
                  class="btn-cor-profile mt-2"
                  onclick="updateProfileName()"
                >
                  Atualizar
                </button>
                <br />
                <label>Genero:</label>
                <br />
                <input type="text" placeholder="Genero" id="generoValor" />
                <br />
                <button
                  type="button"
                  class="btn-cor-profile mt-2"
                  onclick="updateProfileGenero()"
                >
                  Atualizar
                </button>
                <br />

                <label for="fname">Carta de apresentação</label>
                <br />
                <textarea type="text" value="biografia" id="bioText"></textarea>
                <br />
                <button
                  type="button"
                  class="btn-cor-profile"
                  onclick="updateProfileBio()"
                >
                  Atualizar
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="submit"
                class="btn-cor-profile"
                data-bs-dismiss="modal"
                onclick="updateProfile()"
              >
                Finalizar atualizações
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
