import React from "react";

export default function AboutData() {
  return (
    <div className=" space-y-8">
      <h2 className=" text-4xl">
        ¿Qué datos personales recogemos y por qué los recogemos?{" "}
      </h2>
      <h3 className="text-2xl indent-4">General</h3>
      <p className="text-xl text-justify indent-8">
        La aplicación Zorvax, no recoge ningún tipo de dato ingresado por los
        usuarios, ya que toda la información que guarda cada usuario, es
        almacenada temporalmente en una base de datos local creada en su
        teléfono, no solicitamos inicio de sesión y no se necesita de conexión a
        internet para poder utilizarla.
      </p>
      <h3 className="text-2xl indent-4">Publicidad</h3>
      <p className="text-xl text-justify indent-8">
        Es probable que Google guarde o recupere información relacionada con la
        publicidad personalizada para nuestros usuarios ya que nuestra App
        contiene publicidad de Google Ads.
      </p>
    </div>
  );
}
