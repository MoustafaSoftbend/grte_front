import { useForm, SubmitHandler } from "react-hook-form";
import MuiDrawer from "../Components/MuiDrawer";
import Image from "next/image";

const OuvrageForm = () => {
  return (
    <>
      <MuiDrawer />
      <div className="ouvrage-profile">
        <div className="ouvrage-profile-img">
          <Image className="Ouvrage-profile" src="" />
          <div className="fiche-technique">
            <h1 className="Titre-ouvrage">
              Ligne 220 KV Ain Benian Ouled Fayet
            </h1>
            <h1 className="etage">220KV</h1>
            <h1 className="consistance">20KM</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
              voluptates?
            </p>
          </div>
        </div>
      </div>
      <form action="">
        <h1 className="ouvrage-form-title">Détail Géneral</h1>
        <label htmlFor="AP">
          Contrat N°111/STOS/2021
          <input name="contrat" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="AP">
          AP N°111/STOS
          <input name="AP" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="Région">
          Région Alger
          <input name="Région" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="Wilaya">
          Wilaya Alger
          <input name="Wilaya" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="Contructeur">
          Contructeur Alger
          <input name="Contructeur" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="TYPE">
          TYPE
          <input name="TYPE" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="Tension (kV)">
          Tension (kV)
          <input name="Tension_kV" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="NBR">
          NBR
          <input name="NBR" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="PUISSANCE MVA">
          PUISSANCE MVA
          <input name="PUISSANCE_MVA" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="Total puissance">
          Total puissance
          <input name="Total_puissance" type="text" className="ouvrage-input" />
        </label>
        <br />
        <h1 className="ouvrage-form-title">Marché</h1>
        <label htmlFor="AP">
          Contrat N°111/STOS/2021
          <input name="AP" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="contrat">
          Contrat N°111/STOS/2021
          <input name="contrat" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="constructeur">
          <table>
            <tr>
              <td>Constructeur</td>
            </tr>
            <tr>
              <td>Elsweedy</td>
            </tr>
            <tr>
              <td>Cosider</td>
            </tr>
          </table>
          <input name="constructeur" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="montant">
          2,000,000 DA
          <input name="montant" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="fourniture">
          Fourniture
          <input name="fourniture" type="text" className="ouvrage-input" />
        </label>
        <label htmlFor="GC">
          GC
          <input name="GC" type="text" className="ouvrage-input" />
        </label>
      </form>
    </>
  );
};

export default OuvrageForm;
